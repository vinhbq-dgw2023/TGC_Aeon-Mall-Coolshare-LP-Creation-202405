/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});

/**
 * Swiper 4.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2017 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 28, 2017
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Swiper=t()}(this,function(){"use strict";function e(e,t){var a=[],i=0;if(e&&!t&&e instanceof r)return e;if(e)if("string"==typeof e){var s,n,o=e.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),(n=document.createElement(l)).innerHTML=o,i=0;i<n.childNodes.length;i+=1)a.push(n.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||document).querySelectorAll(e.trim()):[document.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===window||e===document)a.push(e);else if(e.length>0&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new r(a)}function t(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}function a(){var e="onwheel"in d;if(!e){var t=d.createElement("div");t.setAttribute("onwheel","return;"),e="function"==typeof t.onwheel}return!e&&d.implementation&&d.implementation.hasFeature&&!0!==d.implementation.hasFeature("","")&&(e=d.implementation.hasFeature("Events.wheel","3.0")),e}var i,s=i="undefined"==typeof window?{navigator:{userAgent:""},location:{},history:{},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{}},Image:function(){},Date:function(){},screen:{}}:window,r=function(e){for(var t=this,a=0;a<e.length;a+=1)t[a]=e[a];return t.length=e.length,this};e.fn=r.prototype,e.Class=r,e.Dom7=r;"resize scroll".split(" ");var n={addClass:function(e){var t=this;if(void 0===e)return this;for(var a=e.split(" "),i=0;i<a.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==t[s].classList&&t[s].classList.add(a[i]);return this},removeClass:function(e){for(var t=this,a=e.split(" "),i=0;i<a.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==t[s].classList&&t[s].classList.remove(a[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=this,a=e.split(" "),i=0;i<a.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==t[s].classList&&t[s].classList.toggle(a[i]);return this},attr:function(e,t){var a=arguments,i=this;if(1!==arguments.length||"string"!=typeof e){for(var s=0;s<this.length;s+=1)if(2===a.length)i[s].setAttribute(e,t);else for(var r in e)i[s][r]=e[r],i[s].setAttribute(r,e[r]);return this}if(this[0])return this[0].getAttribute(e)},removeAttr:function(e){for(var t=this,a=0;a<this.length;a+=1)t[a].removeAttribute(e);return this},data:function(e,t){var a,i=this;if(void 0!==t){for(var s=0;s<this.length;s+=1)(a=i[s]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var r=a.getAttribute("data-"+e);if(r)return r}},transform:function(e){for(var t=this,a=0;a<this.length;a+=1){var i=t[a].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){var t=this;"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a+=1){var i=t[a].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){function t(t){var a=t.target;if(a){var i=t.target.dom7EventData||[];if(i.unshift(t),e(a).is(o))l.apply(a,i);else for(var s=e(a).parents(),r=0;r<s.length;r+=1)e(s[r]).is(o)&&l.apply(s[r],i)}}function a(e){var t=e&&e.target?e.target.dom7EventData||[]:[];t.unshift(e),l.apply(this,t)}for(var i=this,s=[],r=arguments.length;r--;)s[r]=arguments[r];var n=s[0],o=s[1],l=s[2],d=s[3];if("function"==typeof s[1]){var p;n=(p=s)[0],l=p[1],d=p[2],o=void 0}d||(d=!1);for(var c,u=n.split(" "),h=0;h<this.length;h+=1){var v=i[h];if(o)for(c=0;c<u.length;c+=1)v.dom7LiveListeners||(v.dom7LiveListeners=[]),v.dom7LiveListeners.push({type:n,listener:l,proxyListener:t}),v.addEventListener(u[c],t,d);else for(c=0;c<u.length;c+=1)v.dom7Listeners||(v.dom7Listeners=[]),v.dom7Listeners.push({type:n,listener:l,proxyListener:a}),v.addEventListener(u[c],a,d)}return this},off:function(){for(var e=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];if("function"==typeof t[1]){var o;i=(o=t)[0],r=o[1],n=o[2],s=void 0}n||(n=!1);for(var l=i.split(" "),d=0;d<l.length;d+=1)for(var p=0;p<this.length;p+=1){var c=e[p];if(s){if(c.dom7LiveListeners)for(var u=0;u<c.dom7LiveListeners.length;u+=1)r?c.dom7LiveListeners[u].listener===r&&c.removeEventListener(l[d],c.dom7LiveListeners[u].proxyListener,n):c.dom7LiveListeners[u].type===l[d]&&c.removeEventListener(l[d],c.dom7LiveListeners[u].proxyListener,n)}else if(c.dom7Listeners)for(var h=0;h<c.dom7Listeners.length;h+=1)r?c.dom7Listeners[h].listener===r&&c.removeEventListener(l[d],c.dom7Listeners[h].proxyListener,n):c.dom7Listeners[h].type===l[d]&&c.removeEventListener(l[d],c.dom7Listeners[h].proxyListener,n)}return this},trigger:function(){for(var e=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=t[0].split(" "),s=t[1],r=0;r<i.length;r+=1)for(var n=0;n<this.length;n+=1){var o=void 0;try{o=new window.CustomEvent(i[r],{detail:s,bubbles:!0,cancelable:!0})}catch(e){(o=document.createEvent("Event")).initEvent(i[r],!0,!0),o.detail=s}e[n].dom7EventData=t.filter(function(e,t){return t>0}),e[n].dispatchEvent(o),e[n].dom7EventData=[],delete e[n].dom7EventData}return this},transitionEnd:function(e){function t(r){if(r.target===this)for(e.call(this,r),a=0;a<i.length;a+=1)s.off(i[a],t)}var a,i=["webkitTransitionEnd","transitionend"],s=this;if(e)for(a=0;a<i.length;a+=1)s.on(i[a],t);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var e=this[0],t=e.getBoundingClientRect(),a=document.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===window?window.scrollY:e.scrollTop,n=e===window?window.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a,i=this;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var s in e)i[a].style[s]=e[s];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)i[a].style[e]=t;return this}return this},each:function(e){var t=this;if(!e)return this;for(var a=0;a<this.length;a+=1)if(!1===e.call(t[a],a,t[a]))return t;return this},html:function(e){var t=this;if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a+=1)t[a].innerHTML=e;return this},text:function(e){var t=this;if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a+=1)t[a].textContent=e;return this},is:function(t){var a,i,s=this[0];if(!s||void 0===t)return!1;if("string"==typeof t){if(s.matches)return s.matches(t);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(t);if(s.msMatchesSelector)return s.msMatchesSelector(t);for(a=e(t),i=0;i<a.length;i+=1)if(a[i]===s)return!0;return!1}if(t===document)return s===document;if(t===window)return s===window;if(t.nodeType||t instanceof r){for(a=t.nodeType?[t]:t,i=0;i<a.length;i+=1)if(a[i]===s)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return e>a-1?new r([]):e<0?(t=a+e,new r(t<0?[]:[this[t]])):new r([this[e]])},append:function(){for(var e=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i,s=0;s<t.length;s+=1){i=t[s];for(var n=0;n<this.length;n+=1)if("string"==typeof i){var o=document.createElement("div");for(o.innerHTML=i;o.firstChild;)e[n].appendChild(o.firstChild)}else if(i instanceof r)for(var l=0;l<i.length;l+=1)e[n].appendChild(i[l]);else e[n].appendChild(i)}return this},prepend:function(e){var t,a,i=this;for(t=0;t<this.length;t+=1)if("string"==typeof e){var s=document.createElement("div");for(s.innerHTML=e,a=s.childNodes.length-1;a>=0;a-=1)i[t].insertBefore(s.childNodes[a],i[t].childNodes[0])}else if(e instanceof r)for(a=0;a<e.length;a+=1)i[t].insertBefore(e[a],i[t].childNodes[0]);else i[t].insertBefore(e,i[t].childNodes[0]);return this},next:function(t){return new r(this.length>0?t?this[0].nextElementSibling&&e(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var a=[],i=this[0];if(!i)return new r([]);for(;i.nextElementSibling;){var s=i.nextElementSibling;t?e(s).is(t)&&a.push(s):a.push(s),i=s}return new r(a)},prev:function(t){if(this.length>0){var a=this[0];return new r(t?a.previousElementSibling&&e(a.previousElementSibling).is(t)?[a.previousElementSibling]:[]:a.previousElementSibling?[a.previousElementSibling]:[])}return new r([])},prevAll:function(t){var a=[],i=this[0];if(!i)return new r([]);for(;i.previousElementSibling;){var s=i.previousElementSibling;t?e(s).is(t)&&a.push(s):a.push(s),i=s}return new r(a)},parent:function(a){for(var i=this,s=[],r=0;r<this.length;r+=1)null!==i[r].parentNode&&(a?e(i[r].parentNode).is(a)&&s.push(i[r].parentNode):s.push(i[r].parentNode));return e(t(s))},parents:function(a){for(var i=this,s=[],r=0;r<this.length;r+=1)for(var n=i[r].parentNode;n;)a?e(n).is(a)&&s.push(n):s.push(n),n=n.parentNode;return e(t(s))},closest:function(e){var t=this;return void 0===e?new r([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=this,a=[],i=0;i<this.length;i+=1)for(var s=t[i].querySelectorAll(e),n=0;n<s.length;n+=1)a.push(s[n]);return new r(a)},children:function(a){for(var i=this,s=[],n=0;n<this.length;n+=1)for(var o=i[n].childNodes,l=0;l<o.length;l+=1)a?1===o[l].nodeType&&e(o[l]).is(a)&&s.push(o[l]):1===o[l].nodeType&&s.push(o[l]);return new r(t(s))},remove:function(){for(var e=this,t=0;t<this.length;t+=1)e[t].parentNode&&e[t].parentNode.removeChild(e[t]);return this},add:function(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];var i,s,r=this;for(i=0;i<t.length;i+=1){var n=e(t[i]);for(s=0;s<n.length;s+=1)r[r.length]=n[s],r.length+=1}return r},styles:function(){return this[0]?window.getComputedStyle(this[0],null):{}}};Object.keys(n).forEach(function(t){e.fn[t]=n[t]});var o,l={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){void 0===t&&(t="x");var a,i,r,n=s.getComputedStyle(e,null);return s.WebKitCSSMatrix?((i=n.transform||n.webkitTransform).split(",").length>6&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new s.WebKitCSSMatrix("none"===i?"":i)):a=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=s.WebKitCSSMatrix?r.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?r.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,r,n={},o=e||s.location.href;if("string"==typeof o&&o.length)for(r=(a=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<r;t+=1)i=a[t].replace(/#\S+/g,"").split("="),n[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(void 0!==s&&null!==s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var d=r[n],p=Object.getOwnPropertyDescriptor(s,d);void 0!==p&&p.enumerable&&(l.isObject(a[d])&&l.isObject(s[d])?l.extend(a[d],s[d]):!l.isObject(a[d])&&l.isObject(s[d])?(a[d]={},l.extend(a[d],s[d])):a[d]=s[d])}}return a}},d=o="undefined"==typeof document?{addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return{}},querySelectorAll:function(){return[]},createElement:function(){return{style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,p={touch:s.Modernizr&&!0===s.Modernizr.touch||!!("ontouchstart"in s||s.DocumentTouch&&d instanceof s.DocumentTouch),transforms3d:s.Modernizr&&!0===s.Modernizr.csstransforms3d||function(){var e=d.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=d.createElement("div").style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in s||"WebkitMutationObserver"in s,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});s.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in s},c=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},u={components:{}};c.prototype.on=function(e,t){var a=this;return"function"!=typeof t?a:(e.split(" ").forEach(function(e){a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e].push(t)}),a)},c.prototype.once=function(e,t){function a(){for(var s=[],r=arguments.length;r--;)s[r]=arguments[r];t.apply(i,s),i.off(e,a)}var i=this;return"function"!=typeof t?i:i.on(e,a)},c.prototype.off=function(e,t){var a=this;return e.split(" ").forEach(function(e){void 0===t?a.eventsListeners[e]=[]:a.eventsListeners[e].forEach(function(i,s){i===t&&a.eventsListeners[e].splice(s,1)})}),a},c.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=this;if(!a.eventsListeners)return a;var i,s,r;return"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),r=a):(i=e[0].events,s=e[0].data,r=e[0].context||a),(Array.isArray(i)?i:i.split(" ")).forEach(function(e){if(a.eventsListeners[e]){var t=[];a.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(r,s)})}}),a},c.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach(function(a){var i=t.modules[a];i.params&&l.extend(e,i.params)})},c.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach(function(a){var i=t.modules[a],s=e[a]||{};i.instance&&Object.keys(i.instance).forEach(function(e){var a=i.instance[e];t[e]="function"==typeof a?a.bind(t):a}),i.on&&t.on&&Object.keys(i.on).forEach(function(e){t.on(e,i.on[e])}),i.create&&i.create.bind(t)(s)})},u.components.set=function(e){var t=this;t.use&&t.use(e)},c.installModule=function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=e.name||Object.keys(i.prototype.modules).length+"_"+l.now();return i.prototype.modules[s]=e,e.proto&&Object.keys(e.proto).forEach(function(t){i.prototype[t]=e.proto[t]}),e.static&&Object.keys(e.static).forEach(function(t){i[t]=e.static[t]}),e.install&&e.install.apply(i,t),i},c.use=function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(c,u);var h={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),l.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtl,r=e.wrongRTL,n=a.children("."+e.params.slideClass),o=e.virtual&&t.virtual.enabled?e.virtual.slides.length:n.length,d=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=o,m=e.snapGrid.length,g=e.snapGrid.length,b=t.spaceBetween,w=-h,y=0,x=0;if(void 0!==i){"string"==typeof b&&b.indexOf("%")>=0&&(b=parseFloat(b.replace("%",""))/100*i),e.virtualSize=-b,s?n.css({marginLeft:"",marginTop:""}):n.css({marginRight:"",marginBottom:""});var T;t.slidesPerColumn>1&&(T=Math.floor(o/t.slidesPerColumn)===o/e.params.slidesPerColumn?o:Math.ceil(o/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(T=Math.max(T,t.slidesPerView*t.slidesPerColumn)));for(var E,S=t.slidesPerColumn,C=T/S,M=C-(t.slidesPerColumn*C-o),z=0;z<o;z+=1){E=0;var P=n.eq(z);if(t.slidesPerColumn>1){var k=void 0,$=void 0,I=void 0;"column"===t.slidesPerColumnFill?(I=z-($=Math.floor(z/S))*S,($>M||$===M&&I===S-1)&&(I+=1)>=S&&(I=0,$+=1),k=$+I*T/S,P.css({"-webkit-box-ordinal-group":k,"-moz-box-ordinal-group":k,"-ms-flex-order":k,"-webkit-order":k,order:k})):$=z-(I=Math.floor(z/C))*C,P.css("margin-"+(e.isHorizontal()?"top":"left"),0!==I&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",I)}"none"!==P.css("display")&&("auto"===t.slidesPerView?(E=e.isHorizontal()?P.outerWidth(!0):P.outerHeight(!0),t.roundLengths&&(E=Math.floor(E))):(E=(i-(t.slidesPerView-1)*b)/t.slidesPerView,t.roundLengths&&(E=Math.floor(E)),n[z]&&(e.isHorizontal()?n[z].style.width=E+"px":n[z].style.height=E+"px")),n[z]&&(n[z].swiperSlideSize=E),u.push(E),t.centeredSlides?(w=w+E/2+y/2+b,0===y&&0!==z&&(w=w-i/2-b),0===z&&(w=w-i/2-b),Math.abs(w)<.001&&(w=0),x%t.slidesPerGroup==0&&d.push(w),c.push(w)):(x%t.slidesPerGroup==0&&d.push(w),c.push(w),w=w+E+b),e.virtualSize+=E+b,y=E,x+=1)}e.virtualSize=Math.max(e.virtualSize,i)+v;var L;if(s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),p.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),t.slidesPerColumn>1&&(e.virtualSize=(E+t.spaceBetween)*T,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){L=[];for(var D=0;D<d.length;D+=1)d[D]<e.virtualSize+d[0]&&L.push(d[D]);d=L}if(!t.centeredSlides){L=[];for(var O=0;O<d.length;O+=1)d[O]<=e.virtualSize-i&&L.push(d[O]);d=L,Math.floor(e.virtualSize-i)-Math.floor(d[d.length-1])>1&&d.push(e.virtualSize-i)}0===d.length&&(d=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?n.css({marginLeft:b+"px"}):n.css({marginRight:b+"px"}):n.css({marginBottom:b+"px"})),l.extend(e,{slides:n,snapGrid:d,slidesGrid:c,slidesSizesGrid:u}),o!==f&&e.emit("slidesLengthChange"),d.length!==m&&e.emit("snapGridLengthChange"),c.length!==g&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(){var e,t=this,a=[],i=0;if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)for(e=0;e<Math.ceil(t.params.slidesPerView);e+=1){var s=t.activeIndex+e;if(s>t.slides.length)break;a.push(t.slides.eq(s)[0])}else a.push(t.slides.eq(t.activeIndex)[0]);for(e=0;e<a.length;e+=1)if(void 0!==a[e]){var r=a[e].offsetHeight;i=r>i?r:i}i&&t.$wrapperEl.css("height",i+"px")},updateSlidesOffset:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1)t[a].swiperSlideOffset=e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtl;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass);for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(d>=0&&d<t.size||p>0&&p<=t.size||d<=0&&p>=t.size)&&i.eq(n).addClass(a.slideVisibleClass)}o.progress=s?-l:l}}},updateProgress:function(e){void 0===e&&(e=this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,d=n;0===i?(s=0,r=!0,n=!0):(r=(s=(e-t.minTranslate())/i)<=0,n=s>=1),l.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!d&&t.emit("reachEnd toEdge"),(o&&!r||d&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e=this,t=e.slides,a=e.params,i=e.$wrapperEl,s=e.activeIndex,r=e.realIndex,n=e.virtual&&a.virtual.enabled;t.removeClass(a.slideActiveClass+" "+a.slideNextClass+" "+a.slidePrevClass+" "+a.slideDuplicateActiveClass+" "+a.slideDuplicateNextClass+" "+a.slideDuplicatePrevClass);var o;(o=n?e.$wrapperEl.find("."+a.slideClass+'[data-swiper-slide-index="'+s+'"]'):t.eq(s)).addClass(a.slideActiveClass),a.loop&&(o.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(a.slideDuplicateActiveClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(a.slideDuplicateActiveClass));var l=o.nextAll("."+a.slideClass).eq(0).addClass(a.slideNextClass);a.loop&&0===l.length&&(l=t.eq(0)).addClass(a.slideNextClass);var d=o.prevAll("."+a.slideClass).eq(0).addClass(a.slidePrevClass);a.loop&&0===d.length&&(d=t.eq(-1)).addClass(a.slidePrevClass),a.loop&&(l.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicateNextClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicateNextClass),d.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicatePrevClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtl?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,d=a.realIndex,p=a.snapIndex,c=e;if(void 0===c){for(var u=0;u<s.length;u+=1)void 0!==s[u+1]?i>=s[u]&&i<s[u+1]-(s[u+1]-s[u])/2?c=u:i>=s[u]&&i<s[u+1]&&(c=u+1):i>=s[u]&&(c=u);n.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if((t=r.indexOf(i)>=0?r.indexOf(i):Math.floor(c/n.slidesPerGroup))>=r.length&&(t=r.length-1),c!==o){var h=parseInt(a.slides.eq(c).attr("data-swiper-slide-index")||c,10);l.extend(a,{snapIndex:t,realIndex:h,previousIndex:o,activeIndex:c}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),d!==h&&a.emit("realIndexChange"),a.emit("slideChange")}else t!==p&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(t){var a=this,i=a.params,s=e(t.target).closest("."+i.slideClass)[0],r=!1;if(s)for(var n=0;n<a.slides.length;n+=1)a.slides[n]===s&&(r=!0);if(!s||!r)return a.clickedSlide=void 0,void(a.clickedIndex=void 0);a.clickedSlide=s,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(e(s).attr("data-swiper-slide-index"),10):a.clickedIndex=e(s).index(),i.slideToClickedSlide&&void 0!==a.clickedIndex&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}},v={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this,a=t.params,i=t.rtl,s=t.translate,r=t.$wrapperEl;if(a.virtualTranslate)return i?-s:s;var n=l.getTranslate(r[0],e);return i&&(n=-n),n||0},setTranslate:function(e,t){var a=this,i=a.rtl,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(p.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0===d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}},f={setTransition:function(e,t){var a=this;a.$wrapperEl.transition(e),a.emit("setTransition",e,t)},transitionStart:function(e){void 0===e&&(e=!0);var t=this,a=t.activeIndex,i=t.params,s=t.previousIndex;i.autoHeight&&t.updateAutoHeight(),t.emit("transitionStart"),e&&a!==s&&(t.emit("slideChangeTransitionStart"),a>s?t.emit("slideNextTransitionStart"):t.emit("slidePrevTransitionStart"))},transitionEnd:function(e){void 0===e&&(e=!0);var t=this,a=t.activeIndex,i=t.previousIndex;t.animating=!1,t.setTransition(0),t.emit("transitionEnd"),e&&a!==i&&(t.emit("slideChangeTransitionEnd"),a>i?t.emit("slideNextTransitionEnd"):t.emit("slidePrevTransitionEnd"))}},m=function(){return{isSafari:function(){var e=s.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),ie:s.navigator.pointerEnabled||s.navigator.msPointerEnabled,ieTouch:s.navigator.msPointerEnabled&&s.navigator.msMaxTouchPoints>1||s.navigator.pointerEnabled&&s.navigator.maxTouchPoints>1,lteIE9:function(){var e=d.createElement("div");return e.innerHTML="\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",1===e.getElementsByTagName("i").length}()}}(),g={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtl,u=s.$wrapperEl,h=Math.floor(r/n.slidesPerGroup);h>=o.length&&(h=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var v=-o[h];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);return!(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate()||!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r||(c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),1):(0===t||m.lteIE9?(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a),s.transitionEnd(a)):(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a),s.animating||(s.animating=!0,u.transitionEnd(function(){s&&!s.destroyed&&s.transitionEnd(a)}))),0)))},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex-1,e,t,a)):i.slideTo(i.activeIndex-1,e,t,a)},slideReset:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this;return i.slideTo(i.activeIndex,e,t,a)},slideToClickedSlide:function(){var t,a=this,i=a.params,s=a.$wrapperEl,r="auto"===i.slidesPerView?a.slidesPerViewDynamic():i.slidesPerView,n=a.clickedIndex;if(i.loop){if(a.animating)return;t=parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?n<a.loopedSlides-r/2||n>a.slides.length-a.loopedSlides+r/2?(a.loopFix(),n=s.children("."+i.slideClass+'[data-swiper-slide-index="'+t+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),l.nextTick(function(){a.slideTo(n)})):a.slideTo(n):n>a.slides.length-r?(a.loopFix(),n=s.children("."+i.slideClass+'[data-swiper-slide-index="'+t+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),l.nextTick(function(){a.slideTo(n)})):a.slideTo(n)}else a.slideTo(n)}},b={loopCreate:function(){var t=this,a=t.params,i=t.$wrapperEl;i.children("."+a.slideClass+"."+a.slideDuplicateClass).remove();var s=i.children("."+a.slideClass);if(a.loopFillGroupWithBlank){var r=a.slidesPerGroup-s.length%a.slidesPerGroup;if(r!==a.slidesPerGroup){for(var n=0;n<r;n+=1){var o=e(d.createElement("div")).addClass(a.slideClass+" "+a.slideBlankClass);i.append(o)}s=i.children("."+a.slideClass)}}"auto"!==a.slidesPerView||a.loopedSlides||(a.loopedSlides=s.length),t.loopedSlides=parseInt(a.loopedSlides||a.slidesPerView,10),t.loopedSlides+=a.loopAdditionalSlides,t.loopedSlides>s.length&&(t.loopedSlides=s.length);var l=[],p=[];s.each(function(a,i){var r=e(i);a<t.loopedSlides&&p.push(i),a<s.length&&a>=s.length-t.loopedSlides&&l.push(i),r.attr("data-swiper-slide-index",a)});for(var c=0;c<p.length;c+=1)i.append(e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));for(var u=l.length-1;u>=0;u-=1)i.prepend(e(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext;t.allowSlidePrev=!0,t.allowSlideNext=!0,i<r?(e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)):("auto"===a.slidesPerView&&i>=2*r||i>s.length-2*a.slidesPerView)&&(e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)),t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this,t=e.$wrapperEl,a=e.params,i=e.slides;t.children("."+a.slideClass+"."+a.slideDuplicateClass).remove(),i.removeAttr("data-swiper-slide-index")}},w={setGrabCursor:function(e){var t=this;if(!p.touch&&t.params.simulateTouch){var a=t.el;a.style.cursor="move",a.style.cursor=e?"-webkit-grabbing":"-webkit-grab",a.style.cursor=e?"-moz-grabbin":"-moz-grab",a.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){var e=this;p.touch||(e.el.style.cursor="")}},y={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&p.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&p.observer||t.update(),t.slideTo(r,0,!1)},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&p.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=this,t=[],a=0;a<e.slides.length;a+=1)t.push(a);e.removeSlide(t)}},x=function(){var e=s.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:s.cordova||s.phonegap,phonegap:s.cordova||s.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),r=e.match(/(iPad).*OS\s([\d_]+)/),n=e.match(/(iPod)(.*OS\s([\d_]+))?/),o=!r&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=e.toLowerCase().indexOf("chrome")>=0),(r||o||n)&&(t.os="ios",t.ios=!0),o&&!n&&(t.osVersion=o[2].replace(/_/g,"."),t.iphone=!0),r&&(t.osVersion=r[2].replace(/_/g,"."),t.ipad=!0),n&&(t.osVersion=n[3]?n[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&e.indexOf("Version/")>=0&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(o||r||n)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var l=t.osVersion.split("."),p=d.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(n||o)&&(1*l[0]==7?1*l[1]>=1:1*l[0]>7)&&p&&p.getAttribute("content").indexOf("minimal-ui")>=0}return t.pixelRatio=s.devicePixelRatio||1,t}(),T=function(t){var a=this,i=a.touchEventsData,s=a.params,r=a.touches,n=t;if(n.originalEvent&&(n=n.originalEvent),i.isTouchEvent="touchstart"===n.type,(i.isTouchEvent||!("which"in n)||3!==n.which)&&(!i.isTouched||!i.isMoved))if(s.noSwiping&&e(n.target).closest("."+s.noSwipingClass)[0])a.allowClick=!0;else if(!s.swipeHandler||e(n).closest(s.swipeHandler)[0]){r.currentX="touchstart"===n.type?n.targetTouches[0].pageX:n.pageX,r.currentY="touchstart"===n.type?n.targetTouches[0].pageY:n.pageY;var o=r.currentX,p=r.currentY;if(!(x.ios&&!x.cordova&&s.iOSEdgeSwipeDetection&&o<=s.iOSEdgeSwipeThreshold&&o>=window.screen.width-s.iOSEdgeSwipeThreshold)){if(l.extend(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=o,r.startY=p,i.touchStartTime=l.now(),a.allowClick=!0,a.updateSize(),a.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1),"touchstart"!==n.type){var c=!0;e(n.target).is(i.formElements)&&(c=!1),d.activeElement&&e(d.activeElement).is(i.formElements)&&d.activeElement.blur(),c&&a.allowTouchMove&&n.preventDefault()}a.emit("touchStart",n)}}},E=function(t){var a=this,i=a.touchEventsData,s=a.params,r=a.touches,n=a.rtl,o=t;if(o.originalEvent&&(o=o.originalEvent),!i.isTouchEvent||"mousemove"!==o.type){var p="touchmove"===o.type?o.targetTouches[0].pageX:o.pageX,c="touchmove"===o.type?o.targetTouches[0].pageY:o.pageY;if(o.preventedByNestedSwiper)return r.startX=p,void(r.startY=c);if(!a.allowTouchMove)return a.allowClick=!1,void(i.isTouched&&(l.extend(r,{startX:p,startY:c,currentX:p,currentY:c}),i.touchStartTime=l.now()));if(i.isTouchEvent&&s.touchReleaseOnEdges&&!s.loop)if(a.isVertical()){if(c<r.startY&&a.translate<=a.maxTranslate()||c>r.startY&&a.translate>=a.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(p<r.startX&&a.translate<=a.maxTranslate()||p>r.startX&&a.translate>=a.minTranslate())return;if(i.isTouchEvent&&d.activeElement&&o.target===d.activeElement&&e(o.target).is(i.formElements))return i.isMoved=!0,void(a.allowClick=!1);if(i.allowTouchCallbacks&&a.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){r.currentX=p,r.currentY=c;var u=r.currentX-r.startX,h=r.currentY-r.startY;if(void 0===i.isScrolling){var v;a.isHorizontal()&&r.currentY===r.startY||a.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:u*u+h*h>=25&&(v=180*Math.atan2(Math.abs(h),Math.abs(u))/Math.PI,i.isScrolling=a.isHorizontal()?v>s.touchAngle:90-v>s.touchAngle)}if(i.isScrolling&&a.emit("touchMoveOpposite",o),"undefined"==typeof startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isTouched)if(i.isScrolling)i.isTouched=!1;else if(i.startMoving){a.allowClick=!1,o.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&o.stopPropagation(),i.isMoved||(s.loop&&a.loopFix(),i.startTranslate=a.getTranslate(),a.setTransition(0),a.animating&&a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!s.grabCursor||!0!==a.allowSlideNext&&!0!==a.allowSlidePrev||a.setGrabCursor(!0),a.emit("sliderFirstMove",o)),a.emit("sliderMove",o),i.isMoved=!0;var f=a.isHorizontal()?u:h;r.diff=f,f*=s.touchRatio,n&&(f=-f),a.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var m=!0,g=s.resistanceRatio;if(s.touchReleaseOnEdges&&(g=0),f>0&&i.currentTranslate>a.minTranslate()?(m=!1,s.resistance&&(i.currentTranslate=a.minTranslate()-1+Math.pow(-a.minTranslate()+i.startTranslate+f,g))):f<0&&i.currentTranslate<a.maxTranslate()&&(m=!1,s.resistance&&(i.currentTranslate=a.maxTranslate()+1-Math.pow(a.maxTranslate()-i.startTranslate-f,g))),m&&(o.preventedByNestedSwiper=!0),!a.allowSlideNext&&"next"===a.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&"prev"===a.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.threshold>0){if(!(Math.abs(f)>s.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=a.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}s.followFinger&&((s.freeMode||s.watchSlidesProgress||s.watchSlidesVisibility)&&(a.updateActiveIndex(),a.updateSlidesClasses()),s.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[a.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[a.isHorizontal()?"currentX":"currentY"],time:l.now()})),a.updateProgress(i.currentTranslate),a.setTranslate(i.currentTranslate))}}}},S=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtl,n=t.$wrapperEl,o=t.slidesGrid,d=t.snapGrid,p=e;if(p.originalEvent&&(p=p.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",p),a.allowTouchCallbacks=!1,a.isTouched){i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var c=l.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(p),t.emit("tap",p),u<300&&c-a.lastClickTime>300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=l.nextTick(function(){t&&!t.destroyed&&t.emit("click",p)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",p))),a.lastClickTime=l.now(),l.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var h;if(h=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(h<-t.minTranslate())return void t.slideTo(t.activeIndex);if(h>-t.maxTranslate())return void(t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(a.velocities.length>1){var v=a.velocities.pop(),f=a.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(g>150||l.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var b=1e3*i.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,T=!1,E=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(y<t.maxTranslate())i.freeModeMomentumBounce?(y+t.maxTranslate()<-E&&(y=t.maxTranslate()-E),x=t.maxTranslate(),T=!0,a.allowMomentumBounce=!0):y=t.maxTranslate();else if(y>t.minTranslate())i.freeModeMomentumBounce?(y-t.minTranslate()>E&&(y=t.minTranslate()+E),x=t.minTranslate(),T=!0,a.allowMomentumBounce=!0):y=t.minTranslate();else if(i.freeModeSticky){for(var S,C=0;C<d.length;C+=1)if(d[C]>-y){S=C;break}y=-(y=Math.abs(d[S]-y)<Math.abs(d[S-1]-y)||"next"===t.swipeDirection?d[S]:d[S-1])}if(0!==t.velocity)b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideReset();i.freeModeMomentumBounce&&T?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(x),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,z=t.slidesSizesGrid[0],P=0;P<o.length;P+=i.slidesPerGroup)void 0!==o[P+i.slidesPerGroup]?h>=o[P]&&h<o[P+i.slidesPerGroup]&&(M=P,z=o[P+i.slidesPerGroup]-o[P]):h>=o[P]&&(M=P,z=o[o.length-1]-o[o.length-2]);var k=(h-o[M])/z;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(k>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(k>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}},C=function(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var r=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(r),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=s,e.allowSlideNext=i}},M=function(e){var t=this;t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},z={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},P={update:h,translate:v,transition:f,slide:g,loop:b,grabCursor:w,manipulation:y,events:{attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=T.bind(e),e.onTouchMove=E.bind(e),e.onTouchEnd=S.bind(e),e.onClick=M.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(m.ie)r.addEventListener(a.start,e.onTouchStart,!1),(p.touch?r:d).addEventListener(a.move,e.onTouchMove,n),(p.touch?r:d).addEventListener(a.end,e.onTouchEnd,!1);else{if(p.touch){var o=!("touchstart"!==a.start||!p.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,p.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!x.ios&&!x.android||t.simulateTouch&&!p.touch&&x.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),d.addEventListener("mousemove",e.onTouchMove,n),d.addEventListener("mouseup",e.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on("resize observerUpdate",C)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(m.ie)r.removeEventListener(a.start,e.onTouchStart,!1),(p.touch?r:d).removeEventListener(a.move,e.onTouchMove,n),(p.touch?r:d).removeEventListener(a.end,e.onTouchEnd,!1);else{if(p.touch){var o=!("onTouchStart"!==a.start||!p.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!x.ios&&!x.android||t.simulateTouch&&!p.touch&&x.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),d.removeEventListener("mousemove",e.onTouchMove,n),d.removeEventListener("mouseup",e.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off("resize observerUpdate",C)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.loopedSlides;void 0===a&&(a=0);var i=e.params,s=i.breakpoints;if(s&&(!s||0!==Object.keys(s).length)){var r=e.getBreakpoint(s);if(r&&e.currentBreakpoint!==r){var n=r in s?s[r]:e.originalParams,o=i.loop&&n.slidesPerView!==i.slidesPerView;l.extend(e.params,n),l.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=r,o&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",n)}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<a.length;i+=1){var r=a[i];r>=s.innerWidth&&!t&&(t=r)}return t||"max"}}},classes:{addClasses:function(){var e=this,t=e.classNames,a=e.params,i=e.rtl,r=e.$el,n=[];n.push(a.direction),a.freeMode&&n.push("free-mode"),p.flexbox||n.push("no-flexbox"),a.autoHeight&&n.push("autoheight"),i&&n.push("rtl"),a.slidesPerColumn>1&&n.push("multirow"),x.android&&n.push("android"),x.ios&&n.push("ios"),(s.navigator.pointerEnabled||s.navigator.msPointerEnabled)&&n.push("wp8-"+a.direction),n.forEach(function(e){t.push(a.containerModifierClass+e)}),r.addClass(t.join(" "))},removeClasses:function(){var e=this,t=e.$el,a=e.classNames;t.removeClass(a.join(" "))}},images:{loadImage:function(e,t,a,i,r,n){function o(){n&&n()}var l;e.complete&&r?o():t?((l=new s.Image).onload=o,l.onerror=o,i&&(l.sizes=i),a&&(l.srcset=a),t&&(l.src=t)):o()},preloadImages:function(){var e=this;e.imagesToLoad=e.$el.find("img");for(var t=0;t<e.imagesToLoad.length;t+=1){var a=e.imagesToLoad[t];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,function(){void 0!==e&&null!==e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))})}}}},k={},$=function(t){function a(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];var n,o;if(1===i.length&&i[0].constructor&&i[0].constructor===Object)o=i[0];else{var d;n=(d=i)[0],o=d[1]}o||(o={}),o=l.extend({},o),n&&!o.el&&(o.el=n),t.call(this,o),Object.keys(P).forEach(function(e){Object.keys(P[e]).forEach(function(t){a.prototype[t]||(a.prototype[t]=P[e][t])})});var c=this;void 0===c.modules&&(c.modules={}),Object.keys(c.modules).forEach(function(e){var t=c.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i)return;if(!(a in o&&"enabled"in i))return;!0===o[a]&&(o[a]={enabled:!0}),"object"!=typeof o[a]||"enabled"in o[a]||(o[a].enabled=!0),o[a]||(o[a]={enabled:!1})}});var u=l.extend({},z);c.useModulesParams(u),c.params=l.extend({},u,k,o),c.originalParams=l.extend({},c.params),c.passedParams=l.extend({},o);var h=e(c.params.el);if(n=h[0]){if(h.length>1){var v=[];return h.each(function(e,t){var i=l.extend({},o,{el:t});v.push(new a(i))}),v}n.swiper=c,h.data("swiper",c);var f=h.children("."+c.params.wrapperClass);return l.extend(c,{$el:h,el:n,$wrapperEl:f,wrapperEl:f[0],classNames:[],slides:e(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===c.params.direction},isVertical:function(){return"vertical"===c.params.direction},rtl:"horizontal"===c.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===h.css("direction")),wrongRTL:"-webkit-box"===f.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,progress:0,velocity:0,animating:!1,allowSlideNext:c.params.allowSlideNext,allowSlidePrev:c.params.allowSlidePrev,touchEvents:function(){var e=["touchstart","touchmove","touchend"],t=["mousedown","mousemove","mouseup"];return s.navigator.pointerEnabled?t=["pointerdown","pointermove","pointerup"]:s.navigator.msPointerEnabled&&(t=["MSPointerDown","MsPointerMove","MsPointerUp"]),{start:p.touch||!c.params.simulateTouch?e[0]:t[0],move:p.touch||!c.params.simulateTouch?e[1]:t[1],end:p.touch||!c.params.simulateTouch?e[2]:t[2]}}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:l.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:c.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),c.useModules(),c.params.init&&c.init(),c}}t&&(a.__proto__=t),a.prototype=Object.create(t&&t.prototype),a.prototype.constructor=a;var i={extendedDefaults:{},defaults:{},Class:{},$:{}};return a.prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,(l+=a[d].swiperSlideSize)>s&&(o=!0));for(var p=r-1;p>=0;p-=1)a[p]&&!o&&(n+=1,(l+=a[p].swiperSlideSize)>s&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},a.prototype.update=function(){function e(){a=Math.min(Math.max(t.translate,t.maxTranslate()),t.minTranslate()),t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}var t=this;if(t&&!t.destroyed){t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();var a;t.params.freeMode?(e(),t.params.autoHeight&&t.updateAutoHeight()):(("auto"===t.params.slidesPerView||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?t.slideTo(t.slides.length-1,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0))||e(),t.emit("update")}},a.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},a.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),l.deleteProps(a)),a.destroyed=!0},a.extendDefaults=function(e){l.extend(k,e)},i.extendedDefaults.get=function(){return k},i.defaults.get=function(){return z},i.Class.get=function(){return t},i.$.get=function(){return e},Object.defineProperties(a,i),a}(c),I={name:"device",proto:{device:x},static:{device:x}},L={name:"support",proto:{support:p},static:{support:p}},D={name:"browser",proto:{browser:m},static:{browser:m}},O={name:"resize",create:function(){var e=this;l.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){var e=this;s.addEventListener("resize",e.resize.resizeHandler),s.addEventListener("orientationchange",e.resize.orientationChangeHandler)},destroy:function(){var e=this;s.removeEventListener("resize",e.resize.resizeHandler),s.removeEventListener("orientationchange",e.resize.orientationChangeHandler)}}},A={func:s.MutationObserver||s.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new(0,A.func)(function(e){e.forEach(function(e){a.emit("observerUpdate",e)})});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(p.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:!1}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){var e=this;e.observer.observers.forEach(function(e){e.disconnect()}),e.observer.observers=[]}},H={name:"observer",params:{observer:!1,observeParents:!1},create:function(){var e=this;l.extend(e,{observer:{init:A.init.bind(e),attach:A.attach.bind(e),destroy:A.destroy.bind(e),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},N={update:function(e){function t(){a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.lazy&&a.params.lazy.enabled&&a.lazy.load()}var a=this,i=a.params,s=i.slidesPerView,r=i.slidesPerGroup,n=i.centeredSlides,o=a.virtual,d=o.from,p=o.to,c=o.slides,u=o.slidesGrid,h=o.renderSlide,v=o.offset;a.updateActiveIndex();var f,m=a.activeIndex||0;f=a.rtl&&a.isHorizontal()?"right":a.isHorizontal()?"left":"top";var g,b;n?(g=Math.floor(s/2)+r,b=Math.floor(s/2)+r):(g=s+(r-1),b=r);var w=Math.max((m||0)-b,0),y=Math.min((m||0)+g,c.length-1),x=(a.slidesGrid[w]||0)-(a.slidesGrid[0]||0);if(l.extend(a.virtual,{from:w,to:y,offset:x,slidesGrid:a.slidesGrid}),d===w&&p===y&&!e)return a.slidesGrid!==u&&x!==v&&a.slides.css(f,x+"px"),void a.updateProgress();if(a.params.virtual.renderExternal)return a.params.virtual.renderExternal.call(a,{offset:x,from:w,to:y,slides:function(){for(var e=[],t=w;t<=y;t+=1)e.push(c[t]);return e}()}),void t();var T=[],E=[];if(e)a.$wrapperEl.find("."+a.params.slideClass).remove();else for(var S=d;S<=p;S+=1)(S<w||S>y)&&a.$wrapperEl.find("."+a.params.slideClass+'[data-swiper-slide-index="'+S+'"]').remove();for(var C=0;C<c.length;C+=1)C>=w&&C<=y&&(void 0===p||e?E.push(C):(C>p&&E.push(C),C<d&&T.push(C)));E.forEach(function(e){a.$wrapperEl.append(h(c[e],e))}),T.sort(function(e,t){return e<t}).forEach(function(e){a.$wrapperEl.prepend(h(c[e],e))}),a.$wrapperEl.children(".swiper-slide").css(f,x+"px"),t()},renderSlide:function(t,a){var i=this,s=i.params.virtual;if(s.cache&&i.virtual.cache[a])return i.virtual.cache[a];var r=e(s.renderSlide?s.renderSlide.call(i,t,a):'<div class="'+i.params.slideClass+'" data-swiper-slide-index="'+a+'">'+t+"</div>");return r.attr("data-swiper-slide-index")||r.attr("data-swiper-slide-index",a),s.cache&&(i.virtual.cache[a]=r),r},appendSlide:function(e){var t=this;t.virtual.slides.push(e),t.virtual.update(!0)},prependSlide:function(e){var t=this;if(t.virtual.slides.unshift(e),t.params.virtual.cache){var a=t.virtual.cache,i={};Object.keys(a).forEach(function(e){i[e+1]=a[e]}),t.virtual.cache=i}t.virtual.update(!0),t.slideNext(0)}},X={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null}},create:function(){var e=this;l.extend(e,{virtual:{update:N.update.bind(e),appendSlide:N.appendSlide.bind(e),prependSlide:N.prependSlide.bind(e),renderSlide:N.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};l.extend(e.params,t),l.extend(e.originalParams,t),e.virtual.update()}},setTranslate:function(){var e=this;e.params.virtual.enabled&&e.virtual.update()}}},Y={handle:function(e){var t=this,a=e;a.originalEvent&&(a=a.originalEvent);var i=a.keyCode||a.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===i||t.isVertical()&&40===i))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===i||t.isVertical()&&38===i))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||d.activeElement&&d.activeElement.nodeName&&("input"===d.activeElement.nodeName.toLowerCase()||"textarea"===d.activeElement.nodeName.toLowerCase()))){if(37===i||39===i||38===i||40===i){var r=!1;if(t.$el.parents("."+t.params.slideClass).length>0&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n={left:s.pageXOffset,top:s.pageYOffset},o=s.innerWidth,l=s.innerHeight,p=t.$el.offset();t.rtl&&(p.left-=t.$el[0].scrollLeft);for(var c=[[p.left,p.top],[p.left+t.width,p.top],[p.left,p.top+t.height],[p.left+t.width,p.top+t.height]],u=0;u<c.length;u+=1){var h=c[u];h[0]>=n.left&&h[0]<=n.left+o&&h[1]>=n.top&&h[1]<=n.top+l&&(r=!0)}if(!r)return}t.isHorizontal()?(37!==i&&39!==i||(a.preventDefault?a.preventDefault():a.returnValue=!1),(39===i&&!t.rtl||37===i&&t.rtl)&&t.slideNext(),(37===i&&!t.rtl||39===i&&t.rtl)&&t.slidePrev()):(38!==i&&40!==i||(a.preventDefault?a.preventDefault():a.returnValue=!1),40===i&&t.slideNext(),38===i&&t.slidePrev()),t.emit("keyPress",i)}},enable:function(){var t=this;t.keyboard.enabled||(e(d).on("keydown",t.keyboard.handle),t.keyboard.enabled=!0)},disable:function(){var t=this;t.keyboard.enabled&&(e(d).off("keydown",t.keyboard.handle),t.keyboard.enabled=!1)}},G={name:"keyboard",params:{keyboard:{enabled:!1}},create:function(){var e=this;l.extend(e,{keyboard:{enabled:!1,enable:Y.enable.bind(e),disable:Y.disable.bind(e),handle:Y.handle.bind(e)}})},on:{init:function(){var e=this;e.params.keyboard.enabled&&e.keyboard.enable()},destroy:function(){var e=this;e.keyboard.enabled&&e.keyboard.disable()}}},B={lastScrollTime:l.now(),event:s.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":a()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handle:function(e){var t=e,a=this,i=a.params.mousewheel;t.originalEvent&&(t=t.originalEvent);var r=0,n=a.rtl?-1:1,o=B.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(o.pixelX)>Math.abs(o.pixelY)))return!0;r=o.pixelX*n}else{if(!(Math.abs(o.pixelY)>Math.abs(o.pixelX)))return!0;r=o.pixelY}else r=Math.abs(o.pixelX)>Math.abs(o.pixelY)?-o.pixelX*n:-o.pixelY;if(0===r)return!0;if(i.invert&&(r=-r),a.params.freeMode){var d=a.getTranslate()+r*i.sensitivity,p=a.isBeginning,c=a.isEnd;if(d>=a.minTranslate()&&(d=a.minTranslate()),d<=a.maxTranslate()&&(d=a.maxTranslate()),a.setTransition(0),a.setTranslate(d),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!p&&a.isBeginning||!c&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=l.nextTick(function(){a.slideReset()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.stopAutoplay(),0===d||d===a.maxTranslate())return!0}else{if(l.now()-a.mousewheel.lastScrollTime>60)if(r<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new s.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var t=this;if(!B.event)return!1;if(t.mousewheel.enabled)return!1;var a=t.$el;return"container"!==t.params.mousewheel.eventsTarged&&(a=e(t.params.mousewheel.eventsTarged)),a.on(B.event,t.mousewheel.handle),t.mousewheel.enabled=!0,!0},disable:function(){var t=this;if(!B.event)return!1;if(!t.mousewheel.enabled)return!1;var a=t.$el;return"container"!==t.params.mousewheel.eventsTarged&&(a=e(t.params.mousewheel.eventsTarged)),a.off(B.event,t.mousewheel.handle),t.mousewheel.enabled=!1,!0}},V={name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;l.extend(e,{mousewheel:{enabled:!1,enable:B.enable.bind(e),disable:B.disable.bind(e),handle:B.handle.bind(e),lastScrollTime:l.now()}})},on:{init:function(){var e=this;e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy:function(){var e=this;e.mousewheel.enabled&&e.mousewheel.disable()}}},R={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&s.length>0&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)),i&&i.length>0&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass))}},init:function(){var t=this,a=t.params.navigation;if(a.nextEl||a.prevEl){var i,s;a.nextEl&&(i=e(a.nextEl),t.params.uniqueNavElements&&"string"==typeof a.nextEl&&i.length>1&&1===t.$el.find(a.nextEl).length&&(i=t.$el.find(a.nextEl))),a.prevEl&&(s=e(a.prevEl),t.params.uniqueNavElements&&"string"==typeof a.prevEl&&s.length>1&&1===t.$el.find(a.prevEl).length&&(s=t.$el.find(a.prevEl))),i&&i.length>0&&i.on("click",function(e){e.preventDefault(),t.isEnd&&!t.params.loop||t.slideNext()}),s&&s.length>0&&s.on("click",function(e){e.preventDefault(),t.isBeginning&&!t.params.loop||t.slidePrev()}),l.extend(t.navigation,{$nextEl:i,nextEl:i&&i[0],$prevEl:s,prevEl:s&&s[0]})}},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click"),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click"),i.removeClass(e.params.navigation.disabledClass))}},W={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden"}},create:function(){var e=this;l.extend(e,{navigation:{init:R.init.bind(e),update:R.update.bind(e),destroy:R.destroy.bind(e)}})},on:{init:function(){var e=this;e.navigation.init(),e.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(t){var a=this,i=a.navigation,s=i.$nextEl,r=i.$prevEl;!a.params.navigation.hideOnClick||e(t.target).is(r)||e(t.target).is(s)||(s&&s.toggleClass(a.params.navigation.hiddenClass),r&&r.toggleClass(a.params.navigation.hiddenClass))}}},F={update:function(){var t=this,a=t.rtl,i=t.params.pagination;if(i.el&&t.pagination.el&&t.pagination.$el&&0!==t.pagination.$el.length){var s,r=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,n=t.pagination.$el,o=t.params.loop?Math.ceil((r-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?((s=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup))>r-1-2*t.loopedSlides&&(s-=r-2*t.loopedSlides),s>o-1&&(s-=o),s<0&&"bullets"!==t.params.paginationType&&(s=o+s)):s=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===i.type&&t.pagination.bullets&&t.pagination.bullets.length>0){var l=t.pagination.bullets;if(i.dynamicBullets&&(t.pagination.bulletSize=l.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),n.css(t.isHorizontal()?"width":"height",5*t.pagination.bulletSize+"px")),l.removeClass(i.bulletActiveClass+" "+i.bulletActiveClass+"-next "+i.bulletActiveClass+"-next-next "+i.bulletActiveClass+"-prev "+i.bulletActiveClass+"-prev-prev"),n.length>1)l.each(function(t,a){var r=e(a);r.index()===s&&(r.addClass(i.bulletActiveClass),i.dynamicBullets&&(r.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev"),r.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next")))});else{var d=l.eq(s);d.addClass(i.bulletActiveClass),i.dynamicBullets&&(d.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev"),d.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next"))}if(i.dynamicBullets){var p=Math.min(l.length,5),c=(t.pagination.bulletSize*p-t.pagination.bulletSize)/2-s*t.pagination.bulletSize,u=a?"right":"left";l.css(t.isHorizontal()?u:"top",c+"px")}}if("fraction"===i.type&&(n.find("."+i.currentClass).text(s+1),n.find("."+i.totalClass).text(o)),"progressbar"===i.type){var h=(s+1)/o,v=h,f=1;t.isHorizontal()||(f=h,v=1),n.find("."+i.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+v+") scaleY("+f+")").transition(t.params.speed)}"custom"===i.type&&i.renderCustom?(n.html(i.renderCustom(t,s+1,o)),t.emit("paginationRender",t,n[0])):t.emit("paginationUpdate",t,n[0])}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var t=this,a=t.params.pagination;if(a.el){var i=e(a.el);0!==i.length&&(t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===t.$el.find(a.el).length&&(i=t.$el.find(a.el)),"bullets"===a.type&&a.clickable&&i.addClass(a.clickableClass),i.addClass(a.modifierClass+a.type),"bullets"===a.type&&a.dynamicBullets&&i.addClass(""+a.modifierClass+a.type+"-dynamic"),a.clickable&&i.on("click","."+a.bulletClass,function(a){a.preventDefault();var i=e(this).index()*t.params.slidesPerGroup;t.params.loop&&(i+=t.loopedSlides),t.slideTo(i)}),l.extend(t.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},j={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,type:"bullets",dynamicBullets:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",clickableClass:"swiper-pagination-clickable"}},create:function(){var e=this;l.extend(e,{pagination:{init:F.init.bind(e),render:F.render.bind(e),update:F.update.bind(e),destroy:F.destroy.bind(e)}})},on:{init:function(){var e=this;e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(){var e=this;e.params.loop?e.pagination.update():void 0===e.snapIndex&&e.pagination.update()},snapIndexChange:function(){var e=this;e.params.loop||e.pagination.update()},slidesLengthChange:function(){var e=this;e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(){var e=this;e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(t){var a=this;a.params.pagination.el&&a.params.pagination.hideOnClick&&a.pagination.$el.length>0&&!e(t.target).hasClass(a.params.pagination.bulletClass)&&a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)}}},q={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtl,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,c=(r-s)*i;a&&e.isHorizontal()?(c=-c)>0?(d=s-c,c=0):-c+s>r&&(d=r+c):c<0?(d=s+c,c=0):c+s>r&&(d=r-c),e.isHorizontal()?(p.transforms3d?n.transform("translate3d("+c+"px, 0, 0)"):n.transform("translateX("+c+"px)"),n[0].style.width=d+"px"):(p.transforms3d?n.transform("translate3d(0px, "+c+"px, 0)"):n.transform("translateY("+c+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){var t=this;t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=n>=1?"none":"",e.params.scrollbarHide&&(i[0].style.opacity=0),l.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s})}},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=i.$el,r=i.dragSize,n=i.trackSize;t=((a.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-s.offset()[a.isHorizontal()?"left":"top"]-r/2)/(n-r),t=Math.max(Math.min(t,1),0),a.rtl&&(t=1-t);var o=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(o),a.setTranslate(o),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this,a=t.scrollbar,i=t.$wrapperEl,s=a.$el,r=a.$dragEl;t.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),i.transition(0),s.transition(0),r.transition(0),t.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=l.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideReset())},enableDraggable:function(){var t=this;if(t.params.scrollbar.el){var a=t.scrollbar.$el,i=p.touch?a[0]:document;a.on(t.scrollbar.dragEvents.start,t.scrollbar.onDragStart),e(i).on(t.scrollbar.dragEvents.move,t.scrollbar.onDragMove),e(i).on(t.scrollbar.dragEvents.end,t.scrollbar.onDragEnd)}},disableDraggable:function(){var t=this;if(t.params.scrollbar.el){var a=t.scrollbar.$el,i=p.touch?a[0]:document;a.off(t.scrollbar.dragEvents.start),e(i).off(t.scrollbar.dragEvents.move),e(i).off(t.scrollbar.dragEvents.end)}},init:function(){var t=this;if(t.params.scrollbar.el){var a=t.scrollbar,i=t.$el,s=t.touchEvents,r=t.params.scrollbar,n=e(r.el);t.params.uniqueNavElements&&"string"==typeof r.el&&n.length>1&&1===i.find(r.el).length&&(n=i.find(r.el));var o=n.find(".swiper-scrollbar-drag");0===o.length&&(o=e('<div class="swiper-scrollbar-drag"></div>'),n.append(o)),t.scrollbar.dragEvents=!1!==t.params.simulateTouch||p.touch?s:{start:"mousedown",move:"mousemove",end:"mouseup"},l.extend(a,{$el:n,el:n[0],$dragEl:o,dragEl:o[0]}),r.draggable&&a.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},K={name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0}},create:function(){var e=this;l.extend(e,{scrollbar:{init:q.init.bind(e),destroy:q.destroy.bind(e),updateSize:q.updateSize.bind(e),setTranslate:q.setTranslate.bind(e),setTransition:q.setTransition.bind(e),enableDraggable:q.enableDraggable.bind(e),disableDraggable:q.disableDraggable.bind(e),setDragPosition:q.setDragPosition.bind(e),onDragStart:q.onDragStart.bind(e),onDragMove:q.onDragMove.bind(e),onDragEnd:q.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){var e=this;e.scrollbar.init(),e.scrollbar.updateSize(),e.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},U={setTransform:function(t,a){var i=this,s=i.rtl,r=e(t),n=s?-1:1,o=r.attr("data-swiper-parallax")||"0",l=r.attr("data-swiper-parallax-x"),d=r.attr("data-swiper-parallax-y"),p=r.attr("data-swiper-parallax-scale"),c=r.attr("data-swiper-parallax-opacity");if(l||d?(l=l||"0",d=d||"0"):i.isHorizontal()?(l=o,d="0"):(d=o,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*a*n+"%":l*a*n+"px",d=d.indexOf("%")>=0?parseInt(d,10)*a+"%":d*a+"px",void 0!==c&&null!==c){var u=c-(c-1)*(1-Math.abs(a));r[0].style.opacity=u}if(void 0===p||null===p)r.transform("translate3d("+l+", "+d+", 0px)");else{var h=p-(p-1)*(1-Math.abs(a));r.transform("translate3d("+l+", "+d+", 0px) scale("+h+")")}},setTranslate:function(){var t=this,a=t.$el,i=t.slides,s=t.progress,r=t.snapGrid;a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,a){t.parallax.setTransform(a,s)}),i.each(function(a,i){var n=i.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(a/2)-s*(r.length-1)),n=Math.min(Math.max(n,-1),1),e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,a){t.parallax.setTransform(a,n)})})},setTransition:function(t){void 0===t&&(t=this.params.speed),this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(a,i){var s=e(i),r=parseInt(s.attr("data-swiper-parallax-duration"),10)||t;0===t&&(r=0),s.transition(r)})}},_={name:"parallax",params:{parallax:{enabled:!1}},create:function(){var e=this;l.extend(e,{parallax:{setTransform:U.setTransform.bind(e),setTranslate:U.setTranslate.bind(e),setTransition:U.setTransition.bind(e)}})},on:{beforeInit:function(){this.params.watchSlidesProgress=!0},init:function(){var e=this;e.params.parallax&&e.parallax.setTranslate()},setTranslate:function(){var e=this;e.params.parallax&&e.parallax.setTranslate()},setTransition:function(e){var t=this;t.params.parallax&&t.parallax.setTransition(e)}}},Z={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(t){var a=this,i=a.params.zoom,s=a.zoom,r=s.gesture;if(s.fakeGestureTouched=!1,s.fakeGestureMoved=!1,!p.gestures){if("touchstart"!==t.type||"touchstart"===t.type&&t.targetTouches.length<2)return;s.fakeGestureTouched=!0,r.scaleStart=Z.getDistanceBetweenTouches(t)}r.$slideEl&&r.$slideEl.length||(r.$slideEl=e(this),0===r.$slideEl.length&&(r.$slideEl=a.slides.eq(a.activeIndex)),r.$imageEl=r.$slideEl.find("img, svg, canvas"),r.$imageWrapEl=r.$imageEl.parent("."+i.containerClass),r.maxRatio=r.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,0!==r.$imageWrapEl.length)?(r.$imageEl.transition(0),a.zoom.isScaling=!0):r.$imageEl=void 0},onGestureChange:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(!p.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=Z.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(p.gestures?t.zoom.scale=e.scale*i.currentScale:i.scale=s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<a.minRatio&&(i.scale=a.minRatio+1-Math.pow(a.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(!p.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!x.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),a.minRatio),s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(x.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=l.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=l.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX),t.rtl&&(s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this,t=e.zoom,a=t.gesture;a.$slideEl&&e.previousIndex!==e.activeIndex&&(a.$imageEl.transform("translate3d(0,0,0) scale(1)"),a.$imageWrapEl.transform("translate3d(0,0,0)"),a.$slideEl=void 0,a.$imageEl=void 0,a.$imageWrapEl=void 0,t.scale=1,t.currentScale=1)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(t){var a=this,i=a.zoom,s=a.params.zoom,r=i.gesture,n=i.image;if(r.$slideEl||(r.$slideEl=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),r.$imageEl=r.$slideEl.find("img, svg, canvas"),r.$imageWrapEl=r.$imageEl.parent("."+s.containerClass)),r.$imageEl&&0!==r.$imageEl.length){r.$slideEl.addClass(""+s.zoomedSlideClass);var o,l,d,p,c,u,h,v,f,m,g,b,w,y,x,T;void 0===n.touchesStart.x&&t?(o="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,l="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(o=n.touchesStart.x,l=n.touchesStart.y),i.scale=r.$imageWrapEl.attr("data-swiper-zoom")||s.maxRatio,i.currentScale=r.$imageWrapEl.attr("data-swiper-zoom")||s.maxRatio,t?(x=r.$slideEl[0].offsetWidth,T=r.$slideEl[0].offsetHeight,d=r.$slideEl.offset().left+x/2-o,p=r.$slideEl.offset().top+T/2-l,h=r.$imageEl[0].offsetWidth,v=r.$imageEl[0].offsetHeight,f=h*i.scale,m=v*i.scale,w=-(g=Math.min(x/2-f/2,0)),y=-(b=Math.min(T/2-m/2,0)),c=d*i.scale,u=p*i.scale,c<g&&(c=g),c>w&&(c=w),u<b&&(u=b),u>y&&(u=y)):(c=0,u=0),r.$imageWrapEl.transition(300).transform("translate3d("+c+"px, "+u+"px,0)"),r.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+i.scale+")")}},out:function(){var t=this,a=t.zoom,i=t.params.zoom,s=a.gesture;s.$slideEl||(s.$slideEl=t.clickedSlide?e(t.clickedSlide):t.slides.eq(t.activeIndex),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+i.containerClass)),s.$imageEl&&0!==s.$imageEl.length&&(a.scale=1,a.currentScale=1,s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),s.$slideEl.removeClass(""+i.zoomedSlideClass),s.$slideEl=void 0)},enable:function(){var t=this,a=t.zoom;if(!a.enabled){a.enabled=!0;var i=t.slides,s=!("touchstart"!==t.touchEvents.start||!p.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};p.gestures?(i.on("gesturestart",a.onGestureStart,s),i.on("gesturechange",a.onGestureChange,s),i.on("gestureend",a.onGestureEnd,s)):"touchstart"===t.touchEvents.start&&(i.on(t.touchEvents.start,a.onGestureStart,s),i.on(t.touchEvents.move,a.onGestureChange,s),i.on(t.touchEvents.end,a.onGestureEnd,s)),t.slides.each(function(i,s){var r=e(s);r.find("."+t.params.zoom.containerClass).length>0&&r.on(t.touchEvents.move,a.onTouchMove)})}},disable:function(){var t=this,a=t.zoom;if(a.enabled){t.zoom.enabled=!1;var i=t.slides,s=!("touchstart"!==t.touchEvents.start||!p.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};p.gestures?(i.off("gesturestart",a.onGestureStart,s),i.off("gesturechange",a.onGestureChange,s),i.off("gestureend",a.onGestureEnd,s)):"touchstart"===t.touchEvents.start&&(i.off(t.touchEvents.start,a.onGestureStart,s),i.off(t.touchEvents.move,a.onGestureChange,s),i.off(t.touchEvents.end,a.onGestureEnd,s)),t.slides.each(function(i,s){var r=e(s);r.find("."+t.params.zoom.containerClass).length>0&&r.off(t.touchEvents.move,a.onTouchMove)})}}},Q={name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(a){t[a]=Z[a].bind(e)}),l.extend(e,{zoom:t})},on:{init:function(){var e=this;e.params.zoom.enabled&&e.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){var t=this;t.zoom.enabled&&t.zoom.onTouchStart(e)},touchEnd:function(e){var t=this;t.zoom.enabled&&t.zoom.onTouchEnd(e)},doubleTap:function(e){var t=this;t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&t.zoom.toggle(e)},transitionEnd:function(){var e=this;e.zoom.enabled&&e.params.zoom.enabled&&e.zoom.onTransitionEnd()}}},J={loadInSlide:function(t,a){void 0===a&&(a=!0);var i=this,s=i.params.lazy;if(void 0!==t&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+t+'"]'):i.slides.eq(t),n=r.find("."+s.elementClass+":not(."+s.loadedClass+"):not(."+s.loadingClass+")");!r.hasClass(s.elementClass)||r.hasClass(s.loadedClass)||r.hasClass(s.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each(function(t,n){var o=e(n);o.addClass(s.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),p=o.attr("data-srcset"),c=o.attr("data-sizes");i.loadImage(o[0],d||l,p,c,!1,function(){if(void 0!==i&&null!==i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(p&&(o.attr("srcset",p),o.removeAttr("data-srcset")),c&&(o.attr("sizes",c),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(s.loadedClass).removeClass(s.loadingClass),r.find("."+s.preloaderClass).remove(),i.params.loop&&a){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var t=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(t.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0])}}),i.emit("lazyImageLoad",r[0],o[0])})}},load:function(){function t(e){if(l){if(s.children("."+r.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(n[e])return!0;return!1}function a(t){return l?e(t).attr("data-swiper-slide-index"):e(t).index()}var i=this,s=i.$wrapperEl,r=i.params,n=i.slides,o=i.activeIndex,l=i.virtual&&r.virtual.enabled,d=r.lazy,p=r.slidesPerView;if("auto"===p&&(p=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)s.children("."+r.slideVisibleClass).each(function(t,a){var s=l?e(a).attr("data-swiper-slide-index"):e(a).index();i.lazy.loadInSlide(s)});else if(p>1)for(var c=o;c<o+p;c+=1)t(c)&&i.lazy.loadInSlide(c);else i.lazy.loadInSlide(o);if(d.loadPrevNext)if(p>1||d.loadPrevNextAmount&&d.loadPrevNextAmount>1){for(var u=d.loadPrevNextAmount,h=p,v=Math.min(o+h+Math.max(u,h),n.length),f=Math.max(o-Math.max(h,u),0),m=o+p;m<v;m+=1)t(m)&&i.lazy.loadInSlide(m);for(var g=f;g<o;g+=1)t(g)&&i.lazy.loadInSlide(g)}else{var b=s.children("."+r.slideNextClass);b.length>0&&i.lazy.loadInSlide(a(b));var w=s.children("."+r.slidePrevClass);w.length>0&&i.lazy.loadInSlide(a(w))}}},ee={name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){var e=this;l.extend(e,{lazy:{initialImageLoaded:!1,load:J.load.bind(e),loadInSlide:J.loadInSlide.bind(e)}})},on:{beforeInit:function(){var e=this;e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)},init:function(){var e=this;e.params.lazy.enabled&&!e.params.loop&&0===e.params.initialSlide&&e.lazy.load()},scroll:function(){var e=this;e.params.freeMode&&!e.params.freeModeSticky&&e.lazy.load()},resize:function(){var e=this;e.params.lazy.enabled&&e.lazy.load()},scrollbarDragMove:function(){var e=this;e.params.lazy.enabled&&e.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){var e=this;e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&e.lazy.load()}}},te={LinearSpline:function(e,t){var a=function(){var e,t,a;return function(i,s){for(t=-1,e=i.length;e-t>1;)i[a=e+t>>1]<=s?t=a:e=a;return e}}();this.x=e,this.y=t,this.lastIndex=e.length-1;var i,s;return this.interpolate=function(e){return e?(s=a(this.x,e),i=s-1,(e-this.x[i])*(this.y[s]-this.y[i])/(this.x[s]-this.x[i])+this.y[i]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new te.LinearSpline(t.slidesGrid,e.slidesGrid):new te.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){function a(e){var t=e.rtl&&"horizontal"===e.params.direction?-r.translate:r.translate;"slide"===r.params.controller.by&&(r.controller.getInterpolateFunction(e),s=-r.controller.spline.interpolate(-t)),s&&"container"!==r.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(r.maxTranslate()-r.minTranslate()),s=(t-r.minTranslate())*i+e.minTranslate()),r.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,r),e.updateActiveIndex(),e.updateSlidesClasses()}var i,s,r=this,n=r.controller.control;if(Array.isArray(n))for(var o=0;o<n.length;o+=1)n[o]!==t&&n[o]instanceof $&&a(n[o]);else n instanceof $&&t!==n&&a(n)},setTransition:function(e,t){function a(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.$wrapperEl.transitionEnd(function(){r&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())}))}var i,s=this,r=s.controller.control;if(Array.isArray(r))for(i=0;i<r.length;i+=1)r[i]!==t&&r[i]instanceof $&&a(r[i]);else r instanceof $&&t!==r&&a(r)}},ae={name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;l.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:te.getInterpolateFunction.bind(e),setTranslate:te.setTranslate.bind(e),setTransition:te.setTransition.bind(e)}})},on:{update:function(){var e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},resize:function(){var e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},observerUpdate:function(){var e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},setTranslate:function(e,t){var a=this;a.controller.control&&a.controller.setTranslate(e,t)},setTransition:function(e,t){var a=this;a.controller.control&&a.controller.setTransition(e,t)}}},ie={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(t){var a=this,i=a.params.a11y;if(13===t.keyCode){var s=e(t.target);a.navigation&&a.navigation.$nextEl&&s.is(a.navigation.$nextEl)&&(a.isEnd&&!a.params.loop||a.slideNext(),a.isEnd?a.a11y.notify(i.lastSlideMessage):a.a11y.notify(i.nextSlideMessage)),a.navigation&&a.navigation.$prevEl&&s.is(a.navigation.$prevEl)&&(a.isBeginning&&!a.params.loop||a.slidePrev(),a.isBeginning?a.a11y.notify(i.firstSlideMessage):a.a11y.notify(i.prevSlideMessage)),a.pagination&&s.is("."+a.params.pagination.bulletClass)&&s[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&i.length>0&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&a.length>0&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var t=this,a=t.params.a11y;t.pagination&&t.params.pagination.clickable&&t.pagination.bullets&&t.pagination.bullets.length&&t.pagination.bullets.each(function(i,s){var r=e(s);t.a11y.makeElFocusable(r),t.a11y.addElRole(r,"button"),t.a11y.addElLabel(r,a.paginationBulletMessage.replace(/{{index}}/,r.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e=this;e.a11y.liveRegion&&e.a11y.liveRegion.length>0&&e.a11y.liveRegion.remove();var t,a;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&t.off("keydown",e.a11y.onEnterKey),a&&a.off("keydown",e.a11y.onEnterKey),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.off("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)}},se={name:"a11y",params:{a11y:{enabled:!1,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;l.extend(t,{a11y:{liveRegion:e('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(ie).forEach(function(e){t.a11y[e]=ie[e].bind(t)})},on:{init:function(){var e=this;e.params.a11y.enabled&&(e.a11y.init(),e.a11y.updateNavigation())},toEdge:function(){var e=this;e.params.a11y.enabled&&e.a11y.updateNavigation()},fromEdge:function(){var e=this;e.params.a11y.enabled&&e.a11y.updateNavigation()},paginationUpdate:function(){var e=this;e.params.a11y.enabled&&e.a11y.updatePagination()},destroy:function(){var e=this;e.params.a11y.enabled&&e.a11y.destroy()}}},re={init:function(){var e=this;if(e.params.history){if(!s.history||!s.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=re.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||s.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){var e=this;e.params.history.replaceState||s.removeEventListener("popstate",e.history.setHistoryPopState)},setHistoryPopState:function(){var e=this;e.history.paths=re.getPathValues(),e.history.scrollToSlide(e.params.speed,e.history.paths.value,!1)},getPathValues:function(){var e=s.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){var a=this;if(a.history.initialized&&a.params.history.enabled){var i=a.slides.eq(t),r=re.slugify(i.attr("data-history"));s.location.pathname.includes(e)||(r=e+"/"+r);var n=s.history.state;n&&n.value===r||(a.params.history.replaceState?s.history.replaceState({value:r},null,r):s.history.pushState({value:r},null,r))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(re.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},ne={name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;l.extend(e,{history:{init:re.init.bind(e),setHistory:re.setHistory.bind(e),setHistoryPopState:re.setHistoryPopState.bind(e),scrollToSlide:re.scrollToSlide.bind(e),destroy:re.destroy.bind(e)}})},on:{init:function(){var e=this;e.params.history.enabled&&e.history.init()},destroy:function(){var e=this;e.params.history.enabled&&e.history.destroy()},transitionEnd:function(){var e=this;e.history.initialized&&e.history.setHistory(e.params.history.key,e.activeIndex)}}},oe={onHashCange:function(){var e=this,t=d.location.hash.replace("#","");t!==e.slides.eq(e.activeIndex).attr("data-hash")&&e.slideTo(e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index())},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&s.history&&s.history.replaceState)s.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");d.location.hash=a||""}},init:function(){var t=this;if(!(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)){t.hashNavigation.initialized=!0;var a=d.location.hash.replace("#","");if(a)for(var i=0,r=t.slides.length;i<r;i+=1){var n=t.slides.eq(i);if((n.attr("data-hash")||n.attr("data-history"))===a&&!n.hasClass(t.params.slideDuplicateClass)){var o=n.index();t.slideTo(o,0,t.params.runCallbacksOnInit,!0)}}t.params.hashNavigation.watchState&&e(s).on("hashchange",t.hashNavigation.onHashCange)}},destroy:function(){var t=this;t.params.hashNavigation.watchState&&e(s).off("hashchange",t.hashNavigation.onHashCange)}},le={name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;l.extend(e,{hashNavigation:{initialized:!1,init:oe.init.bind(e),destroy:oe.destroy.bind(e),setHash:oe.setHash.bind(e),onHashCange:oe.onHashCange.bind(e)}})},on:{init:function(){var e=this;e.params.hashNavigation.enabled&&e.hashNavigation.init()},destroy:function(){var e=this;e.params.hashNavigation.enabled&&e.hashNavigation.destroy()},transitionEnd:function(){var e=this;e.hashNavigation.initialized&&e.hashNavigation.setHash()}}},de={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=l.nextTick(function(){e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0===e?(t.autoplay.paused=!1,t.autoplay.run()):t.$wrapperEl.transitionEnd(function(){t&&!t.destroyed&&(t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())})))}},pe={name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,disableOnInteraction:!0,stopOnLastSlide:!1}},create:function(){var e=this;l.extend(e,{autoplay:{running:!1,paused:!1,run:de.run.bind(e),start:de.start.bind(e),stop:de.stop.bind(e),pause:de.pause.bind(e)}})},on:{init:function(){var e=this;e.params.autoplay.enabled&&e.autoplay.start()},beforeTransitionStart:function(e,t){var a=this;a.autoplay.running&&(t||!a.params.autoplay.disableOnInteraction?a.autoplay.pause(e):a.autoplay.stop())},sliderFirstMove:function(){var e=this;e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},destroy:function(){var e=this;e.autoplay.running&&e.autoplay.stop()}}},ce={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var t=this,a=t.slides,i=t.$wrapperEl;if(a.transition(e),t.params.virtualTranslate&&0!==e){var s=!1;a.transitionEnd(function(){if(!s&&t&&!t.destroyed){s=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)i.trigger(e[a])}})}}},ue={name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){var e=this;l.extend(e,{fadeEffect:{setTranslate:ce.setTranslate.bind(e),setTransition:ce.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};l.extend(e.params,t),l.extend(e.originalParams,t)}},setTranslate:function(){var e=this;"fade"===e.params.effect&&e.fadeEffect.setTranslate()},setTransition:function(e){var t=this;"fade"===t.params.effect&&t.fadeEffect.setTransition(e)}}},he={setTranslate:function(){var t,a=this,i=a.$el,s=a.$wrapperEl,r=a.slides,n=a.width,o=a.height,l=a.rtl,d=a.size,p=a.params.cubeEffect,c=a.isHorizontal(),u=a.virtual&&a.params.virtual.enabled,h=0;p.shadow&&(c?(0===(t=s.find(".swiper-cube-shadow")).length&&(t=e('<div class="swiper-cube-shadow"></div>'),s.append(t)),t.css({height:n+"px"})):0===(t=i.find(".swiper-cube-shadow")).length&&(t=e('<div class="swiper-cube-shadow"></div>'),i.append(t)));for(var v=0;v<r.length;v+=1){var f=r.eq(v),g=v;u&&(g=parseInt(f.attr("data-swiper-slide-index"),10));var b=90*g,w=Math.floor(b/360);l&&(b=-b,w=Math.floor(-b/360));var y=Math.max(Math.min(f[0].progress,1),-1),x=0,T=0,E=0;g%4==0?(x=4*-w*d,E=0):(g-1)%4==0?(x=0,E=4*-w*d):(g-2)%4==0?(x=d+4*w*d,E=d):(g-3)%4==0&&(x=-d,E=3*d+4*d*w),l&&(x=-x),c||(T=x,x=0);var S="rotateX("+(c?0:-b)+"deg) rotateY("+(c?b:0)+"deg) translate3d("+x+"px, "+T+"px, "+E+"px)";if(y<=1&&y>-1&&(h=90*g+90*y,l&&(h=90*-g-90*y)),f.transform(S),p.slideShadows){var C=c?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=c?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=e('<div class="swiper-slide-shadow-'+(c?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=e('<div class="swiper-slide-shadow-'+(c?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=Math.max(-y,0)),M.length&&(M[0].style.opacity=Math.max(y,0))}}if(s.css({"-webkit-transform-origin":"50% 50% -"+d/2+"px","-moz-transform-origin":"50% 50% -"+d/2+"px","-ms-transform-origin":"50% 50% -"+d/2+"px","transform-origin":"50% 50% -"+d/2+"px"}),p.shadow)if(c)t.transform("translate3d(0px, "+(n/2+p.shadowOffset)+"px, "+-n/2+"px) rotateX(90deg) rotateZ(0deg) scale("+p.shadowScale+")");else{var z=Math.abs(h)-90*Math.floor(Math.abs(h)/90),P=1.5-(Math.sin(2*z*Math.PI/360)/2+Math.cos(2*z*Math.PI/360)/2),k=p.shadowScale,$=p.shadowScale/P,I=p.shadowOffset;t.transform("scale3d("+k+", 1, "+$+") translate3d(0px, "+(o/2+I)+"px, "+-o/2/$+"px) rotateX(-90deg)")}var L=m.isSafari||m.isUiWebView?-d/2:0;s.transform("translate3d(0px,0,"+L+"px) rotateX("+(a.isHorizontal()?0:h)+"deg) rotateY("+(a.isHorizontal()?-h:0)+"deg)")},setTransition:function(e){var t=this,a=t.$el;t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&a.find(".swiper-cube-shadow").transition(e)}},ve={name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){var e=this;l.extend(e,{cubeEffect:{setTranslate:he.setTranslate.bind(e),setTransition:he.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};l.extend(e.params,t),l.extend(e.originalParams,t)}},setTranslate:function(){var e=this;"cube"===e.params.effect&&e.cubeEffect.setTranslate()},setTransition:function(e){var t=this;"cube"===t.params.effect&&t.cubeEffect.setTransition(e)}}},fe={setTranslate:function(){for(var t=this,a=t.slides,i=0;i<a.length;i+=1){var s=a.eq(i),r=s[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(t.isHorizontal()?t.rtl&&(n=-n):(d=l,l=0,o=-n,n=0),s[0].style.zIndex=-Math.abs(Math.round(r))+a.length,t.params.flipEffect.slideShadows){var p=t.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=t.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=e('<div class="swiper-slide-shadow-'+(t.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(t.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,a=t.slides,i=t.activeIndex,s=t.$wrapperEl;if(a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;a.eq(i).transitionEnd(function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)s.trigger(e[a])}})}}},me={name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){var e=this;l.extend(e,{flipEffect:{setTranslate:fe.setTranslate.bind(e),setTransition:fe.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};l.extend(e.params,t),l.extend(e.originalParams,t)}},setTranslate:function(){var e=this;"flip"===e.params.effect&&e.flipEffect.setTranslate()},setTransition:function(e){var t=this;"flip"===t.params.effect&&t.flipEffect.setTransition(e)}}},ge={setTranslate:function(){for(var t=this,a=t.width,i=t.height,s=t.slides,r=t.$wrapperEl,n=t.slidesSizesGrid,o=t.params.coverflowEffect,l=t.isHorizontal(),d=t.translate,p=l?a/2-d:i/2-d,c=l?o.rotate:-o.rotate,u=o.depth,h=0,v=s.length;h<v;h+=1){var f=s.eq(h),g=n[h],b=(p-f[0].swiperSlideOffset-g/2)/g*o.modifier,w=l?c*b:0,y=l?0:c*b,x=-u*Math.abs(b),T=l?0:o.stretch*b,E=l?o.stretch*b:0;Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(x)<.001&&(x=0),Math.abs(w)<.001&&(w=0),Math.abs(y)<.001&&(y=0);var S="translate3d("+E+"px,"+T+"px,"+x+"px)  rotateX("+y+"deg) rotateY("+w+"deg)";if(f.transform(S),f[0].style.zIndex=1-Math.abs(Math.round(b)),o.slideShadows){var C=l?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=l?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=e('<div class="swiper-slide-shadow-'+(l?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=e('<div class="swiper-slide-shadow-'+(l?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=b>0?b:0),M.length&&(M[0].style.opacity=-b>0?-b:0)}}m.ie&&(r[0].style.perspectiveOrigin=p+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},be={name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){var e=this;l.extend(e,{coverflowEffect:{setTranslate:ge.setTranslate.bind(e),setTransition:ge.setTransition.bind(e)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){var e=this;"coverflow"===e.params.effect&&e.coverflowEffect.setTranslate()},setTransition:function(e){var t=this;"coverflow"===t.params.effect&&t.coverflowEffect.setTransition(e)}}};return $.use([I,L,D,O,H,X,G,V,W,j,K,_,Q,ee,ae,se,ne,le,pe,ue,ve,me,be]),$});
//# sourceMappingURL=swiper.min.js.map
/*** end swiper slider */

