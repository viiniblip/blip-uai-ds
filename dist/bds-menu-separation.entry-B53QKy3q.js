import { h, r as registerInstance } from "./index-C5zPPjub.js";
var menuSeparationCss = ".menuseparation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 16px}.menuseparation__small{margin:8px 0}.menuseparation__default{margin:12px 0}.menuseparation__large{margin:16px 0}.menuseparation .dividor-item{height:1px;width:100%;background-color:#d4d4d4}.menuseparation .title-item{margin-right:8px;margin-top:-4px;color:#6e7b91}";
var BdsMenuSeparation = function() {
  function e(e2) {
    registerInstance(this, e2);
    this.value = null;
    this.size = null;
  }
  e.prototype.render = function() {
    var e2;
    return h("div", { key: "3aabfb5b93571fc6cffded9393e2ed6f0088e6f5", class: (e2 = { menuseparation: true }, e2["menuseparation__".concat(this.size)] = true, e2) }, this.value && h("bds-typo", { key: "3b418384cac21264f22c04a53eef008a55c13f74", class: "title-item", variant: "fs-10", tag: "span" }, this.value), h("div", { key: "746b0b0b51a9ffad2ef749b33e61c21b43a711be", class: "dividor-item" }));
  };
  return e;
}();
BdsMenuSeparation.style = menuSeparationCss;
export {
  BdsMenuSeparation as bds_menu_separation
};
//# sourceMappingURL=bds-menu-separation.entry-B53QKy3q.js.map
