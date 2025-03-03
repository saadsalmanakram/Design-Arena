# Hue Rotate Filter Utilities

## Introduction
The `hue-rotate()` filter utility allows you to apply a hue rotation effect to an element, shifting its colors along the color wheel by a specified degree value. This is particularly useful for dynamically adjusting colors in images, backgrounds, and other elements without modifying the source files.

This utility is part of a broader set of filter utilities and can be customized using predefined classes, negative values, custom properties, and responsive variants.

## Usage
### Class Structure
The `hue-rotate()` utility follows a consistent class naming pattern to apply different levels of hue rotation:

| Class | Style Applied |
|--------|-----------------|
| `hue-rotate-<number>` | `filter: hue-rotate(<number>deg);` |
| `-hue-rotate-<number>` | `filter: hue-rotate(calc(<number>deg * -1));` |
| `hue-rotate-(<custom-property>)` | `filter: hue-rotate(var(<custom-property>));` |
| `hue-rotate-[<value>]` | `filter: hue-rotate(<value>);` |

### Examples
#### Basic Usage
Use predefined hue rotation utilities to adjust an element’s colors:
```html
<img class="hue-rotate-15" src="/img/mountains.jpg" />
<img class="hue-rotate-90" src="/img/mountains.jpg" />
<img class="hue-rotate-180" src="/img/mountains.jpg" />
<img class="hue-rotate-270" src="/img/mountains.jpg" />
```

#### Using Negative Values
You can apply negative hue rotations using classes prefixed with `-`:
```html
<img class="-hue-rotate-15" src="/img/mountains.jpg" />
<img class="-hue-rotate-45" src="/img/mountains.jpg" />
<img class="-hue-rotate-90" src="/img/mountains.jpg" />
```

#### Using Custom Values
You can specify a completely custom hue rotation value:
```html
<img class="hue-rotate-[3.142rad]" src="/img/mountains.jpg" />
```
Or use CSS variables for dynamic values:
```html
<img class="hue-rotate-(--my-hue-rotate)" src="/img/mountains.jpg" />
```
This shorthand automatically adds the `var()` function for custom properties.

#### Responsive Design
Apply hue rotation utilities conditionally based on screen size:
```html
<img class="hue-rotate-60 md:hue-rotate-0" src="/img/mountains.jpg" />
```

## Additional Information
For more details on filter utilities and responsive variants, refer to the [official documentation](#).

