# Design Brief — SADHYA: The Kerala Table Supper Club

## Visual Direction
Premium, warm, cultural dining experience. Luxury minimalism with Kerala heritage accents—not a typical restaurant website, but an exclusive supper club for shared community meals with curated storytelling.

## Tone & Differentiation
Refined elegance + cultural authenticity. Brass lamp & banana leaf visual language. Warm ambient lighting throughout. Every section tells a story of Kerala tradition through modern design.

## Color Palette
| Role | OKLCH | Usage |
|------|-------|-------|
| Primary | 0.35 0.12 124 | Deep forest green—main CTAs, headers, section dividers |
| Accent | 0.68 0.18 62 | Warm gold—highlights, emphasis, brass lamp accents |
| Secondary | 0.55 0.16 95 | Banana leaf green—cards, alt elements |
| Background | 0.97 0.01 50 | Cream/beige—main content backdrop |
| Card | 0.99 0.01 50 | Off-white—elevated card surfaces |
| Muted | 0.88 0.04 88 | Soft sage—secondary text, disabled states |
| Foreground | 0.25 0.08 124 | Deep green text—primary copy |

## Typography
| Role | Font | Usage |
|------|------|-------|
| Display | Fraunces | Headlines, SADHYA logo, section titles—elegant serif with traditional warmth |
| Body | Lora | Long-form copy, descriptions—warm serif that feels cultural, inviting |
| Mono | GeistMono | Dates, numbers, technical elements—clean utility |

## Elevation & Depth
- Warm shadows: `shadow-warm-sm/md/lg` with amber tint (139, 101, 50) for brass lamp warmth
- Card lift on hover with `transition-smooth`
- Subtle depth: minimal Z-stack, prioritize surface treatment over shadow intensity

## Structural Zones
| Zone | Treatment |
|------|-----------|
| Header | Dark green `bg-primary` with cream text, gold accent bar underline, sticky scroll |
| Hero | Cream background with brass lamp + banana leaf decorative elements, large Fraunces heading |
| Sections (odd) | Cream `bg-background`, regular card content |
| Sections (even) | Soft sage `bg-muted/10`, alternate surface rhythm |
| Footer | Deep green `bg-primary/95`, cream text, gold accent link hover |

## Spacing & Rhythm
- Base unit: 4px grid. Sections: 4rem (64px) vertical padding on desktop, 3rem on mobile.
- Cards: 1.5rem padding, staggered fade-in animations on scroll
- Consistent left/right gutters via `container` with max-width 1400px

## Component Patterns
- Cards: `rounded-lg` (10px), `shadow-warm-md`, cream background, green text hierarchy
- Buttons: Primary `bg-primary` text-cream, hover lifts with warm shadow; Secondary outlined green
- Inputs: Cream border `border-muted`, green focus ring, placeholder text muted-foreground
- Links: Gold accent text, underline on hover, no color change on visited

## Motion & Animation
- Scroll entrance: `fade-in-up` (600ms ease-out) for cards and text, staggered per row
- Hover: `transition-smooth` (300ms) for color, shadow, transform (lift 2px)
- CTA buttons: Gold accent brightens on hover + warm shadow deepens
- No bouncy or playful animations—preserve refined aesthetic

## Constraints
- Max 3 accent colors at once (primary, accent, secondary)
- Shadows only warm-tinted (no neutral black shadows)
- Typography: 2 font families max (Fraunces + Lora)
- No gradients; use solid colors + subtle texture via opacity
- All interactive elements must have visible focus state (green ring)

## Signature Detail
Brass lamp & banana leaf visual accents on hero and key sections—hand-drawn or geometric brass elements with warm gold color, banana leaf leaf patterns as decorative borders or background texture elements. These tie the digital experience to Kerala's physical cultural artifacts, reinforcing the "experience" positioning over generic restaurant branding.
