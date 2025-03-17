# Hyphens Utility

## Introduction
The **Hyphens Utility** provides a set of CSS classes for controlling how words should be hyphenated in your web application. These utilities allow you to prevent hyphenation, manually specify hyphenation points, or enable automatic hyphenation based on the language settings of the text. This can be particularly useful for improving readability and layout control, especially when dealing with long words or multilingual content.

## Classes & Styles
The following classes control the hyphenation behavior:

| Class | CSS Style |
|--------|------------|
| `hyphens-none` | `hyphens: none;` |
| `hyphens-manual` | `hyphens: manual;` |
| `hyphens-auto` | `hyphens: auto;` |

## Examples

### Preventing Hyphenation
Use the `hyphens-none` utility to ensure that words do not break at hyphenation points, even if the `&shy;` (soft hyphen) is used.

#### Example:
```html
<p class="hyphens-none">
  Officially recognized by the Duden dictionary as the longest word in German, Kraftfahrzeug&shy;haftpflichtversicherung is a 36-letter word for motor vehicle liability insurance.
</p>
```

### Manual Hyphenation
Use the `hyphens-manual` utility to allow hyphenation only where the `&shy;` (soft hyphen) is explicitly specified.

#### Example:
```html
<p class="hyphens-manual">
  Officially recognized by the Duden dictionary as the longest word in German, Kraftfahrzeug&shy;haftpflichtversicherung is a 36-letter word for motor vehicle liability insurance.
</p>
```
*This is the default browser behavior.*

### Automatic Hyphenation
Use the `hyphens-auto` utility to let the browser automatically determine hyphenation points based on the language of the text.

#### Example:
```html
<p class="hyphens-auto" lang="de">
  Officially recognized by the Duden dictionary as the longest word in German, Kraftfahrzeughaftpflichtversicherung is a 36-letter word for motor vehicle liability insurance.
</p>
```
*If `&shy;` is present, it will be preferred over automatically determined hyphenation points.*

### Responsive Design
You can combine hyphenation utilities with responsive breakpoints. For example, to prevent hyphenation on small screens but allow automatic hyphenation on medium screens and above:

#### Example:
```html
<p class="hyphens-none md:hyphens-auto">
  <!-- Your text content here -->
</p>
```

## Learn More
For additional details on using responsive variants and other utility classes, refer to the official documentation on CSS variants.

