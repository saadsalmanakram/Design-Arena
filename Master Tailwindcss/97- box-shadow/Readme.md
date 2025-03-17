# Box Shadow Utilities

## Introduction
The `box-shadow` utility provides a set of classes to control the shadow effect on an element. Shadows can be used to enhance the depth and appearance of elements, making them stand out. This utility supports various shadow intensities, inset shadows, ring shadows, and custom shadow values for flexible design customization.

## Available Classes
The following classes control the box-shadow of an element:

| Class             | Styles  |
|------------------|--------------------------------------------------------------|
| `shadow-2xs`    | `box-shadow: var(--shadow-2xs); /* 0 1px rgb(0 0 0 / 0.05) */` |
| `shadow-xs`     | `box-shadow: var(--shadow-xs); /* 0 1px 2px 0 rgb(0 0 0 / 0.05) */` |
| `shadow-sm`     | `box-shadow: var(--shadow-sm); /* 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) */` |
| `shadow-md`     | `box-shadow: var(--shadow-md); /* 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) */` |
| `shadow-lg`     | `box-shadow: var(--shadow-lg); /* 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) */` |
| `shadow-xl`     | `box-shadow: var(--shadow-xl); /* 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) */` |
| `shadow-2xl`    | `box-shadow: var(--shadow-2xl); /* 0 25px 50px -12px rgb(0 0 0 / 0.25) */` |
| `shadow-none`   | `box-shadow: 0 0 #0000;` |
| `shadow-[custom]` | `box-shadow: var(--custom-property);` |

## Examples
### Basic Example
Use `shadow-sm`, `shadow-md`, or `shadow-xl` to apply different shadow effects:

```html
<div class="shadow-md ..."></div>
<div class="shadow-lg ..."></div>
<div class="shadow-xl ..."></div>
```

### Setting the Shadow Color
Use color utilities like `shadow-indigo-500` and `shadow-cyan-500/50` to modify shadow color:

```html
<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>
<button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button>
<button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
```

## Inset Shadows
To apply an inset shadow, use `inset-shadow-xs` or `inset-shadow-sm`:

```html
<div class="inset-shadow-xs ..."></div>
<div class="inset-shadow-sm ..."></div>
```

You can also customize the inset shadow color using `inset-shadow-indigo-500`:

```html
<div class="inset-shadow-sm inset-shadow-indigo-500 ..."></div>
```

## Rings
Use `ring` or `ring-<size>` utilities to add solid box shadows around elements:

```html
<button class="ring ...">Subscribe</button>
<button class="ring-2 ...">Subscribe</button>
<button class="ring-4 ...">Subscribe</button>
```

### Setting the Ring Color
Customize the ring color with utilities like `ring-blue-500`:

```html
<button class="ring-2 ring-blue-500 ...">Subscribe</button>
<button class="ring-2 ring-blue-500/50 ...">Subscribe</button>
```

## Removing Shadows
To remove an existing shadow, use:

```html
<div class="shadow-none ..."></div>
```

## Custom Shadow Values
Define custom shadow values using `shadow-[<value>]`:

```html
<div class="shadow-[0_35px_35px_rgba(0,0,0,0.25)] ..."></div>
```

For CSS variables, use:

```html
<div class="shadow-(--my-shadow) ..."></div>
```

## Responsive Design
Use breakpoints like `md:shadow-lg` to apply shadows conditionally:

```html
<div class="shadow-none md:shadow-lg ..."></div>
```

## Customizing Your Theme
### Custom Shadows
Modify the default shadows using `--shadow-*` theme variables:

```css
@theme {
  --shadow-3xl: 0 35px 35px rgba(0, 0, 0, 0.25);
}
```

Now, you can use:

```html
<div class="shadow-3xl">...</div>
```

### Customizing Inset Shadows
```css
@theme {
  --inset-shadow-md: inset 0 2px 3px rgba(0, 0, 0, 0.25);
}
```

Now, you can use:

```html
<div class="inset-shadow-md">...</div>
```

### Customizing Shadow Colors
Define custom colors using `--color-*`:

```css
@theme {
  --color-regal-blue: #243c5a;
}
```

Now, you can use:

```html
<div class="shadow-regal-blue">...</div>
```

## Conclusion
The `box-shadow` utility provides a powerful way to enhance UI elements with various shadow effects. Whether you need outer shadows, inset shadows, rings, or custom-defined effects, this utility allows full customization to match your design needs.

