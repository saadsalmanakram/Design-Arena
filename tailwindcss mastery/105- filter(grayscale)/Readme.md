# Grayscale Filter Utility

## Introduction
The `grayscale` filter utility provides an easy way to apply a grayscale effect to elements in your project. It allows you to control the amount of grayscale applied to images or other elements using predefined classes or custom values. This utility is particularly useful for styling elements dynamically, enhancing design aesthetics, or achieving accessibility goals.

## Usage
### Classes and Styles
The `grayscale` filter can be applied using the following utility classes:

| Class | Styles Applied |
| --- | --- |
| `grayscale` | `filter: grayscale(100%);` |
| `grayscale-<number>` | `filter: grayscale(<number>%);` |
| `grayscale-(<custom-property>)` | `filter: grayscale(var(<custom-property>));` |
| `grayscale-[<value>]` | `filter: grayscale(<value>);` |

## Examples
### Basic Example
You can use utilities like `grayscale` and `grayscale-75` to control the level of grayscale applied to an element:

```html
<img class="grayscale-0 ..." src="/img/mountains.jpg" />
<img class="grayscale-25 ..." src="/img/mountains.jpg" />
<img class="grayscale-50 ..." src="/img/mountains.jpg" />
<img class="grayscale ..." src="/img/mountains.jpg" />
```

### Using a Custom Value
You can define grayscale effects using completely custom values:

```html
<img class="grayscale-[0.5] ..." src="/img/mountains.jpg" />
```

For CSS variables, use the `grayscale-(<custom-property>)` syntax:

```html
<img class="grayscale-(--my-grayscale) ..." src="/img/mountains.jpg" />
```

This syntax is shorthand for `grayscale-[var(<custom-property>)]` and automatically adds the `var()` function for you.

### Responsive Design
To apply grayscale filters responsively, prefix the `filter: grayscale()` utility with a breakpoint variant such as `md:` to only apply it at medium screen sizes and above:

```html
<img class="grayscale md:grayscale-0 ..." src="/img/mountains.jpg" />
```

## Additional Resources
For more details on responsive variants and utility classes, refer to the official documentation.

