import { h, H as Host, g as getElement, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var __awaiter = function(e, t, n, r) {
  function a(e2) {
    return e2 instanceof n ? e2 : new n(function(t2) {
      t2(e2);
    });
  }
  return new (n || (n = Promise))(function(n2, s) {
    function i(e2) {
      try {
        c(r.next(e2));
      } catch (e3) {
        s(e3);
      }
    }
    function o(e2) {
      try {
        c(r["throw"](e2));
      } catch (e3) {
        s(e3);
      }
    }
    function c(e2) {
      e2.done ? n2(e2.value) : a(e2.value).then(i, o);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
var __generator = function(e, t) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, a, s, i;
  return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function o(e2) {
    return function(t2) {
      return c([e2, t2]);
    };
  }
  function c(o2) {
    if (r) throw new TypeError("Generator is already executing.");
    while (i && (i = 0, o2[0] && (n = 0)), n) try {
      if (r = 1, a && (s = o2[0] & 2 ? a["return"] : o2[0] ? a["throw"] || ((s = a["return"]) && s.call(a), 0) : a.next) && !(s = s.call(a, o2[1])).done) return s;
      if (a = 0, s) o2 = [o2[0] & 2, s.value];
      switch (o2[0]) {
        case 0:
        case 1:
          s = o2;
          break;
        case 4:
          n.label++;
          return { value: o2[1], done: false };
        case 5:
          n.label++;
          a = o2[1];
          o2 = [0];
          continue;
        case 7:
          o2 = n.ops.pop();
          n.trys.pop();
          continue;
        default:
          if (!(s = n.trys, s = s.length > 0 && s[s.length - 1]) && (o2[0] === 6 || o2[0] === 2)) {
            n = 0;
            continue;
          }
          if (o2[0] === 3 && (!s || o2[1] > s[0] && o2[1] < s[3])) {
            n.label = o2[1];
            break;
          }
          if (o2[0] === 6 && n.label < s[1]) {
            n.label = s[1];
            s = o2;
            break;
          }
          if (s && n.label < s[2]) {
            n.label = s[2];
            n.ops.push(o2);
            break;
          }
          if (s[2]) n.ops.pop();
          n.trys.pop();
          continue;
      }
      o2 = t.call(e, n);
    } catch (e2) {
      o2 = [6, e2];
      a = 0;
    } finally {
      r = s = 0;
    }
    if (o2[0] & 5) throw o2[1];
    return { value: o2[0] ? o2[1] : void 0, done: true };
  }
};
var bannerCss = ':host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;font-weight:700}:host .banner__holder{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;padding:8px 16px;min-height:40px;color:var(--color-content-default, rgb(40, 40, 40))}:host .banner__holder--context--inside{border-radius:8px}:host .banner__holder--align--left{-ms-flex-pack:start;justify-content:flex-start}:host .banner__holder--align--right{-ms-flex-pack:start;justify-content:flex-start}:host .banner__holder--warning{background-color:var(--color-warning, rgb(253, 233, 155))}:host .banner__holder--system{background-color:var(--color-system, rgb(178, 223, 253))}:host .banner__holder--info{background-color:var(--color-info, rgb(128, 227, 235))}:host .banner__holder--error{background-color:var(--color-error, rgb(250, 190, 190))}:host .banner__holder--success{background-color:var(--color-success, rgb(132, 235, 188))}:host .banner__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%}:host .banner__content--left{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content--center{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content--right{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content .slot{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-left:8px;width:100%;color:var(--color-content-default, rgb(40, 40, 40))}:host .banner__action{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}:host .banner__action .close{cursor:pointer;display:-ms-flexbox;display:flex;margin-left:8px}.space_left{display:-ms-flexbox;display:flex}:host(.banner--hide){display:none}';
var Banner = function() {
  function e(e2) {
    var t = this;
    registerInstance(this, e2);
    this.bdsBannerClose = createEvent(this, "bdsBannerClose");
    this.visible = true;
    this.bannerAlign = "center";
    this.buttonClose = "false";
    this.context = "outside";
    this.variant = "system";
    this.dtButtonClose = null;
    this._buttonClickHandler = function() {
      t.bdsBannerClose.emit();
      t.visible = false;
    };
  }
  e.prototype.toggle = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e2) {
        this.visible = !this.visible;
        return [2];
      });
    });
  };
  e.prototype.render = function() {
    var e2;
    var t = this;
    return h(Host, { key: "f0384baea98835d4d011db4ef0abebd8533406c1", class: { banner: true, "banner--hide": !this.visible } }, h("div", { key: "de2c63f4940cf3ffd59e3fb76b634c1dae186b89", class: (e2 = { banner__holder: true }, e2["banner__holder--align--".concat(this.bannerAlign)] = true, e2["banner__holder--".concat(this.variant)] = true, e2["banner__holder--context--".concat(this.context)] = true, e2) }, h("div", { key: "952418446181d3a85039a41747679ed08c6ebea4", class: { banner__content: true } }, this.variant === "warning" && h("bds-icon", { key: "ff0f1d4fd5a2784d68329c34f87ca41e198766aa", class: "icon_left", theme: "outline", size: "medium", name: "warning" }), this.variant === "system" && h("bds-icon", { key: "95ff2ee0c03694a435e839fa7da073478cdd9b55", class: "icon_left", theme: "outline", size: "medium", name: "info" }), this.variant === "info" && h("bds-icon", { key: "8353a8b66a6f0173cc4a1a201c3c227a83977666", class: "icon_left", theme: "outline", size: "medium", name: "message-ballon" }), this.variant === "error" && h("bds-icon", { key: "a44b21772b512ddca13ce2fa549e24554dbde707", class: "icon_left", theme: "outline", size: "medium", name: "error" }), this.variant === "success" && h("bds-icon", { key: "7f897b2d6af5cddcedaca823196b2f51b8aff780", class: "icon_left", theme: "outline", size: "medium", name: "checkball" }), h("div", { key: "fe81eb83dbc95af83a568f5175f2ba1eafba487e", class: "slot" }, h("slot", { key: "9169dd2c2936b6a39db1bbd908f055e0a26675da" }))), h("div", { key: "1d3908eddbd49e64cc143774e3402fd9c9903203", class: { banner__action: true } }, this.buttonClose === "true" && h("div", { key: "f625832b442182ff176f9b5c9a82b1ce21865840", class: "close", onClick: function() {
      return t._buttonClickHandler();
    } }, h("bds-button-icon", { key: "f047b12fcb054a1457472055669ab6efded3b02a", dataTest: this.dtButtonClose, icon: "close", size: "short", variant: "secondary" })))));
  };
  Object.defineProperty(e.prototype, "el", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  return e;
}();
Banner.style = bannerCss;
export {
  Banner as bds_banner
};
//# sourceMappingURL=bds-banner.entry-BLvLI9I4.js.map
