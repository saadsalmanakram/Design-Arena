# Stroke Width Utilities

## Introduction
The `stroke-width` utility provides a simple way to control the stroke width of SVG elements using utility classes. It allows for quick and consistent styling of SVG elements, such as icons and vector graphics, by defining stroke width values through predefined classes, custom values, or CSS variables.

This utility is particularly useful for styling icon sets like Heroicons, customizing line thickness in vector illustrations, and ensuring responsive design adaptability.

## Class Reference
The following utility classes are available for defining stroke width:

### **Predefined Stroke Widths**
- `stroke-<number>` → Applies a predefined stroke width.
- Example:
  ```html
  <svg class="stroke-1 ..."></svg>
  <svg class="stroke-2 ..."></svg>
  ```

### **Custom Stroke Widths**
- `stroke-[<value>]` → Allows setting a completely custom stroke width value.
- Example:
  ```html
  <div class="stroke-[1.5] ...">
    <!-- Custom stroke width -->
  </div>
  ```

### **CSS Variables for Stroke Width**
- `stroke-(length:<custom-property>)` → Sets stroke width using a CSS variable.
- Example:
  ```html
  <div class="stroke-(length:--my-stroke-width) ...">
    <!-- Uses a custom CSS variable for stroke width -->
  </div>
  ```
  This is equivalent to `stroke-[length:var(--my-stroke-width)]` but with added shorthand convenience.

## Responsive Design
To apply different stroke widths at specific breakpoints, prefix the utility with a breakpoint variant (e.g., `md:` for medium screens and above).

### Example:
```html
<div class="stroke-1 md:stroke-2 ...">
  <!-- Changes stroke width at the medium screen size -->
</div>
```

For more details on responsive variants, refer to the official variants documentation.

## Use Cases
- Styling SVG elements and icons.
- Controlling stroke width dynamically with CSS variables.
- Implementing responsive stroke widths for different screen sizes.

## Conclusion
The `stroke-width` utility is a powerful and flexible way to control SVG stroke widths efficiently. Whether using predefined values, custom values, or CSS variables, it offers a seamless way to achieve consistent and scalable styling for vector graphics in web design.

