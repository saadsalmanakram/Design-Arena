# Filter Utilities

## Introduction
The **Filter** utility provides a set of classes for applying CSS filter effects to elements. These utilities allow you to enhance images or other elements by adding visual effects such as blur, brightness, contrast, grayscale, and more. You can also remove filters or apply custom filter values using CSS variables and direct values.

## Classes and Styles

| Class                     | Style Equivalent |
|---------------------------|-----------------|
| `filter-none`             | `filter: none;` |
| `filter-(<custom-property>)` | `filter: var(<custom-property>);` |
| `filter-[<value>]`        | `filter: <value>;` |

## Examples

### Basic Example
Use utilities like `blur-xs` and `grayscale` to apply filters to an element:

```html
<img class="blur-xs" src="/img/mountains.jpg" />
<img class="grayscale" src="/img/mountains.jpg" />
<img class="blur-xs grayscale" src="/img/mountains.jpg" />
```

You can combine multiple filter utilities, including:
- `blur`
- `brightness`
- `contrast`
- `drop-shadow`
- `grayscale`
- `hue-rotate`
- `invert`
- `saturate`
- `sepia`

### Removing Filters
Use the `filter-none` utility to remove all applied filters:

```html
<img class="blur-md brightness-150 invert md:filter-none" src="/img/mountains.jpg" />
```

### Using Custom Values
Use the `filter-[<value>]` syntax to define a completely custom filter value:

```html
<img class="filter-[url('filters.svg#filter-id')]" src="/img/mountains.jpg" />
```

For CSS variables, use `filter-(<custom-property>)`:

```html
<img class="filter-(--my-filter)" src="/img/mountains.jpg" />
```
This is shorthand for `filter-[var(<custom-property>)]`, automatically adding the `var()` function.

### Applying Filters on Hover
Prefix a filter utility with `hover:*` to apply the effect only in the hover state:

```html
<img class="blur-sm hover:filter-none" src="/img/mountains.jpg" />
```

### Responsive Design
Prefix a filter utility with a breakpoint variant (e.g., `md:`) to apply the effect at specific screen sizes:

```html
<img class="blur-sm md:filter-none" src="/img/mountains.jpg" />
```

Learn more about responsive design and state variants in the official documentation.

