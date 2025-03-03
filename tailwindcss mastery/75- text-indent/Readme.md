# Text Indent Utility

## Introduction
The **text-indent** utility provides a simple way to control the amount of empty space before text in a block. It allows you to apply indentation using predefined values, custom values, or CSS variables. This utility supports positive and negative indentation, making it flexible for various design needs. Additionally, it supports responsive design by allowing different indentations based on screen size breakpoints.

## Usage
The text-indent utility follows a class-based approach where you can specify the indentation using predefined values or custom inputs.

### Class Structure
| Class Name | Style Applied |
|------------|--------------|
| `indent-<number>` | `text-indent: calc(var(--spacing) * <number>)` |
| `-indent-<number>` | `text-indent: calc(var(--spacing) * -<number>)` |
| `indent-px` | `text-indent: 1px;` |
| `-indent-px` | `text-indent: -1px;` |
| `indent-(<custom-property>)` | `text-indent: var(<custom-property>);` |
| `indent-[<value>]` | `text-indent: <value>;` |

## Examples

### Basic Example
Use `indent-<number>` utilities like `indent-2` and `indent-8` to set the amount of indentation before text in a block:
```html
<p class="indent-8">So I started to walk into the water...</p>
```

### Using Negative Values
To apply a negative text-indent value, prefix the class name with `-` to make it negative:
```html
<p class="-indent-8">So I started to walk into the water...</p>
```

### Using a Custom Value
You can define a completely custom indentation value using the `indent-[<value>]` syntax:
```html
<p class="indent-[50%]">Custom indentation example...</p>
```
Alternatively, for CSS variables, use `indent-(<custom-property>)`:
```html
<p class="indent-(--my-indentation)">CSS variable indentation...</p>
```
This is shorthand for `indent-[var(<custom-property>)]` and automatically includes the `var()` function.

### Responsive Design
Apply different text-indent values at different screen sizes using responsive variants:
```html
<p class="indent-4 md:indent-8">Responsive indentation example...</p>
```
Learn more about responsive variants in the official documentation.

## Conclusion
The **text-indent** utility provides an easy and flexible way to control text indentation in a structured and responsive manner. By using predefined values, custom values, or CSS variables, you can tailor the indentation to meet design requirements effectively.

