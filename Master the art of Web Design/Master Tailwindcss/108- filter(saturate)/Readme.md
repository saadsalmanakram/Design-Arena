# Saturate Filter Utilities

## Introduction
The `saturate()` filter utility provides an easy way to control the saturation level of an element. By using different saturation values, you can enhance or desaturate images and elements dynamically. This utility is especially useful for UI/UX design enhancements, image effects, and responsive styling.

## Usage
The `saturate()` utility applies saturation filters to elements using predefined or custom values. It allows for:
- Predefined saturation levels
- Custom values
- CSS variable support
- Responsive design variations

## Classes and Styles

| Class                  | Style Applied                              |
|------------------------|-------------------------------------------|
| `saturate-<number>`    | `filter: saturate(<number>%);`           |
| `saturate-(<custom-property>)` | `filter: saturate(var(<custom-property>));` |
| `saturate-[<value>]`   | `filter: saturate(<value>);`              |

## Examples

### Basic Example
Use predefined saturation levels such as `saturate-50`, `saturate-100`, etc., to adjust an element’s saturation:

```html
<img class="saturate-50" src="/img/mountains.jpg" />
<img class="saturate-100" src="/img/mountains.jpg" />
<img class="saturate-150" src="/img/mountains.jpg" />
<img class="saturate-200" src="/img/mountains.jpg" />
```

### Using a Custom Value
Define custom saturation levels using the `saturate-[<value>]` syntax:

```html
<img class="saturate-[.25]" src="/img/mountains.jpg" />
```

You can also use CSS variables with the `saturate-(<custom-property>)` syntax:

```html
<img class="saturate-(--my-saturation)" src="/img/mountains.jpg" />
```
This is a shorthand for `saturate-[var(<custom-property>)]`, automatically adding the `var()` function.

### Responsive Design
Apply different saturation levels at various breakpoints using responsive prefixes:

```html
<img class="saturate-50 md:saturate-150" src="/img/mountains.jpg" />
```

## Learn More
For more details on applying filter utilities and responsive breakpoints, refer to the [variants documentation](#).

