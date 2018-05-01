/* Office JavaScript API library */
/* Version: 16.0.9220.1000 */
/*
	Copyright (c) Microsoft Corporation.  All rights reserved.
*/


/*
	Your use of this file is governed by the Microsoft Services Agreement http://go.microsoft.com/fwlink/?LinkId=266419.
*/

var OSF=OSF||{};OSF.HostSpecificFileVersionDefault="16.00";OSF.HostSpecificFileVersionMap={access:{web:"16.00"},agavito:{winrt:"16.00"},excel:{ios:"16.00",mac:"16.00",web:"16.00",win32:"16.01",winrt:"16.00"},onenote:{web:"16.00",win32:"16.00",winrt:"16.00"},outlook:{ios:"16.00",mac:"16.00",web:"16.01",win32:"16.02"},powerpoint:{ios:"16.00",mac:"16.00",web:"16.00",win32:"16.01",winrt:"16.00"},project:{win32:"16.00"},sway:{web:"16.00"},word:{ios:"16.00",mac:"16.00",web:"16.00",win32:"16.01",winrt:"16.00"}};OSF.SupportedLocales={"ar-sa":true,"bg-bg":true,"bn-in":true,"ca-es":true,"cs-cz":true,"da-dk":true,"de-de":true,"el-gr":true,"en-us":true,"es-es":true,"et-ee":true,"eu-es":true,"fa-ir":true,"fi-fi":true,"fr-fr":true,"gl-es":true,"he-il":true,"hi-in":true,"hr-hr":true,"hu-hu":true,"id-id":true,"it-it":true,"ja-jp":true,"kk-kz":true,"ko-kr":true,"lt-lt":true,"lv-lv":true,"ms-my":true,"nb-no":true,"nl-nl":true,"nn-no":true,"pl-pl":true,"pt-br":true,"pt-pt":true,"ro-ro":true,"ru-ru":true,"sk-sk":true,"sl-si":true,"sr-cyrl-cs":true,"sr-cyrl-rs":true,"sr-latn-cs":true,"sr-latn-rs":true,"sv-se":true,"th-th":true,"tr-tr":true,"uk-ua":true,"ur-pk":true,"vi-vn":true,"zh-cn":true,"zh-tw":true};OSF.AssociatedLocales={ar:"ar-sa",bg:"bg-bg",bn:"bn-in",ca:"ca-es",cs:"cs-cz",da:"da-dk",de:"de-de",el:"el-gr",en:"en-us",es:"es-es",et:"et-ee",eu:"eu-es",fa:"fa-ir",fi:"fi-fi",fr:"fr-fr",gl:"gl-es",he:"he-il",hi:"hi-in",hr:"hr-hr",hu:"hu-hu",id:"id-id",it:"it-it",ja:"ja-jp",kk:"kk-kz",ko:"ko-kr",lt:"lt-lt",lv:"lv-lv",ms:"ms-my",nb:"nb-no",nl:"nl-nl",nn:"nn-no",pl:"pl-pl",pt:"pt-br",ro:"ro-ro",ru:"ru-ru",sk:"sk-sk",sl:"sl-si",sr:"sr-cyrl-cs",sv:"sv-se",th:"th-th",tr:"tr-tr",uk:"uk-ua",ur:"ur-pk",vi:"vi-vn",zh:"zh-cn"};OSF.getSupportedLocale=function(a,c){if(c===void 0)c="en-us";if(!a)return c;var b;a=a.toLowerCase();if(a in OSF.SupportedLocales)b=a;else{var d=a.split("-",1);if(d&&d.length>0)b=OSF.AssociatedLocales[d[0]]}if(!b)b=c;return b};var ScriptLoading;(function(e){var a=false,b=function(){function b(g,e,d,f,c){var b=this;b.url=g;b.isReady=e;b.hasStarted=d;b.timer=f;b.hasError=a;b.pendingCallbacks=[];b.pendingCallbacks.push(c)}return b}(),d=function(){function a(c,b,a){this.scriptId=c;this.startTime=b;this.msResponseTime=a}return a}(),c=function(){var c=true,e=null;function f(){var a=this;a.defaultScriptLoadingTimeout=1e4;a.loadedScriptByIds={};a.scriptTelemetryBuffer=[];a.osfControlAppCorrelationId="";a.basePath=e;a.constantNames={OfficeJS:"office.js",OfficeDebugJS:"office.debug.js"}}f.prototype.isScriptLoading=function(a){return !!(this.loadedScriptByIds[a]&&this.loadedScriptByIds[a].hasStarted)};f.prototype.getOfficeJsBasePath=function(){var a=this;if(a.basePath)return a.basePath;else{for(var g=function(b,c){var d,a,e;e=b.toLowerCase();a=e.indexOf(c);if(a>=0&&a===b.length-c.length&&(a===0||b.charAt(a-1)==="/"||b.charAt(a-1)==="\\"))d=b.substring(0,a);else if(a>=0&&a<b.length-c.length&&b.charAt(a+c.length)==="?"&&(a===0||b.charAt(a-1)==="/"||b.charAt(a-1)==="\\"))d=b.substring(0,a);return d},d=document.getElementsByTagName("script"),h=d.length,e=[a.constantNames.OfficeJS,a.constantNames.OfficeDebugJS],f=e.length,c,b=0;!a.basePath&&b<h;b++)if(d[b].src)for(c=0;!a.basePath&&c<f;c++)a.basePath=g(d[b].src,e[c]);return a.basePath}};f.prototype.loadScript=function(e,d,c,a,b){this.loadScriptInternal(e,d,c,a,b)};f.prototype.loadScriptParallel=function(d,c,b){this.loadScriptInternal(d,c,e,a,b)};f.prototype.waitForFunction=function(g,e,h,i){var b=h,f,d=function(){b--;if(g()){e(c);return}else if(b>0){f=window.setTimeout(d,i);b--}else{window.clearTimeout(f);e(a)}};d()};f.prototype.waitForScripts=function(b,e){var f=this;if(this.invokeCallbackIfScriptsReady(b,e)==a)for(var c=0;c<b.length;c++){var g=b[c],d=this.loadedScriptByIds[g];d&&d.pendingCallbacks.push(function(){f.invokeCallbackIfScriptsReady(b,e)})}};f.prototype.logScriptLoading=function(c,a,b){a=Math.floor(a);if(OSF.AppTelemetry&&OSF.AppTelemetry.onScriptDone)if(OSF.AppTelemetry.onScriptDone.length==3)OSF.AppTelemetry.onScriptDone(c,a,b);else OSF.AppTelemetry.onScriptDone(c,a,b,this.osfControlAppCorrelationId);else{var e=new d(c,a,b);this.scriptTelemetryBuffer.push(e)}};f.prototype.setAppCorrelationId=function(a){this.osfControlAppCorrelationId=a};f.prototype.invokeCallbackIfScriptsReady=function(h,j){for(var g=a,f=0;f<h.length;f++){var i=h[f],d=this.loadedScriptByIds[i];if(!d){d=new b("",a,a,e,e);this.loadedScriptByIds[i]=d}if(d.isReady==a)return a;else if(d.hasError)g=c}j(!g);return c};f.prototype.getScriptEntryByUrl=function(c){for(var b in this.loadedScriptByIds){var a=this.loadedScriptByIds[b];if(this.loadedScriptByIds.hasOwnProperty(b)&&a.url===c)return a}return e};f.prototype.loadScriptInternal=function(h,g,i,n,k){var j=this;if(h){var q=j,r=window.document,d=g&&j.loadedScriptByIds[g]?j.loadedScriptByIds[g]:j.getScriptEntryByUrl(h);if(!d||d.hasError||d.url.toLowerCase()!=h.toLowerCase()){var f=r.createElement("script");f.type="text/javascript";if(g)f.id=g;if(!d){d=new b(h,a,a,e,e);j.loadedScriptByIds[g?g:h]=d}else{d.url=h;d.hasError=a;d.isReady=a}if(i)if(n)d.pendingCallbacks.unshift(i);else d.pendingCallbacks.push(i);var l=-1;if(window.performance&&window.performance.now)l=window.performance.now();var s=(new Date).getTime(),o=function(b){if(g){var a=(new Date).getTime()-s;if(!b)a=-a;q.logScriptLoading(g,l,a)}q.flushTelemetryBuffer()},m=function(){var b="undefined";if(OSF._OfficeAppFactory.getHostInfo().hostType=="onenote"&&typeof OSF.AppTelemetry!==b&&typeof OSF.AppTelemetry.enableTelemetry!==b)OSF.AppTelemetry.enableTelemetry=a;if(!OSF._OfficeAppFactory.getLoggingAllowed()&&typeof OSF.AppTelemetry!==b)OSF.AppTelemetry.enableTelemetry=a;o(c);d.isReady=c;if(d.timer!=e){clearTimeout(d.timer);delete d.timer}for(var h=d.pendingCallbacks.length,g=0;g<h;g++){var f=d.pendingCallbacks.shift();if(f){var i=f(c);if(i===a)break}}},p=function(){o(a);d.hasError=c;d.isReady=c;if(d.timer!=e){clearTimeout(d.timer);delete d.timer}for(var g=d.pendingCallbacks.length,f=0;f<g;f++){var b=d.pendingCallbacks.shift();if(b){var h=b(a);if(h===a)break}}};if(f.readyState)f.onreadystatechange=function(){if(f.readyState=="loaded"||f.readyState=="complete"){f.onreadystatechange=e;m()}};else f.onload=m;f.onerror=p;k=k||j.defaultScriptLoadingTimeout;d.timer=setTimeout(p,k);d.hasStarted=c;f.setAttribute("crossOrigin","anonymous");f.src=h;r.getElementsByTagName("head")[0].appendChild(f)}else if(d.isReady)i(c);else if(n)d.pendingCallbacks.unshift(i);else d.pendingCallbacks.push(i)}};f.prototype.flushTelemetryBuffer=function(){var b=this;if(OSF.AppTelemetry&&OSF.AppTelemetry.onScriptDone){for(var c=0;c<b.scriptTelemetryBuffer.length;c++){var a=b.scriptTelemetryBuffer[c];if(OSF.AppTelemetry.onScriptDone.length==3)OSF.AppTelemetry.onScriptDone(a.scriptId,a.startTime,a.msResponseTime);else OSF.AppTelemetry.onScriptDone(a.scriptId,a.startTime,a.msResponseTime,b.osfControlAppCorrelationId)}b.scriptTelemetryBuffer=[]}};return f}();e.LoadScriptHelper=c})(ScriptLoading||(ScriptLoading={}));OSF.ConstantNames={FileVersion:"16.0.9220.1000",OfficeJS:"office.js",OfficeDebugJS:"office.debug.js",DefaultLocale:"en-us",LocaleStringLoadingTimeout:5e3,MicrosoftAjaxId:"MSAJAX",OfficeStringsId:"OFFICESTRINGS",OfficeJsId:"OFFICEJS",HostFileId:"HOST",O15MappingId:"O15Mapping",OfficeStringJS:"office_strings.js",O15InitHelper:"o15apptofilemappingtable.js",SupportedLocales:OSF.SupportedLocales,AssociatedLocales:OSF.AssociatedLocales};OSF.InitializationHelper=function(d,b,f,e,c){var a=this;a._hostInfo=d;a._webAppState=b;a._context=f;a._settings=e;a._hostFacade=c};OSF.InitializationHelper.prototype.saveAndSetDialogInfo=function(){};OSF.InitializationHelper.prototype.getAppContext=function(){};OSF.InitializationHelper.prototype.setAgaveHostCommunication=function(){};OSF.InitializationHelper.prototype.prepareRightBeforeWebExtensionInitialize=function(){};OSF.InitializationHelper.prototype.loadAppSpecificScriptAndCreateOM=function(){};OSF.InitializationHelper.prototype.prepareRightAfterWebExtensionInitialize=function(){};OSF._OfficeAppFactory=function(){var k="_host_Info",b="undefined",f="",c=true,d=false,e=null,l=function(b,a){if(a&&b&&!a[b])a[b]={}};l("Office",window);l("Microsoft",window);l("Office",Microsoft);l("WebExtension",Microsoft.Office);window.Office=Microsoft.Office.WebExtension;var o={},z={},n={},i={id:e,webAppUrl:e,conversationID:e,clientEndPoint:e,wnd:window.parent,focused:d},a={isO15:c,isRichClient:c,hostType:f,hostPlatform:f,hostSpecificFileVersion:f,hostLocale:f,osfControlAppCorrelationId:f,isDialog:d,disableLogging:d},j=c,h={},p=e,g=new ScriptLoading.LoadScriptHelper;window.performance&&window.performance.now&&g.logScriptLoading(OSF.ConstantNames.OfficeJsId,-1,window.performance.now());var t=window.location.hash,s=window.location.search,q=window.name,m=function(g){var c,d=window.location.search;if(d){var b=d.split(g+"=");if(b.length>1){var e=b[1],f=new RegExp("[&#]","g"),a=e.split(f);if(a.length>0)c=a[0]}}return c},x=function(f,g){var b=f.split("."),e=g.split("."),a;for(a in b)if(parseInt(b[a])<parseInt(e[a]))return d;else if(parseInt(b[a])>parseInt(e[a]))return c;return d},v=function(){var b="15.30.1128.0",a=window.external.GetContext().GetHostFullVersion();return !!x(b,a)},r=function(){j=c;try{if(a.disableLogging){j=d;return}window.external=window.external||{};if(typeof window.external.GetLoggingAllowed===b)j=c;else j=window.external.GetLoggingAllowed()}catch(e){}},w=function(){var i="hostInfoValue",n="isDialog",p=k,h=m(p);if(!h)try{var s=JSON.parse(q);h=s?s["hostInfo"]:e}catch(t){}if(!h)try{window.external=window.external||{};if(typeof agaveHost!==b&&agaveHost.GetHostInfo)window.external.GetHostInfo=function(){return agaveHost.GetHostInfo()};var l=window.external.GetHostInfo();if(l==n){a.isO15=c;a.isDialog=c}else if(l.toLowerCase().indexOf("mac")!==-1&&l.toLowerCase().indexOf("outlook")!==-1&&v())a.isO15=c;else{var r=l.split(p+"=");if(r.length>1)h=r[1];else h=l}}catch(t){}var w=function(){var a=e;try{if(window.sessionStorage)a=window.sessionStorage}catch(b){}return a},j=w();if(!h&&j&&j.getItem(i))h=j.getItem(i);if(h){h=decodeURIComponent(h);a.isO15=d;var g=h.split("$");if(typeof g[2]==b)g=h.split("|");a.hostType=typeof g[0]==b?f:g[0].toLowerCase();a.hostPlatform=typeof g[1]==b?f:g[1].toLowerCase();a.hostSpecificFileVersion=typeof g[2]==b?f:g[2].toLowerCase();a.hostLocale=typeof g[3]==b?f:g[3].toLowerCase();a.osfControlAppCorrelationId=typeof g[4]==b?f:g[4];if(a.osfControlAppCorrelationId=="telemetry")a.osfControlAppCorrelationId=f;a.isDialog=typeof g[5]!=b&&g[5]==n?c:d;a.disableLogging=typeof g[6]!=b&&g[6]=="disableLogging"?c:d;var u=parseFloat(a.hostSpecificFileVersion),o=OSF.HostSpecificFileVersionDefault;if(OSF.HostSpecificFileVersionMap[a.hostType]&&OSF.HostSpecificFileVersionMap[a.hostType][a.hostPlatform])o=OSF.HostSpecificFileVersionMap[a.hostType][a.hostPlatform];if(u>parseFloat(o))a.hostSpecificFileVersion=o;if(j)try{j.setItem(i,h)}catch(x){}}else{a.isO15=c;a.hostLocale=m("locale")}},u=function(b,a){OSF.AppTelemetry&&OSF.AppTelemetry.logAppCommonMessage&&OSF.AppTelemetry.logAppCommonMessage("getAppContextAsync starts");h.getAppContext(b,a)},y=function(){w();r();if(a.hostPlatform=="web"&&a.isDialog&&window==window.top&&window.opener==e){window.open(f,"_self",f);window.close()}g.setAppCorrelationId(a.osfControlAppCorrelationId);var j=g.getOfficeJsBasePath(),A=d;if(!j)throw"Office Web Extension script library file name should be "+OSF.ConstantNames.OfficeJS+" or "+OSF.ConstantNames.OfficeDebugJS+".";var l=function(){var a="function";if(typeof Sys!==b&&typeof Type!==b&&Sys.StringBuilder&&typeof Sys.StringBuilder===a&&Type.registerNamespace&&typeof Type.registerNamespace===a&&Type.registerClass&&typeof Type.registerClass===a||typeof OfficeExt!==b&&OfficeExt.MsAjaxError)return c;else return d},q=e,v=function(f){var a=d,e=function(){if(typeof Strings==b||typeof Strings.OfficeOM==b)if(!a){a=c;var h=j+OSF.ConstantNames.DefaultLocale+"/"+OSF.ConstantNames.OfficeStringJS;g.loadScript(h,OSF.ConstantNames.OfficeStringsId,e,c,OSF.ConstantNames.LocaleStringLoadingTimeout);return d}else throw"Neither the locale, "+f.toLowerCase()+", provided by the host app nor the fallback locale "+OSF.ConstantNames.DefaultLocale+" are supported.";else{a=d;q=Strings.OfficeOM}};if(!l()){window.Type=Function;Type.registerNamespace=function(a){window[a]=window[a]||{}};Type.prototype.registerClass=function(a){a={}}}var h=j+OSF.getSupportedLocale(f,OSF.ConstantNames.DefaultLocale)+"/"+OSF.ConstantNames.OfficeStringJS;g.loadScript(h,OSF.ConstantNames.OfficeStringsId,e,c,OSF.ConstantNames.LocaleStringLoadingTimeout)},s=function(c){if(c){h=new OSF.InitializationHelper(a,i,o,z,n);a.hostPlatform=="web"&&h.saveAndSetDialogInfo&&h.saveAndSetDialogInfo(m(k));h.setAgaveHostCommunication();u(i.wnd,function(b){OSF.AppTelemetry&&OSF.AppTelemetry.logAppCommonMessage&&OSF.AppTelemetry.logAppCommonMessage("getAppContextAsync callback start");p=b._appInstanceId;var c=function(){var c=a.hostSpecificFileVersion.split(".");if(b.get_appMinorVersion){var d=a.hostPlatform=="ios";if(!d)if(isNaN(b.get_appMinorVersion()))b._appMinorVersion=parseInt(c[1]);else if(c.length>1&&!isNaN(Number(c[1])))b._appMinorVersion=parseInt(c[1])}if(a.isDialog)b._isDialog=a.isDialog};c();var d=function(){h.prepareApiSurface&&h.prepareApiSurface(b);g.waitForFunction(function(){return Microsoft.Office.WebExtension.initialize!=undefined},function(a){if(a){if(h.prepareApiSurface)Microsoft.Office.WebExtension.initialize(h.getInitializationReason(b));else h.prepareRightBeforeWebExtensionInitialize(b);h.prepareRightAfterWebExtensionInitialize&&h.prepareRightAfterWebExtensionInitialize()}else throw"Office.js has not been fully loaded yet. Please try again later or make sure to add your initialization code on the Office.initialize function."},400,50)};!g.isScriptLoading(OSF.ConstantNames.OfficeStringsId)&&v(b.get_appUILocale());g.waitForScripts([OSF.ConstantNames.OfficeStringsId],function(){if(q&&!Strings.OfficeOM)Strings.OfficeOM=q;h.loadAppSpecificScriptAndCreateOM(b,d,j)})})}else{var b="MicrosoftAjax.js is not loaded successfully.";OSF.AppTelemetry&&OSF.AppTelemetry.logAppException&&OSF.AppTelemetry.logAppException(b);throw b}},x=function(){OSF.AppTelemetry&&OSF.AppTelemetry.setOsfControlAppCorrelationId&&OSF.AppTelemetry.setOsfControlAppCorrelationId(a.osfControlAppCorrelationId);if(g.isScriptLoading(OSF.ConstantNames.MicrosoftAjaxId))g.waitForScripts([OSF.ConstantNames.MicrosoftAjaxId],s);else g.waitForFunction(l,s,500,100)};if(a.isO15)g.loadScript(j+OSF.ConstantNames.O15InitHelper,OSF.ConstantNames.O15MappingId,x);else{var t;t=a.hostType+"-"+a.hostPlatform+"-"+a.hostSpecificFileVersion+".js";g.loadScript(j+t.toLowerCase(),OSF.ConstantNames.HostFileId,x)}a.hostLocale&&v(a.hostLocale);if(A&&!l()){var B=(window.location.protocol.toLowerCase()==="https:"?"https:":"http:")+"//ajax.aspnetcdn.com/ajax/3.5/MicrosoftAjax.js";g.loadScriptParallel(B,OSF.ConstantNames.MicrosoftAjaxId)}window.confirm=function(){throw"Function window.confirm is not supported.";return d};window.alert=function(){throw"Function window.alert is not supported."};window.prompt=function(){throw"Function window.prompt is not supported.";return e};var y=a.hostType=="outlook"&&a.hostPlatform=="android";if(!y){window.history.replaceState=e;window.history.pushState=e}};y();return {getId:function(){return i.id},getClientEndPoint:function(){return i.clientEndPoint},getContext:function(){return o},setContext:function(a){o=a},getHostInfo:function(){return a},getLoggingAllowed:function(){return j},getHostFacade:function(){return n},setHostFacade:function(a){n=a},getInitializationHelper:function(){return h},getCachedSessionSettingsKey:function(){return (i.conversationID!=e?i.conversationID:p)+"CachedSessionSettings"},getWebAppState:function(){return i},getWindowLocationHash:function(){return t},getWindowLocationSearch:function(){return s},getLoadScriptHelper:function(){return g},getWindowName:function(){return q}}}()