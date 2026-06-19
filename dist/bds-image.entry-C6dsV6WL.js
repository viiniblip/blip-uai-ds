import { h, H as Host, g as getElement, r as registerInstance } from "./index-C5zPPjub.js";
var __awaiter = function(t, e, i, n) {
  function s(t2) {
    return t2 instanceof i ? t2 : new i(function(e2) {
      e2(t2);
    });
  }
  return new (i || (i = Promise))(function(i2, r) {
    function a(t2) {
      try {
        o(n.next(t2));
      } catch (t3) {
        r(t3);
      }
    }
    function c(t2) {
      try {
        o(n["throw"](t2));
      } catch (t3) {
        r(t3);
      }
    }
    function o(t2) {
      t2.done ? i2(t2.value) : s(t2.value).then(a, c);
    }
    o((n = n.apply(t, e || [])).next());
  });
};
var __generator = function(t, e) {
  var i = { label: 0, sent: function() {
    if (r[0] & 1) throw r[1];
    return r[1];
  }, trys: [], ops: [] }, n, s, r, a;
  return a = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol === "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function c(t2) {
    return function(e2) {
      return o([t2, e2]);
    };
  }
  function o(c2) {
    if (n) throw new TypeError("Generator is already executing.");
    while (a && (a = 0, c2[0] && (i = 0)), i) try {
      if (n = 1, s && (r = c2[0] & 2 ? s["return"] : c2[0] ? s["throw"] || ((r = s["return"]) && r.call(s), 0) : s.next) && !(r = r.call(s, c2[1])).done) return r;
      if (s = 0, r) c2 = [c2[0] & 2, r.value];
      switch (c2[0]) {
        case 0:
        case 1:
          r = c2;
          break;
        case 4:
          i.label++;
          return { value: c2[1], done: false };
        case 5:
          i.label++;
          s = c2[1];
          c2 = [0];
          continue;
        case 7:
          c2 = i.ops.pop();
          i.trys.pop();
          continue;
        default:
          if (!(r = i.trys, r = r.length > 0 && r[r.length - 1]) && (c2[0] === 6 || c2[0] === 2)) {
            i = 0;
            continue;
          }
          if (c2[0] === 3 && (!r || c2[1] > r[0] && c2[1] < r[3])) {
            i.label = c2[1];
            break;
          }
          if (c2[0] === 6 && i.label < r[1]) {
            i.label = r[1];
            r = c2;
            break;
          }
          if (r && i.label < r[2]) {
            i.label = r[2];
            i.ops.push(c2);
            break;
          }
          if (r[2]) i.ops.pop();
          i.trys.pop();
          continue;
      }
      c2 = e.call(t, i);
    } catch (t2) {
      c2 = [6, t2];
      s = 0;
    } finally {
      n = r = 0;
    }
    if (c2[0] & 5) throw c2[1];
    return { value: c2[0] ? c2[1] : void 0, done: true };
  }
};
var imageCss = ":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .img-feedback{height:76%}:host(.empty_img){background-color:var(--color-surface-3, rgb(227, 227, 227))}";
var Image = function() {
  function t(t2) {
    registerInstance(this, t2);
    this.imageHasLoading = false;
    this.objectFit = "cover";
    this.dataTest = null;
    this.imageLoaded = false;
    this.loadError = false;
  }
  t.prototype.componentDidLoad = function() {
    var t2;
    this.element.style.width = this.width ? this.width : "auto";
    this.element.style.height = ((t2 = this.height) === null || t2 === void 0 ? void 0 : t2.length) > 0 ? this.height : "auto";
  };
  t.prototype.loadImage = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, e, i;
      return __generator(this, function(s) {
        switch (s.label) {
          case 0:
            if (!this.src) return [3, 7];
            this.imageHasLoading = true;
            s.label = 1;
          case 1:
            s.trys.push([1, 6, , 7]);
            return [4, fetch(this.src)];
          case 2:
            t2 = s.sent();
            if (!t2.ok) return [3, 4];
            return [4, t2.blob()];
          case 3:
            e = s.sent();
            i = URL.createObjectURL(e);
            this.currentSrc = i;
            this.imageLoaded = true;
            this.imageHasLoading = false;
            return [3, 5];
          case 4:
            this.loadError = true;
            s.label = 5;
          case 5:
            return [3, 7];
          case 6:
            s.sent();
            this.imageHasLoading = false;
            this.loadError = true;
            return [3, 7];
          case 7:
            return [2];
        }
      });
    });
  };
  t.prototype.render = function() {
    if (!this.imageLoaded && !this.loadError) {
      this.loadImage();
    }
    return h(Host, { key: "b7798d3abcb3fe0da3938b890b1abc6479aeccb0", class: { empty_img: !this.imageLoaded } }, this.imageLoaded ? h("img", { src: this.currentSrc, alt: this.alt, style: { objectFit: this.objectFit, width: "100%", height: "100%", filter: "brightness(".concat(this.brightness, ")") }, "data-test": this.dataTest, draggable: false }) : this.imageHasLoading ? h("bds-skeleton", { shape: "square", width: "100%", height: "100%" }) : h("bds-illustration", { class: "img-feedback", type: "empty-states", name: this.loadError ? "broken-image" : "image-not-found", alt: this.alt, "data-test": this.dataTest }));
  };
  Object.defineProperty(t.prototype, "element", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  return t;
}();
Image.style = imageCss;
export {
  Image as bds_image
};
//# sourceMappingURL=bds-image.entry-C6dsV6WL.js.map
