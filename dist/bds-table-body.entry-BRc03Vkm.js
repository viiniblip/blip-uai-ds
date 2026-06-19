import { h, H as Host, g as getElement, r as registerInstance } from "./index-C5zPPjub.js";
var tableBodyCss = ".sc-bds-table-body-h{display:table-row-group;height:64px}.multiple.sc-bds-table-body-h{border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.sc-bds-table-body-h:last-child{border-bottom:none}";
var TableBody = function() {
  function e(e2) {
    registerInstance(this, e2);
    this.multipleRows = false;
  }
  e.prototype.componentWillLoad = function() {
    var e2 = this.element.closest("bds-table");
    if (e2 && (e2.getAttribute("collapse") === "true" || e2.collapse === true)) {
      this.multipleRows = true;
    }
  };
  e.prototype.render = function() {
    return h(Host, { key: "6fd4435dd90fba8dbdf3ec4cf22b128a27869818", class: { host: true, multiple: this.multipleRows } }, h("slot", { key: "3b8c873e9c861b5e6b39b46f8f9097d342d2681d" }));
  };
  Object.defineProperty(e.prototype, "element", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  return e;
}();
TableBody.style = tableBodyCss;
export {
  TableBody as bds_table_body
};
//# sourceMappingURL=bds-table-body.entry-BRc03Vkm.js.map
