import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, d as renderHead, e as renderSlot, f as createAstro } from './astro/server_zgmF4OWv.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Credits = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-u4kxbkkm> <div data-astro-cid-u4kxbkkm><p data-astro-cid-u4kxbkkm>Enzo Bustamante</p> <p data-astro-cid-u4kxbkkm>(<a href="https://x.com/enzodev_" target="_blank" data-astro-cid-u4kxbkkm>@enzodev_</a>)</p></div> <div data-astro-cid-u4kxbkkm><a href="https://github.com/Enzo889/countdown-astro" target="_blank" rel="noopener noreferrer" data-astro-cid-u4kxbkkm>source</a></div> </footer> `;
}, "/media/enzo/Datos/githubs projects/countdown-astro/src/components/credits.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeSelecter = createComponent(($$result, $$props, $$slots) => {
  const themes = ["light", "dark", "red", "blue", "green", "purple"];
  const lottieFiles = ["https://fonts.gstatic.com/s/e/notoemoji/latest/1f916/lottie.json", "https://fonts.gstatic.com/s/e/notoemoji/latest/1f47d/lottie.json", "https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/lottie.json", "https://fonts.gstatic.com/s/e/notoemoji/latest/1f976/lottie.json", "https://fonts.gstatic.com/s/e/notoemoji/latest/1f995/lottie.json", "https://fonts.gstatic.com/s/e/notoemoji/latest/1f608/lottie.json"];
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-6624nark> ${themes.map((theme, index) => renderTemplate(_a || (_a = __template(['<button class="theme-button"', ' aria-label="Theme Selecter"', ' data-astro-cid-6624nark> <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"><\/script>', " </button>"])), addAttribute(theme, "data-theme"), addAttribute(`${theme.charAt(0).toUpperCase() + theme.slice(1)} Theme`, "title"), renderComponent($$result, "dotlottie-player", "dotlottie-player", { "src": lottieFiles[index], "background": "transparent", "speed": "1", "style": "width: 50px; height: 50px", "direction": "1", "playMode": "normal", "hover": true, "loop": true, "data-astro-cid-6624nark": true })))} </div>  `;
}, "/media/enzo/Datos/githubs projects/countdown-astro/src/components/themeSelecter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Countdown with pip interaction and view-transitions api"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/media/enzo/Datos/githubs projects/countdown-astro/src/layouts/Layout.astro", void 0);

export { $$ThemeSelecter as $, $$Credits as a, $$Layout as b };
