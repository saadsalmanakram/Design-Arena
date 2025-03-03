# Text Decoration Thickness Utility

## Introduction
The `text-decoration-thickness` utility provides control over the thickness of text decorations, such as underlines, overlines, and strikethroughs. This utility allows developers to fine-tune the visual appearance of text decorations, improving readability and aesthetics in web design. It supports predefined thickness values, custom properties, and responsive design implementations.

## Usage
The utility classes for `text-decoration-thickness` follow the pattern:

```
decoration-<number>
```

Where `<number>` represents the thickness in pixels. Additional options include using values from fonts, automatic values, and custom-defined thicknesses.

### Available Classes

| Class                         | Styles Applied                                  |
|-------------------------------|------------------------------------------------|
| `decoration-<number>`         | `text-decoration-thickness: <number>px;`      |
| `decoration-from-font`        | `text-decoration-thickness: from-font;`       |
| `decoration-auto`             | `text-decoration-thickness: auto;`            |
| `decoration-(<custom-property>)` | `text-decoration-thickness: var(<custom-property>);` |
| `decoration-[<value>]`        | `text-decoration-thickness: <value>;`         |

## Examples

### Basic Example
Use predefined thickness values like `decoration-1`, `decoration-2`, and `decoration-4`:

```html
<p class="underline decoration-1">The quick brown fox jumps over the lazy dog.</p>
<p class="underline decoration-2">The quick brown fox jumps over the lazy dog.</p>
<p class="underline decoration-4">The quick brown fox jumps over the lazy dog.</p>
```

### Using a Custom Value
You can define a completely custom thickness using square brackets `[]`:

```html
<p class="decoration-[0.25rem] ...">
  <!-- Custom thickness -->
</p>
```

For CSS variables, use the `decoration-(<custom-property>)` syntax:

```html
<p class="decoration-(--my-decoration-thickness) ...">
  <!-- Custom property usage -->
</p>
```

This is a shorthand for `decoration-[var(--my-decoration-thickness)]` and automatically applies the `var()` function.

## Responsive Design
The `text-decoration-thickness` utility supports responsive design through breakpoint prefixes like `md:` to apply different thicknesses based on screen size.

```html
<p class="underline md:decoration-4 ...">
  <!-- Applied only on medium screens and larger -->
</p>
```

For more details on responsive variants, refer to the official documentation on utility variants.

## Conclusion
The `text-decoration-thickness` utility is a powerful tool for customizing text decorations with precision. By using predefined values, custom properties, and responsive variants, developers can create visually appealing text styles tailored to their needs.

