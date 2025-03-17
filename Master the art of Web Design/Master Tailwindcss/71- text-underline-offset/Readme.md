# Text Underline Offset Utilities

## Introduction
The `text-underline-offset` utility provides control over the offset of underlined text, allowing for better customization of how underlines appear in relation to the text. This utility is useful for improving readability and styling underlined text in web design.

## Usage
The `text-underline-offset` utility consists of several predefined classes that allow users to adjust the offset using predefined values, negative values, auto settings, custom properties, and arbitrary values.

## Classes and Styles
| Class | Style Applied |
|--------|--------------------------|
| `underline-offset-<number>` | `text-underline-offset: <number>px;` |
| `-underline-offset-<number>` | `text-underline-offset: calc(<number>px * -1);` |
| `underline-offset-auto` | `text-underline-offset: auto;` |
| `underline-offset-(<custom-property>)` | `text-underline-offset: var(<custom-property>);` |
| `underline-offset-[<value>]` | `text-underline-offset: <value>;` |

## Examples
### Basic Usage
Use predefined values such as `underline-offset-1`, `underline-offset-2`, `underline-offset-4`, and `underline-offset-8` to adjust the underline offset:

```html
<p class="underline underline-offset-1">The quick brown fox jumps over the lazy dog.</p>
<p class="underline underline-offset-2">The quick brown fox jumps over the lazy dog.</p>
<p class="underline underline-offset-4">The quick brown fox jumps over the lazy dog.</p>
<p class="underline underline-offset-8">The quick brown fox jumps over the lazy dog.</p>
```

### Using a Custom Value
You can define a completely custom underline offset value using bracket notation:

```html
<p class="underline-offset-[3px]">Custom underline offset</p>
```

For CSS variables, use the `underline-offset-(<custom-property>)` syntax:

```html
<p class="underline-offset-(--my-underline-offset)">Variable-based underline offset</p>
```
This is a shorthand for `underline-offset-[var(--my-underline-offset)]`.

### Responsive Design
To apply `text-underline-offset` only at specific screen sizes, use responsive prefixes such as `md:`:

```html
<p class="underline md:underline-offset-4">Responsive underline offset</p>
```
This ensures that the underline offset is only applied on medium screen sizes and above.

## Further Learning
For more details on applying variants and custom styles, refer to the [official documentation](#) on utility classes and responsive design.

