# Content Utility

## Introduction
The `content` utility provides control over the `content` property for the `::before` and `::after` pseudo-elements in CSS. This allows you to insert and style additional content dynamically without modifying the HTML structure. It supports static text, attribute values, CSS variables, and responsive design, making it a powerful tool for enhancing user interfaces.

## Class Reference

### 1. `content-[<value>]`
- Sets the content of the `::before` or `::after` pseudo-element to a specified value.
- **Syntax:** `content-[value]`
- **Example:** `before:content-['Hello']`

```html
<p class="before:content-['Hello']">
  <!-- This paragraph will have 'Hello' before it -->
</p>
```

### 2. `content-[attr(<name>)]`
- Uses the `attr()` function to reference an attribute value.
- **Syntax:** `content-[attr(attribute-name)]`
- **Example:**

```html
<p before="Hello World" class="before:content-[attr(before)]">
  <!-- The content of 'before' attribute will appear before this paragraph -->
</p>
```

### 3. `content-none`
- Removes any content from the pseudo-element.
- **Example:**

```html
<p class="before:content-none after:content-none">
  <!-- No additional content will be displayed -->
</p>
```

### 4. Using Spaces and Underscores
Since HTML class attributes do not support spaces in class names, underscores (`_`) should be used instead of spaces. If an underscore is needed as part of the content, escape it using `\`.

**Example:**
```html
<p class="before:content-['Hello_World']">
  <!-- Displays 'Hello World' before the paragraph -->
</p>

<p class="before:content-['Hello\_World']">
  <!-- Displays 'Hello_World' before the paragraph -->
</p>
```

### 5. Using a CSS Variable
- You can use CSS variables to dynamically set content values.
- **Syntax:** `content-(--custom-property)`
- **Example:**

```html
<p class="content-(--my-content)">
  <!-- The content will be taken from the CSS variable '--my-content' -->
</p>
```

### 6. Responsive Design
- You can apply different content values based on screen sizes using breakpoint variants.
- **Example:**

```html
<p class="before:content-['Mobile'] md:before:content-['Desktop']">
  <!-- Displays 'Mobile' before the paragraph on small screens and 'Desktop' on medium and larger screens -->
</p>
```

## Examples

### Basic Example
Use the `content-[<value>]` syntax with the `before` and `after` variants to insert custom content:

```html
<p>Higher resolution means more than just a better-quality image. With a Retina 6K display, <a class="text-blue-600 after:content-['_↗']" href="#"> Pro Display XDR</a> gives you nearly 40 percent more screen real estate than a 5K display.</p>
```

## Additional Information
- Learn more about pseudo-elements: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)
- Check out the variants documentation for more styling options.

## Conclusion
The `content` utility provides a flexible way to manage pseudo-element content dynamically. Whether you are referencing attributes, using CSS variables, or making responsive adjustments, these utilities help streamline content management in a Tailwind-like framework.

