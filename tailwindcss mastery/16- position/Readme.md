# Position Utilities

## Introduction

The `position` utilities provide a way to control how elements are positioned within the document flow. These utilities allow you to specify whether an element should be positioned statically, relatively, absolutely, fixed, or sticky. Positioning elements correctly is essential for layout design and responsive web development.

## Classes and Styles

The following classes define how an element is positioned:

| Class      | Styles                 |
|-----------|-----------------------|
| `static`  | `position: static;`   |
| `fixed`   | `position: fixed;`    |
| `absolute`| `position: absolute;` |
| `relative`| `position: relative;` |
| `sticky`  | `position: sticky;`   |

## Usage Examples

### Statically Positioning Elements

Use the `static` utility to position an element according to the normal flow of the document:

```html
<div class="static ...">
  <p>Static parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

With statically positioned elements, any offsets will be ignored, and the element will not act as a position reference for absolutely positioned children.

---

### Relatively Positioning Elements

Use the `relative` utility to position an element according to the normal flow of the document:

```html
<div class="relative ...">
  <p>Relative parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

With relatively positioned elements, offsets are calculated relative to the element's normal position, and it acts as a reference for absolutely positioned children.

---

### Absolutely Positioning Elements

Use the `absolute` utility to remove an element from the normal document flow, allowing it to be positioned relative to the nearest non-static ancestor:

```html
<div class="static ...">
  <div class="static ..."><p>Static child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
  <div class="absolute ..."><p>Absolute child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
</div>
```

Absolutely positioned elements do not affect surrounding elements and are positioned relative to their nearest positioned ancestor.

---

### Fixed Positioning Elements

Use the `fixed` utility to position an element relative to the viewport, so it stays in place when scrolling:

```html
<div class="relative">
  <div class="fixed top-0 right-0 left-0">Contacts</div>
  <div>
    <div>
      <img src="/img/andrew.jpg" />
      <strong>Andrew Alfred</strong>
    </div>
    <div>
      <img src="/img/debra.jpg" />
      <strong>Debra Houston</strong>
    </div>
  </div>
</div>
```

Fixed positioned elements remain anchored to the viewport regardless of scrolling.

---

### Sticky Positioning Elements

Use the `sticky` utility to make an element behave like `relative` until it crosses a threshold, then switch to `fixed`:

```html
<div>
  <div>
    <div class="sticky top-0 ...">A</div>
    <div>
      <div>
        <img src="/img/andrew.jpg" />
        <strong>Andrew Alfred</strong>
      </div>
      <div>
        <img src="/img/aisha.jpg" />
        <strong>Aisha Houston</strong>
      </div>
    </div>
  </div>
  <div>
    <div class="sticky top-0">B</div>
    <div>
      <div>
        <img src="/img/bob.jpg" />
        <strong>Bob Alfred</strong>
      </div>
    </div>
  </div>
</div>
```

Sticky elements switch between `relative` and `fixed` based on scroll position.

---

## Responsive Design

You can apply position utilities responsively using breakpoints:

```html
<div class="relative md:absolute ...">
  <!-- Content -->
</div>
```

Use responsive variants like `md:`, `lg:`, and `xl:` to control positioning at different screen sizes.

---
