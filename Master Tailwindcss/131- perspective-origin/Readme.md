# Perspective Origin Utilities

## Introduction

The `perspective-origin` utility provides control over the vanishing point of an element when placed in 3D space. By adjusting the perspective origin, you can define where the viewer's eye perceives the depth effect, influencing how elements transform in a 3D environment.

This utility is useful for creating dynamic 3D effects, animations, and interactive UI components that utilize perspective transformations.

## Usage

The `perspective-origin` utility allows you to set the perspective origin using predefined classes or custom values.

### Available Classes

| Class | Styles Applied |
|--------|----------------|
| `perspective-origin-center` | `perspective-origin: center;` |
| `perspective-origin-top` | `perspective-origin: top;` |
| `perspective-origin-top-right` | `perspective-origin: top right;` |
| `perspective-origin-right` | `perspective-origin: right;` |
| `perspective-origin-bottom-right` | `perspective-origin: bottom right;` |
| `perspective-origin-bottom` | `perspective-origin: bottom;` |
| `perspective-origin-bottom-left` | `perspective-origin: bottom left;` |
| `perspective-origin-left` | `perspective-origin: left;` |
| `perspective-origin-top-left` | `perspective-origin: top left;` |
| `perspective-origin-(<custom-property>)` | `perspective-origin: var(<custom-property>);` |
| `perspective-origin-[<value>]` | `perspective-origin: <value>;` |

## Examples

### Basic Example

Use utilities like `perspective-origin-top` and `perspective-origin-bottom-left` to control where the vanishing point of a perspective is located:

```html
<div class="size-20 perspective-near perspective-origin-top-left ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
</div>

<div class="size-20 perspective-near perspective-origin-bottom-right ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
</div>
```

### Using a Custom Value

Use the `perspective-origin-[<value>]` syntax to set the perspective origin based on a completely custom value:

```html
<div class="perspective-origin-[200%_150%] ...">
  <!-- ... -->
</div>
```

For CSS variables, use the `perspective-origin-(<custom-property>)` syntax:

```html
<div class="perspective-origin-(--my-perspective-origin) ...">
  <!-- ... -->
</div>
```

This syntax is a shorthand for `perspective-origin-[var(<custom-property>)]`, automatically adding the `var()` function for you.

### Responsive Design

You can apply the `perspective-origin` utility responsively by prefixing it with a breakpoint variant like `md:` to apply it at medium screen sizes and above:

```html
<div class="perspective-origin-center md:perspective-origin-bottom-left ...">
  <!-- ... -->
</div>
```

## Learn More

For additional details, check out the official documentation on perspective utilities and responsive design handling.

