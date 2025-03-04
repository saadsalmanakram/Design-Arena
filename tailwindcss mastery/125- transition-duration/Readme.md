# Transition Duration Utilities

## Introduction
The `transition-duration` utility provides a way to control the duration of CSS transitions in your web applications. It allows you to specify how long a transition effect should take, enabling smooth and visually appealing animations.

With these utilities, you can define transition durations using predefined values, custom properties, or even responsive breakpoints to fine-tune your animations across different screen sizes.

## Usage
The transition duration utilities are applied using the `duration-<number>` class, where `<number>` represents the duration in milliseconds.

### Available Classes
| Class                           | Styles                                      |
|---------------------------------|---------------------------------------------|
| `duration-<number>`             | `transition-duration: <number>ms;`         |
| `duration-initial`              | `transition-duration: initial;`            |
| `duration-(<custom-property>)`  | `transition-duration: var(<custom-property>);` |
| `duration-[<value>]`            | `transition-duration: <value>;`             |

## Examples

### Basic Example
You can use predefined duration utilities like `duration-150`, `duration-300`, and `duration-700` to set the transition duration of an element:

```html
<button class="transition duration-150 ease-in-out ...">Button A</button>
<button class="transition duration-300 ease-in-out ...">Button B</button>
<button class="transition duration-700 ease-in-out ...">Button C</button>
```

### Using a Custom Value
For greater flexibility, use the `duration-[<value>]` syntax to specify a completely custom transition duration:

```html
<button class="duration-[1s,15s] ...">
  Custom Duration Button
</button>
```

You can also use CSS variables with the `duration-(<custom-property>)` syntax:

```html
<button class="duration-(--my-duration) ...">
  CSS Variable Duration Button
</button>
```

This is a shorthand for `duration-[var(<custom-property>)]`, which automatically applies the `var()` function.

### Responsive Design
To apply different transition durations based on screen size, prefix the class with a responsive variant such as `md:`:

```html
<button class="duration-0 md:duration-150 ...">
  Responsive Transition Button
</button>
```

This ensures that `duration-150` is only applied on medium-sized screens and larger.

## Learn More
For further details on how to use transition utilities with breakpoints and other properties, check out the official documentation on variants and responsiveness.

