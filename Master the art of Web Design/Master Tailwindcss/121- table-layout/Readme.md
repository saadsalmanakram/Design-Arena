# Table Layout Utilities

## Introduction
The `table-layout` utility provides control over the table layout algorithm in HTML tables. It allows you to define whether table columns should automatically adjust their width based on content (`table-auto`) or maintain a fixed width (`table-fixed`). These utilities are especially useful when designing responsive tables that need predictable column widths.

## Class Reference
| Class       | Styles Applied            |
|------------|--------------------------|
| `table-auto` | `table-layout: auto;`  |
| `table-fixed` | `table-layout: fixed;` |

## Examples

### Sizing Columns Automatically
Use the `table-auto` utility to allow table columns to adjust their width based on the content within their cells.

#### Example:
```html
<table class="table-auto border-collapse border border-gray-300">
  <thead>
    <tr>
      <th class="border border-gray-300 p-2">Song</th>
      <th class="border border-gray-300 p-2">Artist</th>
      <th class="border border-gray-300 p-2">Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 p-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td class="border border-gray-300 p-2">Malcolm Lockyer</td>
      <td class="border border-gray-300 p-2">1961</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">Witchy Woman</td>
      <td class="border border-gray-300 p-2">The Eagles</td>
      <td class="border border-gray-300 p-2">1972</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">Shining Star</td>
      <td class="border border-gray-300 p-2">Earth, Wind, and Fire</td>
      <td class="border border-gray-300 p-2">1975</td>
    </tr>
  </tbody>
</table>
```

### Using Fixed Column Widths
The `table-fixed` utility ensures columns maintain the same width regardless of the content inside them. The widths are set based on the first row’s cells.

#### Example:
```html
<table class="table-fixed border-collapse border border-gray-300 w-full">
  <thead>
    <tr>
      <th class="border border-gray-300 p-2 w-1/2">Song</th>
      <th class="border border-gray-300 p-2 w-1/4">Artist</th>
      <th class="border border-gray-300 p-2 w-1/4">Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 p-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td class="border border-gray-300 p-2">Malcolm Lockyer</td>
      <td class="border border-gray-300 p-2">1961</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">Witchy Woman</td>
      <td class="border border-gray-300 p-2">The Eagles</td>
      <td class="border border-gray-300 p-2">1972</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">Shining Star</td>
      <td class="border border-gray-300 p-2">Earth, Wind, and Fire</td>
      <td class="border border-gray-300 p-2">1975</td>
    </tr>
  </tbody>
</table>
```

### Responsive Design
You can apply `table-layout` utilities at specific breakpoints to ensure a responsive design. For example, the following ensures that the table is not displayed (`table-none`) on small screens but uses `table-fixed` on medium (`md:`) screens and larger:

#### Example:
```html
<div class="table-none md:table-fixed border border-gray-300 w-full">
  <table>
    <thead>
      <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td>Malcolm Lockyer</td>
        <td>1961</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Additional Resources
- [Tailwind CSS Table Layout Documentation](https://tailwindcss.com/docs/table-layout)
- [MDN Web Docs on `table-layout`](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout)

This documentation provides a concise yet comprehensive overview of using the `table-layout` utilities effectively in your projects.

