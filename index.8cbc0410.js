var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire31b8;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},e.parcelRequire31b8=t),t.register("krGWQ",(function(e,n){var o,t,r,l;o=e.exports,t="refs",r=function(){return d},Object.defineProperty(o,t,{get:r,set:l,enumerable:!0,configurable:!0});const d={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".menu-list"),openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")}}));var r=t("krGWQ");(()=>{function e(){r.refs.menu.classList.toggle("is-hidden"),r.refs.body.classList.toggle("no-scroll")}r.refs.openMenuBtn.addEventListener("click",e),r.refs.closeMenuBtn.addEventListener("click",e)})();
//# sourceMappingURL=index.8cbc0410.js.map