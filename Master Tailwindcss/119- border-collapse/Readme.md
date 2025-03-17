# Border Collapse Utility

## Introduction
The **border-collapse** utility in Tailwind CSS provides control over how table borders are rendered. It allows you to specify whether adjacent table cell borders should be combined into a single border or remain separate. This utility is essential when designing tables for a clean, structured, and visually appealing layout.

## Classes and Styles

| Class            | Styles Applied                 |
|-----------------|--------------------------------|
| `border-collapse` | `border-collapse: collapse;`  |
| `border-separate` | `border-collapse: separate;`  |

## Examples

### Collapsing Table Borders
Using the `border-collapse` utility, adjacent cell borders merge into a single border, creating a seamless table appearance.

#### Example:
```html
<table class="border-collapse border border-gray-400 ...">
  <thead>
    <tr>
      <th class="border border-gray-300 ...">State</th>
      <th class="border border-gray-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 ...">Indiana</td>
      <td class="border border-gray-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-gray-300 ...">Ohio</td>
      <td class="border border-gray-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-gray-300 ...">Michigan</td>
      <td class="border border-gray-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
```
This setting ensures that adjacent table cell borders collapse into one.

### Separating Table Borders
Using the `border-separate` utility, each cell maintains its own distinct borders.

#### Example:
```html
<table class="border-separate border border-gray-400 ...">
  <thead>
    <tr>
      <th class="border border-gray-300 ...">State</th>
      <th class="border border-gray-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 ...">Indiana</td>
      <td class="border border-gray-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-gray-300 ...">Ohio</td>
      <td class="border border-gray-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-gray-300 ...">Michigan</td>
      <td class="border border-gray-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
```
Each table cell retains its own distinct borders, providing a clear separation between cells.

### Responsive Design
The `border-collapse` utility can be combined with responsive breakpoints to adjust the border rendering based on screen sizes. For instance, using `md:border-separate`, you can apply separate borders only on medium screens and above.

#### Example:
```html
<table class="border-collapse md:border-separate ...">
  <!-- Table content here -->
</table>
```
This ensures that the table has collapsed borders on smaller screens and separate borders on medium-sized screens and larger.

## Additional Resources
For more details on using responsive variants, refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/).

---
This README provides a structured guide to using the **border-collapse** utility, including syntax, examples, and responsive configurations for effective table styling in Tailwind CSS.