// Data Events

var modalData = {
    "products" : [
        {
            id: 1,
            start: '2024-07-19',
            end: '2024-08-15',
            urlImg: '../assets/images/products/image01.png',
            txtHeading: '冷感グッズで「涼」を感じよう！',
            date: '7月19日～8月15日',
            url: '',
            txtUrl: '2F anyFAM anySIS前',
            urlMall: 'https://www.aeon.jp/sc/tomiya/event/24coolshare.html',
            txtDescription: '各店舗イチ押しの冷感グッズ・「涼」を感じられる商品が一同に展開されます。見て、聞いて、感じて「「涼」を体感してください！',
            note: '',
            sponsors: '',
            province: '北海道・東北エリア',
            district: '宮城県',
            store: 'イオンモール富谷（とみや）',
        },
        {
            id: 2,
            start: '2024-06-01',
            end: '2024-06-30',
            urlImg: '../assets/images/products/image02.jpg',
            txtHeading: '紫外線＆湿気対策特集',
            date: '6/1～6/30',
            url: '',
            txtUrl: 'HP',
            urlMall: 'https://www.aeon.jp/sc/sakudaira/event/24coolshare.html',
            txtDescription: '暑い夏を快適に過ごすためのグッズをご紹介！',
            note: '',
            sponsors: '',
            province: '中部エリア',
            district: '長野県',
            store: 'イオンモール佐久平',
        },
        {
            id: 3,
            start: '2024-07-10',
            end: '2024-08-31',
            urlImg: '../assets/images/products/dummy.png',
            txtHeading: '熱中症対策グッズ特集',
            date: '7月10日～8月31日',
            url: '',
            txtUrl: 'HP特集',
            urlMall: 'https://kisarazu-aeonmall.com/news/event/3250',
            txtDescription: '真夏に必須！熱中症対策グッズ特集',
            note: '',
            sponsors: '',
            province: '関東エリア',
            district: '千葉県',
            store: 'イオンモール木更津',
        },
        {
            id: 4,
            start: '2024-06-01',
            end: '2024-08-31',
            urlImg: '../assets/images/products/image04.jpg',
            txtHeading: '梅雨対策・UV対策特集',
            date: '～8月31日',
            url: '',
            txtUrl: '',
            urlMall: 'https://toin-aeonmall.com/news/event/2994',
            txtDescription: 'レインブーツや日傘など、専門店おすすめグッズを紹介します！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール東員',
        },
        {
            id: 5,
            start: '2024-06-01',
            end: '2024-06-30',
            urlImg: '../assets/images/products/image05.png',
            txtHeading: '夏ファッション特集',
            date: '6/1～6/30',
            url: '',
            txtUrl: 'イオンモール土岐HP',
            urlMall: 'https://toki.aeonmall.com/news/event/677',
            txtDescription: '暑い夏を涼しくおしゃれにすごすためのファッションアイテムを特集にてご紹介いたします！',
            note: '',
            sponsors: '',
            province: '中部エリア',
            district: '岐阜県',
            store: 'イオンモール土岐(とき)',
        },
        {
            id: 6,
            start: '2024-06-01',
            end: '2024-06-30',
            urlImg: '../assets/images/products/image06.png',
            txtHeading: '暑さ対策アイテム特集',
            date: '6/1～6/30',
            url: '',
            txtUrl: 'イオンモール土岐HP',
            urlMall: 'https://toki.aeonmall.com/news/event/677',
            txtDescription: '厳しい暑さを乗り越えるための必須アイテムを特集にてご紹介いたします！',
            note: '',
            sponsors: '',
            province: '中部エリア',
            district: '岐阜県',
            store: 'イオンモール土岐(とき)',
        },
       {
            id: 7,
            start: '2024-06-01',
            end: '2024-06-30',
            urlImg: '../assets/images/products/image07.jpg',
            txtHeading: 'Tシャツコレクション',
            date: '6月1日（土）～6月30日（日）',
            url: '',
            txtUrl: 'イオンモール東浦　館内',
            urlMall: 'https://higashiura-aeonmall.com/news/event/3516',
            urlMall2: 'https://higashiura-aeonmall.com/special/lists/higahiurat',
            txtDescription: 'イオンモール東浦より厳選した夏のバラエティー豊かなTシャツコレクションを開催。見て涼しい、着て涼しいをお届けします！',
            note: '※昨年のイメージ',
            sponsors: '',
            province: '中部エリア',
            district: '愛知県',
            store: 'イオンモール東浦',
       },
       {
            id: 8,
            start: '2024-07-12',
            end: '2024-08-31',
            urlImg: '../assets/images/products/image08.jpg',
            txtHeading: '夏を快適に過ごしたいおすすめグッズ特集',
            date: '7/12～8/31',
            url: '',
            txtUrl: '対象店舗にて',
            urlMall: 'https://kyoto-aeonmall.com/news/event/4789',
            txtDescription: 'イオンモールKYOTOよりこの夏を快適に過ごせるおすすめの商品をご紹介します！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '京都府',
            store: 'イオンモールKYOTO',
       },
        {
            id: 9,
            start: '2024-05-30',
            end: '2024-07-31',
            urlImg: '../assets/images/products/image09.png',
            txtHeading: '超COOLVP',
            date: '5/30-7/31',
            url: '',
            txtUrl: '1階共用通路',
            urlMall: 'https://wakayama-aeonmall.com/news/event/3996',
            txtDescription: '20店舗参加の集合VP。レジャーと仕事、おうちの3つのコンセプトで展開！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '和歌山県',
            store: 'イオンモール和歌山',
        },
       {
            id: 10,
            start: '2024-06-01',
            end: '2024-07-31',
            urlImg: '../assets/images/products/dummy.png',
            txtHeading: 'COOL作成特集',
            date: '6/1～7/31',
            url: '',
            txtUrl: 'HP',
            urlMall: 'https://sakaikitahanada-aeonmall.com/news/event/3453',
            txtDescription: '',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '大阪府',
            store: 'イオンモール堺北花田',
       },
    //    {
    //         id: 11,
    //         start: '2024-06-05',
    //         end: '2024-07-31',
    //         urlImg: '../assets/images/products/dummy.png',
    //         txtHeading: 'ひんやりグッズ特集',
    //         date: '6/5～7/31',
    //         url: '',
    //         txtUrl: 'WEB /館内',
    //         urlMall: 'https://www.aeon.jp/sc/ibaraki/event/24coolshare.html',
    //         txtDescription: 'お出かけも おうちでも ひんやり<br>暑い夏を快適に過ごそう！<br>『ひんやりグッズ』特集',
    //         note: '',
    //         sponsors: '',
    //         province: '近畿エリア',
    //         district: '大阪府',
    //         store: 'イオンモール茨木（いばらき）',
    //    },
        {
            id: 12,
            start: '2024-06-01',
            end: '2024-07-31',
            urlImg: '../assets/images/products/image12.jpg',
            txtHeading: 'サマーレジャーdeCool',
            date: '2024年6月1日(土)～7月31日(水)',
            url: '',
            txtUrl: 'イオンモール八幡東　対象店舗',
            urlMall: 'https://yahatahigashi.aeonmall.com/news/event/881',
            txtDescription: '涼を感じるアイテムや、涼やかなファッションをご提案！イオンモール八幡東で夏を楽しんでください♪',
            note: '',
            sponsors: '',
            province: '九州・沖縄エリア',
            district: '福岡県',
            store: 'イオンモール八幡東',
        },
        {
            id: 13,
            start: '2024-06-01',
            end: '2024-07-31',
            urlImg: '../assets/images/products/image13.jpg',
            txtHeading: 'お仕事・学校deCool',
            date: '2024年6月1日(土)～7月31日(水)',
            url: '',
            txtUrl: 'イオンモール八幡東　対象店舗',
            urlMall: 'https://yahatahigashi.aeonmall.com/news/event/881',
            txtDescription: '快適な夏に活躍するアイテムをご紹介！<br>今年の夏をCoolに過ごしましょう。',
            note: '',
            sponsors: '',
            province: '九州・沖縄エリア',
            district: '福岡県',
            store: 'イオンモール八幡東',
        },
        {
            id: 14,
            start: '',
            end: '',
            urlImg: '../assets/images/products/image14.jpg',
            txtHeading: 'おうちdeCool',
            date: '',
            url: '',
            txtUrl: 'イオンモール八幡東　対象店舗',
            urlMall: 'https://yahatahigashi.aeonmall.com/news/event/881',
            txtDescription: '夏のおうち時間が楽しくなるようなアイテムをご紹介します！',
            note: '',
            sponsors: '',
            province: '九州・沖縄エリア',
            district: '福岡県',
            store: 'イオンモール八幡東',
        },
        {
            id: 16,
            start: '2024-06-18',
            end: '2024-07-15',
            urlImg: '../assets/images/products/image16.jpg',
            txtHeading: 'COOLグッズ・接触冷感素材VP',
            date: '6/18～7/15',
            url: '',
            txtUrl: '1階メイン通路',
            urlMall: 'https://tsukuba-aeonmall.com/news/event/3166',
            txtDescription: 'COOLグッズと接触冷感素材アパレルの訴求。<br>※写真は昨年の夏を乗り切るアイテムVPです。',
            note: '',
            sponsors: '',
            province: '関東エリア',
            district: '茨城県',
            store: 'イオンモールつくば',
        },
        {
            id: 17,
            start: '2024-06-01',
            end: '2024-06-30',
            urlImg: '../assets/images/products/image17.jpg',
            txtHeading: 'HP特集（超！COOL作戦）',
            date: '6月1日（土）～6月30日（日）',
            url: '',
            txtUrl: '',
            urlMall: 'https://www.aeon.jp/sc/meiwa/event/24coolshare.html',
            txtDescription: 'クールビズ・USB扇風機・通勤カバン・熱中症対策グッズ等の紹介ページを展開',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール明和',
        },
        {
            id: 18,
            start: '2024-06-01',
            end: '2024-06-30',
            urlImg: '../assets/images/products/image18.jpg',
            txtHeading: 'アプリクーポン（超COOL作戦）',
            date: '6月1日（土）～6月30日（日）',
            url: '',
            txtUrl: '',
            urlMall: 'https://www.aeon.jp/sc/meiwa/event/24coolshare.html',
            txtDescription: '日除けグッズやクール商品扱いの店舗さまのクーポンの発行※企画内容は変更となる場合がございます。',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール明和',
        },
        {
            id: 19,
            start: '2024-06-01',
            end: '2024-07-31',
            urlImg: '../assets/images/products/image15.jpg',
            txtHeading: 'イオンモールがどんなときも暑さ対策を徹底応援！『超COOL 作戦』',
            date: '6/1(土)～7/31(水)',
            url: '',
            txtUrl: '',
            urlMall: 'https://kashihara-aeonmall.com/news/event/4558',
            txtDescription: '夏を快適に楽しく過ごしていただくための商品をご提案します！<br>イオンモール橿原で暑さ対策しましょう！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '奈良県',
            store: 'イオンモール橿原（かしはら）',
        },
        {
            id: 20,
            start: '2024-06-01',
            end: '2024-07-31',
            urlImg: '../assets/images/products/image20.jpg',
            txtHeading: 'COOL作成特集',
            date: '6/1～7/31',
            url: '',
            txtUrl: 'HP',
            urlMall: 'https://sakaikitahanada-aeonmall.com/news/event/3453',
            txtDescription: '夏の暑さの対策や、夏を楽しんでいただける涼に関する商品をご紹介！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '大阪府',
            store: 'イオンモール堺北花田',
        },
        {
            id: 21,
            start: '2024-06-17',
            end: '2024-08-19',
            urlImg: '../assets/images/products/dummy.png',
            txtHeading: '大日　超COOL　SPOT',
            date: '6/17～8/19',
            url: '',
            txtUrl: '1F　カルディコーヒー前',
            urlMall: 'https://www.aeon.jp/sc/dainichi/event/24coolshare.html',
            txtDescription: '扇風機20台が並び、大日のCOOLSPOTが出現。館内で厚い夏を乗り切ろう',
            note: '',
            sponsors: 'ジョーシン　イオンモール大日店',
            province: '近畿エリア',
            district: '大阪府',
            store: 'イオンモール大日',
        },
        {
            id: 22,
            start: '2024-06-05',
            end: '2024-07-31',
            urlImg: '../assets/images/products/image22.jpg',
            txtHeading: 'COOL COLLECTION',
            date: '6/5～7/31',
            url: '',
            txtUrl: 'WEB /館内',
            urlMall: 'https://www.aeon.jp/sc/ibaraki/event/24coolshare.html',
            txtDescription: 'お出かけも おうちでも ひんやり<br>暑い夏を快適に過ごそう！<br>『COOL　COLLECTION』',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '大阪府',
            store: 'イオンモール茨木（いばらき）',
        },
        {
            id: 23,
            start: '2024-07-01',
            end: '2024-07-31',
            urlImg: '../assets/images/products/image23.png',
            txtHeading: '涼感グッズVPの実施と特集ページ',
            date: '7/1～7/31',
            url: '',
            txtUrl: '2F北エスカレーター付近及びHP',
            urlMall: 'https://aeonmall-okayama.com/news/event/3591',
            txtDescription: '暑い夏を快適に過ごせるアイテムをご紹介。イオンモール岡山で涼感アイテムをGETして今年の夏を乗り切ろう！',
            note: '',
            sponsors: '同友店各社',
            province: '中国・四国エリア',
            district: '岡山県',
            store: 'イオンモール岡山',
        },
    ],
    "events" : [
        {
            id: 1,
            start: '2024-06-01',
            end: '2024-09-01',
            urlImg: '../assets/images/events/image01.jpg',
            txtHeading: '子どものあそび場「もくいくひろば」',
            date: '6月1日(土)～9月1日(日)',
            url: '',
            txtUrl: '2階北中央広場',
            urlMall: 'https://morioka-aeonmall.com/news/event/3229',
            txtDescription: '5月2日OPEN<br>環境保全に配慮した岩手県産の間伐材を活用した木のぬくもりあふれる子どもの遊び場。涼しい館内で楽しめるスポットです。',
            note: '',
            sponsors: '',
            province: '北海道・東北エリア',
            district: '岩手県',
            store: 'イオンモール盛岡',
        },
        {
            id: 2,
            start: '2024-06-16',
            end: '2024-06-16',
            urlImg: '../assets/images/events/image02.png',
            txtHeading: 'エレクトーン☆プレミアムコンサート',
            date: '6月16日(日)',
            url: '',
            txtUrl: '1階イーハトーブ広場',
            urlMall: 'https://morioka-aeonmall.com/news/event/3229',
            txtDescription: '東山堂ヤマハエレクトーン教室の生徒による演奏会です！素敵な演奏を聴きに来て下さい！<br>主催：東山堂メルト ヤマハ音楽教室',
            note: '',
            sponsors: '',
            province: '北海道・東北エリア',
            district: '岩手県',
            store: 'イオンモール盛岡',
        },
        {
            id: 3,
            start: '2024-06-20',
            end: '2024-06-30',
            urlImg: '../assets/images/events/image03.png',
            txtHeading: 'まなびの『OTONAクラス』',
            date: '6月20日・30日',
            url: '',
            txtUrl: '1階イーハトーブ広場横 西共用通路',
            urlMall: 'https://morioka-aeonmall.com/news/event/3229',
            txtDescription: 'ステキな作家さんの講座を、毎月20・30日に開催！日替りでアイテムが作れます！イオンモール盛岡で"知る"を楽しもう！',
            note: '',
            sponsors: '',
            province: '北海道・東北エリア',
            district: '岩手県',
            store: 'イオンモール盛岡',
        },
        {
            id: 4,
            start: '2024-06-01',
            end: '2024-06-30',
            urlImg: '../assets/images/events/image04.jpg',
            txtHeading: '夕涼みショッピング！<br>アフター5クーポン',
            date: '6月1日～6月30日',
            url: '',
            txtUrl: '館内',
            urlMall: 'https://tendo-aeonmall.com/news/event/3513',
            txtDescription: '17時以降使用できるおトクなクーポンをイオンモールアプリにて配信！',
            note: '',
            sponsors: '',
            province: '北海道・東北エリア',
            district: '山形県',
            store: 'イオンモール天童',
        },
        {
            id: 5,
            start: '2024-05-07',
            end: '',
            urlImg: '../assets/images/events/image05.jpg',
            txtHeading: '夕涼みショッピング！<br>アフター5ワゴンセール',
            date: '5月7日～毎日',
            url: '',
            txtUrl: '館内',
            urlMall: 'https://tendo-aeonmall.com/news/event/3513',
            txtDescription: '17時以降対象専門店店頭でワゴンセールを開催！',
            note: '',
            sponsors: '',
            province: '北海道・東北エリア',
            district: '山形県',
            store: 'イオンモール天童',
        },
        {
            id: 6,
            start: '2024-06-16',
            end: '2024-06-16',
            urlImg: '../assets/images/events/image06.jpg',
            txtHeading: 'アルファベットUVレジンキーホルダー',
            date: '6月16日（日）',
            url: '',
            txtUrl: '2F　北イベントコート',
            urlMall: 'https://shinrifu-k.aeonmall.com/news/event/844',
            txtDescription: 'パパの名前のアルファベットやキラキラ素材をUVレジンでデコレーションして、<br>父の日に手作りキーホルダーをプレゼントしよう！',
            note: '',
            sponsors: '',
            province: '北海道・東北エリア',
            district: '宮城県',
            store: 'イオンモール新利府　北館',
        },
        {
            id: 7,
            start: '2024-06-23',
            end: '2024-06-23',
            urlImg: '../assets/images/events/image07.jpg',
            txtHeading: 'ずんだ餅パフェストラップを作ろう',
            date: '6月23日（日）',
            url: '',
            txtUrl: '2F　はやぶさブリッジ',
            urlMall: 'https://shinrifu-k.aeonmall.com/news/event/844',
            txtDescription: '宮城県といえば「ずんだ餅」！かわいいずんだ餅パフェストラップを作ってみよう！',
            note: '',
            sponsors: '',
            province: '北海道・東北エリア',
            district: '宮城県',
            store: 'イオンモール新利府　北館',
        },
        {
            id: 8,
            start: '2024-06-29',
            end: '2024-06-29',
            urlImg: '../assets/images/events/image08.jpg',
            txtHeading: 'クレープキーホルダーを作ろう',
            date: '6月29日（土）',
            url: '',
            txtUrl: '2F はやぶさブリッジ',
            urlMall: 'https://shinrifu-k.aeonmall.com/news/event/844',
            txtDescription: '数種フルーツ・ブラウニーの中から１つ選んで、おいしそうなクレープキーホルダーを作ろう！',
            note: '',
            sponsors: '',
            province: '北海道・東北エリア',
            district: '宮城県',
            store: 'イオンモール新利府　北館',
        },
        {
            id: 9,
            start: '2024-07-14',
            end: '2024-07-14',
            urlImg: '../assets/images/events/image09.png',
            txtHeading: 'ティーナ・カリーナ ミニLIVE',
            date: '7月14日（日）',
            url: '',
            txtUrl: '1F フードフォレスト',
            urlMall: 'https://shinrifu-k.aeonmall.com/news/event/844',
            txtDescription: 'ミニLIVEを 1F フードフォレストにて開催',
            note: '',
            sponsors: '',
            province: '北海道・東北エリア',
            district: '宮城県',
            store: 'イオンモール新利府　北館',
        },
        {
            id: 10,
            start: '2024-07-21',
            end: '2024-07-21',
            urlImg: '../assets/images/events/image10.jpg',
            txtHeading: 'スライムクリームソーダ',
            date: '7月21日（日）',
            url: '',
            txtUrl: '2F 北イベントコート',
            urlMall: 'https://shinrifu-k.aeonmall.com/news/event/844',
            txtDescription: '可愛い透明カップに好きな色のスライムを入れて、夏にぴったりのミニクリームソーダを作ろう!',
            note: '',
            sponsors: '',
            province: '北海道・東北エリア',
            district: '宮城県',
            store: 'イオンモール新利府　北館',
        },
        {
            id: 11,
            start: '2024-06-01',
            end: '2024-09-01',
            urlImg: '../assets/images/events/image11.jpg',
            txtHeading: 'イオンモールウォーキングクラブ',
            date: '毎月第2・第3・第4水曜日',
            url: '',
            txtUrl: '集合場所：1F センターコート',
            urlMall: 'https://www.aeon.jp/sc/moriokaminami/event/24coolshare.html',
            txtDescription: 'ジュージヤカルチャーセンター講師の先生がストレッチからウォーキングまでしっかりお手伝いします。館内で涼しく運動ができます',
            note: '',
            sponsors: 'ジュージヤカルチャーセンター',
            province: '北海道・東北エリア',
            district: '岩手県',
            store: 'イオンモール盛岡南',
        },
        {
            id: 12,
            start: '2024-06-22',
            end: '2024-06-23',
            urlImg: '../assets/images/events/image12.png',
            txtHeading: '化石＆鉱石発掘体験',
            date: '6/22-23',
            url: '',
            txtUrl: '1F　セントラルコート',
            urlMall: 'https://www.aeon.jp/sc/sakudaira/event/24coolshare.html',
            txtDescription: '時間：10：00～16：00　※無くなり次第終了<br>先着：各日100名<br>親子で楽しく化石＆鉱石について学べます！',
            note: '',
            sponsors: '',
            province: '中部エリア',
            district: '長野県',
            store: 'イオンモール佐久平',
        },
        {
            id: 13,
            start: '2024-06-01',
            end: '2024-06-01',
            urlImg: '../assets/images/events/image13.png',
            txtHeading: 'イオンモール川口前川グランプリ',
            date: '6/1',
            url: '',
            txtUrl: 'サウスコート',
            urlMall: 'https://kawaguchimaekawa-aeonmall.com/news/event/3510',
            txtDescription: '涼しいイオンモールでバイクに乗って走っちゃおう！※小学生以下限定',
            note: '',
            sponsors: '',
            province: '関東エリア',
            district: '埼玉県',
            store: 'イオンモール川口前川',
        },
        {
            id: 14,
            start: '2024-06-02',
            end: '2024-06-02',
            urlImg: '../assets/images/events/image14.png',
            txtHeading: 'ものづくりのまち川口<br>カスタムバイクのものづくりを知ろう！',
            date: '6/2',
            url: '',
            txtUrl: 'サウスコート',
            urlMall: 'https://kawaguchimaekawa-aeonmall.com/news/event/3510',
            txtDescription: 'バイク好き集まれー！地元企業のカスタムショップがバイク、パーツをご紹介！',
            note: '',
            sponsors: 'モーターサイクルズバーン、エキセントリックモーターサイクル',
            province: '関東エリア',
            district: '埼玉県',
            store: 'イオンモール川口前川',
        },
        {
            id: 15,
            start: '2024-06-21',
            end: '2024-07-15',
            urlImg: '../assets/images/events/image15.png',
            txtHeading: 'オリジナルうちわの配布',
            date: '①6/21～30②7/12～15',
            url: '',
            txtUrl: '1Fセンターコート付近',
            urlMall: 'https://tsukuba-aeonmall.com/news/event/3166',
            txtDescription: '来場者に先着でうちわをプレゼント。館内外で是非ご利用ください！',
            note: '',
            sponsors: '',
            province: '関東エリア',
            district: '茨城県',
            store: 'イオンモールつくば',
        },
        {
            id: 16,
            start: '2024-07-15',
            end: '2024-07-15',
            urlImg: '../assets/images/events/dummy.png',
            txtHeading: 'ウォーターバトル',
            date: '7月15日(月・祝)',
            url: '',
            txtUrl: 'ライブパーク',
            urlMall: 'https://kisarazu-aeonmall.com/news/event/3250',
            txtDescription: '水鉄砲を使ったお子さま向けのサバゲー感覚イベント。夏の暑い時期に水遊びで涼しくなろう！',
            note: '',
            sponsors: '',
            province: '関東エリア',
            district: '千葉県',
            store: 'イオンモール木更津',
        },
        {
            id: 17,
            start: '2024-08-10',
            end: '2024-08-10',
            urlImg: '../assets/images/events/dummy.png',
            txtHeading: '溶けない雪のスノーパーク',
            date: '8月10日(土)',
            url: '',
            txtUrl: '1F　サウスアトリウム',
            urlMall: 'https://kisarazu-aeonmall.com/news/event/3250',
            txtDescription: 'フェイクスノーを敷き詰めて溶けない雪のスノー体験。夏の暑い時期に雪を感じながら遊んでいただけます！',
            note: '',
            sponsors: '',
            province: '関東エリア',
            district: '千葉県',
            store: 'イオンモール木更津',
        },
        {
            id: 18,
            start: '2024-08-03',
            end: '2024-08-04',
            urlImg: '../assets/images/events/dummy.png',
            txtHeading: 'ペンギンミスト迷路',
            date: '8月3日(土)～4(日)',
            url: '',
            txtUrl: 'ライブパーク',
            urlMall: 'https://kisarazu-aeonmall.com/news/event/3250',
            txtDescription: 'ミスト付きでひんやり冷たく遊べる迷路！夏の暑い時期にひんやり涼しめるクールスポットです。',
            note: '',
            sponsors: '',
            province: '関東エリア',
            district: '千葉県',
            store: 'イオンモール木更津',
        },
        {
            id: 19,
            start: '2024-06-01',
            end: '2024-07-07',
            urlImg: '../assets/images/events/image19.png',
            txtHeading: 'TANABATA MALL<br>TSUCHIURA',
            date: '6月1日～7月7日',
            url: '',
            txtUrl: '専門店街1階　スターバックス前',
            urlMall: 'https://www.aeon.jp/sc/tsuchiura/event/24coolshare.html',
            txtDescription: '短冊に想いを込めて飾りつけできるスポットやCOOLスポットが出現！<br>イオンモール土浦オリジナルロゴで館内を盛り上げます。',
            note: '',
            sponsors: '',
            province: '関東エリア',
            district: '茨城県',
            store: 'イオンモール土浦',
        },
        // {
        //     id: 20,
        //     start: '2024-06-23',
        //     end: '2024-06-23',
        //     urlImg: '../assets/images/events/dummy.png',
        //     txtHeading: '風鈴絵付けワークショップ',
        //     date: '6月23日(日)',
        //     url: '',
        //     txtUrl: '1F　正面入口Ⅽ　エスカレーター横　特設会場',
        //     urlMall: 'https://www.aeon.jp/sc/shimotsuma/event/24coolshare.html',
        //     txtDescription: '英語で楽しく遊びながら、風鈴の絵付けが出来ます。<br>出来上がった風鈴は、イオンモール下妻の館内に展示♪',
        //     note: '',
        //     sponsors: '',
        //     province: '関東エリア',
        //     district: '茨城県',
        //     store: 'イオンモール下妻（しもつま）',
        // },
        {
            id: 21,
            start: '2024-06-08',
            end: '2024-06-08',
            urlImg: '../assets/images/events/image21.jpg',
            txtHeading: '『AEON MALL Performance Project presents<br>‐ TOKAI DANCE Challengecup2024 ‐ in 三重 』 ',
            date: '6月8日',
            url: '',
            txtUrl: '1階 カブキコート',
            urlMall: 'https://toin-aeonmall.com/news/event/2994',
            txtDescription: '三重県内のイオンモールにて大型 DANCE コンテストの開幕！第1回予選はイオンモール東員で開催！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール東員',
        },
        {
            id: 22,
            start: '2024-07-02',
            end: '2024-07-02',
            urlImg: '../assets/images/events/image22.png',
            txtHeading: '理学療法士会×岐阜県健康福祉部　楽しく健康相談会',
            date: '2024/7/2',
            url: '',
            txtUrl: '1階　ノースコート',
            urlMall: 'https://www.aeon.jp/sc/kakamigahara/event/24coolshare.html',
            txtDescription: '保健師による健康相談、健康測定器、理学療法士による歩き方測定など、涼しい館内で「健康」について楽しく学んで体験できます！',
            note: '',
            sponsors: '岐阜県理学療法士会、岐阜県健康福祉部国民健康保険課',
            province: '中部エリア',
            district: '岐阜県',
            store: 'イオンモール各務原インター',
        },
        {
            id: 23,
            start: '2024-07-15',
            end: '2024-07-15',
            urlImg: '../assets/images/events/image23.jpg',
            txtHeading: 'イオンモール東浦の縁日　風鈴ワークショップ',
            date: '7月15日',
            url: '',
            txtUrl: '1階イーストコート',
            urlMall: 'https://higashiura-aeonmall.com/news/event/3516',
            txtDescription: 'オリジナルの風鈴を作ってみませんか？<br>無地の風鈴にマーカーを使って好きな絵や文字を描いていただく工作イベントです',
            note: '※写真はイメージです<br>※画像：株式会社FSPC',
            sponsors: '',
            province: '中部エリア',
            district: '愛知県',
            store: 'イオンモール東浦',
        },
        {
            id: 24,
            start: '2024-07-03',
            end: '2024-07-03',
            urlImg: '../assets/images/events/image24.jpg',
            txtHeading: 'モールde健康づくり',
            date: '7/3',
            url: '',
            txtUrl: '4階イオンホール',
            urlMall: 'https://nagakute-aeonmall.com/news/event/2570',
            txtDescription: '高齢者が自宅で継続的に行える筋トレが学べます。<br>脳を活性化する認知症予防体験会もあります。',
            note: '',
            sponsors: '長久手市',
            province: '中部エリア',
            district: '愛知県',
            store: 'イオンモール長久手',
        },
        // {
        //     id: 25,
        //     start: '2024-06-21',
        //     end: '2024-07-31',
        //     urlImg: '../assets/images/events/dummy.png',
        //     txtHeading: 'ももフェア',
        //     date: '6月21日～7月31日',
        //     url: '',
        //     txtUrl: '各階共用部',
        //     urlMall: 'https://www.aeon.jp/sc/atsuta/event/24coolshare.html',
        //     txtDescription: '夏が旬の桃メニューの訴求と同時に、涼しい館内でもも狩りを体験できるブースをご用意！',
        //     note: '',
        //     sponsors: '',
        //     province: '中部エリア',
        //     district: '愛知県',
        //     store: 'イオンモール熱田',
        // },
        {
            id: 26,
            start: '2024-07-13',
            end: '2024-07-15',
            urlImg: '../assets/images/events/dummy.png',
            txtHeading: 'お子さま縁日イベント',
            date: '7月13日～15日',
            url: '',
            txtUrl: '2F平安コート',
            urlMall: 'https://www.aeon.jp/sc/takanohara/event/24coolshare.html',
            txtDescription: '涼しいモール内で夏らしい縁日イベントを開催！ご家族皆さまで楽しめる射的やおもちゃすくいをご用意しています。',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '京都府',
            store: 'イオンモール高の原',
        },
        {
            id: 27,
            start: '2024-06-14',
            end: '2024-08-25',
            urlImg: '../assets/images/events/dummy.png',
            txtHeading: '駅前入り口クールスポット',
            date: '6月14日～8月25日',
            url: '',
            txtUrl: '2F駅前入り口',
            urlMall: 'https://www.aeon.jp/sc/takanohara/event/24coolshare.html',
            txtDescription: '高の原駅からイオンモールにに入るとたくさんの扇風機がみなさまを涼し～くお出迎えします！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '京都府',
            store: 'イオンモール高の原',
        },
        {
            id: 28,
            start: '2024-06-08',
            end: '2024-06-08',
            urlImg: '../assets/images/events/image28.png',
            txtHeading: 'みんなで取り組もう！熱中症ゼロプロジェクト!inイオンモール橿原',
            date: '6月8日',
            url: '',
            txtUrl: '1Fサンシャインコート',
            urlMall: 'https://kashihara-aeonmall.com/news/event/4558',
            txtDescription: '橿原市×大<span class="font-gothic">塚</span>製薬×住友生命×イオンモール橿原による熱中症予防対策イベント。',
            note: '',
            sponsors: '橿原市/大<span class="font-gothic">塚</span>製薬/住友生命',
            province: '近畿エリア',
            district: '奈良県',
            store: 'イオンモール橿原（かしはら）',
        },
        {
            id: 29,
            start: '2024-07-18',
            end: '2024-07-18',
            urlImg: '../assets/images/events/image29.png',
            txtHeading: 'スペシャルモールウォーキング',
            date: '7月18日',
            url: '',
            txtUrl: '1階サークルコート',
            urlMall: 'https://wakayama-aeonmall.com/news/event/3996',
            txtDescription: '指導者　デューク更家氏<br>老若男女問わずどなたでもご参加いただけます',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '和歌山県',
            store: 'イオンモール和歌山',
        },
        {
            id: 30,
            start: '2024-06-01',
            end: '2024-09-01',
            urlImg: '../assets/images/events/image30.png',
            txtHeading: '水の広場噴水ショー',
            date: '6月1日(土)～9月1日(日)',
            url: '',
            txtUrl: '1階ふじとパーク',
            urlMall: 'https://wakayama-aeonmall.com/news/event/3996',
            txtDescription: '約3分間の噴水ショーは、30分間隔で実施！なんと、噴水の最高到達点4m！！<br>夜にはライトアップも★',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '和歌山県',
            store: 'イオンモール和歌山',
        },
        {
            id: 31,
            start: '2024-07-12',
            end: '2024-09-15',
            urlImg: '../assets/images/events/image31.png',
            txtHeading: 'ミスト',
            date: '7月12日～9月中',
            url: '',
            txtUrl: '1階アウターモール',
            urlMall: 'https://wakayama-aeonmall.com/news/event/3996',
            txtDescription: '爽やかミストがアウターモールをひんやり覆います！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '和歌山県',
            store: 'イオンモール和歌山',
        },
        {
            id: 32,
            start: '2024-07-20',
            end: '2024-08-25',
            urlImg: '../assets/images/events/dummy.png',
            txtHeading: 'ラジオ体操 ',
            date: '7/20・21　7/27・28　8/3・4　8/17・18　8/24・25の土日10日間',
            url: '',
            txtUrl: '屋外広場',
            urlMall: 'https://sakaikitahanada-aeonmall.com/news/event/3453',
            txtDescription: '誰もが参加できる「ラジオ体操」を夏休みの土日合計10日間、屋外広場にて開催します！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '大阪府',
            store: 'イオンモール堺北花田',
        },
        {
            id: 33,
            start: '2024-07-19',
            end: '2024-08-18',
            urlImg: '../assets/images/events/dummy.png',
            txtHeading: 'TOMUSHIのカブクワすごいぞ！！イベント',
            date: '7月19日～8月18日',
            url: '',
            txtUrl: '2階 ハートマーケット横',
            urlMall: 'https://sakaikitahanada-aeonmall.com/news/event/3453',
            txtDescription: '夏休みの思い出、体験、SDGｓの取組をイオンモール堺北花田で学ぼう！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '大阪府',
            store: 'イオンモール堺北花田',
        },
        {
            id: 34,
            start: '2024-07-27',
            end: '2024-07-30',
            urlImg: '../assets/images/events/dummy.png',
            txtHeading: '貯金箱作ろう！',
            date: '7/27（土）、28（日）、30（火）',
            url: '',
            txtUrl: '3階　イオンホール',
            urlMall: 'https://sakaikitahanada-aeonmall.com/news/event/3453',
            txtDescription: '夏休みの宿題はイオンモール堺北花田で！オリジナル貯金箱をつくろう！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '大阪府',
            store: 'イオンモール堺北花田',
        },
        {
            id: 35,
            start: '2024-06-02',
            end: '2024-06-02',
            urlImg: '../assets/images/events/image35.png',
            txtHeading: 'お絵かき風鈴を作ろう！',
            date: '2024/6/2',
            url: '',
            txtUrl: '1階　水のコート',
            urlMall: 'https://shijonawate-aeonmall.com/news/event/3775',
            txtDescription: '陶器の風鈴にお絵かきをしてオリジナルの風鈴が作れます‼<br>初夏にぴったりな涼しげな音を楽しもう☆',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '大阪府',
            store: 'イオンモール四條畷',
        },
        {
            id: 36,
            start: '2024-07-19',
            end: '2024-09-01',
            urlImg: '../assets/images/events/image36.jpg',
            txtHeading: '夏休み限定スプラッシュ！<br>ふわふわウォータースライダー',
            date: '7/19～9/1',
            url: '',
            txtUrl: 'JR側屋外広場',
            urlMall: 'https://www.aeon.jp/sc/ibaraki/event/24coolshare.html',
            txtDescription: 'ふわふわウォータースライダーを全身で楽しもう！3種類のウォータースライダーをご用意しています。',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '大阪府',
            store: 'イオンモール茨木（いばらき）',
        },
        {
            id: 37,
            start: '2024-06-26',
            end: '2024-06-26',
            urlImg: '../assets/images/events/image37.png',
            txtHeading: 'イオンモールウォーキング',
            date: '6/26(水)',
            url: '',
            txtUrl: '専門店街1階南コート',
            urlMall: 'https://kochi-aeonmall.com/news/event/3708',
            txtDescription: 'イオンスポーツクラブのインストラクターによって、ウォーミングアップ＆館内にてウォーキングを実施いたします。',
            note: '',
            sponsors: '',
            province: '中国・四国エリア',
            district: '高知県',
            store: 'イオンモール高知',
        },
        {
            id: 38,
            start: '2024-07-14',
            end: '2024-07-14',
            urlImg: '../assets/images/events/dummy.png',
            txtHeading: '水合戦イベント',
            date: '7/14',
            url: '',
            txtUrl: '北側駐車場',
            urlMall: 'https://omuta-aeonmall.com/news/event/3799',
            txtDescription: '水鉄砲を用いて、大人数で一緒に楽しめる真夏にぴったりのウォーターアクティビティ',
            note: '',
            sponsors: '',
            province: '九州・沖縄エリア',
            district: '福岡県',
            store: 'イオンモール大牟田（おおむた）',
        },
        {
            id: 39,
            start: '2024-06-01',
            end: '2024-06-16',
            urlImg: '../assets/images/events/image39.png',
            txtHeading: '津屋崎祇園山笠　展示',
            date: '6月1日～6月16日',
            url: '',
            txtUrl: '１階センターコート',
            urlMall: 'https://fukutsu-aeonmall.com/news/event/4146',
            txtDescription: '今年で復活50年を迎える大迫力の津屋崎祇園山笠を展示！「山笠飾り作り体験」も開催！',
            note: '',
            sponsors: '',
            province: '九州・沖縄エリア',
            district: '福岡県',
            store: 'イオンモール福津',
        },
        {
            id: 40,
            start: '2024-06-01',
            end: '2024-06-16',
            urlImg: '../assets/images/events/image40.png',
            txtHeading: '家族の似顔絵展',
            date: '6月1日～6月16日',
            url: '',
            txtUrl: '2階　イオンホール',
            urlMall: 'https://fukutsu-aeonmall.com/news/event/4146',
            txtDescription: '近隣の幼稚園、保育園の園児さまが描いた似顔絵を展示します。<br>愛情あふれるカワイイにがおえをご覧ください。',
            note: '',
            sponsors: '',
            province: '九州・沖縄エリア',
            district: '福岡県',
            store: 'イオンモール福津',
        },
        {
            id: 41,
            start: '2024-06-01',
            end: '2024-06-01',
            urlImg: '../assets/images/events/image41.png',
            txtHeading: 'よしもと沖縄お笑いライブ',
            date: '2024年6月1日',
            url: '',
            txtUrl: '1階グランドスクエア',
            urlMall: 'https://okinawarycom-aeonmall.com/news/event/4570',
            txtDescription: 'よしもと営業ワングランプリ堂々の１位に輝いた「ジョイマン」と沖縄で活躍する「オリオンリーグ」によるお笑いステージです。',
            note: '',
            sponsors: '',
            province: '九州・沖縄エリア',
            district: '沖縄県',
            store: 'イオンモール沖縄ライカム',
        },
        {
            id: 42,
            start: '2024-06-02',
            end: '2024-06-02',
            urlImg: '../assets/images/events/image42.jpg',
            txtHeading: '「ウェルカム！ライカム！ のど自慢」グランドチャンピオン大会',
            date: '2024年6月2日',
            url: '',
            txtUrl: '1階グランドスクエア',
            urlMall: 'https://okinawarycom-aeonmall.com/news/event/4570',
            txtDescription: '毎回大盛況のライカムのど自慢の優勝者が大集合！グランドチャンピオンを決定します！<br><br>【審査員・ミニライブゲスト】<br>アイモコ',
            note: '',
            sponsors: '',
            province: '九州・沖縄エリア',
            district: '沖縄県',
            store: 'イオンモール沖縄ライカム',
        },
        {
            id: 43,
            start: '2024-06-08',
            end: '2024-06-08',
            urlImg: '../assets/images/events/image43.jpg',
            txtHeading: 'ライカムハイハイレース＆タンカーユーエー',
            date: '2024年6月8日',
            url: '',
            txtUrl: '1階グランドスクエア',
            urlMall: 'https://okinawarycom-aeonmall.com/news/event/4570',
            txtDescription: '1位の赤ちゃんには記念のトロフィーを差し上げます！<br>また参加者全員に記念のチェキ写真もプレゼント♪',
            note: '',
            sponsors: '',
            province: '九州・沖縄エリア',
            district: '沖縄県',
            store: 'イオンモール沖縄ライカム',
        },
        {
            id: 44,
            start: '2024-06-09',
            end: '2024-06-09',
            urlImg: '../assets/images/events/image44.png',
            txtHeading: 'ちいかわ ＆ ハチワレ ＆ うさぎ 写真撮影会',
            date: '2024年6月9日',
            url: '',
            txtUrl: '1階グランドスクエア',
            urlMall: 'https://okinawarycom-aeonmall.com/news/event/4570',
            txtDescription: 'ちいかわ、ハチワレ、うさぎがイオンモール 沖縄ライカム 水そう前にやってくる！！',
            note: '',
            sponsors: '',
            province: '九州・沖縄エリア',
            district: '沖縄県',
            store: 'イオンモール沖縄ライカム',
        },
        {
            id: 45,
            start: '2024-07-01',
            end: '2024-09-01',
            urlImg: '../assets/images/events/image45.jpg',
            txtHeading: '噴水＆ミストで涼しくなろう',
            date: '7月1日～9月1日(日)',
            url: '',
            txtUrl: 'HANYU　nONIWA',
            urlMall: 'https://hanyu-aeonmall.com/news/event/3347',
            txtDescription: '噴水で遊んで、ミストシャワーを感じて涼しく過ごそう！ひまわりミストシャワーと噴水で毎日涼しく！※噴水は冬季以外常時稼働',
            note: '',
            sponsors: '',
            province: '関東エリア',
            district: '埼玉県',
            store: 'イオンモール羽生',
        },
        {
            id: 46,
            start: '2024-06-23',
            end: '2024-06-23',
            urlImg: '../assets/images/events/image46.jpg',
            txtHeading: '風鈴絵付けワークショップ',
            date: '6月23日(日)',
            url: '',
            txtUrl: '1F　正面入口Ⅽ　エスカレーター横　特設会場',
            urlMall: 'https://www.aeon.jp/sc/shimotsuma/event/24coolshare.html',
            txtDescription: '英語で楽しく遊びながら、風鈴の絵付けが出来ます。<br>出来上がった風鈴は、イオンモール下妻の館内に展示♪',
            note: '',
            sponsors: '',
            province: '関東エリア',
            district: '茨城県',
            store: 'イオンモール下妻（しもつま）',
        },
        {
            id: 47,
            start: '2024-06-21',
            end: '2024-07-07',
            urlImg: '../assets/images/events/image47.jpg',
            txtHeading: '夢や願いを流れ星に～宇宙ポスト',
            date: '6/21～7/7',
            url: '',
            txtUrl: '1階フードコート入口（丸亀製麺側）',
            urlMall: 'https://www.aeon.jp/sc/yokkaichikita/event/24coolshare.html',
            txtDescription: '七夕に向けて笹につるしたみんなの夢や願い事をデータ化して人工衛星で宇宙に送ります。地球を回った後流れ星になります。',
            note: '',
            sponsors: 'リーマンサット・プロジェクト',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール四日市北',
        },
        {
            id: 48,
            start: '2024-07-15',
            end: '2024-07-15',
            urlImg: '../assets/images/events/image48.jpg',
            txtHeading: '「バネ電話」作り',
            date: '7/15',
            url: '',
            txtUrl: '1階Nプラス前',
            urlMall: 'https://www.aeon.jp/sc/yokkaichikita/event/24coolshare.html',
            txtDescription: '捨てるしかない廃品からふしぎな楽器をつくるワークショップ。参加費：無料対象年齢：6歳～',
            note: '',
            sponsors: 'みらい楽器ラボ',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール四日市北',
        },
        {
            id: 49,
            start: '2024-06-16',
            end: '2024-06-16',
            urlImg: '../assets/images/events/image49.png',
            txtHeading: '陶器の風鈴に絵付けをしよう',
            date: '6/16（日）',
            url: '',
            txtUrl: '1番街2F東出入口',
            urlMall: 'https://www.aeon.jp/sc/kuwana/event/24coolshare.html',
            txtDescription: '当窯元手作りの素焼きの風鈴に絵の具で絵付けができます！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール桑名',
        },
        {
            id: 50,
            start: '2024-06-22',
            end: '2024-06-22',
            urlImg: '../assets/images/events/image50.png',
            txtHeading: 'SDGｓ貝殻のキラキラホルダーを作ろう！',
            date: '6/22(土）',
            url: '',
            txtUrl: '1番街２F東出入口',
            urlMall: 'https://www.aeon.jp/sc/kuwana/event/24coolshare.html',
            txtDescription: 'レジンを使って、貝殻にビーズやリボンなどを飾りつけて、キラキラのかわいい貝殻キーホルダーを作ろう！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール桑名',
        },
        {
            id: 51,
            start: '2024-06-23',
            end: '2024-06-23',
            urlImg: '../assets/images/events/image51.png',
            txtHeading: '夏だ！ペンギンだ！ペンギンキャンドルを作ろう！',
            date: '6/23（日）',
            url: '',
            txtUrl: '1番街2F東出入口',
            urlMall: 'https://www.aeon.jp/sc/kuwana/event/24coolshare.html',
            txtDescription: '夏らしく爽やかな色味のかわいいペンギンキャンドルを作ることができます♪',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール桑名',
        },
        {
            id: 52,
            start: '2024-06-30',
            end: '2024-06-30',
            urlImg: '../assets/images/events/image52.png',
            txtHeading: 'オリジナルの貝殻フォトフレームを作ろう！',
            date: '6/30（日）',
            url: '',
            txtUrl: '1番街2F東出入口',
            urlMall: 'https://www.aeon.jp/sc/kuwana/event/24coolshare.html',
            txtDescription: '本物の貝殻をフォトフレームに貼り付けて<br>夏の思い出を飾るオリジナルの貝殻フォトフレームをつくろう',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール桑名',
        },
        // {
        //     id: 53,
        //     start: '2024-06-09',
        //     end: '2024-06-09',
        //     urlImg: '../assets/images/events/image53.png',
        //     txtHeading: '願い事と一緒に',
        //     date: '願い事と一緒に♪似顔絵を描いてもらおう‼',
        //     url: '',
        //     txtUrl: '1番街3Fキッズスペース角地',
        //     urlMall: 'https://www.aeon.jp/sc/kuwana/event/24coolshare.html',
        //     txtDescription: '七夕のイラストを背景に、プロの作家があなたの似顔絵をお描きします！描いてもらった似顔絵のよこに、願い事も書きこめるよ♪',
        //     note: '',
        //     sponsors: '',
        //     province: '近畿エリア',
        //     district: '三重県',
        //     store: 'イオンモール桑名',
        // },
        {
            id: 54,
            start: '2024-07-07',
            end: '2024-07-07',
            urlImg: '../assets/images/events/image54.png',
            txtHeading: 'あじさいdaリウム',
            date: '7/7（日）',
            url: '',
            txtUrl: '1番街2F東出入口',
            urlMall: 'https://www.aeon.jp/sc/kuwana/event/24coolshare.html',
            txtDescription: 'ガラスドームにペンであじさいを描いたり、粘土で作ったカタツムリをのせて、あじさいのライトを作ろう！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール桑名',
        },
        {
            id: 55,
            start: '2024-07-13',
            end: '2024-07-15',
            urlImg: '../assets/images/events/image55.png',
            txtHeading: '縁日',
            date: '7/13(土）～7/15（月・祝）',
            url: '',
            txtUrl: '3番街ナムコ横',
            urlMall: 'https://www.aeon.jp/sc/kuwana/event/24coolshare.html',
            txtDescription: ' ☆夏の縁日まつり☆<br>親子で楽しく様々なゲームをしよう♪',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール桑名',
        },
        // {
        //     id: 56,
        //     start: '2024-07-15',
        //     end: '2024-07-15',
        //     urlImg: '../assets/images/events/dummy.png',
        //     txtHeading: 'ウォータービーズアクアリウム',
        //     date: '7/15（月・祝）',
        //     url: '',
        //     txtUrl: '1番街2F東出入口',
        //     urlMall: 'https://www.aeon.jp/sc/kuwana/event/24coolshare.html',
        //     txtDescription: '',
        //     note: '',
        //     sponsors: '',
        //     province: '近畿エリア',
        //     district: '三重県',
        //     store: 'イオンモール桑名',
        // },
        {
            id: 57,
            start: '2024-06-13',
            end: '2024-06-13',
            urlImg: '../assets/images/events/image57.jpg',
            txtHeading: 'モールウォーキング',
            date: '6月13日（木）',
            url: '',
            txtUrl: '1F　ハナショウブの広場',
            urlMall: 'https://www.aeon.jp/sc/meiwa/event/24coolshare.html',
            txtDescription: '三重県ウォーキング協会インスラクターによるレクチャー付きで館内で運動とモールウォーキングを開催。',
            note: '',
            sponsors: '三重県ウォーキング協会',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール明和',
        },
        {
            id: 58,
            start: '2024-06-04',
            end: '2024-06-25',
            urlImg: '../assets/images/events/dummy.png',
            txtHeading: 'アプリウォーキング',
            date: '6/4（火）～6/25（火）※月4回',
            url: '',
            txtUrl: '1階ノースコート　',
            urlMall: 'https://kisogawa-aeonmall.com/news/event/4004',
            txtDescription: '館内3か所にQRコードを設置し、すべてかざすとクーポンが表示、館内ウォーキング1,000歩でドリンクがもらえる。',
            note: '',
            sponsors: '',
            province: '中部エリア',
            district: '愛知県',
            store: 'イオンモール木曽川',
        },
        {
            id: 59,
            start: '2024-07-13',
            end: '2024-08-25',
            urlImg: '../assets/images/events/image59.jpg',
            txtHeading: '噴水で水あそび！ ',
            date: '7/13～8/25（土日祝限定）',
            url: '',
            txtUrl: 'Kaede館',
            urlMall: 'https://kyoto-aeonmall.com/news/event/4789',
            txtDescription: 'いろんなリズムで噴射されて子どもたちも大喜び！<br>暑い日には噴水であそぼう♪<br>＊雨天中止',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '京都府',
            store: 'イオンモールKYOTO',
        },
        {
            id: 60,
            start: '2024-08-13',
            end: '2024-08-14',
            urlImg: '../assets/images/events/dummy.png',
            txtHeading: '堺っ子体操をしよう！',
            date: '8/13（火）・14（水）',
            url: '',
            txtUrl: '1階　センターコート',
            urlMall: 'https://sakaikitahanada-aeonmall.com/news/event/3453',
            txtDescription: '堺市の小学生はみんな知っている？！「いつでも、どこでも、だれもが」がテーマ<br>体も気分もスッキリ！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '大阪府',
            store: 'イオンモール堺北花田',
        },
        {
            id: 61,
            start: '2024-06-15',
            end: '2024-06-24',
            urlImg: '../assets/images/events/image61.png',
            txtHeading: 'イオンモール岡山プレミアムイベント！電車と遊ぼう！！ワイワイ鉄道まつり',
            date: '2024/6/15(土)～6/24(月)',
            url: '',
            txtUrl: '1F 未来スクエア',
            urlMall: 'https://aeonmall-okayama.com/news/event/3591',
            txtDescription: '「世界の鉄道　大ジオラマ」「プラ鉄道ジオラマ」「親子で乗れる！！ミニ新幹線！！」など、楽しい鉄道イベントです。※有料',
            note: '',
            sponsors: '有限会社アームSP',
            province: '中国・四国エリア',
            district: '岡山県',
            store: 'イオンモール岡山',
        },
        {
            id: 62,
            start: '2024-07-26',
            end: '2024-08-25',
            urlImg: '../assets/images/events/dummy.png',
            txtHeading: 'イオンモールアプリ会員プレゼント企画',
            date: '7/26-8/25',
            url: '',
            txtUrl: '西館1Fモールインフォメーション',
            urlMall: 'https://hiezu-aeonmall.com/news/event/2438',
            txtDescription: 'イオンモールアプリ会員さまに暑さ対策グッズプレゼント！！限定500名さま※なくなり次第終了となります。',
            note: '',
            sponsors: '',
            province: '中国・四国エリア',
            district: '鳥取県',
            store: 'イオンモール日吉津（ひえず）',
        },
        {
            id: 63,
            start: '2024-06-16',
            end: '2024-06-16',
            urlImg: '../assets/images/events/image63.png',
            txtHeading: '人力発電にチャレンジ＆<br>エコ新幹線 乗車体験！',
            date: '6/16',
            url: '',
            txtUrl: '1階　レストランコート',
            urlMall: 'https://kusatsu.aeonmall.com/news/event/4464',
            txtDescription: '発電した電力がわかる人力発電コーナーや<br>自転車で発電した新幹線の乗車コーナーであそぼう！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '滋賀県',
            store: 'イオンモール草津',
        },
        {
            id: 64,
            start: '2024-06-17',
            end: '2024-06-17',
            urlImg: '../assets/images/events/image64.png',
            txtHeading: '絵本のじかん',
            date: '6/17',
            url: '',
            txtUrl: '1階　こもれびひろば',
            urlMall: 'https://kusatsu.aeonmall.com/news/event/4464',
            txtDescription: '手遊びと絵本の読み聞かせ',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '滋賀県',
            store: 'イオンモール草津',
        },
        {
            id: 65,
            start: '2024-06-18',
            end: '2024-06-18',
            urlImg: '../assets/images/events/image65.png',
            txtHeading: '『ママパスくさつ 子育てひろば 〜うたと音楽とお話しの時間〜』',
            date: '6/18',
            url: '',
            txtUrl: '1階　こもれびひろば',
            urlMall: 'https://kusatsu.aeonmall.com/news/event/4464',
            txtDescription: '絵本と音楽との世界へようこそ！<br>素敵な絵本も音が加わるともっともっと楽しくなりますよ♪',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '滋賀県',
            store: 'イオンモール草津',
        },
        {
            id: 66,
            start: '2024-06-25',
            end: '2024-06-25',
            urlImg: '../assets/images/events/image66.png',
            txtHeading: '『コーチング体感ワークショップ』',
            date: '6/25',
            url: '',
            txtUrl: '1階　こもれびひろば',
            urlMall: 'https://kusatsu.aeonmall.com/news/event/4464',
            txtDescription: '子供の感覚に戻るワークをしながら、子どもの声かけについて考えコーチングを体感する時間です。',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '滋賀県',
            store: 'イオンモール草津',
        },
        {
            id: 67,
            start: '2024-06-15',
            end: '2024-06-15',
            urlImg: '../assets/images/events/image67.png',
            txtHeading: 'わくわくわーく（消防士体験）',
            date: '6月15日（土）',
            url: '',
            txtUrl: '1F　ハナショウブの広場',
            urlMall: 'https://www.aeon.jp/sc/meiwa/event/24coolshare.html',
            txtDescription: '小学生以下のお子さまを対象に明和消防書方レクチャーで消防士体験を実施。',
            note: '',
            sponsors: '協力：明和消防署、明和町消防団<br>後援：明和町教育委員会、松阪市教育委員会、伊勢市教育委員会',
            province: '近畿エリア',
            district: '三重県',
            store: 'イオンモール明和',
        },
    ],
    "gourmet" : [
        {
            id: 1,
            start: '2024-07-10',
            end: '2024-08-31',
            urlImg: '../assets/images/gourmet/dummy.png',
            txtHeading: 'ひんやりグルメ特集',
            date: '7月10日～8月31日',
            url: '',
            txtUrl: 'HP特集',
            urlMall: 'https://kisarazu-aeonmall.com/news/event/3250',
            txtDescription: '夏にぴったり！ひんやりグルメ特集',
            note: '',
            sponsors: '',
            province: '関東エリア',
            district: '千葉県',
            store: 'イオンモール木更津',
        },
        {
            id: 2,
            start: '2024-05-28',
            end: '2024-07-01',
            urlImg: '../assets/images/gourmet/image02.png',
            txtHeading: 'HOT＆COOL特集（夏グルメ特集）第1弾',
            date: '5月28日（火）～7/1（月）',
            url: '',
            txtUrl: 'イオンモール東浦　飲食食品店舗',
            urlMall: 'https://higashiura-aeonmall.com/news/event/3516',
            txtDescription: '暑い日にもっと熱くなれる「HOTグルメ」と「身も心も涼しくなるCOOLグルメ」を掲載した特大ポスターを館内3か所に掲示。',
            note: '※昨年のイメージ',
            sponsors: '',
            province: '中部エリア',
            district: '愛知県',
            store: 'イオンモール東浦',
        },
        {
            id: 3,
            start: '2024-07-12',
            end: '2024-07-15',
            urlImg: '../assets/images/gourmet/dummy.png',
            txtHeading: '夏の涼ドリンク抽選会',
            date: '7月12日～7月15日',
            url: '',
            txtUrl: 'イオンモールアプリ',
            urlMall: 'https://nagoya-noritake-garden.aeonmall.com/news/event/973',
            txtDescription: 'イオンモールアプリから参加できるアプリ会員限定の抽選会を開催！<br>（期間中1人1回まで）<br>【景品】<br>冷たいドリンク',
            note: '',
            sponsors: '',
            province: '中部エリア',
            district: '愛知県',
            store: 'イオンモールNagoya Noritake Garden',
        },
        {
            id: 4,
            start: '2024-06-21',
            end: '2024-06-23',
            urlImg: '../assets/images/gourmet/image04.png',
            txtHeading: 'いっぱい食べていっぱいお買もの！<br>夏の食べトク祭り',
            date: '6月21日～6月23日',
            url: '',
            txtUrl: '',
            urlMall: 'https://nagoya-noritake-garden.aeonmall.com/news/event/973',
            txtDescription: '飲食・食品店舗さまの税込500円以上のレシートを集めると、期間中に物販店舗で使用できるお買物券500円分をプレゼント。',
            note: '',
            sponsors: '',
            province: '中部エリア',
            district: '愛知県',
            store: 'イオンモールNagoya Noritake Garden',
        },
        {
            id: 5,
            start: '2024-06-21',
            end: '2024-08-25',
            urlImg: '../assets/images/gourmet/image05.png',
            txtHeading: '台湾かき氷祭',
            date: '6/21～8/25',
            url: '',
            txtUrl: 'Niwa広場',
            urlMall: 'https://kyoto-aeonmall.com/news/event/4789',
            txtDescription: 'ゴールデンウイークまで実施していた台湾祭キッチンカーによる台湾かき氷メインのイベントを夏の間に実施！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '京都府',
            store: 'イオンモールKYOTO',
        },
        {
            id: 6,
            start: '2024-07-12',
            end: '2024-09-01',
            urlImg: '../assets/images/gourmet/dummy.png',
            txtHeading: 'たかのはら夏グルメ',
            date: '7月12日～9月1日',
            url: '',
            txtUrl: '各飲食店',
            urlMall: 'https://www.aeon.jp/sc/takanohara/event/24coolshare.html',
            txtDescription: 'イオンモール高の原の各飲食店にて、夏にぴったりの涼しいメニューをご用意！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '京都府',
            store: 'イオンモール高の原',
        },
        {
            id: 7,
            start: '2024-05-31',
            end: '2024-06-23',
            urlImg: '../assets/images/gourmet/dummy.png',
            txtHeading: 'さっぱりメニュー特集',
            date: '5月31日～6月23日',
            url: '',
            txtUrl: '',
            urlMall: 'https://kashihara-aeonmall.com/news/event/4558',
            txtDescription: '梅雨が始まるこの季節に暑さ・ジメジメを吹き飛ばすサッパリした商品を打ち出します。',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '奈良県',
            store: 'イオンモール橿原（かしはら）',
        },
        {
            id: 8,
            start: '2024-06-01',
            end: '2024-09-01',
            urlImg: '../assets/images/gourmet/dummy.png',
            txtHeading: '夏のひんやりメニュー/スイーツ/ドリンク大特集！',
            date: '6/1(土)～9/1(日)',
            url: '',
            txtUrl: 'イオンモール高知SNS',
            urlMall: 'https://kochi-aeonmall.com/news/event/3708',
            txtDescription: '夏のCOOL作戦に合わせて特集コーナーを<br>SNSにて開設！',
            note: '',
            sponsors: '',
            province: '中国・四国エリア',
            district: '高知県',
            store: 'イオンモール高知',
        },
        {
            id: 9,
            start: '2024-07-01',
            end: '2024-07-31',
            urlImg: '../assets/images/gourmet/dummy.png',
            txtHeading: 'アイスコーヒーテイスティングイベント',
            date: '7月1日(月)～7月31日(水)',
            url: '',
            txtUrl: 'ありあけコートステージ',
            urlMall: 'https://omuta-aeonmall.com/news/event/3799',
            txtDescription: 'クールシェアの一環としてお客様に涼んでいただくゆったりとした憩いの空間の創出',
            note: '',
            sponsors: 'タリーズコーヒー',
            province: '九州・沖縄エリア',
            district: '福岡県',
            store: 'イオンモール大牟田（おおむた）',
        },
        {
            id: 10,
            start: '2024-06-01',
            end: '2024-08-31',
            urlImg: '../assets/images/gourmet/image10.png',
            txtHeading: '涼食　ひんやりグルメ特集',
            date: '6月1日～8月31日',
            url: '',
            txtUrl: 'HP',
            urlMall: 'https://fukutsu-aeonmall.com/news/event/4146',
            txtDescription: '暑さ負けない！<br>冷たい食べ物で快適！',
            note: '',
            sponsors: '',
            province: '九州・沖縄エリア',
            district: '福岡県',
            store: 'イオンモール福津',
        },
        {
            id: 11,
            start: '2024-06-01',
            end: '2024-07-31',
            urlImg: '../assets/images/gourmet/image11.jpg',
            txtHeading: 'イオンモールdeCool',
            date: '2024年6月1日(土)～7月31日(水)',
            url: '',
            txtUrl: 'イオンモール八幡東 対象店舗',
            urlMall: 'https://yahatahigashi.aeonmall.com/news/event/881',
            txtDescription: 'Coolで美味しいこの季節にぴったりなフードメニューをご紹介！イオンモール八幡東で夏を楽しんでください♪',
            note: '',
            sponsors: '',
            province: '九州・沖縄エリア',
            district: '福岡県',
            store: 'イオンモール八幡東',
        },
        {
            id: 12,
            start: '2024-06-18',
            end: '2024-07-15',
            urlImg: '../assets/images/gourmet/image12.png',
            txtHeading: '夏グルメ特集',
            date: '6/18～7/15',
            url: '',
            txtUrl: 'イオンモールつくばHP',
            urlMall: 'https://tsukuba-aeonmall.com/news/event/3166',
            txtDescription: '夏を楽しむメニューが登場！',
            note: '',
            sponsors: '',
            province: '関東エリア',
            district: '茨城県',
            store: 'イオンモールつくば',
        },
        {
            id: 13,
            start: '',
            end: '',
            urlImg: '../assets/images/gourmet/image13.jpg',
            txtHeading: '冷・涼メニュー',
            date: '調整中',
            url: '',
            txtUrl: '対象店舗',
            urlMall: 'https://sakaikitahanada-aeonmall.com/news/event/3453',
            txtDescription: 'イオンモール堺北花田の夏の冷たいメニューを紹介します！',
            note: '',
            sponsors: '',
            province: '近畿エリア',
            district: '大阪府',
            store: 'イオンモール堺北花田',
        },
        {
            id: 14,
            start: '2024-01-01',
            end: '2024-08-31',
            urlImg: '../assets/images/gourmet/image14.jpg',
            txtHeading: 'そのまんまスイカ',
            date: '～8/31（予定）',
            url: '',
            txtUrl: '1F　果汁工房　果琳',
            urlMall: 'https://aeonmall-okayama.com/news/event/3591',
            txtDescription: '毎年大人気のメニューが今年も登場！<br>夏にピッタリの“スイカ”を素材の味そのままに<br>ダイレクトにお楽しみいただけます！',
            note: '',
            sponsors: '株式会社青木商店',
            province: '中国・四国エリア',
            district: '岡山県',
            store: 'イオンモール岡山',
        },
        {
            id: 15,
            start: '2024-07-12',
            end: '2024-08-25',
            urlImg: '../assets/images/gourmet/dummy.png',
            txtHeading: '夏グルメ',
            date: '7/12-8/25',
            url: '',
            txtUrl: '各飲食専門店',
            urlMall: 'https://hiezu-aeonmall.com/news/event/2438',
            txtDescription: '飲食店舗の期間限定メニューの紹介',
            note: '',
            sponsors: '',
            province: '中国・四国エリア',
            district: '鳥取県',
            store: 'イオンモール日吉津（ひえず）',
        },
    ],
    "community" : [
        {
            id: 1,
            start: '2024-06-01',
            end: '2024-09-01',
            urlImg: '../assets/images/community/image01.png',
            txtHeading: '風鈴ゲート',
            date: '6/1～9/1',
            url: '',
            txtUrl: '1階レストラン中央入口',
            urlMall: 'https://tsukuba-aeonmall.com/news/event/3166',
            txtDescription: '1Fレストラン街に今年も風鈴ゲートが登場！風鈴の音色で涼しさを感じよう！',
            note: '',
            sponsors:'',
            province: '関東エリア',
            district: '茨城県',
            store: 'イオンモールつくば',
        },
        {
            id: 2,
            start: '2024-06-01',
            end: '2024-09-01',
            urlImg: '../assets/images/community/image02.png',
            txtHeading: 'ひまわりミスト',
            date: '6/1～9/1',
            url: '',
            txtUrl: 'SATOYAMA GARDEN',
            urlMall: 'https://tsukuba-aeonmall.com/news/event/3166',
            txtDescription: '館外にある「SATOYAMA GARDEN」に、ひまわりミストを設置！ミストでひんやりを楽しもう！',
            note: '',
            sponsors:'',
            province: '関東エリア',
            district: '茨城県',
            store: 'イオンモールつくば',
        },
        {
            id: 3,
            start: '2024-06-08',
            end: '2024-06-09',
            urlImg: '../assets/images/community/image03.png',
            txtHeading: 'まなびの<br>「水といきものをまなぼう！」',
            date: '6月8日～9日',
            url: '',
            txtUrl: '専門店街1階　花火ひろば',
            urlMall: 'https://www.aeon.jp/sc/tsuchiura/event/24coolshare.html',
            txtDescription: '霞ヶ浦のプランクトンを観察しよう！<br>涼しげなグラスを削って父の日のプレゼントを作る体験も同時開催！',
            note: '',
            sponsors:'茨城県霞ケ浦環境科学センター',
            province: '関東エリア',
            district: '茨城県',
            store: 'イオンモール土浦',
        },
        {
            id: 4,
            start: '2024-07-15',
            end: '2024-07-15',
            urlImg: '../assets/images/community/image04.png',
            txtHeading: '第8回　あらたまばし大盆踊り大会',
            date: '7/15(月祝)',
            url: '',
            txtUrl: '屋上駐車場',
            urlMall: 'https://aratamabashi.aeonmall.com/news/event/2445',
            txtDescription: '5年ぶり第8回目の開催！南区伝統の盆踊りや専門店による屋台、ミニゲームブースなどを予定。ぜひ夏の夕涼みにお越しください。',
            note: '',
            sponsors:'名古屋市南区役所、南区女性会、名古屋市南消防署',
            province: '中部エリア',
            district: '愛知県',
            store: 'イオンモール新瑞橋（あらたまばし）',
        },
        {
            id: 5,
            start: '2024-06-14',
            end: '2024-06-22',
            urlImg: '../assets/images/community/image05.jpg',
            txtHeading: '茨木市立穂積図書館　おはなし会',
            date: '①6月14日（金）②6月22日（土）',
            url: '',
            txtUrl: '2階　穂積図書館内',
            urlMall: 'https://www.aeon.jp/sc/ibaraki/event/24coolshare.html',
            txtDescription: '茨木市立穂積図書館では、第2木曜日と第4土曜日におはなし会を開催しています。',
            note: '',
            sponsors:'',
            province: '近畿エリア',
            district: '大阪府',
            store: 'イオンモール茨木（いばらき）',
        },
        {
            id: 6,
            start: '2024-06-21',
            end: '2024-07-07',
            urlImg: '../assets/images/community/image06.png',
            txtHeading: '七夕短冊展',
            date: '6/21(金)～7/7(日)',
            url: '',
            txtUrl: '専門店街2階サックスバー前',
            urlMall: 'https://kochi-aeonmall.com/news/event/3708',
            txtDescription: '県内の幼稚園・保育園の園児の願いを込めた短冊を展示します。',
            note: '',
            sponsors:'',
            province: '中国・四国エリア',
            district: '高知県',
            store: 'イオンモール高知',
        },
        {
            id: 7,
            start: '2024-06-05',
            end: '2024-06-30',
            urlImg: '../assets/images/community/image07.jpg',
            txtHeading: '環境パネル展',
            date: '2024年6月5日（水）～6月30日（日）',
            url: '',
            txtUrl: '1F　未来屋書店前',
            urlMall: 'https://kisogawa-aeonmall.com/news/event/4004',
            txtDescription: '国際デーの『環境月間』期間中に、環境への取り組むに関する、①「環境パネル展」を開催。',
            note: '',
            sponsors:'１）一宮市環境政策課様、<br>２）一宮市廃棄物対策課様、<br>３）いちのみや未来エネルギー株式会社様',
            province: '中部エリア',
            district: '愛知県',
            store: 'イオンモール木曽川',
        },
        {
            id: 8,
            start: '2024-06-15',
            end: '2024-06-15',
            urlImg: '../assets/images/community/image08.jpg',
            txtHeading: '環境ワークショップ',
            date: '2024年6月15日（土）　10：00～17：00',
            url: '',
            txtUrl: '中央入り口前',
            urlMall: 'https://kisogawa-aeonmall.com/news/event/4004',
            txtDescription: '環境への関心喚起につながるワークショップ',
            note: '',
            sponsors:'１）一宮市環境政策課様、<br>２）一宮市廃棄物対策課様、<br>３）いちのみや未来エネルギー株式会社様',
            province: '中部エリア',
            district: '愛知県',
            store: 'イオンモール木曽川',
        },
    ],
    "slide" : [
        {
            id: 1,
            start: '2024-05-28',
            end: '2024-08-25',
            category: 'gourmet',
            urlImg: './assets/images/slide/image01.png',
            txtHeading: '台湾かき氷祭',
            date: '6月21日(金)～8月25日(日)',
            url: '',
            txtUrl: 'Niwa広場',
            urlMall: 'https://kyoto-aeonmall.com/news/event/4789',
            txtDescription: 'ゴールデンウイークまで実施していた台湾祭キッチンカーによる台湾かき氷メインのイベントを夏の間に実施！',
            note: '',
            sponsors:'',
            province: '近畿エリア',
            district: '京都府',
            store: 'イオンモールKYOTO',
        },
        {
            id: 2,
            start: '2024-05-28',
            end: '2024-06-09',
            category: 'community',
            urlImg: './assets/images/slide/image02.png',
            txtHeading: 'まなびの<br>「水といきものをまなぼう！」',
            date: '6月8日(土)～9日(日)',
            url: '',
            txtUrl: '専門店街1階　花火ひろば',
            urlMall: 'https://www.aeon.jp/sc/tsuchiura/event/24coolshare.html',
            txtDescription: '霞ヶ浦のプランクトンを観察しよう！<br>涼しげなグラスを削って父の日のプレゼントを作る体験も同時開催！',
            note: '',
            sponsors:'茨城県霞ケ浦環境科学センター',
            province: '関東エリア',
            district: '茨城県',
            store: 'イオンモール土浦',
        },
        {
            id: 3,
            start: '2024-05-28',
            end: '2024-06-30',
            category: 'products',
            urlImg: './assets/images/slide/image03.jpg',
            txtHeading: 'Tシャツコレクション',
            date: '6月1日（土）～6月30日（日）',
            url: '',
            txtUrl: 'イオンモール東浦　館内',
            urlMall: 'https://higashiura-aeonmall.com/news/event/3516',
            urlMall2: 'https://higashiura-aeonmall.com/special/lists/higahiurat',
            txtDescription: 'イオンモール東浦より厳選した夏のバラエティー豊かなTシャツコレクションを開催。見て涼しい、着て涼しいをお届けします！',
            note: '※昨年のイメージ',
            sponsors:'',
            province: '中部エリア',
            district: '愛知県',
            store: 'イオンモール東浦',
        },
        {
            id: 4,
            start: '2024-05-28',
            end: '2024-06-16',
            category: 'events',
            urlImg: './assets/images/slide/image04.png',
            txtHeading: '津屋崎祇園山笠　展示',
            date: '6月1日(土)～6月16日(日)',
            url: '',
            txtUrl: '１階センターコート',
            urlMall: 'https://fukutsu-aeonmall.com/news/event/4146',
            txtDescription: '今年で復活50年を迎える大迫力の津屋崎祇園山笠を展示！「山笠飾り作り体験」も開催！',
            note: '',
            sponsors:'',
            province: '九州・沖縄エリア',
            district: '福岡県',
            store: 'イオンモール福津',
        },
        {
            id: 5,
            start: '2024-05-28',
            end: '2024-07-07',
            category: 'community',
            urlImg: './assets/images/slide/image05.png',
            txtHeading: '七夕短冊展',
            date: '6月21日(金)～7月7日(日)',
            url: '',
            txtUrl: '専門店街2階サックスバー前',
            urlMall: 'https://kochi-aeonmall.com/news/event/3708',
            txtDescription: '県内の幼稚園・保育園の園児の願いを込めた短冊を展示します。',
            note: '',
            sponsors:'',
            province: '中国・四国エリア',
            district: '高知県',
            store: 'イオンモール高知',
        },
    ]
}

