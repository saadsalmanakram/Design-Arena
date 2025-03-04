user-select
Utilities for controlling whether the user can select text in an element.

Class
Styles
select-none
user-select: none;
select-text
user-select: text;
select-all
user-select: all;
select-auto
user-select: auto;
EXAMPLES
Disabling text selection
Use the select-none utility to prevent selecting text in an element and its children:

Try selecting the text to see the expected behavior

The quick brown fox jumps over the lazy dog.
<div class="select-none ...">The quick brown fox jumps over the lazy dog.</div>
Allowing text selection
Use the select-text utility to allow selecting text in an element and its children:

Try selecting the text to see the expected behavior

The quick brown fox jumps over the lazy dog.
<div class="select-text ...">The quick brown fox jumps over the lazy dog.</div>
Selecting all text in one click
Use the select-all utility to automatically select all the text in an element when a user clicks:

Try clicking the text to see the expected behavior

The quick brown fox jumps over the lazy dog.
<div class="select-all ...">The quick brown fox jumps over the lazy dog.</div>
Using auto select behavior
Use the select-auto utility to use the default browser behavior for selecting text:

Try selecting the text to see the expected behavior

The quick brown fox jumps over the lazy dog.
<div class="select-auto ...">The quick brown fox jumps over the lazy dog.</div>
Responsive design
Prefix an user-select utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:

<div class="select-none md:select-all ...">
  <!-- ... -->
</div>
Learn more about using variants in the variants documentation.