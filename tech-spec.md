# Technical Specification Document
## Deepak Kumar Portfolio Website

---

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Location |
|-----------|---------|----------|
| Button | CTAs, form submit, navigation | Hero, Contact |
| Card | Project cards, experience card | Projects, Experience |
| Input | Contact form fields | Contact |
| Textarea | Message field | Contact |
| Badge | Tech stack tags | Projects, Skills |
| Separator | Section dividers | All sections |
| Sheet | Mobile navigation menu | Navigation |

### Custom Components
| Component | Purpose | Complexity |
|-----------|---------|------------|
| AnimatedBackground | WebGL gradient mesh background | High |
| ProfileImage | 3D tilt effect profile picture | Medium |
| SlideInSection | Left-to-right slide animation wrapper | Medium |
| TimelineCard | Education/Experience timeline cards | Medium |
| SkillBadge | Animated skill badges with hover | Low |
| ProjectCard | Holographic project cards | Medium |
| ContactForm | Animated form with validation | Medium |
| Navigation | Sticky nav with scrollspy | Medium |
| MobileNav | Mobile-responsive navigation | Medium |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Hero Background** | CSS + Canvas | Animated gradient mesh using CSS keyframes, fallback canvas | Medium |
| **Profile 3D Tilt** | Framer Motion | useMotionValue + useTransform for mouse tracking | Medium |
| **Section Slide In** | Framer Motion | whileInView with x: -100 → 0, opacity: 0 → 1 | Low |
| **Text Reveal** | Framer Motion | Split text, stagger children animation | Medium |
| **Card Hover Glow** | CSS + Framer | box-shadow transition, scale on hover | Low |
| **Timeline Animation** | Framer Motion | whileInView with staggered children | Medium |
| **Skill Badge Pop** | Framer Motion | scale: 0 → 1 with spring physics | Low |
| **Button Magnetic** | Framer Motion | Mouse tracking with spring animation | Medium |
| **Scroll Progress** | Framer Motion | useScroll + useSpring for progress bar | Low |
| **Parallax Effect** | Framer Motion | useScroll + useTransform for Y offset | Medium |
| **Form Field Focus** | CSS | Border color transition, label float | Low |
| **Mobile Menu** | Framer Motion | AnimatePresence + slide animation | Medium |

---

## Animation Library Choices

### Primary: Framer Motion
- **Reason**: Best React integration, declarative API, excellent performance
- **Use for**: All component animations, gestures, scroll-triggered effects

### Secondary: CSS Animations
- **Reason**: Performance-critical simple animations
- **Use for**: Hover effects, background animations, transitions

### Tertiary: GSAP (if needed)
- **Reason**: Complex timeline animations
- **Use for**: Advanced scroll sequences (optional enhancement)

---

## Project File Structure

```
app/
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── sheet.tsx
│   │   │   └── separator.tsx
│   │   ├── AnimatedBackground.tsx # Hero background
│   │   ├── ProfileImage.tsx       # 3D tilt profile
│   │   ├── SlideInSection.tsx     # Slide animation wrapper
│   │   ├── TimelineCard.tsx       # Education/Experience cards
│   │   ├── ProjectCard.tsx        # Project cards
│   │   ├── SkillBadge.tsx         # Skill badges
│   │   ├── ContactForm.tsx        # Contact form
│   │   ├── Navigation.tsx         # Main navigation
│   │   └── MobileNav.tsx          # Mobile navigation
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   ├── hooks/
│   │   ├── useMousePosition.ts    # Mouse tracking hook
│   │   └── useScrollProgress.ts   # Scroll progress hook
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── images/
│       └── profile.jpg
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Dependencies

### Core
- react
- react-dom
- typescript
- vite

### Animation
- framer-motion

### UI
- @radix-ui/react-* (via shadcn)
- lucide-react
- tailwindcss
- class-variance-authority
- clsx
- tailwind-merge

### Fonts
- @fontsource/outfit
- @fontsource/roboto

---

## Color Scheme (Tailwind Config)

```javascript
colors: {
  primary: {
    purple: '#7c3aed',
    blue: '#3b82f6',
  },
  dark: {
    purple: '#5b21b6',
    blue: '#1e40af',
  },
  light: {
    purple: '#a78bfa',
    blue: '#93c5fd',
  },
  background: '#0a0a0f',
  surface: '#1a1a2e',
}
```

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger menu, stacked sections |
| Tablet | 640-1024px | 2-column grids, condensed nav |
| Desktop | > 1024px | Full layout, all animations enabled |

---

## Performance Optimizations

1. **will-change**: Apply only to actively animating elements
2. **Lazy Loading**: Images loaded with loading="lazy"
3. **Animation Pause**: Respect prefers-reduced-motion
4. **Mobile Fallback**: Disable complex animations on mobile
5. **Code Splitting**: Dynamic imports for heavy components

---

## Deployment Strategy

1. **GitHub**: Source code repository
2. **Vercel**: Production deployment
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist/`

---

## Implementation Order

1. Initialize project & install dependencies
2. Configure Tailwind with custom colors
3. Create base components (Navigation, SlideInSection)
4. Build sections in order: Hero → About → Education → Experience → Projects → Skills → Achievements → Contact
5. Add animations progressively
6. Implement mobile responsiveness
7. Test & optimize
8. Build & deploy
