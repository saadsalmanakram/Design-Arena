# Skew Utilities

## Introduction
The **Skew Utilities** provide a simple way to apply skew transformations to elements using CSS `transform` properties. These utilities allow you to skew elements on the X and Y axes, supporting both predefined numeric values and custom properties. This is useful for creating dynamic visual effects, such as slanted images, text distortions, or unique UI animations.

## Classes and Styles
### General Skewing
Use `skew-<number>` to apply skew transformations to both the X and Y axes:
```css
skew-<number> { transform: skewX(<number>deg) skewY(<number>deg); }
-skew-<number> { transform: skewX(-<number>deg) skewY(-<number>deg); }
```

### Custom Skew Values
You can define custom skew values using CSS properties:
```css
skew-(<custom-property>) { transform: skewX(var(<custom-property>)) skewY(var(<custom-property>)); }
skew-[<value>] { transform: skewX(<value>) skewY(<value>); }
```

### Skewing on the X-Axis
Use `skew-x-<number>` to apply skew transformations only on the X-axis:
```css
skew-x-<number> { transform: skewX(<number>deg); }
-skew-x-<number> { transform: skewX(-<number>deg); }
skew-x-(<custom-property>) { transform: skewX(var(<custom-property>)); }
skew-x-[<value>] { transform: skewX(<value>); }
```

### Skewing on the Y-Axis
Use `skew-y-<number>` to apply skew transformations only on the Y-axis:
```css
skew-y-<number> { transform: skewY(<number>deg); }
-skew-y-<number> { transform: skewY(-<number>deg); }
skew-y-(<custom-property>) { transform: skewY(var(<custom-property>)); }
skew-y-[<value>] { transform: skewY(<value>); }
```

## Examples
### Basic Skew
Apply skew transformations to an image using predefined values:
```html
<img class="skew-3" src="/img/mountains.jpg" />
<img class="skew-6" src="/img/mountains.jpg" />
<img class="skew-12" src="/img/mountains.jpg" />
```

### Using Negative Skew
```html
<img class="-skew-3" src="/img/mountains.jpg" />
<img class="-skew-6" src="/img/mountains.jpg" />
<img class="-skew-12" src="/img/mountains.jpg" />
```

### Skewing Only on the X-Axis
```html
<img class="skew-x-6" src="/img/mountains.jpg" />
<img class="skew-x-12" src="/img/mountains.jpg" />
```

### Skewing Only on the Y-Axis
```html
<img class="skew-y-6" src="/img/mountains.jpg" />
<img class="skew-y-12" src="/img/mountains.jpg" />
```

### Using a Custom Value
```html
<img class="skew-[3.142rad]" src="/img/mountains.jpg" />
<img class="skew-(--my-skew)" src="/img/mountains.jpg" />
```

## Responsive Design
You can apply skew transformations conditionally based on breakpoints:
```html
<img class="skew-3 md:skew-12" src="/img/mountains.jpg" />
```

## Conclusion
The **Skew Utilities** allow for flexible and efficient skew transformations using CSS classes. By leveraging predefined values, custom properties, and responsive design, you can create visually dynamic layouts with minimal effort.

