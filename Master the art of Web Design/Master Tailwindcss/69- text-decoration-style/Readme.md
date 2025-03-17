# Text Decoration Style Utilities

## Introduction
The **text-decoration-style** utilities provide a simple way to control the appearance of text decorations, such as underlines, overlines, and strikethroughs. By using these utilities, you can modify the style of text decorations to match your design preferences, enhancing readability and visual appeal.

## Available Classes
The following classes can be used to style text decorations:

| Class | Style |
|--------|----------------------------------|
| `decoration-solid` | `text-decoration-style: solid;` |
| `decoration-double` | `text-decoration-style: double;` |
| `decoration-dotted` | `text-decoration-style: dotted;` |
| `decoration-dashed` | `text-decoration-style: dashed;` |
| `decoration-wavy` | `text-decoration-style: wavy;` |

## Examples

### Basic Usage
Use the provided utilities to change the text decoration style of an element:

```html
<p class="underline decoration-solid">The quick brown fox jumps over the lazy dog.</p>
<p class="underline decoration-double">The quick brown fox jumps over the lazy dog.</p>
<p class="underline decoration-dotted">The quick brown fox jumps over the lazy dog.</p>
<p class="underline decoration-dashed">The quick brown fox jumps over the lazy dog.</p>
<p class="underline decoration-wavy">The quick brown fox jumps over the lazy dog.</p>
```

### Responsive Design
You can apply text decoration styles at specific breakpoints using responsive variants. For example, to apply a dashed text decoration only on medium screens and above:

```html
<p class="underline md:decoration-dashed">This text has a dashed underline on medium screens and larger.</p>
```

For more details on using responsive variants, refer to the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## Conclusion
The **text-decoration-style** utilities provide an easy way to control the appearance of text decorations, making it simple to enhance typography in your projects. Experiment with different styles to create visually appealing and readable text elements.

