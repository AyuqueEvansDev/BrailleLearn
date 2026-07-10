---
name: Tactile Vision
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#43474e'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#476083'
  primary: '#000613'
  on-primary: '#ffffff'
  primary-container: '#001f3f'
  on-primary-container: '#6f88ad'
  inverse-primary: '#afc8f0'
  secondary: '#825500'
  on-secondary: '#ffffff'
  secondary-container: '#feaa00'
  on-secondary-container: '#684300'
  tertiary: '#040607'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1f20'
  on-tertiary-container: '#848688'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#afc8f0'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#2f486a'
  secondary-fixed: '#ffddb3'
  secondary-fixed-dim: '#ffb950'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#624000'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin: 24px
  gutter: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 40px
---

## Brand & Style
The design system is centered on **Inclusive Educational Modernism**. It prioritizes extreme legibility and cognitive ease for a diverse user base learning a tactile language through a visual medium. The brand personality is authoritative yet encouraging, balancing the technical nature of Braille with the warmth of a supportive learning environment.

The style leverages **High-Contrast Minimalism** with **Tactile-Inspired accents**. By using generous white space and a restricted color palette, the UI directs all focus toward the educational video content and Braille patterns. Subtle depth is created through soft shadows to imply touchability, reinforcing the physical nature of the subject matter.

## Colors
The palette is engineered for maximum visual hierarchy and accessibility (WCAG AAA compliance where possible).

*   **Primary (Deep Navy):** Used for headers, primary text, and structural elements to evoke trust and academic depth.
*   **Secondary (Vibrant Amber):** Reserved exclusively for primary actions (CTAs) and progress indicators. This high-visibility hue ensures the "path of next resistance" is always clear.
*   **Backgrounds:** A clean, neutral off-white (#F8F9FA) reduces eye strain compared to pure white while maintaining a high contrast ratio against the navy text.
*   **Functional Colors:** Use a pure black (#000000) for critical legibility and a mid-range slate for secondary information.

## Typography
This design system utilizes **Atkinson Hyperlegible Next**, a typeface specifically designed for low-vision readers. It focuses on letterform distinction (e.g., differentiating between 'I', 'l', and '1') to ensure the learning process is never hindered by typographic ambiguity.

- **Scale:** Font sizes are intentionally larger than standard mobile patterns to accommodate users with varying degrees of visual acuity.
- **Weight:** Bold weights are used frequently for structural anchors to guide the eye through the instructional flow.
- **Spacing:** Increased line height and letter spacing are applied to body text to prevent "crowding" during long reading sessions.

## Layout & Spacing
The layout follows a **Fluid Grid** system optimized for mobile-first interaction. 

- **Touch Targets:** A strict minimum touch target of 48x48dp is enforced for all interactive elements, though 56dp is preferred for primary navigation.
- **Rhythm:** An 8px linear scale defines all spacing. Large 24px side margins provide a "safe zone" for holding a mobile device without obstructing content.
- **Visual Breathing Room:** Vertical stacks (stack-lg) are used between distinct learning modules to prevent cognitive overload.

## Elevation & Depth
The design system uses **Tonal Layering** combined with **Ambient Shadows** to create a sense of tangibility.

- **The "Elevated Card":** Essential content units (like lesson previews) use a subtle 1px border in a slightly darker shade of the background, paired with a soft, diffused navy shadow (10% opacity, 12px blur). This makes the card feel "raised" and ready to be pressed.
- **Tactile Patterns:** Backgrounds feature a "debossed" Braille dot pattern. These are created using a dual-shadow technique (a light highlight on one side, a dark shadow on the other) to mimic the physical texture of Braille paper without distracting from the foreground text.

## Shapes
The shape language is **Rounded**, moving away from clinical sharpness to create a friendly, approachable atmosphere.

- **Buttons & Inputs:** Use the `rounded-lg` (1rem) setting to create a soft, inviting aesthetic that mirrors the rounded nature of Braille dots.
- **Cards:** Use `rounded-xl` (1.5rem) to containerize lesson content.
- **Iconography:** Icons should feature rounded caps and corners, maintaining a consistent stroke weight of 2px for high visibility.

## Components
Consistent component behavior ensures a seamless educational experience:

- **Primary Action Buttons:** Solid Vibrant Amber background with Navy text. These should use a slight "press-in" animation to provide haptic-like visual feedback.
- **Braille Input Chips:** Large, circular toggle elements that mimic the 6-dot Braille cell. When "active," they fill with Navy; when "inactive," they show a light-gray debossed stroke.
- **Video Player:** Custom controls with oversized play/pause and 10-second skip buttons. The progress bar uses a thick 8px track for easy scrubbing.
- **Lesson Lists:** Large-format list items with high-contrast icons on the left and a progress chevron on the right.
- **Input Fields:** Thick 2px borders that turn Navy when focused, with floating labels to maintain context at all times.
- **Progress Indicators:** Circular rings using the Secondary color to show course completion, providing a clear visual reward.