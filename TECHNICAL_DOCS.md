# K-MERTZ Travel and Tours - Technical Documentation

Welcome to the technical documentation for the K-MERTZ Travel and Tours website. This document is designed for developers, contributors, and curious beginners who want to understand how this project was built and how it functions.

---

## 1. Project Overview
**K-MERTZ Travel and Tours** is a high-fidelity landing page for a travel agency specializing in luxury cruises and international travel packages. The primary goal is to provide a premium, trustworthy, and interactive user experience for potential clients looking to book their next vacation.

### Why this project?
- **Brand Identity**: To establish a strong online presence for K-MERTZ.
- **Interactivity**: Beyond a static page, it uses animations and dynamic itineraries to engage users.
- **Conversion Focused**: Designed with clear call-to-actions (CTAs) and an inquiry form.

---

## 2. Core Features
- **Sticky Navigation**: A responsive header that stays with the user.
- **Dynamic Hero Section**: featuring a parallax-style background and essential value propositions (20% downpayment, Visa-free).
- **Service Grid**: A categorized layout of all travel services offered.
- **Interactive Itinerary**: A tabbed navigation system showing an 8-day Japan & Taiwan cruise plan.
- **Inquiry Form**: A styled form for capturing leads.
- **Lead Magnet**: An automated popup offering a free quote to capture visitor interest.

---

## 3. Technology Stack
The project is built using modern web development tools:
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) - Handles routing, server-side rendering, and optimization.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Adds static typing to JavaScript for better reliability and developer experience.
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS for rapid and consistent UI development.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Provides smooth, declarative animations for UI elements.
- **Icons**: [Lucide React](https://lucide.dev/) - A beautiful and consistent icon set.

---

## 4. UI/UX & Design Process
### Aesthetics
- **Primary Palette**: Navy Blue (`#003366`) and Gold (`#FFD700`). This combination was chosen to evoke a sense of luxury, trust, and nautical elegance.
- **Typography**: Uses the **Geist** font family for a clean, modern look.
- **Glassmorphism**: Elements like the Hero stats and Header use backdrop blurs (`backdrop-blur-md`) to feel premium and layered.

### Responsive Strategy
The site is built **Mobile-First**. Every component is designed to look great on a small screen before adding desktop-specific enhancements (like the horizontal layout in the Itinerary section).

---

## 5. Code Flow & Architecture
### Directory Structure
- `/app`: Contains the main routes and global styles. `page.tsx` is the entry point.
- `/components`: Individual UI pieces (Hero, Footer, etc.). This makes the code modular and easy to debug.
- `/data`: Static content (like the itinerary data) is kept here to keep the components clean.
- `/lib`: Utility functions like `cn` (for merging Tailwind classes).

### How it works
1. **Initial Load**: Next.js serves the initial HTML.
2. **Interactive Hydration**: React takes over, and Framer Motion triggers the entry animations.
3. **State Management**: React's `useState` is used for things like the active day in the `Itinerary.tsx`.

---

## 6. Where to Debug & Extend
- **Changing Colors**: Edit `app/globals.css`. We use CSS variables (`--navy`, `--gold`) for easy global updates.
- **Updating Itinerary**: Modify `data/content.ts`. You don't need to touch the UI code to update the travel details.
- **Form Logic**: Check `components/InquiryForm.tsx` to handle how the data is sent.

---

## 7. Beginner's Concept Guide
If you're new to coding, here are the key concepts we used:
- **Components**: Think of these as "Lego bricks." The Header is a brick, the Hero is a brick. We put them together in `page.tsx`.
- **Props**: How we pass information between components.
- **Tailwind Classes**: Instead of writing a separate CSS file, we add classes like `bg-navy` or `font-bold` directly into the HTML to style it instantly.
- **Hooks (useState)**: This is how the computer "remembers" things. For example, it remembers which day you clicked on in the itinerary.

---

Built with ❤️ by the K-MERTZ Development Team.
