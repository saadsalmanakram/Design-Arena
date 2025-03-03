# Text Decoration Line Utilities

## Introduction
The `text-decoration-line` utility provides a way to control the decoration applied to text elements, such as underlines, overlines, and line-through effects. These utilities allow you to style text efficiently using class-based approaches, making it easy to apply or remove text decorations in various states and responsive breakpoints.

## Available Classes

| Class            | Styles                           |
|-----------------|--------------------------------|
| `underline`     | `text-decoration-line: underline;` |
| `overline`      | `text-decoration-line: overline;`  |
| `line-through`  | `text-decoration-line: line-through;` |
| `no-underline`  | `text-decoration-line: none;`  |

## Usage Examples

### Underlining Text
Use the `underline` utility to add an underline to a text element:

```html
<p class="underline">The quick brown fox jumps over the lazy dog.</p>
```

### Adding an Overline to Text
Use the `overline` utility to add an overline to a text element:

```html
<p class="overline">The quick brown fox jumps over the lazy dog.</p>
```

### Adding a Line Through Text
Use the `line-through` utility to add a strikethrough effect:

```html
<p class="line-through">The quick brown fox jumps over the lazy dog.</p>
```

### Removing a Text Decoration
Use the `no-underline` utility to remove any text decoration:

```html
<p class="no-underline">The quick brown fox jumps over the lazy dog.</p>
```

## Applying on Hover
You can prefix a `text-decoration-line` utility with a hover state to apply styles only when the element is hovered:

```html
<p>The <a href="#" class="no-underline hover:underline">quick brown fox</a> jumps over the lazy dog.</p>
```

## Responsive Design
Use breakpoint variants to apply text decoration styles at specific screen sizes. For example, applying underline only at medium screen sizes (`md`) and above:

```html
<a class="no-underline md:underline" href="#">Link Text</a>
```

Learn more about using variants in the [variants documentation](#).