/*matchHeight*/
! function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
  var e = -1,
      o = -1,
      i = function(t) { return parseFloat(t) || 0 },
      n = function(e) {
          var o = 1,
              n = t(e),
              a = null,
              r = [];
          return n.each(function() {
              var e = t(this),
                  n = e.offset().top - i(e.css("margin-top")),
                  s = r.length > 0 ? r[r.length - 1] : null;
              null === s ? r.push(e) : Math.floor(Math.abs(a - n)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), a = n
          }), r
      },
      a = function(e) {
          var o = {
              byRow: !0,
              property: "height",
              target: null,
              remove: !1
          };
          return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
      },
      r = t.fn.matchHeight = function(e) { var o = a(e); if (o.remove) { var i = this; return this.css(o.property, ""), t.each(r._groups, function(t, e) { e.elements = e.elements.not(i) }), this } return this.length <= 1 && !o.target ? this : (r._groups.push({ elements: this, options: o }), r._apply(this, o), this) };
  r.version = "master", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
      r._afterUpdate = null, r._rows = n, r._parse = i, r._parseOptions = a, r._apply = function(e, o) {
          var s = a(o),
              h = t(e),
              c = [h],
              l = t(window).scrollTop(),
              p = t("html").outerHeight(!0),
              d = h.parents().filter(":hidden");
          return d.each(function() {
              var e = t(this);
              e.data("style-cache", e.attr("style"))
          }), d.css("display", "block"), s.byRow && !s.target && (h.each(function() {
              var e = t(this),
                  o = e.css("display");
              "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                  display: o,
                  "padding-top": "0",
                  "padding-bottom": "0",
                  "margin-top": "0",
                  "margin-bottom": "0",
                  "border-top-width": "0",
                  "border-bottom-width": "0",
                  height: "100px",
                  overflow: "hidden"
              })
          }), c = n(h), h.each(function() {
              var e = t(this);
              e.attr("style", e.data("style-cache") || "")
          })), t.each(c, function(e, o) {
              var n = t(o),
                  a = 0;
              if (s.target) a = s.target.outerHeight(!1);
              else {
                  if (s.byRow && n.length <= 1) return void n.css(s.property, "");
                  n.each(function() {
                      var e = t(this),
                          o = e.css("display");
                      "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block");
                      var i = { display: o };
                      i[s.property] = "",
                          e.css(i), e.outerHeight(!1) > a && (a = e.outerHeight(!1)), e.css("display", "")
                  })
              }
              n.each(function() {
                  var e = t(this),
                      o = 0;
                  s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), o += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(s.property, a - o + "px"))
              })
          }), d.each(function() {
              var e = t(this);
              e.attr("style", e.data("style-cache") || null)
          }), r._maintainScroll && t(window).scrollTop(l / p * t("html").outerHeight(!0)), this
      }, r._applyDataApi = function() {
          var e = {};
          t("[data-match-height], [data-mh]").each(function() {
              var o = t(this),
                  i = o.attr("data-mh") || o.attr("data-match-height");
              i in e ? e[i] = e[i].add(o) : e[i] = o
          }), t.each(e, function() { this.matchHeight(!0) })
      };
  var s = function(e) { r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function() { r._apply(this.elements, this.options) }), r._afterUpdate && r._afterUpdate(e, r._groups) };
  r._update = function(i, n) {
      if (n && "resize" === n.type) {
          var a = t(window).width();
          if (a === e) return;
          e = a
      }
      i ? -1 === o && (o = setTimeout(function() {
          s(n), o = -1
      }, r._throttle)) : s(n)
  }, t(r._applyDataApi), t(window).bind("load", function(t) { r._update(!1, t) }), t(window).bind("resize orientationchange", function(t) { r._update(!0, t) })
});

