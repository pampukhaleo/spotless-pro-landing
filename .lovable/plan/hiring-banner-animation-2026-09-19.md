# Hiring banner animation

## Goal
Add a noticeable but elegant animated accent to the "We're Hiring — Join Our Team" banner under the hero so it draws the eye without looking flashy or "yellow".

## Design choice (from user)
Animated gradient border — a smooth moving coloured ring/gradient around the button.

## What will be changed
1. **Add a reusable animated-gradient class** in `src/index.css`.
   - Uses a `::before` pseudo-element with a `conic-gradient` built from the brand palette (`--primary`, `--secondary`, `--accent`).
   - Rotates continuously via a new `@keyframes gradient-rotate`.
   - Inner background remains the existing `bg-background/95`, so the button keeps its current look.
   - Respects `prefers-reduced-motion` by disabling rotation for users who prefer reduced motion.
2. **Apply the class to the hiring banner button** in `src/components/HeroSection.tsx`.
   - Replace the static `border-primary/20` border with the animated gradient border.
   - Keep the existing size, hover scale, arrow translation and click handler.
   - Ensure the button stays accessible (`aria-label`, keyboard focusable).
3. **Verify**
   - Run the build and confirm no errors.
   - Check the live preview on mobile and desktop to ensure the animation is visible but not distracting.

## Files to edit
- `src/index.css`
- `src/components/HeroSection.tsx`

## Out of scope
- No changes to palette or typography.
- No changes to other buttons or sections.
- No new dependencies.
