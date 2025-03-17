# Scale Utility

## Introduction
The `scale` utility provides a simple way to scale elements in your project. It allows you to resize elements proportionally or along specific axes using predefined classes or custom values. This utility is useful for creating responsive designs, hover effects, and animations.

## Classes and Usage

### Basic Scaling
Use the `scale-<number>` utility to scale an element by a percentage of its original size.

#### Example:
```html
<img class="scale-75" src="/img/mountains.jpg" />
<img class="scale-100" src="/img/mountains.jpg" />
<img class="scale-125" src="/img/mountains.jpg" />
```

### Scaling on the X-Axis
To scale an element along the x-axis, use the `scale-x-<number>` utility.

#### Example:
```html
<img class="scale-x-75" src="/img/mountains.jpg" />
<img class="scale-x-100" src="/img/mountains.jpg" />
<img class="scale-x-125" src="/img/mountains.jpg" />
```

### Scaling on the Y-Axis
To scale an element along the y-axis, use the `scale-y-<number>` utility.

#### Example:
```html
<img class="scale-y-75" src="/img/mountains.jpg" />
<img class="scale-y-100" src="/img/mountains.jpg" />
<img class="scale-y-125" src="/img/mountains.jpg" />
```

### Using Negative Values
You can use negative scaling values to mirror elements while scaling them down.

#### Example:
```html
<img class="-scale-x-75" src="/img/mountains.jpg" />
<img class="-scale-100" src="/img/mountains.jpg" />
<img class="-scale-y-125" src="/img/mountains.jpg" />
```

### Using Custom Values
To set a completely custom scaling value, use `scale-[<value>]`.

#### Example:
```html
<img class="scale-[1.7]" src="/img/mountains.jpg" />
```

For CSS variables, use the `scale-(<custom-property>)` syntax:

```html
<img class="scale-(--my-scale)" src="/img/mountains.jpg" />
```

### Applying Scale on Hover
You can apply scaling effects on hover using utility variants.

#### Example:
```html
<img class="scale-95 hover:scale-120" src="/img/mountains.jpg" />
```

## Conclusion
The `scale` utility makes it easy to resize elements dynamically with predefined classes or custom values. Whether you need proportional resizing, axis-based scaling, or hover effects, this utility provides a flexible approach to element scaling in your design.