(function($) {
    $(document).on("click",".section_main_ttl",function() {
        $(this).toggleClass('active');
        $(this).parents('.section_main_item').find('.section_main_info').slideToggle('fast');
    });
})(jQuery);

$('#back_to_top').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 500);
  return false;
});


$('.kv_btn a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); 
	var pos = $(elmHash).offset().top;
	$('body,html').animate({scrollTop: pos}, 500);
	return false;
});

$('.map a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); 
  $(elmHash).addClass('active');
  $(elmHash).parents('.section_main_item').find('.section_main_info').slideDown('fast');
	var pos = $(elmHash).offset().top;
	$('body,html').animate({scrollTop: pos}, 500);
	return false;
});

$('.group_text').matchHeight({
    byRow: true,
});
$('.slide_content_title').click(function(){
  $(this).children('div').toggleClass('close');
  $(this).children('div').toggleClass('open');
  $(this).next('.slide_content_area').slideToggle("fast");
});
$('.slide_content_title').keypress( function ( e ) {
  if ( e.which == 13 ) {
  $(this).children('div').toggleClass('close');
  $(this).children('div').toggleClass('open');
  $(this).next('.slide_content_area').slideToggle("fast");
    return false;
  }
});


/** popup */
var resultsortDataItem,
    dataDate = 'in',
    newData;

