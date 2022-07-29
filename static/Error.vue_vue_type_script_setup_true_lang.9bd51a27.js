import{d as C}from"./main.a64bc0d4.js";import{y as D,o as F,B as L,E as m,G as x}from"./_plugin-vue_export-helper.1c13e0b0.js";const Y="/static/404.1759fece.svg",H="/static/500.8fda557c.svg",I="/static/403.af24f6bf.svg";/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function $(t){return Object.prototype.toString.call(t)==="[object Object]"}function M(t){var o,r;return $(t)===!1?!1:(o=t.constructor,o===void 0?!0:(r=o.prototype,!($(r)===!1||r.hasOwnProperty("isPrototypeOf")===!1)))}function O(){return O=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},O.apply(this,arguments)}function k(t,o){if(t==null)return{};var r,e,n={},i=Object.keys(t);for(e=0;e<i.length;e++)o.indexOf(r=i[e])>=0||(n[r]=t[r]);return n}const J={silent:!1,logLevel:"warn"},R=["validator"],S=Object.prototype,q=S.toString,z=S.hasOwnProperty,A=/^\s*function (\w+)/;function P(t){var o;const r=(o=t==null?void 0:t.type)!==null&&o!==void 0?o:t;if(r){const e=r.toString().match(A);return e?e[1]:""}return""}const y=M,G=t=>t;let c=G;const h=(t,o)=>z.call(t,o),K=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t},g=Array.isArray||function(t){return q.call(t)==="[object Array]"},b=t=>q.call(t)==="[object Function]",_=t=>y(t)&&h(t,"_vueTypes_name"),N=t=>y(t)&&(h(t,"type")||["_vueTypes_name","validator","default","required"].some(o=>h(t,o)));function w(t,o){return Object.defineProperty(t.bind(o),"__original",{value:t})}function v(t,o,r=!1){let e,n=!0,i="";e=y(t)?t:{type:t};const a=_(e)?e._vueTypes_name+" - ":"";if(N(e)&&e.type!==null){if(e.type===void 0||e.type===!0||!e.required&&o===void 0)return n;g(e.type)?(n=e.type.some(s=>v(s,o,!0)===!0),i=e.type.map(s=>P(s)).join(" or ")):(i=P(e),n=i==="Array"?g(o):i==="Object"?y(o):i==="String"||i==="Number"||i==="Boolean"||i==="Function"?function(s){if(s==null)return"";const u=s.constructor.toString().match(A);return u?u[1]:""}(o)===i:o instanceof e.type)}if(!n){const s=`${a}value "${o}" should be of type "${i}"`;return r===!1?(c(s),!1):s}if(h(e,"validator")&&b(e.validator)){const s=c,u=[];if(c=l=>{u.push(l)},n=e.validator(o),c=s,!n){const l=(u.length>1?"* ":"")+u.join(`
* `);return u.length=0,r===!1?(c(l),n):l}}return n}function d(t,o){const r=Object.defineProperties(o,{_vueTypes_name:{value:t,writable:!0},isRequired:{get(){return this.required=!0,this}},def:{value(n){return n===void 0?(h(this,"default")&&delete this.default,this):b(n)||v(this,n,!0)===!0?(this.default=g(n)?()=>[...n]:y(n)?()=>Object.assign({},n):n,this):(c(`${this._vueTypes_name} - invalid default value: "${n}"`),this)}}}),{validator:e}=r;return b(e)&&(r.validator=w(e,r)),r}function p(t,o){const r=d(t,o);return Object.defineProperty(r,"validate",{value(e){return b(this.validator)&&c(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`),this.validator=w(e,this),this}})}function E(t,o,r){const e=function(u){const l={};return Object.getOwnPropertyNames(u).forEach(f=>{l[f]=Object.getOwnPropertyDescriptor(u,f)}),Object.defineProperties({},l)}(o);if(e._vueTypes_name=t,!y(r))return e;const{validator:n}=r,i=k(r,R);if(b(n)){let{validator:u}=e;u&&(u=(s=(a=u).__original)!==null&&s!==void 0?s:a),e.validator=w(u?function(l){return u.call(this,l)&&n.call(this,l)}:n,e)}var a,s;return Object.assign(e,i)}function T(t){return t.replace(/^(?!\s*$)/gm,"  ")}const Q=()=>p("any",{}),U=()=>p("function",{type:Function}),W=()=>p("boolean",{type:Boolean}),X=()=>p("string",{type:String}),Z=()=>p("number",{type:Number}),tt=()=>p("array",{type:Array}),et=()=>p("object",{type:Object}),rt=()=>d("integer",{type:Number,validator:t=>K(t)}),nt=()=>d("symbol",{validator:t=>typeof t=="symbol"});function ot(t,o="custom validation failed"){if(typeof t!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return d(t.name||"<<anonymous function>>",{type:null,validator(r){const e=t(r);return e||c(`${this._vueTypes_name} - ${o}`),e}})}function it(t){if(!g(t))throw new TypeError("[VueTypes error]: You must provide an array as argument.");const o=`oneOf - value should be one of "${t.join('", "')}".`,r=t.reduce((e,n)=>{if(n!=null){const i=n.constructor;e.indexOf(i)===-1&&e.push(i)}return e},[]);return d("oneOf",{type:r.length>0?r:void 0,validator(e){const n=t.indexOf(e)!==-1;return n||c(o),n}})}function st(t){if(!g(t))throw new TypeError("[VueTypes error]: You must provide an array as argument");let o=!1,r=[];for(let n=0;n<t.length;n+=1){const i=t[n];if(N(i)){if(_(i)&&i._vueTypes_name==="oneOf"&&i.type){r=r.concat(i.type);continue}if(b(i.validator)&&(o=!0),i.type===!0||!i.type){c('oneOfType - invalid usage of "true" or "null" as types.');continue}r=r.concat(i.type)}else r.push(i)}r=r.filter((n,i)=>r.indexOf(n)===i);const e=r.length>0?r:null;return d("oneOfType",o?{type:e,validator(n){const i=[],a=t.some(s=>{const u=v(_(s)&&s._vueTypes_name==="oneOf"?s.type||null:s,n,!0);return typeof u=="string"&&i.push(u),u===!0});return a||c(`oneOfType - provided value does not match any of the ${i.length} passed-in validators:
${T(i.join(`
`))}`),a}}:{type:e})}function at(t){return d("arrayOf",{type:Array,validator(o){let r="";const e=o.every(n=>(r=v(t,n,!0),r===!0));return e||c(`arrayOf - value validation error:
${T(r)}`),e}})}function ut(t){return d("instanceOf",{type:t})}function lt(t){return d("objectOf",{type:Object,validator(o){let r="";const e=Object.keys(o).every(n=>(r=v(t,o[n],!0),r===!0));return e||c(`objectOf - value validation error:
${T(r)}`),e}})}function ct(t){const o=Object.keys(t),r=o.filter(n=>{var i;return!((i=t[n])===null||i===void 0||!i.required)}),e=d("shape",{type:Object,validator(n){if(!y(n))return!1;const i=Object.keys(n);if(r.length>0&&r.some(a=>i.indexOf(a)===-1)){const a=r.filter(s=>i.indexOf(s)===-1);return c(a.length===1?`shape - required property "${a[0]}" is not defined.`:`shape - required properties "${a.join('", "')}" are not defined.`),!1}return i.every(a=>{if(o.indexOf(a)===-1)return this._vueTypes_isLoose===!0||(c(`shape - shape definition does not include a "${a}" property. Allowed keys: "${o.join('", "')}".`),!1);const s=v(t[a],n[a],!0);return typeof s=="string"&&c(`shape - "${a}" property validation error:
 ${T(s)}`),s===!0})}});return Object.defineProperty(e,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(e,"loose",{get(){return this._vueTypes_isLoose=!0,this}}),e}const ft=["name","validate","getter"],dt=(()=>{var t,o;return o=t=class{static get any(){return Q()}static get func(){return U().def(this.defaults.func)}static get bool(){return W().def(this.defaults.bool)}static get string(){return X().def(this.defaults.string)}static get number(){return Z().def(this.defaults.number)}static get array(){return tt().def(this.defaults.array)}static get object(){return et().def(this.defaults.object)}static get integer(){return rt().def(this.defaults.integer)}static get symbol(){return nt()}static get nullable(){return{type:null}}static extend(r){if(g(r))return r.forEach(l=>this.extend(l)),this;const{name:e,validate:n=!1,getter:i=!1}=r,a=k(r,ft);if(h(this,e))throw new TypeError(`[VueTypes error]: Type "${e}" already defined`);const{type:s}=a;if(_(s))return delete a.type,Object.defineProperty(this,e,i?{get:()=>E(e,s,a)}:{value(...l){const f=E(e,s,a);return f.validator&&(f.validator=f.validator.bind(f,...l)),f}});let u;return u=i?{get(){const l=Object.assign({},a);return n?p(e,l):d(e,l)},enumerable:!0}:{value(...l){const f=Object.assign({},a);let j;return j=n?p(e,f):d(e,f),f.validator&&(j.validator=f.validator.bind(j,...l)),j},enumerable:!0},Object.defineProperty(this,e,u)}},t.defaults={},t.sensibleDefaults=void 0,t.config=J,t.custom=ot,t.oneOf=it,t.instanceOf=ut,t.oneOfType=st,t.arrayOf=at,t.objectOf=lt,t.shape=ct,t.utils={validate:(r,e)=>v(e,r,!0)===!0,toType:(r,e,n=!1)=>n?p(r,e):d(r,e)},o})();function B(t={func:()=>{},bool:!0,string:"",number:0,array:()=>[],object:()=>({}),integer:0}){var o,r;return r=o=class extends dt{static get sensibleDefaults(){return O({},this.defaults)}static set sensibleDefaults(e){this.defaults=e!==!1?O({},e!==!0?e:t):{}}},o.defaults=O({},t),r}class Ot extends B(){}const V=B({func:void 0,bool:void 0,string:void 0,number:void 0,object:void 0,integer:void 0});V.extend([{name:"style",getter:!0,type:[String,Object],default:void 0}]);const pt={class:"flex justify-center"},yt={class:"text-center"},vt=["src"],ht={class:"text-14px"},gt={class:"mt-20px"},jt=D({__name:"Error",props:{type:V.string.validate(t=>["404","500","403"].includes(t)).def("404")},emits:["errorClick"],setup(t,{emit:o}){const r=t,{t:e}=C(),n={404:{url:Y,message:e("error.pageError"),buttonText:e("error.returnToHome")},500:{url:H,message:e("error.networkError"),buttonText:e("error.returnToHome")},403:{url:I,message:e("error.noPermission"),buttonText:e("error.returnToHome")}},i=()=>{o("errorClick",r.type)};return(a,s)=>(F(),L("div",pt,[m("div",yt,[m("img",{width:"350",src:n[t.type].url,alt:""},null,8,vt),m("div",ht,x(n[t.type].message),1),m("div",gt,[m("button",{onClick:i},x(n[t.type].buttonText),1)])])]))}});export{jt as _};
