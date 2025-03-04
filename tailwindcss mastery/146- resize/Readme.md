# Resize Utilities

## Introduction
The `resize` utility provides control over how an element can be resized within the user interface. This feature is especially useful when working with text areas or other elements where users may need to adjust the size for better visibility or usability.

## Available Classes
The following utility classes control the resizing behavior of an element:

| Class        | Styles Applied      | Description |
|-------------|------------------|-------------|
| `resize-none` | `resize: none;` | Prevents an element from being resized. |
| `resize` | `resize: both;` | Allows an element to be resized in both directions (horizontally and vertically). |
| `resize-y` | `resize: vertical;` | Allows vertical resizing. |
| `resize-x` | `resize: horizontal;` | Allows horizontal resizing. |

## Examples

### Resizing in All Directions
Use `resize` to make an element resizable in both horizontal and vertical directions:
```html
<textarea class="resize rounded-md ..."></textarea>
```
Drag the textarea handle in the demo to see the expected behavior.

### Resizing Vertically
Use `resize-y` to make an element resizable only in the vertical direction:
```html
<textarea class="resize-y rounded-md ..."></textarea>
```

### Resizing Horizontally
Use `resize-x` to make an element resizable only in the horizontal direction:
```html
<textarea class="resize-x rounded-md ..."></textarea>
```

### Prevent Resizing
Use `resize-none` to prevent an element from being resizable:
```html
<textarea class="resize-none rounded-md"></textarea>
```
Notice that the textarea handle is removed.

### Responsive Design
You can apply resize utilities conditionally based on screen size using responsive prefixes such as `md:`:
```html
<div class="resize-none md:resize ...">
  <!-- Content -->
</div>
```
This ensures that the element is not resizable on smaller screens but becomes resizable at medium screen sizes and above.

## Learn More
For additional customization and responsive variants, refer to the official documentation on utility classes and breakpoints.