$html = $('html'),
$window = $(window),
$body = $("body");
function getScrollbarWidth() {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;

}

function closePopupModal() {            
    $html.removeClass('isOpen');
    $html.find('.pop_slide_inmodal').removeClass('isContentOpen');
    $body.css('padding-right','0');
    $body.css("top", "");
    $window.scrollTop(scrollDistance); 
}
function checkProvince(name, item) {
  if(name === '' || name ==='すべて' || name === null || name === item.district) {
    return true;
  } else {
    return false;
  }
}
function checkDate(item) {
    var today = new Date(),
        dayStart = new Date(item.start+'T00:00:00'),
        dayEnd = new Date(item.end+'T00:00:00');
        dayEndPlus = new Date(item.end+'T23:59:59');
        dayEndPlusOneDay = new Date(dayEnd.setDate(dayEnd.getDate() + 1));
    if(dataDate === 'in') {
        return ((today >= dayStart && today <= dayEndPlus) || (today >= dayStart && isNaN(dayEnd)) || (isNaN(dayEnd) && isNaN(dayStart))) ? true : false; 
    } else if(dataDate === 'before') {
        return (today < dayStart) ? true : false; 
    } else if(dataDate === 'after') {
        return (today >= dayEndPlusOneDay) ? true : false; 
    } else {
      return false;
    }
}

