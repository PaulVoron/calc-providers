parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gA81":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=[{name:"backblaze",color:"red",option:!1,minPayment:7,maxPayment:null,storagePrice1:.005,storageFree1:0,storagePrice2:.005,storageFree2:0,transferPrice1:.01,transferFree1:0,transferPrice2:.01,transferFree2:0},{name:"bunny",color:"orange",option:!1,minPayment:0,maxPayment:10,storagePrice1:.01,storageFree1:0,storagePrice2:.02,storageFree2:0,transferPrice1:.01,transferFree1:0,transferPrice2:.01,transferFree2:0},{name:"scaleway",color:"purple",option:!0,minPayment:0,maxPayment:null,storagePrice1:.06,storageFree1:75,storagePrice2:.03,storageFree2:75,transferPrice1:.02,transferFree1:75,transferPrice2:.02,transferFree2:75},{name:"vultr",color:"blue",option:!1,minPayment:5,maxPayment:null,storagePrice1:.01,storageFree1:0,storagePrice2:.01,storageFree2:0,transferPrice1:.01,transferFree1:0,transferPrice2:.01,transferFree2:0}],r=e;exports.default=r;
},{}],"MFJZ":[function(require,module,exports) {
"use strict";function e(e,r,t){var a=0,n=0,s=0;return e.option?(n=r>e.storageFree2?(r-e.storageFree2)*e.storagePrice2:0,s=t>e.transferFree2?(t-e.transferFree2)*e.transferPrice2:0):(n=r>e.storageFree1?(r-e.storageFree1)*e.storagePrice1:0,s=t>e.transferFree1?(t-e.transferFree1)*e.transferPrice1:0),a=(a=n+s)<e.minPayment?e.minPayment:a,(a=e.maxPayment&&a>e.maxPayment?e.maxPayment:a).toFixed(2)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=e;exports.default=r;
},{}],"KIzB":[function(require,module,exports) {
"use strict";var _companies=_interopRequireDefault(require("../scripts/companies")),_getAmount=_interopRequireDefault(require("../scripts/getAmount"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var storage=0,transfer=0,scale=6,amountsOfAll={},backblaze=document.getElementById("backblazeCosts"),bunny=document.getElementById("bunnyCosts"),scaleway=document.getElementById("scalewayCosts"),vultr=document.getElementById("vultrCosts"),backblazeGraph=document.getElementById("backblazeGraph"),bunnyGraph=document.getElementById("bunnyGraph"),scalewayGraph=document.getElementById("scalewayGraph"),vultrGraph=document.getElementById("vultrGraph"),storageRange=document.getElementById("storageRange"),transferRange=document.getElementById("transferRange"),storageValue=document.getElementById("storageValue"),transferValue=document.getElementById("transferValue"),radioButtonsHddSdd=document.querySelectorAll('input[name="bunny"]'),radioButtonsMultiSingle=document.querySelectorAll('input[name="scaleway"]');function getColor(e){var t=_companies.default.findIndex(function(t){return t.name===e});return _companies.default[t].color}function renderGraph(){_companies.default.forEach(function(e){var t=+(0,_getAmount.default)(e,storage,transfer);amountsOfAll[e.name]=t});var values=Object.values(amountsOfAll),minAmount=Math.min.apply(Math,_toConsumableArray(values));for(var key in amountsOfAll)eval(key).innerText="".concat(amountsOfAll[key],"$"),eval("".concat(key,"Graph")).style.width=Math.trunc(amountsOfAll[key]*scale)+"px",amountsOfAll[key]===minAmount?eval("".concat(key,"Graph")).style.backgroundColor=getColor(key):eval("".concat(key,"Graph")).style.backgroundColor="lightgrey"}radioButtonsMultiSingle[1].checked=!0,radioButtonsHddSdd[0].checked=!0,storageValue.innerText="".concat(storageRange.value," GB"),transferValue.innerText="".concat(transferRange.value," GB");var onChangeRange=function(e){"storageRange"===e.currentTarget.id?(storageValue.innerText="".concat(e.currentTarget.value," GB"),storage=+e.currentTarget.value):(transferValue.innerText="".concat(e.currentTarget.value," GB"),transfer=+e.currentTarget.value),renderGraph()},onChangeButtonHddSdd=function(e){_companies.default[1].option=!!radioButtonsHddSdd[1].checked,renderGraph()},onChangeButtonMultiSingle=function(e){_companies.default[2].option=!!radioButtonsMultiSingle[1].checked,renderGraph()};window.onload=function(e){renderGraph()},storageRange.addEventListener("input",onChangeRange),transferRange.addEventListener("input",onChangeRange),radioButtonsHddSdd.forEach(function(e){e.addEventListener("change",onChangeButtonHddSdd)}),radioButtonsMultiSingle.forEach(function(e){e.addEventListener("change",onChangeButtonMultiSingle)});
},{"../scripts/companies":"gA81","../scripts/getAmount":"MFJZ"}]},{},["KIzB"], null)
//# sourceMappingURL=main.1f0f04af.js.map