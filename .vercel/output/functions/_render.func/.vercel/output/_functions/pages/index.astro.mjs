/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, f as createAstro } from '../chunks/astro/server_zgmF4OWv.mjs';
import 'kleur/colors';
import { $ as $$ThemeSelecter, a as $$Credits, b as $$Layout } from '../chunks/Layout_c9p2iKMG.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Play = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg>`;
}, "/media/enzo/Datos/githubs projects/countdown-astro/src/components/icons/play.astro", void 0);

const $$Pip = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-picture-in-picture"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4"></path><path d="M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z"></path></svg>`;
}, "/media/enzo/Datos/githubs projects/countdown-astro/src/components/icons/pip.astro", void 0);

const $$Restore = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-restore"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3.06 13a9 9 0 1 0 .49 -4.087"></path><path d="M3 4.001v5h5"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>`;
}, "/media/enzo/Datos/githubs projects/countdown-astro/src/components/icons/restore.astro", void 0);

const $$CountdownAstro = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="main-container" data-astro-cid-ypkzidg4> <div class="container-main" data-astro-cid-ypkzidg4> <div data-astro-cid-ypkzidg4> <main class="theme-b container-element" data-astro-cid-ypkzidg4> <div data-astro-cid-ypkzidg4> <p id="countdown" data-astro-cid-ypkzidg4>00:01:00</p> </div> <div data-astro-cid-ypkzidg4> <button class="start" data-astro-cid-ypkzidg4> ${renderComponent($$result, "Start", $$Play, { "data-astro-cid-ypkzidg4": true })} </button> <button class="restart" data-astro-cid-ypkzidg4> ${renderComponent($$result, "Restore", $$Restore, { "data-astro-cid-ypkzidg4": true })} </button> <button class="pip-btn" data-astro-cid-ypkzidg4> ${renderComponent($$result, "Pip", $$Pip, { "data-astro-cid-ypkzidg4": true })} </button> </div> </main> <div id="pip-message" data-astro-cid-ypkzidg4> <p data-astro-cid-ypkzidg4>
Estás en modo PiP
</p> </div> </div> <div class="time-controls" data-astro-cid-ypkzidg4> <label for="hours" data-astro-cid-ypkzidg4>Hours</label> <input type="range" name="hours" id="hours" min="0" max="100" value="0" data-astro-cid-ypkzidg4> <label for="minutes" data-astro-cid-ypkzidg4>Minutes</label> <input type="range" name="minutes" id="minutes" min="0" max="59" value="0" data-astro-cid-ypkzidg4> <label for="seconds" data-astro-cid-ypkzidg4>Seconds</label> <input type="range" name="seconds" id="seconds" min="0" max="59" value="0" data-astro-cid-ypkzidg4> </div> </div> <div class="alarm" data-astro-cid-ypkzidg4> <select name="alarm" id="alarm" data-astro-cid-ypkzidg4> <option value="alarm-no3" data-astro-cid-ypkzidg4>Alarm N°1</option> <option value="military_alarm-6380" data-astro-cid-ypkzidg4>Military Alarm</option> <option value="klaxon" data-astro-cid-ypkzidg4>Klaxon</option> <option value="640g_alarm-83662" data-astro-cid-ypkzidg4>640g Alarm</option> <option value="digital-alarm-2-151919" data-astro-cid-ypkzidg4>Digital Alarm</option> <option value="dive-89805" data-astro-cid-ypkzidg4>Dive</option> <option value="door-alarm-108171" data-astro-cid-ypkzidg4>Door Alarm</option> <option value="security-alarm-80493" data-astro-cid-ypkzidg4>Security Alarm</option> </select> </div> </div>  `;
}, "/media/enzo/Datos/githubs projects/countdown-astro/src/components/countdown-astro.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ThemeSelector", $$ThemeSelecter, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CountdownAstro", $$CountdownAstro, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Credits", $$Credits, { "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "/media/enzo/Datos/githubs projects/countdown-astro/src/pages/index.astro", void 0);

const $$file = "/media/enzo/Datos/githubs projects/countdown-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
