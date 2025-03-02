# Margin Utilities

## Introduction
The **Margin Utilities** component provides a flexible and efficient way to control the spacing around elements using predefined classes. These utility classes enable developers to apply margins to elements quickly, ensuring consistent spacing and alignment within a layout. This component supports both positive and negative margin values, automatic spacing, and custom values using CSS variables.

## Usage
Margin utilities are used to adjust the spacing around elements in a structured and predictable manner. You can apply margins globally, to a specific side, or inline/block dimensions using different class prefixes.

## Available Classes

### General Margin
| Class | Styles |
|-------|--------|
| `m-<number>` | `margin: calc(var(--spacing) * <number>);` |
| `-m-<number>` | `margin: calc(var(--spacing) * -<number>);` |
| `m-auto` | `margin: auto;` |
| `m-px` | `margin: 1px;` |
| `-m-px` | `margin: -1px;` |
| `m-(<custom-property>)` | `margin: var(<custom-property>);` |
| `m-[<value>]` | `margin: <value>;` |

### Horizontal Margin
| Class | Styles |
|-------|--------|
| `mx-<number>` | `margin-inline: calc(var(--spacing) * <number>);` |
| `-mx-<number>` | `margin-inline: calc(var(--spacing) * -<number>);` |
| `mx-auto` | `margin-inline: auto;` |
| `mx-px` | `margin-inline: 1px;` |
| `-mx-px` | `margin-inline: -1px;` |
| `mx-(<custom-property>)` | `margin-inline: var(<custom-property>);` |
| `mx-[<value>]` | `margin-inline: <value>;` |

### Vertical Margin
| Class | Styles |
|-------|--------|
| `my-<number>` | `margin-block: calc(var(--spacing) * <number>);` |
| `-my-<number>` | `margin-block: calc(var(--spacing) * -<number>);` |
| `my-auto` | `margin-block: auto;` |
| `my-px` | `margin-block: 1px;` |
| `-my-px` | `margin-block: -1px;` |
| `my-(<custom-property>)` | `margin-block: var(<custom-property>);` |
| `my-[<value>]` | `margin-block: <value>;` |

### Side-Specific Margins
#### Start and End Margins
| Class | Styles |
|-------|--------|
| `ms-<number>` | `margin-inline-start: calc(var(--spacing) * <number>);` |
| `-ms-<number>` | `margin-inline-start: calc(var(--spacing) * -<number>);` |
| `ms-auto` | `margin-inline-start: auto;` |
| `ms-px` | `margin-inline-start: 1px;` |
| `-ms-px` | `margin-inline-start: -1px;` |
| `ms-(<custom-property>)` | `margin-inline-start: var(<custom-property>);` |
| `ms-[<value>]` | `margin-inline-start: <value>;` |
| `me-<number>` | `margin-inline-end: calc(var(--spacing) * <number>);` |
| `-me-<number>` | `margin-inline-end: calc(var(--spacing) * -<number>);` |
| `me-auto` | `margin-inline-end: auto;` |
| `me-px` | `margin-inline-end: 1px;` |
| `-me-px` | `margin-inline-end: -1px;` |
| `me-(<custom-property>)` | `margin-inline-end: var(<custom-property>);` |
| `me-[<value>]` | `margin-inline-end: <value>;` |

#### Top, Right, Bottom, and Left Margins
| Class | Styles |
|-------|--------|
| `mt-<number>` | `margin-top: calc(var(--spacing) * <number>);` |
| `-mt-<number>` | `margin-top: calc(var(--spacing) * -<number>);` |
| `mt-auto` | `margin-top: auto;` |
| `mt-px` | `margin-top: 1px;` |
| `-mt-px` | `margin-top: -1px;` |
| `mr-<number>` | `margin-right: calc(var(--spacing) * <number>);` |
| `-mr-<number>` | `margin-right: calc(var(--spacing) * -<number>);` |
| `mr-auto` | `margin-right: auto;` |
| `mr-px` | `margin-right: 1px;` |
| `-mr-px` | `margin-right: -1px;` |
| `mb-<number>` | `margin-bottom: calc(var(--spacing) * <number>);` |
| `-mb-<number>` | `margin-bottom: calc(var(--spacing) * -<number>);` |
| `mb-auto` | `margin-bottom: auto;` |
| `mb-px` | `margin-bottom: 1px;` |
| `-mb-px` | `margin-bottom: -1px;` |
| `ml-<number>` | `margin-left: calc(var(--spacing) * <number>);` |
| `-ml-<number>` | `margin-left: calc(var(--spacing) * -<number>);` |
| `ml-auto` | `margin-left: auto;` |
| `ml-px` | `margin-left: 1px;` |
| `-ml-px` | `margin-left: -1px;` |

## Example Usage

### Basic Margin Example
```html
<div class="m-8">m-8</div>
```

### Adding Margin to a Single Side
```html
<div class="mt-6">mt-6</div>
<div class="mr-4">mr-4</div>
<div class="mb-8">mb-8</div>
<div class="ml-2">ml-2</div>
```

### Horizontal and Vertical Margins
```html
<div class="mx-8">mx-8</div>
<div class="my-8">my-8</div>
```

### Using Negative Values
```html
<div class="-mt-8">-mt-8</div>
```

## Conclusion
The **Margin Utilities** component simplifies spacing management in web applications by providing a set of predefined classes. These classes help maintain consistent spacing, improve readability, and ensure better layout alignment. By leveraging these utilities, developers can apply responsive and customizable margins to elements efficiently.

