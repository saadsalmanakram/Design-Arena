# Transition Delay Utility

## Introduction
The **Transition Delay Utility** provides a set of classes for controlling the delay of CSS transitions. It allows you to specify how long a transition should wait before starting, using predefined values, custom values, or CSS variables. This utility is useful for creating smooth and controlled animations in web applications.

## Usage
The transition delay is applied using the `transition-delay` CSS property. You can set a delay in milliseconds, use a custom value, or define a CSS variable.

### Classes and Styles
| Class | Styles Applied |
|--------|------------------|
| `delay-<number>` | `transition-delay: <number>ms;` |
| `delay-(<custom-property>)` | `transition-delay: var(<custom-property>);` |
| `delay-[<value>]` | `transition-delay: <value>;` |

## Examples

### Basic Example
Use utilities like `delay-150` and `delay-700` to set the transition delay of an element in milliseconds:

```html
<button class="transition delay-150 duration-300 ease-in-out ...">Button A</button>
<button class="transition delay-300 duration-300 ease-in-out ...">Button B</button>
<button class="transition delay-700 duration-300 ease-in-out ...">Button C</button>
```

### Using a Custom Value
You can use the `delay-[<value>]` syntax to define a completely custom transition delay:

```html
<button class="delay-[1s,250ms] ...">
  <!-- Custom delay values -->
</button>
```

For CSS variables, use the `delay-(<custom-property>)` syntax:

```html
<button class="delay-(--my-delay) ...">
  <!-- Delay using a CSS variable -->
</button>
```
This is equivalent to using:

```html
<button class="delay-[var(--my-delay)] ...">
  <!-- Equivalent shorthand -->
</button>
```

### Responsive Design
You can apply transition delay utilities conditionally using responsive variants. For example, to set different delays based on screen size:

```html
<button class="delay-150 md:delay-300 ...">
  <!-- Delays 150ms by default, 300ms on medium screens and above -->
</button>
```

For more details, refer to the [variants documentation](#).