function renderItemChildPage(cate, province, data) {
    var listItem = $(".js_renderItem");
    jQuery.each( data, function( index, item ) {
        if(checkDate(item) && checkProvince(province, item)) {
            var item = `<a href="#modal01" data-district="${data[index].district}" data-href="#modal01" data-cate="${cate}" data-id="${index}"  class="item js-openPopup">
                <div class="media">                    
                    <div class="img">
                        <img src="${data[index].urlImg}" width="402" height="302" alt="">
                    </div>
                    <div class="media-body">
                    <h5 class="mt-0">${data[index].txtHeading}</h5>
                    <p class="mt-0 h5">${data[index].store}</p>
                    <p class="mt-0 h6">${data[index].date}</p>
                    <p class="c-text pc">${data[index].txtDescription}</p>
                    </div>
                </div>
                <div class="pc">
                    <div class="btn btn-openmodal"><span>取り組みを見る</span></div>
                </div>
                <div class="sp"><span class="icon"></span></div>
            </a>`;
        }
        listItem.append(item);
    })
}
function renderItemPickUp() {
    var slideItemPc = $(".pc .js_render_slider"),
        slideItemSp = $(".sp .js_render_slider");
    jQuery.each( modalData.slide, function( index, item ) {
        if(checkDate(item)) {
            var itemPc = `<div class="banner banner-01 swiper-slide pc">
                            <a href="#modal01" data-href="#modal01" data-cate="slide" data-id="${index}" class="js-openPopup">
                                <img src="./assets/images/slide/slide_img0${index+1}.png" width="1000" height="600" alt="${item.txtHeading.replace('<br>', '').replace('<br class="pc">','')}${item.txtDescription}">
                            </a>
                        </div>`;
            var itemSp = `<div class="banner banner-01 swiper-slide">
                            <a href="#modal01" data-href="#modal01" data-cate="slide" data-id="${index}" class="js-openPopup">
                                <img src="./assets/images/slide/slide_img0${index+1}_sp.png" width="670" height="1135" alt="${item.txtHeading.replace('<br>', '').replace('<br class="pc">','')}${item.txtDescription}">
                            </a>
                        </div>`;
        }
        slideItemPc.append(itemPc);
        slideItemSp.append(itemSp)
    })
}
function renderModal(id, cate, data) {
    var color;
    if(data[id].province === "北海道・東北エリア") {
        color = '#71C1E9';
    } else if(data[id].province === "関東エリア") {
        color = '#B5DB68';
    } else if(data[id].province === "中部エリア") {
        color = '#FF9BCB';
    } else if(data[id].province === "近畿エリア") {
        color = '#F17863';
    } else if(data[id].province === "中国・四国エリア") {
        color = '#FCC130';
    } else if(data[id].province === "九州・沖縄エリア") {
        color = '#70CBC9';
    }
    var modalContent = $("#modal01 .js_renderModal");
    var modal = `<div class="c_box" style="border-color: ${color}; background: ${color}">
                    <div class="c_box_top bg-white">
                        ${data[id].new === '1' ? '<div class="new"><img src="./assets/images/label_new.png" alt="new"></div>' : ''}
                        <h4 class="c_box_heading js_heading"><img src="${cate == 'slide' ? `./assets/images/${data[id].category}/icon_cate.png` : `../assets/images/${cate}/icon_cate.png`}" alt=""><span style="color: ${color};">${data[id].txtHeading}</span></h4>
                        <div class="c_box_info">
                            <div class="c_box_des">
                                <div class="c_box_img js_img_url">
                                    <img src="${data[id].urlImg}" alt="">
                                </div>
                                <p class="c_text c_text_01">日程：<span class="">${data[id].date}</span>
                                </p>
                                ${data[id].txtUrl === '' && data[id].url === '' ? '' : `<p class="c_text c_text_01">${cate === 'slide' ? '場所：' : '場所（URL）：'}${data[id].txtUrl !== '' && data[id].url !== '' ? `${data[id].txtUrl}<br>(<a href="${data[id].url}" class="js_url" target="_blank">${data[id].url}</a>)` : `${data[id].txtUrl}<a href="${data[id].url}" class="js_url" target="_blank">${data[id].url}</a>`}
                                </p>`}
                                <p class="c_text c_text_02">${data[id].txtDescription}</p>
                                ${data[id].note === '' ? '' : `<p class="c_text c_text_03">${data[id].note}</p>`}
                                ${data[id].sponsors === '' ? '' : `<p class="c_text c_text_01 mb_0">協賛企業：<span class="">${data[id].sponsors}</span></p>`}
                                <div class="c_text_03_wrap sp">
                                  <a href="${data[id].urlMall2 ? data[id].urlMall2 : data[id].urlMall}" class="c_text c_text_03" target="_blank">${data[id].store}のイベントニュースはこちら<em class="icon icon-circle-arrow-right color_${color.replace('#', '')}"></em></a>
                                </div>
                            </div>
                            <div class="c_text_03_wrap pc">
                              <a href="${data[id].urlMall2 ? data[id].urlMall2 : data[id].urlMall}" class="c_text c_text_03" target="_blank">${data[id].store}のイベントニュースはこちら<em class="icon icon-circle-arrow-right color_${color.replace('#', '')}"></em></a>
                            </div>
                        </div>
                    </div>
                    <div class="c_box_bottom" style="background-color: ${color}">
                        <a href="${data[id].urlMall}" target="_blank"><span class="c-text txt_01 ">${data[id].province}</span><br class="sp"><span class="c-text txt_02">${data[id].store}</span><span class="icon"></span></a>
                    </div>
                </div>`;
    modalContent.html(modal);
}

