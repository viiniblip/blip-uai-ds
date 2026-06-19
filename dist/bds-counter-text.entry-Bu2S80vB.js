import { h, r as registerInstance } from "./index-C5zPPjub.js";
var CounterTextState;
(function(t) {
  t["Default"] = "default";
  t["Warning"] = "warning";
  t["Delete"] = "delete";
})(CounterTextState || (CounterTextState = {}));
var counterTextCss = ".counter-text{background:var(--color-surface-2, rgb(237, 237, 237));color:var(--color-content-disable, rgb(89, 89, 89));-webkit-box-sizing:content-box;box-sizing:content-box;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:11px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.counter-text--active{background:var(--color-system, rgb(178, 223, 253));color:var(--color-content-din, rgb(0, 0, 0))}.counter-text--warning{background:var(--color-warning, rgb(253, 233, 155));color:var(--color-content-din, rgb(0, 0, 0))}.counter-text--delete{background:var(--color-delete, rgb(230, 15, 15));color:var(--color-content-bright, rgb(255, 255, 255))}";
var CounterText = function() {
  function t(t2) {
    registerInstance(this, t2);
    this.active = false;
    this.warning = { max: 20, min: 2 };
    this.delete = { max: 1, min: 0 };
  }
  t.prototype.getState = function() {
    var t2 = this.getActualLength();
    if (t2 >= this.warning.min && t2 <= this.warning.max) {
      return CounterTextState.Warning;
    }
    if (t2 <= this.delete.max) {
      return CounterTextState.Delete;
    }
    return CounterTextState.Default;
  };
  t.prototype.getActualLength = function() {
    return this.max - this.length;
  };
  t.prototype.render = function() {
    var t2;
    var e = this.getState();
    var r = this.getActualLength();
    return h("div", { key: "eb0ee66e83bb3d4d0755d58b9887bafedffe962f", class: (t2 = { "counter-text": true, "counter-text--active": this.active }, t2["counter-text--".concat(e)] = true, t2) }, h("bds-typo", { key: "8e07b48242309ee2d5047f21bede2f0f68f06771", variant: "fs-10" }, r));
  };
  return t;
}();
CounterText.style = counterTextCss;
export {
  CounterText as bds_counter_text
};
//# sourceMappingURL=bds-counter-text.entry-Bu2S80vB.js.map
