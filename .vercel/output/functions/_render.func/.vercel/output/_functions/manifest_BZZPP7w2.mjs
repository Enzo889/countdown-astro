import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BcK2R1bV.mjs';
import { g as decodeKey } from './chunks/astro/server_zgmF4OWv.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///media/enzo/Datos/githubs%20projects/countdown-astro/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.iuWIjVuj.js"}],"styles":[{"type":"external","src":"/_astro/index.DEFl2aVO.css"},{"type":"inline","content":"main[data-astro-cid-zetdm5md]{width:100dvw;height:100dvh;font-family:monospace;display:flex;justify-content:center;align-items:center;background:var(--bg-color);color:var(--text-color)}div[data-astro-cid-zetdm5md]{background:var(--bg-cont-main);padding:2rem;border-radius:21px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;& p[data-astro-cid-zetdm5md]{font-size:clamp(1rem,5vw,3rem);text-transform:uppercase}& a[data-astro-cid-zetdm5md]{background:var(--bg-btn);padding:1rem;transition:.1s all ease;color:var(--txt-btn);border:1px solid var(--bg-btn);border-radius:100px;font-size:clamp(.3rem,4vw,1.5rem);text-transform:uppercase;&:hover{background-color:var(--bg-btn-hover);color:var(--txt-btn-hover);border:1px solid var(--bg-btn)}&:active{cursor:progress}}}@media (max-width: 480px){div[data-astro-cid-zetdm5md]{padding:1rem}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.5ej3APiz.js"}],"styles":[{"type":"external","src":"/_astro/index.DEFl2aVO.css"},{"type":"inline","content":".main-container[data-astro-cid-ypkzidg4]{display:flex;gap:.5rem;min-width:350px;position:relative}.container-main[data-astro-cid-ypkzidg4]{padding:1rem;border-radius:1rem;background-color:var(--bg-cont-main);display:flex;flex-direction:column;gap:.5rem}.container-element[data-astro-cid-ypkzidg4]{font-family:monospace,sans-serif;color:var(--text-color);display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;padding:5rem;& p[data-astro-cid-ypkzidg4]{font-size:3rem}& button[data-astro-cid-ypkzidg4]{background-color:var(--bg-btn);color:var(--txt-btn);border:none;padding:1rem 2rem;border-radius:5px;cursor:pointer;border:1px solid transparent;transition:all .3s ease;&:hover{background-color:var(--bg-btn-hover);color:var(--txt-btn-hover);border:1px solid var(--bg-btn)}}}.time-controls[data-astro-cid-ypkzidg4]{display:flex;justify-content:center;align-items:center;gap:1rem;background-color:var(--bg-control);padding:1rem;border-radius:1rem;color:var(--txt-control);& input[data-astro-cid-ypkzidg4]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;width:5rem;height:2rem;border-radius:1rem;border:none;text-align:center;cursor:grab;&:active{cursor:grabbing}&::-webkit-slider-runnable-track{-webkit-appearance:none;appearance:none;background-color:var(--input-runnable-color);border-radius:2rem}&::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1rem;height:1rem;background-color:var(--input-thum-color);border:1px solid var(--input-thum-color-border);border-radius:50%}}}#pip-message[data-astro-cid-ypkzidg4]{display:none;color:var(--text-color);text-align:center;font-size:1.5rem;font-family:monospace;height:10rem;& p[data-astro-cid-ypkzidg4]{padding:1.5rem;margin-top:2.75rem;margin-bottom:2.75rem;border-radius:1.5rem;border:1px solid var(--text-color)}}.alarm[data-astro-cid-ypkzidg4]{gap:1rem;background-color:var(--bg-alarm-p);padding:1rem;border-radius:1rem;height:100%;&:after{content:\"▼\";position:absolute;right:50px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--select-accent);font-size:15px}& select[data-astro-cid-ypkzidg4]{background-color:var(--bg-select);color:var(--select-txt-color);border:1px solid var(--select-accent);padding:1rem 3.5rem;border-radius:5px;cursor:pointer;transition:all .3s ease;overflow:hidden;appearance:none;-webkit-appearance:none;-moz-appearance:none;&:focus{outline:none;box-shadow:0 0 1px 3px var(--select-accent);box-shadow:0 0 0 3px -moz-mac-focusring}& option[data-astro-cid-ypkzidg4]{cursor:pointer;color:var(--txt-option);text-align:left}}}@media (450px <= width <= 834px){.main-container[data-astro-cid-ypkzidg4]{display:flex;flex-direction:column;justify-content:center;align-items:center}.container-main[data-astro-cid-ypkzidg4]{width:100%}.container-element[data-astro-cid-ypkzidg4]{padding:3rem 0}.time-controls[data-astro-cid-ypkzidg4]{font-size:.955rem;gap:.5rem;padding:.5rem;& input[data-astro-cid-ypkzidg4]{width:4.5rem;height:1.5rem}}}@media (350px <= width <= 450px){.main-container[data-astro-cid-ypkzidg4]{display:flex;flex-direction:column;justify-content:center;align-items:center}.container-main[data-astro-cid-ypkzidg4]{width:85%}.container-element[data-astro-cid-ypkzidg4]{padding:3rem 0;display:flex;flex-direction:column;justify-content:center;align-items:center;& p[data-astro-cid-ypkzidg4]{font-size:1.8rem}& button[data-astro-cid-ypkzidg4]{padding:.5rem 1rem}}.time-controls[data-astro-cid-ypkzidg4]{font-size:.75rem;gap:.5rem;padding:.5rem;& input[data-astro-cid-ypkzidg4]{width:2rem;height:.5rem}}}@media (max-width: 350px){.container-element[data-astro-cid-ypkzidg4]{padding:3rem 0;color:#113b3a;& p[data-astro-cid-ypkzidg4]{font-size:1.8rem}& button[data-astro-cid-ypkzidg4]{padding:.5rem 1rem}}}main[data-astro-cid-j7pv25f6]{background-color:var(--bg-color);width:100dvw;height:100dvh;display:flex;position:relative;justify-content:center;align-items:center}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/media/enzo/Datos/githubs projects/countdown-astro/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/media/enzo/Datos/githubs projects/countdown-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/media/enzo/Datos/githubs projects/countdown-astro/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/media/enzo/Datos/githubs projects/countdown-astro/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_BZZPP7w2.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.iuWIjVuj.js","/astro/hoisted.js?q=0":"_astro/hoisted.5ej3APiz.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DEFl2aVO.css","/favicon.svg","/logo.png","/_astro/client.5I5BMcNS.js","/_astro/hoisted.5ej3APiz.js","/_astro/hoisted.iuWIjVuj.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"RXqGHrQSueC2QIHta/ACRylkbAHxjrCRbLYpS18H9N4=","experimentalEnvGetSecretEnabled":false});

export { manifest };