$(document).on('click','.js-closeOverlay',function(){            
  closePopupModal();
})
$(document).on('click','.js-openPopup',function(){
    let $this = $(this),
        $target = $this.attr('data-href'),
        $id = $this.attr('data-id') ? $this.attr('data-id') : undefined,
        $category = $this.attr('data-cate') ? $this.attr('data-cate') : undefined;
    if($("#products").length > 0) {
       if(resultsortDataItem != undefined) {
        $data = resultsortDataItem;
       } else {
        $data = modalData['products'];
       }
    } else if($("#events").length > 0) {
        if(resultsortDataItem != undefined) {
         $data = resultsortDataItem;
        } else {
         $data = modalData['events'];
        }
    } else if($("#gourmet").length > 0) {
        if(resultsortDataItem != undefined) {
         $data = resultsortDataItem;
        } else {
         $data = modalData['gourmet'];
        }
    } else if($("#community").length > 0) {
        if(resultsortDataItem != undefined) {
         $data = resultsortDataItem;
        } else {
         $data = modalData['community'];
        }
    } else {
        $data = modalData['slide'];
    }
    if($id && $category) {
      renderModal($id, $category, $data);
    }
    $(".pop_slide_inmodal .wrap .qa_container").scrollTop(0)
    scrollDistance = $window.scrollTop();   
    $body.css("top", scrollDistance * -1);
    $html.addClass('isOpen');
    $html.find($target).addClass('isContentOpen');
    $body.css('padding-right',getScrollbarWidth()+'px');
})
$(document).on("click", ".title-h2 span.js_sort", function () {
    var listItem = $(".js_renderItem"),
        typeSort = $(this).attr('data-sort');
    
    if($("#products").length > 0) {
        var sortDataItem = modalData.products,
            cate = "products";
    } else if($("#events").length > 0) {
        var sortDataItem = modalData.events,
            cate = "events";
    } else if($("#gourmet").length > 0) {
        var sortDataItem = modalData.gourmet,
            cate = "gourmet";
    } else if($("#community").length > 0) {
        var sortDataItem = modalData.community,
            cate = "community";
    }

    $(this).find(".icon-down").toggleClass("ASC");
    if(typeSort == 'date') {
        if($(this).find(".icon-down").hasClass("ASC")) {
            resultsortDataItem = _.sortBy(sortDataItem, item => {
                if (item.start === '') {
                    let currentDate = new Date();
                    currentDate.setFullYear(currentDate.getFullYear() - 2);
                    return currentDate;
                }
                return new Date(item.start);
            });
        } else {
            resultsortDataItem = _.sortBy(sortDataItem, item => {
                if (item.start === '') {
                    let currentDate = new Date();
                    currentDate.setFullYear(currentDate.getFullYear() + 2);
                    return currentDate;
                }
                return - new Date(item.start);
            });
        }
    }
    var district = $("#province").val(),
        tab = $(".box_tab.active").attr("data-date");
    listItem.html("");
    renderItemChildPage(cate, district, resultsortDataItem);
    
    if(district === "すべて" || district === null) {
      $(".list-items.type01 .item").show()
    } else {
      $(".list-items.type01 .item").hide();
      $("[data-district="+district+"]").show();
    }
})
$( function() {
  var listItem = $(".js_renderItem");
  $( "#province" )
    .selectmenu({ 
        change: function( event, ui ) { 
          if($("#products").length > 0) {
            var cate = 'products',
                newData = modalData['products'];
          } else if($("#events").length > 0) {
            var cate = 'events',
                newData = modalData['events'];
          } else if($("#gourmet").length > 0) {
            var cate = 'gourmet',
                newData = modalData['gourmet'];
          } else if($("#community").length > 0) {
            var cate = 'community',
                newData = modalData['community'];
          }
          resultsortDataItem = undefined;
          var district = $(this).val();
          listItem.html("");
          renderItemChildPage(cate, district , newData);
          // district === "すべて" ? $(".list-items.type01 .item").show() : $(".list-items.type01 .item").hide();
          $("[data-district="+district+"]").show();
        }})
    .selectmenu( "menuWidget" )
      .addClass( "select-overflow" );
      $(".ui-selectmenu-text").text() === "選択してください" ? $(".ui-selectmenu-text").css("color", "#C9C9C9") : "";
} );
function switchTab() {
    var cate = 'products';
    $('.main_tabs .box_list_tab-01 .tab_btn.tab_btn-01 li').on('click',function(){
        resultsortDataItem = undefined;
        var district = $("#province").val();
        // $("#province").prop('selectedIndex',0);
        // $(".ui-selectmenu-text").text('選択してください').css('color', 'rgb(201, 201, 201)');
        // function switch tab
        $(this).removeClass('active')
        if(!$(this).hasClass('active')) {
          $(this).addClass('active').siblings('li').removeClass('active');
          $(this).children('li').hide().show(2000);
        //   $(this).parents('.tabs_wrap').next().next('.tab_cnts').children('li:nth-of-type('+ ( ($(this).closest('.tab_btn').children('li').index($(this)))+1 ) +')').fadeIn(1000).siblings('li').hide();
        }
        // Change dataDate when click tab
        dataDate = $(this).attr('data-date');
        $('.js_renderItem').html('');
        if($("#products").length > 0) {
            cate = 'products'
        } else if($("#events").length > 0) {
            cate = 'events'
        } else if($("#gourmet").length > 0) {
            cate = 'gourmet'
        } else if($("#community").length > 0) {
            cate = 'community'
        }
        renderItemChildPage(cate, district, newData);
    });
}


