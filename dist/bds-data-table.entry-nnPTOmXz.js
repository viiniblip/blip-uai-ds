import { h, H as Host, g as getElement, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var __awaiter = function(t, e, r, i) {
  function n(t2) {
    return t2 instanceof r ? t2 : new r(function(e2) {
      e2(t2);
    });
  }
  return new (r || (r = Promise))(function(r2, a) {
    function s(t2) {
      try {
        l(i.next(t2));
      } catch (t3) {
        a(t3);
      }
    }
    function o(t2) {
      try {
        l(i["throw"](t2));
      } catch (t3) {
        a(t3);
      }
    }
    function l(t2) {
      t2.done ? r2(t2.value) : n(t2.value).then(s, o);
    }
    l((i = i.apply(t, e || [])).next());
  });
};
var __generator = function(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, i, n, a, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(t2) {
    return function(e2) {
      return l([t2, e2]);
    };
  }
  function l(o2) {
    if (i) throw new TypeError("Generator is already executing.");
    while (s && (s = 0, o2[0] && (r = 0)), r) try {
      if (i = 1, n && (a = o2[0] & 2 ? n["return"] : o2[0] ? n["throw"] || ((a = n["return"]) && a.call(n), 0) : n.next) && !(a = a.call(n, o2[1])).done) return a;
      if (n = 0, a) o2 = [o2[0] & 2, a.value];
      switch (o2[0]) {
        case 0:
        case 1:
          a = o2;
          break;
        case 4:
          r.label++;
          return { value: o2[1], done: false };
        case 5:
          r.label++;
          n = o2[1];
          o2 = [0];
          continue;
        case 7:
          o2 = r.ops.pop();
          r.trys.pop();
          continue;
        default:
          if (!(a = r.trys, a = a.length > 0 && a[a.length - 1]) && (o2[0] === 6 || o2[0] === 2)) {
            r = 0;
            continue;
          }
          if (o2[0] === 3 && (!a || o2[1] > a[0] && o2[1] < a[3])) {
            r.label = o2[1];
            break;
          }
          if (o2[0] === 6 && r.label < a[1]) {
            r.label = a[1];
            a = o2;
            break;
          }
          if (a && r.label < a[2]) {
            r.label = a[2];
            r.ops.push(o2);
            break;
          }
          if (a[2]) r.ops.pop();
          r.trys.pop();
          continue;
      }
      o2 = e.call(t, r);
    } catch (t2) {
      o2 = [6, t2];
      n = 0;
    } finally {
      i = a = 0;
    }
    if (o2[0] & 5) throw o2[1];
    return { value: o2[0] ? o2[1] : void 0, done: true };
  }
};
var __spreadArray = function(t, e, r) {
  if (r || arguments.length === 2) for (var i = 0, n = e.length, a; i < n; i++) {
    if (a || !(i in e)) {
      if (!a) a = Array.prototype.slice.call(e, 0, i);
      a[i] = e[i];
    }
  }
  return t.concat(a || Array.prototype.slice.call(e));
};
var dataTableCss = ':host{display:block;width:100%}:host .table{display:grid;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;color:var(--color-content-default, rgb(40, 40, 40));width:100%;border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06));border-radius:8px;overflow-x:auto;background-color:var(--color-surface-1, rgb(246, 246, 246))}:host .table .thead{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));padding:0 16px}:host .table .thead .header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;text-align:left;-ms-flex-align:center;align-items:center;height:64px;gap:16px}:host .table .thead .header .header-title{height:64px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;gap:8px}:host .table .thead .header .header-title .title-click{cursor:pointer}:host .table .body-row{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;height:64px;padding:0 16px;gap:16px;border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}:host .table .body-row .body-item{height:48px;width:100%;gap:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start}:host .table .body-row:last-child{border-bottom:none}';
var DataTable = function() {
  function t(t2) {
    registerInstance(this, t2);
    this.bdsTableClick = createEvent(this, "bdsTableClick");
    this.bdsTableDelete = createEvent(this, "bdsTableDelete");
    this.bdsTableChange = createEvent(this, "bdsTableChange");
    this.newTable = [];
    this.headerData = [];
    this.tableData = [];
    this.avatar = false;
    this.chips = false;
    this.sorting = false;
  }
  t.prototype.componentWillLoad = function() {
    this.getDataFromProprety();
  };
  t.prototype.getDataFromProprety = function() {
    this.headerData = JSON.parse(this.column);
    this.tableData = JSON.parse(this.options);
  };
  t.prototype.renderArrow = function(t2) {
    if (t2) {
      return h("bds-icon", { name: "arrow-up", size: "small" });
    } else {
      return null;
    }
  };
  t.prototype.deleteItem = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      var e;
      return __generator(this, function(r) {
        e = this.tableData.filter(function(e2, r2) {
          return r2 === t2 && e2;
        });
        this.bdsTableDelete.emit(e[0]);
        this.tableData.splice(t2, 1);
        this.tableData = __spreadArray([], this.tableData, true);
        this.bdsTableChange.emit(this.tableData);
        return [2];
      });
    });
  };
  t.prototype.clickButton = function(t2, e, r) {
    this.bdsTableClick.emit({ item: t2, index: e, nameButton: r });
  };
  t.prototype.orderColumn = function(t2) {
    this.headerActive = t2;
    this.sortAscending = this.sortAscending ? false : true;
    if (this.sortAscending === false) {
      this.tableData.sort(function(e, r) {
        return e[t2] > r[t2] ? 1 : -1;
      });
    } else {
      this.tableData.sort(function(e, r) {
        return e[t2] > r[t2] ? -1 : 1;
      });
    }
  };
  t.prototype.render = function() {
    var t2 = this;
    return h(Host, { key: "04e4f3fcbb9828e1e92d49d725ffc1e58987052d" }, h("table", { key: "5bca768acea5a354b1f02d8db23ff78125b098f5", class: "table" }, h("thead", { key: "b1beeb7b1b90b3190623bcb3d1389bf52232be71", class: "thead" }, h("tr", { key: "be204015a9bb4e4d83f913887620ea89d63ed98d", class: "header" }, this.headerData.map(function(e, r) {
      return h("th", { class: "header-title", key: r }, t2.sorting ? h("bds-typo", { class: "title-click", onClick: function() {
        return t2.orderColumn(e.value);
      }, variant: "fs-14", bold: t2.headerActive === "".concat(e.value) ? "bold" : "semi-bold" }, e.heading) : h("bds-typo", { variant: "fs-14", bold: "semi-bold" }, e.heading), t2.sortAscending === true && t2.sorting === true && t2.headerActive === "".concat(e.value) ? h("bds-icon", { class: "header-icon", name: "arrow-up", size: "small" }) : t2.sortAscending === false && t2.sorting === true && t2.headerActive === "".concat(e.value) ? h("bds-icon", { name: "arrow-down", size: "small" }) : "");
    }))), h("tbody", { key: "d3bf34be322ca3a1c723b534520c98c041ec4e8a" }, this.tableData.map(function(e, r) {
      return h("tr", { class: "body-row", key: r }, t2.headerData.map(function(i, n) {
        return h("td", { class: "body-item", key: n }, t2.actionArea && i.editAction ? h("bds-button-icon", { onClick: function() {
          return t2.clickButton(e, r, i.editAction);
        }, variant: "secondary", icon: e["".concat(i.editAction)], size: "short" }) : "", t2.actionArea && i.deleteAction ? h("bds-button-icon", { onClick: function() {
          return t2.clickButton(e, r, i.deleteAction);
        }, variant: "secondary", icon: e["".concat(i.deleteAction)], size: "short" }) : "", t2.actionArea && i.customAction ? h("bds-button-icon", { onClick: function() {
          return t2.clickButton(e, r, i.customAction);
        }, variant: "secondary", icon: e["".concat(i.customAction)], size: "short" }) : "", t2.chips && i.chips ? h("bds-chip-tag", { color: e["".concat(i.chips)] ? e["".concat(i.chips)] : "default" }, e["".concat(i.value)]) : "", t2.avatar && i.img ? h("bds-avatar", { size: "extra-small", thumbnail: e["".concat(i.img)], name: e["".concat(i.value)] }) : "", i.chips ? "" : h("bds-typo", { variant: "fs-14", bold: t2.headerActive === "".concat(i.value) ? "bold" : "regular" }, e["".concat(i.value)]));
      }));
    }))));
  };
  Object.defineProperty(t.prototype, "el", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  return t;
}();
DataTable.style = dataTableCss;
export {
  DataTable as bds_data_table
};
//# sourceMappingURL=bds-data-table.entry-nnPTOmXz.js.map
