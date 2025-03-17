# Scroll Snap Stop Utilities

## Introduction
The `scroll-snap-stop` utility provides control over whether users can skip past possible snap positions when scrolling. This feature is useful for creating a controlled scrolling experience, ensuring that specific elements are always stopped on before the user can continue scrolling.

## Classes & Styles

| Class         | Style                        | Description |
|--------------|-----------------------------|-------------|
| `snap-normal` | `scroll-snap-stop: normal;` | Allows skipping snap positions when scrolling. |
| `snap-always` | `scroll-snap-stop: always;` | Forces scrolling to stop at each snap position before continuing. |

## Usage Examples

### 1. Forcing Snap Position Stops
Use the `snap-always` utility in combination with `snap-mandatory` to ensure that the scroll container stops at each element before allowing further scrolling.

#### Example:
```html
<div class="snap-x snap-mandatory ...">
  <div class="snap-center snap-always ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-center snap-always ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-center snap-always ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-center snap-always ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-center snap-always ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-center snap-always ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

### 2. Skipping Snap Position Stops
Use the `snap-normal` utility to allow skipping past possible snap positions.

#### Example:
```html
<div class="snap-x ...">
  <div class="snap-center snap-normal ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-center snap-normal ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-center snap-normal ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-center snap-normal ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-center snap-normal ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-center snap-normal ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

### 3. Responsive Design
Prefix a `scroll-snap-stop` utility with a breakpoint variant like `md:` to apply it only at medium screen sizes and above.

#### Example:
```html
<div class="snap-always md:snap-normal ...">
  <!-- Content here -->
</div>
```

## Learn More
For additional details on responsive variants, refer to the official [variants documentation](#).
