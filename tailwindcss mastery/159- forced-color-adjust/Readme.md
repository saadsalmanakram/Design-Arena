# Forced Color Adjust

## Introduction
The `forced-color-adjust` utility allows developers to control how elements respond to forced color modes, such as high contrast mode. This utility helps in cases where enforcing a limited color palette may degrade usability or when adhering to forced color settings is preferred.

## Classes and Styles
| Class                      | Styles                     |
|----------------------------|----------------------------|
| `forced-color-adjust-auto` | `forced-color-adjust: auto;` |
| `forced-color-adjust-none` | `forced-color-adjust: none;` |

## Examples

### Opting Out of Forced Colors
Use the `forced-color-adjust-none` utility to prevent an element from adopting the colors enforced by forced colors mode. This is useful when a limited color palette may affect usability.

Try emulating `forced-colors: active` in developer tools to see the changes.

#### Example:
```html
<form>
  <img src="/img/shirt.jpg" />
  <div>
    <h3>Basic Tee</h3>
    <h3>$35</h3>
    <fieldset>
      <legend class="sr-only">Choose a color</legend>
      <div class="forced-color-adjust-none ...">
        <label>
          <input class="sr-only" type="radio" name="color-choice" value="White" />
          <span class="sr-only">White</span>
          <span class="size-6 rounded-full border border-black/10 bg-white"></span>
        </label>
      </div>
    </fieldset>
  </div>
</form>
```

### Restoring Forced Colors
Use the `forced-color-adjust-auto` utility to make an element conform to the colors enforced by forced colors mode.

#### Example:
```html
<form>
  <fieldset class="forced-color-adjust-none lg:forced-color-adjust-auto ...">
    <legend>Choose a color:</legend>
    <select class="hidden lg:block">
      <option value="White">White</option>
      <option value="Gray">Gray</option>
      <option value="Black">Black</option>
    </select>
    <div class="lg:hidden">
      <label>
        <input class="sr-only" type="radio" name="color-choice" value="White" />
      </label>
    </div>
  </fieldset>
</form>
```
This approach is useful if you want to override the `forced-color-adjust-none` setting for specific screen sizes.

### Responsive Design
Use breakpoint variants like `md:` to apply the utility at different screen sizes.

#### Example:
```html
<div class="forced-color-adjust-none md:forced-color-adjust-auto ...">
  <!-- Content -->
</div>
```

For more details, refer to the [variants documentation](#).

