window.throttle=(t,o)=>{let n,s;return(...e)=>{const r=this;if(!s||Date.now()-s>=o){t.apply(r,e);s=Date.now()}else{clearTimeout(n);n=setTimeout(()=>{t.apply(r,e);s=Date.now()},o-(Date.now()-s))}}};(function(){[Element,Document,Window].forEach(e=>{e.prototype._addEventListener=e.prototype.addEventListener;e.prototype._removeEventListener=e.prototype.removeEventListener;e.prototype.addEventListener=e.prototype.on=function(t,o,n){this.__listeners__=this.__listeners__||{};this.__listeners__[t]=this.__listeners__[t]||[];for(let[e,r]of this.__listeners__[t]){if(e===o&&JSON.stringify(r)===JSON.stringify(n)){return this}}this.__listeners__[t].push([o,n]);this._addEventListener(t,o,n);return this};e.prototype.removeEventListener=e.prototype.off=function(t,o,n){if(!this.__listeners__||!this.__listeners__[t]){return this}if(!o){this.__listeners__[t].forEach(([e,r])=>{this.removeEventListener(t,e,r)});delete this.__listeners__[t];return this}this._removeEventListener(t,o,n);this.__listeners__[t]=this.__listeners__[t].filter(([e,r])=>e!==o||JSON.stringify(r)!==JSON.stringify(n));if(this.__listeners__[t].length===0){delete this.__listeners__[t]}return this}});window._$=e=>document.querySelector(e);window._$$=e=>document.querySelectorAll(e);const o=document.createElement("a");o.className="nav-icon dark-mode-btn";_$("#sub-nav").append(o);const n=window.matchMedia("(prefers-color-scheme: dark)").matches;function t(e){const r=e==="auto";const t=e==="true"||r&&n;document.documentElement.setAttribute("data-theme",t?"dark":null);localStorage.setItem("dark_mode",e);o.id=`nav-${e==="true"?"moon":e==="false"?"sun":"circle-half-stroke"}-btn`;document.body.dispatchEvent(new CustomEvent("reimu:theme-set",{detail:{isDark:t,mode:e}}))}const e=localStorage.getItem("dark_mode")||document.documentElement.getAttribute("data-theme-mode")||"auto";t(e);o.addEventListener("click",throttle(()=>{const e=["auto","false","true"];const r=e[(e.indexOf(localStorage.getItem("dark_mode"))+1)%3];t(r)},1e3));let s=0;document.addEventListener("scroll",()=>{let e=document.documentElement.scrollTop||document.body.scrollTop;const r=e-s;window.diffY=r;s=e;if(r<0){_$("#header-nav").classList.remove("header-nav-hidden")}else{_$("#header-nav").classList.add("header-nav-hidden")}});if(window.Pace){Pace.on("done",()=>{Pace.sources[0].elements=[]})}if(window.materialTheme){const d=new materialTheme.ColorThemeExtractor({needTransition:false});function i(){const e=_$("#reimu-generated-theme-style");if(e){return}const r=`
    :root {
      --red-0: var(--md-sys-color-primary-light);
      --red-1: color-mix(in srgb, var(--md-sys-color-primary-light) 90%, white);
      --red-2: color-mix(in srgb, var(--md-sys-color-primary-light) 75%, white);
      --red-3: color-mix(in srgb, var(--md-sys-color-primary-light) 55%, white);
      --red-4: color-mix(in srgb, var(--md-sys-color-primary-light) 40%, white);
      --red-5: color-mix(in srgb, var(--md-sys-color-primary-light) 15%, white);
      --red-5-5: color-mix(in srgb, var(--md-sys-color-primary-light) 10%, white);
      --red-6: color-mix(in srgb, var(--md-sys-color-primary-light) 5%, white);
    
      --color-border: var(--red-3);
      --color-link: var(--red-1);
      --color-meta-shadow: var(--red-6);
      --color-h2-after: var(--red-1);
      --color-red-6-shadow: var(--red-2);
      --color-red-3-shadow: var(--red-3);
    }
    
    [data-theme="dark"]:root {
      --red-0: var(--red-1);
      --red-1: color-mix(in srgb, var(--md-sys-color-primary-dark) 90%, white);
      --red-2: color-mix(in srgb, var(--md-sys-color-primary-dark) 80%, white);
      --red-3: color-mix(in srgb, var(--md-sys-color-primary-dark) 75%, white);
      --red-4: color-mix(in srgb, var(--md-sys-color-primary-dark) 30%, transparent);
      --red-5: color-mix(in srgb, var(--md-sys-color-primary-dark) 20%, transparent);
      --red-5-5: color-mix(in srgb, var(--md-sys-color-primary-dark) 10%, transparent);
      --red-6: color-mix(in srgb, var(--md-sys-color-primary-dark) 5%, transparent);
      
      --color-border: var(--red-5);
    }
    `;const t=document.createElement("style");t.id="reimu-generated-theme-style";t.textContent=r;document.body.appendChild(t)}async function a(e){const r=await d.generateThemeSchemeFromImage(e);document.documentElement.style.setProperty("--md-sys-color-primary-light",d.hexFromArgb(r.schemes.light.props.primary));document.documentElement.style.setProperty("--md-sys-color-primary-dark",d.hexFromArgb(r.schemes.dark.props.primary));const t=_$("#reimu-generated-theme-style");if(t){return}i()}window.generateSchemeHandler=()=>{if(window.bannerElement?.src){if(window.bannerElement.complete){a(bannerElement)}else{window.bannerElement.addEventListener("load",()=>{a(bannerElement)},{once:true})}}else if(window.bannerElement?.style.background){const e=window.bannerElement.style.background.match(/\d+/g);const r=d.generateThemeScheme({r:parseInt(e[0]),g:parseInt(e[1]),b:parseInt(e[2])});document.documentElement.style.setProperty("--md-sys-color-primary-light",d.hexFromArgb(r.schemes.light.props.primary));document.documentElement.style.setProperty("--md-sys-color-primary-dark",d.hexFromArgb(r.schemes.dark.props.primary));i()}}}})();var safeImport=async(e,r)=>{if(!r){return import(e)}const t=await fetch(e);const o=await t.text();const n=await crypto.subtle.digest("SHA-384",(new TextEncoder).encode(o));const s="sha384-"+btoa(String.fromCharCode(...new Uint8Array(n)));if(s!==r){throw new Error(`Integrity check failed for ${e}`)}const i=new Blob([o],{type:"application/javascript"});const a=URL.createObjectURL(i);const d=await import(a);URL.revokeObjectURL(a);return d};