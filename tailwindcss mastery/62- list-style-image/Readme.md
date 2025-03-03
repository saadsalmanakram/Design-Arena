# List Style Image Utility

## Introduction
The **list-style-image** utility provides a way to control marker images for list items using predefined classes. This utility helps you apply custom images, CSS variables, or remove marker images entirely in an easy and flexible way.

## Available Classes

| Class | Styles |
|---|---|
| `list-image-[<value>]` | `list-style-image: <value>;` |
| `list-image-(<custom-property>)` | `list-style-image: var(<custom-property>);` |
| `list-image-none` | `list-style-image: none;` |

## Examples

### Basic Example
Use the `list-image-[<value>]` syntax to control the marker image for list items:

```html
<ul class="list-image-[url(/img/checkmark.png)]">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>1/2 cup of olive oil</li>
  <li>3lb of celery</li>
</ul>
```

### Using a CSS Variable
Use the `list-image-(<custom-property>)` syntax to control the marker image for list items using a CSS variable:

```html
<ul class="list-image-(--my-list-image)">
  <li>List item</li>
  <li>Another list item</li>
</ul>
```
This is a shorthand for `list-image-[var(<custom-property>)]` that automatically applies the `var()` function.

### Removing a Marker Image
To remove an existing marker image from list items, use the `list-image-none` utility:

```html
<ul class="list-image-none">
  <li>List item</li>
  <li>Another list item</li>
</ul>
```

### Responsive Design
Prefix a `list-style-image` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="list-image-none md:list-image-[url(/img/checkmark.png)]">
  <ul>
    <li>List item</li>
    <li>Another list item</li>
  </ul>
</div>
```

## Learn More
For more details on using variants and responsive utilities, refer to the official documentation on variants.
