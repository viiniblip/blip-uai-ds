import { h, r as registerInstance } from "./index-C5zPPjub.js";
var __awaiter = function(o, r, t, n) {
  function e(o2) {
    return o2 instanceof t ? o2 : new t(function(r2) {
      r2(o2);
    });
  }
  return new (t || (t = Promise))(function(t2, i) {
    function a(o2) {
      try {
        s(n.next(o2));
      } catch (o3) {
        i(o3);
      }
    }
    function c(o2) {
      try {
        s(n["throw"](o2));
      } catch (o3) {
        i(o3);
      }
    }
    function s(o2) {
      o2.done ? t2(o2.value) : e(o2.value).then(a, c);
    }
    s((n = n.apply(o, r || [])).next());
  });
};
var __generator = function(o, r) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, e, i, a;
  return a = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol === "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function c(o2) {
    return function(r2) {
      return s([o2, r2]);
    };
  }
  function s(c2) {
    if (n) throw new TypeError("Generator is already executing.");
    while (a && (a = 0, c2[0] && (t = 0)), t) try {
      if (n = 1, e && (i = c2[0] & 2 ? e["return"] : c2[0] ? e["throw"] || ((i = e["return"]) && i.call(e), 0) : e.next) && !(i = i.call(e, c2[1])).done) return i;
      if (e = 0, i) c2 = [c2[0] & 2, i.value];
      switch (c2[0]) {
        case 0:
        case 1:
          i = c2;
          break;
        case 4:
          t.label++;
          return { value: c2[1], done: false };
        case 5:
          t.label++;
          e = c2[1];
          c2 = [0];
          continue;
        case 7:
          c2 = t.ops.pop();
          t.trys.pop();
          continue;
        default:
          if (!(i = t.trys, i = i.length > 0 && i[i.length - 1]) && (c2[0] === 6 || c2[0] === 2)) {
            t = 0;
            continue;
          }
          if (c2[0] === 3 && (!i || c2[1] > i[0] && c2[1] < i[3])) {
            t.label = c2[1];
            break;
          }
          if (c2[0] === 6 && t.label < i[1]) {
            t.label = i[1];
            i = c2;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2];
            t.ops.push(c2);
            break;
          }
          if (i[2]) t.ops.pop();
          t.trys.pop();
          continue;
      }
      c2 = r.call(o, t);
    } catch (o2) {
      c2 = [6, o2];
      e = 0;
    } finally {
      n = i = 0;
    }
    if (c2[0] & 5) throw c2[1];
    return { value: c2[0] ? c2[1] : void 0, done: true };
  }
};
var accordionCss = '.accordion_header{display:-ms-flexbox;display:flex;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, rgb(40, 40, 40));cursor:pointer}.accordion_header::before{content:"";position:absolute;inset:0;z-index:0}.accordion_header slot{display:-ms-flexbox;display:flex;width:100%;-ms-flex-negative:99999;flex-shrink:99999}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.accordion_header .accButton:hover{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_header .accButton:active{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_body{height:0;overflow:hidden;border-bottom:none;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.accordion_body::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.accordion_body::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body_isOpen{overflow:overlay}.accordion_body_divisor{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, rgb(40, 40, 40))}';
var AccordionBody = function() {
  function o(o2) {
    var r = this;
    registerInstance(this, o2);
    this.container = null;
    this.isOpen = false;
    this.isOpenAftAnimation = false;
    this.numberElement = null;
    this.hasDivisor = true;
    this.dataTest = null;
    this.refContainer = function(o3) {
      r.container = o3;
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
  o.prototype.divisor = function(o2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(r) {
        this.hasDivisor = o2;
        return [2];
      });
    });
  };
  o.prototype.isOpenChanged = function() {
    var o2 = this;
    var r;
    this.heightContainer = this.isOpen ? ((r = this.container) === null || r === void 0 ? void 0 : r.offsetHeight) || 0 : 0;
    if (this.isOpen) {
      setTimeout(function() {
        o2.isOpenAftAnimation = true;
      }, 500);
    } else {
      this.isOpenAftAnimation = false;
    }
  };
  o.prototype.render = function() {
    var o2 = this;
    return h("div", { key: "5976bbf52d123b3534d352a00dabe2df406dad25", class: { accordion_body: true, accordion_body_divisor: this.hasDivisor, accordion_body_isOpen: this.isOpenAftAnimation }, style: { height: "".concat(this.heightContainer, "px") }, "data-test": this.dataTest }, h("div", { key: "c1038dc51ecd25fbfd5a18b11c52fb901b504f56", class: "container", ref: function(r) {
      return o2.refContainer(r);
    } }, h("slot", { key: "ba113dcabd2c5ed50dd672284a61702b1741f877" })));
  };
  Object.defineProperty(o, "watchers", { get: function() {
    return { isOpen: ["isOpenChanged"] };
  }, enumerable: false, configurable: true });
  return o;
}();
AccordionBody.style = accordionCss;
export {
  AccordionBody as bds_accordion_body
};
//# sourceMappingURL=bds-accordion-body.entry-q20dEUhf.js.map
