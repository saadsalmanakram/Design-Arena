# Font Stretch Utilities

## Introduction
The `font-stretch` utilities allow you to control the width of a font face, providing flexibility in typography. These utilities modify how condensed or expanded text appears, making it useful for design enhancements and readability adjustments.

The `font-stretch` property only applies to fonts that support multiple width variations. If a font does not include width variations, the browser will select the closest available match.

---

## Available Classes
The following classes provide predefined font width adjustments:

| Class Name                      | CSS Property                        | Percentage Width |
|----------------------------------|------------------------------------|------------------|
| `font-stretch-ultra-condensed`  | `font-stretch: ultra-condensed;`  | 50%              |
| `font-stretch-extra-condensed`  | `font-stretch: extra-condensed;`  | 62.5%            |
| `font-stretch-condensed`        | `font-stretch: condensed;`        | 75%              |
| `font-stretch-semi-condensed`   | `font-stretch: semi-condensed;`   | 87.5%            |
| `font-stretch-normal`           | `font-stretch: normal;`           | 100%             |
| `font-stretch-semi-expanded`    | `font-stretch: semi-expanded;`    | 112.5%           |
| `font-stretch-expanded`         | `font-stretch: expanded;`         | 125%             |
| `font-stretch-extra-expanded`   | `font-stretch: extra-expanded;`   | 150%             |
| `font-stretch-ultra-expanded`   | `font-stretch: ultra-expanded;`   | 200%             |

Additionally, custom values can be set using:
- `font-stretch-<percentage>` → Sets a specific percentage width (e.g., `font-stretch-75%`).
- `font-stretch-[<value>]` → Allows custom values inside square brackets (e.g., `font-stretch-[66.66%]`).
- `font-stretch-(<custom-property>)` → Uses a CSS variable (e.g., `font-stretch-(--my-font-width)`).

---

## Examples

### Basic Usage
Use predefined utilities to apply different font widths:

```html
<p class="font-stretch-extra-condensed">The quick brown fox...</p>
<p class="font-stretch-condensed">The quick brown fox...</p>
<p class="font-stretch-normal">The quick brown fox...</p>
<p class="font-stretch-expanded">The quick brown fox...</p>
<p class="font-stretch-extra-expanded">The quick brown fox...</p>
```

### Using Percentages
Specify font width using percentage-based utilities:

```html
<p class="font-stretch-50%">The quick brown fox...</p>
<p class="font-stretch-100%">The quick brown fox...</p>
<p class="font-stretch-150%">The quick brown fox...</p>
```

### Custom Values
Define custom font widths using bracket notation:

```html
<p class="font-stretch-[66.66%]">The quick brown fox...</p>
```

### Using CSS Variables
Set font width dynamically with CSS variables:

```html
<p class="font-stretch-(--my-font-width)">The quick brown fox...</p>
```

This is shorthand for:

```html
<p class="font-stretch-[var(--my-font-width)]">The quick brown fox...</p>
```

### Responsive Design
Apply different font widths at specific breakpoints:

```html
<div class="font-stretch-normal md:font-stretch-expanded">
  Responsive text width example
</div>
```

---

## Additional Notes
- These utilities only work with fonts that support width variations.
- If a font does not support a specific `font-stretch` value, the browser will select the closest match.
- Combine `font-stretch` utilities with other text styling utilities for better control over typography.

For more details, refer to the official typography documentation.

