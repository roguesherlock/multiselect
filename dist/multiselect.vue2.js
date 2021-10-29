import{toRefs as e,ref as t,computed as u,watch as a,nextTick as n}from"@vue/composition-api";function l(e){return-1!==[null,void 0,!1].indexOf(e)}function r(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?String(e).toLowerCase().trim():String(e).normalize("NFD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50]|\uD804[\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g,"").toLowerCase().trim()}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var u=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),u.push.apply(u,a)}return u}function s(e){for(var t=1;t<arguments.length;t++){var u=null!=arguments[t]?arguments[t]:{};t%2?o(Object(u),!0).forEach((function(t){c(e,t,u[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):o(Object(u)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(u,t))}))}return e}function c(e,t,u){return t in e?Object.defineProperty(e,t,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[t]=u,e}function v(n,o,v){var p=e(n),d=p.options,f=p.mode,g=p.trackBy,b=p.limit,m=p.hideSelected,h=p.createTag,D=p.label,y=p.appendNewTag,_=p.multipleLabel,O=p.object,F=p.loading,S=p.delay,C=p.resolveOnLoad,A=p.minChars,E=p.filterResults,B=p.clearOnSearch,P=p.clearOnSelect,L=p.valueProp,w=p.canDeselect,x=p.max,k=p.strict,q=p.closeOnSelect,j=p.groups,T=(p.groupLabel,p.groupOptions),I=p.groupHideEmpty,R=p.groupSelect,V=v.iv,N=v.ev,M=v.search,G=v.clearSearch,H=v.update,$=v.pointer,U=v.clearPointer,W=v.blur,K=v.deactivate,X=t([]),z=t([]),J=t(!1),Q=u((function(){if(j.value){var e=z.value||[],t=[];return e.forEach((function(e){Fe(e[T.value]).forEach((function(u){t.push(Object.assign({},u,e.disabled?{disabled:!0}:{}))}))})),t}var u=Fe(z.value||[]);return X.value.length&&(u=u.concat(X.value)),u})),Y=u((function(){return j.value?_e((z.value||[]).map((function(e){var t,u=Fe(e[T.value]);return s(s({},e),{},(c(t={group:!0},T.value,Oe(u,!1).map((function(t){return Object.assign({},t,e.disabled?{disabled:!0}:{})}))),c(t,"__VISIBLE__",Oe(u).map((function(t){return Object.assign({},t,e.disabled?{disabled:!0}:{})}))),t))}))):[]})),Z=u((function(){var e=Q.value;return ne.value.length&&(e=ne.value.concat(e)),e=Oe(e),b.value>0&&(e=e.slice(0,b.value)),e})),ee=u((function(){switch(f.value){case"single":return!l(V.value[L.value]);case"multiple":case"tags":return!l(V.value)&&V.value.length>0}})),te=u((function(){return void 0!==_&&void 0!==_.value?_.value(V.value):V.value&&V.value.length>1?"".concat(V.value.length," options selected"):"1 option selected"})),ue=u((function(){return!Q.value.length&&!J.value&&!ne.value.length})),ae=u((function(){return Q.value.length>0&&0==Z.value.length&&(M.value&&j.value||!j.value)})),ne=u((function(){var e;return!1!==h.value&&M.value?-1!==he(M.value)?[]:[(e={},c(e,L.value,M.value),c(e,D.value,M.value),c(e,g.value,M.value),c(e,"newTag",!0),c(e,"created",!1),e)]:[]})),le=u((function(){switch(f.value){case"single":return null;case"multiple":case"tags":return[]}})),re=u((function(){return F.value||J.value})),ie=function(e){switch("object"!==i(e)&&(e=me(e)),f.value){case"single":H(e);break;case"multiple":case"tags":H(V.value.concat(e))}o.emit("select",se(e),e)},oe=function(e){switch("object"!==i(e)&&(e=me(e)),f.value){case"single":ve();break;case"tags":case"multiple":H(Array.isArray(e)?V.value.filter((function(t){return-1===e.map((function(e){return e[L.value]})).indexOf(t[L.value])})):V.value.filter((function(t){return t[L.value]!=e[L.value]})))}o.emit("deselect",se(e),e)},se=function(e){return O.value?e:e[L.value]},ce=function(e){oe(e)},ve=function(){o.emit("clear"),H(le.value)},pe=function(e){if(void 0!==e.group)return"single"!==f.value&&(be(e[T.value])&&e[T.value].length);switch(f.value){case"single":return!l(V.value)&&V.value[L.value]==e[L.value];case"tags":case"multiple":return!l(V.value)&&-1!==V.value.map((function(e){return e[L.value]})).indexOf(e[L.value])}},de=function(e){return!0===e.disabled},fe=function(){return!(void 0===x||-1===x.value||!ee.value&&x.value>0)&&V.value.length>=x.value},ge=function(e){return void 0===e.find((function(e){return!pe(e)&&!e.disabled}))},be=function(e){return void 0===e.find((function(e){return!pe(e)}))},me=function(e){return Q.value[Q.value.map((function(e){return String(e[L.value])})).indexOf(String(e))]},he=function(e){return Q.value.map((function(e){return e[g.value]})).indexOf(e)},De=function(e){return-1!==["tags","multiple"].indexOf(f.value)&&m.value&&pe(e)},ye=function(e){e.created=!0,X.value.push(e)},_e=function(e){return I.value?e.filter((function(e){return M.value?e.__VISIBLE__.length:e[T.value].length})):e.filter((function(e){return!M.value||e.__VISIBLE__.length}))},Oe=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],u=e;return M.value&&E.value&&(u=u.filter((function(e){return-1!==r(e[g.value],k.value).indexOf(r(M.value,k.value))}))),m.value&&t&&(u=u.filter((function(e){return!De(e)}))),u},Fe=function(e){var t,u=e;return t=u,"[object Object]"===Object.prototype.toString.call(t)&&(u=Object.keys(u).map((function(e){var t,a=u[e];return c(t={},L.value,e),c(t,g.value,a),c(t,D.value,a),t}))),u=u.map((function(e){var t;return"object"===i(e)?e:(c(t={},L.value,e),c(t,g.value,e),c(t,D.value,e),t)}))},Se=function(){l(N.value)||(V.value=Ae(N.value))},Ce=function(e){J.value=!0,d.value(M.value).then((function(t){z.value=t,"function"==typeof e&&e(t),J.value=!1}))},Ae=function(e){return l(e)?"single"===f.value?{}:[]:O.value?e:"single"===f.value?me(e)||{}:e.filter((function(e){return!!me(e)})).map((function(e){return me(e)}))};if("single"!==f.value&&!l(N.value)&&!Array.isArray(N.value))throw new Error('v-model must be an array when using "'.concat(f.value,'" mode'));return d&&"function"==typeof d.value?C.value?Ce(Se):1==O.value&&Se():(z.value=d.value,Se()),S.value>-1&&a(M,(function(e){e.length<A.value||(J.value=!0,B.value&&(z.value=[]),setTimeout((function(){e==M.value&&d.value(M.value).then((function(t){e==M.value&&(z.value=t,$.value=Z.value.filter((function(e){return!0!==e.disabled}))[0]||null,J.value=!1)}))}),S.value))}),{flush:"sync"}),a(N,(function(e){var t,u,a;if(l(e))V.value=Ae(e);else switch(f.value){case"single":(O.value?e[L.value]!=V.value[L.value]:e!=V.value[L.value])&&(V.value=Ae(e));break;case"multiple":case"tags":t=O.value?e.map((function(e){return e[L.value]})):e,u=V.value.map((function(e){return e[L.value]})),a=u.slice().sort(),t.length===u.length&&t.slice().sort().every((function(e,t){return e===a[t]}))||(V.value=Ae(e))}}),{deep:!0}),"function"!=typeof n.options&&a(d,(function(e,t){z.value=n.options,Object.keys(V.value).length||Se(),function(){if(ee.value)if("single"===f.value){var e=me(V.value[L.value])[D.value];V.value[D.value]=e,O.value&&(N.value[D.value]=e)}else V.value.forEach((function(e,t){var u=me(V.value[t][L.value])[D.value];V.value[t][D.value]=u,O.value&&(N.value[t][D.value]=u)}))}()})),{fo:Z,filteredOptions:Z,hasSelected:ee,multipleLabelText:te,eo:Q,extendedOptions:Q,fg:Y,filteredGroups:Y,noOptions:ue,noResults:ae,resolving:J,busy:re,select:ie,deselect:oe,remove:ce,clear:ve,isSelected:pe,isDisabled:de,isMax:fe,getOption:me,handleOptionClick:function(e){if(!de(e)){switch(f.value){case"single":if(pe(e))return void(w.value&&oe(e));W(),ie(e);break;case"multiple":if(pe(e))return void oe(e);if(fe())return;ie(e),P.value&&G(),m.value&&U(),q.value&&W();break;case"tags":if(pe(e))return void oe(e);if(fe())return;void 0===me(e[L.value])&&h.value&&(o.emit("tag",e[L.value]),y.value&&ye(e),G()),P.value&&G(),ie(e),m.value&&U(),q.value&&W()}q.value&&K()}},handleGroupClick:function(e){if(!de(e)&&"single"!==f.value&&R.value){switch(f.value){case"multiple":case"tags":ge(e[T.value])?oe(e[T.value]):ie(e[T.value].filter((function(e){return-1===V.value.map((function(e){return e[L.value]})).indexOf(e[L.value])})).filter((function(e){return!e.disabled})).filter((function(e,t){return V.value.length+1+t<=x.value||-1===x.value})))}q.value&&K()}},handleTagRemove:function(e,t){0===t.button?ce(e):t.preventDefault()},refreshOptions:function(e){Ce(e)},resolveOptions:Ce}}function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var u=Object.prototype.toString.call(e).slice(8,-1);"Object"===u&&e.constructor&&(u=e.constructor.name);if("Map"===u||"Set"===u)return Array.from(e);if("Arguments"===u||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var u=0,a=new Array(t);u<t;u++)a[u]=e[u];return a}function f(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var u=Object.prototype.toString.call(e).slice(8,-1);"Object"===u&&e.constructor&&(u=e.constructor.name);if("Map"===u||"Set"===u)return Array.from(e);if("Arguments"===u||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var u=0,a=new Array(t);u<t;u++)a[u]=e[u];return a}function b(e,t){var u=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),u.push.apply(u,a)}return u}function m(e,t,u){return t in e?Object.defineProperty(e,t,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[t]=u,e}function h(t,a,n){var l=e(t),r=l.disabled,i=l.openDirection,o=l.showOptions,s=n.isOpen,c=n.isPointed,v=n.isSelected,p=n.isDisabled,d=n.isActive,f=n.canPointGroups,g=n.resolving,h=n.fo,D=function(e){for(var t=1;t<arguments.length;t++){var u=null!=arguments[t]?arguments[t]:{};t%2?b(Object(u),!0).forEach((function(t){m(e,t,u[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):b(Object(u)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(u,t))}))}return e}({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",singleLabel:"multiselect-single-label",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagSearch:"multiselect-tag-search",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagError:"multiselect-tag-error",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer"},l.classes.value),y=u((function(){return!!(s.value&&o.value&&(!g.value||g.value&&h.value.length))}));return{classList:u((function(){return{container:[D.container].concat(r.value?D.containerDisabled:[]).concat(y.value&&"top"===i.value?D.containerOpenTop:[]).concat(y.value&&"top"!==i.value?D.containerOpen:[]).concat(d.value?D.containerActive:[]),spacer:D.spacer,singleLabel:D.singleLabel,multipleLabel:D.multipleLabel,search:D.search,tags:D.tags,tag:[D.tag].concat(r.value?D.tagDisabled:[]),tagSearch:D.tagSearch,tagRemove:D.tagRemove,tagRemoveIcon:D.tagRemoveIcon,tagError:D.tagError,tagsSearchWrapper:D.tagsSearchWrapper,tagsSearch:D.tagsSearch,tagsSearchCopy:D.tagsSearchCopy,placeholder:D.placeholder,caret:[D.caret].concat(s.value?D.caretOpen:[]),clear:D.clear,clearIcon:D.clearIcon,spinner:D.spinner,dropdown:[D.dropdown].concat("top"===i.value?D.dropdownTop:[]).concat(s.value&&o.value&&y.value?[]:D.dropdownHidden),options:[D.options].concat("top"===i.value?D.optionsTop:[]),group:D.group,groupLabel:function(e){var t=[D.groupLabel];return c(e)?t.push(v(e)?D.groupLabelSelectedPointed:D.groupLabelPointed):v(e)&&f.value?t.push(p(e)?D.groupLabelSelectedDisabled:D.groupLabelSelected):p(e)&&t.push(D.groupLabelDisabled),f.value&&t.push(D.groupLabelPointable),t},groupOptions:D.groupOptions,option:function(e,t){var u=[D.option];return c(e)?u.push(v(e)?D.optionSelectedPointed:D.optionPointed):v(e)?u.push(p(e)?D.optionSelectedDisabled:D.optionSelected):(p(e)||t&&p(t))&&u.push(D.optionDisabled),u},noOptions:D.noOptions,noResults:D.noResults,fakeInput:D.fakeInput}})),showDropdown:y}}function D(e,t,u,a,n,l,r,i,o,s){"boolean"!=typeof r&&(o=i,i=r,r=!1);var c,v="function"==typeof u?u.options:u;if(e&&e.render&&(v.render=e.render,v.staticRenderFns=e.staticRenderFns,v._compiled=!0,n&&(v.functional=!0)),a&&(v._scopeId=a),l?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(l)},v._ssrRegister=c):t&&(c=r?function(e){t.call(this,s(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,i(e))}),c)if(v.functional){var p=v.render;v.render=function(e,t){return c.call(t),p(e,t)}}else{var d=v.beforeCreate;v.beforeCreate=d?[].concat(d,c):[c]}return u}const y={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change","clear"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},addTagOn:{type:Array,required:!1,default:()=>["enter"]},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},tagErrorMessage:{type:String,required:!1,default:null}},setup(r,i){const o=function(a,n){var l=e(a),r=l.value,i=l.modelValue,o=l.mode,s=l.valueProp,c=t("single"!==o.value?[]:{}),v=void 0!==n.expose?i:r,p=u((function(){return"single"===o.value?c.value[s.value]:c.value.map((function(e){return e[s.value]}))})),d=u((function(){return"single"!==o.value?c.value.map((function(e){return e[s.value]})).join(","):c.value[s.value]}));return{iv:c,internalValue:c,ev:v,externalValue:v,textValue:d,plainValue:p}}(r,i),s=function(u,a,n){var l=e(u),r=l.groupSelect,i=l.mode,o=l.groups,s=t(null),c=function(e){void 0===e||null!==e&&e.disabled||o.value&&e&&e.group&&("single"===i.value||!r.value)||(s.value=e)};return{pointer:s,setPointer:c,clearPointer:function(){c(null)}}}(r),c=function(u,a,n){var l=e(u).disabled,r=t(!1);return{isOpen:r,open:function(){r.value||l.value||(r.value=!0,a.emit("open"))},close:function(){r.value&&(r.value=!1,a.emit("close"))}}}(r,i),d=function(e,u,n){var l=t(null),r=t(null);return a(l,(function(e){u.emit("search-change",e)})),{search:l,input:r,clearSearch:function(){l.value=""},handleSearchInput:function(e){l.value=e.target.value},handlePaste:function(e){u.emit("paste",e)}}}(0,i),g=function(t,u,a){var n=e(t),r=n.object,i=n.valueProp,o=n.mode,s=a.iv,c=function(e){return r.value||l(e)?e:Array.isArray(e)?e.map((function(e){return e[i.value]})):e[i.value]},v=function(e){return l(e)?"single"===o.value?{}:[]:e};return{update:function(e){s.value=v(e);var t=c(e);u.emit("change",t),u.emit("input",t),u.emit("update:modelValue",t)}}}(r,i,{iv:o.iv}),b=function(a,n,l){var r=e(a),i=r.searchable,o=r.disabled,s=l.input,c=l.open,v=l.close,p=l.clearSearch,d=t(null),f=t(!1),g=u((function(){return i.value||o.value?-1:0})),b=function(){i.value&&s.value.blur(),d.value.blur()},m=function(){f.value=!1,setTimeout((function(){f.value||(v(),p())}),1)};return{multiselect:d,tabindex:g,isActive:f,blur:b,handleFocus:function(){i.value&&!o.value&&s.value.focus()},activate:function(){o.value||(f.value=!0,c())},deactivate:m,handleCaretClick:function(){m(),b()}}}(r,0,{input:d.input,open:c.open,close:c.close,clearSearch:d.clearSearch}),m=v(r,i,{ev:o.ev,iv:o.iv,search:d.search,clearSearch:d.clearSearch,update:g.update,pointer:s.pointer,clearPointer:s.clearPointer,blur:b.blur,deactivate:b.deactivate}),D=function(t,l,r){var i=e(t),o=i.valueProp,s=i.showOptions,c=i.searchable,v=i.groupLabel,d=i.groups,f=i.mode,g=i.groupSelect,b=r.fo,m=r.fg,h=r.handleOptionClick,D=r.handleGroupClick,y=r.search,_=r.pointer,O=r.setPointer,F=r.clearPointer,S=r.multiselect,C=u((function(){return b.value.filter((function(e){return!e.disabled}))})),A=u((function(){return m.value.filter((function(e){return!e.disabled}))})),E=u((function(){return"single"!==f.value&&g.value})),B=u((function(){return _.value&&_.value.group})),P=u((function(){return V(_.value)})),L=u((function(){var e=B.value?_.value:V(_.value),t=A.value.map((function(e){return e[v.value]})).indexOf(e[v.value]),u=A.value[t-1];return void 0===u&&(u=x.value),u})),w=u((function(){var e=A.value.map((function(e){return e.label})).indexOf(B.value?_.value[v.value]:V(_.value)[v.value])+1;return A.value.length<=e&&(e=0),A.value[e]})),x=u((function(){return p(A.value).slice(-1)[0]})),k=u((function(){return _.value.__VISIBLE__.filter((function(e){return!e.disabled}))[0]})),q=u((function(){var e=P.value.__VISIBLE__.filter((function(e){return!e.disabled}));return e[e.map((function(e){return e[o.value]})).indexOf(_.value[o.value])-1]})),j=u((function(){var e=V(_.value).__VISIBLE__.filter((function(e){return!e.disabled}));return e[e.map((function(e){return e[o.value]})).indexOf(_.value[o.value])+1]})),T=u((function(){return p(L.value.__VISIBLE__.filter((function(e){return!e.disabled}))).slice(-1)[0]})),I=u((function(){return p(x.value.__VISIBLE__.filter((function(e){return!e.disabled}))).slice(-1)[0]})),R=function(){O(C.value[0]||null)},V=function(e){return A.value.find((function(t){return-1!==t.__VISIBLE__.map((function(e){return e[o.value]})).indexOf(e[o.value])}))},N=function(){var e=S.value.querySelector("[data-pointed]");if(e){var t=e.parentElement.parentElement;d.value&&(t=B.value?e.parentElement.parentElement.parentElement:e.parentElement.parentElement.parentElement.parentElement),e.offsetTop+e.offsetHeight>t.clientHeight+t.scrollTop&&(t.scrollTop=e.offsetTop+e.offsetHeight-t.clientHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)}};return a(y,(function(e){c.value&&(e.length&&s.value?R():F())})),{pointer:_,canPointGroups:E,isPointed:function(e){return!(!_.value||!(!e.group&&_.value[o.value]==e[o.value]||void 0!==e.group&&_.value[v.value]==e[v.value]))||void 0},setPointerFirst:R,selectPointer:function(){_.value&&!0!==_.value.disabled&&(B.value?D(_.value):h(_.value))},forwardPointer:function(){if(null===_.value)O((d.value&&E.value?A.value[0]:C.value[0])||null);else if(d.value&&E.value){var e=B.value?k.value:j.value;void 0===e&&(e=w.value),O(e||null)}else{var t=C.value.map((function(e){return e[o.value]})).indexOf(_.value[o.value])+1;C.value.length<=t&&(t=0),O(C.value[t]||null)}n((function(){N()}))},backwardPointer:function(){if(null===_.value){var e=C.value[C.value.length-1];d.value&&E.value&&void 0===(e=I.value)&&(e=x.value),O(e||null)}else if(d.value&&E.value){var t=B.value?T.value:q.value;void 0===t&&(t=B.value?L.value:P.value),O(t||null)}else{var u=C.value.map((function(e){return e[o.value]})).indexOf(_.value[o.value])-1;u<0&&(u=C.value.length-1),O(C.value[u]||null)}n((function(){N()}))}}}(r,0,{fo:m.fo,fg:m.fg,handleOptionClick:m.handleOptionClick,handleGroupClick:m.handleGroupClick,search:d.search,pointer:s.pointer,setPointer:s.setPointer,clearPointer:s.clearPointer,multiselect:b.multiselect}),y=function(t,u,a){var n=e(t),l=n.mode,r=n.addTagOn,i=n.createTag,o=n.openDirection,s=n.searchable,c=n.showOptions,v=n.valueProp,p=n.groups,d=a.iv,g=a.update,b=a.search,m=a.setPointer,h=a.selectPointer,D=a.backwardPointer,y=a.forwardPointer,_=a.blur,O=a.fo,F=function(){"tags"===l.value&&!c.value&&i.value&&s.value&&!p.value&&m(O.value[O.value.map((function(e){return e[v.value]})).indexOf(b.value)])};return{handleKeydown:function(e){switch(e.keyCode){case 8:if("single"===l.value)return;if(s.value&&-1===[null,""].indexOf(b.value))return;if(0===d.value.length)return;g(f(d.value).slice(0,-1));break;case 13:if(e.preventDefault(),"tags"===l.value&&-1===r.value.indexOf("enter")&&i.value)return;F(),h();break;case 32:if(s.value&&"tags"!==l.value&&!i.value)return;if("tags"===l.value&&(-1===r.value.indexOf("space")&&i.value||!i.value))return;e.preventDefault(),F(),h();break;case 9:case 186:case 188:if("tags"!==l.value)return;if(-1===r.value.indexOf({9:"tab",186:";",188:","}[e.keyCode])||!i.value)return;F(),h(),e.preventDefault();break;case 27:_();break;case 38:if(e.preventDefault(),!c.value)return;"top"===o.value?y():D();break;case 40:if(e.preventDefault(),!c.value)return;"top"===o.value?D():y()}},preparePointer:F}}(r,0,{iv:o.iv,update:g.update,search:d.search,setPointer:s.setPointer,selectPointer:D.selectPointer,backwardPointer:D.backwardPointer,forwardPointer:D.forwardPointer,blur:b.blur,fo:m.fo}),_=h(r,0,{isOpen:c.isOpen,isPointed:D.isPointed,canPointGroups:D.canPointGroups,isSelected:m.isSelected,isDisabled:m.isDisabled,isActive:b.isActive,resolving:m.resolving,fo:m.fo});return{...o,...c,...b,...s,...g,...d,...m,...D,...y,..._}}};var _=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{ref:"multiselect",class:e.classList.container,attrs:{tabindex:e.tabindex,id:e.id},on:{focusin:e.activate,focusout:e.deactivate,keydown:e.handleKeydown,focus:e.handleFocus}},["tags"!==e.mode&&e.searchable&&!e.disabled?[u("input",{ref:"input",class:e.classList.search,attrs:{type:e.inputType,modelValue:e.search,autocomplete:e.autocomplete},domProps:{value:e.search},on:{input:e.handleSearchInput,paste:function(t){return t.stopPropagation(),e.handlePaste(t)}}})]:e._e(),e._v(" "),"tags"==e.mode?[u("div",{class:e.classList.tags},[e._l(e.iv,(function(t,a,n){return e._t("tag",[u("span",{key:n,class:e.classList.tag},[e._v("\n          "+e._s(t[e.label])+"\n          "),e.disabled?e._e():u("span",{class:e.classList.tagRemove,on:{mousedown:function(u){return u.preventDefault(),e.handleTagRemove(t,u)}}},[u("span",{class:e.classList.tagRemoveIcon})])])],{option:t,handleTagRemove:e.handleTagRemove,disabled:e.disabled})})),e._v(" "),u("div",{class:e.classList.tagsSearchWrapper},[u("span",{class:e.classList.tagsSearchCopy},[e._v(e._s(e.search))]),e._v(" "),e.searchable&&!e.disabled?u("input",{ref:"input",class:e.classList.tagsSearch,attrs:{type:e.inputType,modelValue:e.search,autocomplete:e.autocomplete},domProps:{value:e.search},on:{input:e.handleSearchInput,paste:function(t){return t.stopPropagation(),e.handlePaste(t)}}}):e._e()])],2)]:e._e(),e._v(" "),"single"==e.mode&&e.hasSelected&&!e.search&&e.iv?[e._t("singlelabel",[u("div",{class:e.classList.singleLabel},[e._v("\n        "+e._s(e.iv[e.label])+"\n      ")])],{value:e.iv})]:e._e(),e._v(" "),"multiple"==e.mode&&e.hasSelected&&!e.search?[e._t("multiplelabel",[u("div",{class:e.classList.multipleLabel},[e._v("\n        "+e._s(e.multipleLabelText)+"\n      ")])],{values:e.iv})]:e._e(),e._v(" "),!e.placeholder||e.hasSelected||e.search?e._e():[e._t("placeholder",[u("div",{class:e.classList.placeholder},[e._v("\n        "+e._s(e.placeholder)+"\n      ")])])],e._v(" "),e.busy?e._t("spinner",[u("span",{class:e.classList.spinner})]):e._e(),e._v(" "),e.hasSelected&&!e.disabled&&e.canClear&&!e.busy?e._t("clear",[u("span",{class:e.classList.clear,on:{mousedown:e.clear}},[u("span",{class:e.classList.clearIcon})])],{clear:e.clear}):e._e(),e._v(" "),e.caret?e._t("caret",[u("span",{class:e.classList.caret,on:{click:e.handleCaretClick}})]):e._e(),e._v(" "),u("div",{class:e.classList.dropdown,attrs:{tabindex:"-1"}},[e._t("beforelist",null,{options:e.fo}),e._v(" "),u("ul",{class:e.classList.options},[e.groups?e._l(e.fg,(function(t,a,n){return u("li",{key:n,class:e.classList.group},[u("div",{class:e.classList.groupLabel(t),attrs:{"data-pointed":e.isPointed(t)},on:{mouseenter:function(u){return e.setPointer(t)},click:function(u){return e.handleGroupClick(t)}}},[e._t("grouplabel",[u("span",[e._v(e._s(t[e.groupLabel]))])],{group:t})],2),e._v(" "),u("ul",{class:e.classList.groupOptions},e._l(t.__VISIBLE__,(function(a,n,l){return u("li",{key:l,class:e.classList.option(a,t),attrs:{"data-pointed":e.isPointed(a)},on:{mouseenter:function(t){return e.setPointer(a)},click:function(t){return e.handleOptionClick(a)}}},[e._t("option",[u("span",[e._v(e._s(a[e.label]))])],{option:a,search:e.search})],2)})),0)])})):e._l(e.fo,(function(t,a,n){return u("li",{key:n,class:e.classList.option(t),attrs:{"data-pointed":e.isPointed(t)},on:{mouseenter:function(u){return e.setPointer(t)},click:function(u){return e.handleOptionClick(t)}}},[e._t("option",[t.newTag&&!t.created?[e.isMax()?[u("span",{class:e.classList.tagError},[e._v(e._s(e.tagErrorMessage||"Can only add "+e.max+" tag(s) at most."))])]:[u("span",[e._v("Create")]),e._v(" "),u("span",{class:e.classList.tagSearch},[e._v("\n                  "+e._s(t[e.label])+"\n                ")])]]:u("span",[e._v(e._s(t[e.label]))])],{option:t,search:e.search,isMax:e.isMax})],2)}))],2),e._v(" "),e.noOptions?e._t("nooptions",[u("div",{class:e.classList.noOptions,domProps:{innerHTML:e._s(e.noOptionsText)}})]):e._e(),e._v(" "),e.noResults?e._t("noresults",[u("div",{class:e.classList.noResults,domProps:{innerHTML:e._s(e.noResultsText)}})]):e._e(),e._v(" "),e._t("afterlist",null,{options:e.fo})],2),e._v(" "),e.required?u("input",{class:e.classList.fakeInput,attrs:{tabindex:"-1",required:""},domProps:{value:e.textValue}}):e._e(),e._v(" "),e.nativeSupport?["single"==e.mode?u("input",{attrs:{type:"hidden",name:e.name},domProps:{value:void 0!==e.plainValue?e.plainValue:""}}):e._l(e.plainValue,(function(t,a){return u("input",{key:a,attrs:{type:"hidden",name:e.name+"[]"},domProps:{value:t}})}))]:e._e(),e._v(" "),u("div",{class:e.classList.spacer})],2)};_._withStripped=!0;const O=D({render:_,staticRenderFns:[]},undefined,y,undefined,false,undefined,!1,void 0,void 0,void 0);export default O;
