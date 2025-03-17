# Overscroll Behavior

## Introduction
The `overscroll-behavior` utility provides control over how the browser behaves when reaching the boundary of a scrolling area. By using these classes, you can prevent parent elements from scrolling when a child element reaches its scroll limit, or disable the default "bounce" effects seen in some operating systems.

## Classes and Styles

The following classes are available to control `overscroll-behavior`:

| Class                 | CSS Style                        |
|----------------------|--------------------------------|
| `overscroll-auto`   | `overscroll-behavior: auto;`   |
| `overscroll-contain` | `overscroll-behavior: contain;` |
| `overscroll-none`   | `overscroll-behavior: none;`   |
| `overscroll-x-auto`   | `overscroll-behavior-x: auto;`   |
| `overscroll-x-contain` | `overscroll-behavior-x: contain;` |
| `overscroll-x-none`   | `overscroll-behavior-x: none;`   |
| `overscroll-y-auto`   | `overscroll-behavior-y: auto;`   |
| `overscroll-y-contain` | `overscroll-behavior-y: contain;` |
| `overscroll-y-none`   | `overscroll-behavior-y: none;`   |

## Examples

### 1. Preventing Parent Overscrolling
Use the `overscroll-contain` utility to prevent scrolling in the target area from triggering scrolling in the parent element while preserving "bounce" effects where supported:

```html
<div class="overscroll-contain ...">
  Your scrollable content here...
</div>
```

### 2. Preventing Overscroll Bouncing
Use the `overscroll-none` utility to prevent both parent scrolling and bounce effects:

```html
<div class="overscroll-none ...">
  Your scrollable content here...
</div>
```

### 3. Using Default Overscroll Behavior
Use the `overscroll-auto` utility to allow normal scrolling behavior:

```html
<div class="overscroll-auto ...">
  Your scrollable content here...
</div>
```

### 4. Responsive Design
You can apply `overscroll-behavior` utilities responsively using breakpoints. For example, applying `overscroll-contain` at medium screen sizes and above:

```html
<div class="overscroll-auto md:overscroll-contain ...">
  Your scrollable content here...
</div>
```
