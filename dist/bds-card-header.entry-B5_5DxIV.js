import { h, r as registerInstance } from "./index-C5zPPjub.js";
var cardHeaderCss = ":host{width:100%}";
var CardHeader = function() {
  function e(e2) {
    registerInstance(this, e2);
    this.align = "space-between";
  }
  e.prototype.render = function() {
    return h("bds-grid", { key: "35e82fd0bef4b8b877ba5872e4e67fe488f361ea", xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, h("slot", { key: "23dccd08124c47a7dc509aaf5c6259fd2addac48" }));
  };
  return e;
}();
CardHeader.style = cardHeaderCss;
export {
  CardHeader as bds_card_header
};
//# sourceMappingURL=bds-card-header.entry-B5_5DxIV.js.map
