import { h, H as Host, g as getElement, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var listCss = ':host{display:block;width:100%}:host(.list_item_content){display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.list_item{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-align:center;align-items:center}.list_item_tall{padding:16px}.list_item_standard{padding:8px 16px}.list_item_short{padding:8px}.list_item .input_list{position:relative}.list_item .avatar-item{position:relative;display:block}.list_item .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.list_item .grow-up{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.list_item .content-item{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.list_item .content-item .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-item .subtitle-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-area{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-area .internal-chips,.list_item .content-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px}.list_item .action-area{position:relative}.list_item .action-area .internal-actions-buttons,.list_item .action-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.list_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.border_radius{border-radius:8px}.border_radius:before,.border_radius:after,.border_radius .active{border-radius:8px}.active{position:absolute;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08;inset:0}.clickable{position:relative;cursor:pointer;gap:8px}.clickable:before{content:"";position:absolute;inset:0}.clickable:hover:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.clickable:active:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}';
var List = function() {
  function t(t2) {
    var i = this;
    registerInstance(this, t2);
    this.bdsListCheckboxChange = createEvent(this, "bdsListCheckboxChange");
    this.bdsListRadioChange = createEvent(this, "bdsListRadioChange");
    this.bdsListSwitchChange = createEvent(this, "bdsListSwitchChange");
    this.bdsClickActionsButtons = createEvent(this, "bdsClickActionsButtons");
    this.itemListElement = null;
    this.typeList = null;
    this.chagedOptions = function(t3) {
      var e = t3.detail;
      if (e.typeList == "radio") {
        if (e.checked == true) {
          i.value = e;
        }
      }
      if (e.typeList == "checkbox") {
        i.setSelectedCheckbox();
      }
      if (e.typeList == "switch") {
        i.setSelectedSwitch();
      }
    };
    this.onClickActionsButtons = function(t3) {
      var e = t3.detail;
      i.bdsClickActionsButtons.emit(e);
    };
  }
  t.prototype.componentWillLoad = function() {
    this.data && this.dataChanged();
  };
  t.prototype.componentWillRender = function() {
    this.data && this.updateData();
    if (!this.data) {
      this.setitemListElement();
    }
  };
  t.prototype.componentDidRender = function() {
    if (this.data) {
      this.internalDataChanged();
    }
  };
  t.prototype.dataChanged = function() {
    this.updateData();
  };
  t.prototype.valueChanged = function(t2) {
    this.setSelectedRadio(t2);
  };
  t.prototype.internalDataChanged = function() {
    this.itemListElement = this.element.shadowRoot.querySelectorAll("bds-list-item");
  };
  t.prototype.setitemListElement = function() {
    var t2 = this;
    this.itemListElement = this.element.getElementsByTagName("bds-list-item");
    for (var i = 0; i < this.itemListElement.length; i++) {
      this.itemListElement[i].typeList = this.typeList;
      this.itemListElement[i].addEventListener("bdsChecked", function(i2) {
        return t2.chagedOptions(i2);
      });
    }
  };
  t.prototype.updateData = function() {
    if (this.data) {
      if (typeof this.data === "string") {
        this.internalData = JSON.parse(this.data);
      } else {
        this.internalData = this.data;
      }
    }
  };
  t.prototype.setSelectedRadio = function(t2) {
    var i, e, o, n, a;
    var r = Array.from(this.itemListElement);
    var s = r.filter(function(t3) {
      return t3.typeList == "radio";
    });
    for (var l = 0; l < s.length; l++) {
      if (s[l].value != t2.value) {
        s[l].checked = false;
      } else {
        var c = { value: s[l].value, text: (i = s[l]) === null || i === void 0 ? void 0 : i.text, secondaryText: (e = s[l]) === null || e === void 0 ? void 0 : e.secondaryText, avatarName: (o = s[l]) === null || o === void 0 ? void 0 : o.avatarName, avatarThumbnail: (n = s[l]) === null || n === void 0 ? void 0 : n.avatarThumbnail, typeList: (a = s[l]) === null || a === void 0 ? void 0 : a.typeList };
        this.bdsListRadioChange.emit(c);
      }
    }
  };
  t.prototype.setSelectedCheckbox = function() {
    var t2 = this.itemListElement;
    var i = Array.from(t2).filter(function(t3) {
      return t3.typeList == "checkbox";
    });
    var e = i.filter(function(t3) {
      return t3.checked;
    }).map(function(t3) {
      return { value: t3.value, text: t3 === null || t3 === void 0 ? void 0 : t3.text, secondaryText: t3 === null || t3 === void 0 ? void 0 : t3.secondaryText, avatarName: t3 === null || t3 === void 0 ? void 0 : t3.avatarName, avatarThumbnail: t3 === null || t3 === void 0 ? void 0 : t3.avatarThumbnail, typeList: t3 === null || t3 === void 0 ? void 0 : t3.typeList };
    });
    this.bdsListCheckboxChange.emit(e);
  };
  t.prototype.setSelectedSwitch = function() {
    var t2 = this.itemListElement;
    var i = Array.from(t2).filter(function(t3) {
      return t3.typeList == "switch";
    });
    var e = i.filter(function(t3) {
      return t3.checked;
    }).map(function(t3) {
      return { value: t3.value, text: t3 === null || t3 === void 0 ? void 0 : t3.text, secondaryText: t3 === null || t3 === void 0 ? void 0 : t3.secondaryText, avatarName: t3 === null || t3 === void 0 ? void 0 : t3.avatarName, avatarThumbnail: t3 === null || t3 === void 0 ? void 0 : t3.avatarThumbnail, typeList: t3 === null || t3 === void 0 ? void 0 : t3.typeList };
    });
    this.bdsListSwitchChange.emit(e);
  };
  t.prototype.render = function() {
    var t2 = this;
    return h(Host, { key: "dcdf6ac9fbf6510d7ef1308d96c8514214008fd8" }, h("div", { key: "87a84c84e1750418a9a98398b3dc7afe5f1dc91f", class: { list: true } }, this.internalData ? this.internalData.map(function(i, e) {
      return h("bds-list-item", { key: e, value: i.value, text: i.text, "type-list": t2.typeList ? t2.typeList : i.typeList, "secondary-text": i.secondaryText, "avatar-name": i.avatarName, "avatar-thumbnail": i.avatarThumbnail, checked: i.checked, icon: i.icon, chips: i.chips, actionsButtons: i.actionsButtons, onBdsChecked: function(i2) {
        return t2.chagedOptions(i2);
      }, onBdsClickActionButtom: function(i2) {
        return t2.onClickActionsButtons(i2);
      }, dataTest: i.dataTest });
    }) : h("slot", null)));
  };
  Object.defineProperty(t.prototype, "element", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  Object.defineProperty(t, "watchers", { get: function() {
    return { data: ["dataChanged"], value: ["valueChanged"], internalData: ["internalDataChanged"] };
  }, enumerable: false, configurable: true });
  return t;
}();
List.style = listCss;
export {
  List as bds_list
};
//# sourceMappingURL=bds-list.entry-CnOXUlmE.js.map
