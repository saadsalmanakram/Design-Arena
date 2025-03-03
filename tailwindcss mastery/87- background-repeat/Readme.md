# Background Repeat

## Introduction
The `background-repeat` utility provides control over the repetition behavior of background images in an element. This utility allows developers to define whether a background image should repeat, and if so, in which direction and pattern. It is particularly useful when designing aesthetically pleasing backgrounds while maintaining flexibility across different screen sizes.

## Available Classes
The following classes are available for controlling the background-repeat property:

| Class              | Styles                              |
|--------------------|------------------------------------|
| `bg-repeat`       | `background-repeat: repeat;`       |
| `bg-repeat-x`     | `background-repeat: repeat-x;`     |
| `bg-repeat-y`     | `background-repeat: repeat-y;`     |
| `bg-repeat-space` | `background-repeat: space;`       |
| `bg-repeat-round` | `background-repeat: round;`       |
| `bg-no-repeat`    | `background-repeat: no-repeat;`   |

## Examples

### Basic Example
To repeat the background image both horizontally and vertically:
```html
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat ..."></div>
```

### Repeating Horizontally
Use `bg-repeat-x` to repeat the background image only along the horizontal axis:
```html
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-x ..."></div>
```

### Repeating Vertically
Use `bg-repeat-y` to repeat the background image only along the vertical axis:
```html
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-y ..."></div>
```

### Preventing Clipping
Use `bg-repeat-space` to ensure the background image is repeated without clipping:
```html
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-space ..."></div>
```

### Preventing Clipping and Gaps
Use `bg-repeat-round` to prevent clipping and stretch the background image as needed to avoid gaps:
```html
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-round ..."></div>
```

### Disabling Repeating
Use `bg-no-repeat` to prevent a background image from repeating:
```html
<div class="bg-[url(/img/clouds.svg)] bg-center bg-no-repeat ..."></div>
```

## Responsive Design
To apply `background-repeat` utilities conditionally based on screen size, use responsive prefixes like `md:`.

```html
<div class="bg-repeat md:bg-repeat-x ...">
  <!-- Content here -->
</div>
```

For more details, refer to the official [variants documentation](#).

