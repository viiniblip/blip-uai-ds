import { h, g as getElement, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var __awaiter = function(e, r, i, t) {
  function a(e2) {
    return e2 instanceof i ? e2 : new i(function(r2) {
      r2(e2);
    });
  }
  return new (i || (i = Promise))(function(i2, o) {
    function n(e2) {
      try {
        l(t.next(e2));
      } catch (e3) {
        o(e3);
      }
    }
    function s(e2) {
      try {
        l(t["throw"](e2));
      } catch (e3) {
        o(e3);
      }
    }
    function l(e2) {
      e2.done ? i2(e2.value) : a(e2.value).then(n, s);
    }
    l((t = t.apply(e, r || [])).next());
  });
};
var __generator = function(e, r) {
  var i = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, t, a, o, n;
  return n = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === "function" && (n[Symbol.iterator] = function() {
    return this;
  }), n;
  function s(e2) {
    return function(r2) {
      return l([e2, r2]);
    };
  }
  function l(s2) {
    if (t) throw new TypeError("Generator is already executing.");
    while (n && (n = 0, s2[0] && (i = 0)), i) try {
      if (t = 1, a && (o = s2[0] & 2 ? a["return"] : s2[0] ? a["throw"] || ((o = a["return"]) && o.call(a), 0) : a.next) && !(o = o.call(a, s2[1])).done) return o;
      if (a = 0, o) s2 = [s2[0] & 2, o.value];
      switch (s2[0]) {
        case 0:
        case 1:
          o = s2;
          break;
        case 4:
          i.label++;
          return { value: s2[1], done: false };
        case 5:
          i.label++;
          a = s2[1];
          s2 = [0];
          continue;
        case 7:
          s2 = i.ops.pop();
          i.trys.pop();
          continue;
        default:
          if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (s2[0] === 6 || s2[0] === 2)) {
            i = 0;
            continue;
          }
          if (s2[0] === 3 && (!o || s2[1] > o[0] && s2[1] < o[3])) {
            i.label = s2[1];
            break;
          }
          if (s2[0] === 6 && i.label < o[1]) {
            i.label = o[1];
            o = s2;
            break;
          }
          if (o && i.label < o[2]) {
            i.label = o[2];
            i.ops.push(s2);
            break;
          }
          if (o[2]) i.ops.pop();
          i.trys.pop();
          continue;
      }
      s2 = r.call(e, i);
    } catch (e2) {
      s2 = [6, e2];
      a = 0;
    } finally {
      t = o = 0;
    }
    if (s2[0] & 5) throw s2[1];
    return { value: s2[0] ? s2[1] : void 0, done: true };
  }
};
var __spreadArray = function(e, r, i) {
  if (i || arguments.length === 2) for (var t = 0, a = r.length, o; t < a; t++) {
    if (o || !(t in r)) {
      if (!o) o = Array.prototype.slice.call(r, 0, t);
      o[t] = r[t];
    }
  }
  return e.concat(o || Array.prototype.slice.call(r));
};
var ptTerms = [{ uploaded: "Arquivos enviados", dropHere: "Solte aqui para anexar o arquivo", dropOrClick: "Arraste e solte seus arquivos aqui ou clique para fazer upload do arquivo", formatError: "Ocorreu um erro ao anexar o arquivo, tente novamente ou selecione outro arquivo" }];
var esTerms = [{ uploaded: "Archivos subidos", dropHere: "Soltar aquí para adjuntar archivo", dropOrClick: "Arrastre y suelte sus archivos aquí o haga clic para cargar el archivo", formatError: "Se produjo un error al adjuntar el archivo, inténtelo nuevamente o seleccione otro archivo" }];
var enTerms = [{ uploaded: "Files uploaded", dropHere: "Drop here to attach file", dropOrClick: "Drag and drop your files here or click to upload file", formatError: "There was an error attaching the file, please try again or select another file" }];
var termTranslate = function(e, r) {
  var i;
  switch (e) {
    case "pt_BR":
      i = ptTerms.map(function(e2) {
        return e2[r];
      });
      break;
    case "es_ES":
      i = esTerms.map(function(e2) {
        return e2[r];
      });
      break;
    case "en_US":
      i = enTerms.map(function(e2) {
        return e2[r];
      });
      break;
    default:
      i = ptTerms.map(function(e2) {
        return e2[r];
      });
  }
  return i;
};
var patternSvg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMzg0IDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMzc4OF8yMTU2NDApIj4KPGxpbmUgeDE9Ii0xMC45NzY3IiB5MT0iNzQuMzg0MyIgeDI9IjIyLjc3NzgiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjIyLjc3NzciIHkxPSI3NC4zODQzIiB4Mj0iNTYuNTMyMiIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iNTYuNTMyIiB5MT0iNzQuMzg0MyIgeDI9IjkwLjI4NjYiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjkwLjI4NjkiIHkxPSI3NC4zODQzIiB4Mj0iMTI0LjA0MiIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iMTI0LjA0MSIgeTE9Ijc0LjM4NDMiIHgyPSIxNTcuNzk2IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+CjxsaW5lIHgxPSIxNTcuNzk2IiB5MT0iNzQuMzg0MyIgeDI9IjE5MS41NTEiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjE5MS41NTEiIHkxPSI3NC4zODQzIiB4Mj0iMjI1LjMwNSIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iMjI1LjMwNSIgeTE9Ijc0LjM4NDMiIHgyPSIyNTkuMDYiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjI1OS4wNiIgeTE9Ijc0LjM4NDMiIHgyPSIyOTIuODE0IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+CjxsaW5lIHgxPSIyOTIuODE0IiB5MT0iNzQuMzg0MyIgeDI9IjMyNi41NjkiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjMyNi41NjkiIHkxPSI3NC4zODQzIiB4Mj0iMzYwLjMyMyIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iMzYwLjMyNCIgeTE9Ijc0LjM4NDMiIHgyPSIzOTQuMDc4IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMzc4OF8yMTU2NDAiPgo8cmVjdCB3aWR0aD0iMzg0IiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
var bdsUploadCss = '.upload{min-width:400px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px}.upload .upload-header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;gap:8px;color:var(--color-content-default, rgb(40, 40, 40))}.upload .upload-header_text{color:var(--color-content-default, rgb(40, 40, 40));display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.upload__edit--label{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-radius:8px;cursor:pointer;font-weight:normal;-webkit-box-sizing:border-box;box-sizing:border-box;padding:23px 16px;position:relative}.upload__edit--label::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.upload__edit--label:focus-visible{outline:none}.upload__edit--label:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.upload__edit--label .upload__img--visible{display:-ms-flexbox;display:flex;width:100%;height:100%;border-radius:8px;position:absolute;background-color:var(--color-surface-2, rgb(237, 237, 237));z-index:1}.upload__edit--label .text-box{display:-ms-flexbox;display:flex;padding:8px;width:100%;text-align:center;z-index:2}.upload__edit--label .text-box .text{color:var(--color-content-default, rgb(40, 40, 40));width:100%;-ms-flex-wrap:wrap;flex-wrap:wrap}.upload__edit--label .text-box--hover{background-color:var(--color-surface-2, rgb(237, 237, 237))}.upload__edit--label .text-box--hover .text{color:var(--color-primary, rgb(30, 107, 241))}.upload__edit--label:hover{border:2px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;padding:22px 16px;cursor:pointer;-webkit-text-decoration:underline var(--color-primary, rgb(30, 107, 241));text-decoration:underline var(--color-primary, rgb(30, 107, 241));color:var(--color-brand, rgb(0, 150, 250))}.upload__edit--label:hover .text{color:var(--color-primary, rgb(30, 107, 241))}.upload__edit--hover{background-size:cover;border:1px dashed var(--color-surface-4, rgb(20, 20, 20));color:var(--color-primary, rgb(30, 107, 241));font-weight:bold;border-radius:8px}.upload__img--invisible{display:none}.list-preview{border-top:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));max-height:200px;overflow-y:auto}.upload__preview{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:16px 0}.upload__preview .preview{display:-ms-flexbox;display:flex;padding:0 16px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;gap:8px}.upload__preview .preview-text{font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;font-weight:700;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;color:var(--color-content-default, rgb(40, 40, 40))}.upload__preview .preview-icon{color:var(--color-content-default, rgb(40, 40, 40))}.upload__preview .preview-icon:hover{cursor:pointer}.preview-length{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end;padding-top:16px;text-align:end}.upload__edit input{position:absolute;left:0;top:0;right:0;bottom:0;opacity:0;width:0;height:100%}';
var BdsUpload = function() {
  function e(e2) {
    var r = this;
    registerInstance(this, e2);
    this.bdsUploadDelete = createEvent(this, "bdsUploadDelete");
    this.bdsUploadChange = createEvent(this, "bdsUploadChange");
    this.files = [];
    this.haveFiles = false;
    this.hover = false;
    this.size = [];
    this.internalAccepts = [];
    this.formatError = false;
    this.language = "pt_BR";
    this.dataAccept = [];
    this.dtInputFiles = null;
    this.dtLabelAddFile = null;
    this.dtButtonDelete = null;
    this.showListPreview = true;
    this.validationFiles = function(e3, i) {
      var t = ".".concat(e3.name.split(".").pop());
      var a = r.internalAccepts.includes(t);
      if (a) {
        r.formatError = false;
        return;
      } else {
        r.formatError = true;
        r.deleteFile(i);
        return;
      }
    };
    this.handleDrop = function(e3) {
      r.haveFiles = true;
      var i = e3.dataTransfer;
      var t = i.files;
      r.handleFiles(t);
    };
    this.handleFiles = function(e3) {
      if (!r.multiple) {
        r.files = [e3[0]];
      } else {
        r.files = __spreadArray(__spreadArray([], r.files, true), e3, true);
      }
      r.bdsUploadChange.emit({ value: r.files });
    };
    this.refInputElement = function(e3) {
      r.inputElement = e3;
    };
  }
  e.prototype.dataAcceptChanged = function() {
    if (this.dataAccept) {
      if (typeof this.dataAccept === "string") {
        try {
          this.internalAccepts = JSON.parse(this.dataAccept);
        } catch (e2) {
          this.internalAccepts = [];
        }
      } else {
        this.internalAccepts = this.dataAccept;
      }
    } else {
      this.internalAccepts = [];
    }
  };
  e.prototype.filesChanged = function() {
    if (this.files.length > 0) {
      for (var e2 = 0; e2 < this.files.length; e2++) {
        if (this.internalAccepts.length > 0) {
          this.validationFiles(this.files[e2], e2);
        }
      }
    }
  };
  e.prototype.formatErrorChanged = function(e2) {
    var r = this;
    if (e2) {
      this.error = termTranslate(this.language, "formatError");
      setTimeout(function() {
        return r.error = null;
      }, 5e3);
    }
  };
  e.prototype.componentWillLoad = function() {
    this.dataAcceptChanged();
  };
  e.prototype.componentDidLoad = function() {
    var e2 = this;
    ["dragenter", "dragover", "dragleave", "drop"].forEach(function(r) {
      e2.dropArea.shadowRoot.addEventListener(r, e2.preventDefaults, false);
      e2.dropArea.shadowRoot.addEventListener(r, function() {
        return e2.hoverFile(true);
      }, false);
    });
    ["dragenter", "dragover"].forEach(function(r) {
      e2.dropArea.shadowRoot.addEventListener(r, function() {
        return e2.preventDefaults;
      }, false);
      e2.dropArea.shadowRoot.addEventListener(r, function() {
        return e2.hoverFile(true);
      }, false);
    });
    ["dragleave", "drop"].forEach(function(r) {
      e2.dropArea.shadowRoot.addEventListener(r, function() {
        return e2.preventDefaults;
      }, false);
      e2.dropArea.shadowRoot.addEventListener(r, function() {
        return e2.hoverFile(false);
      }, false);
    });
    this.dropArea.shadowRoot.addEventListener("drop", this.handleDrop, false);
  };
  e.prototype.preventDefaults = function(e2) {
    e2.preventDefault();
    e2.stopPropagation();
  };
  e.prototype.hoverFile = function(e2) {
    this.hover = e2;
  };
  e.prototype.onUploadClick = function(e2) {
    if (e2.length > 0) {
      if (!this.multiple) {
        this.files = [e2[0]];
      } else {
        this.files = __spreadArray(__spreadArray([], this.files, true), e2, true);
      }
      this.haveFiles = true;
      this.getSize();
    } else {
      return false;
    }
    this.bdsUploadChange.emit({ value: this.files });
  };
  e.prototype.getSize = function() {
    var e2 = this;
    this.files.map(function(r) {
      var i = r.size;
      e2.size.push(i);
    });
  };
  e.prototype.deleteFile = function(e2) {
    return __awaiter(this, void 0, void 0, function() {
      var r;
      return __generator(this, function(i) {
        r = this.files.filter(function(r2, i2) {
          return i2 == e2 && r2;
        });
        this.bdsUploadDelete.emit({ value: r });
        this.files.splice(e2, 1);
        this.files = __spreadArray([], this.files, true);
        if (this.files.length === 0) {
          this.haveFiles = false;
        } else {
          this.haveFiles = true;
        }
        this.bdsUploadChange.emit({ value: this.files });
        return [2];
      });
    });
  };
  e.prototype.deleteAllFiles = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e2) {
        this.bdsUploadDelete.emit({ value: this.files });
        this.files = [];
        if (this.files.length === 0) {
          this.haveFiles = false;
        } else {
          this.haveFiles = true;
        }
        this.bdsUploadChange.emit({ value: this.files });
        return [2];
      });
    });
  };
  e.prototype.handleKeyDown = function(e2) {
    if (e2.key == "Enter") {
      this.inputElement.click();
    }
  };
  e.prototype.render = function() {
    var e2 = this;
    return h("div", { key: "3a723b952c40c6aa8c00edf05207c7c60e380e83", class: "upload" }, h("div", { key: "8c1d39ad90373de085495a944d7cd75f4192a58e", class: "upload-header" }, h("bds-icon", { key: "89e6afe5000e6ed58b11c47b6a5ab1aee1da4799", class: "upload-header_icon", size: "xxx-large", name: "upload" }), h("div", { key: "82ea9d997bc184d44ccb335354828597197324bb", class: "upload-header_text" }, h("bds-typo", { key: "8086c765fa0964a3ff7bbc7cbe097a021c80e0b9", variant: "fs-16", bold: "bold", "aria-label": this.titleName }, this.titleName), h("bds-typo", { key: "9f132ea033bcc93dbc96a90311c1edd84f2cea1c", variant: "fs-14", bold: "regular", "aria-label": this.subtitle }, this.subtitle))), this.error ? h("bds-banner", { context: "inside", variant: "error", "aria-label": this.error }, this.error) : "", this.haveFiles && this.showListPreview ? h("div", null, h("div", { class: "list-preview" }, this.files.map(function(r, i) {
      return h("div", { class: "upload__preview", key: i, id: "drop-area" }, h("div", { class: "preview", id: "preview" }, h("bds-icon", { size: "x-small", name: "attach" }), h("p", { class: "preview-text", id: "preview-text", "aria-label": r.name }, r.name), h("bds-button-icon", { class: "preview-icon", size: "short", icon: "trash", variant: "secondary", onClick: function() {
        return e2.deleteFile(i);
      }, "aria-label": "delete ".concat(r.name), "data-test": "".concat(e2.dtButtonDelete, "-").concat(i) })));
    })), this.multiple ? h("bds-typo", { variant: "fs-14", italic: true, class: "preview-length", "aria-label": termTranslate(this.language, "uploaded") }, this.files.length > 1 ? "".concat(this.files.length, " ").concat(termTranslate(this.language, "uploaded")) : "") : "") : "", h("div", { key: "f46767fdeb4dbf1f8bb96be847d7145f02166514", class: { upload__edit: true } }, h("label", { key: "a4d9bc03e632e138a2c3ab6dcc4befcf0695af96", class: { "upload__edit--label": true, "upload__edit--hover": this.hover }, id: "file-label", htmlFor: "file", "data-test": this.dtLabelAddFile, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("div", { key: "7716d464a8a0e7928f79fce1d5bd92c20d582b95", class: { "text-box": true, "text-box--hover": this.hover }, id: "file-text_box" }, this.hover ? h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, "dropHere") }, termTranslate(this.language, "dropHere")) : h("bds-typo", { class: "text", variant: "fs-14", bold: "regular", "aria-label": termTranslate(this.language, "dropOrClick") }, termTranslate(this.language, "dropOrClick"))), h("img", { key: "16c8ec5073add6515bbb9238415965833fe945be", class: { "upload__img--invisible": true, "upload__img--visible": this.hover }, src: patternSvg })), h("input", { key: "4a0ae01796ea356767b4f6156eca4847c9154d1b", ref: this.refInputElement, type: "file", name: "files[]", id: "file", class: "upload__input", multiple: this.multiple, accept: this.internalAccepts.length > 0 ? this.internalAccepts.toString() : this.accept, onChange: function(r) {
      return e2.onUploadClick(r.target.files);
    }, "data-test": this.dtInputFiles })));
  };
  Object.defineProperty(e.prototype, "dropArea", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  Object.defineProperty(e, "watchers", { get: function() {
    return { dataAccept: ["dataAcceptChanged"], files: ["filesChanged"], formatError: ["formatErrorChanged"] };
  }, enumerable: false, configurable: true });
  return e;
}();
BdsUpload.style = bdsUploadCss;
export {
  BdsUpload as bds_upload
};
//# sourceMappingURL=bds-upload.entry-CnOs4uSY.js.map
