# Blur Filter Utility

## Introduction
The `filter: blur()` utility provides a simple way to apply blur effects to HTML elements. This utility is particularly useful for creating depth, softening images, or adding focus effects to UI elements. With predefined classes and custom values, you can easily control the intensity of the blur effect.

## Usage
### Predefined Blur Classes
The following classes apply different levels of blur to an element:

| Class     | Styles Applied |
|-----------|----------------|
| `blur-xs`  | `filter: blur(var(--blur-xs)); /* 4px */`  |
| `blur-sm`  | `filter: blur(var(--blur-sm)); /* 8px */`  |
| `blur-md`  | `filter: blur(var(--blur-md)); /* 12px */`  |
| `blur-lg`  | `filter: blur(var(--blur-lg)); /* 16px */`  |
| `blur-xl`  | `filter: blur(var(--blur-xl)); /* 24px */`  |
| `blur-2xl` | `filter: blur(var(--blur-2xl)); /* 40px */`  |
| `blur-3xl` | `filter: blur(var(--blur-3xl)); /* 64px */`  |
| `blur-none`| `filter: ;` (removes blur effect) |

### Custom Blur Values
You can also define custom blur values using:

- `blur-[<value>]`: Directly specify a pixel-based blur value.
- `blur-(<custom-property>)`: Use a CSS variable for the blur value.

#### Example:
```html
<img class="blur-[2px]" src="/img/mountains.jpg" />
<img class="blur-(--my-blur)" src="/img/mountains.jpg" />
```
This syntax allows for dynamic and flexible styling.

## Examples
### Basic Usage
Apply blur filters to images using predefined classes:
```html
<img class="blur-none" src="/img/mountains.jpg" />
<img class="blur-sm" src="/img/mountains.jpg" />
<img class="blur-lg" src="/img/mountains.jpg" />
<img class="blur-2xl" src="/img/mountains.jpg" />
```

### Responsive Blur Effect
Use responsive prefixes to change blur intensity based on screen size:
```html
<img class="blur-none md:blur-lg" src="/img/mountains.jpg" />
```
This applies no blur by default but enables a large blur on medium screens and above.

## Customization
You can customize the blur utility in your theme configuration using CSS variables:
```css
@theme {
  --blur-2xs: 2px;
}
```
Now you can use the `blur-2xs` class in your HTML:
```html
<img class="blur-2xs" src="/img/mountains.jpg" />
```

## Conclusion
The `filter: blur()` utility provides a flexible and powerful way to add blur effects to your elements. By leveraging predefined classes, custom values, and responsive design techniques, you can create visually appealing UI effects with minimal effort. Explore further customization through theme variables and CSS properties to fine-tune the blur effect for your needs.

