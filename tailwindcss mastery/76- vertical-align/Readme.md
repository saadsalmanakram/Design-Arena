# Vertical Align Utility

## Introduction
The `vertical-align` utility provides a set of classes to control the vertical alignment of inline or table-cell elements. This utility helps in aligning elements relative to their parent container or other inline elements on the same line. It supports predefined alignment options, custom properties, and responsive design.

## Available Classes
Below are the available classes for vertical alignment:

| Class | Styles |
|--------|-------------------------------|
| `align-baseline` | `vertical-align: baseline;` |
| `align-top` | `vertical-align: top;` |
| `align-middle` | `vertical-align: middle;` |
| `align-bottom` | `vertical-align: bottom;` |
| `align-text-top` | `vertical-align: text-top;` |
| `align-text-bottom` | `vertical-align: text-bottom;` |
| `align-sub` | `vertical-align: sub;` |
| `align-super` | `vertical-align: super;` |
| `align-(<custom-property>)` | `vertical-align: var(<custom-property>);` |
| `align-[<value>]` | `vertical-align: <value>;` |

## Usage Examples

### Aligning to Baseline
Use the `align-baseline` utility to align the baseline of an element with the baseline of its parent:
```html
The quick brown fox jumps over the lazy dog.
<span class="inline-block align-baseline">The quick brown fox...</span>
```

### Aligning to Top
Use the `align-top` utility to align the top of an element and its descendants with the top of the entire line:
```html
The quick brown fox jumps over the lazy dog.
<span class="inline-block align-top">The quick brown fox...</span>
```

### Aligning to Middle
Use the `align-middle` utility to align the middle of an element with the baseline plus half the x-height of the parent:
```html
The quick brown fox jumps over the lazy dog.
<span class="inline-block align-middle">The quick brown fox...</span>
```

### Aligning to Bottom
Use the `align-bottom` utility to align the bottom of an element and its descendants with the bottom of the entire line:
```html
The quick brown fox jumps over the lazy dog.
<span class="inline-block align-bottom">The quick brown fox...</span>
```

### Aligning to Parent Top
Use the `align-text-top` utility to align the top of an element with the top of the parent element's font:
```html
The quick brown fox jumps over the lazy dog.
<span class="inline-block align-text-top">The quick brown fox...</span>
```

### Aligning to Parent Bottom
Use the `align-text-bottom` utility to align the bottom of an element with the bottom of the parent element's font:
```html
The quick brown fox jumps over the lazy dog.
<span class="inline-block align-text-bottom">The quick brown fox...</span>
```

### Using a Custom Value
You can specify a custom value for vertical alignment using the `align-[<value>]` syntax:
```html
<span class="align-[4px]">Custom alignment</span>
```
For CSS variables, use the `align-(<custom-property>)` syntax:
```html
<span class="align-(--my-alignment)">Custom alignment with variable</span>
```
This is equivalent to `align-[var(--my-alignment)]` and automatically applies the `var()` function.

## Responsive Design
You can apply vertical alignment conditionally using responsive breakpoints. Prefix a class with a breakpoint like `md:` to apply it only at medium screen sizes and above:
```html
<span class="align-middle md:align-top">Responsive alignment</span>
```
For more details, refer to the variants documentation.

