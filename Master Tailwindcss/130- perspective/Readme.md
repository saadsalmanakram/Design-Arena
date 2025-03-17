# Perspective Utilities

## Introduction
The **Perspective** utility provides a way to control how elements are positioned in 3D space by setting the distance between the viewer and the z-plane. This utility helps create depth effects by modifying the perspective of child elements.

By adjusting perspective, you can simulate camera distance, making elements appear closer or further away from the viewer. This is particularly useful for creating immersive 3D effects, enhancing UI interactions, or implementing advanced visual designs.

## Available Classes
The following utility classes can be used to set different perspective levels:

| Class                     | Styles Applied                          |
|---------------------------|---------------------------------------|
| `perspective-dramatic`    | `perspective: var(--perspective-dramatic); /* 100px */` |
| `perspective-near`        | `perspective: var(--perspective-near); /* 300px */` |
| `perspective-normal`      | `perspective: var(--perspective-normal); /* 500px */` |
| `perspective-midrange`    | `perspective: var(--perspective-midrange); /* 800px */` |
| `perspective-distant`     | `perspective: var(--perspective-distant); /* 1200px */` |
| `perspective-none`        | `perspective: none;` |
| `perspective-(<custom-property>)` | `perspective: var(<custom-property>);` |
| `perspective-[<value>]`   | `perspective: <value>;` |

## Usage Examples

### Basic Example
Use utilities like `perspective-normal` and `perspective-distant` to control the depth perception of elements:

```html
<div class="size-20 perspective-dramatic ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
</div>
```

This simulates moving the camera closer to or further away from an object.

### Removing Perspective
Use `perspective-none` to remove the perspective effect from an element:

```html
<div class="perspective-none ...">
  <!-- Content without perspective effect -->
</div>
```

### Using Custom Values
You can define a custom perspective value using square brackets `perspective-[<value>]`:

```html
<div class="perspective-[750px] ...">
  <!-- Custom perspective effect -->
</div>
```

Alternatively, you can use CSS variables with `perspective-(<custom-property>)`:

```html
<div class="perspective-(--my-perspective) ...">
  <!-- Custom perspective using a CSS variable -->
</div>
```

This automatically applies `perspective: var(--my-perspective);`.

### Responsive Design
You can apply different perspective values based on screen size using responsive variants:

```html
<div class="perspective-midrange md:perspective-dramatic ...">
  <!-- Different perspectives at different screen sizes -->
</div>
```

### Customizing the Theme
You can define custom perspective values in your theme configuration using CSS variables:

```css
@theme {
  --perspective-remote: 1800px;
}
```

Now, you can use `perspective-remote` in your HTML:

```html
<div class="perspective-remote">
  <!-- Custom theme-based perspective effect -->
</div>
```

For more details on theme customization, refer to the **theme documentation**.

## Conclusion
The **Perspective** utility is a powerful tool for enhancing 3D effects in UI design. By controlling perspective, developers can create immersive, visually engaging interfaces with ease. Experiment with different values to find the best settings for your project.

