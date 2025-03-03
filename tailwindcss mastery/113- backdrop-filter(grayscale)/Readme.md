# Backdrop Filter: Grayscale

## Introduction
The `backdrop-filter: grayscale()` utility applies a grayscale filter to the backdrop of an element. This effect can be useful for enhancing contrast, creating aesthetic overlays, or implementing design elements that require a desaturated background.

This utility provides different classes to apply varying levels of grayscale filtering, including predefined percentage values, custom values, and CSS variables.

## Usage
### Available Classes
The following classes are available to apply the grayscale effect to an element’s backdrop:

| Class | Styles Applied |
|--------|-----------------|
| `backdrop-grayscale` | `backdrop-filter: grayscale(100%);` |
| `backdrop-grayscale-<number>` | `backdrop-filter: grayscale(<number>%);` |
| `backdrop-grayscale-(<custom-property>)` | `backdrop-filter: grayscale(var(<custom-property>));` |
| `backdrop-grayscale-[<value>]` | `backdrop-filter: grayscale(<value>);` |

## Examples

### Basic Example
Use predefined classes such as `backdrop-grayscale-50` or `backdrop-grayscale` to control the grayscale effect applied to an element’s backdrop:

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-grayscale-0 ..."></div>
</div>

<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-grayscale-50 ..."></div>
</div>

<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-grayscale ..."></div>
</div>
```

### Using a Custom Value
To set a completely custom grayscale value, use the `backdrop-grayscale-[<value>]` syntax:

```html
<div class="backdrop-grayscale-[0.5] ...">
  <!-- Content -->
</div>
```

For CSS variables, you can use the `backdrop-grayscale-(<custom-property>)` syntax:

```html
<div class="backdrop-grayscale-(--my-backdrop-grayscale) ...">
  <!-- Content -->
</div>
```
This syntax is a shorthand for `backdrop-grayscale-[var(<custom-property>)]`, automatically adding the `var()` function.

### Responsive Design
To apply the grayscale effect at specific screen sizes, use responsive variants like `md:`:

```html
<div class="backdrop-grayscale md:backdrop-grayscale-0 ...">
  <!-- Content -->
</div>
```

## Learn More
For further details on responsive variants and customization, refer to the [variants documentation](#).

