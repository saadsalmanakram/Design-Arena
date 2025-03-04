# Field Sizing Utilities

## Introduction
The `field-sizing` utilities provide a way to control the sizing of form controls in your project. These utilities allow you to either let a form control adjust its size based on its content or set a fixed size. This helps create a responsive and adaptable user experience while ensuring consistency across different form elements.

## Classes & Styles
The following utility classes are available to control field sizing:

| Class                   | Styles Applied         |
|-------------------------|------------------------|
| `field-sizing-fixed`    | `field-sizing: fixed;` |
| `field-sizing-content`  | `field-sizing: content;` |

## Examples

### Sizing Based on Content
Use the `field-sizing-content` utility to allow a form control to dynamically adjust its size based on the content inside it.

#### Example:
```html
<!-- Type in the input below to see the size change dynamically -->
<textarea class="field-sizing-content ..." rows="2">
  Latex Salesman, Vanderlay Industries
</textarea>
```

### Using a Fixed Size
Use the `field-sizing-fixed` utility to ensure a form control maintains a fixed size regardless of its content.

#### Example:
```html
<!-- Type in the input below to see the size remain the same -->
<textarea class="field-sizing-fixed w-80 ..." rows="2">
  Latex Salesman, Vanderlay Industries
</textarea>
```

### Responsive Design
You can use breakpoint variants like `md:` to apply a specific field-sizing utility only at certain screen sizes.

#### Example:
```html
<input class="field-sizing-content md:field-sizing-fixed ..." />
```

## Learn More
For more details on how to use variants, refer to the [variants documentation](#).

