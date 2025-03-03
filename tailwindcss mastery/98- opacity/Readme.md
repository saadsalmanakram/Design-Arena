# Opacity Utility

## Introduction
The **Opacity** utility provides classes for controlling the transparency of an element. By using predefined classes or custom values, you can easily adjust the opacity of elements to create visually appealing designs.

## Usage

### Class Structure
The opacity utility follows a simple class naming convention:

- **`opacity-<number>`**: Sets the opacity to a predefined percentage.
- **`opacity-(<custom-property>)`**: Uses a CSS variable to define the opacity.
- **`opacity-[<value>]`**: Allows for completely custom opacity values.

### Predefined Opacity Classes
The following classes set predefined opacity values:

| Class | Effect |
|--------|--------|
| `opacity-100` | Fully visible (100%) |
| `opacity-75` | 75% opacity |
| `opacity-50` | 50% opacity |
| `opacity-25` | 25% opacity |

### Example Usage

```html
<button class="bg-indigo-500 opacity-100 ...">Button A</button>
<button class="bg-indigo-500 opacity-75 ...">Button B</button>
<button class="bg-indigo-500 opacity-50 ...">Button C</button>
<button class="bg-indigo-500 opacity-25 ...">Button D</button>
```

### Conditional Opacity
To apply opacity conditionally based on a state, use a variant like `disabled:`:

```html
<input class="opacity-100 disabled:opacity-75 ..." type="text" />
```

### Custom Opacity Values
Use the `opacity-[<value>]` syntax to set a custom opacity value:

```html
<button class="opacity-[.67] ...">Custom Opacity</button>
```

Alternatively, you can use a CSS variable for dynamic control:

```html
<button class="opacity-(--my-opacity) ...">Variable Opacity</button>
```

### Responsive Opacity
Apply opacity only at certain breakpoints by prefixing it with a responsive variant:

```html
<button class="opacity-50 md:opacity-100 ...">Responsive Opacity</button>
```

## Additional Resources
Learn more about variants and utility classes in the [official documentation](#).

