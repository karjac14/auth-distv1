var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire7c63;e.register("ia0bJ",(function(t,r){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(e("acw62")),o=e("eRsTE"),a=e("9PnFD");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P="YT",w=/list=([a-zA-Z0-9_-]+)/,O=/user\/([a-zA-Z0-9_-]+)\/?/,j=/youtube-nocookie\.com/,S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,r,i,l=b(u);function u(){var e;y(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return g(v(e=l.call.apply(l,[this].concat(r))),"callPlayer",o.callPlayer),g(v(e),"parsePlaylist",(function(t){return t instanceof Array?{listType:"playlist",playlist:t.map(e.getID).join(",")}:w.test(t)?{listType:"playlist",list:s(t.match(w),2)[1]}:O.test(t)?{listType:"user_uploads",list:s(t.match(O),2)[1]}:{}})),g(v(e),"onStateChange",(function(t){var r=t.data,n=e.props,o=n.onPlay,a=n.onPause,i=n.onBuffer,l=n.onBufferEnd,u=n.onEnded,c=n.onReady,s=n.loop,f=n.config,y=f.playerVars,p=f.onUnstarted,d=window[P].PlayerState,b=d.UNSTARTED,h=d.PLAYING,v=d.PAUSED,m=d.BUFFERING,g=d.ENDED,w=d.CUED;if(r===b&&p(),r===h&&(o(),l()),r===v&&a(),r===m&&i(),r===g){var O=!!e.callPlayer("getPlaylist");s&&!O&&(y.start?e.seekTo(y.start):e.play()),u()}r===w&&c()})),g(v(e),"mute",(function(){e.callPlayer("mute")})),g(v(e),"unmute",(function(){e.callPlayer("unMute")})),g(v(e),"ref",(function(t){e.container=t})),e}return t=u,(r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"getID",value:function(e){return!e||e instanceof Array?null:e.match(a.MATCH_URL_YOUTUBE)[1]}},{key:"load",value:function(e,t){var r=this,n=this.props,a=n.playing,i=n.muted,l=n.playsinline,u=n.controls,s=n.loop,f=n.config,y=n.onError,p=f.playerVars,d=f.embedOptions,b=this.getID(e);if(t)return w.test(e)||O.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:b,startSeconds:(0,o.parseStartTime)(e)||p.start,endSeconds:(0,o.parseEndTime)(e)||p.end});(0,o.getSDK)("https://www.youtube.com/iframe_api",P,"onYouTubeIframeAPIReady",(function(e){return e.loaded})).then((function(t){r.container&&(r.player=new t.Player(r.container,c({width:"100%",height:"100%",videoId:b,playerVars:c(c({autoplay:a?1:0,mute:i?1:0,controls:u?1:0,start:(0,o.parseStartTime)(e),end:(0,o.parseEndTime)(e),origin:window.location.origin,playsinline:l?1:0},r.parsePlaylist(e)),p),events:{onReady:function(){s&&r.player.setLoop(!0),r.props.onReady()},onStateChange:r.onStateChange,onError:function(e){return y(e.data)}},host:j.test(e)?"https://www.youtube-nocookie.com":void 0},d)))}),y)}},{key:"play",value:function(){this.callPlayer("playVideo")}},{key:"pause",value:function(){this.callPlayer("pauseVideo")}},{key:"stop",value:function(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function(e){this.callPlayer("seekTo",e),this.props.playing||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return n.default.createElement("div",{style:e},n.default.createElement("div",{ref:this.ref}))}}])&&p(t.prototype,r),i&&p(t,i),u}(n.Component);t.exports.default=S,g(S,"displayName","YouTube"),g(S,"canPlay",a.canPlay.youtube)}));
//# sourceMappingURL=YouTube.5bfeda01.js.map