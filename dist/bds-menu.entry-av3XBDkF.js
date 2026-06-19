import { h, H as Host, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
import { c as getScrollParent, d as positionElement } from "./position-element-CyGI72Zy-BWMV7WJB.js";
var __awaiter = function(t, e, n, i) {
  function r(t2) {
    return t2 instanceof n ? t2 : new n(function(e2) {
      e2(t2);
    });
  }
  return new (n || (n = Promise))(function(n2, o) {
    function s(t2) {
      try {
        c(i.next(t2));
      } catch (t3) {
        o(t3);
      }
    }
    function a(t2) {
      try {
        c(i["throw"](t2));
      } catch (t3) {
        o(t3);
      }
    }
    function c(t2) {
      t2.done ? n2(t2.value) : r(t2.value).then(s, a);
    }
    c((i = i.apply(t, e || [])).next());
  });
};
var __generator = function(t, e) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, i, r, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol === "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(t2) {
    return function(e2) {
      return c([t2, e2]);
    };
  }
  function c(a2) {
    if (i) throw new TypeError("Generator is already executing.");
    while (s && (s = 0, a2[0] && (n = 0)), n) try {
      if (i = 1, r && (o = a2[0] & 2 ? r["return"] : a2[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, a2[1])).done) return o;
      if (r = 0, o) a2 = [a2[0] & 2, o.value];
      switch (a2[0]) {
        case 0:
        case 1:
          o = a2;
          break;
        case 4:
          n.label++;
          return { value: a2[1], done: false };
        case 5:
          n.label++;
          r = a2[1];
          a2 = [0];
          continue;
        case 7:
          a2 = n.ops.pop();
          n.trys.pop();
          continue;
        default:
          if (!(o = n.trys, o = o.length > 0 && o[o.length - 1]) && (a2[0] === 6 || a2[0] === 2)) {
            n = 0;
            continue;
          }
          if (a2[0] === 3 && (!o || a2[1] > o[0] && a2[1] < o[3])) {
            n.label = a2[1];
            break;
          }
          if (a2[0] === 6 && n.label < o[1]) {
            n.label = o[1];
            o = a2;
            break;
          }
          if (o && n.label < o[2]) {
            n.label = o[2];
            n.ops.push(a2);
            break;
          }
          if (o[2]) n.ops.pop();
          n.trys.pop();
          continue;
      }
      a2 = e.call(t, n);
    } catch (t2) {
      a2 = [6, t2];
      r = 0;
    } finally {
      i = o = 0;
    }
    if (a2[0] & 5) throw a2[1];
    return { value: a2[0] ? a2[1] : void 0, done: true };
  }
};
var menuCss = ".menu{position:fixed;pointer-events:none;top:0;left:0;padding:2px;background-color:var(--color-surface-1, rgb(246, 246, 246));border-radius:8px;-webkit-box-shadow:0px 8px 12px rgba(0, 0, 0, 0.08);box-shadow:0px 8px 12px rgba(0, 0, 0, 0.08);width:240px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s;z-index:90000}.menu__open{pointer-events:auto;opacity:1}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}";
var BdsMenu = function() {
  function t(t2) {
    var e = this;
    registerInstance(this, t2);
    this.bdsToggle = createEvent(this, "bdsToggle");
    this.refElement = null;
    this.intoView = null;
    this.menupositionTop = 0;
    this.menupositionLeft = 0;
    this.menu = null;
    this.position = "right";
    this.open = false;
    this.refMenuElement = function(t3) {
      e.menuElement = t3;
    };
    this.onClickCloseButtom = function(t3) {
      e.open = false;
      t3.stopPropagation();
    };
  }
  t.prototype.componentWillLoad = function() {
    this.refElement = document.getElementById(this.menu);
    this.intoView = getScrollParent(this.refElement);
  };
  t.prototype.toggle = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        this.open = !this.open;
        return [2];
      });
    });
  };
  t.prototype.openMenu = function() {
    this.bdsToggle.emit({ value: this.open });
    if (this.open) {
      var t2 = positionElement({ actionElement: this.refElement, changedElement: this.menuElement, intoView: this.intoView });
      this.menupositionTop = t2.top;
      this.menupositionLeft = t2.left;
    }
  };
  t.prototype.render = function() {
    var t2;
    var e = this;
    var n = { top: "".concat(this.menupositionTop, "px"), left: "".concat(this.menupositionLeft, "px") };
    return h(Host, { key: "eefbfe9249b8945ad1e392e8da192200305edaf9" }, h("div", { key: "141d2c3c12809030a7dea5b59cce43354e61d792", ref: this.refMenuElement, class: (t2 = { menu: true }, t2["menu__".concat(this.position)] = true, t2["menu__open"] = this.open, t2), style: n, part: "bds-menu__container" }, h("slot", { key: "82d80465f1ccb1e069adab0cd82efe264ac37250" })), this.open && h("div", { key: "d7d25cc4a82bccff8dca51679740908beb54fed2", class: { outzone: true }, onClick: function(t3) {
      return e.onClickCloseButtom(t3);
    } }));
  };
  Object.defineProperty(t, "watchers", { get: function() {
    return { open: ["openMenu"] };
  }, enumerable: false, configurable: true });
  return t;
}();
BdsMenu.style = menuCss;
export {
  BdsMenu as bds_menu
};
//# sourceMappingURL=bds-menu.entry-av3XBDkF.js.map
