import{toRefs as e,ref as u,computed as t,watch as a,nextTick as l,openBlock as n,createBlock as r,createCommentVNode as i,withModifiers as o,Fragment as s,renderList as c,renderSlot as v,createTextVNode as p,toDisplayString as d,createVNode as f}from"vue";function g(e){return-1!==[null,void 0,!1].indexOf(e)}function b(e){var u=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return u?String(e).toLowerCase().trim():String(e).normalize("NFD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50]|\uD804[\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g,"").toLowerCase().trim()}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,u){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);u&&(a=a.filter((function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable}))),t.push.apply(t,a)}return t}function D(e){for(var u=1;u<arguments.length;u++){var t=null!=arguments[u]?arguments[u]:{};u%2?m(Object(t),!0).forEach((function(u){y(e,u,t[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(u){Object.defineProperty(e,u,Object.getOwnPropertyDescriptor(t,u))}))}return e}function y(e,u,t){return u in e?Object.defineProperty(e,u,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[u]=t,e}function O(l,n,r){var i=e(l),o=i.options,s=i.mode,c=i.trackBy,v=i.limit,p=i.hideSelected,d=i.createTag,f=i.label,m=i.appendNewTag,O=i.multipleLabel,F=i.object,C=i.loading,S=i.delay,A=i.resolveOnLoad,E=i.minChars,B=i.filterResults,P=i.clearOnSearch,L=i.clearOnSelect,k=i.valueProp,w=i.canDeselect,q=i.max,x=i.strict,j=i.closeOnSelect,T=i.groups,I=(i.groupLabel,i.groupOptions),_=i.groupHideEmpty,V=i.groupSelect,M=r.iv,R=r.ev,$=r.search,H=r.clearSearch,N=r.update,G=r.pointer,K=r.clearPointer,W=r.blur,U=r.deactivate,z=u([]),J=u([]),Q=u(!1),X=t((function(){if(T.value){var e=J.value||[],u=[];return e.forEach((function(e){Ce(e[I.value]).forEach((function(t){u.push(Object.assign({},t,e.disabled?{disabled:!0}:{}))}))})),u}var t=Ce(J.value||[]);return z.value.length&&(t=t.concat(z.value)),t})),Y=t((function(){return T.value?Oe((J.value||[]).map((function(e){var u,t=Ce(e[I.value]);return D(D({},e),{},(y(u={group:!0},I.value,Fe(t,!1).map((function(u){return Object.assign({},u,e.disabled?{disabled:!0}:{})}))),y(u,"__VISIBLE__",Fe(t).map((function(u){return Object.assign({},u,e.disabled?{disabled:!0}:{})}))),u))}))):[]})),Z=t((function(){var e=X.value;return le.value.length&&(e=le.value.concat(e)),e=Fe(e),v.value>0&&(e=e.slice(0,v.value)),e})),ee=t((function(){switch(s.value){case"single":return!g(M.value[k.value]);case"multiple":case"tags":return!g(M.value)&&M.value.length>0}})),ue=t((function(){return void 0!==O&&void 0!==O.value?O.value(M.value):M.value&&M.value.length>1?"".concat(M.value.length," options selected"):"1 option selected"})),te=t((function(){return!X.value.length&&!Q.value&&!le.value.length})),ae=t((function(){return X.value.length>0&&0==Z.value.length&&($.value&&T.value||!T.value)})),le=t((function(){var e;return!1!==d.value&&$.value?-1!==me($.value)?[]:[(e={},y(e,k.value,$.value),y(e,f.value,$.value),y(e,c.value,$.value),y(e,"newTag",!0),y(e,"created",!1),e)]:[]})),ne=t((function(){switch(s.value){case"single":return null;case"multiple":case"tags":return[]}})),re=t((function(){return C.value||Q.value})),ie=function(e){switch("object"!==h(e)&&(e=he(e)),s.value){case"single":N(e);break;case"multiple":case"tags":N(M.value.concat(e))}n.emit("select",se(e),e)},oe=function(e){switch("object"!==h(e)&&(e=he(e)),s.value){case"single":ve();break;case"tags":case"multiple":N(Array.isArray(e)?M.value.filter((function(u){return-1===e.map((function(e){return e[k.value]})).indexOf(u[k.value])})):M.value.filter((function(u){return u[k.value]!=e[k.value]})))}n.emit("deselect",se(e),e)},se=function(e){return F.value?e:e[k.value]},ce=function(e){oe(e)},ve=function(){n.emit("clear"),N(ne.value)},pe=function(e){if(void 0!==e.group)return"single"!==s.value&&(be(e[I.value])&&e[I.value].length);switch(s.value){case"single":return!g(M.value)&&M.value[k.value]==e[k.value];case"tags":case"multiple":return!g(M.value)&&-1!==M.value.map((function(e){return e[k.value]})).indexOf(e[k.value])}},de=function(e){return!0===e.disabled},fe=function(){return!(void 0===q||-1===q.value||!ee.value&&q.value>0)&&M.value.length>=q.value},ge=function(e){return void 0===e.find((function(e){return!pe(e)&&!e.disabled}))},be=function(e){return void 0===e.find((function(e){return!pe(e)}))},he=function(e){return X.value[X.value.map((function(e){return String(e[k.value])})).indexOf(String(e))]},me=function(e){return X.value.map((function(e){return e[c.value]})).indexOf(e)},De=function(e){return-1!==["tags","multiple"].indexOf(s.value)&&p.value&&pe(e)},ye=function(e){e.created=!0,z.value.push(e)},Oe=function(e){return _.value?e.filter((function(e){return $.value?e.__VISIBLE__.length:e[I.value].length})):e.filter((function(e){return!$.value||e.__VISIBLE__.length}))},Fe=function(e){var u=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=e;return $.value&&B.value&&(t=t.filter((function(e){return-1!==b(e[c.value],x.value).indexOf(b($.value,x.value))}))),p.value&&u&&(t=t.filter((function(e){return!De(e)}))),t},Ce=function(e){var u,t=e;return u=t,"[object Object]"===Object.prototype.toString.call(u)&&(t=Object.keys(t).map((function(e){var u,a=t[e];return y(u={},k.value,e),y(u,c.value,a),y(u,f.value,a),u}))),t=t.map((function(e){var u;return"object"===h(e)?e:(y(u={},k.value,e),y(u,c.value,e),y(u,f.value,e),u)}))},Se=function(){g(R.value)||(M.value=Ee(R.value))},Ae=function(e){Q.value=!0,o.value($.value).then((function(u){J.value=u,"function"==typeof e&&e(u),Q.value=!1}))},Ee=function(e){return g(e)?"single"===s.value?{}:[]:F.value?e:"single"===s.value?he(e)||{}:e.filter((function(e){return!!he(e)})).map((function(e){return he(e)}))};if("single"!==s.value&&!g(R.value)&&!Array.isArray(R.value))throw new Error('v-model must be an array when using "'.concat(s.value,'" mode'));return o&&"function"==typeof o.value?A.value?Ae(Se):1==F.value&&Se():(J.value=o.value,Se()),S.value>-1&&a($,(function(e){e.length<E.value||(Q.value=!0,P.value&&(J.value=[]),setTimeout((function(){e==$.value&&o.value($.value).then((function(u){e==$.value&&(J.value=u,G.value=Z.value.filter((function(e){return!0!==e.disabled}))[0]||null,Q.value=!1)}))}),S.value))}),{flush:"sync"}),a(R,(function(e){var u,t,a;if(g(e))M.value=Ee(e);else switch(s.value){case"single":(F.value?e[k.value]!=M.value[k.value]:e!=M.value[k.value])&&(M.value=Ee(e));break;case"multiple":case"tags":u=F.value?e.map((function(e){return e[k.value]})):e,t=M.value.map((function(e){return e[k.value]})),a=t.slice().sort(),u.length===t.length&&u.slice().sort().every((function(e,u){return e===a[u]}))||(M.value=Ee(e))}}),{deep:!0}),"function"!=typeof l.options&&a(o,(function(e,u){J.value=l.options,Object.keys(M.value).length||Se(),function(){if(ee.value)if("single"===s.value){var e=he(M.value[k.value])[f.value];M.value[f.value]=e,F.value&&(R.value[f.value]=e)}else M.value.forEach((function(e,u){var t=he(M.value[u][k.value])[f.value];M.value[u][f.value]=t,F.value&&(R.value[u][f.value]=t)}))}()})),{fo:Z,filteredOptions:Z,hasSelected:ee,multipleLabelText:ue,eo:X,extendedOptions:X,fg:Y,filteredGroups:Y,noOptions:te,noResults:ae,resolving:Q,busy:re,select:ie,deselect:oe,remove:ce,clear:ve,isSelected:pe,isDisabled:de,isMax:fe,getOption:he,handleOptionClick:function(e){if(!de(e)){switch(s.value){case"single":if(pe(e))return void(w.value&&oe(e));W(),ie(e);break;case"multiple":if(pe(e))return void oe(e);if(fe())return;ie(e),L.value&&H(),p.value&&K(),j.value&&W();break;case"tags":if(pe(e))return void oe(e);if(fe())return;void 0===he(e[k.value])&&d.value&&(n.emit("tag",e[k.value]),m.value&&ye(e),H()),L.value&&H(),ie(e),p.value&&K(),j.value&&W()}j.value&&U()}},handleGroupClick:function(e){if(!de(e)&&"single"!==s.value&&V.value){switch(s.value){case"multiple":case"tags":ge(e[I.value])?oe(e[I.value]):ie(e[I.value].filter((function(e){return-1===M.value.map((function(e){return e[k.value]})).indexOf(e[k.value])})).filter((function(e){return!e.disabled})).filter((function(e,u){return M.value.length+1+u<=q.value||-1===q.value})))}j.value&&U()}},handleTagRemove:function(e,u){0===u.button?ce(e):u.preventDefault()},refreshOptions:function(e){Ae(e)},resolveOptions:Ae}}function F(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,u){if(!e)return;if("string"==typeof e)return C(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,u)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,u){(null==u||u>e.length)&&(u=e.length);for(var t=0,a=new Array(u);t<u;t++)a[t]=e[t];return a}function S(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,u){if(!e)return;if("string"==typeof e)return A(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,u)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,u){(null==u||u>e.length)&&(u=e.length);for(var t=0,a=new Array(u);t<u;t++)a[t]=e[t];return a}function E(e,u){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);u&&(a=a.filter((function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable}))),t.push.apply(t,a)}return t}function B(e,u,t){return u in e?Object.defineProperty(e,u,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[u]=t,e}function P(u,a,l){var n=e(u),r=n.disabled,i=n.openDirection,o=n.showOptions,s=l.isOpen,c=l.isPointed,v=l.isSelected,p=l.isDisabled,d=l.isActive,f=l.canPointGroups,g=l.resolving,b=l.fo,h=function(e){for(var u=1;u<arguments.length;u++){var t=null!=arguments[u]?arguments[u]:{};u%2?E(Object(t),!0).forEach((function(u){B(e,u,t[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(u){Object.defineProperty(e,u,Object.getOwnPropertyDescriptor(t,u))}))}return e}({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",singleLabel:"multiselect-single-label",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagSearch:"multiselect-tag-search",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagError:"multiselect-tag-error",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer"},n.classes.value),m=t((function(){return!!(s.value&&o.value&&(!g.value||g.value&&b.value.length))}));return{classList:t((function(){return{container:[h.container].concat(r.value?h.containerDisabled:[]).concat(m.value&&"top"===i.value?h.containerOpenTop:[]).concat(m.value&&"top"!==i.value?h.containerOpen:[]).concat(d.value?h.containerActive:[]),spacer:h.spacer,singleLabel:h.singleLabel,multipleLabel:h.multipleLabel,search:h.search,tags:h.tags,tag:[h.tag].concat(r.value?h.tagDisabled:[]),tagSearch:h.tagSearch,tagRemove:h.tagRemove,tagRemoveIcon:h.tagRemoveIcon,tagError:h.tagError,tagsSearchWrapper:h.tagsSearchWrapper,tagsSearch:h.tagsSearch,tagsSearchCopy:h.tagsSearchCopy,placeholder:h.placeholder,caret:[h.caret].concat(s.value?h.caretOpen:[]),clear:h.clear,clearIcon:h.clearIcon,spinner:h.spinner,dropdown:[h.dropdown].concat("top"===i.value?h.dropdownTop:[]).concat(s.value&&o.value&&m.value?[]:h.dropdownHidden),options:[h.options].concat("top"===i.value?h.optionsTop:[]),group:h.group,groupLabel:function(e){var u=[h.groupLabel];return c(e)?u.push(v(e)?h.groupLabelSelectedPointed:h.groupLabelPointed):v(e)&&f.value?u.push(p(e)?h.groupLabelSelectedDisabled:h.groupLabelSelected):p(e)&&u.push(h.groupLabelDisabled),f.value&&u.push(h.groupLabelPointable),u},groupOptions:h.groupOptions,option:function(e,u){var t=[h.option];return c(e)?t.push(v(e)?h.optionSelectedPointed:h.optionPointed):v(e)?t.push(p(e)?h.optionSelectedDisabled:h.optionSelected):(p(e)||u&&p(u))&&t.push(h.optionDisabled),t},noOptions:h.noOptions,noResults:h.noResults,fakeInput:h.fakeInput}})),showDropdown:m}}var L={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change","clear"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},addTagOn:{type:Array,required:!1,default:()=>["enter"]},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},tagErrorMessage:{type:String,required:!1,default:null}},setup(n,r){const i=function(a,l){var n=e(a),r=n.value,i=n.modelValue,o=n.mode,s=n.valueProp,c=u("single"!==o.value?[]:{}),v=void 0!==l.expose?i:r,p=t((function(){return"single"===o.value?c.value[s.value]:c.value.map((function(e){return e[s.value]}))})),d=t((function(){return"single"!==o.value?c.value.map((function(e){return e[s.value]})).join(","):c.value[s.value]}));return{iv:c,internalValue:c,ev:v,externalValue:v,textValue:d,plainValue:p}}(n,r),o=function(t,a,l){var n=e(t),r=n.groupSelect,i=n.mode,o=n.groups,s=u(null),c=function(e){void 0===e||null!==e&&e.disabled||o.value&&e&&e.group&&("single"===i.value||!r.value)||(s.value=e)};return{pointer:s,setPointer:c,clearPointer:function(){c(null)}}}(n),s=function(t,a,l){var n=e(t).disabled,r=u(!1);return{isOpen:r,open:function(){r.value||n.value||(r.value=!0,a.emit("open"))},close:function(){r.value&&(r.value=!1,a.emit("close"))}}}(n,r),c=function(e,t,l){var n=u(null),r=u(null);return a(n,(function(e){t.emit("search-change",e)})),{search:n,input:r,clearSearch:function(){n.value=""},handleSearchInput:function(e){n.value=e.target.value},handlePaste:function(e){t.emit("paste",e)}}}(0,r),v=function(u,t,a){var l=e(u),n=l.object,r=l.valueProp,i=l.mode,o=a.iv,s=function(e){return n.value||g(e)?e:Array.isArray(e)?e.map((function(e){return e[r.value]})):e[r.value]},c=function(e){return g(e)?"single"===i.value?{}:[]:e};return{update:function(e){o.value=c(e);var u=s(e);t.emit("change",u),t.emit("input",u),t.emit("update:modelValue",u)}}}(n,r,{iv:i.iv}),p=function(a,l,n){var r=e(a),i=r.searchable,o=r.disabled,s=n.input,c=n.open,v=n.close,p=n.clearSearch,d=u(null),f=u(!1),g=t((function(){return i.value||o.value?-1:0})),b=function(){i.value&&s.value.blur(),d.value.blur()},h=function(){f.value=!1,setTimeout((function(){f.value||(v(),p())}),1)};return{multiselect:d,tabindex:g,isActive:f,blur:b,handleFocus:function(){i.value&&!o.value&&s.value.focus()},activate:function(){o.value||(f.value=!0,c())},deactivate:h,handleCaretClick:function(){h(),b()}}}(n,0,{input:c.input,open:s.open,close:s.close,clearSearch:c.clearSearch}),d=O(n,r,{ev:i.ev,iv:i.iv,search:c.search,clearSearch:c.clearSearch,update:v.update,pointer:o.pointer,clearPointer:o.clearPointer,blur:p.blur,deactivate:p.deactivate}),f=function(u,n,r){var i=e(u),o=i.valueProp,s=i.showOptions,c=i.searchable,v=i.groupLabel,p=i.groups,d=i.mode,f=i.groupSelect,g=r.fo,b=r.fg,h=r.handleOptionClick,m=r.handleGroupClick,D=r.search,y=r.pointer,O=r.setPointer,C=r.clearPointer,S=r.multiselect,A=t((function(){return g.value.filter((function(e){return!e.disabled}))})),E=t((function(){return b.value.filter((function(e){return!e.disabled}))})),B=t((function(){return"single"!==d.value&&f.value})),P=t((function(){return y.value&&y.value.group})),L=t((function(){return M(y.value)})),k=t((function(){var e=P.value?y.value:M(y.value),u=E.value.map((function(e){return e[v.value]})).indexOf(e[v.value]),t=E.value[u-1];return void 0===t&&(t=q.value),t})),w=t((function(){var e=E.value.map((function(e){return e.label})).indexOf(P.value?y.value[v.value]:M(y.value)[v.value])+1;return E.value.length<=e&&(e=0),E.value[e]})),q=t((function(){return F(E.value).slice(-1)[0]})),x=t((function(){return y.value.__VISIBLE__.filter((function(e){return!e.disabled}))[0]})),j=t((function(){var e=L.value.__VISIBLE__.filter((function(e){return!e.disabled}));return e[e.map((function(e){return e[o.value]})).indexOf(y.value[o.value])-1]})),T=t((function(){var e=M(y.value).__VISIBLE__.filter((function(e){return!e.disabled}));return e[e.map((function(e){return e[o.value]})).indexOf(y.value[o.value])+1]})),I=t((function(){return F(k.value.__VISIBLE__.filter((function(e){return!e.disabled}))).slice(-1)[0]})),_=t((function(){return F(q.value.__VISIBLE__.filter((function(e){return!e.disabled}))).slice(-1)[0]})),V=function(){O(A.value[0]||null)},M=function(e){return E.value.find((function(u){return-1!==u.__VISIBLE__.map((function(e){return e[o.value]})).indexOf(e[o.value])}))},R=function(){var e=S.value.querySelector("[data-pointed]");if(e){var u=e.parentElement.parentElement;p.value&&(u=P.value?e.parentElement.parentElement.parentElement:e.parentElement.parentElement.parentElement.parentElement),e.offsetTop+e.offsetHeight>u.clientHeight+u.scrollTop&&(u.scrollTop=e.offsetTop+e.offsetHeight-u.clientHeight),e.offsetTop<u.scrollTop&&(u.scrollTop=e.offsetTop)}};return a(D,(function(e){c.value&&(e.length&&s.value?V():C())})),{pointer:y,canPointGroups:B,isPointed:function(e){return!(!y.value||!(!e.group&&y.value[o.value]==e[o.value]||void 0!==e.group&&y.value[v.value]==e[v.value]))||void 0},setPointerFirst:V,selectPointer:function(){y.value&&!0!==y.value.disabled&&(P.value?m(y.value):h(y.value))},forwardPointer:function(){if(null===y.value)O((p.value&&B.value?E.value[0]:A.value[0])||null);else if(p.value&&B.value){var e=P.value?x.value:T.value;void 0===e&&(e=w.value),O(e||null)}else{var u=A.value.map((function(e){return e[o.value]})).indexOf(y.value[o.value])+1;A.value.length<=u&&(u=0),O(A.value[u]||null)}l((function(){R()}))},backwardPointer:function(){if(null===y.value){var e=A.value[A.value.length-1];p.value&&B.value&&void 0===(e=_.value)&&(e=q.value),O(e||null)}else if(p.value&&B.value){var u=P.value?I.value:j.value;void 0===u&&(u=P.value?k.value:L.value),O(u||null)}else{var t=A.value.map((function(e){return e[o.value]})).indexOf(y.value[o.value])-1;t<0&&(t=A.value.length-1),O(A.value[t]||null)}l((function(){R()}))}}}(n,0,{fo:d.fo,fg:d.fg,handleOptionClick:d.handleOptionClick,handleGroupClick:d.handleGroupClick,search:c.search,pointer:o.pointer,setPointer:o.setPointer,clearPointer:o.clearPointer,multiselect:p.multiselect}),b=function(u,t,a){var l=e(u),n=l.mode,r=l.addTagOn,i=l.createTag,o=l.openDirection,s=l.searchable,c=l.showOptions,v=l.valueProp,p=l.groups,d=a.iv,f=a.update,g=a.search,b=a.setPointer,h=a.selectPointer,m=a.backwardPointer,D=a.forwardPointer,y=a.blur,O=a.fo,F=function(){"tags"===n.value&&!c.value&&i.value&&s.value&&!p.value&&b(O.value[O.value.map((function(e){return e[v.value]})).indexOf(g.value)])};return{handleKeydown:function(e){switch(e.keyCode){case 8:if("single"===n.value)return;if(s.value&&-1===[null,""].indexOf(g.value))return;if(0===d.value.length)return;f(S(d.value).slice(0,-1));break;case 13:if(e.preventDefault(),"tags"===n.value&&-1===r.value.indexOf("enter")&&i.value)return;F(),h();break;case 32:if(s.value&&"tags"!==n.value&&!i.value)return;if("tags"===n.value&&(-1===r.value.indexOf("space")&&i.value||!i.value))return;e.preventDefault(),F(),h();break;case 9:case 186:case 188:if("tags"!==n.value)return;if(-1===r.value.indexOf({9:"tab",186:";",188:","}[e.keyCode])||!i.value)return;F(),h(),e.preventDefault();break;case 27:y();break;case 38:if(e.preventDefault(),!c.value)return;"top"===o.value?D():m();break;case 40:if(e.preventDefault(),!c.value)return;"top"===o.value?m():D()}},preparePointer:F}}(n,0,{iv:i.iv,update:v.update,search:c.search,setPointer:o.setPointer,selectPointer:f.selectPointer,backwardPointer:f.backwardPointer,forwardPointer:f.forwardPointer,blur:p.blur,fo:d.fo}),h=P(n,0,{isOpen:s.isOpen,isPointed:f.isPointed,canPointGroups:f.canPointGroups,isSelected:d.isSelected,isDisabled:d.isDisabled,isActive:p.isActive,resolving:d.resolving,fo:d.fo});return{...i,...s,...p,...o,...v,...c,...d,...f,...b,...h}}};const k=f("span",null,"Create",-1),w={key:1};L.render=function(e,u,t,a,l,g){return n(),r("div",{ref:"multiselect",tabindex:e.tabindex,class:e.classList.container,id:t.id,onFocusin:u[7]||(u[7]=(...u)=>e.activate&&e.activate(...u)),onFocusout:u[8]||(u[8]=(...u)=>e.deactivate&&e.deactivate(...u)),onKeydown:u[9]||(u[9]=(...u)=>e.handleKeydown&&e.handleKeydown(...u)),onFocus:u[10]||(u[10]=(...u)=>e.handleFocus&&e.handleFocus(...u))},[i(" Search "),"tags"!==t.mode&&t.searchable&&!t.disabled?(n(),r("input",{key:0,type:t.inputType,modelValue:e.search,value:e.search,class:e.classList.search,autocomplete:t.autocomplete,onInput:u[1]||(u[1]=(...u)=>e.handleSearchInput&&e.handleSearchInput(...u)),onPaste:u[2]||(u[2]=o(((...u)=>e.handlePaste&&e.handlePaste(...u)),["stop"])),ref:"input"},null,42,["type","modelValue","value","autocomplete"])):i("v-if",!0),i(" Tags (with search) "),"tags"==t.mode?(n(),r("div",{key:1,class:e.classList.tags},[(n(!0),r(s,null,c(e.iv,((u,a,l)=>v(e.$slots,"tag",{option:u,handleTagRemove:e.handleTagRemove,disabled:t.disabled},(()=>[(n(),r("span",{class:e.classList.tag,key:l},[p(d(u[t.label])+" ",1),t.disabled?i("v-if",!0):(n(),r("span",{key:0,class:e.classList.tagRemove,onMousedown:o((t=>e.handleTagRemove(u,t)),["prevent"])},[f("span",{class:e.classList.tagRemoveIcon},null,2)],42,["onMousedown"]))],2))])))),256)),f("div",{class:e.classList.tagsSearchWrapper},[i(" Used for measuring search width "),f("span",{class:e.classList.tagsSearchCopy},d(e.search),3),i(" Actual search input "),t.searchable&&!t.disabled?(n(),r("input",{key:0,type:t.inputType,modelValue:e.search,value:e.search,class:e.classList.tagsSearch,autocomplete:t.autocomplete,onInput:u[3]||(u[3]=(...u)=>e.handleSearchInput&&e.handleSearchInput(...u)),onPaste:u[4]||(u[4]=o(((...u)=>e.handlePaste&&e.handlePaste(...u)),["stop"])),ref:"input"},null,42,["type","modelValue","value","autocomplete"])):i("v-if",!0)],2)],2)):i("v-if",!0),i(" Single label "),"single"==t.mode&&e.hasSelected&&!e.search&&e.iv?v(e.$slots,"singlelabel",{key:2,value:e.iv},(()=>[f("div",{class:e.classList.singleLabel},d(e.iv[t.label]),3)])):i("v-if",!0),i(" Multiple label "),"multiple"==t.mode&&e.hasSelected&&!e.search?v(e.$slots,"multiplelabel",{key:3,values:e.iv},(()=>[f("div",{class:e.classList.multipleLabel},d(e.multipleLabelText),3)])):i("v-if",!0),i(" Placeholder "),!t.placeholder||e.hasSelected||e.search?i("v-if",!0):v(e.$slots,"placeholder",{key:4},(()=>[f("div",{class:e.classList.placeholder},d(t.placeholder),3)])),i(" Spinner "),e.busy?v(e.$slots,"spinner",{key:5},(()=>[f("span",{class:e.classList.spinner},null,2)])):i("v-if",!0),i(" Clear "),e.hasSelected&&!t.disabled&&t.canClear&&!e.busy?v(e.$slots,"clear",{key:6,clear:e.clear},(()=>[f("span",{class:e.classList.clear,onMousedown:u[5]||(u[5]=(...u)=>e.clear&&e.clear(...u))},[f("span",{class:e.classList.clearIcon},null,2)],34)])):i("v-if",!0),i(" Caret "),t.caret?v(e.$slots,"caret",{key:7},(()=>[f("span",{class:e.classList.caret,onClick:u[6]||(u[6]=(...u)=>e.handleCaretClick&&e.handleCaretClick(...u))},null,2)])):i("v-if",!0),i(" Options "),f("div",{class:e.classList.dropdown,tabindex:"-1"},[v(e.$slots,"beforelist",{options:e.fo}),f("ul",{class:e.classList.options},[t.groups?(n(!0),r(s,{key:0},c(e.fg,((u,a,l)=>(n(),r("li",{class:e.classList.group,key:l},[f("div",{class:e.classList.groupLabel(u),"data-pointed":e.isPointed(u),onMouseenter:t=>e.setPointer(u),onClick:t=>e.handleGroupClick(u)},[v(e.$slots,"grouplabel",{group:u},(()=>[f("span",null,d(u[t.groupLabel]),1)]))],42,["data-pointed","onMouseenter","onClick"]),f("ul",{class:e.classList.groupOptions},[(n(!0),r(s,null,c(u.__VISIBLE__,((a,l,i)=>(n(),r("li",{class:e.classList.option(a,u),key:i,"data-pointed":e.isPointed(a),onMouseenter:u=>e.setPointer(a),onClick:u=>e.handleOptionClick(a)},[v(e.$slots,"option",{option:a,search:e.search},(()=>[f("span",null,d(a[t.label]),1)]))],42,["data-pointed","onMouseenter","onClick"])))),128))],2)],2)))),128)):(n(!0),r(s,{key:1},c(e.fo,((u,a,l)=>(n(),r("li",{class:e.classList.option(u),key:l,"data-pointed":e.isPointed(u),onMouseenter:t=>e.setPointer(u),onClick:t=>e.handleOptionClick(u)},[v(e.$slots,"option",{option:u,search:e.search,isMax:e.isMax},(()=>[u.newTag&&!u.created?(n(),r(s,{key:0},[e.isMax()?(n(),r("span",{key:0,class:e.classList.tagError},d(t.tagErrorMessage||`Can only add ${t.max} tag(s) at most.`),3)):(n(),r(s,{key:1},[k,f("span",{class:e.classList.tagSearch},d(u[t.label]),3)],64))],64)):(n(),r("span",w,d(u[t.label]),1))]))],42,["data-pointed","onMouseenter","onClick"])))),128))],2),e.noOptions?v(e.$slots,"nooptions",{key:0},(()=>[f("div",{class:e.classList.noOptions,innerHTML:t.noOptionsText},null,10,["innerHTML"])])):i("v-if",!0),e.noResults?v(e.$slots,"noresults",{key:1},(()=>[f("div",{class:e.classList.noResults,innerHTML:t.noResultsText},null,10,["innerHTML"])])):i("v-if",!0),v(e.$slots,"afterlist",{options:e.fo})],2),i(" Hacky input element to show HTML5 required warning "),t.required?(n(),r("input",{key:8,class:e.classList.fakeInput,tabindex:"-1",value:e.textValue,required:""},null,10,["value"])):i("v-if",!0),i(" Native input support "),t.nativeSupport?(n(),r(s,{key:9},["single"==t.mode?(n(),r("input",{key:0,type:"hidden",name:t.name,value:void 0!==e.plainValue?e.plainValue:""},null,8,["name","value"])):(n(!0),r(s,{key:1},c(e.plainValue,((e,u)=>(n(),r("input",{type:"hidden",name:`${t.name}[]`,value:e,key:u},null,8,["name","value"])))),128))],64)):i("v-if",!0),i(" Create height for empty input "),f("div",{class:e.classList.spacer},null,2)],42,["tabindex","id"])},L.__file="src/Multiselect.vue";export default L;
