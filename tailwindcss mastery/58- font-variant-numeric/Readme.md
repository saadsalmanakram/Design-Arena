# Font Variant Numeric

## Introduction
The `font-variant-numeric` utility provides control over the display of numeric characters in fonts that support OpenType features. This allows fine-tuning of number formatting styles, including ordinal markers, slashed zeroes, oldstyle and lining figures, proportional and tabular spacing, and different fraction styles.

By applying these utilities, you can ensure that numbers appear in the most readable and aesthetically appropriate way for your design needs.

## Usage
Each class applies a specific numeric formatting style to text elements. These utilities are useful when dealing with numbers in tables, financial reports, fractions, and typographic enhancements.

### Available Classes

| Class | CSS Property |
|--------|---------------------------|
| `.normal-nums` | `font-variant-numeric: normal;` |
| `.ordinal` | `font-variant-numeric: ordinal;` |
| `.slashed-zero` | `font-variant-numeric: slashed-zero;` |
| `.lining-nums` | `font-variant-numeric: lining-nums;` |
| `.oldstyle-nums` | `font-variant-numeric: oldstyle-nums;` |
| `.proportional-nums` | `font-variant-numeric: proportional-nums;` |
| `.tabular-nums` | `font-variant-numeric: tabular-nums;` |
| `.diagonal-fractions` | `font-variant-numeric: diagonal-fractions;` |
| `.stacked-fractions` | `font-variant-numeric: stacked-fractions;` |

## Examples

### Using Ordinal Glyphs
Use the `.ordinal` class to apply special ordinal glyphs where supported.
```html
<p class="ordinal">1st</p>
```

### Using Slashed Zeroes
Use the `.slashed-zero` class to ensure a slashed zero appears in supported fonts.
```html
<p class="slashed-zero">0</p>
```

### Using Lining Figures
Lining numbers align numbers by their baseline.
```html
<p class="lining-nums">1234567890</p>
```

### Using Oldstyle Figures
Oldstyle numbers feature descenders for some numbers.
```html
<p class="oldstyle-nums">1234567890</p>
```

### Using Proportional Figures
Proportional numbers allow different widths for different digits.
```html
<p class="proportional-nums">12121</p>
<p class="proportional-nums">90909</p>
```

### Using Tabular Figures
Tabular numbers ensure uniform spacing for digits.
```html
<p class="tabular-nums">12121</p>
<p class="tabular-nums">90909</p>
```

### Using Diagonal Fractions
Automatically format fractions using the `.diagonal-fractions` class.
```html
<p class="diagonal-fractions">1/2 3/4 5/6</p>
```

### Using Stacked Fractions
For vertical fraction styling, use `.stacked-fractions`.
```html
<p class="stacked-fractions">1/2 3/4 5/6</p>
```

### Combining Multiple Numeric Variants
Numeric font variants can be combined for better formatting:
```html
<dl>
  <dt>Subtotal</dt>
  <dd class="text-right slashed-zero tabular-nums">$100.00</dd>
  <dt>Tax</dt>
  <dd class="text-right slashed-zero tabular-nums">$14.50</dd>
  <dt>Total</dt>
  <dd class="text-right slashed-zero tabular-nums">$114.50</dd>
</dl>
```

### Resetting Numeric Font Variants
Reset to default numeric rendering using `.normal-nums`.
```html
<p class="slashed-zero tabular-nums md:normal-nums">...</p>
```

### Responsive Design
Apply numeric variants at specific breakpoints.
```html
<p class="proportional-nums md:tabular-nums">...</p>
```

## Learn More
For more details on responsive typography and variant utilities, refer to the [official documentation](#).

