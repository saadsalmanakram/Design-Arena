# Align-Self Utility

## Introduction
The `align-self` utility in Tailwind CSS allows you to control how an individual flex or grid item is positioned along its container's cross axis. This utility provides fine-grained control over item alignment within flexible layouts, overriding the default alignment set by `align-items` in the parent container.

## Available Classes

| Class         | Styles                     |
|--------------|---------------------------|
| `self-auto`   | `align-self: auto;`       |
| `self-start`  | `align-self: flex-start;` |
| `self-end`    | `align-self: flex-end;`   |
| `self-center` | `align-self: center;`     |
| `self-stretch` | `align-self: stretch;`   |
| `self-baseline` | `align-self: baseline;` |

## Usage Examples

### Auto
Use `self-auto` to align an item based on the value of the container's `align-items` property:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-auto ...">02</div>
  <div>03</div>
</div>
```

### Start
Use `self-start` to align an item to the start of the container's cross axis, overriding the container's `align-items` value:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-start ...">02</div>
  <div>03</div>
</div>
```

### Center
Use `self-center` to align an item to the center of the container's cross axis:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-center ...">02</div>
  <div>03</div>
</div>
```

### End
Use `self-end` to align an item to the end of the container's cross axis:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-end ...">02</div>
  <div>03</div>
</div>
```

### Stretch
Use `self-stretch` to make an item fill the container's cross axis:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-stretch ...">02</div>
  <div>03</div>
</div>
```

## Responsive Design
You can use responsive variants to apply alignment utilities at different breakpoints. Prefix an `align-self` utility with a breakpoint like `md:` to only apply the utility at medium screen sizes and above:

```html
<div class="self-auto md:self-end ...">
  <!-- Content -->
</div>
```

For more details on responsive variants, refer to the Tailwind CSS documentation.

