import { h, H as Host, r as registerInstance, c as createEvent } from "./index-C5zPPjub.js";
var avatarGroupCss = ".host{position:relative;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.avatar__group{display:-ms-flexbox;display:flex}.avatar__group>*:nth-child(1){z-index:1}.avatar__group>*:nth-child(2){z-index:2}.avatar__group>*:nth-child(3){z-index:3}.avatar__group>*:nth-child(4){z-index:4}.avatar__group>*:nth-child(5){z-index:5}.avatar__group>*:nth-child(6){z-index:6;width:auto}.avatar__group>*:nth-child(6) div{background-color:#292929;padding:0 16px;width:auto}.avatar__group__click--true{cursor:pointer}.avatar__group .avatar{position:relative}.avatar__group__size--extra-small{margin-left:8px}.avatar__group__size--extra-small>*{margin-left:-8px}.avatar__group__size--extra-small>*:nth-child(6) div{padding:0 8px}.avatar__group__size--extra-small .avatar{height:32px}.avatar__group__size--small{margin-left:8px}.avatar__group__size--small>*{margin-left:-8px}.avatar__group__size--small .avatar{height:40px}.avatar__group__size--standard{margin-left:16px}.avatar__group__size--standard>*{margin-left:-16px}.avatar__group__size--standard .avatar{height:56px}.avatar__group__size--large{margin-left:16px}.avatar__group__size--large>*{margin-left:-16px}.avatar__group__size--large .avatar{height:64px}.avatar__group__size--extra-large{margin-left:16px}.avatar__group__size--extra-large>*{margin-left:-16px}.avatar__group__size--extra-large .avatar{height:72px}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, rgb(194, 38, 251));border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}";
var AvatarGroup = function() {
  function a(a2) {
    registerInstance(this, a2);
    this.bdsClickAvatarGroup = createEvent(this, "bdsClickAvatarGroup");
    this.size = "standard";
    this.avatarBgColor = function(a3) {
      var t = ["system", "success", "warning", "error", "info"];
      return t[a3];
    };
  }
  a.prototype.handleClickGroup = function(a2) {
    a2.preventDefault();
    this.bdsClickAvatarGroup.emit(a2);
  };
  a.prototype.handleClickKey = function(a2) {
    if ((a2.key === "Enter" || a2.key === " ") && this.canClick) {
      a2.preventDefault();
      this.bdsClickAvatarGroup.emit();
    }
  };
  a.prototype.parseUsers = function() {
    if (this.users) {
      try {
        this.internalUsers = typeof this.users === "string" ? JSON.parse(this.users) : this.users;
      } catch (a2) {
        this.internalUsers = [];
      }
    }
  };
  a.prototype.componentWillLoad = function() {
    this.users && this.parseUsers();
    this.leftoversUsers = this.internalUsers.length - 5;
  };
  a.prototype.render = function() {
    var a2;
    var t = this;
    return h(Host, { key: "d573fd0a93f49d5001dbf72017643c76cbb53c7a", class: "host" }, h("div", { key: "e6b551e5fbb12d9eba2d98ee067f97ac943be5c0", class: (a2 = { avatar__group: true }, a2["avatar__group__size--".concat(this.size)] = true, a2["avatar__group__click--".concat(this.canClick)] = true, a2), tabindex: "0", onClick: function(a3) {
      return t.handleClickGroup(a3);
    } }, this.internalUsers ? this.internalUsers.slice(0, 6).map(function(a3, r, i) {
      return r + 1 === i.length && t.internalUsers.length > 5 ? h("bds-avatar", { key: r, name: a3.name, color: "surface", size: t.size, ellipsis: t.leftoversUsers }) : h("bds-avatar", { key: r, id: a3.id, name: a3.name, thumbnail: a3.thumbnail, color: t.avatarBgColor(r), size: t.size });
    }) : h("slot", null)), this.canClick ? h("div", { class: "focus", tabindex: "0", onClick: function() {
      return t.handleClickKey;
    } }) : "");
  };
  return a;
}();
AvatarGroup.style = avatarGroupCss;
export {
  AvatarGroup as bds_avatar_group
};
//# sourceMappingURL=bds-avatar-group.entry-CnClNOlT.js.map
