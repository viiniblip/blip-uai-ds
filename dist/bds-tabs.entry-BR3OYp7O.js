import { h, H as Host, g as getElement, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var tabsCss = ".bds-tabs{width:100%;display:-ms-flexbox;display:flex;z-index:1100;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;height:48px;padding:0 10px 0 10px}.bds-tabs--center{-ms-flex-pack:center;justify-content:center}.bds-tabs--left{-ms-flex-pack:start;justify-content:flex-start}.bds-tabs--right{-ms-flex-pack:end;justify-content:flex-end}.bds-tabs .bds-tabs__header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;overflow:hidden;-ms-flex-align:stretch;align-items:stretch;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.bds-tabs .bds-tabs__header-button-container{padding:0px;min-width:40px}";
var Tabs = function() {
  function t(t2) {
    var e = this;
    registerInstance(this, t2);
    this.scrollButtonClick = createEvent(this, "scrollButtonClick");
    this.bdsTabInit = createEvent(this, "bdsTabInit");
    this.SCROLL_BEHAVIOR = "smooth";
    this.align = "center";
    this.handleHeaderResize = function() {
      if (e.tabsHeaderChildElement.offsetWidth < e.tabsHeaderChildElement.scrollWidth) {
        e.updateButtonsVisibility(true);
      } else {
        e.updateButtonsVisibility(false);
      }
    };
    this.updateButtonsVisibility = function(t3) {
      e.setLeftButtonVisibility(t3);
      e.setRightButtonVisibility(t3);
    };
    this.handleScrollButtonClick = function(t3) {
      e.scrollButtonClick.emit({ direction: t3 });
    };
  }
  t.prototype.onScrollButtonClick = function(t2) {
    var e;
    t2.preventDefault();
    var s = { behavior: this.SCROLL_BEHAVIOR, top: 0, left: t2.detail.distance };
    (e = s.left) !== null && e !== void 0 ? e : s.left = this.getDistance(s, t2);
    this.tabsHeaderChildElement.scrollTo(s);
  };
  t.prototype.onSelectedTab = function(t2) {
    this.handleButtonOverlay(t2.detail);
  };
  t.prototype.componentDidLoad = function() {
    this.getChildElements();
    this.attachEvents();
    this.setLeftButtonVisibility(false);
    this.setRightButtonVisibility(true);
    this.handleActiveTab();
  };
  t.prototype.handleActiveTab = function() {
    var t2 = Array.from(this.tabsHeaderChildElement.getElementsByTagName("bds-tab"));
    var e = t2.find(function(t3) {
      return t3.active;
    });
    if (e) {
      this.bdsTabInit.emit(e.group);
    } else {
      var s = t2[0];
      this.bdsTabInit.emit(s.group);
    }
  };
  t.prototype.getChildElements = function() {
    this.tabsHeaderChildElement = this.el.querySelector(".bds-tabs__header");
    this.leftButtonChildElement = this.el.querySelector("#bds-tabs-button-left");
    this.rightButtonChildElement = this.el.querySelector("#bds-tabs-button-right");
  };
  t.prototype.attachEvents = function() {
    var t2 = this;
    window.onresize = this.handleHeaderResize;
    this.tabsHeaderChildElement.onscroll = function() {
      return t2.updateButtonsVisibility(t2.tabsHeaderChildElement.scrollWidth > t2.tabsHeaderChildElement.clientWidth);
    };
  };
  t.prototype.setRightButtonVisibility = function(t2) {
    if (t2 && this.tabsHeaderChildElement.scrollWidth > Math.ceil(this.tabsHeaderChildElement.scrollLeft + this.tabsHeaderChildElement.clientWidth)) {
      this.rightButtonChildElement.style.display = "block";
    } else {
      this.rightButtonChildElement.style.display = "none";
    }
  };
  t.prototype.setLeftButtonVisibility = function(t2) {
    this.leftButtonChildElement.style.display = this.tabsHeaderChildElement.scrollLeft > 0 && t2 ? "block" : "none";
  };
  t.prototype.handleButtonOverlay = function(t2) {
    var e = this;
    var s = Array.from(this.tabsHeaderChildElement.getElementsByTagName("bds-tab")).find(function(e2) {
      return e2.group == t2;
    });
    var i = [this.leftButtonChildElement, this.rightButtonChildElement];
    i.forEach(function(t3) {
      if (e.isButtonOverlappingTab(t3, s)) {
        var i2 = e.getAdjutScrollDistance(t3, s);
        e.scrollButtonClick.emit({ distance: i2 });
      }
    });
  };
  t.prototype.isButtonOverlappingTab = function(t2, e) {
    var s = e.getBoundingClientRect();
    var i = t2.getBoundingClientRect();
    return this.elementIsOverlapping(i, s);
  };
  t.prototype.elementIsOverlapping = function(t2, e) {
    var s = t2.x;
    var i = t2.x + t2.width;
    var n = e.x;
    var a = e.x + e.width;
    return s >= n && s <= a || i >= n && i <= a;
  };
  t.prototype.getAdjutScrollDistance = function(t2, e) {
    var s = t2.id == "bds-tabs-button-left" ? "left" : "right";
    var i = e.clientWidth + parseInt(getComputedStyle(e).marginRight) - t2.offsetWidth;
    if (s == "right") {
      return e.parentElement.scrollLeft + i;
    } else {
      return e.parentElement.scrollLeft - i;
    }
  };
  t.prototype.getDistance = function(t2, e) {
    return e.detail.direction == "right" ? t2.left = this.tabsHeaderChildElement.scrollLeft + this.tabsHeaderChildElement.clientWidth : t2.left = this.tabsHeaderChildElement.scrollLeft - this.tabsHeaderChildElement.clientWidth;
  };
  t.prototype.render = function() {
    var t2;
    var e = this;
    return h(Host, { key: "d72b623b0f4f74cd8c732dc180945ae9720982b3", class: (t2 = { "bds-tabs": true }, t2["bds-tabs--".concat(this.align)] = true, t2) }, h("div", { key: "a10e1ab6e8050536d5a63de478e1734600524200", class: "bds-tabs__header-button-container" }, h("bds-button-icon", { key: "df38ce90080f6a6d4efcea5f5544c31ac9c789af", class: "bds-tabs__header-button", icon: "arrow-left", size: "short", id: "bds-tabs-button-left", onClick: function() {
      return e.handleScrollButtonClick("left");
    }, variant: "secondary" })), h("div", { key: "396ab75ed389a54d52a6b86cae3bbc6037f4c738", class: "bds-tabs__header" }, h("slot", { key: "fe01e9b24ecb35ee2400e4d490b268c2258da2b8" })), h("div", { key: "6a88ef7447c43e90d6f5342958a5d42c394e7590", class: "bds-tabs__header-button-container" }, h("bds-button-icon", { key: "aa686b62cf5a15c9293b45c3c051690431670ad8", class: "bds-tabs__header-button", icon: "arrow-right", size: "short", id: "bds-tabs-button-right", onClick: function() {
      return e.handleScrollButtonClick("right");
    }, variant: "secondary" })));
  };
  Object.defineProperty(t.prototype, "el", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  return t;
}();
Tabs.style = tabsCss;
export {
  Tabs as bds_tabs
};
//# sourceMappingURL=bds-tabs.entry-BR3OYp7O.js.map
