# Border Spacing Utilities

## Introduction
The `border-spacing` utility provides a way to control the spacing between table borders when using the `border-separate` class in HTML tables. By applying these utilities, you can adjust the gaps between adjacent table cells, ensuring a more structured and visually appealing layout.

## Available Classes

### Standard Border Spacing
- `border-spacing-<number>`
  - Applies `border-spacing: calc(var(--spacing) * <number>)`.
- `border-spacing-(<custom-property>)`
  - Uses a custom CSS variable: `border-spacing: var(<custom-property>)`.
- `border-spacing-[<value>]`
  - Allows defining a specific spacing value: `border-spacing: <value>`.

### Horizontal Spacing
- `border-spacing-x-<number>`
  - Adjusts horizontal spacing while keeping vertical spacing unchanged: `border-spacing: calc(var(--spacing) * <number>) var(--tw-border-spacing-y)`.
- `border-spacing-x-(<custom-property>)`
  - Uses a custom property for horizontal spacing.
- `border-spacing-x-[<value>]`
  - Allows a specific custom value for horizontal spacing.

### Vertical Spacing
- `border-spacing-y-<number>`
  - Adjusts vertical spacing while keeping horizontal spacing unchanged: `border-spacing: var(--tw-border-spacing-x) calc(var(--spacing) * <number>)`.
- `border-spacing-y-(<custom-property>)`
  - Uses a custom property for vertical spacing.
- `border-spacing-y-[<value>]`
  - Allows a specific custom value for vertical spacing.

## Examples

### Basic Example
You can apply `border-spacing` utilities to tables to control the spacing between table cell borders:

```html
<table class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
  <thead>
    <tr>
      <th class="border border-gray-300 dark:border-gray-600">State</th>
      <th class="border border-gray-300 dark:border-gray-600">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 dark:border-gray-700">Indiana</td>
      <td class="border border-gray-300 dark:border-gray-700">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-gray-300 dark:border-gray-700">Ohio</td>
      <td class="border border-gray-300 dark:border-gray-700">Columbus</td>
    </tr>
    <tr>
      <td class="border border-gray-300 dark:border-gray-700">Michigan</td>
      <td class="border border-gray-300 dark:border-gray-700">Detroit</td>
    </tr>
  </tbody>
</table>
```

### Using a Custom Value
You can specify a completely custom spacing value:

```html
<table class="border-spacing-[7px] ...">
  <!-- Table content -->
</table>
```

Alternatively, using a CSS variable:

```html
<table class="border-spacing-(--my-border-spacing) ...">
  <!-- Table content -->
</table>
```
This is equivalent to `border-spacing-[var(--my-border-spacing)]`, adding the `var()` function automatically.

## Responsive Design
To apply different border-spacing values at different breakpoints, use responsive prefixes such as `md:`:

```html
<table class="border-spacing-2 md:border-spacing-4 ...">
  <!-- Table content -->
</table>
```

## Customizing Your Theme
The `border-spacing-<number>` values are controlled by the `--spacing` theme variable, which can be customized:

```css
@theme {
  --spacing: 1px;
}
```

Learn more about customizing the spacing scale in the theme variable documentation.

## Conclusion
The `border-spacing` utilities provide a flexible way to control the spacing between table cell borders. Whether using predefined values, custom properties, or responsive design, you can tailor your tables for better readability and presentation.

