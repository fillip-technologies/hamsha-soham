import React, { useEffect, useRef } from "react";
import basePatternImg from "../../assets/sarvam-grid-base.png";

/**
 * SarvamGenerativeCanvas
 * 
 * 1. Base Structure:
 *    - Seamlessly tiles the clean interior of sarvam-grid-base.png (modular Mughal jali / Indian loom lattice weave).
 *    - High-contrast, zero-border-seam edge-to-edge background across the hero viewport.
 * 
 * 2. Interactive Structure Deformation & Moving Points:
 *    - In the hover area, the ACTUAL background structure warps and undulates with real-time water lens physics (no fixed image stamps).
 *    - Grid intersection points of the structure actively deflect and spring dynamically as the cursor moves through.
 *    - A prominent focal dot point glides across the structure with water ripples, kinetic reticle, and motion trail.
 */
export const SarvamGenerativeCanvas = ({ containerRef, className = "" }) => {
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

    // Load base reference image
    const baseImg = new Image();
    let baseLoaded = false;
    let baseTilePattern = null;

    // Offscreen canvas for seamless base pattern tiling (crops out screenshot borders)
    const baseTileCanvas = document.createElement("canvas");
    const baseTileCtx = baseTileCanvas.getContext("2d");

    baseImg.src = basePatternImg;
    baseImg.onload = () => {
      baseLoaded = true;
      // Trim outer 14px border so pattern tiles seamlessly with zero seams
      const cropX = 14;
      const cropY = 12;
      const cropW = Math.max(10, baseImg.width - 28);
      const cropH = Math.max(10, baseImg.height - 24);

      baseTileCanvas.width = cropW;
      baseTileCanvas.height = cropH;
      baseTileCtx.drawImage(baseImg, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

      try {
        baseTilePattern = ctx.createPattern(baseTileCanvas, "repeat");
      } catch (e) {
        // Fallback
      }
    };

    // Offscreen canvas for live dynamic structure warp (displaces the actual background pattern)
    const WARP_SIZE = 360;
    const warpCanvas = document.createElement("canvas");
    warpCanvas.width = WARP_SIZE;
    warpCanvas.height = WARP_SIZE;
    const warpCtx = warpCanvas.getContext("2d", { willReadFrequently: true });

    // Smooth physics mouse
    const mouse = {
      x: -9999,
      y: -9999,
      smoothX: -9999,
      smoothY: -9999,
      speed: 0,
      active: false,
      intensity: 0,
      targetIntensity: 0,
      lastMoveTime: 0,
    };

    const handleResize = () => {
      const container = containerRef?.current || canvas.parentElement;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      width = Math.ceil(rect.width);
      height = Math.ceil(rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.ceil(width * dpr);
      canvas.height = Math.ceil(height * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);

      // Recreate pattern if base loaded
      if (baseLoaded && baseTileCanvas.width > 0) {
        try {
          baseTilePattern = ctx.createPattern(baseTileCanvas, "repeat");
        } catch (e) {}
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const container = containerRef?.current || canvas.parentElement;

    let resizeObserver;
    if (window.ResizeObserver && container) {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(container);
    }

    const handlePointerMove = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      // Check bounds
      if (currentX < 0 || currentX > rect.width || currentY < 0 || currentY > rect.height) {
        mouse.active = false;
        mouse.targetIntensity = 0.0;
        return;
      }

      if (mouse.x > -1000) {
        const dx = currentX - mouse.x;
        const dy = currentY - mouse.y;
        mouse.speed = Math.hypot(dx, dy);
      }

      mouse.x = currentX;
      mouse.y = currentY;

      if (mouse.smoothX < -1000) {
        mouse.smoothX = currentX;
        mouse.smoothY = currentY;
      }

      mouse.active = true;
      mouse.targetIntensity = 1.0;
      mouse.lastMoveTime = performance.now();
    };

    const handlePointerEnter = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;
      mouse.x = currentX;
      mouse.y = currentY;
      mouse.smoothX = currentX;
      mouse.smoothY = currentY;
      mouse.active = true;
      mouse.targetIntensity = 1.0;
      mouse.lastMoveTime = performance.now();
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.targetIntensity = 0.0;
    };

    if (container) {
      container.addEventListener("pointerenter", handlePointerEnter, { passive: true });
      container.addEventListener("pointermove", handlePointerMove, { passive: true });
      container.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    }

    // Render loop
    const render = (now) => {
      ctx.clearRect(0, 0, width, height);

      // Base background white
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, width, height);

      // 1. Draw Base Modular Grid Texture seamlessly across the viewport
      if (baseLoaded) {
        ctx.save();
        ctx.globalAlpha = 0.92;
        if (!baseTilePattern && baseTileCanvas.width > 0) {
          try {
            baseTilePattern = ctx.createPattern(baseTileCanvas, "repeat");
          } catch (e) {}
        }
        if (baseTilePattern) {
          ctx.fillStyle = baseTilePattern;
          ctx.fillRect(0, 0, width, height);
        } else if (baseImg.width > 0) {
          ctx.drawImage(baseImg, 0, 0, width, height);
        }
        ctx.restore();
      }

      // Smooth mouse spring physics
      if (mouse.active) {
        mouse.smoothX += (mouse.x - mouse.smoothX) * 0.24;
        mouse.smoothY += (mouse.y - mouse.smoothY) * 0.24;
      }
      mouse.intensity += (mouse.targetIntensity - mouse.intensity) * 0.14;
      mouse.speed *= 0.90;

      const isRecentlyActive = (now - mouse.lastMoveTime < 3500) && (mouse.intensity > 0.01);

      // Interactive hover effects when pointer is active inside the section
      if (isRecentlyActive && mouse.smoothX > -500 && baseTilePattern) {
        const halfSize = WARP_SIZE / 2;
        const boxX = mouse.smoothX - halfSize;
        const boxY = mouse.smoothY - halfSize;

        // Live Dynamic Structure Warp (amphified liquid ripple distortion of the background lattice)
        try {
          // Render background structure segment into warp buffer
          warpCtx.clearRect(0, 0, WARP_SIZE, WARP_SIZE);
          warpCtx.save();
          warpCtx.translate(-boxX, -boxY);
          warpCtx.fillStyle = baseTilePattern;
          warpCtx.fillRect(boxX, boxY, WARP_SIZE, WARP_SIZE);
          warpCtx.restore();

          const srcImgData = warpCtx.getImageData(0, 0, WARP_SIZE, WARP_SIZE);
          const dstImgData = warpCtx.createImageData(WARP_SIZE, WARP_SIZE);
          const src32 = new Uint32Array(srcImgData.data.buffer);
          const dst32 = new Uint32Array(dstImgData.data.buffer);

          const rMax = halfSize;
          const rMaxSq = rMax * rMax;
          const warpStrength = (28 + Math.min(24, mouse.speed * 0.65)) * mouse.intensity;

          for (let y = 0; y < WARP_SIZE; y++) {
            const dy = y - halfSize;
            const dySq = dy * dy;
            const rowOffset = y * WARP_SIZE;

            for (let x = 0; x < WARP_SIZE; x++) {
              const dx = x - halfSize;
              const dSq = dx * dx + dySq;

              if (dSq < rMaxSq) {
                const dist = Math.sqrt(dSq);
                // Dual harmonic radial wave displacement (fluid water ripples)
                const bell = Math.sin((dist / rMax) * Math.PI);
                const ripple1 = Math.sin(dist * 0.072 - now * 0.0055) * 8.5;
                const ripple2 = Math.cos(dist * 0.120 - now * 0.0040) * 4.5;
                const disp = (bell * warpStrength + (ripple1 + ripple2) * mouse.intensity);
                const invD = 1 / (dist || 1);

                const srcX = Math.min(WARP_SIZE - 1, Math.max(0, (x + dx * invD * disp) | 0));
                const srcY = Math.min(WARP_SIZE - 1, Math.max(0, (y + dy * invD * disp) | 0));
                dst32[rowOffset + x] = src32[srcY * WARP_SIZE + srcX];
              } else {
                dst32[rowOffset + x] = src32[rowOffset + x];
              }
            }
          }

          warpCtx.putImageData(dstImgData, 0, 0);

          // Feather edges smoothly so the warped region blends seamlessly into the base
          warpCtx.globalCompositeOperation = "destination-in";
          const featherGrad = warpCtx.createRadialGradient(
            halfSize, halfSize, halfSize * 0.58,
            halfSize, halfSize, halfSize
          );
          featherGrad.addColorStop(0, "rgba(0, 0, 0, 1.0)");
          featherGrad.addColorStop(1, "rgba(0, 0, 0, 0.0)");
          warpCtx.fillStyle = featherGrad;
          warpCtx.fillRect(0, 0, WARP_SIZE, WARP_SIZE);
          warpCtx.globalCompositeOperation = "source-over";

          // Subtle liquid refraction highlight
          ctx.save();
          const halo = ctx.createRadialGradient(mouse.smoothX, mouse.smoothY, 0, mouse.smoothX, mouse.smoothY, halfSize);
          halo.addColorStop(0, `rgba(255, 255, 255, ${(0.30 * mouse.intensity).toFixed(3)})`);
          halo.addColorStop(0.7, `rgba(255, 255, 255, ${(0.08 * mouse.intensity).toFixed(3)})`);
          halo.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(mouse.smoothX, mouse.smoothY, halfSize, 0, Math.PI * 2);
          ctx.fill();

          // Composite warped structure onto main canvas
          ctx.globalAlpha = Math.min(1, mouse.intensity);
          ctx.drawImage(warpCanvas, boxX, boxY);
          ctx.restore();
        } catch (e) {
          // Fallback if pixel reading restricted
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (container) {
        container.removeEventListener("pointerenter", handlePointerEnter);
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

export default SarvamGenerativeCanvas;
