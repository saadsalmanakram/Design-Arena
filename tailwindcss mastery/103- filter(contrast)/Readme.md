# Brightness Filter Utility

## Introduction
The `brightness` filter utility provides a way to control the brightness of an element using CSS filters. This utility applies the `filter: brightness()` property to elements, allowing you to adjust their brightness levels dynamically. The utility supports predefined values, custom values, and CSS variables, making it highly flexible for various design needs. It also supports responsive variants for different screen sizes.

## Usage
You can apply brightness adjustments using the following utility classes:

### Predefined Brightness Levels
The predefined brightness levels use the `brightness-<number>` syntax:

| Class | CSS Equivalent |
|--------|----------------|
| `brightness-50` | `filter: brightness(50%);` |
| `brightness-100` | `filter: brightness(100%);` |
| `brightness-125` | `filter: brightness(125%);` |
| `brightness-200` | `filter: brightness(200%);` |

### Example:
```html
<img class="brightness-50" src="/img/mountains.jpg" />
<img class="brightness-100" src="/img/mountains.jpg" />
<img class="brightness-125" src="/img/mountains.jpg" />
<img class="brightness-200" src="/img/mountains.jpg" />
```

## Using Custom Values
For more flexibility, you can use the `brightness-[<value>]` syntax to specify any custom brightness value:

```html
<img class="brightness-[1.75]" src="/img/mountains.jpg" />
```

Alternatively, use a CSS variable with the `brightness-(<custom-property>)` syntax:

```html
<img class="brightness-(--my-brightness)" src="/img/mountains.jpg" />
```

This is equivalent to using `brightness-[var(--my-brightness)]`, where `var(--my-brightness)` dynamically assigns the brightness value.

## Responsive Design
The brightness filter utility supports responsive variants, allowing you to apply different brightness levels based on screen size. Prefix the utility with a breakpoint, such as `md:`, to adjust brightness at medium screen sizes and above:

```html
<img class="brightness-110 md:brightness-150" src="/img/mountains.jpg" />
```

For more details on responsive design and utility variants, refer to the official documentation on responsive variants.

## Conclusion
The `brightness` filter utility is a simple yet powerful tool for controlling the brightness of elements in a design system. It offers predefined values, supports custom properties, and integrates seamlessly with responsive design principles.

