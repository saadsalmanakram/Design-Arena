# Word Break Utilities

## Introduction
The `word-break` utility provides control over how text breaks across lines within an element. This utility is particularly useful for handling long words, preventing overflow, and ensuring proper line-breaking behavior for different languages. It offers multiple classes to manage text wrapping effectively, making it ideal for responsive and multilingual web applications.

## Available Classes

| Class        | Styles Applied |
|-------------|--------------------------------------------------|
| `break-normal` | `overflow-wrap: normal;`<br>`word-break: normal;` |
| `break-words`  | `overflow-wrap: break-word;` |
| `break-all`    | `word-break: break-all;` |
| `break-keep`   | `word-break: keep-all;` |

## Usage Examples

### 1. Normal Break (`break-normal`)
Use the `break-normal` utility to allow line breaks only at normal word break points:

```html
<p class="break-normal">The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
```

### 2. Break Words (`break-words`)
Use `break-words` to insert line breaks mid-word if necessary:

```html
<p class="break-words">The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
```

### 3. Break All (`break-all`)
Use `break-all` to force line breaks whenever necessary, without trying to preserve whole words:

```html
<p class="break-all">The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
```

### 4. Break Keep (`break-keep`)
Use `break-keep` to prevent line breaks in Chinese, Japanese, or Korean (CJK) text:

```html
<p class="break-keep">抗衡不屈不挠 (kànghéng bùqū bùnáo) 这是一个长词，意思是不畏强暴，奋勇抗争，坚定不移，永不放弃。这个词通常用来描述那些在面对困难和挑战时坚持自己信念的人， 他们克服一切困难，不屈不挠地追求自己的目标。无论遇到多大的挑战，他们都能够坚持到底，不放弃，最终获得胜利。</p>
```
For non-CJK text, the `break-keep` utility behaves the same as `break-normal`.

## Responsive Design
The `word-break` utility supports responsive design using breakpoint variants. Prefix the class with a breakpoint, such as `md:`, to apply the rule only at medium screen sizes and above:

```html
<p class="break-normal md:break-all ...">
  <!-- Content here -->
</p>
```

## Learn More
For further customization and advanced usage, refer to the official documentation on text wrapping and responsive typography.

