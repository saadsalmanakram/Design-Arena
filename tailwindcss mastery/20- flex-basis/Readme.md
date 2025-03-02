# Flex Basis Utilities

## Introduction
The `flex-basis` utilities provide control over the initial size of flex items within a flex container. These utilities allow setting the `flex-basis` property using predefined values based on a spacing scale, container sizes, fractions, and custom values. This ensures consistent and responsive layouts when working with flexbox.

## Usage
The `basis-*` classes set the `flex-basis` property, determining the initial size of a flex item before any growing or shrinking takes place.

### Available Classes
| Class | CSS Style |
|--------|-----------------------------|
| `basis-<number>` | `flex-basis: calc(var(--spacing) * <number>);` |
| `basis-<fraction>` | `flex-basis: calc(<fraction> * 100%);` |
| `basis-full` | `flex-basis: 100%;` |
| `basis-auto` | `flex-basis: auto;` |
| `basis-3xs` | `flex-basis: var(--container-3xs); /* 16rem (256px) */` |
| `basis-2xs` | `flex-basis: var(--container-2xs); /* 18rem (288px) */` |
| `basis-xs` | `flex-basis: var(--container-xs); /* 20rem (320px) */` |
| `basis-sm` | `flex-basis: var(--container-sm); /* 24rem (384px) */` |
| `basis-md` | `flex-basis: var(--container-md); /* 28rem (448px) */` |
| `basis-lg` | `flex-basis: var(--container-lg); /* 32rem (512px) */` |
| `basis-xl` | `flex-basis: var(--container-xl); /* 36rem (576px) */` |
| `basis-2xl` | `flex-basis: var(--container-2xl); /* 42rem (672px) */` |
| `basis-3xl` | `flex-basis: var(--container-3xl); /* 48rem (768px) */` |
| `basis-4xl` | `flex-basis: var(--container-4xl); /* 56rem (896px) */` |
| `basis-5xl` | `flex-basis: var(--container-5xl); /* 64rem (1024px) */` |
| `basis-6xl` | `flex-basis: var(--container-6xl); /* 72rem (1152px) */` |
| `basis-7xl` | `flex-basis: var(--container-7xl); /* 80rem (1280px) */` |
| `basis-(<custom-property>)` | `flex-basis: var(<custom-property>);` |
| `basis-[<value>]` | `flex-basis: <value>;` |

## Examples

### Using the Spacing Scale
```html
<div class="flex flex-row">
  <div class="basis-64">01</div>
  <div class="basis-64">02</div>
  <div class="basis-128">03</div>
</div>
```

### Using the Container Scale
```html
<div class="flex flex-row">
  <div class="basis-3xs">01</div>
  <div class="basis-2xs">02</div>
  <div class="basis-xs">03</div>
  <div class="basis-sm">04</div>
</div>
```

### Using Percentages
```html
<div class="flex flex-row">
  <div class="basis-1/3">01</div>
  <div class="basis-2/3">02</div>
</div>
```

### Using a Custom Value
```html
<div class="basis-[30vw]">
  <!-- Custom width basis -->
</div>
```

For CSS variables:
```html
<div class="basis-(--my-basis)">
  <!-- Using a custom CSS variable -->
</div>
```

## Responsive Design
Use breakpoint variants to adjust `flex-basis` at different screen sizes.
```html
<div class="flex flex-row">
  <div class="basis-1/4 md:basis-1/3">01</div>
  <div class="basis-1/4 md:basis-1/3">02</div>
  <div class="basis-1/2 md:basis-1/3">03</div>
</div>
```

## Customization
You can customize the fixed-width basis utilities by modifying theme variables.

**Customizing Container Sizes:**
```css
@theme {
  --container-4xs: 14rem;
}
```
Now, you can use `basis-4xs` in your markup:
```html
<div class="basis-4xs">
  <!-- Custom container size -->
</div>
```

**Customizing the Spacing Scale:**
```css
@theme {
  --spacing: 1px;
}
```

For more details, refer to the theme documentation on spacing customization.

## Conclusion
The `flex-basis` utilities provide a powerful and flexible way to define the initial size of flex items, allowing for precise layout control. Use predefined sizes, percentages, or custom values to build dynamic and responsive designs effortlessly.

