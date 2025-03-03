# Font Style Utilities

## Introduction
The **font-style** utility provides a simple way to control the style of text in your application. With these utilities, you can easily apply **italic** or **normal** font styles to text elements. Additionally, these classes can be combined with responsive design breakpoints to modify text styling based on screen size.

## Available Classes
| Class       | Styles                  |
|------------|-------------------------|
| `italic`   | `font-style: italic;`   |
| `not-italic` | `font-style: normal;`   |

## Examples

### Italicizing text
Use the `italic` utility to make text italic:

```html
<p class="italic">The quick brown fox jumps over the lazy dog.</p>
```

### Displaying text normally
Use the `not-italic` utility to ensure text appears in normal (non-italic) style:

```html
<p class="not-italic">The quick brown fox jumps over the lazy dog.</p>
```

### Responsive Design
You can apply the font-style utilities conditionally using breakpoints. For example, you can make text italic on smaller screens but normal on medium-sized screens and above:

```html
<p class="italic md:not-italic">
  The quick brown fox jumps over the lazy dog.
</p>
```

This ensures the text remains italic on small screens but switches to normal on medium screens and larger.

## Learn More
For additional details on using responsive variants, refer to the [variants documentation](#).

