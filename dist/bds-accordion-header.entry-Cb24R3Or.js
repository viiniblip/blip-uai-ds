import { h, g as getElement, r as registerInstance } from "./index-C5zPPjub.js";
var __awaiter = function(o, t, e, r) {
  function i(o2) {
    return o2 instanceof e ? o2 : new e(function(t2) {
      t2(o2);
    });
  }
  return new (e || (e = Promise))(function(e2, n) {
    function a(o2) {
      try {
        s(r.next(o2));
      } catch (o3) {
        n(o3);
      }
    }
    function c(o2) {
      try {
        s(r["throw"](o2));
      } catch (o3) {
        n(o3);
      }
    }
    function s(o2) {
      o2.done ? e2(o2.value) : i(o2.value).then(a, c);
    }
    s((r = r.apply(o, t || [])).next());
  });
};
var __generator = function(o, t) {
  var e = { label: 0, sent: function() {
    if (n[0] & 1) throw n[1];
    return n[1];
  }, trys: [], ops: [] }, r, i, n, a;
  return a = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol === "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function c(o2) {
    return function(t2) {
      return s([o2, t2]);
    };
  }
  function s(c2) {
    if (r) throw new TypeError("Generator is already executing.");
    while (a && (a = 0, c2[0] && (e = 0)), e) try {
      if (r = 1, i && (n = c2[0] & 2 ? i["return"] : c2[0] ? i["throw"] || ((n = i["return"]) && n.call(i), 0) : i.next) && !(n = n.call(i, c2[1])).done) return n;
      if (i = 0, n) c2 = [c2[0] & 2, n.value];
      switch (c2[0]) {
        case 0:
        case 1:
          n = c2;
          break;
        case 4:
          e.label++;
          return { value: c2[1], done: false };
        case 5:
          e.label++;
          i = c2[1];
          c2 = [0];
          continue;
        case 7:
          c2 = e.ops.pop();
          e.trys.pop();
          continue;
        default:
          if (!(n = e.trys, n = n.length > 0 && n[n.length - 1]) && (c2[0] === 6 || c2[0] === 2)) {
            e = 0;
            continue;
          }
          if (c2[0] === 3 && (!n || c2[1] > n[0] && c2[1] < n[3])) {
            e.label = c2[1];
            break;
          }
          if (c2[0] === 6 && e.label < n[1]) {
            e.label = n[1];
            n = c2;
            break;
          }
          if (n && e.label < n[2]) {
            e.label = n[2];
            e.ops.push(c2);
            break;
          }
          if (n[2]) e.ops.pop();
          e.trys.pop();
          continue;
      }
      c2 = t.call(o, e);
    } catch (o2) {
      c2 = [6, o2];
      i = 0;
    } finally {
      r = n = 0;
    }
    if (c2[0] & 5) throw c2[1];
    return { value: c2[0] ? c2[1] : void 0, done: true };
  }
};
var accordionCss = '.accordion_header{display:-ms-flexbox;display:flex;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, rgb(40, 40, 40));cursor:pointer}.accordion_header::before{content:"";position:absolute;inset:0;z-index:0}.accordion_header slot{display:-ms-flexbox;display:flex;width:100%;-ms-flex-negative:99999;flex-shrink:99999}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.accordion_header .accButton:hover{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_header .accButton:active{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_body{height:0;overflow:hidden;border-bottom:none;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.accordion_body::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.accordion_body::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body_isOpen{overflow:overlay}.accordion_body_divisor{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, rgb(40, 40, 40))}';
var AccordionHeader = function() {
  function o(o2) {
    var t = this;
    registerInstance(this, o2);
    this.accordionElement = null;
    this.isOpen = false;
    this.btToggleIsfocus = false;
    this.numberElement = null;
    this.accordionTitle = null;
    this.icon = null;
    this.iconColor = "inherit";
    this.avatarName = null;
    this.avatarThumb = null;
    this.dataTest = null;
    this.toggleHeader = function() {
      var o3, e;
      if (t.isOpen) {
        (o3 = t.accordionElement) === null || o3 === void 0 ? void 0 : o3.close();
      } else {
        (e = t.accordionElement) === null || e === void 0 ? void 0 : e.open();
      }
    };
  }
  o.prototype.toggle = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(o2) {
        this.isOpen = !this.isOpen;
        return [2];
      });
    });
  };
  o.prototype.open = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(o2) {
        this.isOpen = true;
        return [2];
      });
    });
  };
  o.prototype.close = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(o2) {
        this.isOpen = false;
        return [2];
      });
    });
  };
  o.prototype.componentWillRender = function() {
    this.accordionElement = this.element.parentElement;
  };
  o.prototype.handleKeyDown = function(o2) {
    var t, e;
    if (o2.key == "Enter") {
      if (this.isOpen) {
        (t = this.accordionElement) === null || t === void 0 ? void 0 : t.close();
      } else {
        (e = this.accordionElement) === null || e === void 0 ? void 0 : e.open();
      }
    }
  };
  o.prototype.render = function() {
    return h("div", { key: "ce1e555024222413f950ffe6a0e03987daf24f1f", onClick: this.toggleHeader, class: { accordion_header: true }, "data-test": this.dataTest }, this.avatarName || this.avatarThumb ? h("bds-avatar", { name: this.avatarName, thumbnail: this.avatarThumb, size: "extra-small" }) : this.icon && h("bds-icon", { size: "x-large", name: this.icon, color: this.iconColor }), this.accordionTitle && h("bds-typo", { key: "5537dfd470cc865b7865a5a0f7419b249550ebbb", bold: "bold", variant: "fs-16", "line-height": "double" }, this.accordionTitle), h("slot", { key: "544100fa56e20a4ea7b7284f7d1ec78df8ee4dde" }), h("bds-icon", { key: "ee71dd5c35c84c817cf05f8642e03772612450ad", class: { accButton: true, accButton__isopen: this.isOpen, accButton__isfocus: this.btToggleIsfocus }, size: "x-large", name: "arrow-down", color: this.iconColor, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }));
  };
  Object.defineProperty(o.prototype, "element", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  return o;
}();
AccordionHeader.style = accordionCss;
export {
  AccordionHeader as bds_accordion_header
};
//# sourceMappingURL=bds-accordion-header.entry-Cb24R3Or.js.map
