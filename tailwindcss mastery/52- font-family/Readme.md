# Font Family Utilities

## Introduction
The **Font Family Utilities** provide a set of classes for controlling the font family of an element in a CSS framework. These utilities allow developers to easily apply different font families using predefined classes or custom values, ensuring consistency and flexibility in typography styling.

## Available Classes

| Class | Styles |
|--------|---------------------------------------------------------------------------------------------|
| `font-sans` | `font-family: var(--font-sans);` (ui-sans-serif, system-ui, sans-serif, etc.) |
| `font-serif` | `font-family: var(--font-serif);` (ui-serif, Georgia, Cambria, etc.) |
| `font-mono` | `font-family: var(--font-mono);` (ui-monospace, SFMono-Regular, Menlo, etc.) |
| `font-(family-name:<custom-property>)` | `font-family: var(<custom-property>);` |
| `font-[<value>]` | `font-family: <value>;` |

## Examples

### Basic Example
Use utilities like `font-sans` and `font-mono` to set the font family of an element:

```html
<p class="font-sans">The quick brown fox jumps over the lazy dog.</p>
<p class="font-serif">The quick brown fox jumps over the lazy dog.</p>
<p class="font-mono">The quick brown fox jumps over the lazy dog.</p>
```

### Using a Custom Value
Use the `font-[<value>]` syntax to set the font family with a completely custom value:

```html
<p class="font-[Open_Sans]">Custom Font Example</p>
```

For CSS variables, you can also use `font-(family-name:<custom-property>)`:

```html
<p class="font-(family-name:--my-font)">CSS Variable Example</p>
```

This is a shorthand for `font-[family-name:var(<custom-property>)]` that automatically adds the `var()` function.

## Responsive Design
Prefix a font-family utility with a breakpoint variant like `md:` to apply the utility only at medium screen sizes and above:

```html
<p class="font-sans md:font-serif">Responsive Font Example</p>
```

## Customizing Your Theme
Use `--font-*` theme variables to customize the font family utilities in your project:

```css
@theme {
  --font-display: "Oswald", "sans-serif";
}
```
Now the `font-display` utility can be used in your markup:

```html
<div class="font-display">Themed Font Example</div>
```

### Advanced Customization
You can provide default font feature settings and font variation settings for a font family:

```css
@theme {
  --font-display: "Oswald", "sans-serif";
  --font-display--font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  --font-display--font-variation-settings: "opsz" 32;
}
```

### Loading Custom Fonts
If needed, use the `@font-face` at-rule to load custom fonts:

```css
@font-face {
  font-family: Oswald;
  font-style: normal;
  font-weight: 200 700;
  font-display: swap;
  src: url("/fonts/Oswald.woff2") format("woff2");
}
```

If you're loading a font from a service like Google Fonts, ensure `@import` is at the very top of your CSS file:

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import "tailwindcss";

@theme {
  --font-roboto: "Roboto", sans-serif;
}
```

> **Note:** Browsers require `@import` statements to appear before any other rules.

## Learn More
For further customization and usage details, refer to the **variants documentation** and **theme customization guide**.

