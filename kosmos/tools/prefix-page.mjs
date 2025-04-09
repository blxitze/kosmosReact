import fs from "fs/promises";

const PREFIX = "con-";
const CSS_SRC = "src/styles/SpaceKz.css";

const WHITELIST = [
  "pos-abs",
  "fill-parent",
  "bg-contain",
  "bg-cover",
  "bg-no-repeat",
  "pos-init",
  "image-div",
  "nav1",
];

const withPrefix = (cls) =>
  WHITELIST.includes(cls) || cls.startsWith(PREFIX) ? cls : PREFIX + cls;

// Улучшенная регулярка для селекторов:
// Ищем точку, затем первую букву (не цифра) и потом буквы, цифры, подчёркивания и дефисы, 
// после чего проверяем, что дальше идёт пробел, {, comma или знак > или end-of-string.
const classSelectorRegex = /\.([A-Za-z_-][A-Za-z0-9_-]*)(?=\s|[{,>]|$)/g;

const patchCSS = (css) =>
  css.replace(classSelectorRegex, (_, cls) => {
    return WHITELIST.includes(cls) || cls.startsWith(PREFIX)
      ? `.${cls}`
      : `.${PREFIX}${cls}`;
  });

(async () => {
  try {
    const cssRaw = await fs.readFile(CSS_SRC, "utf8");
    const cssPrefixed = patchCSS(cssRaw);
    await fs.writeFile(CSS_SRC.replace(".css", ".prefixed.css"), cssPrefixed);
    console.log("✅ Conclusion.prefixed.css generated successfully!");
  } catch (err) {
    console.error("Error:", err);
  }
})();



// tools/prefix-page.mjs
import fs from 'fs/promises';

const PREFIX   = 'con-';                        // ← твой префикс
const JSX_SRC  = 'src/pages/Conclusion.jsx';
const CSS_SRC  = 'src/styles/Conclusion.css';

const WHITELIST = [
  // глобальные/утилитарные классы — остаются без префикса
  'pos-abs','fill-parent','bg-contain','bg-cover','bg-no-repeat',
  'pos-init','image-div','nav1'
];

// helpers
const withPrefix = (cls) =>
  WHITELIST.includes(cls) || cls.startsWith(PREFIX) ? cls : PREFIX + cls;

const patchJSX = (code) =>
  code.replace(/className="([^"]+)"/g, (_, value) => {
    const patched = value
      .trim()
      .split(/\s+/)
      .map(withPrefix)
      .join(' ');
    return `className="${patched}"`;
  });

const patchCSS = (css) =>
  css.replace(/\.([A-Za-z0-9_-]+)/g, (_, cls) =>
    WHITELIST.includes(cls) || cls.startsWith(PREFIX)
      ? `.${cls}`
      : `.${PREFIX}${cls}`
  );

(async () => {
  const jsxRaw = await fs.readFile(JSX_SRC, 'utf8');
  const cssRaw = await fs.readFile(CSS_SRC, 'utf8');

  await fs.writeFile(JSX_SRC.replace('.jsx', '.prefixed.jsx'), patchJSX(jsxRaw));
  await fs.writeFile(CSS_SRC.replace('.css', '.prefixed.css'), patchCSS(cssRaw));

  console.log('✅  Conclusion prefixed → *.prefixed.{jsx,css}');
})();
