import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{P as o,t as m}from"./assets/vendor-5b681ac7.js";const i=document.querySelector("iframe"),e=new o(i);let t="videoplayer-current-time";const n=m(a,1e3);e.on("timeupdate",n);function a({seconds:r}){localStorage.setItem(t,`${r}`)}const c=localStorage.getItem(t);e.setCurrentTime(Number(c));
//# sourceMappingURL=commonHelpers2.js.map