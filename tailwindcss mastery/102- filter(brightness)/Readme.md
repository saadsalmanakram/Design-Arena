# Blur Filter Utilities

## Introduction
The `filter: blur()` utility provides a simple way to apply blur effects to elements in your project. These utilities allow you to create various levels of blur effects, ranging from subtle to intense, by using predefined classes or custom values. This feature is particularly useful for background effects, modal overlays, and enhancing the visual appeal of UI elements.

## Available Classes
The following classes are available for applying blur effects:

| Class       | Styles Applied                              |
|------------|--------------------------------|
| `blur-xs`  | `filter: blur(var(--blur-xs)); /* 4px */`  |
| `blur-sm`  | `filter: blur(var(--blur-sm)); /* 8px */`  |
| `blur-md`  | `filter: blur(var(--blur-md)); /* 12px */` |
| `blur-lg`  | `filter: blur(var(--blur-lg)); /* 16px */` |
| `blur-xl`  | `filter: blur(var(--blur-xl)); /* 24px */` |
| `blur-2xl` | `filter: blur(var(--blur-2xl)); /* 40px */` |
| `blur-3xl` | `filter: blur(var(--blur-3xl)); /* 64px */` |
| `blur-none` | Removes any blur effect  |

### Custom Values
You can also define custom blur values using CSS variables or direct pixel values:
- `blur-[<value>]` - Example: `blur-[2px]` applies a `2px` blur.
- `blur-(<custom-property>)` - Uses a CSS variable, e.g., `blur-(--my-blur)`.

## Usage Examples

### Basic Example
Use predefined blur classes to blur an element:
```html
<img class="blur-none" src="/img/mountains.jpg" />
<img class="blur-sm" src="/img/mountains.jpg" />
<img class="blur-lg" src="/img/mountains.jpg" />
<img class="blur-2xl" src="/img/mountains.jpg" />
```

### Custom Blur Value
Set a completely custom blur value using the `blur-[<value>]` syntax:
```html
<img class="blur-[2px]" src="/img/mountains.jpg" />
```
For CSS variables, use the `blur-(<custom-property>)` syntax:
```html
<img class="blur-(--my-blur)" src="/img/mountains.jpg" />
```

### Responsive Design
Apply blur effects at different breakpoints:
```html
<img class="blur-none md:blur-lg" src="/img/mountains.jpg" />
```
This applies no blur on smaller screens and a large blur on medium-sized screens and above.

### Customizing Your Theme
You can modify the blur levels in your theme configuration:
```css
@theme {
  --blur-2xs: 2px;
}
```
Now you can use the new `blur-2xs` class:
```html
<img class="blur-2xs" src="/img/mountains.jpg" />
```

## Learn More
For additional customization and advanced usage, refer to the official theme documentation.

