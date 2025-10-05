To add dark/light favicon variants

This project currently ships with `src/assets/favicone.png` (used as the default favicon).

If you'd like a dark-mode specific favicon (white icon on dark background), add a file named `favicone-dark.png` to `src/assets`.

The site includes a small inline script in `index.html` that will automatically switch to `favicone-dark.png` when the user's `prefers-color-scheme: dark` is active and the dark file exists.

Notes:
- Filenames must match exactly: `favicone.png` and `favicone-dark.png`.
- Put the files in `src/assets/` and the dev server will serve them correctly.
- If you want multiple sizes (ico, 32x32, 16x16), you can add them and extend the `index.html` accordingly.