import { h, H as Host, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var sliderCss = ':host{position:relative;display:-ms-flexbox;display:flex;width:100%;height:32px}.track-bg{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;inset:0 8px;pointer-events:none}.track-bg .progress-bar{position:absolute;height:4px;border-radius:1rem}.track-bg .progress-bar-liner{background-color:var(--color-primary, rgb(30, 107, 241))}.track-bg .progress-bar-tooltip{position:absolute;top:-6px;right:-0.5rem}.track-bg .progress-bar-thumb{position:relative;width:1rem;height:1rem;border-radius:1rem;background-color:var(--color-primary, rgb(30, 107, 241))}.track-bg .progress-bar-thumb::before{content:"";position:absolute;inset:0;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));border-radius:1rem;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.track-bg .progress-bar-hover .progress-bar-thumb::before{-webkit-transform:scale(2);transform:scale(2)}.track-bg::before{content:"";position:absolute;inset:0;height:4px;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16;border-radius:1rem}.track-bg .step{position:relative;width:2px;height:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;background-color:var(--color-content-disable, rgb(89, 89, 89));border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}.track-bg .step .label-step{margin-top:1rem;white-space:nowrap}.track-bg .step.step--first{-ms-flex-pack:start;justify-content:flex-start}.track-bg .step.step--last .label-step{position:absolute;right:0;top:0}.element-min{position:relative;height:4px;background-color:var(--color-primary, rgb(30, 107, 241));border-top-left-radius:1rem;border-bottom-left-radius:1rem}.element-max{position:relative;height:4px;border-top-right-radius:1rem;border-bottom-right-radius:1rem}.input_slide{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;background:transparent;cursor:pointer;width:100%;height:4px;position:relative;border-radius:1rem;background:transparent;color:-internal-light-dark(transparent, transparent)}.input_slide.has_min{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:0}.input_slide.has_max{border-top-right-radius:0;border-bottom-right-radius:0}.input_slide:hover .input_slide::-webkit-slider-thumb,.input_slide:hover .input_slide::-moz-range-thumb{-webkit-appearance:none}.input_slide::-webkit-slider-thumb,.input_slide::-moz-range-thumb{-webkit-appearance:none;position:relative;height:16px;width:16px;border-radius:50%;border:none}.group_slide{position:relative;width:100%}.group_slide .input_slide{width:inherit;position:absolute}.group_slide .input_slide_start{left:0}.group_slide .input_slide_end{right:0}.group_slide .input_slide::-webkit-slider-thumb,.group_slide .input_slide::-moz-range-thumb{-webkit-appearance:none}';
var Slider = function() {
  function t(t2) {
    var i = this;
    registerInstance(this, t2);
    this.bdsChange = createEvent(this, "bdsChange");
    var e, r;
    this.inputValue = (r = (e = this.value) === null || e === void 0 ? void 0 : e.toString()) !== null && r !== void 0 ? r : this.min ? this.min.toString() : "0";
    this.tooltipPosition = "top-center";
    this.value = this.min ? this.min : 0;
    this.markers = false;
    this.label = false;
    this.type = "fill";
    this.dataTest = null;
    this.refInputSlide = function(t3) {
      i.inputSlide = t3;
    };
    this.refBdsTooltip = function(t3) {
      i.bdsTooltip = t3;
    };
    this.refProgressBar = function(t3) {
      i.progressBar = t3;
    };
    this.valuePercent = function(t3) {
      var i2 = t3;
      var e2 = i2.min ? parseInt(i2.min) : 0;
      var r2 = parseInt(i2.max);
      var s = parseInt(i2.value);
      var o = (s - e2) * 100 / (r2 - e2);
      return o;
    };
    this.computeTooltipPosition = function(t3) {
      if (t3 <= 0) return "top-left";
      if (t3 >= 100) return "top-right";
      return "top-center";
    };
    this.getTooltipText = function(t3) {
      return t3.tooltip !== void 0 ? t3.tooltip : t3.name.toString();
    };
    this.onInputSlide = function(t3) {
      var e2 = t3.target;
      i.progressBar.style.width = "".concat(i.valuePercent(e2), "%");
      var r2 = i.emiterChange(parseInt(e2.value));
      i.inputValue = i.stepArray.length > 0 ? i.getTooltipText(r2) : e2.value;
      i.tooltipPosition = i.computeTooltipPosition(i.valuePercent(e2));
      i.bdsChange.emit(r2);
    };
    this.onInputMouseEnter = function() {
      i.bdsTooltip.visible();
      i.progressBar.classList.add("progress-bar-hover");
    };
    this.onInputMouseLeave = function() {
      i.bdsTooltip.invisible();
      i.progressBar.classList.remove("progress-bar-hover");
    };
    this.emiterChange = function(t3) {
      if (i.internalOptions) {
        return i.stepArray[t3];
      } else {
        return i.stepArray.find(function(i2) {
          return parseInt(i2.name) === t3;
        });
      }
    };
  }
  t.prototype.componentWillLoad = function() {
    var t2, i, e, r;
    if (this.dataMarkers) {
      if (typeof this.dataMarkers === "string") {
        this.internalOptions = JSON.parse(this.dataMarkers);
        this.stepArray = this.internalOptions;
      } else {
        this.internalOptions = this.dataMarkers;
        this.stepArray = this.internalOptions;
      }
      var s = (t2 = this.value) !== null && t2 !== void 0 ? t2 : 0;
      var o = this.stepArray[s];
      if (o) {
        this.inputValue = this.getTooltipText(o);
      }
      var a = this.stepArray.length > 1 ? s / (this.stepArray.length - 1) * 100 : 50;
      this.tooltipPosition = this.computeTooltipPosition(a);
    } else {
      this.stepArray = this.arrayToSteps((this.max - this.min) / this.step, Number.isInteger((this.max - this.min) / this.step));
      var n = (i = this.min) !== null && i !== void 0 ? i : 0;
      var h2 = (e = this.max) !== null && e !== void 0 ? e : 100;
      var l = (r = this.value) !== null && r !== void 0 ? r : n;
      var a = h2 !== n ? (l - n) * 100 / (h2 - n) : 50;
      this.tooltipPosition = this.computeTooltipPosition(a);
    }
  };
  t.prototype.componentDidLoad = function() {
    this.progressBar.style.width = "".concat(this.valuePercent(this.inputSlide), "%");
  };
  t.prototype.componentDidRender = function() {
    if (this.internalOptions) {
      this.inputSlide.min = "0";
      this.inputSlide.max = "".concat(this.internalOptions.length - 1);
      this.inputSlide.step = "1";
    } else {
      this.inputSlide.min = this.min ? "".concat(this.min) : "";
      this.inputSlide.max = this.max ? "".concat(this.max) : "";
      this.inputSlide.step = this.step ? "".concat(this.step) : "";
    }
  };
  t.prototype.componentDidUpdate = function() {
    this.progressBar.style.width = "".concat(this.valuePercent(this.inputSlide), "%");
    var t2 = this.emiterChange(parseInt(this.inputSlide.value));
    this.inputValue = this.stepArray.length > 0 ? this.getTooltipText(t2) : this.inputSlide.value;
    this.tooltipPosition = this.computeTooltipPosition(this.valuePercent(this.inputSlide));
  };
  t.prototype.arrayToSteps = function(t2, i) {
    var e = this;
    var r = i ? t2 + 1 : t2;
    var s = [];
    for (var o = 0; o < r; o++) {
      s.push(o);
    }
    return s.map(function(t3) {
      return { value: t3, name: t3 * e.step + e.min };
    });
  };
  t.prototype.render = function() {
    var t2, i, e;
    var r = this;
    return h(Host, { key: "fd0e5c5b7e0a178a36022b7283f3390e6cf3402c" }, h("input", { key: "dd503cdaa91c4fbcdf2281b34031d0975965e8b0", ref: this.refInputSlide, type: "range", class: { input_slide: true }, value: this.value, onInput: this.onInputSlide, onMouseEnter: this.onInputMouseEnter, onMouseLeave: this.onInputMouseLeave, "data-test": this.dataTest }), h("div", { key: "373b9e3acb7e6057df50accc1a67c6c30e89bfc8", class: "track-bg" }, this.markers && this.stepArray.map(function(t3, i2) {
      return h("div", { key: i2, class: { step: true, "step--first": i2 === 0, "step--last": i2 === r.stepArray.length - 1 } }, r.label && h("bds-typo", { class: "label-step", variant: "fs-10" }, "".concat(t3.name)));
    }), h("div", { key: "62598d2bc5293a9cc97af8e1f93540fe3ae94e59", class: (t2 = {}, t2["progress-bar"] = true, t2["progress-bar-liner"] = this.type !== "no-linear", t2), ref: this.refProgressBar }, h("bds-tooltip", { key: "b6811f9781f9c47e017947606f2d0b976b54f57c", ref: this.refBdsTooltip, class: (i = {}, i["progress-bar-tooltip"] = true, i), position: this.tooltipPosition, "tooltip-text": this.inputValue }, h("div", { key: "aa70f70056d64d53df66e84b4f40f0577ef3e69e", class: (e = {}, e["progress-bar-thumb"] = true, e) })))));
  };
  return t;
}();
Slider.style = sliderCss;
export {
  Slider as bds_slider
};
//# sourceMappingURL=bds-slider.entry-B5uCaONd.js.map
