!function(){"use strict";var n=document.querySelector(".navigation-container"),t=document.querySelector(".navigation-toggle");t.addEventListener("click",function(e){if(t.classList.contains("is-active"))return v(e);document.documentElement.classList.add("is-clipped--nav"),t.classList.add("is-active"),n.classList.add("is-active"),window.addEventListener("click",v),f(e)}),n.addEventListener("click",f);var a=n.querySelector("[data-panel=menu]");if(a){var e,i,s,o,c,r=(e=window.sessionStorage.getItem("nav-state"))&&"1"===(e=JSON.parse(e)).__version__?e:{__version__:"1"},d=(i=r,s=n.dataset.component,o=n.dataset.version,i[c=o+"@"+s]||(i[c]={}));n.querySelector(".context").addEventListener("click",function(){var e=n.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),n.querySelector("[data-panel="+t+"]").classList.toggle("is-active")}),m(".nav-toggle",a).forEach(function(e){var t=e.parentElement;e.addEventListener("click",function(){t.classList.toggle("is-active"),d.expandedItems=m(".is-active",a).map(function(e){return e.dataset.id}),p()})}),m(".nav-item",a).forEach(function(e,t){e.setAttribute("data-id","menu-"+e.dataset.depth+"-"+t)});var l=d.expandedItems||(d.expandedItems=[]);l.length&&m(l.map(function(e){return'.nav-item[data-id="'+e+'"]'}).join(","),a).forEach(function(e){e.classList.add("is-active")});var u=a.querySelector(".is-current-page");u&&function(e){var t,n=[e.dataset.id],a=e.parentNode;for(;!(t=a.classList).contains("nav-menu");)"LI"===a.tagName&&t.contains("nav-item")&&(t.add("is-active","is-current-path"),n.push(a.dataset.id)),a=a.parentNode;return e.classList.add("is-active"),n}(u).forEach(function(e){l.indexOf(e)<0&&l.push(e)}),p(),function(e,t,n){if(!n)return t.scrollTop=e;var a=n.offsetTop-e<0,i=n.offsetTop-e+n.offsetHeight>t.offsetHeight;t.scrollTop=a?n.offsetTop-10:i?n.offsetTop-(t.offsetHeight-n.offsetHeight)+10:e}(d.scroll||0,a,u&&u.querySelector(".nav-link")),a.addEventListener("scroll",function(){d.scroll=Math.round(a.scrollTop),p()})}function v(e){3!==e.which&&2!==e.button&&(document.documentElement.classList.remove("is-clipped--nav"),t.classList.remove("is-active"),n.classList.remove("is-active"),window.removeEventListener("click",v),f(e))}function f(e){e.stopPropagation()}function p(){window.sessionStorage.setItem("nav-state",JSON.stringify(r))}function m(e,t){return[].slice.call((t||document).querySelectorAll(e))}}();
!function(){"use strict";var o=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function i(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var n,o;(n=window.location.hash)&&(o=document.getElementById(n.slice(1)))&&i.bind(o)(),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,n;(t=e.hash.slice(1))&&(n=document.getElementById(t))&&e.addEventListener("click",i.bind(n))})}();
!function(){"use strict";var e=document.querySelector(".page-versions .versions-menu-toggle");if(e){var t=document.querySelector(".page-versions");e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),window.addEventListener("click",function(){t.classList.remove("is-active")})}}();
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("is-active"),document.getElementById(e.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})})});