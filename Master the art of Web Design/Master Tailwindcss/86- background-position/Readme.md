# Background Position Utilities

## Introduction
The `background-position` utilities allow you to control the positioning of an element's background image using Tailwind CSS-style classes. These utilities help you align background images precisely within an element, ensuring the desired visual presentation. You can use predefined position classes or customize the background position using custom values or CSS variables.

## Classes and Styles
The following table lists the available `background-position` utility classes and their corresponding CSS styles:

| Class | Styles |
|--------|----------------------------------|
| `bg-bottom` | `background-position: bottom;` |
| `bg-center` | `background-position: center;` |
| `bg-left` | `background-position: left;` |
| `bg-left-bottom` | `background-position: left bottom;` |
| `bg-left-top` | `background-position: left top;` |
| `bg-right` | `background-position: right;` |
| `bg-right-bottom` | `background-position: right bottom;` |
| `bg-right-top` | `background-position: right top;` |
| `bg-top` | `background-position: top;` |
| `bg-(position:<custom-property>)` | `background-position: var(<custom-property>);` |
| `bg-[<value>]` | `background-position: <value>;` |

## Examples

### Basic Example
Use utilities like `bg-center`, `bg-right`, and `bg-left-top` to control the position of an element's background image.

```html
<div class="bg-[url(/img/mountains.jpg)] bg-left-top"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-top"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-right-top"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-left"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-center"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-right"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-left-bottom"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-bottom"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-right-bottom"></div>
```

### Using a Custom Value
You can specify a custom background position value using the `bg-[<value>]` syntax:

```html
<div class="bg-[center_top_1rem] ...">
  <!-- Content -->
</div>
```

For CSS variables, use the `bg-(position:<custom-property>)` syntax:

```html
<div class="bg-(position:--my-bg-position) ...">
  <!-- Content -->
</div>
```

This is a shorthand for `bg-[position:var(<custom-property>)]` that automatically applies the `var()` function.

### Responsive Design
To apply `background-position` utilities only at specific breakpoints, prefix them with a responsive variant like `md:`:

```html
<div class="bg-center md:bg-top ...">
  <!-- Content -->
</div>
```

This ensures that the background position changes to `top` only at medium screen sizes (`md:`) and above.

## Additional Resources
For more details on responsive variants and customization, refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/background-position).

