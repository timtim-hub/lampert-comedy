# LAMPERT | Stand Up Comedy

A maximalist motion-first website for German stand-up comedian Fabian Lampert.

## Creative Direction: Cinematic Theatre

This experience channels the theatrical essence of live comedy performance—dark, moody aesthetics with theatrical spotlight moments that mirror the stage experience.

### Design Philosophy
- **Maximalist Motion**: Animation is the core UX, not decoration
- **Cinematic Transitions**: Scene-like transitions feel like film cuts
- **Kinetic Typography**: Text that moves with the rhythm of comedy timing
- **Tactile Interactions**: Magnetic buttons, hover states with depth

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion
- **Typography**: Space Grotesk (display), Inter (body)
- **Icons**: Lucide React

### Motion System
Curated motion tokens provide consistent, authored animation:

```typescript
// Easing curves
dramatic: [0.87, 0, 0.13, 1]    // Theatrical entrances
elastic: [0.68, -0.55, 0.265, 1.55]  // Playful bounce
snappy: [0.25, 0.1, 0.25, 1]    // Quick interactions

// Springs
gentle: { stiffness: 120, damping: 20 }
bouncy: { stiffness: 300, damping: 15 }
```

### Sections
1. **Hero**: Kinetic title reveal with scroll-driven parallax
2. **About**: Editorial layout with stats and quote
3. **Tour Dates**: Interactive list with hover reveals
4. **TV Appearances**: Card grid with highlight states
5. **Gallery**: Masonry layout with lightbox
6. **Footer**: Large CTA with magnetic links

### Features
- Cursor spotlight effect
- Magnetic buttons and links
- Reduced motion support
- Smooth scroll navigation
- Mobile-responsive design

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
```

## Deployment

The site is configured for static export (`output: 'export'`) and can be deployed to any static hosting provider.

---

© 2025 Fabian Lampert
