import React, { useEffect, useRef } from "react";

/**
 * InteractivePixelCanvas
 * Inspired by Sarvam AI (Indus) and the generative pixel mosaic artwork.
 * Renders an interactive 2D cellular pixel grid with:
 * - Upper Botanical / Peacock Foliage (Emerald, Lime, Forest, Mint Rosette)
 * - Mid Glacial Flow (Electric Cyan, Sky Blue, Arctic Foam, Pure White)
 * - Lower Abyssal Bedrock (Midnight Navy, Dark Teal, Obsidian)
 * - Real-time cursor proximity bloom, luminescence flash, scale spring, and smooth phosphor decay.
 */
export const InteractivePixelCanvas = ({
  className = "",
  containerRef,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Grid config
    const CELL_SIZE = 14; // Size of each pixel block in CSS pixels
    const GAP = 2; // Gap between pixel tiles
    const HOVER_RADIUS = 150; // Proximity detection radius
    const DECAY_RATE = 0.92; // Damping rate of phosphor trail

    let cols = 0;
    let rows = 0;
    let cells = [];

    // Mouse & interaction state
    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
      lastMoveTime: 0,
    };

    // Color palettes extracted from the reference pixel mosaic artwork
    const PALETTE_GREENS = [
      { r: 20, g: 83, b: 45 },    // #14532d deep pine
      { r: 22, g: 101, b: 52 },   // #166534 forest green
      { r: 21, g: 128, b: 61 },   // #15803d leaf green
      { r: 34, g: 197, b: 94 },   // #22c55e vibrant emerald
      { r: 74, g: 222, b: 128 },  // #4ade80 bright mint
      { r: 132, g: 204, b: 22 },  // #84cc16 spring lime
      { r: 163, g: 230, b: 53 },  // #a3e635 chartreuse
      { r: 190, g: 242, b: 100 }, // #bef264 pale lime
    ];

    const PALETTE_ROSETTE = [
      { r: 167, g: 243, b: 208 }, // #a7f3d0 mint highlight
      { r: 134, g: 239, b: 172 }, // #86efac soft emerald
      { r: 187, g: 247, b: 208 }, // #bbf7d0 luminous rosette
      { r: 217, g: 249, b: 157 }, // #d9f99d radiant lime
    ];

    const PALETTE_CYAN_FLOW = [
      { r: 2, g: 132, b: 199 },   // #0284c7 ocean blue
      { r: 14, g: 165, b: 233 },  // #0ea5e9 cerulean
      { r: 56, g: 189, b: 248 },  // #38bdf8 sky blue
      { r: 125, g: 211, b: 252 }, // #7dd3fc electric cyan
      { r: 186, g: 230, b: 253 }, // #bae6fd ice blue
      { r: 224, g: 242, b: 254 }, // #e0f2fe arctic white
      { r: 255, g: 255, b: 255 }, // #ffffff pure white crest
    ];

    const PALETTE_NAVY_DARK = [
      { r: 11, g: 19, b: 43 },    // #0B132B midnight navy
      { r: 15, g: 23, b: 42 },    // #0f172a slate black
      { r: 8, g: 47, b: 73 },     // #082f49 deep sea teal
      { r: 3, g: 105, b: 161 },   // #0369a1 dark cerulean
      { r: 14, g: 116, b: 144 },  // #0e7490 deep cyan
    ];

    // Simple pseudo-random hash based on cell position for deterministic organic distribution
    const hash = (x, y) => {
      let h = (x * 374761393 + y * 668265263) ^ 0x5bf03635;
      h = (h ^ (h >> 13)) * 1274126177;
      return ((h ^ (h >> 16)) >>> 0) / 4294967295;
    };

    // Color assignment mirroring the uploaded artwork
    const getBaseColorForCell = (col, row, totalCols, totalRows) => {
      const normX = col / totalCols;
      const normY = row / totalRows;
      const rnd = hash(col, row);

      // Distance to the circular rosette feather center (top-left / upper-mid quadrant)
      const rosetteCenterX = 0.22;
      const rosetteCenterY = 0.18;
      const distToRosette = Math.hypot(normX - rosetteCenterX, (normY - rosetteCenterY) * 1.3);

      // 1. Rosette / Mandala feather burst at upper left
      if (distToRosette < 0.12 && rnd > 0.2) {
        const color = PALETTE_ROSETTE[Math.floor(rnd * PALETTE_ROSETTE.length)];
        return { ...color, baseAlpha: 0.85 + rnd * 0.15 };
      }

      // 2. Glacial Flow & Cyan River (cuts across middle with diagonal drift)
      // Curve equation for the river band
      const riverCenterY = 0.52 + Math.sin(normX * Math.PI * 1.5) * 0.08 + (normX * 0.12);
      const distToRiver = Math.abs(normY - riverCenterY);

      if (distToRiver < 0.13) {
        // High likelihood of white / ice blue in the center of the flow
        let color;
        if (distToRiver < 0.04 && rnd > 0.4) {
          color = PALETTE_CYAN_FLOW[5 + Math.floor(rnd * 2)]; // ice white / pure white
        } else {
          color = PALETTE_CYAN_FLOW[Math.floor(rnd * PALETTE_CYAN_FLOW.length)];
        }
        return { ...color, baseAlpha: 0.85 + rnd * 0.15 };
      }

      // 3. Top Foliage / Botanical Greens
      if (normY < riverCenterY) {
        // Upper section: mix of emerald, lime, and deep pine
        let color;
        if (normY < 0.35 && rnd > 0.55) {
          // Lighter lime accents
          color = PALETTE_GREENS[3 + Math.floor(rnd * 5)];
        } else {
          color = PALETTE_GREENS[Math.floor(rnd * 5)];
        }
        return { ...color, baseAlpha: 0.75 + rnd * 0.25 };
      }

      // 4. Bottom Abyssal Bedrock
      const color = PALETTE_NAVY_DARK[Math.floor(rnd * PALETTE_NAVY_DARK.length)];
      return { ...color, baseAlpha: 0.8 + rnd * 0.2 };
    };

    // Initialize or resize the cellular grid
    const initGrid = () => {
      const container = containerRef?.current || canvas.parentElement;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);

      cols = Math.ceil(width / (CELL_SIZE + GAP));
      rows = Math.ceil(height / (CELL_SIZE + GAP));
      cells = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * (CELL_SIZE + GAP);
          const y = r * (CELL_SIZE + GAP);
          const baseColor = getBaseColorForCell(c, r, cols, rows);

          cells.push({
            col: c,
            row: r,
            x,
            y,
            cx: x + CELL_SIZE / 2,
            cy: y + CELL_SIZE / 2,
            r: baseColor.r,
            g: baseColor.g,
            b: baseColor.b,
            baseAlpha: baseColor.baseAlpha,
            energy: 0, // 0 = resting, 1 = peak hovered
            scale: 1,
            ambientPhase: (c * 0.12) + (r * 0.18),
          });
        }
      }
    };

    initGrid();

    // Resize listener
    const handleResize = () => {
      initGrid();
    };
    window.addEventListener("resize", handleResize);

    // Mouse listeners on container
    const container = containerRef?.current || canvas.parentElement;

    const handlePointerMove = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
      mouse.lastMoveTime = performance.now();
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    if (container) {
      container.addEventListener("pointermove", handlePointerMove, { passive: true });
      container.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    }

    // Animation Render Loop
    let startTime = performance.now();

    const render = (now) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      const mx = mouse.x;
      const my = mouse.y;
      const mouseIsRecent = now - mouse.lastMoveTime < 3000;

      const totalCells = cells.length;
      for (let i = 0; i < totalCells; i++) {
        const cell = cells[i];

        // 1. Proximity Bloom Calculation
        if (mouse.active && mouseIsRecent) {
          const dx = mx - cell.cx;
          const dy = my - cell.cy;
          const distSq = dx * dx + dy * dy;
          const radiusSq = HOVER_RADIUS * HOVER_RADIUS;

          if (distSq < radiusSq) {
            const dist = Math.sqrt(distSq);
            const proximity = 1 - (dist / HOVER_RADIUS);
            // Non-linear excitation for a crisp spotlight focus
            const excitation = Math.pow(proximity, 1.3);
            if (excitation > cell.energy) {
              cell.energy = excitation;
            }
          }
        }

        // 2. Phosphor Energy Decay
        if (cell.energy > 0.005) {
          cell.energy *= DECAY_RATE;
        } else {
          cell.energy = 0;
          // When not hovered, the cell is 100% NOT visible (zero boxes on screen)
          continue;
        }

        // 3. Active cell rendering (Only reaches here if cell is currently hovered or in decay trail)
        const energy = cell.energy;

        // 4. Color Interpolation with High-Energy Flash
        let renderR = cell.r;
        let renderG = cell.g;
        let renderB = cell.b;

        if (energy > 0.15) {
          const flash = Math.pow(energy, 1.6);
          renderR = Math.min(255, Math.round(cell.r + (255 - cell.r) * flash * 0.85));
          renderG = Math.min(255, Math.round(cell.g + (255 - cell.g) * flash * 0.95));
          renderB = Math.min(255, Math.round(cell.b + (255 - cell.b) * flash * 0.9));
        }

        // 5. Dynamic Scale Pop
        const scale = 1 + energy * 0.25;
        const currentSize = CELL_SIZE * scale;
        const offset = (currentSize - CELL_SIZE) / 2;
        const drawX = cell.x - offset;
        const drawY = cell.y - offset;

        // 6. Alpha: Directly driven by energy, completely fading to 0 as mouse leaves
        const alpha = Math.min(1, energy * 0.95);

        ctx.fillStyle = `rgba(${renderR}, ${renderG}, ${renderB}, ${alpha.toFixed(3)})`;

        // Render rounded square tile
        const radius = 2.5;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(drawX, drawY, currentSize, currentSize, radius);
        } else {
          ctx.rect(drawX, drawY, currentSize, currentSize);
        }
        ctx.fill();

        // 7. Specular Core Highlight for High Energy Cells
        if (energy > 0.55) {
          const specSize = Math.max(2, currentSize * 0.3);
          const specOffset = (currentSize - specSize) / 2;
          ctx.fillStyle = `rgba(255, 255, 255, ${(energy * 0.85).toFixed(3)})`;
          ctx.fillRect(drawX + specOffset, drawY + specOffset, specSize, specSize);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.removeEventListener("pointermove", handlePointerMove);
        container.removeEventListener("pointerleave", handlePointerLeave);
      }
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        zIndex: 0,
      }}
    />
  );
};

export default InteractivePixelCanvas;
