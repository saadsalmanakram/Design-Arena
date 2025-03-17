# Width Utilities

## Introduction

The **Width Utilities** provide a flexible way to define the width of elements using predefined classes. These utilities enable developers to set fixed, percentage-based, viewport-relative, and dynamic widths without writing custom CSS. The width utilities are highly adaptable, supporting responsive design and custom values.

## Usage

### Basic Width Utilities

Use `w-<number>` utilities like `w-24` and `w-64` to set an element's width based on the spacing scale:

```html
<div class="w-96">w-96</div>
<div class="w-80">w-80</div>
<div class="w-64">w-64</div>
<div class="w-48">w-48</div>
<div class="w-40">w-40</div>
<div class="w-32">w-32</div>
<div class="w-24">w-24</div>
```

### Percentage-Based Width

Use `w-full` or `w-<fraction>` utilities to set an element's width as a percentage of its container:

```html
<div class="flex">
  <div class="w-1/2">w-1/2</div>
  <div class="w-1/2">w-1/2</div>
</div>
```

Available fractions include:
- `w-1/2`
- `w-2/5`
- `w-3/5`
- `w-1/3`
- `w-2/3`
- `w-1/4`
- `w-3/4`
- `w-1/5`
- `w-4/5`
- `w-1/6`
- `w-5/6`

### Container-Based Width

Use predefined container sizes to set fixed-width elements:

```html
<div class="w-xl">w-xl</div>
<div class="w-lg">w-lg</div>
<div class="w-md">w-md</div>
<div class="w-sm">w-sm</div>
<div class="w-xs">w-xs</div>
```

### Viewport-Based Width

Use utilities to match the viewport width:

```html
<div class="w-screen">Full width of viewport</div>
```

Other viewport-based utilities include:
- `w-dvw` (dynamic viewport width)
- `w-lvw` (large viewport width)
- `w-svw` (small viewport width)

### Auto Width

Use `w-auto` to let the element determine its own width:

```html
<div class="w-full md:w-auto">Responsive width</div>
```

### Setting Both Width and Height

Use `size-<value>` utilities to define both width and height simultaneously:

```html
<div class="size-16">size-16</div>
<div class="size-24">size-24</div>
```

### Custom Widths

Use custom values by specifying them within square brackets:

```html
<div class="w-[5px]">Custom width</div>
```

To use CSS variables:

```html
<div class="w-(--my-width)">Variable width</div>
```

### Responsive Design

Apply different widths at different breakpoints using prefix variants:

```html
<div class="w-1/2 md:w-full">Responsive width</div>
```

## Customization

The `w-<number>` and `size-<number>` utilities derive their values from the `--spacing` theme variable. You can customize this in your theme configuration:

```css
@theme {
  --spacing: 1px;
}
```

Learn more about customizing the spacing scale in the theme variable documentation.

## Conclusion

The **Width Utilities** provide a comprehensive approach to setting widths for elements. Whether using fixed values, percentages, viewport-based units, or custom sizes, these utilities offer a robust and responsive solution for layout control.

