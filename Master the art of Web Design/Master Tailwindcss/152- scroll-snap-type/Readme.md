# Scroll Snap Type Utilities

## Introduction
The `scroll-snap-type` utilities provide control over how strictly snap points are enforced within a scroll container. These utilities help create smooth and predictable scrolling behavior, ensuring elements align perfectly within a scrollable area.

With these utilities, you can specify horizontal, vertical, or both-axis snapping, as well as control the strictness of snap enforcement. These features enhance user experience, particularly for carousels, image galleries, and scroll-based navigation.

---

## Available Classes

| Class | Style |
|--------|----------------------------------------|
| `snap-none` | `scroll-snap-type: none;` |
| `snap-x` | `scroll-snap-type: x var(--tw-scroll-snap-strictness);` |
| `snap-y` | `scroll-snap-type: y var(--tw-scroll-snap-strictness);` |
| `snap-both` | `scroll-snap-type: both var(--tw-scroll-snap-strictness);` |
| `snap-mandatory` | `--tw-scroll-snap-strictness: mandatory;` |
| `snap-proximity` | `--tw-scroll-snap-strictness: proximity;` |

---

## Usage Examples

### 1. Horizontal Scroll Snapping
Enable horizontal scroll snapping using `snap-x`. Ensure that child elements have snap alignment applied.

```html
<div class="snap-x overflow-x-auto flex space-x-4">
  <div class="snap-center w-40 h-40 bg-gray-300 flex-shrink-0">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-center w-40 h-40 bg-gray-300 flex-shrink-0">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-center w-40 h-40 bg-gray-300 flex-shrink-0">
    <img src="/img/vacation-03.jpg" />
  </div>
</div>
```

### 2. Mandatory Scroll Snapping
Use `snap-mandatory` to force strict snapping behavior.

```html
<div class="snap-x snap-mandatory overflow-x-auto flex space-x-4">
  <div class="snap-center w-40 h-40 bg-gray-300 flex-shrink-0">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-center w-40 h-40 bg-gray-300 flex-shrink-0">
    <img src="/img/vacation-02.jpg" />
  </div>
</div>
```

### 3. Proximity Scroll Snapping
Use `snap-proximity` for a looser snapping effect where the container stops at the closest snap point.

```html
<div class="snap-x snap-proximity overflow-x-auto flex space-x-4">
  <div class="snap-center w-40 h-40 bg-gray-300 flex-shrink-0">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-center w-40 h-40 bg-gray-300 flex-shrink-0">
    <img src="/img/vacation-02.jpg" />
  </div>
</div>
```

---

## Responsive Design
To apply scroll snap behavior at different screen sizes, prefix the utility class with a breakpoint variant like `md:`.

```html
<div class="snap-none md:snap-x overflow-x-auto">
  <!-- Scrollable content -->
</div>
```

For more details on responsive utilities, refer to the official Tailwind CSS documentation.

---

## Conclusion
The `scroll-snap-type` utilities provide a flexible way to enhance scrolling experiences by ensuring elements align smoothly within scrollable containers. By leveraging these utilities, developers can create intuitive and seamless scrolling effects tailored for various use cases, from image carousels to dynamic content sections.

