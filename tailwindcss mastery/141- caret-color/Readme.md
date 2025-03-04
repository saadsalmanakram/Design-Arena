# Caret Color Utilities

## Introduction
The **caret-color** utility provides a simple way to control the color of the text input cursor (caret) in your web applications. This feature enhances UI customization by allowing developers to match the caret color with their design themes.

These utilities can be used with various predefined colors, custom values, responsive breakpoints, and theme customization.

---

## Classes and Styles
The following utility classes control the caret color:

| Class | Styles Applied |
|--------|----------------------|
| `caret-inherit` | `caret-color: inherit;` |
| `caret-current` | `caret-color: currentColor;` |
| `caret-transparent` | `caret-color: transparent;` |
| `caret-black` | `caret-color: var(--color-black); /* #000 */` |
| `caret-white` | `caret-color: var(--color-white); /* #fff */` |
| `caret-red-50` | `caret-color: var(--color-red-50); /* oklch(0.971 0.013 17.38) */` |
| `caret-red-100` | `caret-color: var(--color-red-100); /* oklch(0.936 0.032 17.717) */` |
| `caret-red-200` | `caret-color: var(--color-red-200); /* oklch(0.885 0.062 18.334) */` |
| `caret-red-300` | `caret-color: var(--color-red-300); /* oklch(0.808 0.114 19.571) */` |
| `caret-red-400` | `caret-color: var(--color-red-400); /* oklch(0.704 0.191 22.216) */` |
| ... | _More colors available in the full palette._ |

---

## Examples

### Basic Example
Use predefined caret color utilities to change the text input cursor color:

```html
<textarea class="caret-pink-500 ..."></textarea>
```

---

### Using a Custom Value
Use the `caret-[<value>]` syntax to set a completely custom caret color:

```html
<textarea class="caret-[#50d71e] ..."></textarea>
```

For CSS variables, use the `caret-(<custom-property>)` syntax:

```html
<textarea class="caret-(--my-caret-color) ..."></textarea>
```
This is shorthand for `caret-[var(<custom-property>)]`.

---

## Responsive Design
Use responsive variants like `md:` to change caret color at different breakpoints:

```html
<textarea class="caret-rose-500 md:caret-lime-600 ..."></textarea>
```
Learn more about responsive utilities in the **variants documentation**.

---

## Customizing Your Theme
Define your own colors using `--color-*` theme variables:

```css
@theme {
  --color-regal-blue: #243c5a;
}
```
Now you can use the custom utility:

```html
<textarea class="caret-regal-blue"></textarea>
```
Learn more about customization in the **theme documentation**.

---

## Conclusion
The **caret-color** utilities provide an easy and effective way to enhance the user interface by allowing fine-grained control over the caret color. Utilize predefined colors, custom values, responsive design, and theme customization to match your application's style.

For more details, refer to the official documentation.

