# Visibility Utilities

## Introduction
The **Visibility Utilities** component provides a simple way to control the visibility of elements in your application. These utilities allow you to show, hide, or collapse elements while maintaining or altering their effect on the document's layout. These classes are particularly useful when designing responsive layouts or dynamically toggling element visibility without modifying their display properties.

## Available Classes

| Class      | Styles Applied             |
|------------|----------------------------|
| `visible`  | `visibility: visible;`     |
| `invisible` | `visibility: hidden;`     |
| `collapse` | `visibility: collapse;`   |

## Usage

### Making Elements Invisible
Use the `invisible` utility to hide an element while keeping its space occupied in the layout:

```html
<div class="grid grid-cols-3 gap-4">
  <div>01</div>
  <div class="invisible">02</div>
  <div>03</div>
</div>
```
> **Note:** To completely remove an element from the document flow, use the `display` property instead.

### Collapsing Elements (For Tables)
The `collapse` utility is useful for hiding table rows, columns, and groups without impacting the layout of other rows and columns:

```html
<table>
  <thead>
    <tr>
      <th>Invoice #</th>
      <th>Client</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#100</td>
      <td>Pendant Publishing</td>
      <td>$2,000.00</td>
    </tr>
    <tr class="collapse">
      <td>#101</td>
      <td>Kruger Industrial Smoothing</td>
      <td>$545.00</td>
    </tr>
    <tr>
      <td>#102</td>
      <td>J. Peterman</td>
      <td>$10,000.25</td>
    </tr>
  </tbody>
</table>
```
This allows you to dynamically show or hide rows while preserving the overall table structure.

### Making Elements Visible
To ensure an element remains visible, use the `visible` utility:

```html
<div class="grid grid-cols-3 gap-4">
  <div>01</div>
  <div class="visible">02</div>
  <div>03</div>
</div>
```
This is useful when undoing the `invisible` class at specific breakpoints.

### Responsive Design
Visibility utilities can be combined with responsive prefixes to control element visibility based on screen size. For example, to hide an element only on medium screens and above:

```html
<div class="visible md:invisible">
  <!-- Content -->
</div>
```
Refer to the [variants documentation](#) for more details on responsive breakpoints.

## Conclusion
The **Visibility Utilities** component provides an easy way to toggle element visibility without affecting the document layout. Whether you need to hide, collapse, or make elements visible, these utilities offer flexibility and responsiveness for your UI design.

For more details, refer to the full documentation on visibility classes.

