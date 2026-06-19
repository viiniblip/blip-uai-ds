import { h, H as Host, g as getElement, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var RadioGroup = function() {
  function e(e2) {
    var t = this;
    registerInstance(this, e2);
    this.bdsRadioGroupChange = createEvent(this, "bdsRadioGroupChange");
    this.radioGroupElement = null;
    this.chagedOptions = function(e3, r) {
      if (r.detail.checked == true) {
        t.value = e3;
      }
    };
  }
  e.prototype.valueChanged = function(e2) {
    this.setSelectedRadio(e2);
    this.bdsRadioGroupChange.emit({ value: e2 });
  };
  e.prototype.componentWillRender = function() {
    var e2 = this;
    this.radioGroupElement = this.element.getElementsByTagName("bds-radio");
    var t = function(t2) {
      r.radioGroupElement[t2].addEventListener("bdsChange", function(r2) {
        return e2.chagedOptions(e2.radioGroupElement[t2].value, r2);
      });
    };
    var r = this;
    for (var n = 0; n < this.radioGroupElement.length; n++) {
      t(n);
    }
  };
  e.prototype.setSelectedRadio = function(e2) {
    var t = this.radioGroupElement;
    for (var r = 0; r < t.length; r++) {
      var n = t[r].value;
      t[r].checked = false;
      if (t[r].checked == false && e2 == n) {
        t[r].checked = true;
      }
    }
  };
  e.prototype.render = function() {
    return h(Host, { key: "c1a2f0b95b7e6d17cd70c8358b8ea78b51152a7e" }, h("slot", { key: "5158c9c608213c405366ba03d522e977e6d896ca" }));
  };
  Object.defineProperty(e.prototype, "element", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  Object.defineProperty(e, "watchers", { get: function() {
    return { value: ["valueChanged"] };
  }, enumerable: false, configurable: true });
  return e;
}();
export {
  RadioGroup as bds_radio_group
};
//# sourceMappingURL=bds-radio-group.entry-mkabeow2.js.map
