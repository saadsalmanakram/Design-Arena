# Scroll Padding Utilities

## Introduction
The `scroll-padding` utilities control an element's scroll offset within a snap container. These utilities allow you to define spacing adjustments to ensure smoother scroll snapping behavior, providing better user experience when scrolling through content.

With `scroll-padding`, you can specify offsets that determine how close an element should be to the container’s edge before stopping. This is particularly useful when working with scroll snap layouts, ensuring elements align properly within the viewport.

## Classes and Usage
The following classes are available for controlling scroll padding values:

### Basic Classes
| Class | Style |
|--------|----------------------------------------|
| `scroll-p-<number>` | `scroll-padding: calc(var(--spacing) * <number>);` |
| `-scroll-p-<number>` | `scroll-padding: calc(var(--spacing) * -<number>);` |
| `scroll-p-(<custom-property>)` | `scroll-padding: var(<custom-property>);` |
| `scroll-p-[<value>]` | `scroll-padding: <value>;` |
| `scroll-px-<number>` | `scroll-padding-inline: calc(var(--spacing) * <number>);` |
| `-scroll-px-<number>` | `scroll-padding-inline: calc(var(--spacing) * -<number>);` |
| `scroll-px-(<custom-property>)` | `scroll-padding-inline: var(<custom-property>);` |
| `scroll-px-[<value>]` | `scroll-padding-inline: <value>;` |
| `scroll-py-<number>` | `scroll-padding-block: calc(var(--spacing) * <number>);` |
| `-scroll-py-<number>` | `scroll-padding-block: calc(var(--spacing) * -<number>);` |

## Examples
### Basic Usage
Use `scroll-pt-<number>`, `scroll-pr-<number>`, `scroll-pb-<number>`, and `scroll-pl-<number>` to set the scroll offset for an element inside a snap container.

```html
<div class="snap-x scroll-pl-6 ...">
  <div class="snap-start ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-02.jpg" />
  </div>
</div>
```

### Using Logical Properties
For better adaptability to different text directions, use `scroll-ps-<number>` and `scroll-pe-<number>`:

```html
<div dir="ltr">
  <div class="snap-x scroll-ps-6 ...">
    <!-- Content -->
  </div>
</div>
<div dir="rtl">
  <div class="snap-x scroll-ps-6 ...">
    <!-- Content -->
  </div>
</div>
```

### Negative Values
To use negative scroll padding values, prefix the class with a `-` sign:

```html
<div class="-scroll-ps-6 snap-x ...">
  <!-- Content -->
</div>
```

### Custom Values
Define custom values for scroll padding:

```html
<div class="scroll-pl-[24rem] ...">
  <!-- Content -->
</div>
```

For CSS variables:

```html
<div class="scroll-pl-(--my-scroll-padding) ...">
  <!-- Content -->
</div>
```

### Responsive Design
Apply scroll-padding utilities with breakpoints:

```html
<div class="scroll-p-8 md:scroll-p-0 ...">
  <!-- Content -->
</div>
```

## Customizing Your Theme
The `scroll-padding` utilities rely on the `--spacing` theme variable. Customize it in your theme as follows:

```css
@theme {
  --spacing: 1px;
}
```

For more details on customizing the spacing scale, refer to the theme configuration documentation.

---
This utility ensures better scrolling experiences and precise alignment of elements within scrollable containers, improving the UI's responsiveness and usability.

