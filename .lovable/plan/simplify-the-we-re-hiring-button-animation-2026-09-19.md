# Simplify the "We're Hiring" button animation

## Goal
Replace the current spinning gradient ring around the hero hiring button with a clean, subtle accent animation that draws attention without looking distracting or unclear.

## What will change
1. **Remove the conic-gradient spinning border wrapper** from `src/components/HeroSection.tsx`.
2. **Apply a simple pulsing glow shadow** directly to the hiring button using the existing `glow-pulse` keyframe in `src/index.css`.
3. **Keep the button large, centered on desktop, and responsive on mobile** as it is now.
4. **Remove the unused `.animated-gradient-border` class and `gradient-rotate` keyframe** from `src/index.css` to avoid dead CSS.

## Visual result
- The button will gently pulse with a soft teal/green shadow (secondary color).
- No spinning ring or multicolor border.
- Hover state remains: slight scale and stronger shadow.
- Respects `prefers-reduced-motion`: animation disabled for users who request reduced motion.

## Files to edit
- `src/components/HeroSection.tsx`
- `src/index.css`

## Implementation details
- In `HeroSection.tsx`, remove the `<div className="animated-gradient-border inline-flex">` wrapper so the `<button>` sits directly inside the centered flex container.
- Add `animate-[glow-pulse_2.5s_ease-in-out_infinite]` (or a small custom class) to the button classes.
- In `index.css`, delete the `.animated-gradient-border` block and the `@keyframes gradient-rotate` block; keep `glow-pulse` since it will be reused.
- Verify the build passes and the button is centered on desktop.