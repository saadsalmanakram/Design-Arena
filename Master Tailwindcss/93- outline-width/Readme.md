# Outline Width Utility

## Introduction
The `outline-width` utility provides a set of classes to control the width of an element's outline in CSS. This utility allows developers to specify outline widths using predefined values, custom values, and CSS variables. It supports responsive design and state-based application using variants such as `focus:*`.

## Classes and Styles
The following classes are available for controlling outline width:

| Class | Styles |
|--------|----------------------------------|
| `outline` | `outline-width: 1px;` |
| `outline-<number>` | `outline-width: <number>px;` |
| `outline-(length:<custom-property>)` | `outline-width: var(<custom-property>);` |
| `outline-[<value>]` | `outline-width: <value>;` |

## Examples

### Basic Example
Use `outline` or `outline-<number>` utilities such as `outline-2` and `outline-4` to set the width of an element's outline:

```html
<button class="outline outline-offset-2 ...">Button A</button>
<button class="outline-2 outline-offset-2 ...">Button B</button>
<button class="outline-4 outline-offset-2 ...">Button C</button>
```

### Applying on Focus
Prefix an outline-width utility with a variant like `focus:*` to only apply the utility in that state:

```html
<button class="outline-offset-2 outline-sky-500 focus:outline-2 ...">Save Changes</button>
```
Focus the button to see the outline width applied.

### Using a Custom Value
Use `outline-[<value>]` syntax to set the outline width using a completely custom value:

```html
<div class="outline-[2vw] ...">
  <!-- Custom outline width -->
</div>
```

For CSS variables, use the `outline-(length:<custom-property>)` syntax:

```html
<div class="outline-(length:--my-outline-width) ...">
  <!-- Outline width based on CSS variable -->
</div>
```
This is a shorthand for `outline-[length:var(<custom-property>)]` that automatically adds the `var()` function.

### Responsive Design
Prefix an outline-width utility with a breakpoint variant like `md:` to apply it at medium screen sizes and above:

```html
<div class="outline md:outline-2 ...">
  <!-- Outline width applied only on medium screens and above -->
</div>
```

Learn more about using variants in the [variants documentation](#).

