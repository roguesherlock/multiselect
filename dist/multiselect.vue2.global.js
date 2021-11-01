var VueformMultiselect=function(e){"use strict";function u(e){return-1!==[null,void 0,!1].indexOf(e)}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,u,t){return u in e?Object.defineProperty(e,u,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[u]=t,e}function n(e,u){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);u&&(a=a.filter((function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var u=1;u<arguments.length;u++){var t=null!=arguments[u]?arguments[u]:{};u%2?n(Object(t),!0).forEach((function(u){a(e,u,t[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(u){Object.defineProperty(e,u,Object.getOwnPropertyDescriptor(t,u))}))}return e}function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,u){if(!e)return;if("string"==typeof e)return i(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,u)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,u){(null==u||u>e.length)&&(u=e.length);for(var t=0,a=new Array(u);t<u;t++)a[t]=e[t];return a}function o(e){var u=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return u?String(e).toLowerCase().trim():String(e).normalize("NFD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50]|\uD804[\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g,"").toLowerCase().trim()}function s(n,r,i){var s=e.toRefs(n),c=s.options,v=s.mode,p=s.trackBy,d=s.limit,f=s.hideSelected,g=s.createTag,m=s.label,h=s.appendNewTag,D=s.multipleLabel,b=s.object,y=s.loading,_=s.delay,F=s.resolveOnLoad,C=s.minChars,S=s.filterResults,O=s.clearOnSearch,A=s.clearOnSelect,E=s.valueProp,B=s.canDeselect,P=s.max,L=s.strict,w=s.closeOnSelect,x=s.groups,k=(s.groupLabel,s.groupOptions),q=s.groupHideEmpty,T=s.groupSelect,I=i.iv,R=i.ev,j=i.search,V=i.clearSearch,N=i.update,M=i.pointer,G=i.clearPointer,H=i.blur,$=i.deactivate,W=e.ref([]),U=e.ref([]),K=e.ref(!1),X=e.computed((function(){if(x.value){var e=U.value||[],u=[];return e.forEach((function(e){ye(e[k.value]).forEach((function(t){u.push(Object.assign({},t,e.disabled?{disabled:!0}:{}))}))})),u}var t=ye(U.value||[]);return W.value.length&&(t=t.concat(W.value)),t})),z=e.computed((function(){return x.value?De((U.value||[]).map((function(e){var u,t=ye(e[k.value]);return l(l({},e),{},(a(u={group:!0},k.value,be(t,!1).map((function(u){return Object.assign({},u,e.disabled?{disabled:!0}:{})}))),a(u,"__VISIBLE__",be(t).map((function(u){return Object.assign({},u,e.disabled?{disabled:!0}:{})}))),u))}))):[]})),J=e.computed((function(){if(ve())return[];var e=X.value;return ue.value.length&&(e=ue.value.concat(e)),e=be(e),d.value>0&&(e=e.slice(0,d.value)),e})),Q=e.computed((function(){switch(v.value){case"single":return!u(I.value[E.value]);case"multiple":case"tags":return!u(I.value)&&I.value.length>0}})),Y=e.computed((function(){return void 0!==D&&void 0!==D.value?D.value(I.value):I.value&&I.value.length>1?"".concat(I.value.length," options selected"):"1 option selected"})),Z=e.computed((function(){return!X.value.length&&!K.value&&!ue.value.length})),ee=e.computed((function(){return X.value.length>0&&0==J.value.length&&(j.value&&x.value||!x.value)})),ue=e.computed((function(){var e;return!1!==g.value&&j.value?-1!==ge(j.value)?[]:[(e={},a(e,E.value,j.value),a(e,m.value,j.value),a(e,p.value,j.value),a(e,"newTag",!0),a(e,"created",!1),e)]:[]})),te=e.computed((function(){switch(v.value){case"single":return null;case"multiple":case"tags":return[]}})),ae=e.computed((function(){return y.value||K.value})),ne=function(e){switch("object"!==t(e)&&(e=fe(e)),v.value){case"single":N(e);break;case"multiple":case"tags":N(I.value.concat(e))}r.emit("select",re(e),e)},le=function(e){switch("object"!==t(e)&&(e=fe(e)),v.value){case"single":oe();break;case"tags":case"multiple":N(Array.isArray(e)?I.value.filter((function(u){return-1===e.map((function(e){return e[E.value]})).indexOf(u[E.value])})):I.value.filter((function(u){return u[E.value]!=e[E.value]})))}r.emit("deselect",re(e),e)},re=function(e){return b.value?e:e[E.value]},ie=function(e){le(e)},oe=function(){r.emit("clear"),N(te.value)},se=function(e){if(void 0!==e.group)return"single"!==v.value&&(de(e[k.value])&&e[k.value].length);switch(v.value){case"single":return!u(I.value)&&I.value[E.value]==e[E.value];case"tags":case"multiple":return!u(I.value)&&-1!==I.value.map((function(e){return e[E.value]})).indexOf(e[E.value])}},ce=function(e){return!0===e.disabled},ve=function(){return!(void 0===P||-1===P.value||!Q.value&&P.value>0)&&I.value.length>=P.value},pe=function(e){return void 0===e.find((function(e){return!se(e)&&!e.disabled}))},de=function(e){return void 0===e.find((function(e){return!se(e)}))},fe=function(e){return X.value[X.value.map((function(e){return String(e[E.value])})).indexOf(String(e))]},ge=function(e){return X.value.map((function(e){return e[p.value]})).indexOf(e)},me=function(e){return-1!==["tags","multiple"].indexOf(v.value)&&f.value&&se(e)},he=function(e){e.created=!0,W.value.push(e)},De=function(e){return q.value?e.filter((function(e){return j.value?e.__VISIBLE__.length:e[k.value].length})):e.filter((function(e){return!j.value||e.__VISIBLE__.length}))},be=function(e){var u=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=e;return j.value&&S.value&&(t=t.filter((function(e){return-1!==o(e[p.value],L.value).indexOf(o(j.value,L.value))}))),f.value&&u&&(t=t.filter((function(e){return!me(e)}))),t},ye=function(e){var u,n=e;return u=n,"[object Object]"===Object.prototype.toString.call(u)&&(n=Object.keys(n).map((function(e){var u,t=n[e];return a(u={},E.value,e),a(u,p.value,t),a(u,m.value,t),u}))),n=n.map((function(e){var u;return"object"===t(e)?e:(a(u={},E.value,e),a(u,p.value,e),a(u,m.value,e),u)}))},_e=function(){u(R.value)||(I.value=Ce(R.value))},Fe=function(e){K.value=!0,c.value(j.value).then((function(u){U.value=u,"function"==typeof e&&e(u),K.value=!1}))},Ce=function(e){return u(e)?"single"===v.value?{}:[]:b.value?e:"single"===v.value?fe(e)||{}:e.filter((function(e){return!!fe(e)})).map((function(e){return fe(e)}))};if("single"!==v.value&&!u(R.value)&&!Array.isArray(R.value))throw new Error('v-model must be an array when using "'.concat(v.value,'" mode'));return c&&"function"==typeof c.value?F.value?Fe(_e):1==b.value&&_e():(U.value=c.value,_e()),_.value>-1&&e.watch(j,(function(e){e.length<C.value||(K.value=!0,O.value&&(U.value=[]),setTimeout((function(){e==j.value&&c.value(j.value).then((function(u){e==j.value&&(U.value=u,M.value=J.value.filter((function(e){return!0!==e.disabled}))[0]||null,K.value=!1)}))}),_.value))}),{flush:"sync"}),e.watch(R,(function(e){var t,a,n;if(u(e))I.value=Ce(e);else switch(v.value){case"single":(b.value?e[E.value]!=I.value[E.value]:e!=I.value[E.value])&&(I.value=Ce(e));break;case"multiple":case"tags":t=b.value?e.map((function(e){return e[E.value]})):e,a=I.value.map((function(e){return e[E.value]})),n=a.slice().sort(),t.length===a.length&&t.slice().sort().every((function(e,u){return e===n[u]}))||(I.value=Ce(e))}}),{deep:!0}),"function"!=typeof n.options&&e.watch(c,(function(e,u){U.value=n.options,Object.keys(I.value).length||_e(),function(){if(Q.value)if("single"===v.value){var e=fe(I.value[E.value])[m.value];I.value[m.value]=e,b.value&&(R.value[m.value]=e)}else I.value.forEach((function(e,u){var t=fe(I.value[u][E.value])[m.value];I.value[u][m.value]=t,b.value&&(R.value[u][m.value]=t)}))}()})),{fo:J,filteredOptions:J,hasSelected:Q,multipleLabelText:Y,eo:X,extendedOptions:X,fg:z,filteredGroups:z,noOptions:Z,noResults:ee,resolving:K,busy:ae,select:ne,deselect:le,remove:ie,clear:oe,isSelected:se,isDisabled:ce,isMax:ve,getOption:fe,handleOptionClick:function(e){if(!ce(e)){switch(v.value){case"single":if(se(e))return void(B.value&&le(e));H(),ne(e);break;case"multiple":if(se(e))return void le(e);if(ve())return;ne(e),A.value&&V(),f.value&&G(),w.value&&H();break;case"tags":if(se(e))return void le(e);if(ve())return;void 0===fe(e[E.value])&&g.value&&(r.emit("tag",e[E.value]),h.value&&he(e),V()),A.value&&V(),ne(e),f.value&&G(),w.value&&H()}w.value&&$()}},handleGroupClick:function(e){if(!ce(e)&&"single"!==v.value&&T.value){switch(v.value){case"multiple":case"tags":pe(e[k.value])?le(e[k.value]):ne(e[k.value].filter((function(e){return-1===I.value.map((function(e){return e[E.value]})).indexOf(e[E.value])})).filter((function(e){return!e.disabled})).filter((function(e,u){return I.value.length+1+u<=P.value||-1===P.value})))}w.value&&$()}},handleTagRemove:function(e,u){0===u.button?ie(e):u.preventDefault()},refreshOptions:function(e){Fe(e)},resolveOptions:Fe}}function c(e,u,t,a,n,l,r,i,o,s){"boolean"!=typeof r&&(o=i,i=r,r=!1);var c,v="function"==typeof t?t.options:t;if(e&&e.render&&(v.render=e.render,v.staticRenderFns=e.staticRenderFns,v._compiled=!0,n&&(v.functional=!0)),a&&(v._scopeId=a),l?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),u&&u.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(l)},v._ssrRegister=c):u&&(c=r?function(e){u.call(this,s(e,this.$root.$options.shadowRoot))}:function(e){u.call(this,i(e))}),c)if(v.functional){var p=v.render;v.render=function(e,u){return c.call(u),p(e,u)}}else{var d=v.beforeCreate;v.beforeCreate=d?[].concat(d,c):[c]}return t}const v={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change","clear"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},addTagOn:{type:Array,required:!1,default:()=>["enter"]},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},maxErrorMessage:{type:String,required:!1,default:null}},setup(t,a){const n=function(u,t){var a=e.toRefs(u),n=a.value,l=a.modelValue,r=a.mode,i=a.valueProp,o=e.ref("single"!==r.value?[]:{}),s=void 0!==t.expose?l:n,c=e.computed((function(){return"single"===r.value?o.value[i.value]:o.value.map((function(e){return e[i.value]}))})),v=e.computed((function(){return"single"!==r.value?o.value.map((function(e){return e[i.value]})).join(","):o.value[i.value]}));return{iv:o,internalValue:o,ev:s,externalValue:s,textValue:v,plainValue:c}}(t,a),i=function(u,t,a){var n=e.toRefs(u),l=n.groupSelect,r=n.mode,i=n.groups,o=e.ref(null),s=function(e){void 0===e||null!==e&&e.disabled||i.value&&e&&e.group&&("single"===r.value||!l.value)||(o.value=e)};return{pointer:o,setPointer:s,clearPointer:function(){s(null)}}}(t),o=function(u,t,a){var n=e.toRefs(u).disabled,l=e.ref(!1);return{isOpen:l,open:function(){l.value||n.value||(l.value=!0,t.emit("open"))},close:function(){l.value&&(l.value=!1,t.emit("close"))}}}(t,a),c=function(u,t,a){var n=e.ref(null),l=e.ref(null);return e.watch(n,(function(e){t.emit("search-change",e)})),{search:n,input:l,clearSearch:function(){n.value=""},handleSearchInput:function(e){n.value=e.target.value},handlePaste:function(e){t.emit("paste",e)}}}(0,a),v=function(t,a,n){var l=e.toRefs(t),r=l.object,i=l.valueProp,o=l.mode,s=n.iv,c=function(e){return r.value||u(e)?e:Array.isArray(e)?e.map((function(e){return e[i.value]})):e[i.value]},v=function(e){return u(e)?"single"===o.value?{}:[]:e};return{update:function(e){s.value=v(e);var u=c(e);a.emit("change",u),a.emit("input",u),a.emit("update:modelValue",u)}}}(t,a,{iv:n.iv}),p=function(u,t,a){var n=e.toRefs(u),l=n.searchable,r=n.disabled,i=a.input,o=a.open,s=a.close,c=a.clearSearch,v=e.ref(null),p=e.ref(!1),d=e.computed((function(){return l.value||r.value?-1:0})),f=function(){l.value&&i.value.blur(),v.value.blur()},g=function(){p.value=!1,setTimeout((function(){p.value||(s(),c())}),1)};return{multiselect:v,tabindex:d,isActive:p,blur:f,handleFocus:function(){l.value&&!r.value&&i.value.focus()},activate:function(){r.value||(p.value=!0,o())},deactivate:g,handleCaretClick:function(){g(),f()}}}(t,0,{input:c.input,open:o.open,close:o.close,clearSearch:c.clearSearch}),d=s(t,a,{ev:n.ev,iv:n.iv,search:c.search,clearSearch:c.clearSearch,update:v.update,pointer:i.pointer,clearPointer:i.clearPointer,blur:p.blur,deactivate:p.deactivate}),f=function(u,t,a){var n=e.toRefs(u),l=n.valueProp,i=n.showOptions,o=n.searchable,s=n.groupLabel,c=n.groups,v=n.mode,p=n.groupSelect,d=a.fo,f=a.fg,g=a.handleOptionClick,m=a.handleGroupClick,h=a.search,D=a.pointer,b=a.setPointer,y=a.clearPointer,_=a.multiselect,F=e.computed((function(){return d.value.filter((function(e){return!e.disabled}))})),C=e.computed((function(){return f.value.filter((function(e){return!e.disabled}))})),S=e.computed((function(){return"single"!==v.value&&p.value})),O=e.computed((function(){return D.value&&D.value.group})),A=e.computed((function(){return I(D.value)})),E=e.computed((function(){var e=O.value?D.value:I(D.value),u=C.value.map((function(e){return e[s.value]})).indexOf(e[s.value]),t=C.value[u-1];return void 0===t&&(t=P.value),t})),B=e.computed((function(){var e=C.value.map((function(e){return e.label})).indexOf(O.value?D.value[s.value]:I(D.value)[s.value])+1;return C.value.length<=e&&(e=0),C.value[e]})),P=e.computed((function(){return r(C.value).slice(-1)[0]})),L=e.computed((function(){return D.value.__VISIBLE__.filter((function(e){return!e.disabled}))[0]})),w=e.computed((function(){var e=A.value.__VISIBLE__.filter((function(e){return!e.disabled}));return e[e.map((function(e){return e[l.value]})).indexOf(D.value[l.value])-1]})),x=e.computed((function(){var e=I(D.value).__VISIBLE__.filter((function(e){return!e.disabled}));return e[e.map((function(e){return e[l.value]})).indexOf(D.value[l.value])+1]})),k=e.computed((function(){return r(E.value.__VISIBLE__.filter((function(e){return!e.disabled}))).slice(-1)[0]})),q=e.computed((function(){return r(P.value.__VISIBLE__.filter((function(e){return!e.disabled}))).slice(-1)[0]})),T=function(){b(F.value[0]||null)},I=function(e){return C.value.find((function(u){return-1!==u.__VISIBLE__.map((function(e){return e[l.value]})).indexOf(e[l.value])}))},R=function(){var e=_.value.querySelector("[data-pointed]");if(e){var u=e.parentElement.parentElement;c.value&&(u=O.value?e.parentElement.parentElement.parentElement:e.parentElement.parentElement.parentElement.parentElement),e.offsetTop+e.offsetHeight>u.clientHeight+u.scrollTop&&(u.scrollTop=e.offsetTop+e.offsetHeight-u.clientHeight),e.offsetTop<u.scrollTop&&(u.scrollTop=e.offsetTop)}};return e.watch(h,(function(e){o.value&&(e.length&&i.value?T():y())})),{pointer:D,canPointGroups:S,isPointed:function(e){return!(!D.value||!(!e.group&&D.value[l.value]==e[l.value]||void 0!==e.group&&D.value[s.value]==e[s.value]))||void 0},setPointerFirst:T,selectPointer:function(){D.value&&!0!==D.value.disabled&&(O.value?m(D.value):g(D.value))},forwardPointer:function(){if(null===D.value)b((c.value&&S.value?C.value[0]:F.value[0])||null);else if(c.value&&S.value){var u=O.value?L.value:x.value;void 0===u&&(u=B.value),b(u||null)}else{var t=F.value.map((function(e){return e[l.value]})).indexOf(D.value[l.value])+1;F.value.length<=t&&(t=0),b(F.value[t]||null)}e.nextTick((function(){R()}))},backwardPointer:function(){if(null===D.value){var u=F.value[F.value.length-1];c.value&&S.value&&void 0===(u=q.value)&&(u=P.value),b(u||null)}else if(c.value&&S.value){var t=O.value?k.value:w.value;void 0===t&&(t=O.value?E.value:A.value),b(t||null)}else{var a=F.value.map((function(e){return e[l.value]})).indexOf(D.value[l.value])-1;a<0&&(a=F.value.length-1),b(F.value[a]||null)}e.nextTick((function(){R()}))}}}(t,0,{fo:d.fo,fg:d.fg,handleOptionClick:d.handleOptionClick,handleGroupClick:d.handleGroupClick,search:c.search,pointer:i.pointer,setPointer:i.setPointer,clearPointer:i.clearPointer,multiselect:p.multiselect}),g=function(u,t,a){var n=e.toRefs(u),l=n.mode,i=n.addTagOn,o=n.createTag,s=n.openDirection,c=n.searchable,v=n.showOptions,p=n.valueProp,d=n.groups,f=a.iv,g=a.update,m=a.search,h=a.setPointer,D=a.selectPointer,b=a.backwardPointer,y=a.forwardPointer,_=a.blur,F=a.fo,C=function(){"tags"===l.value&&!v.value&&o.value&&c.value&&!d.value&&h(F.value[F.value.map((function(e){return e[p.value]})).indexOf(m.value)])};return{handleKeydown:function(e){switch(e.keyCode){case 8:if("single"===l.value)return;if(c.value&&-1===[null,""].indexOf(m.value))return;if(0===f.value.length)return;g(r(f.value).slice(0,-1));break;case 13:if(e.preventDefault(),"tags"===l.value&&-1===i.value.indexOf("enter")&&o.value)return;C(),D();break;case 32:if(c.value&&"tags"!==l.value&&!o.value)return;if("tags"===l.value&&(-1===i.value.indexOf("space")&&o.value||!o.value))return;e.preventDefault(),C(),D();break;case 9:case 186:case 188:if("tags"!==l.value)return;if(-1===i.value.indexOf({9:"tab",186:";",188:","}[e.keyCode])||!o.value)return;C(),D(),e.preventDefault();break;case 27:_();break;case 38:if(e.preventDefault(),!v.value)return;"top"===s.value?y():b();break;case 40:if(e.preventDefault(),!v.value)return;"top"===s.value?b():y()}},preparePointer:C}}(t,0,{iv:n.iv,update:v.update,search:c.search,setPointer:i.setPointer,selectPointer:f.selectPointer,backwardPointer:f.backwardPointer,forwardPointer:f.forwardPointer,blur:p.blur,fo:d.fo}),m=function(u,t,a){var n=e.toRefs(u),r=n.disabled,i=n.openDirection,o=n.showOptions,s=a.isOpen,c=a.isPointed,v=a.isSelected,p=a.isDisabled,d=a.isActive,f=a.canPointGroups,g=a.resolving,m=a.fo,h=l({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",singleLabel:"multiselect-single-label",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagSearch:"multiselect-tag-search",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",maxError:"multiselect-max-error",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer"},n.classes.value),D=e.computed((function(){return!!(s.value&&o.value&&(!g.value||g.value&&m.value.length))}));return{classList:e.computed((function(){return{container:[h.container].concat(r.value?h.containerDisabled:[]).concat(D.value&&"top"===i.value?h.containerOpenTop:[]).concat(D.value&&"top"!==i.value?h.containerOpen:[]).concat(d.value?h.containerActive:[]),spacer:h.spacer,singleLabel:h.singleLabel,multipleLabel:h.multipleLabel,search:h.search,tags:h.tags,tag:[h.tag].concat(r.value?h.tagDisabled:[]),tagSearch:h.tagSearch,tagRemove:h.tagRemove,tagRemoveIcon:h.tagRemoveIcon,maxError:h.maxError,tagsSearchWrapper:h.tagsSearchWrapper,tagsSearch:h.tagsSearch,tagsSearchCopy:h.tagsSearchCopy,placeholder:h.placeholder,caret:[h.caret].concat(s.value?h.caretOpen:[]),clear:h.clear,clearIcon:h.clearIcon,spinner:h.spinner,dropdown:[h.dropdown].concat("top"===i.value?h.dropdownTop:[]).concat(s.value&&o.value&&D.value?[]:h.dropdownHidden),options:[h.options].concat("top"===i.value?h.optionsTop:[]),group:h.group,groupLabel:function(e){var u=[h.groupLabel];return c(e)?u.push(v(e)?h.groupLabelSelectedPointed:h.groupLabelPointed):v(e)&&f.value?u.push(p(e)?h.groupLabelSelectedDisabled:h.groupLabelSelected):p(e)&&u.push(h.groupLabelDisabled),f.value&&u.push(h.groupLabelPointable),u},groupOptions:h.groupOptions,option:function(e,u){var t=[h.option];return c(e)?t.push(v(e)?h.optionSelectedPointed:h.optionPointed):v(e)?t.push(p(e)?h.optionSelectedDisabled:h.optionSelected):(p(e)||u&&p(u))&&t.push(h.optionDisabled),t},noOptions:h.noOptions,noResults:h.noResults,fakeInput:h.fakeInput}})),showDropdown:D}}(t,0,{isOpen:o.isOpen,isPointed:f.isPointed,canPointGroups:f.canPointGroups,isSelected:d.isSelected,isDisabled:d.isDisabled,isActive:p.isActive,resolving:d.resolving,fo:d.fo});return{...n,...o,...p,...i,...v,...c,...d,...f,...g,...m}}};var p=function(){var e=this,u=e.$createElement,t=e._self._c||u;return t("div",{ref:"multiselect",class:e.classList.container,attrs:{tabindex:e.tabindex,id:e.id},on:{focusin:e.activate,focusout:e.deactivate,keydown:e.handleKeydown,focus:e.handleFocus}},["tags"!==e.mode&&e.searchable&&!e.disabled?[t("input",{ref:"input",class:e.classList.search,attrs:{type:e.inputType,modelValue:e.search,autocomplete:e.autocomplete},domProps:{value:e.search},on:{input:e.handleSearchInput,paste:function(u){return u.stopPropagation(),e.handlePaste(u)}}})]:e._e(),e._v(" "),"tags"==e.mode?[t("div",{class:e.classList.tags},[e._l(e.iv,(function(u,a,n){return e._t("tag",[t("span",{key:n,class:e.classList.tag},[e._v("\n          "+e._s(u[e.label])+"\n          "),e.disabled?e._e():t("span",{class:e.classList.tagRemove,on:{"!mousedown":function(t){return t.preventDefault(),t.stopPropagation(),e.handleTagRemove(u,t)}}},[t("span",{class:e.classList.tagRemoveIcon})])])],{option:u,handleTagRemove:e.handleTagRemove,disabled:e.disabled})})),e._v(" "),t("div",{class:e.classList.tagsSearchWrapper},[t("span",{class:e.classList.tagsSearchCopy},[e._v(e._s(e.search))]),e._v(" "),e.searchable&&!e.disabled?t("input",{ref:"input",class:e.classList.tagsSearch,attrs:{type:e.inputType,modelValue:e.search,autocomplete:e.autocomplete},domProps:{value:e.search},on:{input:e.handleSearchInput,paste:function(u){return u.stopPropagation(),e.handlePaste(u)}}}):e._e()])],2)]:e._e(),e._v(" "),"single"==e.mode&&e.hasSelected&&!e.search&&e.iv?[e._t("singlelabel",[t("div",{class:e.classList.singleLabel},[e._v("\n        "+e._s(e.iv[e.label])+"\n      ")])],{value:e.iv})]:e._e(),e._v(" "),"multiple"==e.mode&&e.hasSelected&&!e.search?[e._t("multiplelabel",[t("div",{class:e.classList.multipleLabel},[e._v("\n        "+e._s(e.multipleLabelText)+"\n      ")])],{values:e.iv})]:e._e(),e._v(" "),!e.placeholder||e.hasSelected||e.search?e._e():[e._t("placeholder",[t("div",{class:e.classList.placeholder},[e._v("\n        "+e._s(e.placeholder)+"\n      ")])])],e._v(" "),e.busy?e._t("spinner",[t("span",{class:e.classList.spinner})]):e._e(),e._v(" "),e.hasSelected&&!e.disabled&&e.canClear&&!e.busy?e._t("clear",[t("span",{class:e.classList.clear,on:{mousedown:e.clear}},[t("span",{class:e.classList.clearIcon})])],{clear:e.clear}):e._e(),e._v(" "),e.caret?e._t("caret",[t("span",{class:e.classList.caret,on:{click:e.handleCaretClick}})]):e._e(),e._v(" "),t("div",{class:e.classList.dropdown,attrs:{tabindex:"-1"}},[e._t("beforelist",null,{options:e.fo}),e._v(" "),t("ul",{class:e.classList.options},[e.groups?e._l(e.fg,(function(u,a,n){return t("li",{key:n,class:e.classList.group},[t("div",{class:e.classList.groupLabel(u),attrs:{"data-pointed":e.isPointed(u)},on:{mouseenter:function(t){return e.setPointer(u)},click:function(t){return e.handleGroupClick(u)}}},[e._t("grouplabel",[t("span",[e._v(e._s(u[e.groupLabel]))])],{group:u})],2),e._v(" "),t("ul",{class:e.classList.groupOptions},e._l(u.__VISIBLE__,(function(a,n,l){return t("li",{key:l,class:e.classList.option(a,u),attrs:{"data-pointed":e.isPointed(a)},on:{mouseenter:function(u){return e.setPointer(a)},click:function(u){return e.handleOptionClick(a)}}},[e._t("option",[t("span",[e._v(e._s(a[e.label]))])],{option:a,search:e.search})],2)})),0)])})):[e.isMax()?t("li",{class:e.classList.noResults},[t("span",{class:e.classList.maxError},[e._v(e._s(e.maxErrorMessage||"Can only add "+e.max+" tag(s) at most."))])]):e._l(e.fo,(function(u,a,n){return t("li",{key:n,class:e.classList.option(u),attrs:{"data-pointed":e.isPointed(u)},on:{mouseenter:function(t){return e.setPointer(u)},click:function(t){return e.handleOptionClick(u)}}},[e._t("option",[u.newTag&&!u.created?[t("span",[e._v("Create")]),e._v(" "),t("span",{class:e.classList.tagSearch},[e._v("\n                  "+e._s(u[e.label])+"\n                ")])]:t("span",[e._v(e._s(u[e.label]))])],{option:u,search:e.search,isMax:e.isMax})],2)}))]],2),e._v(" "),e.noOptions?e._t("nooptions",[t("div",{class:e.classList.noOptions,domProps:{innerHTML:e._s(e.noOptionsText)}})]):e._e(),e._v(" "),e.noResults?e._t("noresults",[t("div",{class:e.classList.noResults,domProps:{innerHTML:e._s(e.noResultsText)}})]):e._e(),e._v(" "),e._t("afterlist",null,{options:e.fo})],2),e._v(" "),e.required?t("input",{class:e.classList.fakeInput,attrs:{tabindex:"-1",required:""},domProps:{value:e.textValue}}):e._e(),e._v(" "),e.nativeSupport?["single"==e.mode?t("input",{attrs:{type:"hidden",name:e.name},domProps:{value:void 0!==e.plainValue?e.plainValue:""}}):e._l(e.plainValue,(function(u,a){return t("input",{key:a,attrs:{type:"hidden",name:e.name+"[]"},domProps:{value:u}})}))]:e._e(),e._v(" "),t("div",{class:e.classList.spacer})],2)};p._withStripped=!0;return c({render:p,staticRenderFns:[]},undefined,v,undefined,false,undefined,!1,void 0,void 0,void 0)}(VueCompositionAPI);
