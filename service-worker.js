"use strict";var precacheConfig=[["/presentation/index.html","1dbc8fec712b0ab4551e409cf602c722"],["/presentation/static/css/main.474bbe44.css","b0df327abb2f12e118bedc647580a9bb"],["/presentation/static/js/main.2e427e90.js","999355b6c022b7e67e0ec497947eff1b"],["/presentation/static/media/btc.deb48a02.svg","deb48a027a5f3dff1ee79a0e67bad459"],["/presentation/static/media/btc1.f298fb07.svg","f298fb075bf2ef24d52c269da55cb432"],["/presentation/static/media/btcmove.3a5f0f99.svg","3a5f0f995a54cea21e594ad1b124a81c"],["/presentation/static/media/dash.bc750c62.svg","bc750c62471b9853b03b2b0a2de5063e"],["/presentation/static/media/din_bold.469fed7f.ttf","469fed7f450ea0963cd1f15e10ad54c3"],["/presentation/static/media/din_light.334bf23d.ttf","334bf23d5a8feace4b70ef02d0abd43e"],["/presentation/static/media/din_regular.0c48d343.ttf","0c48d343f4270a642f2108c18a0a3dfa"],["/presentation/static/media/eos.bb560f6e.svg","bb560f6e762028edd158fa99f88b1557"],["/presentation/static/media/eth.0cc641b9.svg","0cc641b9baa41f49b4b17e86dc1fe4d3"],["/presentation/static/media/ethmove.1362fe0e.svg","1362fe0e00e94549ff251d840dcbea3b"],["/presentation/static/media/hd.b98ffe7e.png","b98ffe7e23c00eb256fdc56489d029cb"],["/presentation/static/media/planet.c3a6867d.svg","c3a6867dcbec889834c9bb416a30912d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/presentation/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});