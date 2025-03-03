# Text Alignment Utility

## Introduction
The **Text Alignment Utility** provides a set of classes to control the alignment of text in an element. It enables developers to easily align text to the left, center, right, justify it, or use logical alignments such as `start` and `end`. These utilities can be combined with responsive design breakpoints to apply styles dynamically based on screen sizes.

## Available Classes

| Class          | Style Applied          |
|---------------|-----------------------|
| `text-left`   | `text-align: left;`    |
| `text-center` | `text-align: center;`  |
| `text-right`  | `text-align: right;`   |
| `text-justify`| `text-align: justify;` |
| `text-start`  | `text-align: start;`   |
| `text-end`    | `text-align: end;`     |

## Examples

### Left Aligning Text
To left align the text of an element, use the `text-left` utility:

```html
<p class="text-left">So I started to walk into the water...</p>
```

### Right Aligning Text
To right align the text of an element, use the `text-right` utility:

```html
<p class="text-right">So I started to walk into the water...</p>
```

### Centering Text
To center align the text of an element, use the `text-center` utility:

```html
<p class="text-center">So I started to walk into the water...</p>
```

### Justifying Text
To justify the text of an element, use the `text-justify` utility:

```html
<p class="text-justify">So I started to walk into the water...</p>
```

## Responsive Design
You can apply text alignment conditionally based on screen size by prefixing the class with a breakpoint:

```html
<p class="text-left md:text-center">
  <!-- Content will be left-aligned on small screens and centered on medium and larger screens -->
</p>
```

For more information on responsive variants, refer to the documentation on breakpoints.

## Conclusion
The **Text Alignment Utility** simplifies text positioning in web pages, making it easier to create well-structured and readable layouts. Combine these utilities with responsive classes for optimal text alignment across different devices.

