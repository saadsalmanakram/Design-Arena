# Line-Height Utilities

## Introduction
The `line-height` utility provides a set of classes to control the leading, or line height, of an element in a structured and flexible manner. These utilities help manage the vertical spacing between lines of text, ensuring optimal readability and aesthetic appeal. The line height can be specified using predefined numerical values, custom properties, or explicit values.

## Usage
### Classes and Styles
The `line-height` utility is designed to work in conjunction with font size utilities to adjust both text size and leading in a single class.

#### **Syntax:**
- `text-<size>/<number>` → Sets both `font-size` and `line-height`.
  ```css
  font-size: <size>;
  line-height: calc(var(--spacing) * <number>);
  ```
- `text-<size>/(<custom-property>)` → Uses a CSS variable for line height.
  ```css
  font-size: <size>;
  line-height: var(<custom-property>);
  ```
- `text-<size>/[<value>]` → Uses a specific line height value.
  ```css
  font-size: <size>;
  line-height: <value>;
  ```
- `leading-none` → Sets line height to `1`.
  ```css
  line-height: 1;
  ```
- `leading-<number>` → Uses a predefined multiple of `--spacing`.
  ```css
  line-height: calc(var(--spacing) * <number>);
  ```
- `leading-(<custom-property>)` → Uses a custom property as line height.
  ```css
  line-height: var(<custom-property>);
  ```
- `leading-[<value>]` → Uses an explicit line height value.
  ```css
  line-height: <value>;
  ```

## Examples
### **Basic Usage**
Apply font size and line height together:
```html
<p class="text-sm/6">So I started to walk into the water...</p>
<p class="text-sm/7">So I started to walk into the water...</p>
<p class="text-sm/8">So I started to walk into the water...</p>
```
By default, each `text-<size>` utility applies a predefined line height, which can be customized.

### **Setting Line Height Independently**
Use `leading-<number>` utilities:
```html
<p class="text-sm leading-6">So I started to walk into the water...</p>
<p class="text-sm leading-7">So I started to walk into the water...</p>
<p class="text-sm leading-8">So I started to walk into the water...</p>
```

### **Removing Line Height**
Use `leading-none` to remove extra leading:
```html
<p class="text-2xl leading-none">The quick brown fox...</p>
```

### **Using a Custom Value**
Use `leading-[<value>]` for custom values:
```html
<p class="leading-[1.5]">Custom line height of 1.5</p>
```

For CSS variables:
```html
<p class="leading-(--my-line-height)">Using a CSS variable</p>
```
This syntax automatically adds the `var()` function.

## Responsive Design
Prefix a `leading` utility with a breakpoint variant such as `md:` to apply styles at specific screen sizes:
```html
<p class="leading-5 md:leading-6">Responsive line height</p>
```
Learn more about responsive utilities in the variants documentation.

## Customization
The `leading-<number>` utilities derive from the `--spacing` theme variable, which can be customized in the theme settings:
```css
@theme {
  --spacing: 1px;
}
```
Modify the spacing scale in the theme configuration to tailor line height to your design needs.

---
For additional details, refer to the font-size and theme variable documentation.

