import { h, H as Host, r as registerInstance } from "./index-C5zPPjub.js";
var tabPanelCss = '.bds-tab-panel{display:none;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:1rem;font-style:normal;font-weight:normal}.bds-tab-panel--selected{display:block}';
var TabPanel = function() {
  function a(a2) {
    registerInstance(this, a2);
    this.isActive = false;
  }
  a.prototype.handleTabChange = function(a2) {
    this.isActive = a2.detail == this.group;
  };
  a.prototype.render = function() {
    var a2;
    return h(Host, { key: "2cb4066270fc5ca03707d1e9e81da301d9ce46d6", class: (a2 = { "bds-tab-panel": true }, a2["bds-tab-panel--selected"] = this.isActive, a2) }, h("slot", { key: "1dfd4ccfb46ae9e1ab2fbda3b18241884b842ef3" }));
  };
  return a;
}();
TabPanel.style = tabPanelCss;
export {
  TabPanel as bds_tab_panel
};
//# sourceMappingURL=bds-tab-panel.entry-0MLmsEae.js.map
