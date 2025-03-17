# White-Space Utility Classes

## Introduction
The `white-space` utility classes provide a way to control how text behaves within an element. These utilities help manage text wrapping, preserving spaces and newlines, and handling overflowing content. They are particularly useful in scenarios where precise text formatting is required, such as code snippets, chat interfaces, or preformatted content.

The available `white-space` classes allow you to:
- Collapse or preserve spaces and newlines
- Prevent text from wrapping
- Maintain formatting for preformatted text
- Control text behavior responsively using breakpoints

## Available Classes

| Class                     | Styles Applied            |
|---------------------------|---------------------------|
| `whitespace-normal`       | `white-space: normal;`    |
| `whitespace-nowrap`       | `white-space: nowrap;`    |
| `whitespace-pre`          | `white-space: pre;`       |
| `whitespace-pre-line`     | `white-space: pre-line;`  |
| `whitespace-pre-wrap`     | `white-space: pre-wrap;`  |
| `whitespace-break-spaces` | `white-space: break-spaces;` |

## Usage Examples

### 1. Normal White-Space
Use `whitespace-normal` to allow text to wrap naturally. Newlines and multiple spaces will be collapsed.

```html
<p class="whitespace-normal">Hey everyone!
It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.
You will never know.</p>
```

### 2. No Wrap
Use `whitespace-nowrap` to prevent text from wrapping. Newlines and extra spaces will be collapsed.

```html
<p class="overflow-auto whitespace-nowrap">Hey everyone!
It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.
You will never know.</p>
```

### 3. Preformatted Text
Use `whitespace-pre` to preserve newlines and spaces. Text will not wrap automatically.

```html
<p class="overflow-auto whitespace-pre">Hey everyone!
It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.
You will never know.</p>
```

### 4. Pre-Line
Use `whitespace-pre-line` to preserve newlines but collapse extra spaces. Text will wrap normally.

```html
<p class="whitespace-pre-line">Hey everyone!
It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.
You will never know.</p>
```

### 5. Pre-Wrap
Use `whitespace-pre-wrap` to preserve both newlines and spaces while allowing text to wrap naturally.

```html
<p class="whitespace-pre-wrap">Hey everyone!
It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.
You will never know.</p>
```

### 6. Break Spaces
Use `whitespace-break-spaces` to preserve newlines and spaces, ensuring that white space at the end of lines wraps correctly.

```html
<p class="whitespace-break-spaces">Hey everyone!
It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.
You will never know.</p>
```

## Responsive Design
You can apply `white-space` utilities responsively by prefixing them with a breakpoint. For example, to use `whitespace-pre` by default but `whitespace-normal` on medium screens and larger:

```html
<p class="whitespace-pre md:whitespace-normal ...">
  <!-- Content -->
</p>
```

For more details on responsive utility variants, refer to the official documentation on using breakpoints.

---
By utilizing these `white-space` utilities, you can precisely control text formatting and improve the readability and presentation of your content across different screen sizes and use cases.

