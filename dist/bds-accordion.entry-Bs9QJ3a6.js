import { h, g as getElement, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var __awaiter = function(o, t, i, r) {
  function e(o2) {
    return o2 instanceof i ? o2 : new i(function(t2) {
      t2(o2);
    });
  }
  return new (i || (i = Promise))(function(i2, n) {
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
      o2.done ? i2(o2.value) : e(o2.value).then(a, c);
    }
    s((r = r.apply(o, t || [])).next());
  });
};
var __generator = function(o, t) {
  var i = { label: 0, sent: function() {
    if (n[0] & 1) throw n[1];
    return n[1];
  }, trys: [], ops: [] }, r, e, n, a;
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
    while (a && (a = 0, c2[0] && (i = 0)), i) try {
      if (r = 1, e && (n = c2[0] & 2 ? e["return"] : c2[0] ? e["throw"] || ((n = e["return"]) && n.call(e), 0) : e.next) && !(n = n.call(e, c2[1])).done) return n;
      if (e = 0, n) c2 = [c2[0] & 2, n.value];
      switch (c2[0]) {
        case 0:
        case 1:
          n = c2;
          break;
        case 4:
          i.label++;
          return { value: c2[1], done: false };
        case 5:
          i.label++;
          e = c2[1];
          c2 = [0];
          continue;
        case 7:
          c2 = i.ops.pop();
          i.trys.pop();
          continue;
        default:
          if (!(n = i.trys, n = n.length > 0 && n[n.length - 1]) && (c2[0] === 6 || c2[0] === 2)) {
            i = 0;
            continue;
          }
          if (c2[0] === 3 && (!n || c2[1] > n[0] && c2[1] < n[3])) {
            i.label = c2[1];
            break;
          }
          if (c2[0] === 6 && i.label < n[1]) {
            i.label = n[1];
            n = c2;
            break;
          }
          if (n && i.label < n[2]) {
            i.label = n[2];
            i.ops.push(c2);
            break;
          }
          if (n[2]) i.ops.pop();
          i.trys.pop();
          continue;
      }
      c2 = t.call(o, i);
    } catch (o2) {
      c2 = [6, o2];
      e = 0;
    } finally {
      r = n = 0;
    }
    if (c2[0] & 5) throw c2[1];
    return { value: c2[0] ? c2[1] : void 0, done: true };
  }
};
var accordionCss = '.accordion_header{display:-ms-flexbox;display:flex;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, rgb(40, 40, 40));cursor:pointer}.accordion_header::before{content:"";position:absolute;inset:0;z-index:0}.accordion_header slot{display:-ms-flexbox;display:flex;width:100%;-ms-flex-negative:99999;flex-shrink:99999}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.accordion_header .accButton:hover{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_header .accButton:active{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_body{height:0;overflow:hidden;border-bottom:none;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.accordion_body::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.accordion_body::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body_isOpen{overflow:overlay}.accordion_body_divisor{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, rgb(40, 40, 40))}';
var Accordion = function() {
  function o(o2) {
    registerInstance(this, o2);
    this.bdsToggle = createEvent(this, "bdsToggle");
    this.bdsAccordionOpen = createEvent(this, "bdsAccordionOpen");
    this.bdsAccordionClose = createEvent(this, "bdsAccordionClose");
    this.accGroup = null;
    this.accheaders = null;
    this.accBodies = null;
    this.isOpen = false;
    this.numberElement = null;
    this.condition = false;
    this.startOpen = false;
    this.divisor = true;
  }
  o.prototype.toggle = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(o2) {
        this.isOpen = !this.isOpen;
        this.bdsToggle.emit({ value: this.isOpen });
        return [2];
      });
    });
  };
  o.prototype.open = function() {
    return __awaiter(this, void 0, void 0, function() {
      var o2, t;
      return __generator(this, function(i) {
        (o2 = this.accheaders) === null || o2 === void 0 ? void 0 : o2.open();
        (t = this.accBodies) === null || t === void 0 ? void 0 : t.open();
        this.isOpen = true;
        return [2];
      });
    });
  };
  o.prototype.close = function() {
    return __awaiter(this, void 0, void 0, function() {
      var o2, t;
      return __generator(this, function(i) {
        (o2 = this.accheaders) === null || o2 === void 0 ? void 0 : o2.close();
        (t = this.accBodies) === null || t === void 0 ? void 0 : t.close();
        this.isOpen = false;
        return [2];
      });
    });
  };
  o.prototype.notStart = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(o2) {
        this.startOpen = false;
        return [2];
      });
    });
  };
  o.prototype.reciveNumber = function(o2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t) {
        this.numberElement = o2;
        return [2];
      });
    });
  };
  o.prototype.isOpenChanged = function(o2) {
    var t, i, r, e, n;
    if (o2) {
      if (this.accGroup.collapse == "single" && this.condition === false) {
        (t = this.accGroup) === null || t === void 0 ? void 0 : t.closeAll(this.numberElement);
      }
      (i = this.accheaders) === null || i === void 0 ? void 0 : i.open();
      (r = this.accBodies) === null || r === void 0 ? void 0 : r.open();
      this.bdsAccordionOpen.emit();
    } else {
      (e = this.accheaders) === null || e === void 0 ? void 0 : e.close();
      (n = this.accBodies) === null || n === void 0 ? void 0 : n.close();
      this.bdsAccordionClose.emit();
    }
    this.condition = false;
  };
  o.prototype.divisorChanged = function(o2) {
    var t = this.element.querySelector("bds-accordion-body");
    if (t) {
      t.divisor(o2);
    }
  };
  o.prototype.componentWillLoad = function() {
    this.accGroup = this.element.parentElement.tagName == "BDS-ACCORDION-GROUP" && this.element.parentElement;
    this.accheaders = this.element.querySelector("bds-accordion-header");
    this.accBodies = this.element.querySelector("bds-accordion-body");
    var o2 = this.element.querySelector("bds-accordion-body");
    if (o2) {
      o2.divisor(this.divisor);
    }
    if (this.startOpen === true) {
      this.condition = true;
      this.isOpen = true;
    }
  };
  o.prototype.render = function() {
    return h("div", { key: "24b769afb547f00b1cafe2a24d1b49dec5e2df4d", class: "accordion_group" }, h("slot", { key: "e7915c277ee8c4ef41c8925028918f2feee7e367" }));
  };
  Object.defineProperty(o.prototype, "element", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  Object.defineProperty(o, "watchers", { get: function() {
    return { isOpen: ["isOpenChanged"], divisor: ["divisorChanged"] };
  }, enumerable: false, configurable: true });
  return o;
}();
Accordion.style = accordionCss;
export {
  Accordion as bds_accordion
};
//# sourceMappingURL=bds-accordion.entry-Bs9QJ3a6.js.map
