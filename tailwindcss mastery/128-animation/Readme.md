# Animation Utilities

## Introduction
The **Animation Utilities** provide a set of predefined CSS animations that can be applied to elements to enhance user experience and interactivity. These utilities simplify the process of adding animations to elements, making them visually appealing and dynamic. Common use cases include loading indicators, notification pings, skeleton loaders, and bounce effects.

## Available Classes

### `animate-spin`
Applies a continuous spinning effect to an element, useful for loading indicators.
```css
animation: var(--animate-spin); /* spin 1s linear infinite */

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

### `animate-ping`
Causes an element to scale and fade, simulating a ping effect, often used for notifications.
```css
animation: var(--animate-ping); /* ping 1s cubic-bezier(0, 0, 0.2, 1) infinite */

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
```

### `animate-pulse`
Creates a pulsing effect where an element fades in and out, commonly used for skeleton loaders.
```css
animation: var(--animate-pulse); /* pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite */

@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
```

### `animate-bounce`
Applies a bouncing motion to an element, making it move up and down.
```css
animation: var(--animate-bounce); /* bounce 1s infinite */

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
```

### Additional Classes
- `animate-none`: Disables animation.
- `animate-(<custom-property>)`: Applies a custom CSS variable animation.
- `animate-[<value>]`: Uses a custom-defined animation value.

## Usage Examples

### 1. Adding a Spin Animation
```html
<button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
    <!-- SVG Content -->
  </svg>
  Processing…
</button>
```

### 2. Adding a Ping Animation
```html
<span class="relative flex size-3">
  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
</span>
```

### 3. Adding a Pulse Animation
```html
<div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
  <div class="flex animate-pulse space-x-4">
    <div class="size-10 rounded-full bg-gray-200"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 rounded bg-gray-200"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 h-2 rounded bg-gray-200"></div>
          <div class="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div class="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
```

### 4. Adding a Bounce Animation
```html
<svg class="size-6 animate-bounce ...">
  <!-- SVG Content -->
</svg>
```

## Supporting Reduced Motion
To accommodate users who prefer reduced motion, apply the `motion-safe` and `motion-reduce` variants:
```html
<button type="button" class="bg-indigo-600 ..." disabled>
  <svg class="mr-3 size-5 motion-safe:animate-spin ..." viewBox="0 0 24 24">
    <!-- SVG Content -->
  </svg>
  Processing
</button>
```

## Custom Animations
To define custom animations, use the `animate-[<value>]` syntax:
```html
<div class="animate-[wiggle_1s_ease-in-out_infinite] ...">
  <!-- Content -->
</div>
```

For CSS variable-based animations, use:
```html
<div class="animate-(--my-animation) ...">
  <!-- Content -->
</div>
```

## Responsive Animations
Apply animations conditionally based on screen sizes by using breakpoint variants:
```html
<div class="animate-none md:animate-spin ...">
  <!-- Content -->
</div>
```

## Customizing the Theme
Customize animation utilities in your project using `--animate-*` variables:
```css
@theme {
  --animate-wiggle: wiggle 1s ease-in-out infinite;
  @keyframes wiggle {
    0%, 100% {
      transform: rotate(-3deg);
    }
    50% {
      transform: rotate(3deg);
    }
  }
}
```

Now, you can use the custom animation:
```html
<div class="animate-wiggle">
  <!-- Content -->
</div>
```

## Conclusion
These animation utilities provide an easy and efficient way to enhance user experience with CSS animations. Whether adding subtle loading effects or dynamic bouncing elements, these utilities make animations simple and customizable for any project.

