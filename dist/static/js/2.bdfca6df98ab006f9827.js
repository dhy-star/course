webpackJsonp([2],{EV1k:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a={name:"login",methods:{login:function(){var t=this,o=document.querySelectorAll(".form-control")[0].value,e=document.querySelectorAll(".form-control")[1].value;console.log(o),console.log(e),this.ajax.get(this.basePath+"/login?account="+o+"&password="+e).then(function(o){console.log(o.data);var e=o.data;e.isture?t.$router.push({path:"window"}):alert(e.msg)})}}},s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"box"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"modal-footer"},[e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary form-control",attrs:{type:"button"},on:{click:t.login}},[t._v("登录")])]),t._v(" "),t._m(2)])])])])},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"modal-header"},[o("h4",{staticClass:"modal-title text-center",attrs:{id:"myModalLabel"}},[this._v("登录")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"modal-body"},[o("div",{staticClass:"form-group"},[o("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"用户名",autocomplete:"off"}})]),this._v(" "),o("div",{staticClass:"form-group"},[o("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"密码",autocomplete:"off"}})])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-default form-control",attrs:{type:"button"}},[this._v("注册")])])}]};var l=e("VU/8")(a,s,!1,function(t){e("vmwS")},"data-v-e1c6176e",null);o.default=l.exports},vmwS:function(t,o){}});
//# sourceMappingURL=2.bdfca6df98ab006f9827.js.map