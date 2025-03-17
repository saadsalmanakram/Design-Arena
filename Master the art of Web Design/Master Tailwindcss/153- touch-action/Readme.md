# Touch Action Utilities

## Introduction
The **touch-action** utilities control how an element can be scrolled and zoomed on touchscreens. These utilities allow developers to define how touch gestures interact with elements, preventing unintended scrolling or zooming behaviors. This is particularly useful for interactive web applications, mobile-friendly designs, and touch-based user interfaces.

## Available Classes
The following classes can be used to specify the `touch-action` behavior for an element:

| Class               | Styles                      | Description |
|---------------------|---------------------------|-------------|
| `touch-auto`       | `touch-action: auto;`      | Default behavior where the browser determines the touch action. |
| `touch-none`       | `touch-action: none;`      | Disables all touch interactions, preventing scrolling and zooming. |
| `touch-pan-x`      | `touch-action: pan-x;`     | Allows horizontal panning only. |
| `touch-pan-left`   | `touch-action: pan-left;`  | Allows panning to the left only. |
| `touch-pan-right`  | `touch-action: pan-right;` | Allows panning to the right only. |
| `touch-pan-y`      | `touch-action: pan-y;`     | Allows vertical panning only. |
| `touch-pan-up`     | `touch-action: pan-up;`    | Allows panning upwards only. |
| `touch-pan-down`   | `touch-action: pan-down;`  | Allows panning downwards only. |
| `touch-pinch-zoom` | `touch-action: pinch-zoom;`| Allows pinch-to-zoom gestures. |
| `touch-manipulation` | `touch-action: manipulation;` | Allows panning and pinch gestures but disables double-tap zooming. |

## Examples

### Basic Example
You can use `touch-pan-y` and `touch-pinch-zoom` to control how an element can be scrolled (panned) and zoomed on touchscreens.

```html
<div class="h-48 w-full touch-auto overflow-auto ...">
  <img class="h-auto w-[150%] max-w-none" src="..." />
</div>

<div class="h-48 w-full touch-none overflow-auto ...">
  <img class="h-auto w-[150%] max-w-none" src="..." />
</div>

<div class="h-48 w-full touch-pan-x overflow-auto ...">
  <img class="h-auto w-[150%] max-w-none" src="..." />
</div>

<div class="h-48 w-full touch-pan-y overflow-auto ...">
  <img class="h-auto w-[150%] max-w-none" src="..." />
</div>
```

### Responsive Design
You can use responsive variants to apply `touch-action` utilities conditionally based on screen sizes. For example, using `md:touch-auto` ensures that `touch-pan-x` applies only on small screens, and `touch-auto` applies on medium screens and above:

```html
<div class="touch-pan-x md:touch-auto ...">
  <!-- Content -->
</div>
```

## Learn More
For more details on using variants and responsive utilities, refer to the [official documentation](https://tailwindcss.com/docs/touch-action).