import { h, H as Host, g as getElement, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var tabGroupCss = ':host{display:block;width:100%}.tab_group{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative}.tab_group__header{padding:4px 16px;overflow:hidden}.tab_group__header__itens{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:-webkit-max-content;width:-moz-max-content;width:max-content;gap:32px;margin:auto}.tab_group__header__itens__center{-ms-flex-pack:center;justify-content:center;margin:auto}.tab_group__header__itens__right{-ms-flex-pack:right;justify-content:right;margin:0 0 0 auto}.tab_group__header__itens__left{-ms-flex-pack:left;justify-content:left;margin:0 auto 0 0}.tab_group__header__itens__item{cursor:pointer;height:46px;gap:4px;width:auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-bottom:2px solid transparent;position:relative}.tab_group__header__itens__item__typo{color:var(--color-content-disable, rgb(89, 89, 89))}.tab_group__header__itens__item__typo__disable{color:var(--color-content-ghost, rgb(140, 140, 140))}.tab_group__header__itens__item__typo__error{color:var(--color-surface-negative, rgb(138, 0, 0))}.tab_group__header__itens__item::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.tab_group__header__itens__item:focus-visible{outline:none}.tab_group__header__itens__item:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.tab_group__header__itens__item__open{color:var(--color-content-default, rgb(40, 40, 40));border-color:var(--color-primary, rgb(30, 107, 241))}.tab_group__header__itens__item__disable{cursor:no-drop}.tab_group__slide{position:relative;overflow:hidden;padding:0 16px;height:54px;margin-left:56px;margin-right:56px}.tab_group__slide-button{position:absolute;z-index:1;background-color:var(--color-surface-1, rgb(246, 246, 246))}.tab_group__slide-button[icon=arrow-left]{left:0}.tab_group__slide-button[icon=arrow-right]{right:0}.tab_group__slide__itens{position:absolute;left:56px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:48px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;padding:4px;gap:32px;-webkit-transition:left 0.5s;-moz-transition:left 0.5s;transition:left 0.5s}.tab_group__content{height:100%}.tab_group__scrolled{-ms-flex-negative:999;flex-shrink:999;overflow:auto}.tab_group__scrolled::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.tab_group__scrolled::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}';
var BdsTabGroup = function() {
  function t(t2) {
    var e = this;
    registerInstance(this, t2);
    this.bdsTabChange = createEvent(this, "bdsTabChange");
    this.bdsTabDisabled = createEvent(this, "bdsTabDisabled");
    this.tabItensElement = null;
    this.tabItensSlideElement = null;
    this.isSlideTabs = false;
    this.alignTab = "left";
    this.tabRefSlide = 0;
    this.positionLeft = 0;
    this.contentScrollable = true;
    this.align = "center";
    this.dtButtonPrev = null;
    this.dtButtonNext = null;
    this.getEventsDisable = function(t3) {
      t3.forEach(function(t4) {
        t4.addEventListener("tabDisabled", function() {
          e.setInternalItens(Array.from(e.tabItensElement));
        }, false);
      });
    };
    this.checkSlideTabs = function() {
      var t3, i;
      if (e.headerElement || e.headerSlideElement) {
        if (((t3 = e.headerSlideElement) === null || t3 === void 0 ? void 0 : t3.offsetWidth) > ((i = e.headerElement) === null || i === void 0 ? void 0 : i.offsetWidth)) {
          return true;
        }
      }
    };
    this.setFirstActive = function() {
      var t3 = Array.from(e.tabItensElement).filter(function(t4) {
        return t4.open;
      });
      if (!t3.length) {
        e.tabItensElement[0].open = true;
      }
    };
    this.setnumberElement = function() {
      for (var t3 = 0; t3 < e.tabItensElement.length; t3++) {
        e.tabItensElement[t3].numberElement = t3;
      }
    };
    this.setInternalItens = function(t3) {
      var i = t3.map(function(t4, e2) {
        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ label: t4.label, open: t4.open, numberElement: e2, badge: t4.badge }, t4.disable !== void 0 && { disable: t4.disable }), t4.error !== void 0 && { error: t4.error }), t4.headerStyle !== void 0 && { headerStyle: t4.headerStyle }), t4.contentStyle !== void 0 && { contentStyle: t4.contentStyle }), t4.icon !== void 0 && { icon: t4.icon }), t4.iconPosition !== void 0 && { iconPosition: t4.iconPosition }), t4.iconTheme !== void 0 && { iconTheme: t4.iconTheme }), t4.badgeShape !== void 0 && { badgeShape: t4.badgeShape }), t4.badgeColor !== void 0 && { badgeColor: t4.badgeColor }), t4.badgeIcon !== void 0 && { badgeIcon: t4.badgeIcon }), t4.badgeAnimation !== void 0 && { badgeAnimation: t4.badgeAnimation }), t4.badgeNumber !== void 0 && { badgeNumber: t4.badgeNumber }), t4.badgePosition !== void 0 && { badgePosition: t4.badgePosition }), t4.dataTest !== void 0 && { dataTest: t4.dataTest });
      });
      return e.internalItens = i;
    };
    this.handleClick = function(t3) {
      var i = e.internalItens.map(function(t4) {
        return { label: t4.label, open: false, numberElement: t4.numberElement };
      });
      e.internalItens = i;
      for (var r = 0; r < e.tabItensElement.length; r++) {
        if (e.tabItensElement[r].numberElement != t3) {
          e.tabItensElement[r].open = false;
        } else {
          e.tabItensElement[r].open = true;
          e.bdsTabChange.emit(e.tabItensElement[r]);
        }
      }
    };
    this.refHeaderElement = function(t3) {
      e.headerElement = t3;
    };
    this.refHeaderSlideElement = function(t3) {
      e.headerSlideElement = t3;
    };
    this.handleDisabled = function(t3) {
      e.bdsTabDisabled.emit(e.tabItensElement[t3]);
    };
    this.nextSlide = function() {
      var t3, i, r, n, o;
      var a = ((t3 = e.headerElement) === null || t3 === void 0 ? void 0 : t3.offsetWidth) - ((i = e.headerSlideElement) === null || i === void 0 ? void 0 : i.offsetWidth);
      var s = ((r = e.headerSlideElement) === null || r === void 0 ? void 0 : r.offsetWidth) / ((n = e.headerElement) === null || n === void 0 ? void 0 : n.offsetWidth);
      var _ = parseInt(s.toString());
      var d = e.positionLeft - ((o = e.headerElement) === null || o === void 0 ? void 0 : o.offsetWidth);
      e.positionLeft = d < a ? a : d;
      e.alignTab = d < a ? "right" : "scrolling";
      e.tabRefSlide = _ <= e.tabRefSlide ? e.tabRefSlide + 1 : _;
    };
    this.prevSlide = function() {
      var t3, i, r;
      var n = ((t3 = e.headerSlideElement) === null || t3 === void 0 ? void 0 : t3.offsetWidth) / ((i = e.headerElement) === null || i === void 0 ? void 0 : i.offsetWidth);
      var o = parseInt(n.toString());
      var a = e.positionLeft + ((r = e.headerElement) === null || r === void 0 ? void 0 : r.offsetWidth);
      e.positionLeft = a > 0 ? 0 : a;
      e.alignTab = a > 0 ? "left" : "scrolling";
      e.tabRefSlide = o <= e.tabRefSlide ? e.tabRefSlide - 1 : o;
    };
    this.renderIcon = function(t3, e2, i, r) {
      return h("bds-icon", { class: { tab_group__header__itens__item__typo__disable: i, tab_group__header__itens__item__typo__error: r }, size: "x-small", name: t3, theme: e2 });
    };
    this.renderBadge = function(t3, e2, i, r, n) {
      return h("bds-grid", { "justify-content": "center" }, h("bds-badge", { color: e2, icon: i, number: n, shape: t3, animation: r }));
    };
  }
  t.prototype.componentWillRender = function() {
    this.tabItensElement = this.element.getElementsByTagName("bds-tab-item");
    this.setnumberElement();
    this.setFirstActive();
    this.setInternalItens(Array.from(this.tabItensElement));
    this.getEventsDisable(Array.from(this.tabItensElement));
  };
  t.prototype.componentDidLoad = function() {
    this.tabItensSlideElement = this.element.shadowRoot.querySelectorAll(".tab_group__header__itens__item");
  };
  t.prototype.connectedCallback = function() {
    var t2 = this;
    this.isSlide = window.setInterval(function() {
      t2.isSlideTabs = t2.checkSlideTabs();
    }, 100);
  };
  t.prototype.disconnectedCallback = function() {
    window.clearInterval(this.isSlide);
  };
  t.prototype.handleKeyDown = function(t2, e) {
    if (t2.key == "Enter") {
      e.disable ? this.handleDisabled(e.numberElement) : this.handleClick(e.numberElement);
    }
    if (t2.key == "ArrowRight") {
      this.tabItensSlideElement[e.numberElement + 1].focus();
    }
    if (t2.key == "ArrowLeft") {
      this.tabItensSlideElement[e.numberElement - 1].focus();
    }
  };
  t.prototype.parseInlineStyle = function(t2) {
    if (!t2) return {};
    return t2.split(";").filter(function(t3) {
      return t3.trim();
    }).reduce(function(t3, e) {
      var i = e.split(":").map(function(t4) {
        return t4.trim();
      }), r = i[0], n = i[1];
      if (r && n) {
        var o = r.replace(/-([a-z])/g, function(t4) {
          return t4[1].toUpperCase();
        });
        t3[o] = n;
      }
      return t3;
    }, {});
  };
  t.prototype.render = function() {
    var t2;
    var e = this;
    var i;
    var r = { left: "".concat(this.positionLeft, "px") };
    var n = (i = this.internalItens) === null || i === void 0 ? void 0 : i.find(function(t3) {
      return t3.open;
    });
    var o = (n === null || n === void 0 ? void 0 : n.headerStyle) ? this.parseInlineStyle(n.headerStyle) : {};
    var a = (n === null || n === void 0 ? void 0 : n.contentStyle) ? this.parseInlineStyle(n.contentStyle) : {};
    return h(Host, { key: "c4b6f3a649c24d0eccdf10f0a7d8af8419c2d48d" }, h("div", { key: "e72cdbb7df4d4ae377d553dbf0c549c73c52faf2", class: { tab_group: true } }, this.isSlideTabs && this.alignTab != "left" && h("bds-button-icon", { key: "b88724ed9f7cc91e64f94f6f145076f7fccfa553", class: "tab_group__slide-button", icon: "arrow-left", size: "short", id: "bds-tabs-button-left", onClick: function() {
      return e.prevSlide();
    }, dataTest: this.dtButtonPrev, variant: "secondary" }), h("div", { key: "395807e693e03d6c7b003ec108b494f8a005265c", class: { tab_group__header: true, tab_group__slide: this.isSlideTabs }, ref: this.refHeaderElement, style: o }, h("div", { key: "4884525a61c80a22470434e247676d7b0a7175ed", class: (t2 = { tab_group__header__itens: true, tab_group__slide__itens: this.isSlideTabs }, t2["tab_group__header__itens__".concat(this.align)] = !this.isSlideTabs, t2), ref: this.refHeaderSlideElement, style: r }, this.internalItens && this.internalItens.map(function(t3, i2) {
      var r2 = t3.open == true ? "bold" : "regular";
      return h("div", { class: { tab_group__header__itens__item: true, tab_group__header__itens__item__open: t3.open, tab_group__header__itens__item__disable: t3.disable }, key: i2, tabindex: "0", onClick: function() {
        return t3.disable ? e.handleDisabled(t3.numberElement) : e.handleClick(t3.numberElement);
      }, onKeyDown: function(i3) {
        return e.handleKeyDown(i3, t3);
      } }, t3.iconPosition === "left" && t3.icon ? e.renderIcon(t3.icon, t3.iconTheme, t3.disable, t3.error) : "", t3.badgePosition === "left" && t3.badge ? e.renderBadge(t3.badgeShape, t3.badgeColor, t3.badgeIcon, t3.badgeAnimation, t3.badgeNumber) : "", h("bds-typo", { class: { tab_group__header__itens__item__typo__disable: t3.disable, tab_group__header__itens__item__typo__error: t3.error }, variant: "fs-16", bold: r2 }, t3.label), t3.iconPosition === "right" && t3.icon ? e.renderIcon(t3.icon, t3.iconTheme, t3.disable, t3.error) : "", t3.badgePosition === "right" && t3.badge ? e.renderBadge(t3.badgeShape, t3.badgeColor, t3.badgeIcon, t3.badgeAnimation, t3.badgeNumber) : "");
    }))), this.isSlideTabs && this.alignTab != "right" && h("bds-button-icon", { key: "ac8a1316476a0174942238157adaf317688a1669", class: "tab_group__slide-button", icon: "arrow-right", size: "short", id: "bds-tabs-button-right", onClick: function() {
      return e.nextSlide();
    }, dataTest: this.dtButtonNext, variant: "secondary" }), h("div", { key: "01c37895f8995104ae554d749ace98e71ff78049", class: { tab_group__content: true, tab_group__scrolled: this.contentScrollable }, style: a }, h("slot", { key: "34cecbc4dddf5d9d0da144ee5e442030f4efe8b7" }))));
  };
  Object.defineProperty(t.prototype, "element", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  return t;
}();
BdsTabGroup.style = tabGroupCss;
export {
  BdsTabGroup as bds_tab_group
};
//# sourceMappingURL=bds-tab-group.entry-CmzUIiJ_.js.map
