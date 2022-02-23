(function(_,h){typeof exports=="object"&&typeof module!="undefined"?h(exports):typeof define=="function"&&define.amd?define(["exports"],h):(_=typeof globalThis!="undefined"?globalThis:_||self,h(_.SelectField={}))})(this,function(_){"use strict";function h(e){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e,t,r){return t&&$(e.prototype,t),r&&$(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e,t){return S=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},S(e,t)}function B(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function m(e,t,r){return B()?m=Reflect.construct:m=function(i,o,s){var c=[null];c.push.apply(c,o);var a=Function.bind.apply(i,c),u=new a;return s&&S(u,s.prototype),u},m.apply(null,arguments)}function w(e,t){return V(e)||H(e,t)||M(e,t)||W()}function V(e){if(Array.isArray(e))return e}function H(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],i=!0,o=!1,s,c;try{for(r=r.call(e);!(i=(s=r.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(a){o=!0,c=a}finally{try{!i&&r.return!=null&&r.return()}finally{if(o)throw c}}return n}}function M(e,t){if(!!e){if(typeof e=="string")return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,t)}}function A(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var g=function(){return g=Object.assign||function(r){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},g.apply(this,arguments)};function Z(e){return e.toLowerCase()}var q=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],D=/[^A-Z0-9]+/gi;function G(e,t){t===void 0&&(t={});for(var r=t.splitRegexp,n=r===void 0?q:r,i=t.stripRegexp,o=i===void 0?D:i,s=t.transform,c=s===void 0?Z:s,a=t.delimiter,u=a===void 0?" ":a,d=E(E(e,n,"$1\0$2"),o,"\0"),f=0,l=d.length;d.charAt(f)==="\0";)f++;for(;d.charAt(l-1)==="\0";)l--;return d.slice(f,l).split("\0").map(c).join(u)}function E(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce(function(n,i){return n.replace(i,r)},e)}function U(e,t){return t===void 0&&(t={}),G(e,g({delimiter:"."},t))}function b(e,t){return t===void 0&&(t={}),U(e,g({delimiter:"-"},t))}var F=function(){function e(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};N(this,e),this.components={},Object.entries(r).forEach(function(n){var i=w(n,2),o=i[0],s=i[1];t.register(o,s)})}return L(e,[{key:"validate",value:function(r){if(h(r)==="object"||typeof r=="function")return r;throw new Error("Invalid data type `".concat(h(r),"`. Should be type `object` or `function`."))}},{key:"get",value:function(r){var n=this.components[r=b(r)];if(n)return n;throw new Error('"'.concat(r,'" has not been registered yet!'))}},{key:"register",value:function(r,n){var i=this;return h(r)==="object"?(Object.entries(r).forEach(function(o){var s=w(o,2),c=s[0],a=s[1];i.register(b(c),a)}),this):(this.components[b(r)]=this.validate(n),this)}},{key:"remove",value:function(r){return delete this.components[b(r)],this}},{key:"reset",value:function(){return this.components={},this}}]),e}();function X(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return m(F,t)}const O=X();var J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"activity-indicator",class:e.classes,style:e.style},[r("div",{staticClass:"activity-indicator-content"},[r(e.component,{tag:"component",staticClass:"mx-auto"}),e.label?r("div",{staticClass:"activity-indicator-label"},[e._v(" "+e._s(e.label)+" ")]):e._e()],1)])},K=[],ve="";function R(e,t,r,n,i,o,s,c){var a=typeof e=="function"?e.options:e;t&&(a.render=t,a.staticRenderFns=r,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId="data-v-"+o);var u;if(s?(u=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(l=__VUE_SSR_CONTEXT__),i&&i.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(s)},a._ssrRegister=u):i&&(u=c?function(){i.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(a.functional){a._injectStyles=u;var d=a.render;a.render=function(pe,I){return u.call(I),d(pe,I)}}else{var f=a.beforeCreate;a.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:a}}function p(e,t="px"){return e!=null&&e!==!1&&isFinite(e)?`${e}${t}`:e}const Q={name:"ActivityIndicator",props:{absolute:Boolean,center:Boolean,label:String,size:{type:String,default:"md"},registry:{type:F,default(){return O}},type:{type:String,required:!0},height:[String,Number],maxHeight:[String,Number],minHeight:[String,Number],width:[String,Number],maxWidth:[String,Number],minWidth:[String,Number]},computed:{classes(){return{"activity-indicator-center":this.center,"activity-indicator-absolute":this.absolute,[this.size&&`activity-indicator-${this.size}`]:!!this.size}},style(){return{width:p(this.width),maxWidth:p(this.maxWidth),minWidth:p(this.minWidth),height:p(this.height),maxHeight:p(this.maxHeight),minHeight:p(this.minHeight)}},component(){return()=>{const e=O.get(this.type);return e instanceof Promise?e:typeof e=="function"?e():Promise.resolve(e)}}}},T={};var Y=R(Q,J,K,!1,ee,null,null,null);function ee(e){for(let t in T)this[t]=T[t]}var te=function(){return Y.exports}(),ye="",me="",ge="",be="",Ce="",Se="",xe="",$e="",we="",Ae="",Ee="",Fe="",Oe="",Re="",re={props:{dropShadow:[Boolean,String],dropShadowableClassPrefix:{type:String,default:"drop-shadow"},shadow:[Boolean,String],shadowableClassPrefix:{type:String,default:"shadow"}},computed:{shadowableClass(){const e=this.dropShadow===!0?"":this.dropShadow&&`-${this.dropShadow}`,t=this.shadow===!0?"":this.shadow&&`-${this.shadow}`;return{[`${this.dropShadowableClassPrefix}${e}`]:!!this.dropShadow,[`${this.shadowableClassPrefix}${t}`]:!!this.shadow}}}};/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */var C=function(){return C=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},C.apply(this,arguments)};function ne(e){return e.toLowerCase()}var ie=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],ae=/[^A-Z0-9]+/gi;function se(e,t){t===void 0&&(t={});for(var r=t.splitRegexp,n=r===void 0?ie:r,i=t.stripRegexp,o=i===void 0?ae:i,s=t.transform,c=s===void 0?ne:s,a=t.delimiter,u=a===void 0?" ":a,d=P(P(e,n,"$1\0$2"),o,"\0"),f=0,l=d.length;d.charAt(f)==="\0";)f++;for(;d.charAt(l-1)==="\0";)l--;return d.slice(f,l).split("\0").map(c).join(u)}function P(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce(function(n,i){return n.replace(i,r)},e)}function oe(e,t){return t===void 0&&(t={}),se(e,C({delimiter:"."},t))}function j(e,t){return t===void 0&&(t={}),oe(e,C({delimiter:"-"},t))}const y={};function v(...e){if(!e.length)return y;const[t,r]=e;return typeof t=="string"?typeof y[t]!="undefined"?y[t]:r:Array.isArray(t)?t.reduce((n,i)=>Object.assign(n,{[i]:y[i]}),{}):Object.assign(y,...e)}function x(e,t,r="-"){const n=t.toString().replace(new RegExp(`^${e}${r}?`),"");return[j(n),e].filter(i=>!!i).join(r)}function k(e){return!Array.isArray(e)&&typeof e=="object"}var le={directives:{bindEvents:{bind(e,t,r){if(e.addEventListener("focus",()=>{r.context.hasFocus=!0}),e.addEventListener("blur",()=>{r.context.hasFocus=!1}),e.addEventListener(e.tagName==="SELECT"?"change":"input",n=>{r.context.isEmpty=!e.value,r.context.currentValue=e.value}),r.context.hasChanged=!!e.value,r.context.bindEvents.forEach(n=>{e.addEventListener(n,i=>{r.context.$emit(n,i)})}),e.tagName==="SELECT"){const n=e.querySelector('[value=""]');n&&n.value===e.value&&(r.context.defaultEmpty=!0)}}}},mixins:[re],inheritAttrs:!1,props:{activity:{type:Boolean,default:!1},animated:{type:Boolean,default:()=>v("animated",!1)},bindEvents:{type:Array,default(){return["focus","blur","change","click","keypress","keyup","keydown","progress","paste"]}},componentName:{type:String,default(){return this.$options.name}},defaultControlClass:{type:String,default:()=>v("defaultControlClass","form-control")},defaultValue:{default:()=>v("defaultValue",null)},error:[String,Array,Boolean],errors:{type:[Array,Object,Boolean],default(){return{}}},feedback:[String,Array],group:{type:Boolean,default:()=>v("group",!0)},helpText:[Number,String],hideLabel:Boolean,indicator:{type:String,default:()=>v("indicator","spinner")},indicatorSize:String,inline:Boolean,invalid:Boolean,label:[Number,String],labelClass:{type:[Object,String],default:()=>v("labelClass","form-label")},pill:Boolean,plaintext:Boolean,size:String,spacing:String,valid:Boolean,value:{default:null}},data(){return{currentValue:this.value||this.defaultValue,defaultEmpty:!1,hasChanged:!1,hasFocus:!1,isEmpty:!(this.value||this.defaultValue)}},computed:{id(){return this.$attrs.id||this.$attrs.name},controlAttributes(){return Object.keys(this.$attrs).concat([["id",this.id],["class",this.controlClasses]]).reduce((e,t)=>(Array.isArray(t)?e[t[0]]=t[1]:e[t]=this[t]||this.$attrs[t],e),{})},controlClass(){return this.defaultControlClass},controlSizeClass(){return x(this.size,this.controlClass)},formGroupClasses(){return{[j(this.componentName)]:!!this.componentName,[this.size&&x(this.size,this.componentName)]:!!this.size,animated:this.animated,"default-empty":this.defaultEmpty,"form-group":this.group,[this.size&&x(this.size,"form-group")]:!!this.size,"has-activity":this.activity,"has-changed":this.hasChanged,"has-focus":this.hasFocus,"has-icon":!!this.$slots.icon,"is-empty":this.isEmpty,"is-invalid":!!(this.invalid||this.invalidFeedback),"is-valid":!!(this.valid||this.validFeedback)}},controlClasses(){return Object.assign({[this.controlClass]:!!this.controlClass,[this.controlSizeClass]:!!this.controlSizeClass,"form-control-icon":!!this.$slots.icon,"is-valid":!!(this.valid||this.validFeedback),"is-invalid":!!(this.invalid||this.invalidFeedback),[this.pillClasses]:this.pill,[this.plaintextClass]:this.plaintext,[this.spacing]:!!this.spacing},this.shadowableClass)},hasDefaultSlot(){return!!this.$slots.default},invalidFeedback(){if(this.error==="")return null;if(this.error)return this.error;const e=this.getFieldErrors();return Array.isArray(e)?e.filter(t=>t&&typeof t=="string").join("<br>"):e},pillClasses(){return"rounded rounded-pill"},plaintextClass(){return"form-control-plaintext"},validFeedback(){return Array.isArray(this.feedback)?this.feedback.join("<br>"):this.feedback}},watch:{hasFocus(){this.shouldChangeOnFocus()&&(this.hasChanged=!0)},value(e){this.currentValue=e},currentValue(){this.hasChanged=!0},defaultEmpty(){this.hasChanged=!0}},mounted(){this.value===null&&this.defaultValue!==null&&this.$emit("input",this.defaultValue)},methods:{blur(){this.getInputField()&&this.getInputField().blur()},focus(){this.getInputField()&&this.getInputField().focus()},getInputField(){return this.$el.querySelector(".form-control, input, select, textarea")},getFieldErrors(){let e=this.error||this.errors;return this.errors&&k(this.errors)&&(e=this.errors[this.$attrs.name||this.$attrs.id]),!e||Array.isArray(e)||k(e)?e:[e]},shouldChangeOnFocus(){return!this.getInputField().readOnly},onInput(e){this.$emit("input",e.target.value),this.$emit("update:value",e.target.value)}}},ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.formGroupClasses},[e._t("label",function(){return[e.label?r("label",{ref:"label",class:e.labelClass,attrs:{for:e.id},domProps:{innerHTML:e._s(e.label)},on:{click:e.focus}}):e._e()]}),r("div",{staticClass:"form-group-inner"},[e._t("control",function(){var n;return[e.$slots.icon?r("div",{staticClass:"form-group-inner-icon",on:{click:e.focus}},[e._t("icon")],2):e._e(),r("select",e._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],ref:"field",domProps:{value:e.currentValue},on:{input:e.onInput}},"select",Object.assign((n={},n.disabled=e.$attrs.readonly,n),e.controlAttributes),!1),[e._t("default")],2)]}),e._t("activity",function(){return[r("transition",{attrs:{name:"select-field-fade"}},[e.activity?r("activity-indicator",{key:"activity",ref:"activity",attrs:{type:e.indicator,size:e.indicatorSize||e.size}}):e._e()],1)]})],2),e._t("feedback",function(){return[e.invalidFeedback?r("div",{staticClass:"invalid-feedback",attrs:{invalid:""},domProps:{innerHTML:e._s(e.invalidFeedback)}}):e.validFeedback?r("div",{staticClass:"valid-feedback",attrs:{valid:""},domProps:{innerHTML:e._s(e.validFeedback)}}):e._e()]}),e._t("help",function(){return[e.helpText?r("small",{ref:"help"},[e._v(" "+e._s(e.helpText)+" ")]):e._e()]})],2)},ce=[],Te="";const de={name:"SelectField",components:{ActivityIndicator:te},mixins:[le],props:{defaultControlClass:{type:String,default:"form-select"}},computed:{controlClass(){return this.plaintext?`${this.defaultControlClass}-plaintext`:this.defaultControlClass}},mounted(){const e=this.$el.querySelector("[selected]");e&&(this.currentValue=e.value,this.$emit("input",this.currentValue),this.$emit("update:value",this.currentValue))},methods:{shouldChangeOnFocus(){return!1}}},z={};var fe=R(de,ue,ce,!1,he,null,null,null);function he(e){for(let t in z)this[t]=z[t]}var _e=function(){return fe.exports}();_.SelectField=_e,Object.defineProperty(_,"__esModule",{value:!0}),_[Symbol.toStringTag]="Module"});
