import { h, g as getElement, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var __awaiter = function(e, i, t, r) {
  function a(e2) {
    return e2 instanceof t ? e2 : new t(function(i2) {
      i2(e2);
    });
  }
  return new (t || (t = Promise))(function(t2, o) {
    function s(e2) {
      try {
        d(r.next(e2));
      } catch (e3) {
        o(e3);
      }
    }
    function n(e2) {
      try {
        d(r["throw"](e2));
      } catch (e3) {
        o(e3);
      }
    }
    function d(e2) {
      e2.done ? t2(e2.value) : a(e2.value).then(s, n);
    }
    d((r = r.apply(e, i || [])).next());
  });
};
var __generator = function(e, i) {
  var t = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, a, o, s;
  return s = { next: n(0), throw: n(1), return: n(2) }, typeof Symbol === "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function n(e2) {
    return function(i2) {
      return d([e2, i2]);
    };
  }
  function d(n2) {
    if (r) throw new TypeError("Generator is already executing.");
    while (s && (s = 0, n2[0] && (t = 0)), t) try {
      if (r = 1, a && (o = n2[0] & 2 ? a["return"] : n2[0] ? a["throw"] || ((o = a["return"]) && o.call(a), 0) : a.next) && !(o = o.call(a, n2[1])).done) return o;
      if (a = 0, o) n2 = [n2[0] & 2, o.value];
      switch (n2[0]) {
        case 0:
        case 1:
          o = n2;
          break;
        case 4:
          t.label++;
          return { value: n2[1], done: false };
        case 5:
          t.label++;
          a = n2[1];
          n2 = [0];
          continue;
        case 7:
          n2 = t.ops.pop();
          t.trys.pop();
          continue;
        default:
          if (!(o = t.trys, o = o.length > 0 && o[o.length - 1]) && (n2[0] === 6 || n2[0] === 2)) {
            t = 0;
            continue;
          }
          if (n2[0] === 3 && (!o || n2[1] > o[0] && n2[1] < o[3])) {
            t.label = n2[1];
            break;
          }
          if (n2[0] === 6 && t.label < o[1]) {
            t.label = o[1];
            o = n2;
            break;
          }
          if (o && t.label < o[2]) {
            t.label = o[2];
            t.ops.push(n2);
            break;
          }
          if (o[2]) t.ops.pop();
          t.trys.pop();
          continue;
      }
      n2 = i.call(e, t);
    } catch (e2) {
      n2 = [6, e2];
      a = 0;
    } finally {
      r = o = 0;
    }
    if (n2[0] & 5) throw n2[1];
    return { value: n2[0] ? n2[1] : void 0, done: true };
  }
};
var sidebarCss = ".sidebar_dialog{width:100%;height:100vh;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));background-color:rgba(0, 0, 0, 0.7);opacity:0;visibility:hidden;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;display:none}.sidebar_dialog.type_over{position:fixed;top:0;left:0;z-index:80000}.sidebar_dialog.type_over .sidebar{z-index:90000}.sidebar_dialog.type_fixed{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;height:100%;-webkit-box-shadow:none;box-shadow:none}.sidebar_dialog.is_open{display:-ms-flexbox;display:flex;opacity:1;visibility:visible}.sidebar_dialog .outzone{-ms-flex-order:2;order:2;width:100%;height:100vh}.sidebar_dialog .sidebar{width:360px;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--color-surface-2, rgb(237, 237, 237));-ms-flex-negative:0;flex-shrink:0}.sidebar_dialog .sidebar.position_left{-ms-flex-order:1;order:1}.sidebar_dialog .sidebar.position_right{-ms-flex-order:3;order:3}.sidebar_dialog .sidebar.background_surface-0{background-color:var(--color-surface-0, rgb(255, 255, 255))}.sidebar_dialog .sidebar.background_surface-1{background-color:var(--color-surface-1, rgb(246, 246, 246))}.sidebar_dialog .sidebar.background_surface-2{background-color:var(--color-surface-2, rgb(237, 237, 237))}.sidebar_dialog .sidebar.background_surface-3{background-color:var(--color-surface-3, rgb(227, 227, 227))}.sidebar_dialog .sidebar.background_surface-4{background-color:var(--color-surface-4, rgb(20, 20, 20))}.sidebar_dialog .sidebar.type_fixed{width:288px}.sidebar_dialog .sidebar .header{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:justify;justify-content:space-between;padding:24px}.sidebar_dialog .sidebar .header .content{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.sidebar_dialog .sidebar .header .content ::slotted(*){width:100%}.sidebar_dialog .sidebar .header .closeButton{border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1;cursor:pointer;color:var(--color-content-default, rgb(40, 40, 40))}.sidebar_dialog .sidebar .body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.sidebar_dialog .sidebar .body .content{position:absolute;inset:0;z-index:999999;overflow-y:overlay;overflow-x:clip}.sidebar_dialog .sidebar .body .content::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.sidebar_dialog .sidebar .body .content::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.sidebar_dialog .sidebar .body .margin{padding:8px 24px}.sidebar_dialog .sidebar .footer .content{padding:24px}.sidebar_dialog .sidebar .footer .content ::slotted(*){height:40px;overflow:hidden}.sidebar_dialog .sidebar.is_open.position_left{right:calc(100% - 360px)}.sidebar_dialog .sidebar.is_open.position_right{left:calc(100% - 360px)}";
var Sidebar = function() {
  function e(e2) {
    var i = this;
    registerInstance(this, e2);
    this.bdsToggle = createEvent(this, "bdsToggle");
    this.InnerSpacing = 0;
    this.isOpen = this.type === "fixed" ? true : false;
    this.sidebarPosition = "left";
    this.type = "over";
    this.margin = true;
    this.width = 360;
    this.dtOutzone = null;
    this.dtButtonClose = null;
    this.background = "surface-2";
    this.listiner = function(e3) {
      if (e3.key == "Escape" && i.type !== "fixed") {
        i.isOpen = false;
      }
    };
    this.onClickCloseButtom = function() {
      i.isOpen = false;
    };
  }
  e.prototype.toggle = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e2) {
        this.isOpen = !this.isOpen;
        return [2];
      });
    });
  };
  e.prototype.isOpenChanged = function(e2) {
    this.bdsToggle.emit({ value: e2 });
    if (e2 === true) {
      document.addEventListener("keyup", this.listiner, false);
    } else {
      document.removeEventListener("keyup", this.listiner, false);
    }
  };
  e.prototype.componentWillLoad = function() {
    this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
    this.hasHeaderSlot = !!this.hostElement.querySelector('[slot="header"]');
  };
  e.prototype.render = function() {
    var e2, i;
    var t = this;
    return h("div", { key: "dc07bf50f1abda5223e611167fba96d6436eb797", class: (e2 = { sidebar_dialog: true, is_open: this.isOpen }, e2["type_".concat(this.type)] = true, e2) }, this.type === "over" ? h("div", { class: { outzone: true }, onClick: function() {
      return t.onClickCloseButtom();
    }, "data-test": this.dtOutzone }) : "", h("div", { key: "279f833e63e0ec799101259fee1f4b4cace10363", class: (i = { sidebar: true, is_open: this.isOpen }, i["type_".concat(this.type)] = true, i["position_".concat(this.sidebarPosition)] = true, i["background_".concat(this.background)] = true, i), style: { width: "".concat(this.width < 144 ? 144 : this.width, "px") } }, this.hasHeaderSlot && h("div", { key: "e02a6f98a5d39afe207f767449c5437efe93e2c2", class: { header: true } }, h("div", { key: "4087e40497b17dd0c0818a7bdbd4a8a03015c126", class: { content: true } }, h("slot", { key: "d123a6196493beb1e1319fd9b223cc9376e2562b", name: "header" })), this.type === "fixed" ? "" : h("bds-button-icon", { class: { closeButton: true }, icon: "close", size: "short", variant: "secondary", onClick: function() {
      return t.onClickCloseButtom();
    }, dataTest: this.dtButtonClose })), h("div", { key: "c01a4e91490908af75b64f7a25ac149ddabda9aa", class: { body: true } }, h("div", { key: "cb7348c218f17e3f61f40bc969c83a48654cdbef", class: { content: true, element_scrolled: true, margin: this.margin } }, h("slot", { key: "59d340a9f35fcec7c46d4246e70d59e6fa5561d5", name: "body" }))), this.hasFooterSlot && h("div", { key: "567471bd57fc44901b5253cfa7bb47c397a2699c", class: { footer: true } }, h("div", { key: "a80389443ef3461858c399daf8554a7b1a030762", class: { content: true } }, h("slot", { key: "e1509d3c597eae64b5fa22892c38edf28f5361f8", name: "footer" })))));
  };
  Object.defineProperty(e.prototype, "hostElement", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  Object.defineProperty(e, "watchers", { get: function() {
    return { isOpen: ["isOpenChanged"] };
  }, enumerable: false, configurable: true });
  return e;
}();
Sidebar.style = sidebarCss;
export {
  Sidebar as bds_sidebar
};
//# sourceMappingURL=bds-sidebar.entry-BOzZel5Q.js.map
