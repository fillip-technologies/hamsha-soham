import React, { useEffect, useRef } from "react";

/**
 * SarvamFluidAura
 * Pure fluid light animation inspired by Sarvam AI (Indus).
 * Zero square boxes, zero grid lines.
 * Renders an ethereal, continuously flowing fluid mesh aura with:
 * - Multi-layered organic wave mathematics (harmonic sine fields)
 * - Sarvam AI sovereign color spectrum: Lush peacock emerald, glacial electric cyan, deep sapphire, and radiant amber flare
 * - Interactive cursor magnetic bloom that softly warps and illuminates the fluid field
 * - Pure 60-120 FPS HTML5 Canvas with sub-pixel anti-aliasing and soft blending
 */
export const SarvamFluidAura = ({ containerRef, className = "" }) => {
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

    // Smooth physics cursor
    const mouse = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      active: false,
      intensity: 0,
    };

    const handleResize = () => {
      const container = containerRef?.current || canvas.parentElement;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const container = containerRef?.current || canvas.parentElement;

    const handlePointerMove = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    if (container) {
      container.addEventListener("pointermove", handlePointerMove, { passive: true });
      container.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    }

    // Dynamic fluid energy nodes that drift in graceful harmonic orbits
    const nodes = [
      // 1. Peacock Emerald Canopy Node (Top Left)
      {
        baseX: 0.25,
        baseY: 0.28,
        radius: 0.45,
        speedX: 0.0008,
        speedY: 0.0011,
        color1: "rgba(16, 185, 129, 0.45)",  // Emerald
        color2: "rgba(5, 150, 105, 0.22)",
        color3: "rgba(16, 185, 129, 0)",
      },
      // 2. Glacial Electric Cyan River Node (Center Flow)
      {
        baseX: 0.58,
        baseY: 0.48,
        radius: 0.48,
        speedX: -0.0009,
        speedY: 0.0007,
        color1: "rgba(14, 165, 233, 0.50)",  // Sky Cyan
        color2: "rgba(6, 182, 212, 0.25)",
        color3: "rgba(14, 165, 233, 0)",
      },
      // 3. Deep Sapphire / Midnight Navy Node (Right & Bottom Depth)
      {
        baseX: 0.78,
        baseY: 0.65,
        radius: 0.42,
        speedX: 0.0006,
        speedY: -0.0008,
        color1: "rgba(59, 130, 246, 0.40)",  // Royal Blue
        color2: "rgba(30, 58, 138, 0.18)",
        color3: "rgba(30, 58, 138, 0)",
      },
      // 4. Luminous Mint & Lime Highlight (Top Center)
      {
        baseX: 0.42,
        baseY: 0.18,
        radius: 0.35,
        speedX: -0.0012,
        speedY: 0.0009,
        color1: "rgba(52, 211, 153, 0.38)",  // Mint
        color2: "rgba(132, 204, 22, 0.15)",  // Lime
        color3: "rgba(52, 211, 153, 0)",
      },
      // 5. Signature Flame / Warm Amber Sun Flare (Subtle warmth accent)
      {
        baseX: 0.15,
        baseY: 0.70,
        radius: 0.38,
        speedX: 0.0007,
        speedY: -0.0010,
        color1: "rgba(255, 77, 39, 0.25)",   // Brand Flame
        color2: "rgba(245, 158, 11, 0.12)",  // Amber
        color3: "rgba(255, 77, 39, 0)",
      },
    ];

    let startTime = performance.now();

    const render = (now) => {
      const t = (now - startTime);
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse spring interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
        mouse.intensity += (1 - mouse.intensity) * 0.06;
      } else {
        mouse.intensity += (0 - mouse.intensity) * 0.03;
      }

      ctx.save();
      // Use "screen" or "lighter" for fluid glowing plasma blending
      ctx.globalCompositeOperation = "source-over";

      // Render flowing harmonic fluid nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Harmonic organic orbit
        const offsetX = Math.sin(t * node.speedX + i * 1.7) * (width * 0.12);
        const offsetY = Math.cos(t * node.speedY + i * 2.3) * (height * 0.14);

        let cx = node.baseX * width + offsetX;
        let cy = node.baseY * height + offsetY;

        // Subtle interactive magnetic pull toward mouse
        if (mouse.intensity > 0.01) {
          const dx = mouse.x - cx;
          const dy = mouse.y - cy;
          const dist = Math.hypot(dx, dy);
          const pullRadius = Math.max(width, height) * 0.5;
          if (dist < pullRadius) {
            const pull = (1 - dist / pullRadius) * 0.15 * mouse.intensity;
            cx += dx * pull;
            cy += dy * pull;
          }
        }

        const r = node.radius * Math.max(width, height);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, node.color1);
        grad.addColorStop(0.5, node.color2);
        grad.addColorStop(1, node.color3);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render interactive high-specular cursor light bloom
      if (mouse.intensity > 0.01) {
        const cursorRadius = 320;
        const cursorGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          cursorRadius
        );
        cursorGrad.addColorStop(0, `rgba(255, 255, 255, ${(0.45 * mouse.intensity).toFixed(3)})`);
        cursorGrad.addColorStop(0.25, `rgba(56, 189, 248, ${(0.35 * mouse.intensity).toFixed(3)})`);
        cursorGrad.addColorStop(0.55, `rgba(16, 185, 129, ${(0.20 * mouse.intensity).toFixed(3)})`);
        cursorGrad.addColorStop(1, "rgba(14, 165, 233, 0)");

        ctx.fillStyle = cursorGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, cursorRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

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
      style={{ zIndex: 0 }}
    />
  );
};

export default SarvamFluidAura;
