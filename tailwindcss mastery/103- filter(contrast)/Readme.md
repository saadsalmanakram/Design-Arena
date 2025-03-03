# Filter: contrast()

## Introduction
The `filter: contrast()` utility allows you to adjust the contrast of an element using Tailwind CSS. This utility provides various levels of contrast modifications, including predefined percentage values, custom values, and CSS variables. It is particularly useful for enhancing the visibility of images, text, and other UI elements.

## Usage
The `contrast-<number>` classes control the contrast level of an element. You can specify predefined values, use custom values, or reference CSS variables.

### Available Classes

| Class                    | Styles                                  |
|--------------------------|----------------------------------------|
| `contrast-<number>`      | `filter: contrast(<number>%);`        |
| `contrast-(<custom-property>)` | `filter: contrast(var(<custom-property>));` |
| `contrast-[<value>]`     | `filter: contrast(<value>);`         |

## Examples

### Basic Example
Use the predefined contrast utilities like `contrast-50`, `contrast-100`, `contrast-125`, and `contrast-200` to control the contrast of an image:

```html
<img class="contrast-50" src="/img/mountains.jpg" />
<img class="contrast-100" src="/img/mountains.jpg" />
<img class="contrast-125" src="/img/mountains.jpg" />
<img class="contrast-200" src="/img/mountains.jpg" />
```

### Using a Custom Value
Use the `contrast-[<value>]` syntax to set a completely custom contrast value:

```html
<img class="contrast-[.25]" src="/img/mountains.jpg" />
```

### Using CSS Variables
To dynamically control contrast, use the `contrast-(<custom-property>)` syntax:

```html
<img class="contrast-(--my-contrast)" src="/img/mountains.jpg" />
```
This is equivalent to:

```html
<img class="contrast-[var(--my-contrast)]" src="/img/mountains.jpg" />
```

## Responsive Design
You can apply contrast utilities conditionally at different breakpoints. Prefix a contrast utility with a breakpoint like `md:` to apply it at medium screen sizes and above:

```html
<img class="contrast-125 md:contrast-150" src="/img/mountains.jpg" />
```

For more information on responsive variants, refer to the Tailwind CSS documentation.

## Conclusion
The `filter: contrast()` utility provides a simple yet powerful way to control contrast in Tailwind CSS. Whether you need predefined values, custom values, or CSS variables, this utility allows for great flexibility in styling images and UI components.

