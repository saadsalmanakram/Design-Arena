# Invert Filter Utility

## Introduction
The `invert` utility in CSS is used to apply a color inversion effect to an element, flipping the colors to their complementary values. This effect is particularly useful for creating dark mode effects, image styling, and enhancing visual contrast. Tailwind CSS provides utility classes to apply the `filter: invert()` effect at different levels of intensity, allowing for precise control over color inversion.

## Usage
The `invert` utility can be applied to images, backgrounds, and other elements to control their color inversion. Tailwind provides several predefined classes, as well as support for custom values and responsive design.

### Classes and Styles
| Class | Styles Applied |
|--------|----------------|
| `invert` | `filter: invert(100%)` |
| `invert-0` | `filter: invert(0%)` |
| `invert-<number>` | `filter: invert(<number>%)` |
| `invert-(<custom-property>)` | `filter: invert(var(<custom-property>))` |
| `invert-[<value>]` | `filter: invert(<value>)` |

## Examples

### Basic Usage
Use `invert` utilities to control the color inversion of an element:

```html
<img class="invert-0" src="/img/mountains.jpg" />
<img class="invert-20" src="/img/mountains.jpg" />
<img class="invert" src="/img/mountains.jpg" />
```

### Using a Custom Value
To apply a custom inversion value, use the `invert-[<value>]` syntax:

```html
<img class="invert-[.25]" src="/img/mountains.jpg" />
```

For CSS variables, use `invert-(<custom-property>)`:

```html
<img class="invert-(--my-inversion)" src="/img/mountains.jpg" />
```
This is a shorthand for `invert-[var(<custom-property>)]`, which automatically applies the `var()` function.

## Responsive Design
You can apply inversion utilities based on screen size by using responsive prefixes such as `md:`:

```html
<img class="invert md:invert-0" src="/img/mountains.jpg" />
```
This ensures the effect is applied only at medium screen sizes and above.

## Learn More
For additional details on responsive variants and advanced usage, refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/filters).

