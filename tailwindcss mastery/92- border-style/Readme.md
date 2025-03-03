# Border Style Utilities

## Introduction
The **border-style** utilities provide an easy way to control the style of an element's borders using predefined classes. These utilities allow you to apply solid, dashed, dotted, double, hidden, or no border styles to elements. Additionally, you can use divider styles to manage border styles between child elements.

---

## Available Classes

| Class | Styles |
|--------|-----------------|
| `border-solid` | `border-style: solid;` |
| `border-dashed` | `border-style: dashed;` |
| `border-dotted` | `border-style: dotted;` |
| `border-double` | `border-style: double;` |
| `border-hidden` | `border-style: hidden;` |
| `border-none` | `border-style: none;` |

### Divider Styles

| Class | Styles |
|--------|-----------------|
| `divide-solid` | `& > :not(:last-child) { border-style: solid; }` |
| `divide-dashed` | `& > :not(:last-child) { border-style: dashed; }` |
| `divide-dotted` | `& > :not(:last-child) { border-style: dotted; }` |
| `divide-double` | `& > :not(:last-child) { border-style: double; }` |
| `divide-hidden` | `& > :not(:last-child) { border-style: hidden; }` |
| `divide-none` | `& > :not(:last-child) { border-style: none; }` |

---

## Examples

### Basic Usage
Use utilities like `border-solid` and `border-dotted` to control an element's border style:

```html
<div class="border-2 border-solid ..."></div>
<div class="border-2 border-dashed ..."></div>
<div class="border-2 border-dotted ..."></div>
<div class="border-4 border-double ..."></div>
```

### Removing a Border
Use the `border-none` utility to remove an existing border from an element:

```html
<button class="border-none ...">Save Changes</button>
```
This is commonly used to remove a border style that was applied at a smaller breakpoint.

### Setting the Divider Style
Use utilities like `divide-dashed` and `divide-dotted` to control the border style between child elements:

```html
<div class="grid grid-cols-3 divide-x-3 divide-dashed divide-indigo-500">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Responsive Design
Prefix a border-style utility with a breakpoint variant like `md:` to apply the utility only at medium screen sizes and above:

```html
<div class="border-solid md:border-dotted ...">
  <!-- Content -->
</div>
```

Learn more about using variants in the [variants documentation](#).

