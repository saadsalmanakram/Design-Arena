# Transition Behavior

## Introduction

The `transition-behavior` utility provides fine control over CSS transitions, allowing developers to specify how elements should behave when transitioning between states. This can be particularly useful for handling elements that change visibility, display properties, or any other discrete state changes.

## Utilities

The following utility classes are available to modify transition behavior:

| Class                 | Styles                                   |
|----------------------|---------------------------------|
| `transition-normal`  | `transition-behavior: normal;`  |
| `transition-discrete` | `transition-behavior: allow-discrete;` |

## Examples

### Basic Example

Use the `transition-discrete` utility to initiate transitions when modifying properties that change in discrete steps, such as toggling visibility:

```html
<label class="peer ...">
  <input type="checkbox" checked />
</label>
<button class="hidden transition-all not-peer-has-checked:opacity-0 peer-has-checked:block ...">
  I hide
</button>

<label class="peer ...">
  <input type="checkbox" checked />
</label>
<button class="hidden transition-all transition-discrete not-peer-has-checked:opacity-0 peer-has-checked:block ...">
  I fade out
</button>
```

### Responsive Design

You can apply transition behaviors conditionally based on screen size using responsive variants. For example, using `md:transition-normal` will apply normal transition behavior only at medium screen sizes and above:

```html
<button class="transition-discrete md:transition-normal ...">
  <!-- Button Content -->
</button>
```

Learn more about using variants in the [variants documentation](#).

