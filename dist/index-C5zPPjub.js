import { BdsThemeProvider } from "blip-ds-react";
import { jsx } from "react/jsx-runtime";
var __extends = /* @__PURE__ */ function() {
  var e = function(r, t) {
    e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e2, r2) {
      e2.__proto__ = r2;
    } || function(e2, r2) {
      for (var t2 in r2) if (Object.prototype.hasOwnProperty.call(r2, t2)) e2[t2] = r2[t2];
    };
    return e(r, t);
  };
  return function(r, t) {
    if (typeof t !== "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
var __assign = function() {
  __assign = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var o in r) if (Object.prototype.hasOwnProperty.call(r, o)) e[o] = r[o];
    }
    return e;
  };
  return __assign.apply(this, arguments);
};
var __awaiter$1 = function(e, r, t, n) {
  function o(e2) {
    return e2 instanceof t ? e2 : new t(function(r2) {
      r2(e2);
    });
  }
  return new (t || (t = Promise))(function(t2, i) {
    function s(e2) {
      try {
        l(n.next(e2));
      } catch (e3) {
        i(e3);
      }
    }
    function a(e2) {
      try {
        l(n["throw"](e2));
      } catch (e3) {
        i(e3);
      }
    }
    function l(e2) {
      e2.done ? t2(e2.value) : o(e2.value).then(s, a);
    }
    l((n = n.apply(e, r || [])).next());
  });
};
var __generator$1 = function(e, r) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol === "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(e2) {
    return function(r2) {
      return l([e2, r2]);
    };
  }
  function l(a2) {
    if (n) throw new TypeError("Generator is already executing.");
    while (s && (s = 0, a2[0] && (t = 0)), t) try {
      if (n = 1, o && (i = a2[0] & 2 ? o["return"] : a2[0] ? o["throw"] || ((i = o["return"]) && i.call(o), 0) : o.next) && !(i = i.call(o, a2[1])).done) return i;
      if (o = 0, i) a2 = [a2[0] & 2, i.value];
      switch (a2[0]) {
        case 0:
        case 1:
          i = a2;
          break;
        case 4:
          t.label++;
          return { value: a2[1], done: false };
        case 5:
          t.label++;
          o = a2[1];
          a2 = [0];
          continue;
        case 7:
          a2 = t.ops.pop();
          t.trys.pop();
          continue;
        default:
          if (!(i = t.trys, i = i.length > 0 && i[i.length - 1]) && (a2[0] === 6 || a2[0] === 2)) {
            t = 0;
            continue;
          }
          if (a2[0] === 3 && (!i || a2[1] > i[0] && a2[1] < i[3])) {
            t.label = a2[1];
            break;
          }
          if (a2[0] === 6 && t.label < i[1]) {
            t.label = i[1];
            i = a2;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2];
            t.ops.push(a2);
            break;
          }
          if (i[2]) t.ops.pop();
          t.trys.pop();
          continue;
      }
      a2 = r.call(e, t);
    } catch (e2) {
      a2 = [6, e2];
      o = 0;
    } finally {
      n = i = 0;
    }
    if (a2[0] & 5) throw a2[1];
    return { value: a2[0] ? a2[1] : void 0, done: true };
  }
};
var __spreadArray = function(e, r, t) {
  if (t || arguments.length === 2) for (var n = 0, o = r.length, i; n < o; n++) {
    if (i || !(n in r)) {
      if (!i) i = Array.prototype.slice.call(r, 0, n);
      i[n] = r[n];
    }
  }
  return e.concat(i || Array.prototype.slice.call(r));
};
var NAMESPACE = "blip-ds";
var BUILD = { hydratedSelectorName: "hydrated", lazyLoad: true, slotRelocation: true, updatable: true };
var globalScripts = function() {
};
var globalStyles = "";
var __defProp = Object.defineProperty;
var __export = function(e, r) {
  for (var t in r) __defProp(e, t, { get: r[t], enumerable: true });
};
var getHostRef = function(e) {
  if (e.__stencil__getHostRef) {
    return e.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance = function(e, r) {
  e.__stencil__getHostRef = function() {
    return r;
  };
  r.t = e;
};
var registerHost = function(e, r) {
  var t = { o: 0, $hostElement$: e, i: r, l: /* @__PURE__ */ new Map() };
  {
    t.u = new Promise(function(e2) {
      return t.v = e2;
    });
  }
  {
    t.p = new Promise(function(e2) {
      return t.m = e2;
    });
    e["s-p"] = [];
    e["s-rc"] = [];
  }
  var n = t;
  e.__stencil__getHostRef = function() {
    return n;
  };
  return n;
};
var isMemberInElement = function(e, r) {
  return r in e;
};
var consoleError = function(e, r) {
  return (0, console.error)(e, r);
};
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = function(e, r, t) {
  var n = e.h.replace(/-/g, "_");
  var o = e.S;
  if (!o) {
    return void 0;
  }
  var i = cmpModules.get(o);
  if (i) {
    return i[n];
  }
  {
    var s = function(e2) {
      cmpModules.set(o, e2);
      return e2[n];
    };
    switch (o) {
      case "bds-card-body":
        return import("./bds-card-body.entry-C21agrx-.js").then(s, consoleError);
      case "bds-card-subtitle":
        return import("./bds-card-subtitle.entry-C34dAYDI.js").then(s, consoleError);
      case "bds-radio-group":
        return import("./bds-radio-group.entry-mkabeow2.js").then(s, consoleError);
      case "bds-accordion":
        return import("./bds-accordion.entry-Bs9QJ3a6.js").then(s, consoleError);
      case "bds-accordion-body":
        return import("./bds-accordion-body.entry-q20dEUhf.js").then(s, consoleError);
      case "bds-accordion-group":
        return import("./bds-accordion-group.entry-TalqnsVp.js").then(s, consoleError);
      case "bds-accordion-header":
        return import("./bds-accordion-header.entry-Cb24R3Or.js").then(s, consoleError);
      case "bds-alert":
        return import("./bds-alert.entry-BwOXfbsc.js").then(s, consoleError);
      case "bds-alert-actions":
        return import("./bds-alert-actions.entry-BPkRVNlc.js").then(s, consoleError);
      case "bds-alert-body":
        return import("./bds-alert-body.entry-DgtioTAM.js").then(s, consoleError);
      case "bds-alert-header":
        return import("./bds-alert-header.entry-DMMCAmaX.js").then(s, consoleError);
      case "bds-avatar-group":
        return import("./bds-avatar-group.entry-CnClNOlT.js").then(s, consoleError);
      case "bds-banner-link":
        return import("./bds-banner-link.entry-PYqYAgZX.js").then(s, consoleError);
      case "bds-breadcrumb":
        return import("./bds-breadcrumb.entry-C5rxCWRP.js").then(s, consoleError);
      case "bds-button-group":
        return import("./bds-button-group.entry-C1F1pDHS.js").then(s, consoleError);
      case "bds-card":
        return import("./bds-card.entry-BUde5ZjL.js").then(s, consoleError);
      case "bds-card-color":
        return import("./bds-card-color.entry-DCK2oh4n.js").then(s, consoleError);
      case "bds-card-footer":
        return import("./bds-card-footer.entry-DfL8qMzq.js").then(s, consoleError);
      case "bds-card-header":
        return import("./bds-card-header.entry-B5_5DxIV.js").then(s, consoleError);
      case "bds-card-title":
        return import("./bds-card-title.entry-BIQjkdIU.js").then(s, consoleError);
      case "bds-carousel":
        return import("./bds-carousel.entry-B2jiReIQ.js").then(s, consoleError);
      case "bds-carousel-item":
        return import("./bds-carousel-item.entry-CkJtfHOS.js").then(s, consoleError);
      case "bds-chip":
        return import("./bds-chip.entry-BDG5Tp1h.js").then(s, consoleError);
      case "bds-chip-selected":
        return import("./bds-chip-selected.entry-CZzYSUpF.js").then(s, consoleError);
      case "bds-data-table":
        return import("./bds-data-table.entry-nnPTOmXz.js").then(s, consoleError);
      case "bds-datepicker":
        return import("./bds-datepicker.entry-D-kdkwdV.js").then(s, consoleError);
      case "bds-divider":
        return import("./bds-divider.entry-BELEoTtA.js").then(s, consoleError);
      case "bds-expansion-panel":
        return import("./bds-expansion-panel.entry-Cii_MVk5.js").then(s, consoleError);
      case "bds-expansion-panel-body":
        return import("./bds-expansion-panel-body.entry-LOBlVmmy.js").then(s, consoleError);
      case "bds-expansion-panel-header":
        return import("./bds-expansion-panel-header.entry-C63TccSx.js").then(s, consoleError);
      case "bds-input-chips":
        return import("./bds-input-chips.entry-StNWvEAr.js").then(s, consoleError);
      case "bds-input-editable":
        return import("./bds-input-editable.entry-DcrDLG3T.js").then(s, consoleError);
      case "bds-input-password":
        return import("./bds-input-password.entry-Dt-4O51a.js").then(s, consoleError);
      case "bds-list":
        return import("./bds-list.entry-CnOXUlmE.js").then(s, consoleError);
      case "bds-list-item-content":
        return import("./bds-list-item-content.entry-BFqEYAAO.js").then(s, consoleError);
      case "bds-loading-bar":
        return import("./bds-loading-bar.entry-DmWhYuPZ.js").then(s, consoleError);
      case "bds-menu":
        return import("./bds-menu.entry-av3XBDkF.js").then(s, consoleError);
      case "bds-menu-action":
        return import("./bds-menu-action.entry-S7-jtkfb.js").then(s, consoleError);
      case "bds-menu-exibition":
        return import("./bds-menu-exibition.entry-CM8rqW3e.js").then(s, consoleError);
      case "bds-menu-list":
        return import("./bds-menu-list.entry-BCdVZDly.js").then(s, consoleError);
      case "bds-menu-list-item":
        return import("./bds-menu-list-item.entry-9LVdT4Tu.js").then(s, consoleError);
      case "bds-menu-separation":
        return import("./bds-menu-separation.entry-B53QKy3q.js").then(s, consoleError);
      case "bds-modal":
        return import("./bds-modal.entry-DG-vliPR.js").then(s, consoleError);
      case "bds-modal-action":
        return import("./bds-modal-action.entry-fpLfLB-n.js").then(s, consoleError);
      case "bds-modal-close-button":
        return import("./bds-modal-close-button.entry-Nb3oz6bx.js").then(s, consoleError);
      case "bds-nav-tree":
        return import("./bds-nav-tree.entry-CVVY4dR_.js").then(s, consoleError);
      case "bds-nav-tree-group":
        return import("./bds-nav-tree-group.entry-B6faGxjQ.js").then(s, consoleError);
      case "bds-nav-tree-item":
        return import("./bds-nav-tree-item.entry-DjTse4Xh.js").then(s, consoleError);
      case "bds-navbar":
        return import("./bds-navbar.entry-Bm7Fjki9.js").then(s, consoleError);
      case "bds-navbar-content":
        return import("./bds-navbar-content.entry-Bzy7NBDK.js").then(s, consoleError);
      case "bds-progress-bar":
        return import("./bds-progress-bar.entry-De1FmVkl.js").then(s, consoleError);
      case "bds-select-chips":
        return import("./bds-select-chips.entry-B3_U0rAo.js").then(s, consoleError);
      case "bds-sidebar":
        return import("./bds-sidebar.entry-BOzZel5Q.js").then(s, consoleError);
      case "bds-slider":
        return import("./bds-slider.entry-B5uCaONd.js").then(s, consoleError);
      case "bds-step":
        return import("./bds-step.entry-CAmo4SOo.js").then(s, consoleError);
      case "bds-stepper":
        return import("./bds-stepper.entry-Bv5Bckpk.js").then(s, consoleError);
      case "bds-tab":
        return import("./bds-tab.entry-9b_p7E5D.js").then(s, consoleError);
      case "bds-tab-group":
        return import("./bds-tab-group.entry-CmzUIiJ_.js").then(s, consoleError);
      case "bds-tab-item":
        return import("./bds-tab-item.entry-7JHTHCmj.js").then(s, consoleError);
      case "bds-tab-panel":
        return import("./bds-tab-panel.entry-0MLmsEae.js").then(s, consoleError);
      case "bds-table":
        return import("./bds-table.entry-4Xqn8Vw-.js").then(s, consoleError);
      case "bds-table-body":
        return import("./bds-table-body.entry-BRc03Vkm.js").then(s, consoleError);
      case "bds-table-header":
        return import("./bds-table-header.entry-DXrfE7n8.js").then(s, consoleError);
      case "bds-table-row":
        return import("./bds-table-row.entry-JbH1eDy6.js").then(s, consoleError);
      case "bds-table-th":
        return import("./bds-table-th.entry-DGu_AQn4.js").then(s, consoleError);
      case "bds-tabs":
        return import("./bds-tabs.entry-BR3OYp7O.js").then(s, consoleError);
      case "bds-toast":
        return import("./bds-toast.entry-Bf3OMZ9W.js").then(s, consoleError);
      case "bds-warning":
        return import("./bds-warning.entry-DG_eYrTi.js").then(s, consoleError);
      case "bds-badge":
        return import("./bds-badge.entry-Ct0GzYWj.js").then(s, consoleError);
      case "bds-chip-tag":
        return import("./bds-chip-tag.entry-FwVImldN.js").then(s, consoleError);
      case "bds-image":
        return import("./bds-image.entry-C6dsV6WL.js").then(s, consoleError);
      case "bds-list-item":
        return import("./bds-list-item.entry-BHx2mjWr.js").then(s, consoleError);
      case "bds-select":
        return import("./bds-select.entry-Bw-6kRCU.js").then(s, consoleError);
      case "bds-table-cell":
        return import("./bds-table-cell.entry-DgD71YGp.js").then(s, consoleError);
      case "bds-toast-container":
        return import("./bds-toast-container.entry-QLZEs0yU.js").then(s, consoleError);
      case "bds-banner":
        return import("./bds-banner.entry-BLvLI9I4.js").then(s, consoleError);
      case "bds-dropdown":
        return import("./bds-dropdown.entry-zYLCQuKj.js").then(s, consoleError);
      case "bds-input":
        return import("./bds-input.entry-w9P9pPh_.js").then(s, consoleError);
      case "bds-button":
        return import("./bds-button.entry-DqXQWrzb.js").then(s, consoleError);
      case "bds-button-icon":
        return import("./bds-button-icon.entry-Bj-aUdaj.js").then(s, consoleError);
      case "bds-loading-page":
        return import("./bds-loading-page.entry-Ds6lqFPd.js").then(s, consoleError);
      case "bds-pagination":
        return import("./bds-pagination.entry-Bxcx9Pax.js").then(s, consoleError);
      case "bds-counter-text":
        return import("./bds-counter-text.entry-Bu2S80vB.js").then(s, consoleError);
      case "bds-avatar":
        return import("./bds-avatar.entry-MXqtjMl-.js").then(s, consoleError);
      case "bds-datepicker-period_2":
        return import("./bds-datepicker-period_2.entry-DRF8slLk.js").then(s, consoleError);
      case "bds-radio_2":
        return import("./bds-radio_2.entry-BBplTw4s.js").then(s, consoleError);
      case "bds-chip-clickable_2":
        return import("./bds-chip-clickable_2.entry-BvY6Cprs.js").then(s, consoleError);
      case "bds-checkbox_2":
        return import("./bds-checkbox_2.entry-B-oisp3_.js").then(s, consoleError);
      case "bds-illustration_2":
        return import("./bds-illustration_2.entry-Bk6FVfr8.js").then(s, consoleError);
      case "bds-loading-spinner":
        return import("./bds-loading-spinner.entry-B9_JKacz.js").then(s, consoleError);
      case "bds-autocomplete":
        return import("./bds-autocomplete.entry-K7SglrP3.js").then(s, consoleError);
      case "bds-input-phone-number":
        return import("./bds-input-phone-number.entry-B1QomM32.js").then(s, consoleError);
      case "bds-rich-text":
        return import("./bds-rich-text.entry-B8bBhULg.js").then(s, consoleError);
      case "bds-icon":
        return import("./bds-icon.entry-kvg0u7Rv.js").then(s, consoleError);
      case "bds-upload":
        return import("./bds-upload.entry-CnOs4uSY.js").then(s, consoleError);
      case "bds-grid_5":
        return import("./bds-grid_5.entry-BfEnxZ_n.js").then(s, consoleError);
    }
  }
  return import("./".concat(o, ".entry.js").concat("")).then(function(e2) {
    {
      cmpModules.set(o, e2);
    }
    return e2[n];
  }, function(e2) {
    consoleError(e2, r.$hostElement$);
  });
};
var styles = /* @__PURE__ */ new Map();
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var win = typeof window !== "undefined" ? window : {};
var plt = { o: 0, j: "", jmp: function(e) {
  return e();
}, raf: function(e) {
  return requestAnimationFrame(e);
}, ael: function(e, r, t, n) {
  return e.addEventListener(r, t, n);
}, rel: function(e, r, t, n) {
  return e.removeEventListener(r, t, n);
}, ce: function(e, r) {
  return new CustomEvent(e, r);
} };
var supportsListenerOptions = function() {
  var e;
  var r = false;
  try {
    (e = win.document) == null ? void 0 : e.addEventListener("e", null, Object.defineProperty({}, "passive", { get: function() {
      r = true;
    } }));
  } catch (e2) {
  }
  return r;
}();
var promiseResolve = function(e) {
  return Promise.resolve(e);
};
var supportsConstructableStylesheets = function() {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
}();
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = function(e, r) {
  return function(t) {
    e.push(t);
    if (!queuePending) {
      queuePending = true;
      if (plt.o & 4) {
        nextTick(flush);
      } else {
        plt.raf(flush);
      }
    }
  };
};
var consume = function(e) {
  for (var r = 0; r < e.length; r++) {
    try {
      e[r](performance.now());
    } catch (e2) {
      consoleError(e2);
    }
  }
  e.length = 0;
};
var flush = function() {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = function(e) {
  return promiseResolve().then(e);
};
var writeTask = queueTask(queueDomWrites);
var isDef = function(e) {
  return e != null && e !== void 0;
};
var isComplexType = function(e) {
  e = typeof e;
  return e === "object" || e === "function";
};
function queryNonceMetaTagContent(e) {
  var r, t, n;
  return (n = (t = (r = e.head) == null ? void 0 : r.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : t.getAttribute("content")) != null ? n : void 0;
}
var escapeRegExpSpecialCharacters = function(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
var result_exports = {};
__export(result_exports, { err: function() {
  return err;
}, map: function() {
  return map;
}, ok: function() {
  return ok;
}, unwrap: function() {
  return unwrap;
}, unwrapErr: function() {
  return unwrapErr;
} });
var ok = function(e) {
  return { isOk: true, isErr: false, value: e };
};
var err = function(e) {
  return { isOk: false, isErr: true, value: e };
};
function map(e, r) {
  if (e.isOk) {
    var t = r(e.value);
    if (t instanceof Promise) {
      return t.then(function(e2) {
        return ok(e2);
      });
    } else {
      return ok(t);
    }
  }
  if (e.isErr) {
    var n = e.value;
    return err(n);
  }
  throw "should never get here";
}
var unwrap = function(e) {
  if (e.isOk) {
    return e.value;
  } else {
    throw e.value;
  }
};
var unwrapErr = function(e) {
  if (e.isErr) {
    return e.value;
  } else {
    throw e.value;
  }
};
function createShadowRoot(e) {
  var r = this.attachShadow({ mode: "open" });
  if (supportsConstructableStylesheets) {
    var t = new CSSStyleSheet();
    t.replaceSync(globalStyles);
    r.adoptedStyleSheets.push(t);
  }
}
var updateFallbackSlotVisibility = function(e) {
  var r = internalCall(e, "childNodes");
  if (e.tagName && e.tagName.includes("-") && e["s-cr"] && e.tagName !== "SLOT-FB") {
    getHostSlotNodes(r, e.tagName).forEach(function(e2) {
      if (e2.nodeType === 1 && e2.tagName === "SLOT-FB") {
        if (getSlotChildSiblings(e2, getSlotName(e2)).length) {
          e2.hidden = true;
        } else {
          e2.hidden = false;
        }
      }
    });
  }
  var t = 0;
  for (t = 0; t < r.length; t++) {
    var n = r[t];
    if (n.nodeType === 1 && internalCall(n, "childNodes").length) {
      updateFallbackSlotVisibility(n);
    }
  }
};
var getSlottedChildNodes = function(e) {
  var r = [];
  for (var t = 0; t < e.length; t++) {
    var n = e[t]["s-nr"] || void 0;
    if (n && n.isConnected) {
      r.push(n);
    }
  }
  return r;
};
function getHostSlotNodes(e, r, t) {
  var n = 0;
  var o = [];
  var i;
  for (; n < e.length; n++) {
    i = e[n];
    if (i["s-sr"] && (!r || i["s-hn"] === r) && t === void 0) {
      o.push(i);
    }
    o = __spreadArray(__spreadArray([], o, true), getHostSlotNodes(i.childNodes, r, t), true);
  }
  return o;
}
var getSlotChildSiblings = function(e, r, t) {
  var n = [];
  if (!e["s-sr"]) n.push(e);
  var o = e;
  while (o = o.nextSibling) {
    if (getSlotName(o) === r && !o["s-sr"]) n.push(o);
  }
  return n;
};
var isNodeLocatedInSlot = function(e, r) {
  if (e.nodeType === 1) {
    if (e.getAttribute("slot") === null && r === "") {
      return true;
    }
    if (e.getAttribute("slot") === r) {
      return true;
    }
    return false;
  }
  if (e["s-sn"] === r) {
    return true;
  }
  return r === "";
};
var getSlotName = function(e) {
  return typeof e["s-sn"] === "string" ? e["s-sn"] : e.nodeType === 1 && e.getAttribute("slot") || void 0;
};
function patchSlotNode(e) {
  if (e.assignedElements || e.assignedNodes || !e["s-sr"]) return;
  var r = function(r2) {
    return (function(e2) {
      var t = [];
      var n = this["s-sn"];
      if (e2 == null ? void 0 : e2.flatten) {
        console.error("\n          Flattening is not supported for Stencil non-shadow slots.\n          You can use `.childNodes` to nested slot fallback content.\n          If you have a particular use case, please open an issue on the Stencil repo.\n        ");
      }
      var o = this["s-cr"].parentElement;
      var i = o.__childNodes ? o.childNodes : getSlottedChildNodes(o.childNodes);
      i.forEach(function(e3) {
        if (n === getSlotName(e3)) {
          t.push(e3);
        }
      });
      if (r2) {
        return t.filter(function(e3) {
          return e3.nodeType === 1;
        });
      }
      return t;
    }).bind(e);
  };
  e.assignedElements = r(true);
  e.assignedNodes = r(false);
}
function internalCall(e, r) {
  if ("__" + r in e) {
    var t = e["__" + r];
    if (typeof t !== "function") return t;
    return t.bind(e);
  } else {
    if (typeof e[r] !== "function") return e[r];
    return e[r].bind(e);
  }
}
var createTime = function(e, r) {
  {
    return function() {
      return;
    };
  }
};
var uniqueTime = function(e, r) {
  {
    return function() {
      return;
    };
  }
};
var h = function(e, r) {
  var t = [];
  for (var n = 2; n < arguments.length; n++) {
    t[n - 2] = arguments[n];
  }
  var o = null;
  var i = null;
  var s = null;
  var a = false;
  var l = false;
  var u = [];
  var c = function(r2) {
    for (var t2 = 0; t2 < r2.length; t2++) {
      o = r2[t2];
      if (Array.isArray(o)) {
        c(o);
      } else if (o != null && typeof o !== "boolean") {
        if (a = typeof e !== "function" && !isComplexType(o)) {
          o = String(o);
        }
        if (a && l) {
          u[u.length - 1]._ += o;
        } else {
          u.push(a ? newVNode(null, o) : o);
        }
        l = a;
      }
    }
  };
  c(t);
  if (r) {
    if (r.key) {
      i = r.key;
    }
    if (r.name) {
      s = r.name;
    }
    {
      var f = r.className || r.class;
      if (f) {
        r.class = typeof f !== "object" ? f : Object.keys(f).filter(function(e2) {
          return f[e2];
        }).join(" ");
      }
    }
  }
  if (typeof e === "function") {
    return e(r === null ? {} : r, u, vdomFnUtils);
  }
  var d = newVNode(e, null);
  d.C = r;
  if (u.length > 0) {
    d.k = u;
  }
  {
    d.N = i;
  }
  {
    d.R = s;
  }
  return d;
};
var newVNode = function(e, r) {
  var t = { o: 0, T: e, _: r, L: null, k: null };
  {
    t.C = null;
  }
  {
    t.N = null;
  }
  {
    t.R = null;
  }
  return t;
};
var Host = {};
var isHost = function(e) {
  return e && e.T === Host;
};
var vdomFnUtils = { forEach: function(e, r) {
  return e.map(convertToPublic).forEach(r);
}, map: function(e, r) {
  return e.map(convertToPublic).map(r).map(convertToPrivate);
} };
var convertToPublic = function(e) {
  return { vattrs: e.C, vchildren: e.k, vkey: e.N, vname: e.R, vtag: e.T, vtext: e._ };
};
var convertToPrivate = function(e) {
  if (typeof e.vtag === "function") {
    var r = __assign({}, e.vattrs);
    if (e.vkey) {
      r.key = e.vkey;
    }
    if (e.vname) {
      r.name = e.vname;
    }
    return h.apply(void 0, __spreadArray([e.vtag, r], e.vchildren || [], false));
  }
  var t = newVNode(e.vtag, e.vtext);
  t.C = e.vattrs;
  t.k = e.vchildren;
  t.N = e.vkey;
  t.R = e.vname;
  return t;
};
var createSupportsRuleRe = function(e) {
  var r = escapeRegExpSpecialCharacters(e);
  return new RegExp("(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?".concat(r, "))(").concat(r, "\\b)"), "g");
};
createSupportsRuleRe("::slotted");
createSupportsRuleRe(":host");
createSupportsRuleRe(":host-context");
var parsePropertyValue = function(e, r, t) {
  if (e != null && !isComplexType(e)) {
    if (r & 4) {
      {
        return e === "false" ? false : e === "" || !!e;
      }
    }
    if (r & 2) {
      return typeof e === "string" ? parseFloat(e) : typeof e === "number" ? e : NaN;
    }
    if (r & 1) {
      return String(e);
    }
    return e;
  }
  return e;
};
var getElement = function(e) {
  return getHostRef(e).$hostElement$;
};
var createEvent = function(e, r, t) {
  var n = getElement(e);
  return { emit: function(e2) {
    return emitEvent(n, r, { bubbles: true, composed: true, cancelable: true, detail: e2 });
  } };
};
var emitEvent = function(e, r, t) {
  var n = plt.ce(r, t);
  e.dispatchEvent(n);
  return n;
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = function(e, r, t) {
  var n = styles.get(e);
  if (supportsConstructableStylesheets && t) {
    n = n || new CSSStyleSheet();
    if (typeof n === "string") {
      n = r;
    } else {
      n.replaceSync(r);
    }
  } else {
    n = r;
  }
  styles.set(e, n);
};
var addStyle = function(e, r, t) {
  var n;
  var o = getScopeId(r);
  var i = styles.get(o);
  if (!win.document) {
    return o;
  }
  e = e.nodeType === 11 ? e : win.document;
  if (i) {
    if (typeof i === "string") {
      e = e.head || e;
      var s = rootAppliedStyles.get(e);
      var a = void 0;
      if (!s) {
        rootAppliedStyles.set(e, s = /* @__PURE__ */ new Set());
      }
      if (!s.has(o)) {
        {
          a = win.document.createElement("style");
          a.innerHTML = i;
          var l = (n = plt.A) != null ? n : queryNonceMetaTagContent(win.document);
          if (l != null) {
            a.setAttribute("nonce", l);
          }
          if (!(r.o & 1)) {
            if (e.nodeName === "HEAD") {
              var u = e.querySelectorAll("link[rel=preconnect]");
              var c = u.length > 0 ? u[u.length - 1].nextSibling : e.querySelector("style");
              e.insertBefore(a, (c == null ? void 0 : c.parentNode) === e ? c : null);
            } else if ("host" in e) {
              if (supportsConstructableStylesheets) {
                var f = new CSSStyleSheet();
                f.replaceSync(i);
                e.adoptedStyleSheets = __spreadArray([f], e.adoptedStyleSheets, true);
              } else {
                var d = e.querySelector("style");
                if (d) {
                  d.innerHTML = i + d.innerHTML;
                } else {
                  e.prepend(a);
                }
              }
            } else {
              e.append(a);
            }
          }
          if (r.o & 1) {
            e.insertBefore(a, null);
          }
        }
        if (r.o & 4) {
          a.innerHTML += SLOT_FB_CSS;
        }
        if (s) {
          s.add(o);
        }
      }
    } else if (!e.adoptedStyleSheets.includes(i)) {
      e.adoptedStyleSheets = __spreadArray(__spreadArray([], e.adoptedStyleSheets, true), [i], false);
    }
  }
  return o;
};
var attachStyles = function(e) {
  var r = e.i;
  var t = e.$hostElement$;
  var n = r.o;
  var o = createTime("attachStyles", r.h);
  var i = addStyle(t.shadowRoot ? t.shadowRoot : t.getRootNode(), r);
  if (n & 10) {
    t["s-sc"] = i;
    t.classList.add(i + "-h");
  }
  o();
};
var getScopeId = function(e, r) {
  return "sc-" + e.h;
};
var setAccessor = function(e, r, t, n, o, i, s) {
  if (t === n) {
    return;
  }
  var a = isMemberInElement(e, r);
  var l = r.toLowerCase();
  if (r === "class") {
    var u = e.classList;
    var c = parseClassList(t);
    var f = parseClassList(n);
    {
      u.remove.apply(u, c.filter(function(e2) {
        return e2 && !f.includes(e2);
      }));
      u.add.apply(u, f.filter(function(e2) {
        return e2 && !c.includes(e2);
      }));
    }
  } else if (r === "style") {
    {
      for (var d in t) {
        if (!n || n[d] == null) {
          if (d.includes("-")) {
            e.style.removeProperty(d);
          } else {
            e.style[d] = "";
          }
        }
      }
    }
    for (var d in n) {
      if (!t || n[d] !== t[d]) {
        if (d.includes("-")) {
          e.style.setProperty(d, n[d]);
        } else {
          e.style[d] = n[d];
        }
      }
    }
  } else if (r === "key") ;
  else if (r === "ref") {
    if (n) {
      n(e);
    }
  } else if (!a && r[0] === "o" && r[1] === "n") {
    if (r[2] === "-") {
      r = r.slice(3);
    } else if (isMemberInElement(win, l)) {
      r = l.slice(2);
    } else {
      r = l[2] + r.slice(3);
    }
    if (t || n) {
      var v = r.endsWith(CAPTURE_EVENT_SUFFIX);
      r = r.replace(CAPTURE_EVENT_REGEX, "");
      if (t) {
        plt.rel(e, r, t, v);
      }
      if (n) {
        plt.ael(e, r, n, v);
      }
    }
  } else {
    var p = isComplexType(n);
    if ((a || p && n !== null) && true) {
      try {
        if (!e.tagName.includes("-")) {
          var b = n == null ? "" : n;
          if (r === "list") {
            a = false;
          } else if (t == null || e[r] != b) {
            if (typeof e.__lookupSetter__(r) === "function") {
              e[r] = b;
            } else {
              e.setAttribute(r, b);
            }
          }
        } else if (e[r] !== n) {
          e[r] = n;
        }
      } catch (e2) {
      }
    }
    var m = false;
    {
      if (l !== (l = l.replace(/^xlink\:?/, ""))) {
        r = l;
        m = true;
      }
    }
    if (n == null || n === false) {
      if (n !== false || e.getAttribute(r) === "") {
        if (m) {
          e.removeAttributeNS(XLINK_NS, r);
        } else {
          e.removeAttribute(r);
        }
      }
    } else if ((!a || i & 4 || o) && !p && e.nodeType === 1) {
      n = n === true ? "" : n;
      if (m) {
        e.setAttributeNS(XLINK_NS, r, n);
      } else {
        e.setAttribute(r, n);
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = function(e) {
  if (typeof e === "object" && e && "baseVal" in e) {
    e = e.baseVal;
  }
  if (!e || typeof e !== "string") {
    return [];
  }
  return e.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");
var updateElement = function(e, r, t, n) {
  var o = r.L.nodeType === 11 && r.L.host ? r.L.host : r.L;
  var i = e && e.C || {};
  var s = r.C || {};
  {
    for (var a = 0, l = sortedAttrNames(Object.keys(i)); a < l.length; a++) {
      var u = l[a];
      if (!(u in s)) {
        setAccessor(o, u, i[u], void 0, t, r.o);
      }
    }
  }
  for (var c = 0, f = sortedAttrNames(Object.keys(s)); c < f.length; c++) {
    var u = f[c];
    setAccessor(o, u, i[u], s[u], t, r.o);
  }
};
function sortedAttrNames(e) {
  return e.includes("ref") ? __spreadArray(__spreadArray([], e.filter(function(e2) {
    return e2 !== "ref";
  }), true), ["ref"], false) : e;
}
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = function(e, r, t) {
  var n;
  var o = r.k[t];
  var i = 0;
  var s;
  var a;
  var l;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (o.T === "slot") {
      o.o |= o.k ? 2 : 1;
    }
  }
  if (o._ !== null) {
    s = o.L = win.document.createTextNode(o._);
  } else if (o.o & 1) {
    s = o.L = win.document.createTextNode("");
    {
      updateElement(null, o, isSvgMode);
    }
  } else {
    if (!win.document) {
      throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.");
    }
    s = o.L = win.document.createElement(!useNativeShadowDom && BUILD.slotRelocation && o.o & 2 ? "slot-fb" : o.T);
    {
      updateElement(null, o, isSvgMode);
    }
    if (isDef(scopeId) && s["s-si"] !== scopeId) {
      s.classList.add(s["s-si"] = scopeId);
    }
    if (o.k) {
      for (i = 0; i < o.k.length; ++i) {
        a = createElm(e, o, i);
        if (a) {
          s.appendChild(a);
        }
      }
    }
  }
  s["s-hn"] = hostTagName;
  {
    if (o.o & (2 | 1)) {
      s["s-sr"] = true;
      s["s-cr"] = contentRef;
      s["s-sn"] = o.R || "";
      s["s-rf"] = (n = o.C) == null ? void 0 : n.ref;
      patchSlotNode(s);
      l = e && e.k && e.k[t];
      if (l && l.T === o.T && e.L) {
        {
          putBackInOriginalLocation(e.L, false);
        }
      }
      {
        addRemoveSlotScopedClass(contentRef, s, r.L, e == null ? void 0 : e.L);
      }
    }
  }
  return s;
};
var putBackInOriginalLocation = function(e, r) {
  plt.o |= 1;
  var t = Array.from(e.__childNodes || e.childNodes);
  for (var n = t.length - 1; n >= 0; n--) {
    var o = t[n];
    if (o["s-hn"] !== hostTagName && o["s-ol"]) {
      insertBefore(referenceNode(o).parentNode, o, referenceNode(o));
      o["s-ol"].remove();
      o["s-ol"] = void 0;
      o["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (r) {
      putBackInOriginalLocation(o, r);
    }
  }
  plt.o &= -2;
};
var addVnodes = function(e, r, t, n, o, i) {
  var s = e["s-cr"] && e["s-cr"].parentNode || e;
  var a;
  if (s.shadowRoot && s.tagName === hostTagName) {
    s = s.shadowRoot;
  }
  for (; o <= i; ++o) {
    if (n[o]) {
      a = createElm(null, t, o);
      if (a) {
        n[o].L = a;
        insertBefore(s, a, referenceNode(r));
      }
    }
  }
};
var removeVnodes = function(e, r, t) {
  for (var n = r; n <= t; ++n) {
    var o = e[n];
    if (o) {
      var i = o.L;
      nullifyVNodeRefs(o);
      if (i) {
        {
          checkSlotFallbackVisibility = true;
          if (i["s-ol"]) {
            i["s-ol"].remove();
          } else {
            putBackInOriginalLocation(i, true);
          }
        }
        i.remove();
      }
    }
  }
};
var updateChildren = function(e, r, t, n, o) {
  if (o === void 0) {
    o = false;
  }
  var i = 0;
  var s = 0;
  var a = 0;
  var l = 0;
  var u = r.length - 1;
  var c = r[0];
  var f = r[u];
  var d = n.length - 1;
  var v = n[0];
  var p = n[d];
  var b;
  var m;
  while (i <= u && s <= d) {
    if (c == null) {
      c = r[++i];
    } else if (f == null) {
      f = r[--u];
    } else if (v == null) {
      v = n[++s];
    } else if (p == null) {
      p = n[--d];
    } else if (isSameVnode(c, v, o)) {
      patch(c, v, o);
      c = r[++i];
      v = n[++s];
    } else if (isSameVnode(f, p, o)) {
      patch(f, p, o);
      f = r[--u];
      p = n[--d];
    } else if (isSameVnode(c, p, o)) {
      if (c.T === "slot" || p.T === "slot") {
        putBackInOriginalLocation(c.L.parentNode, false);
      }
      patch(c, p, o);
      insertBefore(e, c.L, f.L.nextSibling);
      c = r[++i];
      p = n[--d];
    } else if (isSameVnode(f, v, o)) {
      if (c.T === "slot" || p.T === "slot") {
        putBackInOriginalLocation(f.L.parentNode, false);
      }
      patch(f, v, o);
      insertBefore(e, f.L, c.L);
      f = r[--u];
      v = n[++s];
    } else {
      a = -1;
      {
        for (l = i; l <= u; ++l) {
          if (r[l] && r[l].N !== null && r[l].N === v.N) {
            a = l;
            break;
          }
        }
      }
      if (a >= 0) {
        m = r[a];
        if (m.T !== v.T) {
          b = createElm(r && r[s], t, a);
        } else {
          patch(m, v, o);
          r[a] = void 0;
          b = m.L;
        }
        v = n[++s];
      } else {
        b = createElm(r && r[s], t, s);
        v = n[++s];
      }
      if (b) {
        {
          insertBefore(referenceNode(c.L).parentNode, b, referenceNode(c.L));
        }
      }
    }
  }
  if (i > u) {
    addVnodes(e, n[d + 1] == null ? null : n[d + 1].L, t, n, s, d);
  } else if (s > d) {
    removeVnodes(r, i, u);
  }
};
var isSameVnode = function(e, r, t) {
  if (t === void 0) {
    t = false;
  }
  if (e.T === r.T) {
    if (e.T === "slot") {
      return e.R === r.R;
    }
    if (!t) {
      return e.N === r.N;
    }
    if (t && !e.N && r.N) {
      e.N = r.N;
    }
    return true;
  }
  return false;
};
var referenceNode = function(e) {
  return e && e["s-ol"] || e;
};
var patch = function(e, r, t) {
  if (t === void 0) {
    t = false;
  }
  var n = r.L = e.L;
  var o = e.k;
  var i = r.k;
  var s = r._;
  var a;
  if (s === null) {
    {
      updateElement(e, r, isSvgMode);
    }
    if (o !== null && i !== null) {
      updateChildren(n, o, r, i, t);
    } else if (i !== null) {
      if (e._ !== null) {
        n.textContent = "";
      }
      addVnodes(n, null, r, i, 0, i.length - 1);
    } else if (!t && BUILD.updatable && o !== null) {
      removeVnodes(o, 0, o.length - 1);
    }
  } else if (a = n["s-cr"]) {
    a.parentNode.textContent = s;
  } else if (e._ !== s) {
    n.data = s;
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = function(e) {
  var r;
  var t;
  var n;
  var o = e.__childNodes || e.childNodes;
  for (var i = 0, s = o; i < s.length; i++) {
    var a = s[i];
    if (a["s-sr"] && (r = a["s-cr"]) && r.parentNode) {
      t = r.parentNode.__childNodes || r.parentNode.childNodes;
      var l = a["s-sn"];
      var u = function() {
        r = t[n];
        if (!r["s-cn"] && !r["s-nr"] && r["s-hn"] !== a["s-hn"] && true) {
          if (isNodeLocatedInSlot(r, l)) {
            var e2 = relocateNodes.find(function(e3) {
              return e3.V === r;
            });
            checkSlotFallbackVisibility = true;
            r["s-sn"] = r["s-sn"] || l;
            if (e2) {
              e2.V["s-sh"] = a["s-hn"];
              e2.I = a;
            } else {
              r["s-sh"] = a["s-hn"];
              relocateNodes.push({ I: a, V: r });
            }
            if (r["s-sr"]) {
              relocateNodes.map(function(t2) {
                if (isNodeLocatedInSlot(t2.V, r["s-sn"])) {
                  e2 = relocateNodes.find(function(e3) {
                    return e3.V === r;
                  });
                  if (e2 && !t2.I) {
                    t2.I = e2.I;
                  }
                }
              });
            }
          } else if (!relocateNodes.some(function(e3) {
            return e3.V === r;
          })) {
            relocateNodes.push({ V: r });
          }
        }
      };
      for (n = t.length - 1; n >= 0; n--) {
        u();
      }
    }
    if (a.nodeType === 1) {
      markSlotContentForRelocation(a);
    }
  }
};
var nullifyVNodeRefs = function(e) {
  {
    e.C && e.C.ref && e.C.ref(null);
    e.k && e.k.map(nullifyVNodeRefs);
  }
};
var insertBefore = function(e, r, t) {
  if (typeof r["s-sn"] === "string" && !!r["s-sr"] && !!r["s-cr"]) {
    addRemoveSlotScopedClass(r["s-cr"], r, e, r.parentElement);
  }
  {
    return e == null ? void 0 : e.insertBefore(r, t);
  }
};
function addRemoveSlotScopedClass(e, r, t, n) {
  var o, i;
  var s;
  if (e && typeof r["s-sn"] === "string" && !!r["s-sr"] && e.parentNode && e.parentNode["s-sc"] && (s = r["s-si"] || e.parentNode["s-sc"])) {
    var a = r["s-sn"];
    var l = r["s-hn"];
    (o = t.classList) == null ? void 0 : o.add(s + "-s");
    if (n && ((i = n.classList) == null ? void 0 : i.contains(s + "-s"))) {
      var u = (n.__childNodes || n.childNodes)[0];
      var c = false;
      while (u) {
        if (u["s-sn"] !== a && u["s-hn"] === l && !!u["s-sr"]) {
          c = true;
          break;
        }
        u = u.nextSibling;
      }
      if (!c) n.classList.remove(s + "-s");
    }
  }
}
var renderVdom = function(e, r, t) {
  if (t === void 0) {
    t = false;
  }
  var n, o, i, s;
  var a = e.$hostElement$;
  var l = e.i;
  var u = e.O || newVNode(null, null);
  var c = isHost(r);
  var f = c ? r : h(null, null, r);
  hostTagName = a.tagName;
  if (l.$) {
    f.C = f.C || {};
    l.$.map(function(e2) {
      var r2 = e2[0], t2 = e2[1];
      return f.C[t2] = a[r2];
    });
  }
  if (t && f.C) {
    for (var d = 0, v = Object.keys(f.C); d < v.length; d++) {
      var p = v[d];
      if (a.hasAttribute(p) && !["key", "ref", "style", "class"].includes(p)) {
        f.C[p] = a[p];
      }
    }
  }
  f.T = null;
  f.o |= 4;
  e.O = f;
  f.L = u.L = a.shadowRoot || a;
  {
    scopeId = a["s-sc"];
  }
  useNativeShadowDom = !!(l.o & 1) && !(l.o & 128);
  {
    contentRef = a["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(u, f, t);
  {
    plt.o |= 1;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(f.L);
      for (var b = 0, m = relocateNodes; b < m.length; b++) {
        var y = m[b];
        var E = y.V;
        if (!E["s-ol"] && win.document) {
          var g = win.document.createTextNode("");
          g["s-nr"] = E;
          insertBefore(E.parentNode, E["s-ol"] = g, E);
        }
      }
      for (var S = 0, w = relocateNodes; S < w.length; S++) {
        var y = w[S];
        var E = y.V;
        var j = y.I;
        if (j) {
          var _ = j.parentNode;
          var C = j.nextSibling;
          {
            var g = (n = E["s-ol"]) == null ? void 0 : n.previousSibling;
            while (g) {
              var k = (o = g["s-nr"]) != null ? o : null;
              if (k && k["s-sn"] === E["s-sn"] && _ === (k.__parentNode || k.parentNode)) {
                k = k.nextSibling;
                while (k === E || (k == null ? void 0 : k["s-sr"])) {
                  k = k == null ? void 0 : k.nextSibling;
                }
                if (!k || !k["s-nr"]) {
                  C = k;
                  break;
                }
              }
              g = g.previousSibling;
            }
          }
          var N = E.__parentNode || E.parentNode;
          var R = E.__nextSibling || E.nextSibling;
          if (!C && _ !== N || R !== C) {
            if (E !== C) {
              if (!E["s-hn"] && E["s-ol"]) {
                E["s-hn"] = E["s-ol"].parentNode.nodeName;
              }
              insertBefore(_, E, C);
              if (E.nodeType === 1 && E.tagName !== "SLOT-FB") {
                E.hidden = (i = E["s-ih"]) != null ? i : false;
              }
            }
          }
          E && typeof j["s-rf"] === "function" && j["s-rf"](j);
        } else {
          if (E.nodeType === 1) {
            if (t) {
              E["s-ih"] = (s = E.hidden) != null ? s : false;
            }
            E.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(f.L);
    }
    plt.o &= -2;
    relocateNodes.length = 0;
  }
  contentRef = void 0;
};
var attachToAncestor = function(e, r) {
  if (r && !e.H && r["s-p"]) {
    var t = r["s-p"].push(new Promise(function(n) {
      return e.H = function() {
        r["s-p"].splice(t - 1, 1);
        n();
      };
    }));
  }
};
var scheduleUpdate = function(e, r) {
  {
    e.o |= 16;
  }
  if (e.o & 4) {
    e.o |= 512;
    return;
  }
  attachToAncestor(e, e.P);
  var t = function() {
    return dispatchHooks(e, r);
  };
  return writeTask(t);
};
var dispatchHooks = function(e, r) {
  var t = e.$hostElement$;
  var n = createTime("scheduleUpdate", e.i.h);
  var o = e.t;
  if (!o) {
    throw new Error("Can't render component <".concat(t.tagName.toLowerCase(), " /> with invalid Stencil runtime! Make sure this imported component is compiled with a `externalRuntime: true` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime"));
  }
  var i;
  if (r) {
    {
      e.o |= 256;
      if (e.D) {
        e.D.map(function(e2) {
          var r2 = e2[0], n2 = e2[1];
          return safeCall(o, r2, n2, t);
        });
        e.D = void 0;
      }
    }
    i = safeCall(o, "componentWillLoad", void 0, t);
  } else {
    i = safeCall(o, "componentWillUpdate", void 0, t);
  }
  i = enqueue(i, function() {
    return safeCall(o, "componentWillRender", void 0, t);
  });
  n();
  return enqueue(i, function() {
    return updateComponent(e, o, r);
  });
};
var enqueue = function(e, r) {
  return isPromisey(e) ? e.then(r).catch(function(e2) {
    console.error(e2);
    r();
  }) : r();
};
var isPromisey = function(e) {
  return e instanceof Promise || e && e.then && typeof e.then === "function";
};
var updateComponent = function(e, r, t) {
  return __awaiter$1(void 0, void 0, void 0, function() {
    var n, o, i, s, a, l, u;
    return __generator$1(this, function(c) {
      o = e.$hostElement$;
      i = createTime("update", e.i.h);
      s = o["s-rc"];
      if (t) {
        attachStyles(e);
      }
      a = createTime("render", e.i.h);
      {
        callRender(e, r, o, t);
      }
      if (s) {
        s.map(function(e2) {
          return e2();
        });
        o["s-rc"] = void 0;
      }
      a();
      i();
      {
        l = (n = o["s-p"]) != null ? n : [];
        u = function() {
          return postUpdateComponent(e);
        };
        if (l.length === 0) {
          u();
        } else {
          Promise.all(l).then(u);
          e.o |= 4;
          l.length = 0;
        }
      }
      return [2];
    });
  });
};
var callRender = function(e, r, t, n) {
  try {
    r = r.render();
    {
      e.o &= -17;
    }
    {
      e.o |= 2;
    }
    {
      {
        {
          renderVdom(e, r, n);
        }
      }
    }
  } catch (r2) {
    consoleError(r2, e.$hostElement$);
  }
  return null;
};
var postUpdateComponent = function(e) {
  e.i.h;
  var t = e.$hostElement$;
  var n = createTime();
  var o = e.t;
  var i = e.P;
  safeCall(o, "componentDidRender", void 0, t);
  if (!(e.o & 64)) {
    e.o |= 64;
    {
      addHydratedFlag(t);
    }
    safeCall(o, "componentDidLoad", void 0, t);
    n();
    {
      e.m(t);
      if (!i) {
        appDidLoad();
      }
    }
  } else {
    safeCall(o, "componentDidUpdate", void 0, t);
    n();
  }
  {
    e.v(t);
  }
  {
    if (e.H) {
      e.H();
      e.H = void 0;
    }
    if (e.o & 512) {
      nextTick(function() {
        return scheduleUpdate(e, false);
      });
    }
    e.o &= -517;
  }
};
var appDidLoad = function(e) {
  nextTick(function() {
    return emitEvent(win, "appload", { detail: { namespace: NAMESPACE } });
  });
};
var safeCall = function(e, r, t, n) {
  if (e && e[r]) {
    try {
      return e[r](t);
    } catch (e2) {
      consoleError(e2, n);
    }
  }
  return void 0;
};
var addHydratedFlag = function(e) {
  var r;
  return e.classList.add((r = BUILD.hydratedSelectorName) != null ? r : "hydrated");
};
var getValue = function(e, r) {
  return getHostRef(e).l.get(r);
};
var setValue = function(e, r, t, n) {
  var o = getHostRef(e);
  if (!o) {
    throw new Error(`Couldn't find host element for "`.concat(n.h, '" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).'));
  }
  var i = o.$hostElement$;
  var s = o.l.get(r);
  var a = o.o;
  var l = o.t;
  t = parsePropertyValue(t, n.F[r][0]);
  var u = Number.isNaN(s) && Number.isNaN(t);
  var c = t !== s && !u;
  if ((!(a & 8) || s === void 0) && c) {
    o.l.set(r, t);
    if (l) {
      if (n.M && a & 128) {
        var f = n.M[r];
        if (f) {
          f.map(function(e2) {
            try {
              l[e2](t, s, r);
            } catch (e3) {
              consoleError(e3, i);
            }
          });
        }
      }
      if ((a & (2 | 16)) === 2) {
        if (l.componentShouldUpdate) {
          if (l.componentShouldUpdate(t, s, r) === false) {
            return;
          }
        }
        scheduleUpdate(o, false);
      }
    }
  }
};
var proxyComponent = function(e, r, t) {
  var n, o;
  var i = e.prototype;
  if (r.F || (r.M || e.watchers)) {
    if (e.watchers && !r.M) {
      r.M = e.watchers;
    }
    var s = Object.entries((n = r.F) != null ? n : {});
    s.map(function(e2) {
      var n2 = e2[0], o2 = e2[1][0];
      if (o2 & 31 || t & 2 && o2 & 32) {
        var s2 = Object.getOwnPropertyDescriptor(i, n2) || {}, a2 = s2.get, l = s2.set;
        if (a2) r.F[n2][0] |= 2048;
        if (l) r.F[n2][0] |= 4096;
        if (t & 1 || !a2) {
          Object.defineProperty(i, n2, { get: function() {
            {
              if ((r.F[n2][0] & 2048) === 0) {
                return getValue(this, n2);
              }
              var e3 = getHostRef(this);
              var t2 = e3 ? e3.t : i;
              if (!t2) return;
              return t2[n2];
            }
          }, configurable: true, enumerable: true });
        }
        Object.defineProperty(i, n2, { set: function(e3) {
          var i2 = this;
          var s3 = getHostRef(this);
          if (l) {
            var a3 = o2 & 32 ? this[n2] : s3.$hostElement$[n2];
            if (typeof a3 === "undefined" && s3.l.get(n2)) {
              e3 = s3.l.get(n2);
            } else if (!s3.l.get(n2) && a3) {
              s3.l.set(n2, a3);
            }
            l.apply(this, [parsePropertyValue(e3, o2)]);
            e3 = o2 & 32 ? this[n2] : s3.$hostElement$[n2];
            setValue(this, n2, e3, r);
            return;
          }
          {
            if ((t & 1) === 0 || (r.F[n2][0] & 4096) === 0) {
              setValue(this, n2, e3, r);
              if (t & 1 && !s3.t) {
                s3.p.then(function() {
                  if (r.F[n2][0] & 4096 && s3.t[n2] !== s3.l.get(n2)) {
                    s3.t[n2] = e3;
                  }
                });
              }
              return;
            }
            var u = function() {
              var t2 = s3.t[n2];
              if (!s3.l.get(n2) && t2) {
                s3.l.set(n2, t2);
              }
              s3.t[n2] = parsePropertyValue(e3, o2);
              setValue(i2, n2, s3.t[n2], r);
            };
            if (s3.t) {
              u();
            } else {
              s3.p.then(function() {
                return u();
              });
            }
          }
        } });
      } else if (t & 1 && o2 & 64) {
        Object.defineProperty(i, n2, { value: function() {
          var e3 = [];
          for (var r2 = 0; r2 < arguments.length; r2++) {
            e3[r2] = arguments[r2];
          }
          var t2;
          var o3 = getHostRef(this);
          return (t2 = o3 == null ? void 0 : o3.u) == null ? void 0 : t2.then(function() {
            var r3;
            return (r3 = o3.t) == null ? void 0 : r3[n2].apply(r3, e3);
          });
        } });
      }
    });
    if (t & 1) {
      var a = /* @__PURE__ */ new Map();
      i.attributeChangedCallback = function(e2, t2, n2) {
        var o2 = this;
        plt.jmp(function() {
          var s2;
          var l = a.get(e2);
          if (o2.hasOwnProperty(l) && BUILD.lazyLoad) {
            n2 = o2[l];
            delete o2[l];
          } else if (i.hasOwnProperty(l) && typeof o2[l] === "number" && o2[l] == n2) {
            return;
          } else if (l == null) {
            var u = getHostRef(o2);
            var c = u == null ? void 0 : u.o;
            if (c && !(c & 8) && c & 128 && n2 !== t2) {
              var f = u.t;
              var d = (s2 = r.M) == null ? void 0 : s2[e2];
              d == null ? void 0 : d.forEach(function(r2) {
                if (f[r2] != null) {
                  f[r2].call(f, n2, t2, e2);
                }
              });
            }
            return;
          }
          var v = Object.getOwnPropertyDescriptor(i, l);
          n2 = n2 === null && typeof o2[l] === "boolean" ? false : n2;
          if (n2 !== o2[l] && (!v.get || !!v.set)) {
            o2[l] = n2;
          }
        });
      };
      e.observedAttributes = Array.from(new Set(__spreadArray(__spreadArray([], Object.keys((o = r.M) != null ? o : {}), true), s.filter(function(e2) {
        e2[0];
        var t2 = e2[1];
        return t2[0] & 15;
      }).map(function(e2) {
        var t2 = e2[0], n2 = e2[1];
        var o2;
        var i2 = n2[1] || t2;
        a.set(i2, t2);
        if (n2[0] & 512) {
          (o2 = r.$) == null ? void 0 : o2.push([t2, i2]);
        }
        return i2;
      }), true)));
    }
  }
  return e;
};
var initializeComponent = function(e, r, t, n) {
  return __awaiter$1(void 0, void 0, void 0, function() {
    var n2, o, i, s, a, l, u, c, f, d, v;
    return __generator$1(this, function(p) {
      switch (p.label) {
        case 0:
          if (!((r.o & 32) === 0)) return [3, 6];
          r.o |= 32;
          o = t.S;
          if (!o) return [3, 4];
          i = loadModule(t, r);
          if (!(i && "then" in i)) return [3, 2];
          s = uniqueTime();
          return [4, i];
        case 1:
          n2 = p.sent();
          s();
          return [3, 3];
        case 2:
          n2 = i;
          p.label = 3;
        case 3:
          if (!n2) {
            throw new Error('Constructor for "'.concat(t.h, "#").concat(r.U, '" was not found'));
          }
          if (!n2.isProxied) {
            {
              t.M = n2.watchers;
            }
            proxyComponent(n2, t, 2);
            n2.isProxied = true;
          }
          a = createTime("createInstance", t.h);
          {
            r.o |= 8;
          }
          try {
            new n2(r);
          } catch (r2) {
            consoleError(r2, e);
          }
          {
            r.o &= -9;
          }
          {
            r.o |= 128;
          }
          a();
          fireConnectedCallback(r.t, e);
          return [3, 5];
        case 4:
          n2 = e.constructor;
          l = e.localName;
          customElements.whenDefined(l).then(function() {
            return r.o |= 128;
          });
          p.label = 5;
        case 5:
          if (n2 && n2.style) {
            u = void 0;
            if (typeof n2.style === "string") {
              u = n2.style;
            }
            c = getScopeId(t);
            if (!styles.has(c)) {
              f = createTime("registerStyles", t.h);
              registerStyle(c, u, !!(t.o & 1));
              f();
            }
          }
          p.label = 6;
        case 6:
          d = r.P;
          v = function() {
            return scheduleUpdate(r, true);
          };
          if (d && d["s-rc"]) {
            d["s-rc"].push(v);
          } else {
            v();
          }
          return [2];
      }
    });
  });
};
var fireConnectedCallback = function(e, r) {
  {
    safeCall(e, "connectedCallback", void 0, r);
  }
};
var connectedCallback = function(e) {
  if ((plt.o & 1) === 0) {
    var r = getHostRef(e);
    var t = r.i;
    var n = createTime("connectedCallback", t.h);
    if (!(r.o & 1)) {
      r.o |= 1;
      {
        if (t.o & (4 | 8)) {
          setContentReference(e);
        }
      }
      {
        var o = e;
        while (o = o.parentNode || o.host) {
          if (o["s-p"]) {
            attachToAncestor(r, r.P = o);
            break;
          }
        }
      }
      if (t.F) {
        Object.entries(t.F).map(function(r2) {
          var t2 = r2[0], n2 = r2[1][0];
          if (n2 & 31 && e.hasOwnProperty(t2)) {
            var o2 = e[t2];
            delete e[t2];
            e[t2] = o2;
          }
        });
      }
      {
        initializeComponent(e, r, t);
      }
    } else {
      addHostEventListeners(e, r, t.B);
      if (r == null ? void 0 : r.t) {
        fireConnectedCallback(r.t, e);
      } else if (r == null ? void 0 : r.p) {
        r.p.then(function() {
          return fireConnectedCallback(r.t, e);
        });
      }
    }
    n();
  }
};
var setContentReference = function(e) {
  if (!win.document) {
    return;
  }
  var r = e["s-cr"] = win.document.createComment("");
  r["s-cn"] = true;
  insertBefore(e, r, e.firstChild);
};
var disconnectInstance = function(e, r) {
  {
    safeCall(e, "disconnectedCallback", void 0, r || e);
  }
};
var disconnectedCallback = function(e) {
  return __awaiter$1(void 0, void 0, void 0, function() {
    var r;
    return __generator$1(this, function(t) {
      if ((plt.o & 1) === 0) {
        r = getHostRef(e);
        {
          if (r.q) {
            r.q.map(function(e2) {
              return e2();
            });
            r.q = void 0;
          }
        }
        if (r == null ? void 0 : r.t) {
          disconnectInstance(r.t, e);
        } else if (r == null ? void 0 : r.p) {
          r.p.then(function() {
            return disconnectInstance(r.t, e);
          });
        }
      }
      if (rootAppliedStyles.has(e)) {
        rootAppliedStyles.delete(e);
      }
      if (e.shadowRoot && rootAppliedStyles.has(e.shadowRoot)) {
        rootAppliedStyles.delete(e.shadowRoot);
      }
      return [2];
    });
  });
};
var bootstrapLazy = function(e, r) {
  if (r === void 0) {
    r = {};
  }
  var t;
  if (!win.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
  }
  var n = createTime();
  var o = [];
  var i = r.exclude || [];
  var s = win.customElements;
  var a = win.document.head;
  var l = a.querySelector("meta[charset]");
  var u = win.document.createElement("style");
  var c = [];
  var f;
  var d = true;
  Object.assign(plt, r);
  plt.j = new URL(r.resourcesUrl || "./", win.document.baseURI).href;
  var v = false;
  e.map(function(e2) {
    e2[1].map(function(r2) {
      var t2;
      var n2 = { o: r2[0], h: r2[1], F: r2[2], B: r2[3] };
      if (n2.o & 4) {
        v = true;
      }
      {
        n2.F = r2[2];
      }
      {
        n2.B = r2[3];
      }
      {
        n2.$ = [];
      }
      {
        n2.M = (t2 = r2[4]) != null ? t2 : {};
      }
      var a2 = n2.h;
      var l2 = function(e3) {
        __extends(r3, e3);
        function r3(r4) {
          var t3 = e3.call(this, r4) || this;
          t3.hasRegisteredEventListeners = false;
          r4 = t3;
          registerHost(r4, n2);
          if (n2.o & 1) {
            {
              if (!r4.shadowRoot) {
                createShadowRoot.call(r4, n2);
              } else {
                if (r4.shadowRoot.mode !== "open") {
                  throw new Error("Unable to re-use existing shadow root for ".concat(n2.h, "! Mode is set to ").concat(r4.shadowRoot.mode, " but Stencil only supports open shadow roots."));
                }
              }
            }
          }
          return t3;
        }
        r3.prototype.connectedCallback = function() {
          var e4 = this;
          var r4 = getHostRef(this);
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, r4, n2.B);
          }
          if (f) {
            clearTimeout(f);
            f = null;
          }
          if (d) {
            c.push(this);
          } else {
            plt.jmp(function() {
              return connectedCallback(e4);
            });
          }
        };
        r3.prototype.disconnectedCallback = function() {
          var e4 = this;
          plt.jmp(function() {
            return disconnectedCallback(e4);
          });
          plt.raf(function() {
            var r4;
            var t3 = getHostRef(e4);
            var n3 = c.findIndex(function(r5) {
              return r5 === e4;
            });
            if (n3 > -1) {
              c.splice(n3, 1);
            }
            if (((r4 = t3 == null ? void 0 : t3.O) == null ? void 0 : r4.L) instanceof Node && !t3.O.L.isConnected) {
              delete t3.O.L;
            }
          });
        };
        r3.prototype.componentOnReady = function() {
          return getHostRef(this).p;
        };
        return r3;
      }(HTMLElement);
      n2.S = e2[0];
      if (!i.includes(a2) && !s.get(a2)) {
        o.push(a2);
        s.define(a2, proxyComponent(l2, n2, 1));
      }
    });
  });
  if (o.length > 0) {
    if (v) {
      u.textContent += SLOT_FB_CSS;
    }
    {
      u.textContent += o.sort() + HYDRATED_CSS;
    }
    if (u.innerHTML.length) {
      u.setAttribute("data-styles", "");
      var p = (t = plt.A) != null ? t : queryNonceMetaTagContent(win.document);
      if (p != null) {
        u.setAttribute("nonce", p);
      }
      a.insertBefore(u, l ? l.nextSibling : a.firstChild);
    }
  }
  d = false;
  if (c.length) {
    c.map(function(e2) {
      return e2.connectedCallback();
    });
  } else {
    {
      plt.jmp(function() {
        return f = setTimeout(appDidLoad, 30);
      });
    }
  }
  n();
};
var addHostEventListeners = function(e, r, t, n) {
  if (t && win.document) {
    t.map(function(t2) {
      var n2 = t2[0], o = t2[1], i = t2[2];
      var s = getHostListenerTarget(win.document, e, n2);
      var a = hostListenerProxy(r, i);
      var l = hostListenerOpts(n2);
      plt.ael(s, o, a, l);
      (r.q = r.q || []).push(function() {
        return plt.rel(s, o, a, l);
      });
    });
  }
};
var hostListenerProxy = function(e, r) {
  return function(t) {
    var n;
    try {
      {
        if (e.o & 256) {
          (n = e.t) == null ? void 0 : n[r](t);
        } else {
          (e.D = e.D || []).push([r, t]);
        }
      }
    } catch (r2) {
      consoleError(r2, e.$hostElement$);
    }
  };
};
var getHostListenerTarget = function(e, r, t) {
  if (t & 8) {
    return win;
  }
  if (t & 16) {
    return e.body;
  }
  return r;
};
var hostListenerOpts = function(e) {
  return supportsListenerOptions ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 } : (e & 2) !== 0;
};
var __awaiter = function(e, t, a, n) {
  function s(e2) {
    return e2 instanceof a ? e2 : new a(function(t2) {
      t2(e2);
    });
  }
  return new (a || (a = Promise))(function(a2, o) {
    function i(e2) {
      try {
        l(n.next(e2));
      } catch (e3) {
        o(e3);
      }
    }
    function d(e2) {
      try {
        l(n["throw"](e2));
      } catch (e3) {
        o(e3);
      }
    }
    function l(e2) {
      e2.done ? a2(e2.value) : s(e2.value).then(i, d);
    }
    l((n = n.apply(e, t || [])).next());
  });
};
var __generator = function(e, t) {
  var a = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, s, o, i;
  return i = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol === "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function d(e2) {
    return function(t2) {
      return l([e2, t2]);
    };
  }
  function l(d2) {
    if (n) throw new TypeError("Generator is already executing.");
    while (i && (i = 0, d2[0] && (a = 0)), a) try {
      if (n = 1, s && (o = d2[0] & 2 ? s["return"] : d2[0] ? s["throw"] || ((o = s["return"]) && o.call(s), 0) : s.next) && !(o = o.call(s, d2[1])).done) return o;
      if (s = 0, o) d2 = [d2[0] & 2, o.value];
      switch (d2[0]) {
        case 0:
        case 1:
          o = d2;
          break;
        case 4:
          a.label++;
          return { value: d2[1], done: false };
        case 5:
          a.label++;
          s = d2[1];
          d2 = [0];
          continue;
        case 7:
          d2 = a.ops.pop();
          a.trys.pop();
          continue;
        default:
          if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (d2[0] === 6 || d2[0] === 2)) {
            a = 0;
            continue;
          }
          if (d2[0] === 3 && (!o || d2[1] > o[0] && d2[1] < o[3])) {
            a.label = d2[1];
            break;
          }
          if (d2[0] === 6 && a.label < o[1]) {
            a.label = o[1];
            o = d2;
            break;
          }
          if (o && a.label < o[2]) {
            a.label = o[2];
            a.ops.push(d2);
            break;
          }
          if (o[2]) a.ops.pop();
          a.trys.pop();
          continue;
      }
      d2 = t.call(e, a);
    } catch (e2) {
      d2 = [6, e2];
      s = 0;
    } finally {
      n = o = 0;
    }
    if (d2[0] & 5) throw d2[1];
    return { value: d2[0] ? d2[1] : void 0, done: true };
  }
};
var defineCustomElements = function(e, t) {
  return __awaiter(void 0, void 0, void 0, function() {
    return __generator(this, function(e2) {
      switch (e2.label) {
        case 0:
          if (typeof window === "undefined") return [2, void 0];
          return [4, globalScripts()];
        case 1:
          e2.sent();
          return [2, bootstrapLazy(JSON.parse('[["bds-datepicker",[[1,"bds-datepicker",{"typeOfDate":[1,"type-of-date"],"startDateLimit":[1537,"start-date-limit"],"endDateLimit":[1537,"end-date-limit"],"label":[1],"message":[1],"variantBanner":[1537,"variant-banner"],"language":[1],"disabled":[1540],"valueDateSelected":[1537,"value-date-selected"],"valueEndDateSelected":[1537,"value-end-date-selected"],"positionOptions":[1,"position-options"],"dtInputStart":[1,"dt-input-start"],"dtInputEnd":[1,"dt-input-end"],"dtOutzone":[1,"dt-outzone"],"dtButtonPrev":[1,"dt-button-prev"],"dtButtonNext":[1,"dt-button-next"],"dtSelectMonth":[1,"dt-select-month"],"dtSelectYear":[1,"dt-select-year"],"dtButtonClear":[1,"dt-button-clear"],"dtButtonConfirm":[1,"dt-button-confirm"],"open":[32],"stateSelect":[32],"dateSelected":[32],"endDateSelected":[32],"errorMsgDate":[32],"errorMsgEndDate":[32],"intoView":[32],"scrollingTop":[32],"valueDate":[32],"valueEndDate":[32]},null,{"valueDateSelected":["valueDateSelectedChanged"],"valueEndDateSelected":["valueEndDateSelectedChanged"],"startDateLimit":["startDateLimitChanged"],"endDateLimit":["endDateLimitChanged"],"dateSelected":["dateSelectedChanged"]}]]],["bds-list",[[1,"bds-list",{"typeList":[1,"type-list"],"value":[1537],"data":[1537],"internalData":[32]},null,{"data":["dataChanged"],"value":["valueChanged"],"internalData":["internalDataChanged"]}]]],["bds-rich-text",[[0,"bds-rich-text",{"language":[1],"weightButton":[4,"weight-button"],"italicButton":[4,"italic-button"],"strikeThroughButton":[4,"strike-through-button"],"underlineButton":[4,"underline-button"],"linkButton":[4,"link-button"],"codeButton":[4,"code-button"],"alignmentButtons":[4,"alignment-buttons"],"listButtons":[4,"list-buttons"],"quoteButton":[4,"quote-button"],"headingButtons":[4,"heading-buttons"],"unstyledButton":[4,"unstyled-button"],"height":[1],"maxHeight":[1,"max-height"],"positionBar":[1,"position-bar"],"dataTest":[1,"data-test"],"buttomBoldActive":[32],"buttomItalicActive":[32],"buttomStrikeActive":[32],"buttomUnderlineActive":[32],"buttomCodeActive":[32],"buttomLinkActive":[32],"buttomLinkValidDisabled":[32],"buttomAlignLeftActive":[32],"buttomAlignCenterActive":[32],"buttomAlignRightActive":[32],"buttomUnorderedListActive":[32],"buttomOrderedListActive":[32],"buttomQuoteActive":[32],"buttomH1Active":[32],"buttomH2Active":[32],"buttomH3Active":[32],"buttomH4Active":[32],"buttomH5Active":[32],"buttomH6Active":[32],"buttomAccordionActive":[32],"headerHeight":[32],"hasSelectionRange":[32],"selectedLinesList":[32],"treeElementsEditor":[32],"styleSectorActive":[32],"styleOnHover":[32],"whenSelectionLink":[32],"linkButtonInput":[32],"insideComponent":[32]},null,{"weightButton":["buttomsHeaderChanged"],"italicButton":["buttomsHeaderChanged"],"strikeThroughButton":["buttomsHeaderChanged"],"underlineButton":["buttomsHeaderChanged"],"linkButton":["buttomsHeaderChanged"],"codeButton":["buttomsHeaderChanged"],"alignmentButtons":["buttomsHeaderChanged"],"listButtons":["buttomsHeaderChanged"],"quoteButton":["buttomsHeaderChanged"],"headingButtons":["buttomsHeaderChanged"],"unstyledButton":["buttomsHeaderChanged"],"buttomAccordionActive":["buttomAccordionActiveChanged"],"treeElementsEditor":["treeElementsEditorChanged"]}]]],["bds-pagination",[[1,"bds-pagination",{"pages":[1538],"startedPage":[2,"started-page"],"optionsPosition":[1,"options-position"],"pageCounter":[4,"page-counter"],"itemsPage":[1544,"items-page"],"numberItems":[2,"number-items"],"language":[1],"dtButtonInitial":[1,"dt-button-initial"],"dtButtonPrev":[1,"dt-button-prev"],"dtSelectNumber":[1,"dt-select-number"],"dtButtonNext":[1,"dt-button-next"],"dtButtonEnd":[1,"dt-button-end"],"value":[32],"itemValue":[32],"openSelect":[32],"paginationNumbers":[32],"itemsPerPage":[32],"intoView":[32]},null,{"pages":["pagesChanged"],"startedPage":["pagesChanged"],"value":["valueChanged"],"itemValue":["itemSelected"]}]]],["bds-select-chips",[[1,"bds-select-chips",{"options":[1025],"chips":[1025],"newPrefix":[513,"new-prefix"],"value":[1025],"danger":[1540],"success":[1540],"maxlength":[2],"errorMessage":[1025,"error-message"],"disabled":[516],"label":[1],"icon":[513],"duplicated":[4],"canAddNew":[4,"can-add-new"],"notFoundMessage":[1,"not-found-message"],"type":[1],"delimiters":[16],"disableSubmit":[4,"disable-submit"],"helperMessage":[1,"helper-message"],"successMessage":[1025,"success-message"],"inputName":[1,"input-name"],"placeholder":[1],"optionsPosition":[1537,"options-position"],"height":[1],"maxHeight":[1,"max-height"],"dataTest":[1,"data-test"],"internalOptions":[32],"isOpen":[32],"intoView":[32],"selectedOptions":[32],"validationDanger":[32],"isPressed":[32],"validationMesage":[32],"internalChips":[32],"selectedOption":[32],"isValid":[64],"getChips":[64],"clear":[64],"add":[64],"setFocus":[64],"removeFocus":[64]},[[9,"mousedown","handleWindow"]],{"isOpen":["isOpenChanged"],"options":["optionsChanged"],"chips":["valueChanged"],"internalChips":["internalValueChanged"]}]]],["bds-breadcrumb",[[1,"bds-breadcrumb",{"items":[1],"parsedItems":[32],"isDropdownOpen":[32]},null,{"items":["parseItems"]}]]],["bds-carousel",[[1,"bds-carousel",{"autoplay":[4],"autoplayTimeout":[2,"autoplay-timeout"],"autoplayHoverPause":[4,"autoplay-hover-pause"],"autoHeight":[4,"auto-height"],"bullets":[8],"bulletsPosition":[1,"bullets-position"],"infiniteLoop":[4,"infinite-loop"],"arrows":[1],"slidePerPage":[2,"slide-per-page"],"gap":[1],"grab":[4],"loading":[1540],"dtSlideContent":[1,"dt-slide-content"],"dtButtonPrev":[1,"dt-button-prev"],"dtButtonNext":[1,"dt-button-next"],"itemActivated":[32],"seconds":[32],"internalItens":[32],"isWhole":[32],"heightCarousel":[32],"framePressed":[32],"startX":[32],"endX":[32],"autoplayState":[32],"secondsLimit":[32],"buildCarousel":[64],"nextSlide":[64],"prevSlide":[64],"setActivated":[64],"pauseAutoplay":[64],"runAutoplay":[64]},null,{"itemActivated":["itemActivatedChanged"],"autoplayTimeout":["autoplayTimeoutChanged"],"seconds":["secondsChanged"],"isWhole":["isWholeChanged"]}]]],["bds-input-chips",[[1,"bds-input-chips",{"chips":[1025],"blurCreation":[4,"blur-creation"],"type":[1],"label":[1],"maxlength":[2],"maxChipsLength":[2,"max-chips-length"],"icon":[513],"delimiters":[16],"errorMessage":[1025,"error-message"],"danger":[1540],"success":[1540],"value":[1537],"duplicated":[4],"disableSubmit":[4,"disable-submit"],"disabled":[516],"helperMessage":[1,"helper-message"],"successMessage":[1025,"success-message"],"inputName":[1,"input-name"],"placeholder":[1],"counterLength":[4,"counter-length"],"height":[1],"maxHeight":[1,"max-height"],"dataTest":[1,"data-test"],"dtButtonClose":[1,"dt-button-close"],"InputSize":[32],"validationDanger":[32],"inputAvalible":[32],"isPressed":[32],"validationMesage":[32],"internalChips":[32],"isValid":[64],"get":[64],"clear":[64],"add":[64],"setFocus":[64],"removeFocus":[64]},null,{"chips":["valueChanged"],"internalChips":["internalValueChanged"]}]]],["bds-toast",[[1,"bds-toast",{"icon":[513],"actionType":[1,"action-type"],"variant":[1],"toastTitle":[1,"toast-title"],"toastText":[1,"toast-text"],"buttonText":[1,"button-text"],"duration":[2],"buttonAction":[1,"button-action"],"show":[4],"hide":[4],"position":[1],"dtButtonAction":[1,"dt-button-action"],"dtButtonClose":[1,"dt-button-close"],"create":[64],"close":[64]}]]],["bds-autocomplete",[[1,"bds-autocomplete",{"options":[1],"value":[1025],"selected":[1040],"danger":[516],"success":[1540],"disabled":[516],"searchOnlyTitle":[516,"search-only-title"],"label":[1],"icon":[513],"placeholder":[1],"helperMessage":[1,"helper-message"],"errorMessage":[1,"error-message"],"successMessage":[1025,"success-message"],"optionsPosition":[1,"options-position"],"clearIconOnFocus":[4,"clear-icon-on-focus"],"dataTest":[1,"data-test"],"language":[1],"loading":[4],"selectionType":[1,"selection-type"],"selectionTitle":[1,"selection-title"],"selectedAll":[4,"selected-all"],"intoView":[32],"isPressed":[32],"isOpen":[32],"text":[32],"textMultiselect":[32],"placeholderState":[32],"internalOptions":[32],"cloneOptions":[32],"checkedOptions":[32],"isFocused":[32],"validationDanger":[32],"validationMesage":[32],"cleanMultipleSelection":[64]},[[9,"mousedown","handleWindow"]],{"isOpen":["isOpenChanged"],"selected":["itemSelectedChanged"],"value":["valueChanged"],"checkedOptions":["changeCheckedOptions"],"options":["parseOptions"],"selectionType":["changeSelectionType"]}]]],["bds-carousel-item",[[1,"bds-carousel-item",{"theme":[1],"bgImage":[1,"bg-image"],"bgImageBrightness":[2,"bg-image-brightness"],"bgColor":[1,"bg-color"]}]]],["bds-data-table",[[1,"bds-data-table",{"options":[1],"column":[1],"avatar":[4],"chips":[4],"actionArea":[4,"action-area"],"sorting":[4],"newTable":[32],"headerData":[32],"tableData":[32],"sortAscending":[32],"headerActive":[32],"deleteItem":[64]}]]],["bds-tab-group",[[1,"bds-tab-group",{"contentScrollable":[4,"content-scrollable"],"align":[1],"dtButtonPrev":[1,"dt-button-prev"],"dtButtonNext":[1,"dt-button-next"],"internalItens":[32],"isSlideTabs":[32],"alignTab":[32],"tabRefSlide":[32],"positionLeft":[32]}]]],["bds-input-phone-number",[[1,"bds-input-phone-number",{"options":[16],"text":[1],"value":[1025],"danger":[1540],"success":[1540],"disabled":[516],"required":[4],"helperMessage":[1,"helper-message"],"errorMessage":[1025,"error-message"],"successMessage":[1025,"success-message"],"requiredErrorMessage":[1,"required-error-message"],"numberErrorMessage":[1,"number-error-message"],"dataTest":[1,"data-test"],"dtSelectFlag":[1,"dt-select-flag"],"label":[1],"icon":[513],"language":[1025],"isOpen":[32],"selectedCountry":[32],"isoCode":[32],"validationDanger":[32],"validationMesage":[32],"isPressed":[32],"removeFocus":[64],"changeCountry":[64]},[[9,"mousedown","handleWindow"]],{"value":["valueChanged"],"language":["languageChanged"],"text":["handleInputChange"]}]]],["bds-upload",[[1,"bds-upload",{"language":[1],"titleName":[1,"title-name"],"subtitle":[1],"error":[1537],"multiple":[4],"accept":[1],"dataAccept":[1,"data-accept"],"dtInputFiles":[1,"dt-input-files"],"dtLabelAddFile":[1,"dt-label-add-file"],"dtButtonDelete":[1,"dt-button-delete"],"showListPreview":[4,"show-list-preview"],"files":[32],"haveFiles":[32],"hover":[32],"background":[32],"size":[32],"internalAccepts":[32],"formatError":[32],"deleteFile":[64],"deleteAllFiles":[64]},null,{"dataAccept":["dataAcceptChanged"],"files":["filesChanged"],"formatError":["formatErrorChanged"]}]]],["bds-accordion-header",[[1,"bds-accordion-header",{"accordionTitle":[1,"accordion-title"],"icon":[1],"iconColor":[1,"icon-color"],"avatarName":[1,"avatar-name"],"avatarThumb":[1,"avatar-thumb"],"dataTest":[1,"data-test"],"isOpen":[32],"btToggleIsfocus":[32],"numberElement":[32],"toggle":[64],"open":[64],"close":[64]}]]],["bds-avatar-group",[[1,"bds-avatar-group",{"size":[1],"users":[1],"canClick":[4,"can-click"],"internalUsers":[32],"leftoversUsers":[32]}]]],["bds-card-color",[[1,"bds-card-color",{"name":[1],"hex":[1],"gradient":[4],"variable":[1],"lightText":[4,"light-text"],"showMessage":[32]}]]],["bds-menu-exibition",[[1,"bds-menu-exibition",{"avatarName":[1,"avatar-name"],"avatarThumbnail":[1,"avatar-thumbnail"],"avatarSize":[1,"avatar-size"],"value":[1],"subtitle":[1],"description":[1],"disabled":[4]}]]],["bds-nav-tree",[[1,"bds-nav-tree",{"collapse":[1],"isOpen":[1540,"is-open"],"icon":[1],"text":[1],"secondaryText":[1,"secondary-text"],"dataTest":[1,"data-test"],"loading":[4],"disable":[4],"isOpenAftAnimation":[32],"navTreeChild":[32],"numberElement":[32],"toggle":[64],"reciveNumber":[64],"open":[64],"close":[64]},null,{"isOpen":["isOpenChanged"]}]]],["bds-nav-tree-item",[[1,"bds-nav-tree-item",{"collapse":[1],"icon":[1],"text":[1],"secondaryText":[1,"secondary-text"],"isOpen":[1540,"is-open"],"loading":[4],"disable":[4],"dataTest":[1,"data-test"],"toggle":[64]},null,{"isOpen":["isOpenChanged"]}]]],["bds-table-row",[[6,"bds-table-row",{"clickable":[1540],"selected":[4],"bodyCollapse":[1,"body-collapse"],"dataTarget":[1,"data-target"],"isDense":[32],"collapse":[32],"isCollapsed":[32],"colspanNumber":[32],"bdsTable":[32],"collapseRow":[32]}]]],["bds-alert-header",[[1,"bds-alert-header",{"variant":[1],"icon":[513]}]]],["bds-card",[[1,"bds-card",{"height":[1],"width":[1],"clickable":[4],"bgColor":[1,"bg-color"],"selectable":[4],"borderColor":[1025,"border-color"],"dataTest":[1,"data-test"],"isHovered":[32],"isPressed":[32],"elevation":[32]}]]],["bds-chip-selected",[[1,"bds-chip-selected",{"icon":[1],"color":[1],"size":[1],"selected":[4],"disabled":[4],"dataTest":[1,"data-test"],"isSelected":[32]}]]],["bds-input-editable",[[1,"bds-input-editable",{"size":[1],"expand":[4],"dataTest":[1,"data-test"],"inputName":[1,"input-name"],"value":[1537],"requiredErrorMessage":[1,"required-error-message"],"minlength":[2],"minlengthErrorMessage":[1,"minlength-error-message"],"maxlength":[2],"errorMessage":[1,"error-message"],"successMessage":[1025,"success-message"],"helperMessage":[1,"helper-message"],"placeholder":[1],"danger":[1540],"success":[1540],"dtButtonEdit":[1,"dt-button-edit"],"dtButtonClose":[1,"dt-button-close"],"dtButtonConfirm":[1,"dt-button-confirm"],"oldValue":[32],"isEditing":[32],"isValid":[32],"isPressed":[32],"isFocused":[32],"validationMesage":[32],"validationDanger":[32]}]]],["bds-input-password",[[1,"bds-input-password",{"openEyes":[4,"open-eyes"],"value":[1537],"label":[1],"inputName":[1,"input-name"],"max":[1],"maxlength":[2],"min":[1],"minlength":[2],"readonly":[4],"helperMessage":[1,"helper-message"],"errorMessage":[1,"error-message"],"successMessage":[1025,"success-message"],"danger":[516],"success":[1540],"icon":[513],"disabled":[4],"autoCapitalize":[1,"auto-capitalize"],"autoComplete":[1,"auto-complete"],"placeholder":[1],"dataTest":[1,"data-test"],"validationDanger":[32],"isPressed":[32],"validationMesage":[32]},null,{"value":["onChange"]}]]],["bds-menu-action",[[1,"bds-menu-action",{"buttonText":[1,"button-text"],"subMenu":[4,"sub-menu"],"iconLeft":[1,"icon-left"],"subtitle":[1],"description":[1],"lipstick":[4],"disabled":[4],"openParentMenu":[32],"openSubMenu":[32],"positionSubMenu":[32],"stateSubMenu":[32],"delaySubMenu":[32],"zIndex":[32],"delay":[32]},null,{"openParentMenu":["openParentMenuChanged"],"openSubMenu":["openSubMenuChanged"],"stateSubMenu":["stateSubMenuChanged"]}]]],["bds-menu-list-item",[[1,"bds-menu-list-item",{"color":[1],"icon":[513]}]]],["bds-sidebar",[[1,"bds-sidebar",{"isOpen":[1540,"is-open"],"sidebarPosition":[1,"sidebar-position"],"type":[1],"margin":[4],"width":[2],"dtOutzone":[1,"dt-outzone"],"dtButtonClose":[1,"dt-button-close"],"background":[1],"InnerSpacing":[32],"toggle":[64]},null,{"isOpen":["isOpenChanged"]}]]],["bds-slider",[[1,"bds-slider",{"step":[2],"min":[2],"max":[2],"value":[2],"markers":[4],"label":[4],"type":[1],"dataMarkers":[1,"data-markers"],"dataTest":[1,"data-test"],"stepArray":[32],"internalOptions":[32],"inputValue":[32],"tooltipPosition":[32]}]]],["bds-step",[[1,"bds-step",{"last":[4],"completed":[4],"active":[4],"disabled":[4],"index":[2],"pointer":[4],"dataTest":[1,"data-test"]}]]],["bds-table-th",[[6,"bds-table-th",{"sortable":[4],"arrow":[1],"justifyContent":[1,"justify-content"],"isDense":[32]}]]],["bds-tabs",[[4,"bds-tabs",{"align":[1]},[[0,"scrollButtonClick","onScrollButtonClick"],[16,"bdsTabChange","onSelectedTab"]]]]],["bds-warning",[[1,"bds-warning"]]],["bds-alert-body",[[1,"bds-alert-body"]]],["bds-button-group",[[1,"bds-button-group",{"size":[1025],"direction":[1025],"color":[1025],"multiple":[1028],"activeIndexes":[32],"activateButton":[64]},null,{"size":["handlePropChanges"],"direction":["handlePropChanges"],"color":["handlePropChanges"],"multiple":["handlePropChanges"]}]]],["bds-card-body",[[1,"bds-card-body"]]],["bds-card-footer",[[1,"bds-card-footer",{"align":[1]}]]],["bds-card-header",[[1,"bds-card-header",{"align":[1]}]]],["bds-card-subtitle",[[1,"bds-card-subtitle",{"text":[1]}]]],["bds-card-title",[[1,"bds-card-title",{"text":[1]}]]],["bds-chip",[[1,"bds-chip",{"icon":[1],"size":[1],"variant":[1],"danger":[516],"filter":[4],"clickable":[4],"deletable":[4],"disabled":[4]}]]],["bds-expansion-panel-header",[[1,"bds-expansion-panel-header",{"text":[1]}]]],["bds-list-item-content",[[6,"bds-list-item-content",{"direction":[1],"justifyContent":[1,"justify-content"],"flexWrap":[1,"flex-wrap"],"alignItems":[1,"align-items"],"gap":[1]}]]],["bds-menu-separation",[[1,"bds-menu-separation",{"value":[1],"size":[1]}]]],["bds-modal",[[1,"bds-modal",{"open":[1540],"closeButton":[1540,"close-button"],"size":[1537],"outzoneClose":[4,"outzone-close"],"enterClose":[4,"enter-close"],"dtOutzone":[1,"dt-outzone"],"dtButtonClose":[1,"dt-button-close"],"toggle":[64]},null,{"open":["isOpenChanged"]}]]],["bds-modal-close-button",[[1,"bds-modal-close-button",{"active":[1540]}]]],["bds-progress-bar",[[1,"bds-progress-bar",{"percent":[2],"size":[1],"color":[1],"text":[1],"dataTest":[1,"data-test"]}]]],["bds-tab",[[0,"bds-tab",{"group":[1],"label":[1],"active":[4],"isActive":[32]},[[16,"bdsTabChange","handleTabChange"],[16,"bdsTabInit","handleTabChange"]]]]],["bds-accordion",[[1,"bds-accordion",{"startOpen":[516,"start-open"],"divisor":[516],"isOpen":[32],"numberElement":[32],"condition":[32],"toggle":[64],"open":[64],"close":[64],"notStart":[64],"reciveNumber":[64]},null,{"isOpen":["isOpenChanged"],"divisor":["divisorChanged"]}]]],["bds-accordion-body",[[1,"bds-accordion-body",{"dataTest":[1,"data-test"],"isOpen":[32],"isOpenAftAnimation":[32],"heightContainer":[32],"numberElement":[32],"hasDivisor":[32],"toggle":[64],"open":[64],"close":[64],"divisor":[64]},null,{"isOpen":["isOpenChanged"]}]]],["bds-accordion-group",[[1,"bds-accordion-group",{"collapse":[1],"divisor":[4],"closeAll":[64],"openAll":[64]},null,{"divisor":["divisorChanged"]}]]],["bds-alert",[[1,"bds-alert",{"open":[1540],"dataTest":[1,"data-test"],"position":[1],"toggle":[64]},null,{"open":["isOpenChanged"]}]]],["bds-alert-actions",[[1,"bds-alert-actions"]]],["bds-banner-link",[[1,"bds-banner-link",{"link":[1],"target":[1],"dataTest":[1,"data-test"]}]]],["bds-divider",[[1,"bds-divider",{"styleType":[1,"style-type"],"orientation":[1],"color":[1]}]]],["bds-expansion-panel",[[1,"bds-expansion-panel"]]],["bds-expansion-panel-body",[[1,"bds-expansion-panel-body",{"open":[4],"text":[1]}]]],["bds-loading-bar",[[1,"bds-loading-bar",{"percent":[2],"size":[1],"text":[1],"dataTest":[1,"data-test"]}]]],["bds-loading-page",[[1,"bds-loading-page",{"dataTest":[1,"data-test"],"svgContent":[32]}]]],["bds-menu",[[1,"bds-menu",{"menu":[1],"position":[1],"open":[1540],"refElement":[32],"intoView":[32],"menupositionTop":[32],"menupositionLeft":[32],"toggle":[64]},null,{"open":["openMenu"]}]]],["bds-menu-list",[[1,"bds-menu-list"]]],["bds-modal-action",[[1,"bds-modal-action"]]],["bds-nav-tree-group",[[1,"bds-nav-tree-group",{"collapse":[1],"isOpenAftAnimation":[32],"navTreeChild":[32],"closeAll":[64],"openAll":[64]}]]],["bds-navbar",[[1,"bds-navbar",{"orientation":[1],"backgroundColor":[1,"background-color"],"justifyContent":[1,"justify-content"],"dataTest":[1,"data-test"]}]]],["bds-navbar-content",[[1,"bds-navbar-content"]]],["bds-radio-group",[[6,"bds-radio-group",{"value":[1537]},null,{"value":["valueChanged"]}]]],["bds-stepper",[[1,"bds-stepper",{"setActiveStep":[64],"setCompletedStep":[64],"getActiveStep":[64],"resetActiveSteps":[64],"resetCompletedSteps":[64]}]]],["bds-tab-item",[[1,"bds-tab-item",{"numberElement":[1538,"number-element"],"label":[1],"icon":[1],"iconPosition":[1,"icon-position"],"iconTheme":[1,"icon-theme"],"badge":[4],"badgeShape":[1,"badge-shape"],"badgeColor":[1,"badge-color"],"badgeIcon":[1,"badge-icon"],"badgeAnimation":[4,"badge-animation"],"badgePosition":[1,"badge-position"],"badgeNumber":[2,"badge-number"],"disable":[1540],"error":[4],"headerStyle":[1,"header-style"],"contentStyle":[1,"content-style"],"open":[1540],"dataTest":[1,"data-test"],"reciveNumber":[64]},null,{"disable":["disableChanged"]}]]],["bds-tab-panel",[[4,"bds-tab-panel",{"group":[1],"isActive":[32]},[[16,"bdsTabChange","handleTabChange"],[16,"bdsTabInit","handleTabChange"]]]]],["bds-table",[[6,"bds-table",{"scrollable":[1540],"collapse":[1540],"denseTable":[1540,"dense-table"]}]]],["bds-table-body",[[6,"bds-table-body",{"multipleRows":[32]}]]],["bds-table-header",[[6,"bds-table-header"]]],["bds-icon",[[1,"bds-icon",{"color":[1],"ariaLabel":[1537,"aria-label"],"flipRtl":[4,"flip-rtl"],"name":[1],"src":[1],"icon":[8],"size":[1],"lazy":[4],"theme":[513],"type":[1],"dataTest":[1,"data-test"],"svgContent":[32],"isVisible":[32]},null,{"name":["loadIcon"],"src":["loadIcon"],"icon":["loadIcon"],"color":["loadIcon"],"theme":["loadIcon"]}]]],["bds-grid_5",[[0,"bds-test-component"],[1,"bds-theme-provider",{"theme":[1]}],[1,"bds-paper",{"elevation":[1537],"dataTest":[1,"data-test"],"border":[4],"height":[1],"width":[1],"bgColor":[1,"bg-color"],"borderColor":[1,"border-color"],"hasBorder":[32],"constElevation":[32]}],[1,"bds-grid",{"height":[1],"direction":[1],"justifyContent":[1,"justify-content"],"flexWrap":[1,"flex-wrap"],"alignItems":[1,"align-items"],"container":[4],"containerFluid":[4,"container-fluid"],"xxs":[1],"xs":[1],"sm":[1],"md":[1],"lg":[1],"xg":[1],"xxsOffset":[1,"xxs-offset"],"xsOffset":[1,"xs-offset"],"smOffset":[1,"sm-offset"],"mdOffset":[1,"md-offset"],"lgOffset":[1,"lg-offset"],"xgOffset":[1,"xg-offset"],"gap":[1],"padding":[1],"margin":[1],"bgColor":[1,"bg-color"]}],[1,"bds-typo",{"variant":[1],"lineHeight":[1,"line-height"],"bold":[1],"italic":[4],"noWrap":[4,"no-wrap"],"paragraph":[4],"margin":[4],"tag":[1],"dataTest":[1,"data-test"]}]]],["bds-list-item",[[1,"bds-list-item",{"checked":[1540],"typeList":[1,"type-list"],"avatarName":[1,"avatar-name"],"avatarThumbnail":[1,"avatar-thumbnail"],"icon":[1],"value":[1],"text":[1],"secondaryText":[1,"secondary-text"],"chips":[1025],"actionsButtons":[1025,"actions-buttons"],"clickable":[4],"active":[4],"borderRadius":[4,"border-radius"],"size":[1],"dataTest":[1,"data-test"],"internalChips":[32],"internalActionsButtons":[32]},null,{"checked":["checkedChanged"],"chips":["chipsChanged"],"actionsButtons":["actionsButtonsChanged"]}]]],["bds-select",[[1,"bds-select",{"options":[1],"value":[1032],"danger":[516],"success":[1540],"disabled":[516],"label":[1],"icon":[513],"placeholder":[1],"helperMessage":[1,"helper-message"],"errorMessage":[1,"error-message"],"successMessage":[1025,"success-message"],"optionsPosition":[1537,"options-position"],"dataTest":[1,"data-test"],"intoView":[32],"isOpen":[32],"text":[32],"validationDanger":[32],"isPressed":[32],"validationMesage":[32],"internalOptions":[32]},[[11,"mousedown","handleWindow"]],{"isOpen":["isOpenChanged"],"value":["valueChanged"],"options":["optionsChanged"]}]]],["bds-image",[[1,"bds-image",{"src":[1537],"alt":[1],"width":[1],"height":[1],"objectFit":[1,"object-fit"],"brightness":[2],"dataTest":[1,"data-test"],"imageLoaded":[32],"loadError":[32],"currentSrc":[32],"loadImage":[64]}]]],["bds-badge",[[1,"bds-badge",{"color":[1],"shape":[1],"icon":[1],"number":[2],"animation":[4],"dataTest":[1,"data-test"],"type":[32]},null,{"number":["numberChanged"]}]]],["bds-chip-tag",[[1,"bds-chip-tag",{"icon":[1],"color":[1],"dataTest":[1,"data-test"]}]]],["bds-table-cell",[[6,"bds-table-cell",{"type":[1],"sortable":[4],"justifyContent":[1,"justify-content"],"isDense":[32]}]]],["bds-toast-container",[[6,"bds-toast-container"]]],["bds-checkbox_2",[[1,"bds-select-option",{"value":[8],"selected":[4],"disabled":[4],"invisible":[1540],"danger":[1540],"bulkOption":[1,"bulk-option"],"slotAlign":[1,"slot-align"],"titleText":[1,"title-text"],"status":[1],"typeOption":[1537,"type-option"],"checked":[1540],"dataTest":[1,"data-test"],"toggle":[64],"toMark":[64],"markOff":[64]},null,{"typeOption":["changeSelectionType"]}],[1,"bds-checkbox",{"refer":[1],"label":[1],"name":[1],"checked":[1540],"indeterminate":[1540],"disabled":[4],"dataTest":[1,"data-test"],"checkBoxId":[32],"getInputElement":[64],"getValue":[64],"toggle":[64]}]]],["bds-datepicker-period_2",[[1,"bds-datepicker-period",{"startDate":[16,"start-date"],"endDate":[16,"end-date"],"startDateSelect":[1040,"start-date-select"],"endDateSelect":[1040,"end-date-select"],"language":[1],"stateSelect":[1537,"state-select"],"dtButtonPrev":[1,"dt-button-prev"],"dtButtonNext":[1,"dt-button-next"],"dtSelectMonth":[1,"dt-select-month"],"dtSelectYear":[1,"dt-select-year"],"week":[32],"months":[32],"years":[32],"monthActivated":[32],"yearActivated":[32],"animatePrev":[32],"animateNext":[32],"activeSelectYear":[32],"openSelectMonth":[32],"openSelectYear":[32],"monthsSlide":[32],"loadingSlide":[32],"clear":[64]},null,{"startDateSelect":["startDateSelectChanged"],"endDateSelect":["endDateSelectChanged"],"endDate":["periodToSelectChanged"],"startDate":["periodToSelectChanged"]}],[1,"bds-datepicker-single",{"endDate":[16,"end-date"],"startDate":[16,"start-date"],"dateSelect":[1040,"date-select"],"language":[1],"dtButtonPrev":[1,"dt-button-prev"],"dtButtonNext":[1,"dt-button-next"],"dtSelectMonth":[1,"dt-select-month"],"dtSelectYear":[1,"dt-select-year"],"week":[32],"months":[32],"years":[32],"monthActivated":[32],"yearActivated":[32],"animatePrev":[32],"animateNext":[32],"openSelectMonth":[32],"openSelectYear":[32],"monthsSlide":[32],"loadingSlide":[32],"clear":[64]},null,{"endDate":["periodToSelectChanged"],"startDate":["periodToSelectChanged"],"dateSelect":["startDateSelectChanged"]}]]],["bds-input",[[1,"bds-input",{"inputName":[1,"input-name"],"type":[513],"label":[1],"placeholder":[1],"autoCapitalize":[1,"auto-capitalize"],"autoComplete":[1,"auto-complete"],"max":[1],"maxlength":[2],"min":[1],"minlength":[2],"readonly":[4],"required":[4],"pattern":[1],"helperMessage":[1,"helper-message"],"errorMessage":[1025,"error-message"],"successMessage":[1025,"success-message"],"icon":[513],"disabled":[1540],"danger":[1540],"success":[1540],"value":[1025],"counterLength":[4,"counter-length"],"counterLengthRule":[16,"counter-length-rule"],"isSubmit":[4,"is-submit"],"isTextarea":[4,"is-textarea"],"rows":[2],"cols":[2],"autoResize":[4,"auto-resize"],"resizable":[4],"minHeight":[2,"min-height"],"maxHeight":[2,"max-height"],"iconSize":[1,"icon-size"],"requiredErrorMessage":[1,"required-error-message"],"minlengthErrorMessage":[1,"minlength-error-message"],"minErrorMessage":[1,"min-error-message"],"maxErrorMessage":[1,"max-error-message"],"emailErrorMessage":[1,"email-error-message"],"numberErrorMessage":[1,"number-error-message"],"chips":[4],"debounceDelay":[2,"debounce-delay"],"dataTest":[1,"data-test"],"encode":[4],"isPressed":[32],"isPassword":[32],"validationMesage":[32],"validationDanger":[32],"setFocus":[64],"removeFocus":[64],"getInputElement":[64],"isValid":[64],"clear":[64]},null,{"value":["valueChanged"]}]]],["bds-banner",[[1,"bds-banner",{"bannerAlign":[1,"banner-align"],"buttonClose":[1,"button-close"],"context":[1],"variant":[1],"dtButtonClose":[1,"dt-button-close"],"visible":[32],"toggle":[64]}]]],["bds-dropdown",[[1,"bds-dropdown",{"activeMode":[1,"active-mode"],"open":[1540],"position":[1],"dataTest":[1,"data-test"],"intoView":[32],"stateOpenSubMenu":[32],"stateSubMenu":[32],"zIndex":[32],"delay":[32],"toggle":[64],"setOpen":[64],"setClose":[64]},null,{"open":["isOpenChanged"],"position":["isPositionChanged"],"stateOpenSubMenu":["openSubMenuChanged"],"stateSubMenu":["stateSubMenuChanged"]}]]],["bds-radio_2",[[1,"bds-radio",{"refer":[1],"label":[1],"value":[1],"name":[1],"checked":[1540],"disabled":[4],"dataTest":[1,"data-test"],"radioId":[32],"getInputElement":[64],"getValue":[64]},null,{"checked":["checkedChanged"]}],[1,"bds-switch",{"refer":[1],"size":[1],"name":[1],"checked":[1540],"disabled":[4],"dataTest":[1,"data-test"],"switchId":[32],"getInputElement":[64],"getValue":[64]},null,{"checked":["checkedChanged"]}]]],["bds-counter-text",[[0,"bds-counter-text",{"length":[1026],"max":[2],"active":[1028],"warning":[1040],"delete":[1040]}]]],["bds-loading-spinner",[[1,"bds-loading-spinner",{"variant":[1],"size":[1],"color":[1],"dataTest":[1,"data-test"],"svgContent":[32]}]]],["bds-button",[[1,"bds-button",{"block":[4],"fullWidth":[4,"full-width"],"justifyContent":[1,"justify-content"],"groupIcon":[4,"group-icon"],"disabled":[4],"color":[1025],"size":[1025],"variant":[1025],"icon":[513],"iconLeft":[513,"icon-left"],"iconRight":[513,"icon-right"],"arrow":[4],"type":[1],"iconTheme":[513,"icon-theme"],"typeIcon":[513,"type-icon"],"bdsLoading":[4,"bds-loading"],"bdsLoadingVariant":[1,"bds-loading-variant"],"bdsLoadingColor":[1,"bds-loading-color"],"dataTest":[1,"data-test"],"slotText":[32],"active":[32],"position":[32],"direction":[32],"group":[32],"loadingColor":[32],"isActive":[64],"setPosition":[64],"setDirection":[64],"setSize":[64],"setColor":[64],"setVariant":[64]},[[2,"click","handleClick"]],{"bdsLoading":["renderLoadingSpinner"]}]]],["bds-illustration_2",[[1,"bds-illustration",{"type":[1],"name":[1],"alt":[1],"dataTest":[1,"data-test"],"IllustrationContent":[32]}],[1,"bds-skeleton",{"shape":[1],"height":[1],"width":[1],"dataTest":[1,"data-test"]}]]],["bds-avatar",[[1,"bds-avatar",{"name":[1],"thumbnail":[1025],"size":[1],"color":[1],"upload":[4],"openUpload":[4,"open-upload"],"ellipsis":[2],"dataTest":[1,"data-test"],"hasThumb":[32]}]]],["bds-chip-clickable_2",[[1,"bds-chip-clickable",{"icon":[1],"avatar":[1],"color":[1],"size":[1],"clickable":[4],"close":[4],"disabled":[4],"dataTest":[1,"data-test"],"dtButtonClose":[1,"dt-button-close"],"visible":[32]}],[1,"bds-tooltip",{"tooltipText":[1025,"tooltip-text"],"disabled":[516],"position":[1],"maxWidth":[1,"max-width"],"dataTest":[1,"data-test"],"isMouseOver":[32],"textVerify":[32],"maxWidtTooltip":[32],"visible":[64],"invisible":[64]},null,{"tooltipText":["tooltipTextChanged"],"maxWidth":["maxWidthChanged"]}]]],["bds-button-icon",[[1,"bds-button-icon",{"disabled":[4],"size":[1],"variant":[1],"iconTheme":[513,"icon-theme"],"icon":[513],"dataTest":[1,"data-test"]}]]]]'), t)];
      }
    });
  });
};
(function() {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(a, [], this.constructor);
    };
    HTMLElement.prototype = a.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a);
  }
})();
function UaiKitProvider({
  theme = "light",
  children
}) {
  return /* @__PURE__ */ jsx(BdsThemeProvider, { theme, children });
}
defineCustomElements();
export {
  Host as H,
  UaiKitProvider as U,
  createEvent as c,
  getElement as g,
  h,
  registerInstance as r
};
//# sourceMappingURL=index-C5zPPjub.js.map
