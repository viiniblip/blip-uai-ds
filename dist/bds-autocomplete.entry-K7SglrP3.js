import { h, H as Host, g as getElement, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
import { c as getScrollParent, p as positionAbsoluteElement } from "./position-element-CyGI72Zy-BWMV7WJB.js";
var __awaiter = function(t, e, i, o) {
  function n(t2) {
    return t2 instanceof i ? t2 : new i(function(e2) {
      e2(t2);
    });
  }
  return new (i || (i = Promise))(function(i2, r) {
    function s(t2) {
      try {
        c(o.next(t2));
      } catch (t3) {
        r(t3);
      }
    }
    function a(t2) {
      try {
        c(o["throw"](t2));
      } catch (t3) {
        r(t3);
      }
    }
    function c(t2) {
      t2.done ? i2(t2.value) : n(t2.value).then(s, a);
    }
    c((o = o.apply(t, e || [])).next());
  });
};
var __generator = function(t, e) {
  var i = { label: 0, sent: function() {
    if (r[0] & 1) throw r[1];
    return r[1];
  }, trys: [], ops: [] }, o, n, r, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol === "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(t2) {
    return function(e2) {
      return c([t2, e2]);
    };
  }
  function c(a2) {
    if (o) throw new TypeError("Generator is already executing.");
    while (s && (s = 0, a2[0] && (i = 0)), i) try {
      if (o = 1, n && (r = a2[0] & 2 ? n["return"] : a2[0] ? n["throw"] || ((r = n["return"]) && r.call(n), 0) : n.next) && !(r = r.call(n, a2[1])).done) return r;
      if (n = 0, r) a2 = [a2[0] & 2, r.value];
      switch (a2[0]) {
        case 0:
        case 1:
          r = a2;
          break;
        case 4:
          i.label++;
          return { value: a2[1], done: false };
        case 5:
          i.label++;
          n = a2[1];
          a2 = [0];
          continue;
        case 7:
          a2 = i.ops.pop();
          i.trys.pop();
          continue;
        default:
          if (!(r = i.trys, r = r.length > 0 && r[r.length - 1]) && (a2[0] === 6 || a2[0] === 2)) {
            i = 0;
            continue;
          }
          if (a2[0] === 3 && (!r || a2[1] > r[0] && a2[1] < r[3])) {
            i.label = a2[1];
            break;
          }
          if (a2[0] === 6 && i.label < r[1]) {
            i.label = r[1];
            r = a2;
            break;
          }
          if (r && i.label < r[2]) {
            i.label = r[2];
            i.ops.push(a2);
            break;
          }
          if (r[2]) i.ops.pop();
          i.trys.pop();
          continue;
      }
      a2 = e.call(t, i);
    } catch (t2) {
      a2 = [6, t2];
      n = 0;
    } finally {
      o = r = 0;
    }
    if (a2[0] & 5) throw a2[1];
    return { value: a2[0] ? a2[1] : void 0, done: true };
  }
};
var ptTerms = { selected: "selecionados", allSelected: "Selecionar Todos" };
var esTerms = { selected: "seleccionados", allSelected: "Seleccionar todos" };
var enTerms = { selected: "selected", allSelected: "Select all" };
var termTranslate = function(t, e) {
  var i = t === "en_US" ? enTerms : t === "es_ES" ? esTerms : ptTerms;
  return i[e];
};
var autocompleteCss = ':host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-primary .input__container__text:-moz-placeholder-shown{color:var(--color-content-ghost, rgb(140, 140, 140))}.input--state-primary .input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.input--state-primary .input__container__text:placeholder-shown{color:var(--color-content-ghost, rgb(140, 140, 140))}.input--state-danger{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, rgb(138, 0, 0));z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190));box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190))}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, rgb(230, 15, 15))}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-danger .input__container__text:-moz-placeholder-shown{color:var(--color-content-ghost, rgb(140, 140, 140))}.input--state-danger .input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.input--state-danger .input__container__text:placeholder-shown{color:var(--color-content-ghost, rgb(140, 140, 140))}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, rgb(1, 114, 62));z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188));box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188))}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__text:-moz-placeholder-shown{color:var(--color-content-ghost, rgb(140, 140, 140))}.input--state-success .input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.input--state-success .input__container__text:placeholder-shown{color:var(--color-content-ghost, rgb(140, 140, 140))}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__text::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.input__container__text::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.input__container__text::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.input__container__text::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, rgb(89, 89, 89));word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, rgb(40, 40, 40))}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.input__container__text::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.input__container__text::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.input__container__text::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140))}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;gap:8px}.input__container__wrapper .inside-input-left{display:inline}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit;-ms-flex-negative:99999;flex-shrink:99999}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}:host{display:block}.select{position:relative;outline:none;overflow:hidden}.select__icon{color:var(--color-content-ghost, rgb(140, 140, 140));display:-ms-flexbox;display:flex}.select__icon bds-icon{margin-left:10px}.select .icon-hidden{visibility:hidden}.select__options{display:grid;background:var(--color-surface-0, rgb(255, 255, 255));width:100%;max-height:200px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:absolute;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;pointer-events:none;opacity:0}.select__options::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.select__options ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column}.select__options .selection-title{-ms-flex-order:-2;order:-2;width:100%;padding:8px 16px;-webkit-box-sizing:border-box;box-sizing:border-box}.select__options .select-all{-ms-flex-order:-3;order:-3;padding:8px 8px 8px 12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center;outline:none;-ms-flex-direction:row;flex-direction:row}.select__options .content-divisor{display:block;width:100%;height:1px;background-color:var(--color-surface-1, rgb(246, 246, 246))}.select__options .content-divisor .divisor{display:block;margin:0 16px;height:1px;background-color:var(--color-border-2, rgba(0, 0, 0, 0.16))}.select__options .load-spinner{background-color:var(--color-surface-1, rgb(246, 246, 246));height:200px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.select__options--open{opacity:1;pointer-events:auto}.select__options--position-top{bottom:calc(100% + 4px)}.select__options--position-bottom{top:calc(100% + 4px)}.select__options .options-checked{-ms-flex-order:-1;order:-1}';
var BdsAutocomplete = function() {
  function t(t2) {
    var e = this;
    registerInstance(this, t2);
    this.bdsChange = createEvent(this, "bdsChange");
    this.bdsSelectedChange = createEvent(this, "bdsSelectedChange");
    this.bdsMultiselectedChange = createEvent(this, "bdsMultiselectedChange");
    this.bdsInput = createEvent(this, "bdsInput");
    this.bdsCancel = createEvent(this, "bdsCancel");
    this.bdsFocus = createEvent(this, "bdsFocus");
    this.bdsBlur = createEvent(this, "bdsBlur");
    this.intoView = null;
    this.isPressed = false;
    this.isOpen = false;
    this.text = "";
    this.textMultiselect = "";
    this.placeholderState = this.placeholder;
    this.isFocused = false;
    this.validationDanger = false;
    this.validationMesage = "";
    this.danger = false;
    this.success = false;
    this.disabled = false;
    this.searchOnlyTitle = true;
    this.label = "";
    this.icon = "";
    this.placeholder = "";
    this.helperMessage = "";
    this.errorMessage = "";
    this.successMessage = "";
    this.optionsPosition = "auto";
    this.clearIconOnFocus = false;
    this.dataTest = null;
    this.language = "pt_BR";
    this.loading = false;
    this.selectionType = "single";
    this.selectionTitle = "";
    this.selectedAll = true;
    this.refDropdown = function(t3) {
      e.dropElement = t3;
    };
    this.refIconDrop = function(t3) {
      e.iconDropElement = t3;
    };
    this.refCheckAllInput = function(t3) {
      e.checkAllInput = t3;
    };
    this.onFocus = function() {
      e.isFocused = true;
      e.isPressed = true;
      e.bdsFocus.emit();
    };
    this.onFocusout = function() {
      if (!e.isOpen) {
        e.nativeInput.value = e.getText();
      }
    };
    this.onBlur = function() {
      var t3;
      e.bdsBlur.emit();
      e.isPressed = false;
      if (!e.isOpen) {
        e.isFocused = false;
        e.nativeInput.value = e.getText();
        if (e.selectionType == "multiple") e.cleanInputSelection();
      }
      if (e.selectionType == "multiple" && ((t3 = e.checkedOptions) === null || t3 === void 0 ? void 0 : t3.length) > 0) e.getTextMultiselect(e.checkedOptions);
    };
    this.onClickWrapper = function() {
      e.onFocus();
      e.toggle();
      if (e.nativeInput) {
        e.nativeInput.focus();
      }
    };
    this.toggle = function() {
      if (!e.disabled) {
        e.isOpen = !e.isOpen;
      }
    };
    this.getTextFromOption = function(t3) {
      var i;
      if (e.internalOptions) {
        var o = e.internalOptions.find(function(e2) {
          return e2.value == (t3 === null || t3 === void 0 ? void 0 : t3.value);
        });
        if (o) {
          return o.label;
        }
      }
      return (t3 === null || t3 === void 0 ? void 0 : t3.titleText) ? t3.titleText : (i = t3 === null || t3 === void 0 ? void 0 : t3.innerText) !== null && i !== void 0 ? i : "";
    };
    this.getText = function() {
      var t3 = e.childOptions.find(function(t4) {
        return t4.value == e.value;
      });
      return e.getTextFromOption(t3);
    };
    this.getTextMultiselect = function(t3) {
      var i = (t3 === null || t3 === void 0 ? void 0 : t3.length) > 0 ? "".concat(t3 === null || t3 === void 0 ? void 0 : t3.length, " ").concat(termTranslate(e.language, "selected")) : "";
      e.textMultiselect = i;
    };
    this.handlerMultiselect = function() {
      e.updateListChecked(e.childOptions);
      e.nativeInput.value = "";
      e.value = void 0;
      e.resetFilterOptions();
      if (e.childOptions.length != e.checkedOptions.length) {
        setTimeout(function() {
          e.checkAllInput.checked = false;
        }, 10);
      }
    };
    this.handleCheckAll = function(t3) {
      var i = t3.detail.checked;
      for (var o = 0, n = e.childOptions; o < n.length; o++) {
        var r = n[o];
        if (i) {
          r.toMark();
        } else {
          r.markOff();
        }
      }
      setTimeout(function() {
        e.updateListChecked(e.childOptions);
      }, 10);
    };
    this.updateListChecked = function(t3) {
      for (var i = 0, o = t3; i < o.length; i++) {
        var n = o[i];
        n.checked ? n.classList.add("option-checked") : n.classList.remove("option-checked");
      }
      var r = Array.from(t3).filter(function(t4) {
        return t4.checked == true;
      });
      var s = r.map(function(t4) {
        return { value: t4.value, label: t4.textContent, checked: t4.checked };
      });
      e.checkedOptions = s;
    };
    this.handler = function(t3) {
      var i = t3.detail.value;
      e.value = i;
      e.toggle();
    };
    this.cleanInputSelection = function() {
      return __awaiter(e, void 0, void 0, function() {
        return __generator(this, function(t3) {
          switch (t3.label) {
            case 0:
              if (!!this.disabled) return [3, 2];
              this.value = "";
              this.nativeInput.value = "";
              this.isOpen = false;
              this.bdsCancel.emit({ value: "" });
              return [4, this.resetFilterOptions()];
            case 1:
              t3.sent();
              t3.label = 2;
            case 2:
              return [2];
          }
        });
      });
    };
    this.changedInputValue = function(t3) {
      return __awaiter(e, void 0, void 0, function() {
        var e2;
        return __generator(this, function(i) {
          switch (i.label) {
            case 0:
              e2 = t3.target;
              if (e2) {
                this.value = e2.value || "";
              }
              this.bdsInput.emit(t3);
              if (!this.nativeInput.value) return [3, 2];
              if (!this.disabled && !this.isOpen) {
                this.isOpen = true;
              }
              return [4, this.filterOptions(this.nativeInput.value)];
            case 1:
              i.sent();
              return [3, 5];
            case 2:
              this.value = "";
              if (!this.isOpen) return [3, 4];
              return [4, this.resetFilterOptions()];
            case 3:
              i.sent();
              return [3, 5];
            case 4:
              this.setTimeoutFilter();
              i.label = 5;
            case 5:
              return [2];
          }
        });
      });
    };
  }
  t.prototype.isOpenChanged = function(t2) {
    if (this.positionHeightDrop == "bottom") {
      this.iconDropElement.name = this.isOpen ? "arrow-up" : "arrow-down";
    } else {
      this.iconDropElement.name = this.isOpen ? "arrow-down" : "arrow-up";
    }
    if (t2) if (this.optionsPosition != "auto") {
      this.setDefaultPlacement(this.optionsPosition);
    } else {
      this.validatePositionDrop();
    }
  };
  t.prototype.itemSelectedChanged = function() {
    this.bdsSelectedChange.emit(this.selected);
  };
  t.prototype.valueChanged = function() {
    this.bdsChange.emit({ value: this.value == null ? this.value : this.value.toString() });
    for (var t2 = 0, e = this.childOptions; t2 < e.length; t2++) {
      var i = e[t2];
      i.selected = this.value === i.value;
    }
    this.selected = this.childOptionSelected;
    this.text = this.getText();
  };
  t.prototype.handleWindow = function(t2) {
    if (!this.el.contains(t2.target)) {
      this.isOpen = false;
    }
  };
  t.prototype.changeCheckedOptions = function() {
    var t2;
    this.placeholderState = this.selectionType === "multiple" ? ((t2 = this.checkedOptions) === null || t2 === void 0 ? void 0 : t2.length) === 0 || this.checkedOptions === null ? this.placeholder : "" : this.placeholder;
    this.getTextMultiselect(this.checkedOptions);
    this.bdsMultiselectedChange.emit({ value: this.checkedOptions });
  };
  t.prototype.parseOptions = function() {
    if (this.options) {
      this.resetFilterOptions();
      try {
        this.internalOptions = typeof this.options === "string" ? JSON.parse(this.options) : this.options;
      } catch (t2) {
        this.internalOptions = [];
      }
    }
  };
  t.prototype.changeSelectionType = function() {
    if (!this.options) {
      for (var t2 = 0, e = this.childOptions; t2 < e.length; t2++) {
        var i = e[t2];
        if (this.selectionType === "multiple") {
          i.typeOption = "checkbox";
          i.addEventListener("optionChecked", this.handlerMultiselect);
        } else {
          i.typeOption = "default";
          i.selected = this.value === i.value;
          i.addEventListener("optionSelected", this.handler);
        }
      }
    }
  };
  t.prototype.componentWillLoad = function() {
    this.intoView = getScrollParent(this.el);
    this.options && this.parseOptions();
  };
  t.prototype.componentDidLoad = function() {
    if (!this.options) {
      for (var t2 = 0, e = this.childOptions; t2 < e.length; t2++) {
        var i = e[t2];
        if (this.selectionType === "multiple") {
          i.typeOption = "checkbox";
          i.addEventListener("optionChecked", this.handlerMultiselect);
        } else {
          i.typeOption = "default";
          i.selected = this.value === i.value;
          i.addEventListener("optionSelected", this.handler);
        }
      }
    }
    this.text = this.getText();
    if (this.optionsPosition != "auto") {
      this.setDefaultPlacement(this.optionsPosition);
    } else {
      this.validatePositionDrop();
    }
  };
  t.prototype.setDefaultPlacement = function(t2) {
    if (t2 == "bottom") {
      this.dropElement.classList.add("select__options--position-bottom");
      this.iconDropElement.name = "arrow-down";
    } else {
      this.dropElement.classList.add("select__options--position-top");
      this.iconDropElement.name = "arrow-up";
    }
  };
  t.prototype.validatePositionDrop = function() {
    var t2 = positionAbsoluteElement({ actionElement: this.el, changedElement: this.dropElement, intoView: this.intoView });
    this.positionHeightDrop = t2.y;
    if (t2.y == "bottom") {
      this.dropElement.classList.add("select__options--position-bottom");
      this.iconDropElement.name = "arrow-down";
    } else {
      this.dropElement.classList.add("select__options--position-top");
      this.iconDropElement.name = "arrow-up";
    }
  };
  Object.defineProperty(t.prototype, "childOptions", { get: function() {
    return this.options ? Array.from(this.el.shadowRoot.querySelectorAll("bds-select-option")) : Array.from(this.el.querySelectorAll("bds-select-option"));
  }, enumerable: false, configurable: true });
  Object.defineProperty(t.prototype, "childOptionSelected", { get: function() {
    return this.options ? Array.from(this.el.shadowRoot.querySelectorAll("bds-select-option")).find(function(t2) {
      return t2.selected;
    }) : Array.from(this.el.querySelectorAll("bds-select-option")).find(function(t2) {
      return t2.selected;
    });
  }, enumerable: false, configurable: true });
  t.prototype.keyPressWrapper = function(t2) {
    var e, i, o, n;
    switch (t2.key) {
      case "Enter":
        this.toggle();
        break;
      case "ArrowDown":
        if (!this.disabled) {
          this.isOpen = true;
        }
        if (this.childOptionSelected) {
          this.value = (e = this.childOptionSelected.nextSibling) === null || e === void 0 ? void 0 : e.value;
          return;
        }
        this.value = (i = this.el.firstElementChild) === null || i === void 0 ? void 0 : i.value;
        break;
      case "ArrowUp":
        if (this.childOptionSelected) {
          this.value = (o = this.childOptionSelected.previousSibling) === null || o === void 0 ? void 0 : o.value;
          return;
        }
        this.value = (n = this.el.lastElementChild) === null || n === void 0 ? void 0 : n.value;
        break;
    }
  };
  t.prototype.cleanMultipleSelection = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, e, i, o;
      return __generator(this, function(n) {
        if (this.selectionType === "multiple" && ((t2 = this.checkedOptions) === null || t2 === void 0 ? void 0 : t2.length) > 0) {
          for (e = 0, i = this.childOptions; e < i.length; e++) {
            o = i[e];
            o.checked = false;
            o.classList.remove("option-checked");
          }
          this.checkedOptions = [];
          this.checkAllInput.checked = false;
          this.nativeInput.value = "";
          this.value = void 0;
          this.resetFilterOptions();
        } else {
          this.cleanInputSelection();
        }
        return [2];
      });
    });
  };
  t.prototype.setTimeoutFilter = function() {
    var t2 = this;
    setTimeout(function() {
      t2.resetFilterOptions();
    }, 500);
  };
  t.prototype.filterOptions = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      var e, i, o, n, r;
      return __generator(this, function(s) {
        switch (s.label) {
          case 0:
            if (!!t2) return [3, 2];
            return [4, this.resetFilterOptions()];
          case 1:
            s.sent();
            s.label = 2;
          case 2:
            for (e = 0, i = this.childOptions; e < i.length; e++) {
              o = i[e];
              n = this.searchOnlyTitle ? this.getTextFromOption(o).toLowerCase() : o.textContent.toLowerCase();
              r = t2.toLowerCase();
              n.includes(r) ? o.removeAttribute("invisible") : o.setAttribute("invisible", "invisible");
            }
            return [2];
        }
      });
    });
  };
  t.prototype.resetFilterOptions = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, e, i, o;
      return __generator(this, function(n) {
        t2 = this.childOptions;
        for (e = 0, i = t2; e < i.length; e++) {
          o = i[e];
          o.removeAttribute("invisible");
        }
        return [2];
      });
    });
  };
  t.prototype.renderIcon = function() {
    return this.icon && h("div", { class: { input__icon: true, "input__icon--large": !!this.label } }, h("bds-icon", { size: this.label ? "medium" : "small", name: this.icon, color: "inherit" }));
  };
  t.prototype.renderLabel = function() {
    return this.label && h("label", { class: { input__container__label: true, "input__container__label--pressed": this.isPressed && !this.disabled } }, h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label));
  };
  t.prototype.renderMessage = function() {
    var t2 = this.danger ? "error" : this.success ? "checkball" : "info";
    var e = this.danger ? this.errorMessage : this.success ? this.successMessage : this.helperMessage;
    if (!e && this.validationDanger) e = this.validationMesage;
    var i = this.danger || this.validationDanger ? "input__message input__message--danger" : this.success ? "input__message input__message--success" : "input__message";
    if (e) {
      return h("div", { class: i, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: t2, theme: "outline", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, e));
    }
    return void 0;
  };
  t.prototype.render = function() {
    var t2 = this;
    var e, i;
    return h(Host, { key: "5c38016eea67629b0f0e21a583ee1070e6abf32e", "aria-disabled": this.disabled ? "true" : null }, h("div", { key: "e984282d15c02248116ca226c05b5c8515831446", class: { input: true, select: true, "input--state-primary": !this.danger, "input--state-danger": this.danger || this.validationDanger, "input--state-success": this.success, "input--state-disabled": this.disabled, "input--label": !!this.label, "input--pressed": this.isPressed }, onClick: this.onClickWrapper }, this.renderIcon(), h("div", { key: "927fa100058c26da3d666d0877ec0d4c1a2e20cb", class: "input__container", tabindex: "0", onFocusout: this.onFocusout }, this.renderLabel(), h("div", { key: "8ee55cc944d8a802e8b0de67a46d964c029d6176", class: { input__container__wrapper: true } }, ((e = this.textMultiselect) === null || e === void 0 ? void 0 : e.length) > 0 && h("bds-typo", { key: "3f9a432f8ea8aaa7b86d9aa66b024eaaabf48bac", variant: "fs-14", class: "inside-input-left" }, this.textMultiselect), h("input", { key: "0ed161498e50f7aabee064293c3564b55e2d4d7f", class: { input__container__text: true }, ref: function(e2) {
      return t2.nativeInput = e2;
    }, disabled: this.disabled, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.changedInputValue, placeholder: this.placeholderState, type: "text", value: this.text, "data-test": this.dataTest, onKeyDown: this.keyPressWrapper.bind(this) }))), h("div", { key: "8be191bbc465cc913c2798ea433d735068ebba69", class: "select__icon" }, h("bds-icon", { key: "0612bde2939b7a408b2f4653b30b17e80af92ca6", size: "small", name: "error", theme: "solid", onClick: this.cleanInputSelection, class: { "icon-hidden": this.clearIconOnFocus && (!this.isFocused || !this.isOpen) || !this.value } }), h("bds-icon", { key: "dfee3c2494b1e9cb905a864c269332e24c3fc836", ref: function(e2) {
      return t2.refIconDrop(e2);
    }, size: "small", color: "inherit" }))), this.renderMessage(), this.loading ? h("div", { ref: function(e2) {
      return t2.refDropdown(e2);
    }, class: { select__options: true, "select__options--open": this.isOpen } }, h("bds-loading-spinner", { class: "load-spinner", size: "small" })) : h("div", { ref: function(e2) {
      return t2.refDropdown(e2);
    }, class: { select__options: true, "select__options--open": this.isOpen } }, this.selectionTitle && this.selectionType == "multiple" && h("bds-typo", { class: "selection-title", variant: "fs-10", bold: "bold" }, this.selectionTitle), this.selectionType == "multiple" && this.selectedAll && h("bds-checkbox", { ref: this.refCheckAllInput, refer: "refer-multiselect", label: termTranslate(this.language, "allSelected"), name: "chack-all", class: "select-all", onBdsChange: function(e2) {
      return t2.handleCheckAll(e2);
    } }), ((i = this.checkedOptions) === null || i === void 0 ? void 0 : i.length) > 0 && h("span", { class: "content-divisor" }, h("span", { class: "divisor" })), this.internalOptions ? this.internalOptions.map(function(e2, i2) {
      return h("bds-select-option", { onOptionSelected: t2.handler, onOptionChecked: t2.handlerMultiselect, selected: t2.value === e2.value, value: e2.value, key: i2, bulkOption: e2.bulkOption, status: e2.status, "type-option": t2.selectionType == "multiple" ? "checkbox" : "default" }, e2.label);
    }) : h("slot", null)));
  };
  Object.defineProperty(t.prototype, "el", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  Object.defineProperty(t, "watchers", { get: function() {
    return { isOpen: ["isOpenChanged"], selected: ["itemSelectedChanged"], value: ["valueChanged"], checkedOptions: ["changeCheckedOptions"], options: ["parseOptions"], selectionType: ["changeSelectionType"] };
  }, enumerable: false, configurable: true });
  return t;
}();
BdsAutocomplete.style = autocompleteCss;
export {
  BdsAutocomplete as bds_autocomplete
};
//# sourceMappingURL=bds-autocomplete.entry-K7SglrP3.js.map
