/* The theme switch every page shares, beside brand.css, which draws it.
   It puts one button on the page that turns it light or dark, by setting
   data-theme on the root, which brand.css honours. A choice that differs
   from the system's theme is kept in localStorage, so it holds on every page
   of the site, in every open tab and in every framed page; a choice that
   matches it is forgotten, so the system picks the theme again. A page loads it in <head>,
   by the same relative path as brand.css, so a kept choice applies before the
   page paints. */
(() => {
  const KEY = 'theme';
  const root = document.documentElement;
  const system = matchMedia('(prefers-color-scheme: dark)');
  const kept = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  const keep = (t) => {
    try { if (t) localStorage.setItem(KEY, t); else localStorage.removeItem(KEY); } catch { /* not kept */ }
  };
  const apply = (t) => {
    if (t === 'light' || t === 'dark') root.dataset.theme = t;
    else delete root.dataset.theme;
  };
  const systems = () => (system.matches ? 'dark' : 'light');
  const current = () => root.dataset.theme || systems();
  const other = () => (current() === 'dark' ? 'light' : 'dark');

  apply(kept());

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'theme-switch';
  const label = () => {
    const next = other();
    const icon = document.createElement('span');
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = next === 'dark' ? '☾ ' : '☀ ';
    button.replaceChildren(icon, next === 'dark' ? 'Dark' : 'Light');
    button.title = `Switch to the ${next} theme`;
  };
  button.addEventListener('click', () => {
    const next = other() === systems() ? null : other();
    apply(next); keep(next); label();
  });
  addEventListener('storage', (e) => { if (e.key === KEY) { apply(e.newValue); label(); } });
  system.addEventListener('change', label);

  const place = () => { label(); document.body.prepend(button); };
  if (document.body) place(); else addEventListener('DOMContentLoaded', place);
})();
