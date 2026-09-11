import React, { useEffect, useRef } from "react";
import sarvamArtwork from "../../assets/sarvam-artwork.jpg";

/**
 * SarvamGlitchCanvas (Water & Liquid Hover Edition)
 * 
 * Features:
 * 1. Base background: Exact high-resolution pixel artwork (sarvam-artwork.jpg) covering seamlessly with zero grid lines.
 * 2. Hover Effect: Ultra-smooth, silky WATER ripples, liquid wave refraction, and aquatic light caustics:
 *    - Concentric expanding liquid ripple waves that radiate outwards from cursor movement
 *    - Fluid magnifying meniscus / water lens that smoothly warps and illuminates the background
 *    - 3D Refractive water crests (white specular gleam + aquatic cyan refraction shadow)
 *    - Floating aquatic sunlight glints / dew sparkles drifting on ripple crests
 *    - Zero jagged glitches, 100% smooth, fluid, calm water physics at 60-120 FPS
 */
export const SarvamGlitchCanvas = ({ containerRef, className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: false });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Load base artwork image
    const img = new Image();
    let imgLoaded = false;
    img.crossOrigin = "anonymous";
    img.src = sarvamArtwork;
    img.onload = () => {
      imgLoaded = true;
    };

    // Smooth physics mouse
    const mouse = {
      x: -9999,
      y: -9999,
      smoothX: -9999,
      smoothY: -9999,
      prevX: -9999,
      prevY: -9999,
      speed: 0,
      active: false,
      lastMoveTime: 0,
    };

    // Water Ripple Waves pool
    const ripples = [];
    const MAX_RIPPLES = 45;

    const addRipple = (x, y, speed) => {
      if (ripples.length >= MAX_RIPPLES) {
        ripples.shift();
      }
      const intensity = Math.min(1.0, 0.45 + speed * 0.035);
      ripples.push({
        x,
        y,
        radius: 4,
        maxRadius: Math.min(240, 95 + speed * 6),
        speed: 2.8 + Math.min(2.5, speed * 0.08),
        strength: intensity,
        life: 1.0,
        decay: 0.016 + Math.random() * 0.008,
        width: 3.5 + Math.min(4, speed * 0.15),
      });
    };

    // Water Caustic Glints / Floating Droplet Sparkles
    const droplets = [];
    const MAX_DROPLETS = 65;

    const spawnDroplets = (cx, cy, count = 2) => {
      for (let i = 0; i < count; i++) {
        if (droplets.length >= MAX_DROPLETS) {
          droplets.shift();
        }
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 75;
        droplets.push({
          x: cx + Math.cos(angle) * dist,
          y: cy + Math.sin(angle) * dist,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8 - 0.2,
          radius: Math.random() * 3.5 + 1.8,
          maxLife: Math.random() * 45 + 30,
          life: 0,
          isStar: Math.random() > 0.5,
          colorType: Math.floor(Math.random() * 3), // 0: white, 1: electric cyan, 2: luminous mint
        });
      }
    };

    // Handle canvas sizing with exact integer pixel dimensions
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

    let lastSpawnTime = 0;

    const handlePointerMove = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

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
      const now = performance.now();
      mouse.lastMoveTime = now;

      // Emit new liquid ripples when cursor moves
      if (now - lastSpawnTime > 45 && mouse.speed > 1.2) {
        addRipple(currentX, currentY, mouse.speed);
        spawnDroplets(currentX, currentY, Math.min(3, Math.ceil(mouse.speed / 8)));
        lastSpawnTime = now;
      }
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    if (container) {
      container.addEventListener("pointermove", handlePointerMove, { passive: true });
      container.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    }

    // Render loop
    const render = (now) => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw base artwork image covering canvas (Seamless, NO gaps, NO white grid)
      const nw = img.naturalWidth || img.width;
      const nh = img.naturalHeight || img.height;

      if (imgLoaded && nw > 0) {
        // Crop clean interior: trim off the right 4.5% where screenshot border artifacts exist
        const cropX = 0;
        const cropY = 0;
        const cropW = Math.floor(nw * 0.955);
        const cropH = nh;

        // Guaranteed full-bleed cover calculation with zero gaps
        const scale = Math.max((width + 8) / cropW, (height + 8) / cropH);
        const drawW = Math.ceil(cropW * scale);
        const drawH = Math.ceil(cropH * scale);
        const drawX = Math.floor((width - drawW) / 2);
        const drawY = Math.floor((height - drawH) / 2);

        // Draw crystal clean artwork with trimmed borders
        ctx.drawImage(img, cropX, cropY, cropW, cropH, drawX, drawY, drawW, drawH);

        // Smooth physics interpolation for water lens
        if (mouse.active) {
          mouse.smoothX += (mouse.x - mouse.smoothX) * 0.16;
          mouse.smoothY += (mouse.y - mouse.smoothY) * 0.16;
        }

        const isRecentlyActive = now - mouse.lastMoveTime < 2400;

        // 2. Liquid Meniscus / Water Lens under Cursor
        if (mouse.active && isRecentlyActive && mouse.smoothX > 0) {
          const lensRadius = 140;

          ctx.save();
          // Clip a circular water lens
          ctx.beginPath();
          ctx.arc(mouse.smoothX, mouse.smoothY, lensRadius, 0, Math.PI * 2);
          ctx.clip();

          // Smooth optical magnification (1.035x subtle fluid refraction)
          const zoom = 1.035;
          const zoomedW = drawW * zoom;
          const zoomedH = drawH * zoom;
          const zoomedX = mouse.smoothX - (mouse.smoothX - drawX) * zoom;
          const zoomedY = mouse.smoothY - (mouse.smoothY - drawY) * zoom;

          ctx.drawImage(img, cropX, cropY, cropW, cropH, zoomedX, zoomedY, zoomedW, zoomedH);

          // Ethereal water glow & caustic meniscus sheen
          const waterSheen = ctx.createRadialGradient(
            mouse.smoothX,
            mouse.smoothY,
            0,
            mouse.smoothX,
            mouse.smoothY,
            lensRadius
          );
          waterSheen.addColorStop(0, "rgba(255, 255, 255, 0.28)");
          waterSheen.addColorStop(0.35, "rgba(56, 189, 248, 0.20)");
          waterSheen.addColorStop(0.70, "rgba(14, 165, 233, 0.08)");
          waterSheen.addColorStop(1, "rgba(255, 255, 255, 0)");

          ctx.fillStyle = waterSheen;
          ctx.beginPath();
          ctx.arc(mouse.smoothX, mouse.smoothY, lensRadius, 0, Math.PI * 2);
          ctx.fill();

          // Soft boundary meniscus refraction ring
          ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
          ctx.lineWidth = 1.8;
          ctx.stroke();

          ctx.restore();
        }

        // 3. Expanding Concentric Water Ripple Waves
        ctx.save();
        for (let i = ripples.length - 1; i >= 0; i--) {
          const r = ripples[i];
          r.radius += r.speed;
          r.life -= r.decay;

          if (r.life <= 0 || r.radius >= r.maxRadius) {
            ripples.splice(i, 1);
            continue;
          }

          const progress = r.radius / r.maxRadius;
          const waveAlpha = Math.sin((1 - progress) * Math.PI * 0.5) * r.strength * r.life;

          if (waveAlpha <= 0.01) continue;

          // A. Soft Aquatic Shadow Crest (Inner refraction ring)
          ctx.beginPath();
          ctx.arc(r.x, r.y, Math.max(1, r.radius - 2), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(2, 132, 199, ${(waveAlpha * 0.35).toFixed(3)})`;
          ctx.lineWidth = r.width;
          ctx.stroke();

          // B. Luminous Specular Wave Highlight (Bright water crest)
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${(waveAlpha * 0.75).toFixed(3)})`;
          ctx.lineWidth = Math.max(1.2, r.width * 0.6);
          ctx.stroke();

          // C. Outer Electric Cyan Glow Crest
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius + 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(56, 189, 248, ${(waveAlpha * 0.40).toFixed(3)})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
        ctx.restore();

        // 4. Floating Water Droplets & Caustic Sunlight Glints
        ctx.save();
        for (let i = droplets.length - 1; i >= 0; i--) {
          const d = droplets[i];
          d.life++;
          d.x += d.vx;
          d.y += d.vy;

          const progress = d.life / d.maxLife;
          if (progress >= 1) {
            droplets.splice(i, 1);
            continue;
          }

          // Smooth sinusoidal breathing curve (gentle water gleam)
          const alpha = Math.sin(progress * Math.PI) * 0.85;
          const currentRadius = d.radius * (1 + Math.sin(progress * Math.PI) * 0.25);

          let colorCore = "rgba(255, 255, 255, ";
          let colorHalo = "rgba(56, 189, 248, ";
          if (d.colorType === 1) {
            colorCore = "rgba(224, 242, 254, ";
            colorHalo = "rgba(14, 165, 233, ";
          } else if (d.colorType === 2) {
            colorCore = "rgba(240, 253, 244, ";
            colorHalo = "rgba(74, 222, 128, ";
          }

          // Soft droplet halo
          const dropGrad = ctx.createRadialGradient(
            d.x,
            d.y,
            0,
            d.x,
            d.y,
            currentRadius * 2.5
          );
          dropGrad.addColorStop(0, `${colorCore}${(alpha * 0.9).toFixed(3)})`);
          dropGrad.addColorStop(0.4, `${colorHalo}${(alpha * 0.4).toFixed(3)})`);
          dropGrad.addColorStop(1, `${colorHalo}0)`);

          ctx.fillStyle = dropGrad;
          ctx.beginPath();
          ctx.arc(d.x, d.y, currentRadius * 2.5, 0, Math.PI * 2);
          ctx.fill();

          // Specular water glint center
          if (d.isStar) {
            // Delicate 4-point light sparkle
            const len = currentRadius * 2.2;
            ctx.strokeStyle = `rgba(255, 255, 255, ${(alpha * 0.95).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(d.x - len, d.y);
            ctx.lineTo(d.x + len, d.y);
            ctx.moveTo(d.x, d.y - len);
            ctx.lineTo(d.x, d.y + len);
            ctx.stroke();
          }
        }
        ctx.restore();
      }

      // Smooth mouse speed damping
      mouse.speed *= 0.93;

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

export default SarvamGlitchCanvas;
