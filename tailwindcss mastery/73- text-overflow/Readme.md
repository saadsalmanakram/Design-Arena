# Text Overflow Utility

## Introduction
The `text-overflow` utility provides a set of CSS classes for controlling how the text of an element overflows its container. These utilities allow you to manage text truncation, clipping, and ellipsis handling for better readability and UI presentation.

## Available Classes
The following classes are available to control text overflow behavior:

| Class       | Styles Applied                                   |
|------------|-----------------------------------------------|
| `truncate`  | `overflow: hidden;`<br>`text-overflow: ellipsis;`<br>`white-space: nowrap;` |
| `text-ellipsis` | `text-overflow: ellipsis;` |
| `text-clip` | `text-overflow: clip;` |

## Examples

### Truncating Text
Use the `truncate` utility to prevent text from wrapping and truncate overflowing text with an ellipsis (`...`) when needed:

```html
<p class="truncate">The longest word in any of the major...</p>
```

### Adding an Ellipsis
Use the `text-ellipsis` utility to apply an ellipsis (`...`) when text overflows:

```html
<p class="overflow-hidden text-ellipsis">The longest word in any of the major...</p>
```

### Clipping Text
Use the `text-clip` utility to truncate the text at the limit of the content area without adding an ellipsis:

```html
<p class="overflow-hidden text-clip">The longest word in any of the major...</p>
```

This is the default browser behavior.

## Responsive Design
You can apply the `text-overflow` utilities conditionally based on breakpoints. Prefix a utility class with a breakpoint variant like `md:` to apply the style at medium screen sizes and above:

```html
<p class="text-ellipsis md:text-clip ...">
  <!-- Content here -->
</p>
```

For more information on breakpoints and responsive variants, refer to the official documentation on utility variants.

## Conclusion
The `text-overflow` utility is essential for managing long strings and overflowing text in a clean and readable manner. Whether you need to truncate text, add an ellipsis, or clip it at the container's edge, these utilities provide a simple and effective solution.

