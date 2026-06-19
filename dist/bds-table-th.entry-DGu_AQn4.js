import { h, H as Host, g as getElement, r as registerInstance } from "./index-C5zPPjub.js";
var tableHeaderCellCss = '.sc-bds-table-th-h{display:table-cell;padding:0px 8px}.th_cell.sc-bds-table-th{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:64px;gap:8px;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;-webkit-box-sizing:border-box;box-sizing:border-box}.th_cell--sortable-true.sc-bds-table-th:hover,.th_cell--sortable-false.sc-bds-table-th:hover{cursor:pointer}.justify--left.sc-bds-table-th{-ms-flex-pack:start;justify-content:flex-start}.justify--center.sc-bds-table-th{-ms-flex-pack:center;justify-content:center}.justify--right.sc-bds-table-th{-ms-flex-pack:end;justify-content:flex-end}.dense-th.sc-bds-table-th{min-height:48px;height:auto}.sc-bds-table-th-h:first-child{padding-left:16px}.sc-bds-table-th-h:last-child{padding-right:16px}';
var TableHeaderCell = function() {
  function e(e2) {
    registerInstance(this, e2);
    this.isDense = false;
    this.sortable = false;
    this.arrow = "";
    this.justifyContent = "left";
  }
  e.prototype.componentWillLoad = function() {
    var e2 = this.element.closest("bds-table");
    if (e2 && (e2.getAttribute("dense-table") === "true" || e2.denseTable === true)) {
      this.isDense = true;
    }
  };
  e.prototype.render = function() {
    var e2;
    return h(Host, { key: "09da6cc9fbdb19a0d8b92febe0c692ceb1ebc5d4" }, h("div", { key: "241b707372284075fd46bc1c16f036e2a87eaef9", class: (e2 = { th_cell: true }, e2["th_cell--sortable-".concat(this.sortable)] = true, e2["dense-th"] = this.isDense, e2["justify--".concat(this.justifyContent)] = true, e2) }, h("bds-typo", { key: "f28cbf94ace5351291094fe1e20e5813ade61341", bold: this.sortable ? "bold" : "semi-bold", variant: "fs-14" }, h("slot", { key: "c802902e4344d0ae247eb8f3187f0a207ce0bcee" })), this.sortable ? h("bds-icon", { size: "small", name: this.arrow === "asc" ? "arrow-down" : this.arrow === "dsc" ? "arrow-up" : "" }) : ""));
  };
  Object.defineProperty(e.prototype, "element", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  return e;
}();
TableHeaderCell.style = tableHeaderCellCss;
export {
  TableHeaderCell as bds_table_th
};
//# sourceMappingURL=bds-table-th.entry-DGu_AQn4.js.map
