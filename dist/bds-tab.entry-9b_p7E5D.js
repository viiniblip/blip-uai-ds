import { h, H as Host, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var __awaiter = function(t, e, n, r) {
  function o(t2) {
    return t2 instanceof n ? t2 : new n(function(e2) {
      e2(t2);
    });
  }
  return new (n || (n = Promise))(function(n2, i) {
    function a(t2) {
      try {
        c(r.next(t2));
      } catch (t3) {
        i(t3);
      }
    }
    function s(t2) {
      try {
        c(r["throw"](t2));
      } catch (t3) {
        i(t3);
      }
    }
    function c(t2) {
      t2.done ? n2(t2.value) : o(t2.value).then(a, s);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
var __generator = function(t, e) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(t2) {
    return function(e2) {
      return c([t2, e2]);
    };
  }
  function c(s2) {
    if (r) throw new TypeError("Generator is already executing.");
    while (a && (a = 0, s2[0] && (n = 0)), n) try {
      if (r = 1, o && (i = s2[0] & 2 ? o["return"] : s2[0] ? o["throw"] || ((i = o["return"]) && i.call(o), 0) : o.next) && !(i = i.call(o, s2[1])).done) return i;
      if (o = 0, i) s2 = [s2[0] & 2, i.value];
      switch (s2[0]) {
        case 0:
        case 1:
          i = s2;
          break;
        case 4:
          n.label++;
          return { value: s2[1], done: false };
        case 5:
          n.label++;
          o = s2[1];
          s2 = [0];
          continue;
        case 7:
          s2 = n.ops.pop();
          n.trys.pop();
          continue;
        default:
          if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (s2[0] === 6 || s2[0] === 2)) {
            n = 0;
            continue;
          }
          if (s2[0] === 3 && (!i || s2[1] > i[0] && s2[1] < i[3])) {
            n.label = s2[1];
            break;
          }
          if (s2[0] === 6 && n.label < i[1]) {
            n.label = i[1];
            i = s2;
            break;
          }
          if (i && n.label < i[2]) {
            n.label = i[2];
            n.ops.push(s2);
            break;
          }
          if (i[2]) n.ops.pop();
          n.trys.pop();
          continue;
      }
      s2 = e.call(t, n);
    } catch (t2) {
      s2 = [6, t2];
      o = 0;
    } finally {
      r = i = 0;
    }
    if (s2[0] & 5) throw s2[1];
    return { value: s2[0] ? s2[1] : void 0, done: true };
  }
};
var tabCss = ".bds-tab{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:content-box;box-sizing:content-box;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;max-width:270px;height:46px;max-height:48px;cursor:pointer;text-align:center;color:var(--color-content-disable, rgb(89, 89, 89));border-bottom:2px solid transparent}.bds-tab:not(:last-child){margin-right:32px}.bds-tab:hover{color:var(--color-content-default, rgb(40, 40, 40))}.bds-tab--selected{-webkit-animation-name:selectFade;animation-name:selectFade;-webkit-animation-duration:0.75s;animation-duration:0.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.bds-tab__text{min-width:90px;max-width:270px}@-webkit-keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, rgb(40, 40, 40))}to{border-bottom:2px solid var(--color-brand, rgb(0, 150, 250));color:var(--color-content-default, rgb(40, 40, 40))}}@keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, rgb(40, 40, 40))}to{border-bottom:2px solid var(--color-brand, rgb(0, 150, 250));color:var(--color-content-default, rgb(40, 40, 40))}}@media (max-width: 599px){.bds-tab{min-width:110px;text-overflow:ellipsis}}";
var Tab = function() {
  function t(t2) {
    registerInstance(this, t2);
    this.bdsTabChange = createEvent(this, "bdsTabChange");
    this.active = false;
    this.isActive = false;
  }
  t.prototype.handleTabChange = function(t2) {
    this.isActive = t2.detail == this.group;
  };
  t.prototype.onClick = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        this.bdsTabChange.emit(this.group);
        return [2];
      });
    });
  };
  t.prototype.render = function() {
    var t2;
    var e = this.isActive ? "bold" : "regular";
    return h(Host, { key: "f4db204ee53fea82e70d6c996597494189fc4fb1", class: (t2 = { "bds-tab": true }, t2["bds-tab--selected"] = this.isActive, t2), onClick: this.onClick.bind(this) }, h("div", { key: "8adb9491ed811c2f5a79d40b25c8f278f4b45926", class: "bds-tab__text" }, h("bds-typo", { key: "4b03366759aa0364c55b73bb7fa4d6df7265f822", variant: "fs-16", bold: e }, this.label)));
  };
  return t;
}();
Tab.style = tabCss;
export {
  Tab as bds_tab
};
//# sourceMappingURL=bds-tab.entry-9b_p7E5D.js.map
