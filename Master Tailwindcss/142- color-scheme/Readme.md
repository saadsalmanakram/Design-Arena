# Color Scheme Utility

## Introduction
The **Color Scheme Utility** provides a set of CSS classes to control the `color-scheme` property of elements. This property allows web pages to specify how they should be rendered based on the user's system preferences, affecting the appearance of form controls, scrollbars, and other UI elements. By using these utilities, you can ensure a consistent theme across different environments and modes.

## Classes and Styles
The following classes are available to define the color scheme of an element:

| Class               | Style Applied            |
|---------------------|-------------------------|
| `scheme-normal`    | `color-scheme: normal;` |
| `scheme-dark`      | `color-scheme: dark;`   |
| `scheme-light`     | `color-scheme: light;`  |
| `scheme-light-dark` | `color-scheme: light dark;` |
| `scheme-only-dark` | `color-scheme: only dark;` |
| `scheme-only-light` | `color-scheme: only light;` |

## Examples

### Basic Example
You can use `scheme-light` and `scheme-light-dark` to control how elements should be rendered. Try switching your system color scheme to see the effect.

```html
<div class="scheme-light">
  <input type="date" />
</div>

<div class="scheme-dark">
  <input type="date" />
</div>

<div class="scheme-light-dark">
  <input type="date" />
</div>
```

### Applying in Dark Mode
You can prefix a color-scheme utility with a variant like `dark:*` to apply the utility only in that state:

```html
<html class="scheme-light dark:scheme-dark">
  <!-- Content here -->
</html>
```

This ensures that the color scheme switches dynamically based on the user's system settings.

## Additional Information
- Use these utilities to improve the accessibility and user experience of your web pages.
- Combine with other styling frameworks for enhanced customization.
- Learn more about using variants in the [variants documentation](#).

