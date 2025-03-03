# List Style Position Utilities

## Introduction
The `list-style-position` utility provides control over the position of bullets and numbers in lists. By using the `list-inside` and `list-outside` classes, you can define whether the list markers appear inside or outside the content flow. This utility is particularly useful for customizing list indentation and appearance within your layouts.

## Classes and Styles
The following classes control the position of list markers:

| Class          | Styles                            |
|---------------|----------------------------------|
| `list-inside`  | `list-style-position: inside;`  |
| `list-outside` | `list-style-position: outside;` |

## Examples

### Basic Example
You can use `list-inside` and `list-outside` to adjust the marker position and text indentation:

#### `list-inside`
The list marker appears inside the content flow, aligning with the text.

```html
<ul class="list-inside">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>1/2 cup of olive oil</li>
  <li>3lb of celery</li>
</ul>
```

#### `list-outside`
The list marker appears outside the content flow, creating a traditional indentation.

```html
<ul class="list-outside">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>1/2 cup of olive oil</li>
  <li>3lb of celery</li>
</ul>
```

## Responsive Design
You can apply `list-style-position` utilities responsively by prefixing them with a breakpoint, such as `md:` for medium screens and above.

```html
<ul class="list-outside md:list-inside">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>1/2 cup of olive oil</li>
  <li>3lb of celery</li>
</ul>
```

This example ensures that the list uses `list-outside` by default but switches to `list-inside` on medium screens and larger.

## Learn More
For more details on responsive variants and utility classes, refer to the official documentation on using variants.

