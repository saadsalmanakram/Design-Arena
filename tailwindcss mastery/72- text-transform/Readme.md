# Text Transform Utilities

## Introduction
The **text-transform** utilities provide an easy way to control the capitalization of text using predefined CSS classes. These utilities allow you to quickly modify text appearance without writing custom styles, making them ideal for consistent typography across your project.

## Available Classes
The following classes control the capitalization of text:

| Class | Style Applied |
|--------|------------------------------|
| `uppercase` | `text-transform: uppercase;` |
| `lowercase` | `text-transform: lowercase;` |
| `capitalize` | `text-transform: capitalize;` |
| `normal-case` | `text-transform: none;` |

## Examples

### Uppercasing Text
Use the `uppercase` utility to convert text to uppercase:

```html
<p class="uppercase">The quick brown fox jumps over the lazy dog.</p>
```
**Output:**
THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

### Lowercasing Text
Use the `lowercase` utility to convert text to lowercase:

```html
<p class="lowercase">The quick brown fox jumps over the lazy dog.</p>
```
**Output:**
*the quick brown fox jumps over the lazy dog.*

### Capitalizing Text
Use the `capitalize` utility to capitalize the first letter of each word:

```html
<p class="capitalize">The quick brown fox jumps over the lazy dog.</p>
```
**Output:**
*The Quick Brown Fox Jumps Over The Lazy Dog.*

### Resetting Text Casing
Use the `normal-case` utility to reset text casing and preserve its original form:

```html
<p class="normal-case">The quick brown fox jumps over the lazy dog.</p>
```
**Output:**
*The quick brown fox jumps over the lazy dog.*

## Responsive Design
You can apply text-transform utilities at different breakpoints by prefixing them with a variant like `md:` to enforce styling at medium screen sizes and above:

```html
<p class="capitalize md:uppercase">Responsive text transformation example</p>
```
At smaller screen sizes, the text will be capitalized, but on medium screens and above, it will be transformed to uppercase.

## Further Reading
To learn more about using variants and responsive utilities, refer to the [Variants Documentation](https://tailwindcss.com/docs/variants).

