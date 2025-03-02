# Overflow Utilities

## Introduction
The `overflow` utilities control how an element handles content that is too large for the container. These utilities provide different ways to manage overflowing content, including clipping, scrolling, or making it visible. They can be applied in both horizontal and vertical directions, enabling fine-grained control over layout behavior.

## Available Classes

| Class                  | Styles                 |
|------------------------|-----------------------|
| `overflow-auto`       | `overflow: auto;`     |
| `overflow-hidden`     | `overflow: hidden;`   |
| `overflow-clip`       | `overflow: clip;`     |
| `overflow-visible`    | `overflow: visible;`  |
| `overflow-scroll`     | `overflow: scroll;`   |
| `overflow-x-auto`     | `overflow-x: auto;`   |
| `overflow-y-auto`     | `overflow-y: auto;`   |
| `overflow-x-hidden`   | `overflow-x: hidden;` |
| `overflow-y-hidden`   | `overflow-y: hidden;` |
| `overflow-x-clip`     | `overflow-x: clip;`   |
| `overflow-y-clip`     | `overflow-y: clip;`   |
| `overflow-x-visible`  | `overflow-x: visible;`|
| `overflow-y-visible`  | `overflow-y: visible;`|
| `overflow-x-scroll`   | `overflow-x: scroll;` |
| `overflow-y-scroll`   | `overflow-y: scroll;` |

## Examples

### Showing Content That Overflows
Use the `overflow-visible` utility to allow content within an element to overflow beyond its container:
```html
<div class="overflow-visible ...">
  <!-- Content that overflows will be visible -->
</div>
```

### Hiding Content That Overflows
Use the `overflow-hidden` utility to clip any overflowing content:
```html
<div class="overflow-hidden ...">
  <!-- Overflowing content will be hidden -->
</div>
```

### Scrolling If Needed
Use the `overflow-auto` utility to allow scrolling only when content overflows:
```html
<div class="overflow-auto ...">
  <!-- Scrollbars appear only when needed -->
</div>
```

### Scrolling Horizontally If Needed
Use `overflow-x-auto` to allow horizontal scrolling:
```html
<div class="overflow-x-auto ...">
  <!-- Horizontal scrolling enabled if needed -->
</div>
```

### Scrolling Vertically If Needed
Use `overflow-y-auto` to allow vertical scrolling:
```html
<div class="h-32 overflow-y-auto ...">
  <!-- Vertical scrolling enabled if needed -->
</div>
```

### Always Scrolling Horizontally
Use `overflow-x-scroll` to always show a horizontal scrollbar:
```html
<div class="overflow-x-scroll ...">
  <!-- Horizontal scrollbar is always visible -->
</div>
```

### Always Scrolling Vertically
Use `overflow-y-scroll` to always show a vertical scrollbar:
```html
<div class="overflow-y-scroll ...">
  <!-- Vertical scrollbar is always visible -->
</div>
```

### Scrolling in All Directions
Use `overflow-scroll` to add both horizontal and vertical scrollbars:
```html
<div class="overflow-scroll ...">
  <!-- Content will always be scrollable in all directions -->
</div>
```

### Responsive Design
To apply overflow utilities conditionally based on screen size, use responsive prefixes like `md:`:
```html
<div class="overflow-auto md:overflow-scroll ...">
  <!-- Overflow behavior changes at medium screen sizes and above -->
</div>
```

## Conclusion
The `overflow` utilities provide flexible control over content overflow behavior. Whether you need to clip content, show scrollbars, or allow scrolling when necessary, these utilities help maintain a responsive and well-structured layout.

