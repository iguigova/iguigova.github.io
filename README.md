# iguigova.github.io

The GitHub site at https://iguigova.github.io, and the base style of every
page and document I make.

- `index.html` is the home page and the one list of the showcases,
  libraries and links. The profile README and the profile facts link to it
  and list nothing themselves, so a project joins by one edit here.
- `brand.css` is the base style of every page and document: the colour
  tokens, both themes and the base layout. A project loads it by a relative
  path to the site root, and its own rules override what they need.
  `~/src/oceanhue` mirrors the site, one repo per path, and
  `~/src/oceanhue/brand.css` is a symlink to this file, so the same path
  works on the live site and offline. A change to the style is one commit
  here.
- `style.html` shows `brand.css` with itself: every colour in both themes and
  its contrast, read from the stylesheet as the page opens, then the fonts,
  the type, and the hub, stitchback and newton3 as live frames in both
  themes. The home page's footer links to it. A project colour that differs
  by theme is `light-dark(light, dark)`, so it follows the theme `brand.css`
  sets, and a frame can show it in either.
