# List Style Type Utilities

## Introduction
The `list-style-type` utilities provide control over the marker style of lists in HTML. Using predefined classes, you can easily set list markers to disc, decimal, none, or even custom styles using CSS variables. These utilities help in maintaining consistency and flexibility while styling lists in web applications.

## Available Classes

| Class               | Styles                                  |
|--------------------|---------------------------------|
| `list-disc`       | `list-style-type: disc;`       |
| `list-decimal`    | `list-style-type: decimal;`    |
| `list-none`       | `list-style-type: none;`       |
| `list-(<custom-property>)` | `list-style-type: var(<custom-property>);` |
| `list-[<value>]`  | `list-style-type: <value>;`    |

## Examples

### Basic Example
Use `list-disc`, `list-decimal`, and `list-none` classes to modify the style of list markers.

```html
<ul class="list-disc">
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
  <li>And I'd like to take a minute just sit right there</li>
  <li>I'll tell you how I became the prince of a town called Bel-Air</li>
</ul>

<ol class="list-decimal">
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
  <li>And I'd like to take a minute just sit right there</li>
  <li>I'll tell you how I became the prince of a town called Bel-Air</li>
</ol>

<ul class="list-none">
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
  <li>And I'd like to take a minute just sit right there</li>
  <li>I'll tell you how I became the prince of a town called Bel-Air</li>
</ul>
```

### Using a Custom Value
You can set a custom marker style using the `list-[<value>]` syntax:

```html
<ol class="list-[upper-roman]">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

For CSS variables, use `list-(<custom-property>)`:

```html
<ol class="list-(--my-marker)">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

This is equivalent to `list-[var(--my-marker)]`, automatically applying the `var()` function.

## Responsive Design
To apply different styles at various screen sizes, use responsive variants like `md:list-disc`:

```html
<ul class="list-none md:list-disc">
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
  <li>And I'd like to take a minute just sit right there</li>
  <li>I'll tell you how I became the prince of a town called Bel-Air</li>
</ul>
```

## Learn More
For more information on list-style utilities and responsive variants, refer to the official documentation.

