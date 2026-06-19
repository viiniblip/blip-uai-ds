import { h, H as Host, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var __awaiter = function(t, e, n, i) {
  function s(t2) {
    return t2 instanceof n ? t2 : new n(function(e2) {
      e2(t2);
    });
  }
  return new (n || (n = Promise))(function(n2, a) {
    function r(t2) {
      try {
        c(i.next(t2));
      } catch (t3) {
        a(t3);
      }
    }
    function o(t2) {
      try {
        c(i["throw"](t2));
      } catch (t3) {
        a(t3);
      }
    }
    function c(t2) {
      t2.done ? n2(t2.value) : s(t2.value).then(r, o);
    }
    c((i = i.apply(t, e || [])).next());
  });
};
var __generator = function(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, i, s, a, r;
  return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === "function" && (r[Symbol.iterator] = function() {
    return this;
  }), r;
  function o(t2) {
    return function(e2) {
      return c([t2, e2]);
    };
  }
  function c(o2) {
    if (i) throw new TypeError("Generator is already executing.");
    while (r && (r = 0, o2[0] && (n = 0)), n) try {
      if (i = 1, s && (a = o2[0] & 2 ? s["return"] : o2[0] ? s["throw"] || ((a = s["return"]) && a.call(s), 0) : s.next) && !(a = a.call(s, o2[1])).done) return a;
      if (s = 0, a) o2 = [o2[0] & 2, a.value];
      switch (o2[0]) {
        case 0:
        case 1:
          a = o2;
          break;
        case 4:
          n.label++;
          return { value: o2[1], done: false };
        case 5:
          n.label++;
          s = o2[1];
          o2 = [0];
          continue;
        case 7:
          o2 = n.ops.pop();
          n.trys.pop();
          continue;
        default:
          if (!(a = n.trys, a = a.length > 0 && a[a.length - 1]) && (o2[0] === 6 || o2[0] === 2)) {
            n = 0;
            continue;
          }
          if (o2[0] === 3 && (!a || o2[1] > a[0] && o2[1] < a[3])) {
            n.label = o2[1];
            break;
          }
          if (o2[0] === 6 && n.label < a[1]) {
            n.label = a[1];
            a = o2;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2];
            n.ops.push(o2);
            break;
          }
          if (a[2]) n.ops.pop();
          n.trys.pop();
          continue;
      }
      o2 = e.call(t, n);
    } catch (t2) {
      o2 = [6, t2];
      s = 0;
    } finally {
      i = a = 0;
    }
    if (o2[0] & 5) throw o2[1];
    return { value: o2[0] ? o2[1] : void 0, done: true };
  }
};
var tabItemCss = ":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}";
var BdsTabItem = function() {
  function t(t2) {
    registerInstance(this, t2);
    this.tabDisabled = createEvent(this, "tabDisabled");
    this.numberElement = null;
    this.label = null;
    this.icon = null;
    this.iconPosition = "left";
    this.iconTheme = "outline";
    this.badge = false;
    this.badgeShape = "circle";
    this.badgeColor = "system";
    this.badgeIcon = null;
    this.badgeAnimation = false;
    this.badgePosition = "left";
    this.badgeNumber = null;
    this.disable = false;
    this.error = false;
    this.headerStyle = null;
    this.contentStyle = null;
    this.open = false;
    this.dataTest = null;
  }
  t.prototype.reciveNumber = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e) {
        this.numberElement = t2;
        return [2];
      });
    });
  };
  t.prototype.disableChanged = function() {
    this.tabDisabled.emit({ item: this.numberElement, disable: this.disable });
  };
  t.prototype.render = function() {
    var t2, e;
    return h(Host, { key: "930609a361acd0a316ab488e033e0bb377325a4b", class: (t2 = {}, t2["is-open"] = this.disable === true ? false : this.open, t2) }, h("div", { key: "5f8dc94dfe92bd11a6b7837d46b0a0bd3fe2a091", class: { tab_item: true }, "data-test": this.dataTest }, h("div", { key: "7a4905605ee3bb88b350ac41b74df854ef9aa248", class: (e = { tab_item_content: true }, e["tab_item_content--open"] = this.open, e) }, h("slot", { key: "46d22087a4b1682ac8f0db58f97c94461fe9ae35" }))));
  };
  Object.defineProperty(t, "watchers", { get: function() {
    return { disable: ["disableChanged"] };
  }, enumerable: false, configurable: true });
  return t;
}();
BdsTabItem.style = tabItemCss;
export {
  BdsTabItem as bds_tab_item
};
//# sourceMappingURL=bds-tab-item.entry-7JHTHCmj.js.map
