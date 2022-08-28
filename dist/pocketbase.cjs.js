"use strict";var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}var n=function(){return n=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};function i(t,e,n,i){return new(n||(n=Promise))((function(o,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((i=i.apply(t,e||[])).next())}))}function o(t,e){var n,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}var r,s=function(t){function i(e){var n,o=this;return(o=t.call(this,"ClientResponseError")||this).url="",o.status=0,o.data={},o.isAbort=!1,o.originalError=null,Object.setPrototypeOf(o,i.prototype),e instanceof i||(o.originalError=e),null!==e&&"object"==typeof e&&(o.url="string"==typeof e.url?e.url:"",o.status="number"==typeof e.status?e.status:0,o.data=null!==e.data&&"object"==typeof e.data?e.data:{}),"undefined"!=typeof DOMException&&e instanceof DOMException&&(o.isAbort=!0),o.name="ClientResponseError "+o.status,o.message=(null===(n=o.data)||void 0===n?void 0:n.message)||"Something went wrong while processing your request.",o}return e(i,t),i.prototype.toJSON=function(){return n({},this)},i}(Error),a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function u(t,e,n){var i=Object.assign({},n||{}),o=i.encode||c;if(!a.test(t))throw new TypeError("argument name is invalid");var r=o(e);if(r&&!a.test(r))throw new TypeError("argument val is invalid");var s=t+"="+r;if(null!=i.maxAge){var u=i.maxAge-0;if(isNaN(u)||!isFinite(u))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(u)}if(i.domain){if(!a.test(i.domain))throw new TypeError("option domain is invalid");s+="; Domain="+i.domain}if(i.path){if(!a.test(i.path))throw new TypeError("option path is invalid");s+="; Path="+i.path}if(i.expires){if(!function(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}(i.expires)||isNaN(i.expires.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(s+="; HttpOnly"),i.secure&&(s+="; Secure"),i.priority)switch("string"==typeof i.priority?i.priority.toLowerCase():i.priority){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s}function l(t){return-1!==t.indexOf("%")?decodeURIComponent(t):t}function c(t){return encodeURIComponent(t)}function d(t){if(t)try{var e=decodeURIComponent(r(t.split(".")[1]).split("").map((function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(e)||{}}catch(t){}return{}}r="function"==typeof atob?atob:function(t){return Buffer.from(t,"base64").toString("binary")};var h=function(){function t(t){void 0===t&&(t={}),this.load(t||{})}return t.prototype.load=function(t){this.id=void 0!==t.id?t.id:"",this.created=void 0!==t.created?t.created:"",this.updated=void 0!==t.updated?t.updated:""},Object.defineProperty(t.prototype,"isNew",{get:function(){return!this.id||"00000000-0000-0000-0000-000000000000"===this.id},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new this.constructor(JSON.parse(JSON.stringify(this)))},t.prototype.export=function(){return Object.assign({},this)},t}(),p=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.load=function(e){t.prototype.load.call(this,e);for(var n=0,i=Object.entries(e);n<i.length;n++){var o=i[n],r=o[0],s=o[1];this[r]=s}this["@collectionId"]=void 0!==e["@collectionId"]?e["@collectionId"]:"",this["@collectionName"]=void 0!==e["@collectionName"]?e["@collectionName"]:"",this["@expand"]=void 0!==e["@expand"]?e["@expand"]:{}},n}(h),f=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.load=function(e){t.prototype.load.call(this,e),this.email="string"==typeof e.email?e.email:"",this.verified=!!e.verified,this.lastResetSentAt="string"==typeof e.lastResetSentAt?e.lastResetSentAt:"",this.lastVerificationSentAt="string"==typeof e.lastVerificationSentAt?e.lastVerificationSentAt:"",this.profile=e.profile?new p(e.profile):null},n}(h),v=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.load=function(e){t.prototype.load.call(this,e),this.avatar="number"==typeof e.avatar?e.avatar:0,this.email="string"==typeof e.email?e.email:"",this.lastResetSentAt="string"==typeof e.lastResetSentAt?e.lastResetSentAt:""},n}(h),y=function(t){function n(e){void 0===e&&(e="pocketbase_auth");var n=t.call(this)||this;return n.storageFallback={},n.storageKey=e,n}return e(n,t),Object.defineProperty(n.prototype,"token",{get:function(){return(this._storageGet(this.storageKey)||{}).token||""},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"model",{get:function(){var t,e=this._storageGet(this.storageKey)||{};return null===e||"object"!=typeof e||null===e.model||"object"!=typeof e.model?null:void 0!==(null===(t=e.model)||void 0===t?void 0:t.verified)?new f(e.model):new v(e.model)},enumerable:!1,configurable:!0}),n.prototype.save=function(e,n){this._storageSet(this.storageKey,{token:e,model:n}),t.prototype.save.call(this,e,n)},n.prototype.clear=function(){this._storageRemove(this.storageKey),t.prototype.clear.call(this)},n.prototype._storageGet=function(t){var e;if("undefined"!=typeof window&&(null===window||void 0===window?void 0:window.localStorage)){var n=(null===(e=null===window||void 0===window?void 0:window.localStorage)||void 0===e?void 0:e.getItem(t))||"";try{return JSON.parse(n)}catch(t){return n}}return this.storageFallback[t]},n.prototype._storageSet=function(t,e){var n;if("undefined"!=typeof window&&(null===window||void 0===window?void 0:window.localStorage)){var i=e;"string"!=typeof e&&(i=JSON.stringify(e)),null===(n=null===window||void 0===window?void 0:window.localStorage)||void 0===n||n.setItem(t,i)}else this.storageFallback[t]=e},n.prototype._storageRemove=function(t){var e;"undefined"!=typeof window&&(null===(e=null===window||void 0===window?void 0:window.localStorage)||void 0===e||e.removeItem(t)),delete this.storageFallback[t]},n}(function(){function t(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}return Object.defineProperty(t.prototype,"token",{get:function(){return this.baseToken},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"model",{get:function(){return this.baseModel},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isValid",{get:function(){return!function(t,e){void 0===e&&(e=0);var n=d(t);return!(Object.keys(n).length>0&&(!n.exp||n.exp-e>Date.now()/1e3))}(this.token)},enumerable:!1,configurable:!0}),t.prototype.save=function(t,e){this.baseToken=t||"",this.baseModel=null!==e&&"object"==typeof e?"undefined"!==(null==e?void 0:e.verified)?new f(e):new v(e):null,this.triggerChange()},t.prototype.clear=function(){this.baseToken="",this.baseModel=null,this.triggerChange()},t.prototype.loadFromCookie=function(t,e){void 0===e&&(e="pb_auth");var n=function(t,e){var n={};if("string"!=typeof t)return n;for(var i=Object.assign({},e||{}).decode||l,o=0;o<t.length;){var r=t.indexOf("=",o);if(-1===r)break;var s=t.indexOf(";",o);if(-1===s)s=t.length;else if(s<r){o=t.lastIndexOf(";",r-1)+1;continue}var a=t.slice(o,r).trim();if(void 0===n[a]){var u=t.slice(r+1,s).trim();34===u.charCodeAt(0)&&(u=u.slice(1,-1));try{n[a]=i(u)}catch(t){n[a]=u}}o=s+1}return n}(t||"")[e]||"",i={};try{(null===typeof(i=JSON.parse(n))||"object"!=typeof i||Array.isArray(i))&&(i={})}catch(t){}this.save(i.token||"",i.model||{})},t.prototype.exportToCookie=function(t,e){var n,i,o;void 0===e&&(e="pb_auth");var r={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},s=d(this.token);(null==s?void 0:s.exp)?r.expires=new Date(1e3*s.exp):r.expires=new Date("1970-01-01"),t=Object.assign({},r,t);var a={token:this.token,model:(null===(n=this.model)||void 0===n?void 0:n.export())||null},l=u(e,JSON.stringify(a),t),c="undefined"!=typeof Blob?new Blob([l]).size:l.length;return a.model&&c>4096&&(a.model={id:null===(i=null==a?void 0:a.model)||void 0===i?void 0:i.id,email:null===(o=null==a?void 0:a.model)||void 0===o?void 0:o.email},this.model instanceof f&&(a.model.verified=this.model.verified),l=u(e,JSON.stringify(a),t)),l},t.prototype.onChange=function(t){var e=this;return this._onChangeCallbacks.push(t),function(){for(var n=e._onChangeCallbacks.length-1;n>=0;n--)if(e._onChangeCallbacks[n]==t)return delete e._onChangeCallbacks[n],void e._onChangeCallbacks.splice(n,1)}},t.prototype.triggerChange=function(){for(var t=0,e=this._onChangeCallbacks;t<e.length;t++){var n=e[t];n&&n(this.token,this.model)}},t}()),m=function(t){this.client=t},b=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.getAll=function(t){return void 0===t&&(t={}),this.client.send("/api/settings",{method:"GET",params:t}).then((function(t){return t||{}}))},n.prototype.update=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this.client.send("/api/settings",{method:"PATCH",params:e,body:t}).then((function(t){return t||{}}))},n.prototype.testS3=function(t){return void 0===t&&(t={}),this.client.send("/api/settings/test/s3",{method:"POST",params:t}).then((function(){return!0}))},n.prototype.testEmail=function(t,e,n){void 0===n&&(n={});var i={email:t,template:e};return this.client.send("/api/settings/test/email",{method:"POST",params:n,body:i}).then((function(){return!0}))},n}(m),g=function(t,e,n,i,o){this.page=t>0?t:1,this.perPage=e>=0?e:0,this.totalItems=n>=0?n:0,this.totalPages=i>=0?i:0,this.items=o||[]},w=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype._getFullList=function(t,e,n){var r=this;void 0===e&&(e=100),void 0===n&&(n={});var s=[],a=function(u){return i(r,void 0,void 0,(function(){return o(this,(function(i){return[2,this._getList(t,u,e,n).then((function(t){var e=t,n=e.items,i=e.totalItems;return s=s.concat(n),n.length&&i>s.length?a(u+1):s}))]}))}))};return a(1)},n.prototype._getList=function(t,e,n,i){var o=this;return void 0===e&&(e=1),void 0===n&&(n=30),void 0===i&&(i={}),i=Object.assign({page:e,perPage:n},i),this.client.send(t,{method:"GET",params:i}).then((function(t){var e=[];if(null==t?void 0:t.items){t.items=t.items||[];for(var n=0,i=t.items;n<i.length;n++){var r=i[n];e.push(o.decode(r))}}return new g((null==t?void 0:t.page)||1,(null==t?void 0:t.perPage)||0,(null==t?void 0:t.totalItems)||0,(null==t?void 0:t.totalPages)||0,e)}))},n.prototype._getOne=function(t,e,n){var i=this;return void 0===n&&(n={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"GET",params:n}).then((function(t){return i.decode(t)}))},n.prototype._create=function(t,e,n){var i=this;return void 0===e&&(e={}),void 0===n&&(n={}),this.client.send(t,{method:"POST",params:n,body:e}).then((function(t){return i.decode(t)}))},n.prototype._update=function(t,e,n,i){var o=this;return void 0===n&&(n={}),void 0===i&&(i={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"PATCH",params:i,body:n}).then((function(t){return o.decode(t)}))},n.prototype._delete=function(t,e,n){return void 0===n&&(n={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"DELETE",params:n}).then((function(){return!0}))},n}(m),S=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.getFullList=function(t,e){return void 0===t&&(t=100),void 0===e&&(e={}),this._getFullList(this.baseCrudPath(),t,e)},n.prototype.getList=function(t,e,n){return void 0===t&&(t=1),void 0===e&&(e=30),void 0===n&&(n={}),this._getList(this.baseCrudPath(),t,e,n)},n.prototype.getOne=function(t,e){return void 0===e&&(e={}),this._getOne(this.baseCrudPath(),t,e)},n.prototype.create=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this._create(this.baseCrudPath(),t,e)},n.prototype.update=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),this._update(this.baseCrudPath(),t,e,n)},n.prototype.delete=function(t,e){return void 0===e&&(e={}),this._delete(this.baseCrudPath(),t,e)},n}(w),O=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.decode=function(t){return new v(t)},n.prototype.baseCrudPath=function(){return"/api/admins"},n.prototype.authResponse=function(t){var e=this.decode((null==t?void 0:t.admin)||{});return(null==t?void 0:t.token)&&(null==t?void 0:t.admin)&&this.client.authStore.save(t.token,e),Object.assign({},t,{token:(null==t?void 0:t.token)||"",admin:e})},n.prototype.authViaEmail=function(t,e,n,i){return void 0===n&&(n={}),void 0===i&&(i={}),n=Object.assign({email:t,password:e},n),this.client.send(this.baseCrudPath()+"/auth-via-email",{method:"POST",params:i,body:n,headers:{Authorization:""}}).then(this.authResponse.bind(this))},n.prototype.refresh=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this.client.send(this.baseCrudPath()+"/refresh",{method:"POST",params:e,body:t}).then(this.authResponse.bind(this))},n.prototype.requestPasswordReset=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCrudPath()+"/request-password-reset",{method:"POST",params:n,body:e}).then((function(){return!0}))},n.prototype.confirmPasswordReset=function(t,e,n,i,o){return void 0===i&&(i={}),void 0===o&&(o={}),i=Object.assign({token:t,password:e,passwordConfirm:n},i),this.client.send(this.baseCrudPath()+"/confirm-password-reset",{method:"POST",params:o,body:i}).then(this.authResponse.bind(this))},n}(S),C=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.decode=function(t){return new f(t)},n.prototype.baseCrudPath=function(){return"/api/users"},n.prototype.authResponse=function(t){var e=this.decode((null==t?void 0:t.user)||{});return(null==t?void 0:t.token)&&(null==t?void 0:t.user)&&this.client.authStore.save(t.token,e),Object.assign({},t,{token:(null==t?void 0:t.token)||"",user:e})},n.prototype.listAuthMethods=function(t){return void 0===t&&(t={}),this.client.send(this.baseCrudPath()+"/auth-methods",{method:"GET",params:t}).then((function(t){return Object.assign({},t,{emailPassword:!!(null==t?void 0:t.emailPassword),authProviders:Array.isArray(null==t?void 0:t.authProviders)?null==t?void 0:t.authProviders:[]})}))},n.prototype.authViaEmail=function(t,e,n,i){return void 0===n&&(n={}),void 0===i&&(i={}),n=Object.assign({email:t,password:e},n),this.client.send(this.baseCrudPath()+"/auth-via-email",{method:"POST",params:i,body:n,headers:{Authorization:""}}).then(this.authResponse.bind(this))},n.prototype.authViaOAuth2=function(t,e,n,i,o,r){return void 0===o&&(o={}),void 0===r&&(r={}),o=Object.assign({provider:t,code:e,codeVerifier:n,redirectUrl:i},o),this.client.send(this.baseCrudPath()+"/auth-via-oauth2",{method:"POST",params:r,body:o,headers:{Authorization:""}}).then(this.authResponse.bind(this))},n.prototype.refresh=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this.client.send(this.baseCrudPath()+"/refresh",{method:"POST",params:e,body:t}).then(this.authResponse.bind(this))},n.prototype.requestPasswordReset=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCrudPath()+"/request-password-reset",{method:"POST",params:n,body:e}).then((function(){return!0}))},n.prototype.confirmPasswordReset=function(t,e,n,i,o){return void 0===i&&(i={}),void 0===o&&(o={}),i=Object.assign({token:t,password:e,passwordConfirm:n},i),this.client.send(this.baseCrudPath()+"/confirm-password-reset",{method:"POST",params:o,body:i}).then(this.authResponse.bind(this))},n.prototype.requestVerification=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCrudPath()+"/request-verification",{method:"POST",params:n,body:e}).then((function(){return!0}))},n.prototype.confirmVerification=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({token:t},e),this.client.send(this.baseCrudPath()+"/confirm-verification",{method:"POST",params:n,body:e}).then(this.authResponse.bind(this))},n.prototype.requestEmailChange=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({newEmail:t},e),this.client.send(this.baseCrudPath()+"/request-email-change",{method:"POST",params:n,body:e}).then((function(){return!0}))},n.prototype.confirmEmailChange=function(t,e,n,i){return void 0===n&&(n={}),void 0===i&&(i={}),n=Object.assign({token:t,password:e},n),this.client.send(this.baseCrudPath()+"/confirm-email-change",{method:"POST",params:i,body:n}).then(this.authResponse.bind(this))},n}(S),P=function(){function t(t){void 0===t&&(t={}),this.load(t||{})}return t.prototype.load=function(t){this.id=void 0!==t.id?t.id:"",this.name=void 0!==t.name?t.name:"",this.type=void 0!==t.type?t.type:"text",this.system=!!t.system,this.required=!!t.required,this.unique=!!t.unique,this.options="object"==typeof t.options&&null!==t.options?t.options:{}},t}(),j=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.load=function(e){t.prototype.load.call(this,e),this.name="string"==typeof e.name?e.name:"",this.system=!!e.system,this.listRule="string"==typeof e.listRule?e.listRule:null,this.viewRule="string"==typeof e.viewRule?e.viewRule:null,this.createRule="string"==typeof e.createRule?e.createRule:null,this.updateRule="string"==typeof e.updateRule?e.updateRule:null,this.deleteRule="string"==typeof e.deleteRule?e.deleteRule:null,e.schema=Array.isArray(e.schema)?e.schema:[],this.schema=[];for(var n=0,i=e.schema;n<i.length;n++){var o=i[n];this.schema.push(new P(o))}},n}(h),R=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.decode=function(t){return new j(t)},n.prototype.baseCrudPath=function(){return"/api/collections"},n.prototype.import=function(t,e,n){return void 0===e&&(e=!1),void 0===n&&(n={}),i(this,void 0,void 0,(function(){return o(this,(function(i){return[2,this.client.send(this.baseCrudPath()+"/import",{method:"PUT",params:n,body:{collections:t,deleteMissing:e}}).then((function(){return!0}))]}))}))},n}(S),k=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.decode=function(t){return new p(t)},n.prototype.baseCrudPath=function(t){return"/api/collections/"+encodeURIComponent(t)+"/records"},n.prototype.getFileUrl=function(t,e,n){void 0===n&&(n={});var i=[];i.push(this.client.baseUrl.replace(/\/+$/gm,"")),i.push("api"),i.push("files"),i.push(t["@collectionId"]),i.push(t.id),i.push(e);var o=i.join("/");if(Object.keys(n).length){var r=new URLSearchParams(n);o+=(o.includes("?")?"&":"?")+r}return o},n}(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.getFullList=function(t,e,n){return void 0===e&&(e=100),void 0===n&&(n={}),this._getFullList(this.baseCrudPath(t),e,n)},n.prototype.getList=function(t,e,n,i){return void 0===e&&(e=1),void 0===n&&(n=30),void 0===i&&(i={}),this._getList(this.baseCrudPath(t),e,n,i)},n.prototype.getOne=function(t,e,n){return void 0===n&&(n={}),this._getOne(this.baseCrudPath(t),e,n)},n.prototype.create=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),this._create(this.baseCrudPath(t),e,n)},n.prototype.update=function(t,e,n,i){return void 0===n&&(n={}),void 0===i&&(i={}),this._update(this.baseCrudPath(t),e,n,i)},n.prototype.delete=function(t,e,n){return void 0===n&&(n={}),this._delete(this.baseCrudPath(t),e,n)},n}(w)),T=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.load=function(e){t.prototype.load.call(this,e),e.remoteIp=e.remoteIp||e.ip,this.url="string"==typeof e.url?e.url:"",this.method="string"==typeof e.method?e.method:"GET",this.status="number"==typeof e.status?e.status:200,this.auth="string"==typeof e.auth?e.auth:"guest",this.remoteIp="string"==typeof e.remoteIp?e.remoteIp:"",this.userIp="string"==typeof e.userIp?e.userIp:"",this.referer="string"==typeof e.referer?e.referer:"",this.userAgent="string"==typeof e.userAgent?e.userAgent:"",this.meta="object"==typeof e.meta&&null!==e.meta?e.meta:{}},n}(h),E=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.getRequestsList=function(t,e,n){return void 0===t&&(t=1),void 0===e&&(e=30),void 0===n&&(n={}),n=Object.assign({page:t,perPage:e},n),this.client.send("/api/logs/requests",{method:"GET",params:n}).then((function(t){var e=[];if(null==t?void 0:t.items){t.items=(null==t?void 0:t.items)||[];for(var n=0,i=t.items;n<i.length;n++){var o=i[n];e.push(new T(o))}}return new g((null==t?void 0:t.page)||1,(null==t?void 0:t.perPage)||0,(null==t?void 0:t.totalItems)||0,(null==t?void 0:t.totalPages)||0,e)}))},n.prototype.getRequest=function(t,e){return void 0===e&&(e={}),this.client.send("/api/logs/requests/"+encodeURIComponent(t),{method:"GET",params:e}).then((function(t){return new T(t)}))},n.prototype.getRequestsStats=function(t){return void 0===t&&(t={}),this.client.send("/api/logs/requests/stats",{method:"GET",params:t}).then((function(t){return t}))},n}(m),A=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.clientId="",e.eventSource=null,e.subscriptions={},e}return e(n,t),n.prototype.subscribe=function(t,e){var n;return i(this,void 0,void 0,(function(){return o(this,(function(i){switch(i.label){case 0:if(!t)throw new Error("subscription must be set.");return this.subscriptions[t]&&(null===(n=this.eventSource)||void 0===n||n.removeEventListener(t,this.subscriptions[t])),this.subscriptions[t]=function(t){var n,i=t;try{n=JSON.parse(null==i?void 0:i.data)}catch(t){}e(n||{})},this.eventSource?[3,1]:(this.connect(),[3,3]);case 1:return this.clientId?[4,this.submitSubscriptions()]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2]}}))}))},n.prototype.unsubscribe=function(t){var e;return i(this,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:if(t){if(!this.subscriptions[t])return[2];null===(e=this.eventSource)||void 0===e||e.removeEventListener(t,this.subscriptions[t]),delete this.subscriptions[t]}else this.removeSubscriptionListeners(),this.subscriptions={};return this.clientId?[4,this.submitSubscriptions()]:[3,2];case 1:n.sent(),n.label=2;case 2:return Object.keys(this.subscriptions).length||this.disconnect(),[2]}}))}))},n.prototype.submitSubscriptions=function(){return i(this,void 0,void 0,(function(){return o(this,(function(t){return this.addSubscriptionListeners(),[2,this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:Object.keys(this.subscriptions)}}).then((function(){return!0}))]}))}))},n.prototype.addSubscriptionListeners=function(){if(this.eventSource)for(var t in this.removeSubscriptionListeners(),this.subscriptions)this.eventSource.addEventListener(t,this.subscriptions[t])},n.prototype.removeSubscriptionListeners=function(){if(this.eventSource)for(var t in this.subscriptions)this.eventSource.removeEventListener(t,this.subscriptions[t])},n.prototype.connectHandler=function(t){var e=t;this.clientId=null==e?void 0:e.lastEventId,this.submitSubscriptions()},n.prototype.connect=function(){var t=this;this.disconnect(),this.eventSource=new EventSource(this.client.buildUrl("/api/realtime")),this.eventSource.addEventListener("PB_CONNECT",(function(e){return t.connectHandler(e)}))},n.prototype.disconnect=function(){var t,e,n=this;this.removeSubscriptionListeners(),null===(t=this.eventSource)||void 0===t||t.removeEventListener("PB_CONNECT",(function(t){return n.connectHandler(t)})),null===(e=this.eventSource)||void 0===e||e.close(),this.eventSource=null,this.clientId=""},n}(m),_=function(){function t(t,e,n){void 0===t&&(t="/"),void 0===e&&(e="en-US"),this.cancelControllers={},this.baseUrl=t,this.lang=e,this.authStore=n||new y,this.admins=new O(this),this.users=new C(this),this.records=new k(this),this.collections=new R(this),this.logs=new E(this),this.settings=new b(this),this.realtime=new A(this)}return Object.defineProperty(t.prototype,"AuthStore",{get:function(){return this.authStore},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Settings",{get:function(){return this.settings},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Admins",{get:function(){return this.admins},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Users",{get:function(){return this.users},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Collections",{get:function(){return this.collections},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Records",{get:function(){return this.records},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Logs",{get:function(){return this.logs},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Realtime",{get:function(){return this.realtime},enumerable:!1,configurable:!0}),t.prototype.cancelRequest=function(t){return this.cancelControllers[t]&&(this.cancelControllers[t].abort(),delete this.cancelControllers[t]),this},t.prototype.cancelAllRequests=function(){for(var t in this.cancelControllers)this.cancelControllers[t].abort();return this.cancelControllers={},this},t.prototype.send=function(t,e){var n,r,a,u,l,c,d,h,p;return i(this,void 0,void 0,(function(){var f,v,y,m,b,g,w=this;return o(this,(function(S){return(f=Object.assign({method:"GET"},e)).body&&"FormData"!==f.body.constructor.name&&("string"!=typeof f.body&&(f.body=JSON.stringify(f.body)),void 0===(null===(n=null==f?void 0:f.headers)||void 0===n?void 0:n["Content-Type"])&&(f.headers=Object.assign({},f.headers,{"Content-Type":"application/json"}))),void 0===(null===(r=null==f?void 0:f.headers)||void 0===r?void 0:r["Accept-Language"])&&(f.headers=Object.assign({},f.headers,{"Accept-Language":this.lang})),(null===(a=this.authStore)||void 0===a?void 0:a.token)&&void 0===(null===(u=null==f?void 0:f.headers)||void 0===u?void 0:u.Authorization)&&(v="Admin",void 0!==(null===(l=this.authStore.model)||void 0===l?void 0:l.verified)&&(v="User"),f.headers=Object.assign({},f.headers,{Authorization:v+" "+this.authStore.token})),!1!==(null===(c=f.params)||void 0===c?void 0:c.$autoCancel)&&(y=(null===(d=f.params)||void 0===d?void 0:d.$cancelKey)||(f.method||"GET")+t,this.cancelRequest(y),m=new AbortController,this.cancelControllers[y]=m,f.signal=m.signal),null===(h=f.params)||void 0===h||delete h.$autoCancel,null===(p=f.params)||void 0===p||delete p.$cancelKey,b=this.buildUrl(t),void 0!==f.params&&((g=this.serializeQueryParams(f.params))&&(b+=(b.includes("?")?"&":"?")+g),delete f.params),this.beforeSend&&(f=Object.assign({},this.beforeSend(b,f))),[2,fetch(b,f).then((function(t){return i(w,void 0,void 0,(function(){var e;return o(this,(function(n){switch(n.label){case 0:e={},n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t.json()];case 2:return e=n.sent(),[3,4];case 3:return n.sent(),[3,4];case 4:if(this.afterSend&&(e=this.afterSend(t,e)),t.status>=400)throw new s({url:t.url,status:t.status,data:e});return[2,e]}}))}))})).catch((function(t){throw new s(t)}))]}))}))},t.prototype.buildUrl=function(t){var e=this.baseUrl+(this.baseUrl.endsWith("/")?"":"/");return t&&(e+=t.startsWith("/")?t.substring(1):t),e},t.prototype.serializeQueryParams=function(t){var e=[];for(var n in t)if(null!==t[n]){var i=t[n],o=encodeURIComponent(n);if(Array.isArray(i))for(var r=0,s=i;r<s.length;r++){var a=s[r];e.push(o+"="+encodeURIComponent(a))}else i instanceof Date?e.push(o+"="+encodeURIComponent(i.toISOString())):null!==typeof i&&"object"==typeof i?e.push(o+"="+encodeURIComponent(JSON.stringify(i))):e.push(o+"="+encodeURIComponent(i))}return e.join("&")},t}();module.exports=_;
