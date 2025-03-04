# Will-Change Utility

## Introduction
The `will-change` utility provides optimized performance for elements that are expected to change in the near future by hinting to the browser that it should prepare for animations or layout changes. This can help prevent jank and improve rendering efficiency when used correctly. However, excessive use of `will-change` can have the opposite effect, leading to unnecessary resource consumption and reduced performance.

## Available Classes
The `will-change` utility provides several predefined classes for common use cases, as well as support for custom values.

### Predefined Classes
| Class Name                 | Styles Applied                |
|----------------------------|------------------------------|
| `will-change-auto`         | `will-change: auto;`         |
| `will-change-scroll`       | `will-change: scroll-position;` |
| `will-change-contents`     | `will-change: contents;`     |
| `will-change-transform`    | `will-change: transform;`    |
| `will-change-<custom>`     | `will-change: var(<custom-property>);` |
| `will-change-[<value>]`    | `will-change: <value>;`      |

## Usage

### Optimizing with `will-change`
To optimize an element that is expected to change soon, use one of the predefined utility classes:

```html
<div class="overflow-auto will-change-scroll">
  <!-- Content that may change -->
</div>
```

**Recommendation:**
- Apply `will-change` just before an element changes.
- Remove it shortly after the change completes using `will-change-auto`.
- Avoid excessive use, as it may negatively impact performance.

### Using Custom Values
If you need a custom value for `will-change`, use the `will-change-[<value>]` syntax:

```html
<div class="will-change-[top,left]">
  <!-- Element that will change in top/left positions -->
</div>
```

For CSS variables, use `will-change-(<custom-property>)`:

```html
<div class="will-change-(--my-properties)">
  <!-- Element with custom CSS property changes -->
</div>
```
This is equivalent to `will-change-[var(--my-properties)]`, but the `var()` function is applied automatically.

## Best Practices
- Use `will-change` **only** when necessary to improve performance.
- Do **not** apply `will-change` preemptively on too many elements.
- Monitor performance improvements using browser developer tools to ensure it has the desired effect.

## Conclusion
The `will-change` utility is a powerful tool for optimizing animations and transitions, but it should be used sparingly and strategically to avoid unnecessary performance issues.

