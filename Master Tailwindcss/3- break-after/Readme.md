# Break After Utility

## Introduction
The `break-after` utility provides control over how content should behave in terms of column or page breaks after an element. This utility is useful for controlling pagination, column-based layouts, and print formatting.

## Available Classes
The following classes define how content breaks after an element:

| Class                     | Styles                  |
|---------------------------|-------------------------|
| `break-after-auto`       | `break-after: auto;`    |
| `break-after-avoid`      | `break-after: avoid;`   |
| `break-after-all`        | `break-after: all;`     |
| `break-after-avoid-page` | `break-after: avoid-page;` |
| `break-after-page`       | `break-after: page;`    |
| `break-after-left`       | `break-after: left;`    |
| `break-after-right`      | `break-after: right;`   |
| `break-after-column`     | `break-after: column;`  |

## Examples
### Basic Usage
Use `break-after-column` and `break-after-page` to control where a break should occur after an element.

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-after-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

### Responsive Design
Prefix a `break-after` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above.

```html
<div class="break-after-column md:break-after-auto ...">
  <!-- Content -->
</div>
```

## Additional Information
- `break-after` is particularly useful when working with multi-column layouts and printed documents.
- Learn more about responsive design and breakpoints in the [variants documentation](#).

This utility ensures better control over how content is structured across different devices and printed pages.

