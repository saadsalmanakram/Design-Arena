# Scroll Behavior Utility

## Introduction
The `scroll-behavior` utility in Tailwind CSS provides control over how scrolling behaves within an element. This utility allows you to enable smooth scrolling for a more refined user experience or revert to the default browser scrolling behavior.

## Available Classes
| Class          | Styles Applied               |
|---------------|-----------------------------|
| `scroll-auto` | `scroll-behavior: auto;`    |
| `scroll-smooth` | `scroll-behavior: smooth;` |

## Examples

### Using Smooth Scrolling
Enable smooth scrolling within an element using the `scroll-smooth` utility:

```html
<html class="scroll-smooth">
  <!-- Content here -->
</html>
```
This ensures that scrolling events triggered by the browser, such as anchor link navigation, are animated smoothly.

### Using Normal Scrolling
Revert to the default browser scrolling behavior using the `scroll-auto` utility:

```html
<html class="scroll-smooth md:scroll-auto">
  <!-- Content here -->
</html>
```
This example enables smooth scrolling on smaller screens but switches to normal scrolling on medium-sized screens and larger.
