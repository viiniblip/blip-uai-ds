import { h, H as Host, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
import { e as emailValidation, n as numberValidation } from "./validations-BXYXNVip-LcA-EPqi.js";
var __awaiter = function(t, i, e, n) {
  function r(t2) {
    return t2 instanceof e ? t2 : new e(function(i2) {
      i2(t2);
    });
  }
  return new (e || (e = Promise))(function(e2, o) {
    function s(t2) {
      try {
        c(n.next(t2));
      } catch (t3) {
        o(t3);
      }
    }
    function a(t2) {
      try {
        c(n["throw"](t2));
      } catch (t3) {
        o(t3);
      }
    }
    function c(t2) {
      t2.done ? e2(t2.value) : r(t2.value).then(s, a);
    }
    c((n = n.apply(t, i || [])).next());
  });
};
var __generator = function(t, i) {
  var e = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, r, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol === "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(t2) {
    return function(i2) {
      return c([t2, i2]);
    };
  }
  function c(a2) {
    if (n) throw new TypeError("Generator is already executing.");
    while (s && (s = 0, a2[0] && (e = 0)), e) try {
      if (n = 1, r && (o = a2[0] & 2 ? r["return"] : a2[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, a2[1])).done) return o;
      if (r = 0, o) a2 = [a2[0] & 2, o.value];
      switch (a2[0]) {
        case 0:
        case 1:
          o = a2;
          break;
        case 4:
          e.label++;
          return { value: a2[1], done: false };
        case 5:
          e.label++;
          r = a2[1];
          a2 = [0];
          continue;
        case 7:
          a2 = e.ops.pop();
          e.trys.pop();
          continue;
        default:
          if (!(o = e.trys, o = o.length > 0 && o[o.length - 1]) && (a2[0] === 6 || a2[0] === 2)) {
            e = 0;
            continue;
          }
          if (a2[0] === 3 && (!o || a2[1] > o[0] && a2[1] < o[3])) {
            e.label = a2[1];
            break;
          }
          if (a2[0] === 6 && e.label < o[1]) {
            e.label = o[1];
            o = a2;
            break;
          }
          if (o && e.label < o[2]) {
            e.label = o[2];
            e.ops.push(a2);
            break;
          }
          if (o[2]) e.ops.pop();
          e.trys.pop();
          continue;
      }
      a2 = i.call(t, e);
    } catch (t2) {
      a2 = [6, t2];
      r = 0;
    } finally {
      n = o = 0;
    }
    if (a2[0] & 5) throw a2[1];
    return { value: a2[0] ? a2[1] : void 0, done: true };
  }
};
var inputCss = ':host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;gap:8px}.input .bds-icon{position:relative;z-index:1}.input--textarea{padding:12px 12px 12px 12px;-ms-flex-align:start;align-items:flex-start}.input--textarea.input--label{padding:12px 12px 12px 12px}.input--textarea .input__icon{margin-top:1px}.input--textarea .input__icon--textarea{-ms-flex-item-align:start;align-self:flex-start}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-danger{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, rgb(138, 0, 0));z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190));box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190))}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, rgb(230, 15, 15))}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, rgb(1, 114, 62));z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188));box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188))}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px;margin-top:1px}.input--label{padding:7px 4px 8px 12px}.input--label.input--textarea{padding:12px 12px 12px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:2px;-ms-flex-negative:0;flex-shrink:0}.input__icon--textarea{-ms-flex-item-align:start;align-self:flex-start;margin-top:1px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex:1;flex:1}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper--textarea{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:2px}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:22px;resize:none;cursor:inherit;width:100%;min-height:auto}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__text--textarea{resize:vertical;overflow-y:auto;line-height:20px;padding:0;scrollbar-width:thin;scrollbar-color:var(--color-border-2, rgba(0, 0, 0, 0.16)) transparent}.input__container__text--textarea::-webkit-scrollbar{width:8px}.input__container__text--textarea::-webkit-scrollbar-track{background:transparent}.input__container__text--textarea::-webkit-scrollbar-thumb{background:var(--color-border-2, rgba(0, 0, 0, 0.16));border-radius:4px}.input__container__text--textarea::-webkit-scrollbar-thumb:hover{background:var(--color-content-ghost, rgb(140, 140, 140))}.input__container__text[type=date]::-webkit-calendar-picker-indicator{opacity:0;pointer-events:none}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;gap:4px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, rgb(89, 89, 89));word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;margin-top:0px;-ms-flex-negative:0;flex-shrink:0}.input__message--danger .input__message__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, rgb(40, 40, 40))}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:22px;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}';
var Input = function() {
  function t(t2) {
    var i = this;
    registerInstance(this, t2);
    this.bdsChange = createEvent(this, "bdsChange");
    this.bdsInput = createEvent(this, "bdsInput");
    this.bdsOnBlur = createEvent(this, "bdsOnBlur");
    this.bdsFocus = createEvent(this, "bdsFocus");
    this.bdsSubmit = createEvent(this, "bdsSubmit");
    this.bdsPatternValidation = createEvent(this, "bdsPatternValidation");
    this.bdsKeyDownBackspace = createEvent(this, "bdsKeyDownBackspace");
    this.isPressed = false;
    this.isPassword = false;
    this.validationMesage = "";
    this.validationDanger = false;
    this.inputName = "";
    this.type = "text";
    this.label = "";
    this.placeholder = "";
    this.autoCapitalize = "off";
    this.autoComplete = "off";
    this.readonly = false;
    this.helperMessage = "";
    this.errorMessage = "";
    this.successMessage = "";
    this.icon = "";
    this.disabled = false;
    this.danger = false;
    this.success = false;
    this.value = "";
    this.counterLength = false;
    this.counterLengthRule = null;
    this.isSubmit = false;
    this.isTextarea = false;
    this.rows = 3;
    this.cols = 0;
    this.autoResize = true;
    this.resizable = false;
    this.minHeight = 60;
    this.maxHeight = 200;
    this.iconSize = "small";
    this.debounceDelay = 100;
    this.dataTest = null;
    this.encode = false;
    this.keyPressWrapper = function(t3) {
      switch (t3.key) {
        case "Enter":
          i.bdsSubmit.emit({ event: t3, value: i.value });
          if (i.isSubmit) {
            i.clearTextInput();
            t3.preventDefault();
          }
          break;
        case "Backspace":
        case "Delete":
          i.bdsKeyDownBackspace.emit({ event: t3, value: i.value });
          break;
      }
    };
    this.onInput = function(t3) {
      i.onBdsInputValidations();
      var e = t3.target;
      if (e) {
        i.value = e.value || "";
      }
      i.updateTextarea();
      i.bdsInput.emit(t3);
    };
    this.onBlur = function() {
      i.onBlurValidations();
      i.isPressed = false;
      i.bdsOnBlur.emit();
    };
    this.onFocus = function() {
      i.isPressed = true;
      i.bdsFocus.emit();
    };
    this.onClickWrapper = function() {
      i.onFocus();
      if (i.nativeInput) {
        i.nativeInput.focus();
      }
    };
    this.clearTextInput = function(t3) {
      if (!i.readonly && !i.disabled && t3) {
        t3.preventDefault();
        t3.stopPropagation();
      }
      i.value = "";
      if (i.nativeInput) {
        i.nativeInput.value = "";
      }
    };
  }
  t.prototype.setFocus = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        this.onClickWrapper();
        return [2];
      });
    });
  };
  t.prototype.removeFocus = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        this.onBlur();
        return [2];
      });
    });
  };
  t.prototype.getInputElement = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        return [2, this.nativeInput];
      });
    });
  };
  t.prototype.isValid = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        return [2, this.nativeInput.validity.valid];
      });
    });
  };
  t.prototype.clear = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        this.value = "";
        return [2];
      });
    });
  };
  t.prototype.encodeValue = function(t2) {
    var i = /</g, e = />/g, n = /'/g, r = /"/g, o = /&/g, s = /\//g;
    if (!this.encode) return t2;
    return t2 && t2.toString().replace(i, "&lt;").replace(e, "&gt;").replace(n, "&#39;").replace(r, "&#34;").replace(o, "&amp;").replace(s, "&#47;");
  };
  t.prototype.valueChanged = function(t2) {
    var i = this.encode ? this.encodeValue(t2 || "") : t2 || "";
    this.bdsChange.emit({ value: i });
  };
  t.prototype.autoResizeTextarea = function() {
    if (this.isTextarea && this.autoResize && this.nativeInput) {
      var t2 = this.nativeInput;
      t2.style.height = "auto";
      var i = t2.scrollHeight;
      var e = Math.min(Math.max(i, this.minHeight || 60), this.maxHeight || 200);
      t2.style.height = "".concat(e, "px");
    }
  };
  t.prototype.debouncedAutoResize = function() {
    var t2 = this;
    if (this.autoResizeDebounceTimer) {
      clearTimeout(this.autoResizeDebounceTimer);
    }
    this.autoResizeDebounceTimer = window.setTimeout(function() {
      t2.autoResizeTextarea();
    }, this.debounceDelay);
  };
  t.prototype.updateTextarea = function(t2) {
    if (t2 === void 0) {
      t2 = false;
    }
    if (this.isTextarea && this.autoResize) {
      if (t2) {
        this.autoResizeTextarea();
      } else {
        this.debouncedAutoResize();
      }
    }
  };
  t.prototype.renderIcon = function() {
    var t2 = this.iconSize === "medium" ? "medium" : "small";
    var i = this.iconSize === "medium";
    return this.icon && h("div", { class: { input__icon: true, "input__icon--large": i, "input__icon--textarea": this.isTextarea } }, h("bds-icon", { class: "input__icon--color", size: t2, name: this.icon, color: "inherit" }));
  };
  t.prototype.renderLabel = function() {
    return this.label && h("label", { class: { input__container__label: true, "input__container__label--pressed": this.isPressed && !this.disabled } }, h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label));
  };
  t.prototype.renderMessage = function() {
    var t2 = this.danger ? "error" : this.success ? "checkball" : "info";
    var i = this.danger ? this.errorMessage : this.success ? this.successMessage : this.helperMessage;
    if (!i && this.validationDanger) i = this.validationMesage;
    var e = this.danger || this.validationDanger ? "input__message input__message--danger" : this.success ? "input__message input__message--success" : "input__message";
    if (i) {
      return h("div", { class: e, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: t2, theme: "outline", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, i));
    }
    return void 0;
  };
  t.prototype.onBlurValidations = function() {
    this.required && this.requiredValidation();
    this.pattern && this.patternValidation();
    (this.minlength || this.maxlength) && this.lengthValidation();
    (this.min || this.max) && this.minMaxValidation();
    this.checkValidity();
  };
  t.prototype.onBdsInputValidations = function() {
    this.type === "email" && this.emailValidation();
    this.type === "phonenumber" && this.numberValidation();
    this.checkValidity();
  };
  t.prototype.patternValidation = function() {
    var t2 = new RegExp(this.pattern);
    this.bdsPatternValidation.emit(t2.test(this.nativeInput.value));
  };
  t.prototype.requiredValidation = function() {
    if (this.nativeInput.validity.valueMissing) {
      this.validationMesage = this.requiredErrorMessage;
      this.validationDanger = true;
    }
  };
  t.prototype.lengthValidation = function() {
    if (this.nativeInput.validity.tooShort) {
      this.validationMesage = this.minlengthErrorMessage;
      this.validationDanger = true;
      return;
    }
    if (this.nativeInput.validity.tooLong) {
      this.validationDanger = true;
      return;
    }
  };
  t.prototype.minMaxValidation = function() {
    if (this.nativeInput.validity.rangeUnderflow) {
      this.validationMesage = this.minErrorMessage;
      this.validationDanger = true;
      return;
    }
    if (this.nativeInput.validity.rangeOverflow) {
      this.validationMesage = this.maxErrorMessage;
      this.validationDanger = true;
      return;
    }
  };
  t.prototype.emailValidation = function() {
    if (emailValidation(this.nativeInput.value)) {
      this.validationMesage = this.emailErrorMessage;
      this.validationDanger = true;
    }
  };
  t.prototype.numberValidation = function() {
    if (numberValidation(this.nativeInput.value)) {
      this.validationMesage = this.numberErrorMessage;
      this.validationDanger = true;
    }
  };
  t.prototype.checkValidity = function() {
    if (this.nativeInput.validity.valid) {
      this.validationDanger = false;
    }
  };
  t.prototype.componentDidUpdate = function() {
    if (this.nativeInput && this.value != this.nativeInput.value) {
      this.nativeInput.value = this.value;
    }
    this.updateTextarea(true);
  };
  t.prototype.componentDidLoad = function() {
    this.updateTextarea(true);
  };
  t.prototype.disconnectedCallback = function() {
    if (this.autoResizeDebounceTimer) {
      window.clearTimeout(this.autoResizeDebounceTimer);
    }
  };
  t.prototype.render = function() {
    var t2 = this;
    var i = this.isPressed && !this.disabled;
    var e = this.isTextarea ? "textarea" : "input";
    return h(Host, { key: "cd976d3b96db3046f3a3eba8326bbee46ff9e151", "aria-disabled": this.disabled ? "true" : null }, h("div", { key: "6c2ba8cc39bcdc73e2be7604555783d946fac94b", class: { input: true, "input--state-primary": !this.danger && !this.validationDanger, "input--state-danger": this.danger || this.validationDanger, "input--state-success": this.success, "input--state-disabled": this.disabled, "input--label": !!this.label, "input--pressed": i, "input--textarea": this.isTextarea }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("slot", { key: "6767cc61b7d22a4f96e857d2c053e758cc8ff081", name: "input-left" }), h("div", { key: "e5716618215cec9a77c90e1e0baa7f878dc27c96", class: "input__container" }, this.renderLabel(), h("div", { key: "2916bed57190055ec01438f9be400f74716be5c5", class: { input__container__wrapper: !this.chips, input__container__wrapper__chips: this.chips, "input__container__wrapper--textarea": this.isTextarea } }, h("slot", { key: "0cccef053caf8461e7bf99e8f39386b4150146c9", name: "inside-input-left" }), h(e, { key: "e1f54dc300b9f12f7123b081a7f05ce8c27246f0", class: { input__container__text: true, input__container__text__chips: this.chips, "input__container__text--textarea": this.isTextarea }, ref: function(i2) {
      return t2.nativeInput = i2;
    }, rows: this.isTextarea ? this.rows : void 0, cols: this.isTextarea ? this.cols : void 0, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, disabled: this.disabled, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, placeholder: this.placeholder, readOnly: this.readonly, type: this.isTextarea ? void 0 : this.type, value: this.encodeValue(this.value), pattern: this.pattern, required: this.required, part: "input", "data-test": this.dataTest, style: this.isTextarea ? { minHeight: "".concat(this.minHeight || 60, "px"), maxHeight: "".concat(this.maxHeight || 200, "px"), resize: this.resizable ? this.autoResize ? "none" : "vertical" : "none" } : {} }))), this.counterLength && h("bds-counter-text", Object.assign({ key: "8665fa48a456ddf90b993442d44e93c116425fdb", length: this.value.length, max: this.maxlength, active: i }, this.counterLengthRule)), this.success && h("bds-icon", { key: "244099c9cb2ff093412ed03b4b73207c68530bfd", class: "icon-success", name: "check", theme: "outline", size: "small" }), h("slot", { key: "d882c2f79c904f0adc4d18febd9c5ed77932644a", name: "input-right" })), this.renderMessage());
  };
  Object.defineProperty(t, "watchers", { get: function() {
    return { value: ["valueChanged"] };
  }, enumerable: false, configurable: true });
  return t;
}();
Input.style = inputCss;
export {
  Input as bds_input
};
//# sourceMappingURL=bds-input.entry-w9P9pPh_.js.map
