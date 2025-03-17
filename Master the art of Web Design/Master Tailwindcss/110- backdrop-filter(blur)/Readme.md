# Backdrop Blur Utility

## Introduction
The **Backdrop Blur Utility** provides a set of classes to apply a backdrop blur effect to an element. This effect is particularly useful for creating frosted glass designs or softening background elements while maintaining visibility. The utility uses the `backdrop-filter: blur()` CSS property to achieve different levels of blur.

## Usage
To apply a backdrop blur effect, use one of the predefined utility classes, such as `backdrop-blur-sm`, `backdrop-blur-md`, or `backdrop-blur-lg`. You can also define custom values using the `backdrop-blur-[value]` syntax.

## Available Classes

| Class                   | CSS Equivalent                         |
|-------------------------|---------------------------------------|
| `backdrop-blur-xs`     | `backdrop-filter: blur(var(--blur-xs)); /* 4px */`  |
| `backdrop-blur-sm`     | `backdrop-filter: blur(var(--blur-sm)); /* 8px */`  |
| `backdrop-blur-md`     | `backdrop-filter: blur(var(--blur-md)); /* 12px */` |
| `backdrop-blur-lg`     | `backdrop-filter: blur(var(--blur-lg)); /* 16px */` |
| `backdrop-blur-xl`     | `backdrop-filter: blur(var(--blur-xl)); /* 24px */` |
| `backdrop-blur-2xl`    | `backdrop-filter: blur(var(--blur-2xl)); /* 40px */` |
| `backdrop-blur-3xl`    | `backdrop-filter: blur(var(--blur-3xl)); /* 64px */` |
| `backdrop-blur-none`   | `backdrop-filter: ;` (Removes blur) |
| `backdrop-blur-[value]` | `backdrop-filter: blur(value);` (Custom value) |
| `backdrop-blur-(--custom-property)` | `backdrop-filter: blur(var(--custom-property));` (CSS variable) |

## Examples

### Basic Example
Apply different levels of backdrop blur to an element:

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-blur-none ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-blur-sm ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-blur-md ..."></div>
</div>
```

### Using a Custom Value
Set a specific blur amount using `backdrop-blur-[value]`:

```html
<div class="backdrop-blur-[2px] ...">
  <!-- Content here -->
</div>
```

Alternatively, use a CSS variable:

```html
<div class="backdrop-blur-(--my-backdrop-blur) ...">
  <!-- Content here -->
</div>
```

## Responsive Design
You can apply backdrop blur effects conditionally based on screen sizes using responsive prefixes:

```html
<div class="backdrop-blur-none md:backdrop-blur-lg ...">
  <!-- Content here -->
</div>
```

## Customizing Your Theme
To define custom blur values in your theme configuration, use `--blur-*` variables:

```css
@theme {
  --blur-2xs: 2px;
}
```

Now you can use `backdrop-blur-2xs` in your HTML:

```html
<div class="backdrop-blur-2xs">
  <!-- Content here -->
</div>
```

For more details, refer to the **theme customization** documentation.

---
This utility is useful for enhancing UI/UX elements by applying subtle or strong blur effects to background elements while keeping the foreground content sharp and readable.

