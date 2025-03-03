# Text Decoration Color Utilities

Utilities for controlling the color of text decorations in your web projects.

## Introduction

The `text-decoration-color` utilities allow you to customize the color of text decorations (like underlines) for links, text, and other elements. This can be particularly useful for enhancing the visual appeal and accessibility of your web content.

## Classes and Styles

Below are the available classes and their corresponding CSS styles for text decoration colors:

### Inheritance and Current Color

- `decoration-inherit`
  - `text-decoration-color: inherit;`

- `decoration-current`
  - `text-decoration-color: currentColor;`

### Transparent and Basic Colors

- `decoration-transparent`
  - `text-decoration-color: transparent;`

- `decoration-black`
  - `text-decoration-color: var(--color-black); /* #000 */`

- `decoration-white`
  - `text-decoration-color: var(--color-white); /* #fff */`

### Shades of Red

- `decoration-red-50` to `decoration-red-950**
  - Example: `decoration-red-500` maps to `text-decoration-color: var(--color-red-500); /* oklch(0.637 0.237 25.335) */`

### Shades of Orange

- `decoration-orange-50` to `decoration-orange-950`
  - Example: `decoration-orange-500` maps to `text-decoration-color: var(--color-orange-500); /* oklch(0.705 0.21 47.704) */`

### Shades of Amber

- `decoration-amber-50` to `decoration-amber-950`
  - Example: `decoration-amber-500` maps to `text-decoration-color: var(--color-amber-500); /* oklch(0.769 0.184 70.08) */`

### Shades of Yellow

- `decoration-yellow-50` to `decoration-yellow-950`
  - Example: `decoration-yellow-500` maps to `text-decoration-color: var(--color-yellow-500); /* oklch(0.795 0.184 86.047) */`

### Shades of Lime

- `decoration-lime-50` to `decoration-950`
  - Example: `decoration-lime-500` maps to `text-decoration-color: var(--color-lime-500); /* oklch(0.768 0.233 130.85) */`

### Shades of Green

- `decoration-green-50` to `decoration-green-950`
  - Example: `decoration-green-500` maps to `text-decoration-color: var(--color-green-500); /* oklch(0.723 0.219 151.711) */`

### Shades of Emerald

- `decoration-emerald-50` to `decoration-emerald-950`
  - Example: `decoration-emerald-500` maps to `text-decoration-color: var(--color-emerald-500); /* oklch(0.696 0.21 162.48) */`

### Shades of Teal

- `decoration-teal-50` to `decoration-teal-950`
  - Example: `decoration-teal-500` maps to `text-decoration-color: var(--color-teal-500); /* oklch(0.704 0.14 182.503) */`

### Shades of Cyan

- `decoration-cyan-50` to `decoration-cyan-950`
  - Example: `decoration-cyan-500` maps to `text-decoration-color: var(--color-cyan-500); /* oklch(0.715 0.143 215.251) */`

### Shades of Sky

- `decoration-sky-50` to `decoration-sky-950`
  - Example: `decoration-sky-500` maps to `text-decoration-color: var(--color-sky-500); /* oklch(0.685 0.169 237.323) */`

### Shades of Blue

- `decoration-blue-50` to `decoration-blue-950`
  - Example: `decoration-blue-500` maps to `text-decoration-color: var(--color-blue-500); /* oklch(0.623 0.245 259.815) */`

### Shades of Indigo

- `decoration-indigo-50` to `decoration-indigo-950`
  - Example: `decoration-indigo-500` maps to `text-decoration-color: var(--color-indigo-500); /* oklch(0.606 0.233 277.117) */`

### Shades of Violet

- `decoration-violet-50` to `decoration-violet-950`
  - Example: `decoration-violet-500` maps to `text-decoration-color: var(--color-violet-500); /* oklch(0.606 0.233 292.717) */`

### Shades of Purple

- `decoration-purple-50` to `decoration-purple-950`
  - Example: `decoration-purple-500` maps to `text-decoration-color: var(--color-purple-500); /* oklch(0.606 0.265 303.9) */`

### Shades of Fuchsia

- `decoration-fuchsia-50` to `decoration-fuchsia-950}`
  - Example: `decoration-fuchsia-500` maps to `text-decoration-color: var(--color-fuchsia-500); /* oklch(0.667 0.295 322.15) */`

### Shades of Pink

- `decoration-pink-50` to `decoration-pink-950`
  - Example: `decoration-pink-500` maps to `text-decoration-color: var(--color-pink-500); /* oklch(0.645 0.241 354.308) */`

### Shades of Rose

- `decoration-rose-50` to `decoration-rose-950`
  - Example: `decoration-rose-500` maps to `text-decoration-color: var(--color-rose-500); /* oklch(0.645 0.246 16.439) */`

### Shades of Slate

- `decoration-slate-50` to `decoration-slate-950`
  - Example: `decoration-slate-500` maps to `text-decoration-color: var(--color-slate-500); /* oklch(0.554 0.046 257.364) */`

### Shades of Gray

- `decoration-gray-50` to `decoration-gray-950`
  - Example: `decoration-gray-500` maps to `text-decoration-color: var(--color-gray-500); /* oklch(0.551 0.027 264.364) */

