if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),c={module:{uri:t},exports:o,require:d};s[t]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-18c991ae.css",revision:null},{url:"assets/index-2b12945e.js",revision:null},{url:"index.html",revision:"401e1e3f1109660eaa995e217dfc2d32"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/android-chrome-192x192.png",revision:"97569a67a7cc0a9ac4e83ff86244b20b"},{url:"assets/images/android-chrome-512x512.png",revision:"15ed35a32f08070ce48c01c8f318f3fa"},{url:"manifest.webmanifest",revision:"d605592790764df2c406a8e5fbdfc2d6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
