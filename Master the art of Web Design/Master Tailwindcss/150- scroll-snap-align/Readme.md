# Scroll Snap Align

## Introduction

The `scroll-snap-align` utility provides control over how elements snap into place when being scrolled inside a snap container. This feature enhances user experience by ensuring smooth and predictable scrolling interactions. It is particularly useful for carousels, image galleries, and other scrollable content sections.

## Classes and Styles

| Class            | Styles                          |
|-----------------|--------------------------------|
| `snap-start`    | `scroll-snap-align: start;`    |
| `snap-end`      | `scroll-snap-align: end;`      |
| `snap-center`   | `scroll-snap-align: center;`   |
| `snap-align-none` | `scroll-snap-align: none;`  |

## Examples

### Snapping to the Center
Use the `snap-center` utility to align an element to its center when being scrolled inside a snap container:

```html
<div class="snap-x ...">
  <div class="snap-center ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-03.jpg" />
  </div>
</div>
```

### Snapping to the Start
Use the `snap-start` utility to align an element to the start when scrolled inside a snap container:

```html
<div class="snap-x ...">
  <div class="snap-start ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-02.jpg" />
  </div>
</div>
```

### Snapping to the End
Use the `snap-end` utility to align an element to the end when scrolled inside a snap container:

```html
<div class="snap-x ...">
  <div class="snap-end ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-02.jpg" />
  </div>
</div>
```

## Responsive Design
You can use responsive variants to apply different `scroll-snap-align` utilities based on screen size. For example, to apply `snap-center` by default and `snap-start` on medium screens and above:

```html
<div class="snap-center md:snap-start ...">
  <!-- Content -->
</div>
```

For more details, refer to the official Tailwind CSS documentation on [scroll-snap alignment](https://tailwindcss.com/docs/scroll-snap-align).

