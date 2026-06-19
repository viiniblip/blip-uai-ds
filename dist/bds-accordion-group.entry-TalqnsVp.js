import { h, g as getElement, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var __awaiter = function(o, r, t, e) {
  function i(o2) {
    return o2 instanceof t ? o2 : new t(function(r2) {
      r2(o2);
    });
  }
  return new (t || (t = Promise))(function(t2, n) {
    function c(o2) {
      try {
        s(e.next(o2));
      } catch (o3) {
        n(o3);
      }
    }
    function a(o2) {
      try {
        s(e["throw"](o2));
      } catch (o3) {
        n(o3);
      }
    }
    function s(o2) {
      o2.done ? t2(o2.value) : i(o2.value).then(c, a);
    }
    s((e = e.apply(o, r || [])).next());
  });
};
var __generator = function(o, r) {
  var t = { label: 0, sent: function() {
    if (n[0] & 1) throw n[1];
    return n[1];
  }, trys: [], ops: [] }, e, i, n, c;
  return c = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol === "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function a(o2) {
    return function(r2) {
      return s([o2, r2]);
    };
  }
  function s(a2) {
    if (e) throw new TypeError("Generator is already executing.");
    while (c && (c = 0, a2[0] && (t = 0)), t) try {
      if (e = 1, i && (n = a2[0] & 2 ? i["return"] : a2[0] ? i["throw"] || ((n = i["return"]) && n.call(i), 0) : i.next) && !(n = n.call(i, a2[1])).done) return n;
      if (i = 0, n) a2 = [a2[0] & 2, n.value];
      switch (a2[0]) {
        case 0:
        case 1:
          n = a2;
          break;
        case 4:
          t.label++;
          return { value: a2[1], done: false };
        case 5:
          t.label++;
          i = a2[1];
          a2 = [0];
          continue;
        case 7:
          a2 = t.ops.pop();
          t.trys.pop();
          continue;
        default:
          if (!(n = t.trys, n = n.length > 0 && n[n.length - 1]) && (a2[0] === 6 || a2[0] === 2)) {
            t = 0;
            continue;
          }
          if (a2[0] === 3 && (!n || a2[1] > n[0] && a2[1] < n[3])) {
            t.label = a2[1];
            break;
          }
          if (a2[0] === 6 && t.label < n[1]) {
            t.label = n[1];
            n = a2;
            break;
          }
          if (n && t.label < n[2]) {
            t.label = n[2];
            t.ops.push(a2);
            break;
          }
          if (n[2]) t.ops.pop();
          t.trys.pop();
          continue;
      }
      a2 = r.call(o, t);
    } catch (o2) {
      a2 = [6, o2];
      i = 0;
    } finally {
      e = n = 0;
    }
    if (a2[0] & 5) throw a2[1];
    return { value: a2[0] ? a2[1] : void 0, done: true };
  }
};
var accordionCss = '.accordion_header{display:-ms-flexbox;display:flex;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, rgb(40, 40, 40));cursor:pointer}.accordion_header::before{content:"";position:absolute;inset:0;z-index:0}.accordion_header slot{display:-ms-flexbox;display:flex;width:100%;-ms-flex-negative:99999;flex-shrink:99999}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.accordion_header .accButton:hover{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_header .accButton:active{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_body{height:0;overflow:hidden;border-bottom:none;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.accordion_body::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.accordion_body::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body_isOpen{overflow:overlay}.accordion_body_divisor{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, rgb(40, 40, 40))}';
var AccordionGroup = function() {
  function o(o2) {
    registerInstance(this, o2);
    this.bdsAccordionCloseAll = createEvent(this, "bdsAccordionCloseAll");
    this.bdsAccordionOpenAll = createEvent(this, "bdsAccordionOpenAll");
    this.accordionsElement = null;
    this.collapse = "single";
    this.divisor = true;
  }
  o.prototype.closeAll = function(o2) {
    return __awaiter(this, void 0, void 0, function() {
      var r;
      return __generator(this, function(t) {
        this.bdsAccordionCloseAll.emit();
        for (r = 0; r < this.accordionsElement.length; r++) {
          if (this.collapse != "multiple") {
            if (o2 != r) this.accordionsElement[r].close();
          } else {
            this.accordionsElement[r].close();
          }
        }
        return [2];
      });
    });
  };
  o.prototype.openAll = function(o2) {
    return __awaiter(this, void 0, void 0, function() {
      var r;
      return __generator(this, function(t) {
        this.bdsAccordionOpenAll.emit();
        for (r = 0; r < this.accordionsElement.length; r++) {
          if (this.collapse != "multiple") {
            if (o2 != r) this.accordionsElement[r].open();
          } else {
            this.accordionsElement[r].open();
          }
        }
        return [2];
      });
    });
  };
  o.prototype.divisorChanged = function(o2) {
    if (this.accordionsElement) {
      for (var r = 0; r < this.accordionsElement.length; r++) {
        this.accordionsElement[r].divisor = o2;
      }
    }
  };
  o.prototype.componentWillRender = function() {
    this.accordionsElement = this.element.getElementsByTagName("bds-accordion");
    for (var o2 = 0; o2 < this.accordionsElement.length; o2++) {
      this.accordionsElement[o2].reciveNumber(o2);
      this.accordionsElement[o2].divisor = this.divisor;
    }
  };
  o.prototype.render = function() {
    return h("div", { key: "2340a98ebbc6fc125052be06ca9aff17c8d503c7", class: "accordion_group" }, h("slot", { key: "3c322b73b2e4a7b6c83d453d95bc9e105c478dd3" }));
  };
  Object.defineProperty(o.prototype, "element", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  Object.defineProperty(o, "watchers", { get: function() {
    return { divisor: ["divisorChanged"] };
  }, enumerable: false, configurable: true });
  return o;
}();
AccordionGroup.style = accordionCss;
export {
  AccordionGroup as bds_accordion_group
};
//# sourceMappingURL=bds-accordion-group.entry-TalqnsVp.js.map
