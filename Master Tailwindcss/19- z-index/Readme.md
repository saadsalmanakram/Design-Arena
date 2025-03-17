# z-index Utilities

## Introduction
The `z-index` utilities control the stack order of elements, determining their positioning in the z-axis relative to other elements. This utility is useful for layering content, ensuring elements appear above or below others as required. By using predefined classes or custom values, you can fine-tune the stacking order effectively.

## Usage
### Class Structure
The z-index utilities are structured as follows:

| Class               | Styles                         |
|---------------------|--------------------------------|
| `z-<number>`       | `z-index: <number>;`          |
| `z-auto`           | `z-index: auto;`              |
| `z-[<value>]`      | `z-index: <value>;`           |
| `z-(<custom-property>)` | `z-index: var(<custom-property>);` |

## Examples

### Basic Example
Use `z-<number>` utilities to define the stack order of elements, making some appear above others regardless of their HTML order:

```html
<div class="z-40 ...">05</div>
<div class="z-30 ...">04</div>
<div class="z-20 ...">03</div>
<div class="z-10 ...">02</div>
<div class="z-0 ...">01</div>
```

### Using Negative Values
Prefix the class name with a `-` to apply a negative `z-index` value:

```html
<div class="...">05</div>
<div class="...">04</div>
<div class="-z-10 ...">03</div>
<div class="...">02</div>
<div class="...">01</div>
```

### Using Custom Values
For custom z-index values, use `z-[<value>]`:

```html
<div class="z-[calc(var(--index)+1)] ...">
  <!-- Custom stacking order -->
</div>
```

Alternatively, use CSS variables with `z-(<custom-property>)`:

```html
<div class="z-(--my-z) ...">
  <!-- Custom CSS variable-based z-index -->
</div>
```
This is a shorthand for `z-[var(<custom-property>)]`, automatically adding the `var()` function.

### Responsive Design
Apply `z-index` utilities at specific breakpoints using variants:

```html
<div class="z-0 md:z-50 ...">
  <!-- z-0 on small screens, z-50 on medium and larger screens -->
</div>
```

## Learn More
For additional details on breakpoints and responsive utilities, refer to the official [variants documentation](#).

---

