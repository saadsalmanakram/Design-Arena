# Float Utilities

## Utilities for controlling the wrapping of content around an element.

### Class Reference

| Class          | Styles                |
|---------------|-----------------------|
| `float-right` | `float: right;`       |
| `float-left`  | `float: left;`        |
| `float-start` | `float: inline-start;`|
| `float-end`   | `float: inline-end;`  |
| `float-none`  | `float: none;`        |

---

## Examples

### Floating Elements to the Right
Use the `float-right` utility to float an element to the right of its container:

```html
<article>
  <img class="float-right" src="/img/mountains.jpg" />
  <p>Maybe we can live without libraries, people like you and me. ...</p>
</article>
```

---

### Floating Elements to the Left
Use the `float-left` utility to float an element to the left of its container:

```html
<article>
  <img class="float-left" src="/img/mountains.jpg" />
  <p>Maybe we can live without libraries, people like you and me. ...</p>
</article>
```

---

### Using Logical Properties
Use the `float-start` and `float-end` utilities, which use logical properties to map to either the left or right side based on the text direction.

#### Left-to-Right (LTR)

```html
<article>
  <img class="float-start" src="/img/mountains.jpg" />
  <p>Maybe we can live without libraries, people like you and me. ...</p>
</article>
```

#### Right-to-Left (RTL)

```html
<article dir="rtl">
  <img class="float-start" src="/img/mountains.jpg" />
  <p>... ربما يمكننا العيش بدون مكتبات، أشخاص مثلي ومثلك. ربما. بالتأكيد</p>
</article>
```

---

### Disabling a Float
Use the `float-none` utility to reset any floats that are applied to an element:

```html
<article>
  <img class="float-none" src="/img/mountains.jpg" />
  <p>Maybe we can live without libraries, people like you and me. ...</p>
</article>
```

---

### Responsive Design
Prefix a float utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<img class="float-right md:float-left" src="/img/mountains.jpg" />
```

