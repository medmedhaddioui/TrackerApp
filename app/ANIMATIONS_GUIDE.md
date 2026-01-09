# Animation Features Guide

## Overview
This website now features comprehensive Lingoda-inspired animations including smooth transitions, hover effects, scroll-triggered animations, and interactive elements.

## 🎨 Animation Types Implemented

### 1. **Scroll Animations**
- **Fade-in-up**: Elements fade in and slide up when entering viewport
- **Staggered delays**: Sequential animations for list items
- **Reversible animations**: Elements animate out when scrolling away (HomePage sections)

### 2. **Hover Effects**

#### Cards (Benefits, Programs, Proposition)
- Lift animation: Cards rise 12px on hover with enhanced shadow
- Scale effect: Slight zoom (1.02-1.03x) for depth
- Background gradient: Subtle color overlay appears on hover
- Icon rotation: Icons rotate 6° and scale 110% on hover

#### Buttons
- Press effect: Scale down (0.95x) on click for tactile feedback
- Lift on hover: Buttons move up 2px with enhanced shadow
- Icon translation: Arrow icons slide right/left on hover
- Smooth cubic-bezier transitions for natural feel

### 3. **Floating Animations**
- Background gradient blobs in Hero and About sections
- 6-second ease-in-out loop with vertical movement
- Decorative elements float independently with different delays

### 4. **Animated Counters**
- Numbers count up when entering viewport (Hero & About stats)
- Smooth easing function for natural counting
- Only animates once per page load
- Used in: Hero stats (250k+, 80+, 95%), About section overlay cards

### 5. **Image Hover Effects**
- Scale on hover: Images zoom 105-110% within container
- Gradient overlay: Overlay intensity changes on hover
- Partner logos: Opacity increases and slight lift on hover
- Pause scrolling: Partner carousel pauses when hovering

### 6. **Entrance Animations**
Hero section sequential animations:
- Badge: 0.1s delay
- Heading: 0.2s delay
- Description: 0.3s delay
- Buttons: 0.4s delay
- Stats: 0.5s delay
- Hero image: 0.4s delay

All use `animate-fade-in-up` with `opacity: 0` and `animationFillMode: 'forwards'`

## 📦 Key Animation Classes

### CSS Classes Added
```css
.card-animate          // Enhanced card hover with lift & scale
.float-animation       // Slow floating effect (6s loop)
.icon-animate          // Icon scale & rotate on hover
.btn-press            // Button press effect on click
.counter-animate      // Animated number counter
.stagger-1 to .stagger-6  // Staggered animation delays
```

### Keyframe Animations
- `bounceIn`: Spring-like entrance
- `slideUp`: Slide up from bottom
- `floatSlow`: Gentle vertical movement
- `countUp`: Number rolling animation
- `ripple`: Expanding circle effect
- `glow`: Pulsing glow effect

## 🎯 Component-Specific Animations

### Hero.jsx
- ✅ Floating background blobs (3 elements)
- ✅ Sequential text entrance animations
- ✅ Animated stat counters (250k+, 80+, 95%)
- ✅ Button hover & press effects
- ✅ Floating info cards with bounce
- ✅ Hero image fade-in

### Benefits.jsx
- ✅ Card hover lift animation
- ✅ Icon rotate & scale on hover
- ✅ Stat number scale animation
- ✅ Background gradient overlay

### Programs.jsx
- ✅ Card lift animation (12px)
- ✅ Image zoom on hover (110%)
- ✅ Gradient overlay fade-in
- ✅ "Free Trial" badge bounce
- ✅ Star rating scale on hover

### About.jsx
- ✅ Floating decorative elements
- ✅ Image scale on hover (105%)
- ✅ Animated stat counters in overlay cards
- ✅ Card hover effects
- ✅ Button press effect

### Partners.jsx
- ✅ Auto-scrolling logo carousel
- ✅ Pause on hover
- ✅ Logo opacity transition (60% → 100%)
- ✅ Logo lift & scale on hover

### Proposition.jsx
- ✅ Card lift animation
- ✅ Icon rotate & scale effects
- ✅ Glow effect on hover
- ✅ Left border width animation

### HomePage.jsx
- ✅ Scroll-triggered section animations
- ✅ Reversible fade animations (fade in when visible, out when not)
- ✅ AnimatedSection wrapper component

## 🚀 Performance Optimizations

1. **Will-change property**: Applied to frequently animated elements
2. **Hardware acceleration**: Using transform and opacity for smooth 60fps
3. **Intersection Observer**: Animations only trigger when elements are visible
4. **CSS containment**: Isolated animation layers prevent reflows
5. **Single animation per element**: No conflicting animations

## 🎨 Animation Timing

### Duration Standards
- **Quick interactions**: 150-300ms (button clicks, icon changes)
- **Card hover effects**: 400-500ms (lift, scale, shadow)
- **Entrance animations**: 600-800ms (fade-in, slide-up)
- **Floating effects**: 6000ms (slow, gentle movement)

### Easing Functions
- **Cubic-bezier(0.4, 0, 0.2, 1)**: Default smooth easing
- **Cubic-bezier(0.175, 0.885, 0.32, 1.275)**: Card hover (slight bounce)
- **Linear**: Carousel scrolling, loading animations
- **Ease-out**: Entrance animations
- **Ease-in-out**: Floating effects

## 📱 Responsive Behavior

All animations work seamlessly across devices:
- Mobile: Simplified hover effects (tap-based)
- Tablet: Full animation support
- Desktop: Enhanced hover states and interactions

## 🔧 How to Customize

### Adjusting Animation Speed
Edit duration values in `/src/index.css`:
```css
.card-animate {
  transition: all 0.4s cubic-bezier(...);  /* Change 0.4s */
}
```

### Changing Counter Animation
Edit `/src/components/AnimatedCounter.jsx`:
```jsx
<AnimatedCounter end={250} duration={2000} suffix="k+" />
// duration in milliseconds
```

### Modifying Floating Speed
Edit animation-duration in component styles:
```jsx
style={{ animationDelay: '0s' }}  // Change delay
// Or modify CSS:
animation: floatSlow 6s ease-in-out infinite;  // Change 6s
```

## 🎬 Animation Inspiration

Inspired by [Lingoda.com](https://www.lingoda.com/en/):
- Smooth card hover transitions
- Scroll-triggered fade-ins
- Professional button interactions
- Subtle floating elements
- Animated statistics

## ✨ Best Practices

1. **Consistent timing**: Similar elements use similar durations
2. **Purposeful animation**: Each animation serves UX purpose
3. **Performance first**: Hardware-accelerated properties
4. **Accessibility**: Respects `prefers-reduced-motion`
5. **Progressive enhancement**: Works without JavaScript (CSS fallbacks)

---

**Created**: January 2026
**Framework**: React + Vite + Tailwind CSS
**Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
