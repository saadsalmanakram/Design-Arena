# Caption-Side Utility

## Introduction
The `caption-side` utility provides an easy way to control the alignment of a caption element inside a table. Using predefined classes, you can position the caption at the top or bottom of the table, enhancing readability and styling flexibility. This utility is particularly useful for ensuring consistent table formatting across different sections of a webpage.

## Classes and Styles
| Class | Styles Applied |
|--------|----------------|
| `caption-top` | `caption-side: top;` |
| `caption-bottom` | `caption-side: bottom;` |

## Usage
### Placing Caption at the Top of a Table
Use the `caption-top` utility to position the caption element at the top of the table.

#### Example:
```html
<table>
  <caption class="caption-top">
    Table 3.1: Professional wrestlers and their signature moves.
  </caption>
  <thead>
    <tr>
      <th>Wrestler</th>
      <th>Signature Move(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"Stone Cold" Steve Austin</td>
      <td>Stone Cold Stunner, Lou Thesz Press</td>
    </tr>
    <tr>
      <td>Bret "The Hitman" Hart</td>
      <td>The Sharpshooter</td>
    </tr>
    <tr>
      <td>Razor Ramon</td>
      <td>Razor's Edge, Fallaway Slam</td>
    </tr>
  </tbody>
</table>
```

### Placing Caption at the Bottom of a Table
Use the `caption-bottom` utility to position the caption element at the bottom of the table.

#### Example:
```html
<table>
  <caption class="caption-bottom">
    Table 3.1: Professional wrestlers and their signature moves.
  </caption>
  <thead>
    <tr>
      <th>Wrestler</th>
      <th>Signature Move(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"Stone Cold" Steve Austin</td>
      <td>Stone Cold Stunner, Lou Thesz Press</td>
    </tr>
    <tr>
      <td>Bret "The Hitman" Hart</td>
      <td>The Sharpshooter</td>
    </tr>
    <tr>
      <td>Razor Ramon</td>
      <td>Razor's Edge, Fallaway Slam</td>
    </tr>
  </tbody>
</table>
```

## Responsive Design
To apply different caption-side positions at various screen sizes, use breakpoint variants like `md:`.

#### Example:
```html
<caption class="caption-top md:caption-bottom">
  <!-- Caption content -->
</caption>
```
This ensures that the caption appears at the top by default and moves to the bottom on medium (`md:`) and larger screens.

For more details, refer to the variants documentation.

## Conclusion
The `caption-side` utility provides a simple and effective way to align captions in tables. By using predefined classes, you can improve table presentation while maintaining responsiveness and readability across different devices.

