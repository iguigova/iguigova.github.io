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
  here, checked first by `~/.claude/scripts/brand_check.py --diff HEAD`,
  which shows what it does to every page and document.
- `brand.js` is the theme switch beside it: every page loads it in `<head>`
  by the same relative path, and `~/src/oceanhue/brand.js` is a symlink to
  it too. It puts a Light or Dark button on the page, and a choice that
  differs from the system's theme holds on every page and tab of the site.
  A printed document needs none.
- `style.html` shows `brand.css` with itself: every colour in both themes and
  its contrast, read from the stylesheet as the page opens, then the fonts,
  the type, and the hub, stitchback, newton3 and dotclaude as live frames
  that take the theme the switch chooses. The home page's footer links to
  it. A project colour that differs by theme is `light-dark(light, dark)`,
  so it follows the theme `brand.css` sets.
