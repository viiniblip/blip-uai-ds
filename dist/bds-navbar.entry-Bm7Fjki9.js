import { h, H as Host, g as getElement, r as registerInstance } from "./index-C5zPPjub.js";
var navbarCss = ":host{display:-ms-flexbox;display:flex}:host(.horizontal){width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}:host(.vertical){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:100%}.navbar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;gap:8px;-webkit-box-sizing:border-box;box-sizing:border-box}.navbar ::slotted(*){display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center}.navbar__justify-content__flex-start{-ms-flex-pack:start;justify-content:flex-start}.navbar__justify-content__center{-ms-flex-pack:center;justify-content:center}.navbar__justify-content__flex-end{-ms-flex-pack:end;justify-content:flex-end}.navbar__justify-content__space-between{-ms-flex-pack:justify;justify-content:space-between}.navbar__justify-content__space-around{-ms-flex-pack:distribute;justify-content:space-around}.navbar__justify-content__space-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.navbar__orientation__horizontal{-ms-flex-direction:row;flex-direction:row;width:100%;padding:8px 16px}.navbar__orientation__horizontal ::slotted(*){-ms-flex-direction:row;flex-direction:row}.navbar__orientation__vertical{-ms-flex-direction:column;flex-direction:column;height:100%;padding:16px 8px}.navbar__orientation__vertical ::slotted(*){-ms-flex-direction:column;flex-direction:column}.navbar__background-color__surface-1{background-color:var(--color-surface-1, rgb(246, 246, 246))}.navbar__background-color__surface-2{background-color:var(--color-surface-2, rgb(237, 237, 237))}.navbar__background-color__surface-3{background-color:var(--color-surface-3, rgb(227, 227, 227))}.navbar__background-color__surface-4{background-color:var(--color-surface-4, rgb(20, 20, 20))}";
var Navbar = function() {
  function t(t2) {
    registerInstance(this, t2);
    this.orientation = "vertical";
    this.backgroundColor = "surface-1";
    this.justifyContent = "space-between";
    this.dataTest = null;
  }
  t.prototype.render = function() {
    var t2, e;
    return h(Host, { key: "36cca0c4ec6ea545480f52e0270f437228782839", class: (t2 = {}, t2["".concat(this.orientation)] = true, t2) }, h("div", { key: "8db37d28f331ab0cf9200397ba1a87ae89f4a335", class: (e = { navbar: true }, e["navbar__justify-content__".concat(this.justifyContent)] = true, e["navbar__orientation__".concat(this.orientation)] = true, e["navbar__background-color__".concat(this.backgroundColor)] = true, e), "data-test": this.dataTest }, h("slot", { key: "ae02b5f18e593e465bc7997345c1c197f46038f7" })));
  };
  Object.defineProperty(t.prototype, "hostElement", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  return t;
}();
Navbar.style = navbarCss;
export {
  Navbar as bds_navbar
};
//# sourceMappingURL=bds-navbar.entry-Bm7Fjki9.js.map
