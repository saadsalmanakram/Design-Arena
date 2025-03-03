# Background Color Utilities

## Introduction
The `background-color` utility provides a set of classes for controlling the background color of an element. These utilities allow developers to apply predefined colors, customize values, and control responsiveness, opacity, and state-based color changes with ease.

## Usage
### Class Reference
Below is a list of available background color utilities and their corresponding styles:

| Class               | Styles                                      |
|---------------------|--------------------------------------------|
| `bg-inherit`       | `background-color: inherit;`              |
| `bg-current`       | `background-color: currentColor;`         |
| `bg-transparent`   | `background-color: transparent;`          |
| `bg-black`         | `background-color: var(--color-black);`   |
| `bg-white`         | `background-color: var(--color-white);`   |
| `bg-red-50`        | `background-color: var(--color-red-50);`  |
| `bg-red-100`       | `background-color: var(--color-red-100);` |
| `bg-red-200`       | `background-color: var(--color-red-200);` |
| `bg-red-300`       | `background-color: var(--color-red-300);` |
| `bg-red-400`       | `background-color: var(--color-red-400);` |

For a full list of available colors, refer to the official documentation.

## Examples
### Basic Example
Use background color utilities to quickly style elements:
```html
<button class="bg-blue-500">Button A</button>
<button class="bg-cyan-500">Button B</button>
<button class="bg-pink-500">Button C</button>
```

### Changing Opacity
Control the background color opacity using opacity modifiers:
```html
<button class="bg-sky-500/100">Button A</button>
<button class="bg-sky-500/75">Button B</button>
<button class="bg-sky-500/50">Button C</button>
```

### Using Custom Values
Define a completely custom background color:
```html
<div class="bg-[#50d71e]">
  <!-- Custom Green Background -->
</div>
```
Use CSS variables for flexibility:
```html
<div class="bg-(--my-color)"></div>
```
This syntax is equivalent to `bg-[var(--my-color)]`.

### Applying on Hover
Apply a different background color on hover:
```html
<button class="bg-indigo-500 hover:bg-fuchsia-500">Save changes</button>
```

### Responsive Design
Change background color based on screen size:
```html
<div class="bg-blue-500 md:bg-green-500">
  <!-- Blue by default, green on medium screens and larger -->
</div>
```

## Customizing Your Theme
To customize colors, define theme variables:
```css
@theme {
  --color-regal-blue: #243c5a;
}
```
Now you can use the custom color:
```html
<div class="bg-regal-blue"></div>
```

For more details on customization, refer to the theme documentation.

## Conclusion
The `background-color` utility provides an easy and flexible way to manage background colors in your project. With built-in classes, opacity control, custom values, hover effects, and responsive variants, you can efficiently style your elements to match your design requirements.

