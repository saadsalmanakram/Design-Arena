# Pointer Events Utility

## Introduction
The `pointer-events` utility provides a way to control whether an element responds to pointer events like clicks, hover effects, and other interactions. This can be useful for creating overlays, ignoring pointer events on certain elements, or restoring default browser behavior when needed.

## Available Classes

| Class                   | Styles Applied            |
|-------------------------|---------------------------|
| `pointer-events-auto`   | `pointer-events: auto;`   |
| `pointer-events-none`   | `pointer-events: none;`   |

## Usage

### Ignoring Pointer Events
Use the `pointer-events-none` utility to make an element ignore pointer events, meaning it won’t respond to clicks, hover effects, or any user interactions.

#### Example:
```html
<div class="relative ...">
  <div class="pointer-events-none absolute ...">
    <svg class="absolute h-5 w-5 text-gray-400">
      <!-- Icon -->
    </svg>
  </div>
  <input type="text" placeholder="Search" class="..." />
</div>
```
In this example, the `<svg>` element inside the `pointer-events-none` container will not respond to pointer events, allowing interactions to pass through to the input field beneath it.

### Restoring Pointer Events
Use the `pointer-events-auto` utility to restore the default browser behavior, making an element respond to pointer events again.

#### Example:
```html
<div class="pointer-events-none md:pointer-events-auto ...">
  <!-- Content here -->
</div>
```
In this case, the element ignores pointer events by default but will restore them on medium (`md`) screen sizes and larger.

## Notes
- Pointer events will still trigger on child elements unless they also have `pointer-events-none` applied.
- Click events and hover effects will pass through elements with `pointer-events-none` and affect elements beneath them.

## Conclusion
The `pointer-events` utility is a powerful tool for controlling user interactions. Use `pointer-events-none` to disable interactions and `pointer-events-auto` to re-enable them as needed in your design.
