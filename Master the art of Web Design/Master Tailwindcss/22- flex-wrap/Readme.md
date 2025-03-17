# Flex Wrap Utility

## Introduction
The `flex-wrap` utility in Tailwind CSS controls how flex items behave when they exceed the available space within a flex container. It determines whether items should stay on a single line or wrap onto multiple lines. This utility is crucial for creating responsive layouts that adapt to different screen sizes and content sizes dynamically.

## Available Classes
| Class               | Styles Applied         |
|---------------------|-----------------------|
| `flex-nowrap`      | `flex-wrap: nowrap;`  |
| `flex-wrap`        | `flex-wrap: wrap;`    |
| `flex-wrap-reverse`| `flex-wrap: wrap-reverse;` |

## Usage Examples

### 1. Prevent Wrapping (`flex-nowrap`)
Use `flex-nowrap` to keep all flex items on a single line, causing them to overflow if necessary.

```html
<div class="flex flex-nowrap">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### 2. Allow Wrapping (`flex-wrap`)
Use `flex-wrap` to enable items to wrap onto the next line when they exceed the container’s width.

```html
<div class="flex flex-wrap">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### 3. Reverse Wrap (`flex-wrap-reverse`)
Use `flex-wrap-reverse` to wrap items in the reverse direction.

```html
<div class="flex flex-wrap-reverse">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### 4. Responsive Flex Wrapping
You can use responsive prefixes to change the wrapping behavior at different screen sizes. For example, using `md:flex-wrap-reverse` applies `flex-wrap-reverse` only on medium screens and larger.

```html
<div class="flex flex-wrap md:flex-wrap-reverse">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Additional Resources
For more information about responsive variants and utility classes, refer to the [Tailwind CSS Documentation](https://tailwindcss.com/docs/flex-wrap).

