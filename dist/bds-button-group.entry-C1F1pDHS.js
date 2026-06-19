import { h, H as Host, g as getElement, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var __awaiter = function(t, e, n, i) {
  function r(t2) {
    return t2 instanceof n ? t2 : new n(function(e2) {
      e2(t2);
    });
  }
  return new (n || (n = Promise))(function(n2, o) {
    function s(t2) {
      try {
        a(i.next(t2));
      } catch (t3) {
        o(t3);
      }
    }
    function u(t2) {
      try {
        a(i["throw"](t2));
      } catch (t3) {
        o(t3);
      }
    }
    function a(t2) {
      t2.done ? n2(t2.value) : r(t2.value).then(s, u);
    }
    a((i = i.apply(t, e || [])).next());
  });
};
var __generator = function(t, e) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, i, r, o, s;
  return s = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol === "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function u(t2) {
    return function(e2) {
      return a([t2, e2]);
    };
  }
  function a(u2) {
    if (i) throw new TypeError("Generator is already executing.");
    while (s && (s = 0, u2[0] && (n = 0)), n) try {
      if (i = 1, r && (o = u2[0] & 2 ? r["return"] : u2[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, u2[1])).done) return o;
      if (r = 0, o) u2 = [u2[0] & 2, o.value];
      switch (u2[0]) {
        case 0:
        case 1:
          o = u2;
          break;
        case 4:
          n.label++;
          return { value: u2[1], done: false };
        case 5:
          n.label++;
          r = u2[1];
          u2 = [0];
          continue;
        case 7:
          u2 = n.ops.pop();
          n.trys.pop();
          continue;
        default:
          if (!(o = n.trys, o = o.length > 0 && o[o.length - 1]) && (u2[0] === 6 || u2[0] === 2)) {
            n = 0;
            continue;
          }
          if (u2[0] === 3 && (!o || u2[1] > o[0] && u2[1] < o[3])) {
            n.label = u2[1];
            break;
          }
          if (u2[0] === 6 && n.label < o[1]) {
            n.label = o[1];
            o = u2;
            break;
          }
          if (o && n.label < o[2]) {
            n.label = o[2];
            n.ops.push(u2);
            break;
          }
          if (o[2]) n.ops.pop();
          n.trys.pop();
          continue;
      }
      u2 = e.call(t, n);
    } catch (t2) {
      u2 = [6, t2];
      r = 0;
    } finally {
      i = o = 0;
    }
    if (u2[0] & 5) throw u2[1];
    return { value: u2[0] ? u2[1] : void 0, done: true };
  }
};
var buttonGroupCss = ":host{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}";
var ButtonGroup = function() {
  function t(t2) {
    registerInstance(this, t2);
    this.buttonSelected = createEvent(this, "buttonSelected");
    this.activeIndexes = /* @__PURE__ */ new Set();
    this.size = "medium";
    this.direction = "row";
    this.color = "primary";
    this.multiple = false;
  }
  t.prototype.componentDidLoad = function() {
    this.buttons = this.el.getElementsByTagName("bds-button");
    this.setupButtons();
  };
  t.prototype.componentDidUpdate = function() {
    this.setupButtons();
  };
  t.prototype.handlePropChanges = function() {
    this.setupButtons();
  };
  t.prototype.setupButtons = function() {
    var t2 = this;
    var e = function(e2) {
      var i2 = n.buttons[e2];
      i2.setAttribute("data-index", e2.toString());
      i2.addEventListener("click", function() {
        return t2.selectButton(e2);
      });
      i2.setVariant("outline");
      n.updateButtonPosition(e2);
      n.updateButtonDirection(e2);
      n.updateButtonSize(e2);
      n.updateButtonColor(e2);
    };
    var n = this;
    for (var i = 0; i < this.buttons.length; i++) {
      e(i);
    }
  };
  t.prototype.activateButton = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e) {
        if (t2 >= 0 && t2 < this.buttons.length) {
          this.selectButton(t2);
        }
        return [2];
      });
    });
  };
  t.prototype.selectButton = function(t2) {
    if (this.multiple) {
      if (this.activeIndexes.has(t2)) {
        this.activeIndexes.delete(t2);
      } else {
        this.activeIndexes.add(t2);
      }
    } else {
      if (this.activeIndexes.has(t2)) {
        this.activeIndexes.clear();
      } else {
        this.activeIndexes.clear();
        this.activeIndexes.add(t2);
      }
    }
    this.updateButtonStates(t2);
  };
  t.prototype.updateButtonStates = function(t2) {
    for (var e = 0; e < this.buttons.length; e++) {
      var n = this.buttons[e];
      if (this.activeIndexes.has(e)) {
        n.isActive(true);
        n.setVariant("solid");
        n.classList.add("active");
      } else {
        n.isActive(false);
        n.setVariant("outline");
        n.classList.remove("active");
      }
      if (e === t2) {
        this.buttonSelected.emit(n.id);
      }
    }
  };
  t.prototype.updateButtonPosition = function(t2) {
    var e = this.buttons[t2];
    if (t2 === 0) {
      e.setPosition("first");
    } else if (t2 === this.buttons.length - 1) {
      e.setPosition("last");
    } else {
      e.setPosition("middle");
    }
  };
  t.prototype.updateButtonDirection = function(t2) {
    var e = this.buttons[t2];
    this.direction === "row" ? e.setDirection("row") : e.setDirection("column");
  };
  t.prototype.updateButtonSize = function(t2) {
    var e = this.buttons[t2];
    this.size === "medium" ? e.setSize("medium") : e.setSize("large");
  };
  t.prototype.updateButtonColor = function(t2) {
    var e = this.buttons[t2];
    e.setColor(this.color);
  };
  t.prototype.render = function() {
    return h(Host, { key: "4e0238820d5167d4a569e33eadb95f90b101358a", class: "button_group" }, h("bds-grid", { key: "d39ddf41a04d2bda4906da8311b8a455d6224f97", direction: this.direction }, h("slot", { key: "c76401b3941e44fee48435a26a1e687d1ab1955d" })));
  };
  Object.defineProperty(t.prototype, "el", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  Object.defineProperty(t, "watchers", { get: function() {
    return { size: ["handlePropChanges"], direction: ["handlePropChanges"], color: ["handlePropChanges"], multiple: ["handlePropChanges"] };
  }, enumerable: false, configurable: true });
  return t;
}();
ButtonGroup.style = buttonGroupCss;
export {
  ButtonGroup as bds_button_group
};
//# sourceMappingURL=bds-button-group.entry-C1F1pDHS.js.map
