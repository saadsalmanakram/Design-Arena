# Scroll Margin Utilities

## Introduction

The `scroll-margin` utility provides control over the scroll offset around elements within a snap container. This feature is particularly useful when implementing scroll snapping behavior, ensuring that elements align correctly within a scrolling viewport. The utility allows you to define margins that affect how an item is positioned when it becomes the target of a scroll operation.

## Usage

The `scroll-margin` utility provides several predefined classes to control scroll margins in different directions. These classes allow you to set margins using predefined spacing values, negative values, custom properties, or specific breakpoints.

### Classes and Styles

| Class                          | Style                                                  |
|--------------------------------|--------------------------------------------------------|
| `scroll-m-<number>`            | `scroll-margin: calc(var(--spacing) * <number>)`      |
| `-scroll-m-<number>`           | `scroll-margin: calc(var(--spacing) * -<number>)`     |
| `scroll-m-(<custom-property>)` | `scroll-margin: var(<custom-property>)`               |
| `scroll-m-[<value>]`           | `scroll-margin: <value>`                              |
| `scroll-mx-<number>`           | `scroll-margin-inline: calc(var(--spacing) * <number>)` |
| `-scroll-mx-<number>`          | `scroll-margin-inline: calc(var(--spacing) * -<number>)` |
| `scroll-mx-(<custom-property>)`| `scroll-margin-inline: var(<custom-property>)`        |
| `scroll-mx-[<value>]`          | `scroll-margin-inline: <value>`                      |
| `scroll-my-<number>`           | `scroll-margin-block: calc(var(--spacing) * <number>)` |
| `-scroll-my-<number>`          | `scroll-margin-block: calc(var(--spacing) * -<number>)` |

## Examples

### Basic Example

Use the `scroll-mt-<number>`, `scroll-mr-<number>`, `scroll-mb-<number>`, and `scroll-ml-<number>` utilities to set the scroll offset around elements in a snap container:

```html
<div class="snap-x ...">
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-01.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-02.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-03.jpg"/>
  </div>
</div>
```

### Using Negative Values

To apply negative scroll margins, prefix the class name with `-`:

```html
<div class="snap-start -scroll-ml-6 ...">
  <img src="/img/vacation-01.jpg"/>
</div>
```

### Logical Properties

Use `scroll-ms-<number>` and `scroll-me-<number>` for logical properties that adjust based on text direction:

```html
<div dir="ltr">
  <div class="snap-x ...">
    <div class="snap-start scroll-ms-6 ...">
      <img src="/img/vacation-01.jpg"/>
    </div>
  </div>
</div>

<div dir="rtl">
  <div class="snap-x ...">
    <div class="snap-start scroll-ms-6 ...">
      <img src="/img/vacation-01.jpg"/>
    </div>
  </div>
</div>
```

### Custom Values

You can specify custom values using square brackets:

```html
<div class="scroll-ml-[24rem] ...">
  <img src="/img/vacation-01.jpg"/>
</div>
```

Or use CSS variables:

```html
<div class="scroll-ml-(--my-scroll-margin) ...">
  <img src="/img/vacation-01.jpg"/>
</div>
```

### Responsive Design

Apply scroll margin utilities conditionally based on screen size using breakpoints:

```html
<div class="scroll-m-8 md:scroll-m-0 ...">
  <img src="/img/vacation-01.jpg"/>
</div>
```

## Customization

The `scroll-margin` utilities use the `--spacing` theme variable, which can be customized:

```css
@theme {
  --spacing: 1px;
}
```

This allows for easy scaling of scroll margins across different elements in your design.

## Conclusion

The `scroll-margin` utility provides a flexible way to control the scroll offset around elements in a snap container. With support for negative values, logical properties, custom values, and responsive design, it enhances scroll-snapping behavior and ensures a smooth user experience.

