!function(t){var n={};function __webpack_require__(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}__webpack_require__.m=t,__webpack_require__.c=n,__webpack_require__.d=function(e,r,t){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(r,e){if(1&e&&(r=__webpack_require__(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(__webpack_require__.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)__webpack_require__.d(t,n,function(e){return r[e]}.bind(null,n));return t},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,r,t){e.exports=t(1)},function(e,r){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var _,u,t;window,_=window.angular,(t=_.module("MivaRequests",[])).config(["$sceDelegateProvider",function(e){e.resourceUrlWhitelist(["self"])}]),t.factory("MivaRequests",["$http",function(i){var a=this;return a.pageConfig={method:"GET",url:u,params:{},headers:{"Content-Type":"application/json"},cache:!0},a.clientsideConfig={method:"GET",url:u,params:{Session_Type:"runtime",Store_Code:u,Function:u},headers:{"Content-Type":"application/json"},cache:!0},a.page=function(e,r,t,n){if(e===u)throw new Error("Missing `verb` parameter.");if(a.pageConfig.url===u)throw new Error("Missing `url` dependency.");var o=_.copy(a.pageConfig);return o.method="string"==typeof t?t:o.method,o.data=n,o.params.Verb=e,o.params=_.extend(o.params,r),i(o).then(function(e){if(e&&e.data)return e.data},function(e){throw e.status+" : "+e.data})},a.clientside=function(e,r,t,n){if(e===u)throw new Error("Missing `func` parameter.");if(a.clientsideConfig.params.Store_Code===u)throw new Error("Missing `Store_Code` dependency.");var o=_.copy(a.clientsideConfig);return o.method="string"==typeof t?t:o.method,o.data=n,o.params.Function=e,o.params=_.extend(o.params,r),i(o).then(function(e){if(e&&e.data&&e&&e.data)return e.data},function(e){throw e.status+" : "+e.data})},a.init=function(e,r){if("string"!=typeof e)throw new TypeError('[MivaRequests] - "endpoint" is not a string');if("object"!=_typeof(r))throw new TypeError('[MivaRequests] - "options" is not an object');if("page"==e){if(r.pageUrl===u)throw new Error("[MivaRequests] - Missing `pageUrl` option");a.pageConfig.url=r.pageUrl}else if("clientside"==e){if(r.jsonUrl===u)throw new Error("[MivaRequests] - Missing `jsonUrl` option");if(r.storeCode===u)throw new Error("[MivaRequests] - Missing `storeCode` option");a.clientsideConfig.url=r.jsonUrl,a.clientsideConfig.params.Store_Code=r.storeCode}},a}])}]);
//# sourceMappingURL=angular-miva-requests.js.map