### Shades of Zinc

- `decoration-zinc-50` to `decoration-zinc-950`
  - Example: `decoration-zinc-500` maps to `text-decoration-color: var(--color-zinc-500); /* oklch(0.552 0.015 285.938) */`

### Shades of Neutral

- `decoration-neutral-50` to `decoration-neutral-950`
  - Example: `decoration-neutral-500` maps to `text-decoration-color: var(--color-neutral-500); /* oklch(0.556 0 0) */`

### Shades of Stone

- `decoration-stone-50` to `decoration-stone-950`
  - Example: `decoration-stone-500` maps to `text-decoration-color: var(--color-stone-500); /* oklch(0.556 0.013 58.071) */`

### Custom Colors

- `decoration-(<custom-property>)`
  - Example: `decoration-(--my-color)` maps to `text-decoration-color: var(--my-color);`

- `decoration-[<value>]`
  - Example: `decoration-[#50d71e]` maps to `text-decoration-color: #50d71e;`

## Examples

### Basic Example

Use utilities like `decoration-sky-500` and `decoration-pink-500` to change the text decoration color of an element:

```html
<p>
  I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings
  at <a class="underline decoration-sky-500">My Company, Inc</a>. Outside
  of work, I like to <a class="underline decoration-pink-500">watch pod-racing</a>
  and have <a class="underline decoration-indigo-500">light-saber</a> fights.
</p>
```

### Changing Opacity

Use the color opacity modifier to control the text decoration color opacity of an element:

```html
<p>
  I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings
  at <a class="underline decoration-sky-500/30">My Company, Inc</a>. Outside
  of work, I like to <a class="underline decoration-pink-500/30">watch pod-racing</a>
  and have <a class="underline decoration-indigo-500/30">light-saber</a> fights.
</p>
```

### Using a Custom Value

Use the `decoration-[<value>]` syntax to set the text decoration color based on a completely custom value:

```html
<p class="decoration-[#50d71e] ...">
  <!-- ... -->
</p>
```

For CSS variables, you can also use the `decoration-(<custom-property>)` syntax:

```html
<p class="decoration-(--my-color) ...">
  <!-- ... -->
</p>
```

### Applying on Hover

Prefix a `text-decoration-color` utility with a variant like `hover:` to only apply the utility in that state:

```html
<p>The <a href="..." class="underline hover:decoration-pink-500 ...">quick brown fox</a> jumps over the lazy dog.</p>
```

### Responsive Design

Prefix a `text-decoration-color` utility with a variant like `md:` to only apply the utility in that state:

```html
<p class="underline decoration-sky-600 md:decoration-blue-600 ...">
  <!-- ... -->
</p>
```

### Customizing Your Theme

Use the `--color-*` theme variables to customize the color utilities in your project:

```css
:root {
  --color-regal-blue: #243c5a; 
}
```

Then you can use the `decoration-regal-blue` utility in your markup:

```html
<p class="decoration-regal-blue">
  <!-- ... -->
</p>
```

## Notes

- Ensure that the color variables (`--color-*`) are defined in your CSS.
- You can extend the list of colors by adding more custom variables and utilities as needed.

This utility set provides a comprehensive way to control the text decoration colors across your web project, enhancing both aesthetics and accessibility.