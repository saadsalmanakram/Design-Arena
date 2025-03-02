# Aspect Ratio Utility

## Introduction
The `aspect-ratio` utility provides a simple and efficient way to control the aspect ratio of an element. This utility helps in maintaining consistent proportions for images, videos, iframes, and other elements, ensuring a responsive and visually appealing layout across different screen sizes.

By using predefined aspect ratio classes or custom values, you can easily define the width-to-height relationship of an element without needing additional CSS styles.

## Usage
Aspect ratio classes allow you to quickly set the desired proportions using predefined or custom values. Below is a list of available utility classes and their corresponding styles:

### Classes and Styles

| Class                         | Styles Applied                           |
|-------------------------------|-----------------------------------------|
| `aspect-<ratio>`               | `aspect-ratio: <ratio>;`                |
| `aspect-square`                | `aspect-ratio: 1 / 1;`                   |
| `aspect-video`                 | `aspect-ratio: var(--aspect-ratio-video); /* 16 / 9 */` |
| `aspect-auto`                  | `aspect-ratio: auto;`                    |
| `aspect-(<custom-property>)`    | `aspect-ratio: var(<custom-property>);`  |
| `aspect-[<value>]`              | `aspect-ratio: <value>;`                 |

## Examples

### Basic Example
You can use `aspect-<ratio>` utilities like `aspect-3/2` to maintain a specific aspect ratio for an element:

```html
<img class="aspect-3/2 object-cover ..." src="/img/villas.jpg" />
```

### Using a Video Aspect Ratio
Apply the `aspect-video` utility to maintain a 16:9 aspect ratio for a video:

```html
<iframe class="aspect-video ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

### Custom Aspect Ratio
Define a custom aspect ratio using the `aspect-[<value>]` syntax:

```html
<img class="aspect-[calc(4*3+1)/3] ..." src="/img/villas.jpg" />
```

Alternatively, for CSS variables, use `aspect-(<custom-property>)`:

```html
<img class="aspect-(--my-aspect-ratio) ..." src="/img/villas.jpg" />
```
This is a shorthand for `aspect-[var(<custom-property>)]`, automatically applying the `var()` function.

## Responsive Design
You can use breakpoints to change aspect ratios at different screen sizes. For example, applying `aspect-video` by default and switching to `aspect-square` on medium screens and larger:

```html
<iframe class="aspect-video md:aspect-square ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

## Customizing Your Theme
Define custom aspect ratios using theme variables:

```css
@theme {
  --aspect-retro: 4 / 3;
}
```

Now, you can use `aspect-retro` in your HTML:

```html
<iframe class="aspect-retro" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

## Conclusion
The `aspect-ratio` utility simplifies managing element proportions while keeping layouts responsive. Whether using predefined classes, custom values, or responsive breakpoints, this utility ensures a seamless visual experience across devices.
