# Text Wrap Utilities

## Introduction
The `text-wrap` utility provides control over how text wraps within an element. These utilities help manage text overflow, balance text distribution, and enhance readability, especially for headings and paragraphs. The utility ensures an optimal text layout while maintaining a responsive and visually appealing design.

## Available Classes

| Class         | Styles Applied          | Description |
|--------------|------------------------|-------------|
| `text-wrap`  | `text-wrap: wrap;`      | Allows text to wrap onto multiple lines at logical points. |
| `text-nowrap` | `text-wrap: nowrap;`    | Prevents text from wrapping, making it overflow if necessary. |
| `text-balance` | `text-wrap: balance;`  | Balances text across lines for better readability. |
| `text-pretty`  | `text-wrap: pretty;`   | Prevents orphans (single words left on a new line) at the end of a text block. |

## Usage Examples

### 1. Allowing Text to Wrap
Use the `text-wrap` utility to wrap overflowing text onto multiple lines at logical points:

```html
<article class="text-wrap">
  <h3>Beloved Manhattan soup stand closes</h3>
  <p>New Yorkers are facing the winter chill...</p>
</article>
```

### 2. Preventing Text from Wrapping
Use `text-nowrap` to prevent text from wrapping and allow it to overflow instead:

```html
<article class="text-nowrap">
  <h3>Beloved Manhattan soup stand closes</h3>
  <p>New Yorkers are facing the winter chill...</p>
</article>
```

### 3. Balanced Text Wrapping
Use `text-balance` to evenly distribute text across each line for improved readability:

```html
<article>
  <h3 class="text-balance">Beloved Manhattan soup stand closes</h3>
  <p>New Yorkers are facing the winter chill...</p>
</article>
```

> **Note:** Browsers limit text balancing to blocks that are ~6 lines or fewer, making it best suited for headings.

### 4. Pretty Text Wrapping
Use `text-pretty` to prevent orphans (a single word on its own line) at the end of a text block:

```html
<article>
  <h3 class="text-pretty">Beloved Manhattan soup stand closes</h3>
  <p>New Yorkers are facing the winter chill...</p>
</article>
```

## Responsive Design
To apply text wrapping styles conditionally based on screen size, use responsive prefixes such as `md:` to enable different styles at specific breakpoints:

```html
<h1 class="text-pretty md:text-balance">
  <!-- Heading text here -->
</h1>
```

For more details on responsive variants, refer to the [Variants Documentation](#).

