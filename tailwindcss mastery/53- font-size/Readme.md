# Font Size Utilities

## Introduction
Font size utilities allow developers to control the text size of elements efficiently. These utilities provide a range of predefined font sizes and the flexibility to set custom values using CSS variables or direct specifications. This ensures a responsive and adaptable typography system that enhances readability and maintains design consistency across different screen sizes.

## Usage

### Predefined Classes
You can use the following utility classes to set the font size of an element. These classes correspond to various predefined sizes and automatically apply appropriate line heights for optimal readability.

| Class      | Font Size | Line Height Calculation |
|------------|------------|------------------------|
| `text-xs`  | `0.75rem` (12px) | `calc(1 / 0.75)` |
| `text-sm`  | `0.875rem` (14px) | `calc(1.25 / 0.875)` |
| `text-base` | `1rem` (16px) | `calc(1.5 / 1)` |
| `text-lg`  | `1.125rem` (18px) | `calc(1.75 / 1.125)` |
| `text-xl`  | `1.25rem` (20px) | `calc(1.75 / 1.25)` |
| `text-2xl` | `1.5rem` (24px) | `calc(2 / 1.5)` |
| `text-3xl` | `1.875rem` (30px) | `calc(2.25 / 1.875)` |
| `text-4xl` | `2.25rem` (36px) | `calc(2.5 / 2.25)` |
| `text-5xl` | `3rem` (48px) | `1` |
| `text-6xl` | `3.75rem` (60px) | `1` |
| `text-7xl` | `4.5rem` (72px) | `1` |
| `text-8xl` | `6rem` (96px) | `1` |
| `text-9xl` | `8rem` (128px) | `1` |

### Examples
#### Basic Example
Use predefined font-size classes to apply different text sizes:

```html
<p class="text-sm">The quick brown fox jumps over the lazy dog.</p>
<p class="text-base">The quick brown fox jumps over the lazy dog.</p>
<p class="text-lg">The quick brown fox jumps over the lazy dog.</p>
<p class="text-xl">The quick brown fox jumps over the lazy dog.</p>
<p class="text-2xl">The quick brown fox jumps over the lazy dog.</p>
```

### Setting Line Height
Combine font-size utilities with line-height modifiers:

```html
<p class="text-sm/6">Text with text-sm size and line-height 6.</p>
<p class="text-sm/7">Text with text-sm size and line-height 7.</p>
<p class="text-sm/8">Text with text-sm size and line-height 8.</p>
```

### Custom Font Sizes
Set custom font sizes using explicit values or CSS variables:

```html
<p class="text-[14px]">Custom font size of 14px.</p>
<p class="text-(length:--my-text-size)">Using a CSS variable for font size.</p>
```

### Responsive Font Sizes
Apply different font sizes based on screen size breakpoints:

```html
<p class="text-sm md:text-base lg:text-lg">Responsive text sizing.</p>
```

### Customizing Font Sizes
Modify font sizes through theme variables:

```css
@theme {
  --text-tiny: 0.625rem;
  --text-tiny--line-height: 1.5rem;
  --text-tiny--letter-spacing: 0.125rem;
  --text-tiny--font-weight: 500;
}
```

Now, use it in your markup:

```html
<div class="text-tiny">Custom tiny text.</div>
```

## Conclusion
Font-size utilities provide a simple and efficient way to manage typography in web projects. Whether using predefined sizes, custom values, or responsive breakpoints, these utilities ensure consistent and readable text across different devices and layouts.

