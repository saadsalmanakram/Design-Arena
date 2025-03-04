# Appearance Utility

## Introduction
The `appearance` utility provides a way to control the native styling of form controls. By default, browsers apply their own styles to elements like `<select>`, `<input>`, and `<button>`. The `appearance` utility allows developers to either remove these default styles or restore them when needed, making it useful for creating custom form components while maintaining accessibility and responsiveness.

## Classes & Styles

| Class               | Styles Applied       |
|---------------------|---------------------|
| `appearance-none`  | `appearance: none;` |
| `appearance-auto`  | `appearance: auto;` |

## Examples

### Removing Default Appearance
Using `appearance-none` resets any browser-specific styling on a form element.

#### Example:
```html
<select>
  <option>Yes</option>
  <option>No</option>
  <option>Maybe</option>
</select>

<div class="grid">
  <select class="col-start-1 row-start-1 appearance-none bg-gray-50 dark:bg-gray-800 ...">
    <option>Yes</option>
    <option>No</option>
    <option>Maybe</option>
  </select>
  <svg class="pointer-events-none col-start-1 row-start-1 ...">
    <!-- Custom dropdown icon -->
  </svg>
</div>
```
This utility is particularly useful when designing fully custom-styled form elements.

### Restoring Default Appearance
Using `appearance-auto` restores the browser’s default form control styling. This can be helpful for accessibility purposes, especially when using forced colors mode.

#### Example:
```html
<label>
  <div>
    <input type="checkbox" class="appearance-none forced-colors:appearance-auto ..." />
    <svg class="invisible peer-checked:visible forced-colors:hidden ...">
      <!-- Custom checkbox styling -->
    </svg>
  </div>
  Falls back to default appearance
</label>

<label>
  <div>
    <input type="checkbox" class="appearance-none ..." />
    <svg class="invisible peer-checked:visible ...">
      <!-- Custom checkbox styling -->
    </svg>
  </div>
  Keeps custom appearance
</label>
```
This approach allows form elements to adapt to accessibility settings while preserving custom styles in other contexts.

### Responsive Design
The `appearance` utility can be applied conditionally using responsive variants. For example, applying `appearance-auto` on smaller screens and `appearance-none` on medium screens and larger:

#### Example:
```html
<select class="appearance-auto md:appearance-none ...">
  <!-- Options -->
</select>
```
This ensures that form elements behave differently depending on the screen size.

## Learn More
For more details on using variants with utilities, refer to the [variants documentation](#).

