/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_zgmF4OWv.mjs';
import 'kleur/colors';
import { $ as $$ThemeSelecter, a as $$Credits, b as $$Layout } from '../chunks/Layout_c9p2iKMG.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 PAGE", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-zetdm5md> ${renderComponent($$result2, "ThemeSelecter", $$ThemeSelecter, { "data-astro-cid-zetdm5md": true })} <div data-astro-cid-zetdm5md> <p data-astro-cid-zetdm5md>This page could not be found</p> <a href="/" data-astro-cid-zetdm5md>go to the homepage</a> </div> ${renderComponent($$result2, "Credits", $$Credits, { "data-astro-cid-zetdm5md": true })} </main> ` })} `;
}, "/media/enzo/Datos/githubs projects/countdown-astro/src/pages/404.astro", void 0);

const $$file = "/media/enzo/Datos/githubs projects/countdown-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
