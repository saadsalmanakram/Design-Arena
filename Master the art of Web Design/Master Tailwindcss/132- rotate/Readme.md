# Rotate Utility

## Introduction
The **rotate** utility provides a set of classes for rotating elements in CSS. These classes allow you to apply precise rotation transformations to elements using degrees, negative values, and even custom properties. Additionally, 3D transformations can be applied using `rotate-x`, `rotate-y`, and `rotate-z` utilities for a more dynamic visual effect.

## Classes and Usage

### Basic Rotation
The `rotate-<number>` utility applies a rotation of `<number>` degrees to an element.

```html
<img class="rotate-45" src="/img/mountains.jpg" />
<img class="rotate-90" src="/img/mountains.jpg" />
<img class="rotate-210" src="/img/mountains.jpg" />
```

### Using Negative Values
To rotate an element counterclockwise, use `-rotate-<number>`.

```html
<img class="-rotate-45" src="/img/mountains.jpg" />
<img class="-rotate-90" src="/img/mountains.jpg" />
<img class="-rotate-210" src="/img/mountains.jpg" />
```

### 3D Rotation
For three-dimensional transformations, use `rotate-x-<number>`, `rotate-y-<number>`, and `rotate-z-<number>`.

```html
<img class="rotate-x-50 rotate-z-45" src="/img/mountains.jpg" />
<img class="rotate-x-15 -rotate-y-30" src="/img/mountains.jpg" />
<img class="rotate-y-25 rotate-z-30" src="/img/mountains.jpg" />
```

### Custom Values
You can use custom values for rotation using the `rotate-[<value>]` syntax.

```html
<img class="rotate-[3.142rad]" src="/img/mountains.jpg" />
```

Alternatively, you can use CSS variables:

```html
<img class="rotate-(--my-rotation)" src="/img/mountains.jpg" />
```

### Responsive Design
To apply rotation only at certain screen sizes, prefix the class with a breakpoint like `md:`.

```html
<img class="rotate-45 md:rotate-60" src="/img/mountains.jpg" />
```

## Conclusion
The **rotate** utility provides a flexible and efficient way to rotate elements in both 2D and 3D spaces. Whether applying predefined degree values, custom rotations, or using responsive design principles, this utility enhances design flexibility in modern web applications.

