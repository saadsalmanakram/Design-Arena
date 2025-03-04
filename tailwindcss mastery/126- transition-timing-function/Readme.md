# Transition Timing Function Utilities

## Introduction
The `transition-timing-function` utilities allow you to control the easing of CSS transitions in your project. These utilities determine how a transitioning element accelerates or decelerates over its duration, enabling smoother and more natural animations.

Using predefined easing functions or custom values, you can fine-tune animations to create visually appealing and dynamic UI interactions.

## Available Classes
Below are the predefined classes available for controlling the transition timing function:

| Class | Styles Applied |
|--------|-------------------------------------------------|
| `ease-linear` | `transition-timing-function: linear;` |
| `ease-in` | `transition-timing-function: var(--ease-in); /* cubic-bezier(0.4, 0, 1, 1) */` |
| `ease-out` | `transition-timing-function: var(--ease-out); /* cubic-bezier(0, 0, 0.2, 1) */` |
| `ease-in-out` | `transition-timing-function: var(--ease-in-out); /* cubic-bezier(0.4, 0, 0.2, 1) */` |
| `ease-initial` | `transition-timing-function: initial;` |
| `ease-(<custom-property>)` | `transition-timing-function: var(<custom-property>);` |
| `ease-[<value>]` | `transition-timing-function: <value>;` |

## Examples

### Basic Example
Use predefined easing classes such as `ease-in`, `ease-out`, and `ease-in-out` to control the transition timing of an element. Hover over each button to observe the effects.

```html
<button class="duration-300 ease-in ...">Button A</button>
<button class="duration-300 ease-out ...">Button B</button>
<button class="duration-300 ease-in-out ...">Button C</button>
```

### Using a Custom Value
You can define a completely custom transition timing function using the `ease-[<value>]` syntax:

```html
<button class="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ...">
  Custom Easing
</button>
```

For CSS variables, you can use the `ease-(<custom-property>)` syntax:

```html
<button class="ease-(--my-ease) ...">
  CSS Variable Easing
</button>
```
This is equivalent to using `ease-[var(<custom-property>)]`, where the `var()` function is automatically applied.

### Responsive Design
Apply different easing functions at specific breakpoints using responsive variants. For example, apply `ease-out` by default and `ease-in` for medium screen sizes and above:

```html
<button class="ease-out md:ease-in ...">
  Responsive Easing
</button>
```

## Customizing Your Theme
To define custom transition timing functions in your theme, use `--ease-*` variables:

```css
@theme {
  --ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035);
}
```

Now, you can use the new easing function in your HTML:

```html
<button class="ease-in-expo">
  Custom Theme Easing
</button>
```

## Additional Resources
For more details on how to customize these utilities and leverage variants, check out the official documentation on theme customization and responsive variants.

