# Font Weight Utilities

## Introduction
Font weight utilities allow you to control the weight (thickness) of text elements easily. These utilities provide predefined weight classes ranging from very thin to extra bold, as well as the ability to define custom weights using CSS variables or specific values.

---

## Available Classes

| Class | Styles |
|--------|----------------------------------|
| `font-thin` | `font-weight: 100;` |
| `font-extralight` | `font-weight: 200;` |
| `font-light` | `font-weight: 300;` |
| `font-normal` | `font-weight: 400;` |
| `font-medium` | `font-weight: 500;` |
| `font-semibold` | `font-weight: 600;` |
| `font-bold` | `font-weight: 700;` |
| `font-extrabold` | `font-weight: 800;` |
| `font-black` | `font-weight: 900;` |
| `font-(<custom-property>)` | `font-weight: var(<custom-property>);` |
| `font-[<value>]` | `font-weight: <value>;` |

---

## Examples

### Basic Usage
Use predefined classes like `font-thin`, `font-bold`, etc., to set the font weight of an element:

```html
<p class="font-light">The quick brown fox jumps over the lazy dog.</p>
<p class="font-normal">The quick brown fox jumps over the lazy dog.</p>
<p class="font-medium">The quick brown fox jumps over the lazy dog.</p>
<p class="font-semibold">The quick brown fox jumps over the lazy dog.</p>
<p class="font-bold">The quick brown fox jumps over the lazy dog.</p>
```

### Using a Custom Value
You can define a completely custom font weight using the `font-[<value>]` syntax:

```html
<p class="font-[1000]">Custom extra bold font weight</p>
```

Alternatively, you can use CSS variables with the `font-(<custom-property>)` syntax:

```html
<p class="font-(--my-font-weight)">Font weight from a CSS variable</p>
```

This shorthand is equivalent to:

```html
<p class="font-[var(--my-font-weight)]">Font weight from a CSS variable</p>
```

---

## Responsive Design
To apply different font weights at various screen sizes, use responsive prefixes such as `md:`:

```html
<p class="font-normal md:font-bold">This text is normal on small screens and bold on medium screens and above.</p>
```

---

## Customizing Your Theme
You can define additional font weight utilities using the `--font-weight-*` theme variables:

```css
@theme {
  --font-weight-extrablack: 1000;
}
```

Then use it in your HTML:

```html
<div class="font-extrablack">Extra black font weight</div>
```

---

## Conclusion
Font weight utilities provide an easy and flexible way to adjust text thickness using predefined classes, custom values, or responsive design principles. You can also extend them by defining custom theme variables to suit your project’s design needs.