$(document).ready(function(){
    if($("#products").length > 0) {
        newData = modalData['products'];
        renderItemChildPage('products','', newData);
    } else if($("#events").length > 0) {
        newData = modalData['events'];
        renderItemChildPage('events','', newData);
    } else if($("#gourmet").length > 0) {
        newData = modalData['gourmet'];
        renderItemChildPage('gourmet','', newData);
    } else if($("#community").length > 0) {
        newData = modalData['community'];
        renderItemChildPage('community','', newData);
    }
    
    function toggleMenu() {
        $('html').toggleClass('overflow-hidden');
        $('.header_menu').toggleClass('active');
        $('.header_menu .icon')
          .toggleClass('menu')
          .toggleClass('close');
        $('.header_navbar').toggleClass("isActive");
    }
    $('.header_menu').click(toggleMenu);
    $('.inner.for-pc .menu_toggle_list_item').hover(function() {
        $(this).children('.menu_toggle_child_list').slideToggle()
    })
    $('.inner.for-sp .menu_toggle_list_item.has_child').click(function() {
        $(this).children('.menu_toggle_child_list').slideToggle()
        $(this).toggleClass('active');
    })

    switchTab();
    renderItemPickUp();
    
    var swiper = new Swiper('.pc.slider-for', {
        slidesPerView: 5,
        centeredSlides: true,
        loop: true,
        arrow: true,
        // autoplay: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 900,
        spaceBetween: 140,
        disableOnInteraction: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: { el: '.swiper-pagination' , clickable: true },
        breakpoints: {
            1500: {
                spaceBetween: 110,
            },
            1400: {
                spaceBetween: 100,
            },
            1200: {
                spaceBetween: 80,
            },
            1000: {
                spaceBetween: 60
            },
        }
    });
    var swiper01 = new Swiper('.sp.slider-for', {
        slidesPerView: 2,
        centeredSlides: true,
        loop: true,
        arrow: true,
        speed: 600,
        // autoplay: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        spaceBetween: 0,
        disableOnInteraction: true,
        navigation: {
            nextEl: '.swiper-button-next02',
            prevEl: '.swiper-button-prev02',
        },
        pagination: { el: '.swiper-pagination02' , clickable: true },
    })

})