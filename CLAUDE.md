# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server at http://localhost:5173
- `npm run build` - Build for production (output in /dist)
- `npm run preview` - Preview production build locally

## Code Architecture

### Technology Stack
- React 19 with TypeScript
- Vite as build tool and dev server
- Tailwind CSS 4 for styling (via @tailwindcss/vite plugin)
- Framer Motion for animations
- Lucide React for icons
- Three.js and @react-three/fiber (dependencies, used in BackgroundGradient component)
- @shadergradient/react for animated background gradients

### Project Structure
```
src/
├── index.css          # Global CSS (Tailwind imports)
├── main.tsx           # React entry point
├── App.tsx            # Main application component
├── components/
│   └── BackgroundGradient.tsx  # Animated background using three.js
└── utils/
    └── cn.ts          # Utility for conditional class names (tailwind-merge)
```

### Key Features
1. **Tab-based Navigation**: Switch between music groups (Chavabien, Rock, Chenapan Dub)
2. **Concert Information Display**: Shows venue, timing details for each group
3. **Document Management**: Displays technical documents (images/PDFs) per group
4. **Modal Document Viewer**: Click to view documents in fullscreen overlay
5. **Responsive Design**: Desktop navigation (horizontal) and mobile bottom navigation
6. **Animated Transitions**: Framer Motion for tab switches and modal animations

### Data Flow
- Hardcoded data in `App.tsx` (`GROUPS_DATA` constant)
- State management via React `useState` for:
  - `activeTab`: Currently selected group ID
  - `selectedDoc`: Currently viewed document (for modal)
- Components reactively update based on state changes

### Styling Approach
- Tailwind CSS utility classes
- Custom CSS variables in `index.css` for theme colors
- Conditional class merging via `cn.ts` utility
- Dark/light theme awareness through Tailwind's dark mode

### Animation Patterns
- Layout ID shared transitions for tab navigation underlines
- Modal scale/fade animations with AnimatePresence
- Spring physics for mobile navigation background
- Exit animations for smooth unmounting

## Common Development Tasks

### Adding New Features
1. Update `GROUPS_DATA` in App.tsx for new groups/concerts
2. Add new document entries with appropriate types (image/pdf)
3. Styling follows existing patterns with Tailwind classes
4. For new animations, follow existing Framer Motion patterns in App.tsx

### Modifying Styles
- Tailwind classes are used directly in JSX
- Global adjustments in index.css
- Theme colors can be adjusted via Tailwind configuration (vite.config.ts)

### Working with Animations
- All animations use Framer Motion's motion components
- Layout animations use `layoutId` prop for shared transitions
- Modal transitions use `AnimatePresence` for mount/unmount animations
- Refer to existing examples in App.tsx for navigation underlines and modal

## Dependencies
- Production: react, react-dom, @react-three/fiber, @shadergradient/react, camera-controls, clsx, framer-motion, lucide-react, tailwind-merge, three, three-stdlib
- Dev: @tailwindcss/vite, @types/* (node, react, react-dom, three), @vitejs/plugin-react, tailwindcss, typescript, vite, vite-plugin-singlefile

## Notes
- No test framework is currently configured; add vitest or similar if testing is needed
- PDF documents cannot be previewed directly due to browser limitations; links open in new tab
- Images are loaded from external URLs (unsplash.com) - consider caching or local storage for production
- The singlefile Vite plugin is configured for potential single HTML file builds