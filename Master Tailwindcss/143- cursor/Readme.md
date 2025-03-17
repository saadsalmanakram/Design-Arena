# Cursor Utilities

## Introduction
The `cursor` utility provides a set of classes to control the cursor style when hovering over an element. These utilities help define the cursor behavior in different interactive states, improving user experience by visually indicating actions.

## Available Classes
Below are the available cursor utility classes and their corresponding CSS styles:

| Class | CSS Style |
|--------|------------|
| `cursor-auto` | `cursor: auto;` |
| `cursor-default` | `cursor: default;` |
| `cursor-pointer` | `cursor: pointer;` |
| `cursor-wait` | `cursor: wait;` |
| `cursor-text` | `cursor: text;` |
| `cursor-move` | `cursor: move;` |
| `cursor-help` | `cursor: help;` |
| `cursor-not-allowed` | `cursor: not-allowed;` |
| `cursor-none` | `cursor: none;` |
| `cursor-context-menu` | `cursor: context-menu;` |

## Examples

### Basic Example
Use utilities like `cursor-pointer` and `cursor-not-allowed` to control the cursor display when hovering over buttons:

```html
<!-- Hover over each button to see the cursor change -->
<button class="cursor-pointer">Submit</button>
<button class="cursor-wait">Saving...</button>
<button class="cursor-not-allowed" disabled>Confirm</button>
```

### Using a Custom Value
You can define custom cursor styles using `cursor-[<value>]`:

```html
<button class="cursor-[url(hand.cur),_pointer]">
  Custom Cursor
</button>
```

For CSS variables, use `cursor-(<custom-property>)` syntax:

```html
<button class="cursor-(--my-cursor)">
  Variable Cursor
</button>
```
This is equivalent to `cursor-[var(--my-cursor)]`.

### Responsive Design
To change the cursor based on screen size, prefix the utility with a responsive variant like `md:`:

```html
<button class="cursor-not-allowed md:cursor-auto">
  Responsive Cursor
</button>
```

## Learn More
For more details on using variants and customizing cursor styles, refer to the official documentation.