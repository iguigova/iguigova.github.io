# iguigova.github.io

The GitHub site at https://iguigova.github.io, and the shared look for every
project page served under it.

- `index.html` is the site's one page and the one list of the showcases,
  libraries and links. The profile README and the profile facts link to it
  and list nothing themselves, so a project joins by one edit here.
- `brand.css` holds the colour tokens, both themes and the base layout. A
  project page at `iguigova.github.io/<repo>/` links it and keeps no copy, so
  a change to the look is one commit here. A page that lays out its own
  screen, such as the stitchback and newton3 demos, imports it into a CSS
  layer, so its own rules win and only the look comes from here. Its header
  names the two places that can't link it and carry a copy instead.
