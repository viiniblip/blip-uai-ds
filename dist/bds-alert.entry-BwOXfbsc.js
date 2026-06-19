import { h, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var __awaiter = function(t, e, i, r) {
  function a(t2) {
    return t2 instanceof i ? t2 : new i(function(e2) {
      e2(t2);
    });
  }
  return new (i || (i = Promise))(function(i2, n) {
    function o(t2) {
      try {
        c(r.next(t2));
      } catch (t3) {
        n(t3);
      }
    }
    function s(t2) {
      try {
        c(r["throw"](t2));
      } catch (t3) {
        n(t3);
      }
    }
    function c(t2) {
      t2.done ? i2(t2.value) : a(t2.value).then(o, s);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
var __generator = function(t, e) {
  var i = { label: 0, sent: function() {
    if (n[0] & 1) throw n[1];
    return n[1];
  }, trys: [], ops: [] }, r, a, n, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(t2) {
    return function(e2) {
      return c([t2, e2]);
    };
  }
  function c(s2) {
    if (r) throw new TypeError("Generator is already executing.");
    while (o && (o = 0, s2[0] && (i = 0)), i) try {
      if (r = 1, a && (n = s2[0] & 2 ? a["return"] : s2[0] ? a["throw"] || ((n = a["return"]) && n.call(a), 0) : a.next) && !(n = n.call(a, s2[1])).done) return n;
      if (a = 0, n) s2 = [s2[0] & 2, n.value];
      switch (s2[0]) {
        case 0:
        case 1:
          n = s2;
          break;
        case 4:
          i.label++;
          return { value: s2[1], done: false };
        case 5:
          i.label++;
          a = s2[1];
          s2 = [0];
          continue;
        case 7:
          s2 = i.ops.pop();
          i.trys.pop();
          continue;
        default:
          if (!(n = i.trys, n = n.length > 0 && n[n.length - 1]) && (s2[0] === 6 || s2[0] === 2)) {
            i = 0;
            continue;
          }
          if (s2[0] === 3 && (!n || s2[1] > n[0] && s2[1] < n[3])) {
            i.label = s2[1];
            break;
          }
          if (s2[0] === 6 && i.label < n[1]) {
            i.label = n[1];
            n = s2;
            break;
          }
          if (n && i.label < n[2]) {
            i.label = n[2];
            i.ops.push(s2);
            break;
          }
          if (n[2]) i.ops.pop();
          i.trys.pop();
          continue;
      }
      s2 = e.call(t, i);
    } catch (t2) {
      s2 = [6, t2];
      a = 0;
    } finally {
      r = n = 0;
    }
    if (s2[0] & 5) throw s2[1];
    return { value: s2[0] ? s2[1] : void 0, done: true };
  }
};
var alertCss = ".alert__dialog{opacity:0;visibility:hidden;background-color:rgba(0, 0, 0, 0.7);width:100%;height:100%;position:fixed;top:0;left:0;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;z-index:80000}.alert__dialog .alert{position:relative;margin:48px auto 0;overflow:hidden;max-width:424px;border-radius:8px;background:var(--color-surface-1, rgb(246, 246, 246));-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16))}.alert__dialog--open{opacity:1;visibility:visible}.alert__dialog--fixed{position:fixed}.alert__dialog--contain{position:absolute}";
var BdsAlert = function() {
  function t(t2) {
    var e = this;
    registerInstance(this, t2);
    this.bdsAlertChanged = createEvent(this, "bdsAlertChanged");
    this.open = false;
    this.dataTest = null;
    this.position = "fixed";
    this.listener = function(t3) {
      if (t3.key == "Enter" || t3.key == "Escape") {
        e.toggle();
      }
    };
  }
  t.prototype.toggle = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        this.open = !this.open;
        if (this.open) {
          this.bdsAlertChanged.emit({ alertStatus: "opened" });
        } else {
          this.bdsAlertChanged.emit({ alertStatus: "closed" });
        }
        return [2];
      });
    });
  };
  t.prototype.isOpenChanged = function() {
    if (this.open) {
      document.addEventListener("keydown", this.listener, false);
    } else document.removeEventListener("keydown", this.listener, false);
  };
  t.prototype.render = function() {
    var t2;
    return h("div", { key: "53b7fbb22a38788cd76b827ae5aaf29db20c4fbc", class: (t2 = { alert__dialog: true, "alert__dialog--open": this.open }, t2["alert__dialog--".concat(this.position)] = true, t2) }, h("div", { key: "c076bd0a8626a1f3271bfe60f86a4e6e68c8993b", class: "alert", "data-test": this.dataTest }, h("slot", { key: "e79559b82493e9efc52a221479c5c603a6b0a25a" })));
  };
  Object.defineProperty(t, "watchers", { get: function() {
    return { open: ["isOpenChanged"] };
  }, enumerable: false, configurable: true });
  return t;
}();
BdsAlert.style = alertCss;
export {
  BdsAlert as bds_alert
};
//# sourceMappingURL=bds-alert.entry-BwOXfbsc.js.map
