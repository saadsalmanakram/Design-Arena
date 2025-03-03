# Sepia Filter Utility

## Introduction
The **sepia filter utility** provides a simple way to apply sepia-tone effects to HTML elements, primarily images. The sepia effect gives images a warm, brownish tint reminiscent of vintage photographs. This utility allows fine-grained control over the intensity of the sepia effect using predefined classes, custom values, and CSS variables.

## Usage
The utility applies the `filter: sepia();` CSS property to elements, enabling the sepia effect. You can use predefined classes or specify custom values to achieve different levels of sepia intensity.

## Classes and Styles
The following classes are available:

| Class | Styles |
|--------|--------------------------------|
| `sepia` | `filter: sepia(100%);` |
| `sepia-<number>` | `filter: sepia(<number>%);` |
| `sepia-(<custom-property>)` | `filter: sepia(var(<custom-property>));` |
| `sepia-[<value>]` | `filter: sepia(<value>);` |

## Examples

### Basic Example
Apply the sepia effect using predefined utility classes:

```html
<img class="sepia-0" src="/img/mountains.jpg" />
<img class="sepia-50" src="/img/mountains.jpg" />
<img class="sepia" src="/img/mountains.jpg" />
```

### Using a Custom Value
Define a specific sepia level with custom values:

```html
<img class="sepia-[.25]" src="/img/mountains.jpg" />
```

For CSS variables, use:

```html
<img class="sepia-(--my-sepia)" src="/img/mountains.jpg" />
```
This is a shorthand for `sepia-[var(--my-sepia)]`, automatically adding the `var()` function.

## Responsive Design
You can apply the sepia filter conditionally based on screen size using responsive prefixes:

```html
<img class="sepia md:sepia-0" src="/img/mountains.jpg" />
```

This ensures that the sepia effect is applied at the default size but removed on medium-sized screens and larger.

For more details on responsive variants, refer to the **variants documentation**.

## Conclusion
The **sepia filter utility** is a powerful tool for adding a vintage effect to images with minimal effort. By using predefined classes, custom values, or responsive variants, you can fine-tune the sepia effect to suit your design needs.

