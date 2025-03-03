# Line Clamp Utility

## Introduction

The **line-clamp** utility provides a way to truncate multi-line text after a specific number of lines. This helps maintain a clean and consistent layout, particularly in situations where long text might overflow its container. The utility leverages `-webkit-line-clamp` to control text visibility while maintaining accessibility and responsive design support.

## Installation

Include the necessary CSS styles in your project or use this utility within a Tailwind CSS setup.

## Usage

### Basic Classes
The following classes can be used to apply or remove line clamping:

| Class | Styles Applied |
|--------|---------------|
| `line-clamp-<number>` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: <number>;` |
| `line-clamp-none` | `overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: unset;` |
| `line-clamp-(<custom-property>)` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: var(<custom-property>);` |
| `line-clamp-[<value>]` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: <value>;` |

## Examples

### Basic Example
Use `line-clamp-<number>` utilities like `line-clamp-2` and `line-clamp-3` to truncate text after a certain number of lines:

```html
<article>
  <time>Mar 10, 2020</time>
  <h2>Boost your conversion rate</h2>
  <p class="line-clamp-3">
    Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut
    sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat
    dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt
    ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur
    enim.
  </p>
  <div>
    <img src="/img/lindsay.jpg" />
    Lindsay Walton
  </div>
</article>
```

### Undoing Line Clamping
Use `line-clamp-none` to remove a previously applied clamp:

```html
<p class="line-clamp-3 lg:line-clamp-none">
  <!-- Text here will be unrestricted on large screens -->
</p>
```

### Using a Custom Value
Use `line-clamp-[<value>]` to set a custom number of lines dynamically:

```html
<p class="line-clamp-[calc(var(--characters)/100)]">
  <!-- Custom dynamic clamping -->
</p>
```
For CSS variables, use `line-clamp-(<custom-property>)`:

```html
<p class="line-clamp-(--my-line-count)">
  <!-- Uses a CSS variable for line clamping -->
</p>
```
This is shorthand for `line-clamp-[var(--my-line-count)]`.

### Responsive Design
Use breakpoint prefixes like `md:` to apply different clamping rules at specific screen sizes:

```html
<div class="line-clamp-3 md:line-clamp-4">
  <!-- Text clamping changes at medium screen sizes -->
</div>
```

## Conclusion
The **line-clamp** utility is a simple yet powerful tool for controlling text overflow in a responsive manner. Use it to improve readability, maintain design consistency, and enhance user experience in web applications.

