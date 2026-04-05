# Design System Document: The Modern Hearth

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Modern Hearth."** 

This system is a celebration of duality: the raw, tactile heritage of the Greek grill and the surgical precision of high-end editorial design. We are moving away from the "template" aesthetic of local food apps. Instead, we treat every screen like a page in a premium culinary monograph. 

We achieve "Authentic Minimalist" through **intentional asymmetry**—large, high-fidelity imagery of charred meats and fresh herbs should occasionally break the container bounds, while typography remains rigid and authoritative. This is not just a menu; it is a digital flagship for 'Souvlakia O Lefteris'.

---

## 2. Colors & Tonal Architecture
The palette is rooted in the elemental: soot, ash, bone, and fire. 

### The Palette
- **Primary (Charcoal):** `#111111` & `#262626`. Use these for the "weight" of the brand. They represent the charcoal and the grit of the street.
- **Secondary (The Ember):** `#a23f00` & `#fc7127`. These are your heat signals. Use them exclusively for conversion points and highlighting the "glow" of the brand.
- **Surface (The Bone/Beige):** `#f9f9f9` through `#eeeeee`. These provide the warm, hospitable backdrop that echoes Greek architecture and parchment.

### The "No-Line" Rule
**Standard 1px borders are strictly prohibited.** To define sections, you must use background color shifts. For example, a `surface-container-low` section should sit adjacent to a `surface` background to create a boundary. If you need to separate content, use white space from our spacing scale or a transition in tonal depth.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper and stone.
- **Lowest Tier:** `surface-container-lowest` (#ffffff) for primary content cards.
- **Base Tier:** `surface` (#f9f9f9) for the main background.
- **Highest Tier:** `surface-container-highest` (#e2e2e2) for utility elements like search bars or inactive states.

### Signature Textures & Glass
To provide visual "soul," use a subtle **Glassmorphism** effect on mobile navigation bars or floating action buttons. Use a semi-transparent `surface` color with a `20px` backdrop blur. This allows the vibrant food imagery to "bleed" through the interface, making the experience feel immersive rather than static.

---

## 3. Typography
Our typography bridges the gap between ancient stone inscriptions and modern Swiss minimalism.

- **Display & Headlines (Space Grotesk):** This font’s geometric rigidity echoes traditional Greek signage but feels undeniably "now." Use `display-lg` for hero titles with tight tracking (-2%) to create a bold, "Trustworthy" impact.
- **Body & Labels (Plus Jakarta Sans):** A highly readable, sophisticated sans-serif. Use `body-lg` for descriptions to maintain an editorial feel.
- **The Hierarchy Strategy:** Use extreme scale contrast. A `display-md` headline paired with a `label-md` uppercase caption creates a sophisticated, high-end rhythmic tension that guides the eye toward the "Order" action.

---

## 4. Elevation & Depth
We do not use shadows to create "pop"; we use them to create "atmosphere."

- **The Layering Principle:** Depth is achieved by "stacking" surface tiers. A `surface-container-lowest` card placed on a `surface-container-low` background creates a natural lift without visual noise.
- **Ambient Shadows:** For floating elements (like a "Add to Cart" sheet), use an extra-diffused shadow.
    - **Color:** A tinted version of `on-surface` (e.g., `#1a1c1c` at 6% opacity).
    - **Blur:** Minimum `32px`.
- **The "Ghost Border" Fallback:** If a border is required for accessibility in input fields, use the `outline-variant` token at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Buttons
- **Primary:** Background: `primary` (#111111) | Text: `on-primary` (#ffffff). Shape: `md` (0.375rem). These should feel like heavy slabs of charcoal.
- **Secondary (The Heat):** Background: `secondary` (#a23f00) | Text: `on-secondary` (#ffffff). Use this for the final "Checkout" or "Order Now" to signify the heat of the grill.

### Cards & Lists
- **Rule:** Forbid the use of divider lines.
- **Cards:** Use `surface-container-lowest` with a `lg` (0.5rem) corner radius. Separate cards with `24px` of vertical white space. 
- **Lists:** Use background hovering (subtle shift to `surface-container-high`) to indicate interactivity.

### Input Fields
- **Style:** Minimalist. Use a `surface-container-highest` background with a `sm` (0.125rem) bottom radius. 
- **State:** On focus, the bottom "Ghost Border" transitions to `secondary` (Deep Orange) to represent the element "heating up."

### Signature Component: The "Grill Texture" Overlay
For Hero sections, apply a 5% opacity noise texture or a subtle gradient transitioning from `primary` to `primary-container`. This mimics the tactile nature of a charcoal grill and adds premium "weight" to the mobile experience.

---

## 6. Do’s and Don’ts

### Do:
- **Use Large Imagery:** Let the food do the heavy lifting. Use full-bleed images that sit behind the `surface` layer using transparency.
- **Embrace White Space:** High-end design breathes. If a screen feels "busy," increase the padding between surface containers.
- **Mobile-First Gestures:** Use large touch targets (min 48px) and ensure all "Surface-Highest" sheets are swipeable.

### Don't:
- **No Generic Icons:** Avoid thin, wispy icons. Use bold, filled icons that match the weight of the `Space Grotesk` typeface.
- **No Pure Black:** Always use our `primary` charcoal (#111111). Pure #000000 feels "digital" and "cheap"; charcoal feels "organic."
- **No Dividers:** If you feel the need to add a line, add 16px of space instead. If it still doesn't work, shift the background color of the next section.

---
**Director's Final Note:** This design system is about the balance of the raw and the refined. Keep it bold, keep it high-contrast, and always prioritize the appetizing nature of the imagery. We are selling the heat of the grill through the coolness of the interface.