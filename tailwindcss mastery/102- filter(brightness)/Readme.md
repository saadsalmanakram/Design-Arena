# Brightness Filter Utility

## Introduction
The **brightness filter utility** provides a set of CSS classes for controlling the brightness of elements. By applying `filter: brightness()` through predefined utility classes, you can easily adjust the brightness of images and other elements. This utility is particularly useful for UI design, accessibility improvements, and enhancing visual aesthetics.

## Usage
### Class Naming Conventions
The following class formats are available for applying brightness:

| Class | Styles |
|-------|--------|
| `brightness-<number>` | `filter: brightness(<number>%);` |
| `brightness-(<custom-property>)` | `filter: brightness(var(<custom-property>));` |
| `brightness-[<value>]` | `filter: brightness(<value>);` |

### Examples
#### Basic Example
Use the predefined classes like `brightness-50` and `brightness-100` to control an element's brightness:

```html
<img class="brightness-50" src="/img/mountains.jpg" />
<img class="brightness-100" src="/img/mountains.jpg" />
<img class="brightness-125" src="/img/mountains.jpg" />
<img class="brightness-200" src="/img/mountains.jpg" />
```

#### Using a Custom Value
You can define a custom brightness level using the `[value]` syntax:

```html
<img class="brightness-[1.75]" src="/img/mountains.jpg" />
```

Alternatively, CSS variables can be used with the `brightness-(<custom-property>)` syntax:

```html
<img class="brightness-(--my-brightness)" src="/img/mountains.jpg" />
```
This is a shorthand for `brightness-[var(--my-brightness)]`, automatically applying the `var()` function.

### Responsive Design
The brightness filter utility supports responsive variants. Prefix the class with a breakpoint like `md:` to apply brightness adjustments only at specific screen sizes:

```html
<img class="brightness-110 md:brightness-150" src="/img/mountains.jpg" />
```

## Additional Information
To learn more about responsive design and utility classes, refer to the **variants documentation**.

---
This utility enhances styling flexibility by allowing precise brightness adjustments, ensuring improved readability and aesthetics in different UI designs.

