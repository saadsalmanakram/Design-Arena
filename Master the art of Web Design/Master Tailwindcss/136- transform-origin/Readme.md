# Transform Origin Utilities

## Introduction

The `transform-origin` utility allows you to specify the point from which an element's transformations (such as scaling or rotation) originate. By default, transformations occur from the center of an element, but with `transform-origin`, you can change this behavior to achieve different visual effects.

This utility is particularly useful when rotating or scaling elements, as it helps control the pivot point, making animations and transformations more precise.

## Available Classes

| Class | Styles Applied |
|--------|---------------------------|
| `origin-center` | `transform-origin: center;` |
| `origin-top` | `transform-origin: top;` |
| `origin-top-right` | `transform-origin: top right;` |
| `origin-right` | `transform-origin: right;` |
| `origin-bottom-right` | `transform-origin: bottom right;` |
| `origin-bottom` | `transform-origin: bottom;` |
| `origin-bottom-left` | `transform-origin: bottom left;` |
| `origin-left` | `transform-origin: left;` |
| `origin-top-left` | `transform-origin: top left;` |
| `origin-[<value>]` | `transform-origin: <value>;` (custom values) |
| `origin-(<custom-property>)` | `transform-origin: var(<custom-property>);` (CSS variables) |

## Examples

### Basic Example
Use predefined utility classes to control the transform origin of an element:

```html
<img class="origin-center rotate-45 ..." src="/img/mountains.jpg" />
<img class="origin-top-left rotate-12 ..." src="/img/mountains.jpg" />
<img class="origin-bottom -rotate-12 ..." src="/img/mountains.jpg" />
```

### Using a Custom Value
To define a custom transformation origin, use the `origin-[<value>]` syntax:

```html
<img class="origin-[33%_75%] ..." src="/img/mountains.jpg" />
```

For CSS variables, use the `origin-(<custom-property>)` syntax:

```html
<img class="origin-(--my-transform-origin) ..." src="/img/mountains.jpg" />
```

This is a shorthand for `origin-[var(<custom-property>)]`, which automatically applies the `var()` function.

### Responsive Design
You can prefix `transform-origin` utilities with a breakpoint variant like `md:` to apply the utility conditionally at certain screen sizes:

```html
<img class="origin-center md:origin-top ..." src="/img/mountains.jpg" />
```

## Additional Resources
For more details on available variants and customization, refer to the [official documentation](#).

