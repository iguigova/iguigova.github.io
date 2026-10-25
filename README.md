# iguigova.github.io

The hub at https://iguigova.github.io and the shared look for every project
page served under it.

- `hub.json` is the one source for what the hub lists: the about line, the
  showcases and libraries, and the links.
- `build.py` renders `index.html` from it. With `--readme` it also writes the
  profile README in `iguigova/iguigova`, and with `--profile` the "My GitHub
  is" line of `macha/jobs/profile/profile.txt`. Run all three after editing
  `hub.json`:

  ```bash
  ./build.py --readme ../iguigova/README.md --profile ../macha/jobs/profile/profile.txt
  ```

  CI runs `build.py --self-test` and `build.py --check`, which fails when
  `index.html` is not what `hub.json` renders.
- `brand.css` holds the colour tokens, both themes and the base layout. Every
  project page at `iguigova.github.io/<repo>/` links `/brand.css` and keeps
  no copy, so a change to the look is one commit here.
