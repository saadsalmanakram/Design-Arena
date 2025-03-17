# Padding Utilities

## Introduction
Padding utilities provide a flexible way to control the padding of an element in a consistent and scalable manner. These utilities allow developers to define spacing inside elements using predefined values, custom properties, and responsive design techniques. The padding utilities are based on the `--spacing` theme variable, ensuring consistency across the project.

## Usage
Padding can be applied to all sides of an element, specific sides, or inline/block dimensions. The utility classes follow a structured naming convention to ensure clarity and ease of use.

### General Padding Classes
- `p-<number>`: Applies padding to all sides using `calc(var(--spacing) * <number>)`.
- `p-px`: Sets padding to `1px`.
- `p-(<custom-property>)`: Uses a CSS variable for padding.
- `p-[<value>]`: Sets a custom padding value.

### Horizontal and Vertical Padding
- `px-<number>`: Applies padding to the left and right (inline axis).
- `py-<number>`: Applies padding to the top and bottom (block axis).
- `px-px`, `py-px`: Sets horizontal or vertical padding to `1px`.
- `px-(<custom-property>)`, `py-(<custom-property>)`: Uses a custom property.
- `px-[<value>]`, `py-[<value>]`: Uses a custom value.

### Side-Specific Padding
- `ps-<number>`: Padding inline-start.
- `pe-<number>`: Padding inline-end.
- `pt-<number>`: Padding top.
- `pr-<number>`: Padding right.
- `pb-<number>`: Padding bottom.
- `pl-<number>`: Padding left.

Each of these follows the same structure as general padding classes, supporting values in numbers, pixels, and custom properties.

## Examples
### Basic Example
```html
<div class="p-8">p-8</div>
```

### Adding Padding to One Side
```html
<div class="pt-6">pt-6</div>
<div class="pr-4">pr-4</div>
<div class="pb-8">pb-8</div>
<div class="pl-2">pl-2</div>
```

### Adding Horizontal and Vertical Padding
```html
<div class="px-8">px-8</div>
<div class="py-8">py-8</div>
```

### Using Logical Properties
```html
<div dir="ltr">
  <div class="ps-8">ps-8</div>
  <div class="pe-8">pe-8</div>
</div>
<div dir="rtl">
  <div class="ps-8">ps-8</div>
  <div class="pe-8">pe-8</div>
</div>
```

### Using a Custom Value
```html
<div class="p-[5px]">Custom padding</div>
```

### Responsive Design
```html
<div class="py-4 md:py-8">Responsive padding</div>
```

## Customizing the Theme
The padding utilities rely on the `--spacing` theme variable, which can be customized:

```css
@theme {
  --spacing: 1px;
}
```

For more details on customizing the spacing scale, refer to the theme variable documentation.

