import { h, H as Host, g as getElement, r as registerInstance } from "./index-C5zPPjub.js";
var __awaiter = function(t, e, n, r) {
  function i(t2) {
    return t2 instanceof n ? t2 : new n(function(e2) {
      e2(t2);
    });
  }
  return new (n || (n = Promise))(function(n2, o) {
    function s(t2) {
      try {
        u(r.next(t2));
      } catch (t3) {
        o(t3);
      }
    }
    function a(t2) {
      try {
        u(r["throw"](t2));
      } catch (t3) {
        o(t3);
      }
    }
    function u(t2) {
      t2.done ? n2(t2.value) : i(t2.value).then(s, a);
    }
    u((r = r.apply(t, e || [])).next());
  });
};
var __generator = function(t, e) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol === "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(t2) {
    return function(e2) {
      return u([t2, e2]);
    };
  }
  function u(a2) {
    if (r) throw new TypeError("Generator is already executing.");
    while (s && (s = 0, a2[0] && (n = 0)), n) try {
      if (r = 1, i && (o = a2[0] & 2 ? i["return"] : a2[0] ? i["throw"] || ((o = i["return"]) && o.call(i), 0) : i.next) && !(o = o.call(i, a2[1])).done) return o;
      if (i = 0, o) a2 = [a2[0] & 2, o.value];
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
          i = a2[1];
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
      i = 0;
    } finally {
      r = o = 0;
    }
    if (a2[0] & 5) throw a2[1];
    return { value: a2[0] ? a2[1] : void 0, done: true };
  }
};
var stepperCss = ":host{width:100%;border-radius:8px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host ::slotted(bds-step:last-child){-ms-flex:inherit;flex:inherit}::slotted(.stepper__container__divisor){-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;height:1.5px;background:var(--color-content-disable, rgb(89, 89, 89));margin:0px 8px;min-width:24px}::slotted(.stepper__container__divisor--completed){border-top:2px solid var(--color-primary, rgb(30, 107, 241))}";
var BdsStepper = function() {
  function t(t2) {
    registerInstance(this, t2);
  }
  t.prototype.connectedCallback = function() {
    var t2 = this;
    this.childOptions.forEach(function(e, n) {
      e.index = n;
      if (n === t2.childOptions.length - 1) {
        e.last = true;
      }
    });
  };
  t.prototype.componentDidLoad = function() {
    this.renderLine();
  };
  t.prototype.setActiveStep = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e) {
        this.resetActiveSteps();
        this.childOptions[t2].active = true;
        return [2];
      });
    });
  };
  t.prototype.setCompletedStep = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e) {
        this.childOptions[t2].completed = true;
        return [2];
      });
    });
  };
  t.prototype.getActiveStep = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        return [2, this.childOptions.find(function(t3) {
          return t3.active === true;
        }).index];
      });
    });
  };
  t.prototype.resetActiveSteps = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, e, n;
      return __generator(this, function(r) {
        for (t2 = 0, e = this.childOptions; t2 < e.length; t2++) {
          n = e[t2];
          n.active = false;
        }
        return [2];
      });
    });
  };
  t.prototype.resetCompletedSteps = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, e, n;
      return __generator(this, function(r) {
        for (t2 = 0, e = this.childOptions; t2 < e.length; t2++) {
          n = e[t2];
          n.completed = false;
        }
        return [2];
      });
    });
  };
  Object.defineProperty(t.prototype, "childOptions", { get: function() {
    return Array.from(this.el.querySelectorAll("bds-step"));
  }, enumerable: false, configurable: true });
  t.prototype.renderLine = function() {
    var t2 = this;
    var e = document.createElement("div");
    e.classList.add("stepper__container__divisor");
    Array.from(this.childOptions).forEach(function(n, r) {
      if (t2.childOptions.length - 1 != r) {
        n.insertAdjacentHTML("afterend", e.outerHTML);
      }
    });
  };
  t.prototype.render = function() {
    return h(Host, { key: "a793010b385c44a42b19bcb31ec1a6f828ac32e6", class: "stepper__container" }, h("slot", { key: "2d9955120102d625dba629acfa47380c3eed2017" }));
  };
  Object.defineProperty(t.prototype, "el", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  return t;
}();
BdsStepper.style = stepperCss;
export {
  BdsStepper as bds_stepper
};
//# sourceMappingURL=bds-stepper.entry-Bv5Bckpk.js.map
