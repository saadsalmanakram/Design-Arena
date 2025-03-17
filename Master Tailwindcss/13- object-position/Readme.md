# Object Position Utilities

## Introduction
The `object-position` utilities provide a way to control how a replaced element's content (such as an image or video) is positioned within its container. This is especially useful when working with elements that have `object-fit` applied, allowing precise placement of content within a given area.

## Available Classes
The following classes can be used to define object positioning within an element's container:

| Class | Styles Applied |
|--------|--------------------------|
| `object-bottom` | `object-position: bottom;` |
| `object-center` | `object-position: center;` |
| `object-left` | `object-position: left;` |
| `object-left-bottom` | `object-position: left bottom;` |
| `object-left-top` | `object-position: left top;` |
| `object-right` | `object-position: right;` |
| `object-right-bottom` | `object-position: right bottom;` |
| `object-right-top` | `object-position: right top;` |
| `object-top` | `object-position: top;` |
| `object-(<custom-property>)` | `object-position: var(<custom-property>);` |
| `object-[<value>]` | `object-position: <value>;` |

## Examples

### Basic Example
Use utilities like `object-left` and `object-right-bottom` to specify how a replaced element's content should be positioned within its container.

Hover over the examples to see the full image:

```html
<img class="size-24 object-left-top ..." src="/img/mountains.jpg" />
<img class="size-24 object-top ..." src="/img/mountains.jpg" />
<img class="size-24 object-right-top ..." src="/img/mountains.jpg" />
<img class="size-24 object-left ..." src="/img/mountains.jpg" />
<img class="size-24 object-center ..." src="/img/mountains.jpg" />
<img class="size-24 object-right ..." src="/img/mountains.jpg" />
<img class="size-24 object-left-bottom ..." src="/img/mountains.jpg" />
<img class="size-24 object-bottom ..." src="/img/mountains.jpg" />
<img class="size-24 object-right-bottom ..." src="/img/mountains.jpg" />
```

### Using a Custom Value
Use the `object-[<value>]` syntax to set the object position based on a completely custom value:

```html
<img class="object-[25%_75%] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `object-(<custom-property>)` syntax:

```html
<img class="object-(--my-object) ..." src="/img/mountains.jpg" />
```

This is shorthand for `object-[var(<custom-property>)]`, automatically adding the `var()` function for you.

### Responsive Design
Prefix an `object-position` utility with a breakpoint variant like `md:` to apply it only at medium screen sizes and above:

```html
<img class="object-center md:object-top ..." src="/img/mountains.jpg" />
```
