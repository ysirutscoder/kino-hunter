function yo_ahoy_key(e){if(e&&(e.key||e.keyCode)){var t="";if("Enter"===e.key||13===e.keyCode?t="fullscreen":"Left"===e.key||"ArrowLeft"===e.key||37===e.keyCode?t="prev":"Right"===e.key||"ArrowRight"===e.key||39===e.keyCode?t="next":"Up"===e.key||"ArrowUp"===e.key||38===e.keyCode?t="up":"Down"===e.key||"ArrowDown"===e.key||40===e.keyCode?t="down":"0"===e.key||48===e.keyCode?t="0":"1"===e.key||49===e.keyCode?t="1":"2"===e.key||50===e.keyCode?t="2":"3"===e.key||51===e.keyCode?t="3":"4"===e.key||52===e.keyCode?t="4":"5"===e.key||53===e.keyCode?t="5":"6"===e.key||54===e.keyCode?t="6":"7"===e.key||55===e.keyCode?t="7":"8"===e.key||56===e.keyCode?t="8":"9"!==e.key&&57!==e.keyCode||(t="9"),!t||"up"!==t&&"down"!==t)if(t&&"fullscreen"===t)yo_fullscreen();else{var o=document.querySelectorAll('[data-event]:not([style*="display:none"]):not([style*="display: none"]');if(o&&o.length)for(var n=0;n<o.length;n++)if(t&&o[n].dataset.event===t&&"function"==typeof o[n].onclick)return void o[n].onclick.apply(o[n])}else{var a=document.querySelector(".yohoho-active");if(console.log(t,a.dataset.event,a&&a.dataset&&a.dataset.event&&parseInt(a.dataset.event)),a&&a.dataset&&a.dataset.event&&parseInt(a.dataset.event)){var r="up"===t?document.querySelector('[data-event="'+(parseInt(a.dataset.event)-1)+'"]:not([style*="display:none"]):not([style*="display: none"]'):document.querySelector('[data-event="'+(parseInt(a.dataset.event)+1)+'"]:not([style*="display:none"]):not([style*="display: none"]');if(r||"up"!==t)if(r||"down"!==t)r&&"function"==typeof r.onclick&&r.onclick.apply(r);else{var i=document.querySelector('[data-event="next"]:not([style*="display:none"]):not([style*="display: none"]');i&&"function"==typeof i.onclick&&i.onclick.apply(i)}else{var l=document.querySelector('[data-event="prev"]:not([style*="display:none"]):not([style*="display: none"]');l&&"function"==typeof l.onclick&&l.onclick.apply(l)}}}}}export function yo(e){var t,o,n,a,r,i,l,s=!1,u="",y=e&&e.getAttribute("data-ahoy")?e.getAttribute("data-ahoy"):"yohoho";if(!(i=document.querySelector("#"+y))&&!(i=document.querySelector("#yohoho-online"))){if(!(i=document.querySelector("#yohoho-torrent")))return!1;s=!0}for(var d=document.createElement("div"),c=Array.prototype.slice.call(i.attributes);o=c.pop();)d.setAttribute(o.nodeName,o.nodeValue);d.innerHTML=i.innerHTML,i.parentNode.replaceChild(d,i);var p=[].slice.call(d.attributes).reduce((function(e,t){return/^data-/.test(t.name)&&(e[t.name.substr(5)]=decodeURIComponent(t.value)),e}),{});e&&e.attributes&&[].slice.call(e.attributes).reduce((function(e,t){/^data-/.test(t.name)&&(p[t.name.substr(5)]=decodeURIComponent(t.value))}),{}),(p.title&&/\u0442\u0440\u0435\u0439\u043b\u0435\u0440|trailer|teaser/i.test(p.title)||s)&&(p.player="trailer"),p.player=p.title&&/\u0442\u0440\u0435\u0439\u043b\u0435\u0440|trailer|teaser/i.test(p.title)||s?"trailer":p.player?p.player:"videocdn,collaps,hdvb,bazon,ustore,alloha,iframe,kodik,pleer";var M=p.bg&&p.bg.replace(/[^0-9a-z]/gi,"")?p.bg.replace(/[^0-9a-z]/gi,""):"2A3440",g=p.language&&!/ru/i.test(p.language)?{trailer:"TRAILER",torrent:"DOWNLOAD",next:"NEXT",prev:"PREV"}:{trailer:"\u0422\u0420\u0415\u0419\u041b\u0415\u0420",torrent:"\u0421\u041a\u0410\u0427\u0410\u0422\u042c",next:"\u0412\u041f\u0415\u0420\u0415\u0414",prev:"\u041d\u0410\u0417\u0410\u0414"},h={};for(var m in p.button=p.button?p.button:"videocdn: {Q} {T}, hdvb: {Q} {T}, bazon: {Q} {T}, ustore: {Q} {T}, alloha: {Q} {T}, kodik: {Q} {T}, iframe: {Q} {T}, collaps: {Q} {T}",p.button&&p.button.split(",").forEach((function(e){var t=e.split(":");2===t.length&&t[0]&&t[1]&&(h[t[0].trim().toLowerCase()]=t[1].trim())})),p.button_limit=p.button_limit&&parseInt(p.button_limit)<8?parseInt(p.button_limit):8,p.button_size=p.button_size&&parseFloat(p.button_size)?parseFloat(p.button_size):1,p.separator=p.separator?p.separator:",",p)p.hasOwnProperty(m)&&p[m]?u+=u?"&"+m+"="+encodeURIComponent(p[m]):m+"="+encodeURIComponent(p[m]):p[m]="";if(!(p.kinopoisk||p.title||p.imdb||p.tmdb))return!1;p.tv&&document.addEventListener("keydown",yo_ahoy_key),p.resize&&(window.addEventListener("orientationchange",yo_resize,!1),window.addEventListener("resize",yo_resize,!1));var f=document.querySelector("#yohoho-loading");f&&f.parentNode.removeChild(f);var I=document.querySelector("#yohoho-buttons");I&&I.parentNode.removeChild(I);var A=document.querySelector("#yohoho-iframe");A&&A.parentNode.removeChild(A);var C=document.querySelectorAll("[data-ahoy]");for(var L in C)if(C.hasOwnProperty(L)&&C[L]){var v=document.querySelector("#"+C[L].getAttribute("data-ahoy"));v&&v.removeAttribute("style")}var T=document.head||document.getElementsByTagName("head")[0],N="#yohoho-loading{z-index:9999;position:absolute;left:0;top:0;width:100%;height:100%;background:#"+M+" url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtc3BpcmFsIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgY2xhc3M9ImJrIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTU0LjUgODkuOWMtOS42IDAtMTguNi0zLjktMjUuNC0xMSAtNi44LTcuMS0xMC41LTE2LjYtMTAuNS0yNi43IDAtOC45IDMuMy0xNy4yIDkuMi0yMy41UzQxLjcgMTkgNTAuMiAxOWM4LjQgMCAxNi40IDMuNCAyMi4zIDkuNyA2IDYuMyA5LjIgMTQuNiA5LjIgMjMuNSAwIDE1LjgtMTIuMiAyOC43LTI3LjMgMjguNyAtMTUgMC0yNy4zLTEyLjktMjcuMy0yOC43IDAtMTMuMyAxMC4zLTI0LjIgMjMtMjQuMnMyMyAxMC44IDIzIDI0LjJjMCAxMC44LTguNCAxOS42LTE4LjcgMTkuNiAtMTAuMyAwLTE4LjctOC44LTE4LjctMTkuNiAwLTguMyA2LjUtMTUuMSAxNC40LTE1LjEgNy45IDAgMTQuNCA2LjggMTQuNCAxNS4xIDAgNS44LTQuNSAxMC42LTEwLjEgMTAuNnMtMTAuMS00LjgtMTAuMS0xMC42YzAtMy40IDIuNi02LjEgNS44LTYuMSAzLjIgMCA1LjggMi43IDUuOCA2LjEgMCAwLjktMC43IDEuNi0xLjUgMS42IC0wLjggMC0xLjUtMC43LTEuNS0xLjYgMC0xLjYtMS4zLTIuOS0yLjgtMi45IC0xLjUgMC0yLjggMS4zLTIuOCAyLjkgMCA0LjEgMy4yIDcuNCA3LjEgNy40czcuMS0zLjMgNy4xLTcuNGMwLTYuNi01LjEtMTItMTEuNC0xMiAtNi4zIDAtMTEuNCA1LjQtMTEuNCAxMiAwIDkuMSA3IDE2LjUgMTUuNyAxNi41IDguNiAwIDE1LjctNy40IDE1LjctMTYuNSAwLTExLjYtOS0yMS0yMC0yMXMtMjAgOS40LTIwIDIxYzAgMTQuMSAxMC45IDI1LjUgMjQuMyAyNS41czI0LjMtMTEuNCAyNC4zLTI1LjVjMC0xNi42LTEyLjgtMzAtMjguNi0zMCAtMTUuOCAwLTI4LjYgMTMuNS0yOC42IDMwIDAgOS4yIDMuNCAxNy45IDkuNiAyNC40IDYuMiA2LjUgMTQuNSAxMC4xIDIzLjIgMTAuMXMxNy0zLjYgMjMuMi0xMC4xYzYuMi02LjUgOS42LTE1LjIgOS42LTI0LjQgMC0xMC40LTMuOS0yMC4yLTEwLjktMjcuNiAtNy03LjQtMTYuMy0xMS40LTI2LjMtMTEuNHMtMTkuMyA0LjEtMjYuMyAxMS40UzEzIDQxLjggMTMgNTIuMmMwIDAuOS0wLjcgMS42LTEuNSAxLjZTMTAgNTMuMSAxMCA1Mi4yYzAtMTEuMyA0LjItMjEuOSAxMS44LTI5LjkgNy42LTggMTcuNy0xMi40IDI4LjQtMTIuNCAxMC43IDAgMjAuOCA0LjQgMjguNCAxMi40IDcuNiA4IDExLjggMTguNiAxMS44IDI5LjkgMCAxMC4xLTMuNyAxOS41LTEwLjUgMjYuN0M3My4xIDg2IDY0LjEgODkuOSA1NC41IDg5Ljl6IiBmaWxsPSIjZmZmIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA1MCA1MCIgdG89IjM2MCA1MCA1MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+) 50% 50% no-repeat}#yohoho-buttons{position:absolute;z-index:9999;right:0;top:50px;text-align:left}#yohoho-buttons:hover{right:0!important}#yohoho-buttons div{font-family:Verdana,sans-serif;font-weight:normal;text-shadow:none;line-height:normal;font-size:"+12*p.button_size+"px;color:#fff;background:#"+M+";border-radius:5px 0 0 5px;padding:5px;margin:5px 0 5px 5px;opacity:.7;}#yohoho-buttons div:hover,#yohoho-buttons div.yohoho-active{color:#fff;background:#"+M+";cursor:pointer;opacity:1}";(l=document.createElement("style")).type="text/css",l.styleSheet?l.styleSheet.cssText=N:l.appendChild(document.createTextNode(N)),T.appendChild(l),(r=document.createElement("div")).setAttribute("id","yohoho-loading"),d.innerHTML="",d.appendChild(r),(a=document.createElement("iframe")).setAttribute("id","yohoho-iframe"),a.setAttribute("frameborder","0"),a.setAttribute("allowfullscreen","allowfullscreen"),d.appendChild(a);var b="width:"+(n=parseInt(d.offsetWidth)?parseInt(d.offsetWidth):d.parentNode&&parseInt(d.parentNode.offsetWidth)?parseInt(d.parentNode.offsetWidth):610)+"px;height:"+(t=d.parentNode&&d.parentNode.tagName&&"body"===d.parentNode.tagName.toLowerCase()?Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight):parseInt(d.offsetHeight)&&parseInt(d.offsetHeight)<370?d.parentNode&&parseInt(d.parentNode.offsetHeight)&&parseInt(d.parentNode.offsetHeight)>=370?parseInt(d.parentNode.offsetHeight):370:parseInt(d.offsetHeight)&&n/3<parseInt(d.offsetHeight)?parseInt(d.offsetHeight):d.parentNode&&parseInt(d.parentNode.offsetHeight)&&n/3<parseInt(d.parentNode.offsetHeight)?parseInt(d.parentNode.offsetHeight):n/2)+"px;border:0;margin:0;padding:0;overflow:hidden;position:relative";a.setAttribute("style",b),a.setAttribute("width",n),a.setAttribute("height",t),d.setAttribute("style",b),yo_get("https://ahoy.yohoho.online?cache"+Math.random().toString().substr(2,3),u,(function(e){var t=!0,o=document.createElement("div");o.setAttribute("id","yohoho-buttons");var n=p.player.split(p.separator);if(/\/\/|%2F%2F/i.test(p.player)){for(var a=[],r=0;r<n.length;r++){var i=n[r].match(/^(.*?)(http.*|\/\/.*)$/i);i&&i[1]&&i[1].trim()&&a.push(i[1].trim())}if(a.length)n=a;else{for(var l=Object.keys(e),s=[],u=0;u<n.length;u++)for(var y=0;y<l.length;y++)n[u].toLowerCase().indexOf(l[y].toLowerCase())+1&&s.push(l[y]);n=s}}for(var c=0,M=0,m=n.length;M<m;M++){var f=n[M].toLowerCase().trim();if(e.hasOwnProperty(f)&&e[f]&&e[f].iframe){e[f].quality=e[f].quality?e[f].quality.replace(/"/g,"'"):"",e[f].translate=e[f].translate?e[f].translate.replace(/"/g,"'"):"";var I=document.createElement("div");if(I.setAttribute("onclick",'yo_player("'+encodeURIComponent(e[f].iframe)+'", "'+e[f].quality+'", "'+e[f].translate+'", this, "'+p.button_size+'")'),I.dataset.event=""+(c+1),I.dataset.page=Math.ceil((c+1)/p.button_limit)+"",I.dataset.iframe=e[f].iframe,I.dataset.quality=e[f].quality,I.dataset.translate=e[f].translate,h.hasOwnProperty(f)&&h[f]){var A=e[f].quality?e[f].quality.toUpperCase().search(/TS|TC|SCR|CAM/gi)+1?"\u042d\u041a\u0420\u0410\u041d":e[f].quality.toUpperCase().search(/720P/gi)+1?"720P":e[f].quality.toUpperCase().search(/1080P/gi)+1?"1080P":e[f].quality.toUpperCase().replace(/\s?\u0425\u041e\u0420\u041e\u0428\u0415\u0415\s?|\s?\u0421\u0420\u0415\u0414\u041d\u0415\u0415\s?|\s?\u041f\u041b\u041e\u0425\u041e\u0415\s?/gi,""):"",C=e[f].translate?/\u0414\u0423\u0411\u041b/i.test(e[f].translate)?"\u0414\u0423\u0411\u041b\u042f\u0416":/\u041f\u0420\u041e\u0424/i.test(e[f].translate)?"\u041f\u0420\u041e\u0424.":/\u041b\u042e\u0411\u0418\u0422/i.test(e[f].translate)?"\u041b\u042e\u0411\u0418\u0422.":/\u0410\u0412\u0422\u041e\u0420/i.test(e[f].translate)?"\u0410\u0412\u0422\u041e\u0420.":/\u041c\u041d\u041e\u0413\u041e\u0413\u041e\u041b/i.test(e[f].translate)?"\u041c\u041d\u041e\u0413\u041e\u0413\u041e\u041b.":/\u041e\u0414\u041d\u041e\u0413\u041e\u041b/i.test(e[f].translate)?"\u041e\u0414\u041d\u041e\u0413\u041e\u041b.":/\u0414\u0412\u0423\u0425\u0413\u041e\u041b/i.test(e[f].translate)?"\u0414\u0412\u0423\u0425\u0413\u041e\u041b.":/\u041e\u0420\u0418\u0413\u0418\u041d\u0410\u041b/i.test(e[f].translate)?"\u041e\u0420\u0418\u0413\u0418\u041d\u0410\u041b":/(ENG|ORIG|\u0421\u0423\u0411\u0422)/i.test(e[f].translate)?p.language&&/en/i.test(p.language)?"ENGLISH":"\u0421\u0423\u0411\u0422\u0418\u0422\u0418\u0420\u042b":e[f].translate.toUpperCase():"";c++,h[f]=h[f].replace("{N}",c).replace("{Q}",A).replace("{T}",C).replace(/\s+/g," ").replace(/(^\s*)|(\s*)$/g,""),h[f]=h[f]?h[f]:f.toUpperCase(),I.innerText=c+"\u25ba "+h[f]}else"trailer"===f?(c++,I.innerText=c+"\u25ba "+g.trailer.toUpperCase()):"torrent"===f?(c++,I.innerText=c+"\u25ba "+g.torrent.toUpperCase()):(c++,I.innerText=c+"\u25ba "+f.toUpperCase());if(t&&(yo_player(e[f].iframe,e[f].quality,e[f].translate,I,o,p.button_size),t=!1),o.appendChild(I),c&&!(c%p.button_limit)&&n[M+1]){var L=document.createElement("div");L.setAttribute("onclick","yo_page("+Math.ceil((c+1)/p.button_limit)+');yo_player("'+encodeURIComponent(e[n[M+1].toLowerCase().trim()].iframe)+'", "'+e[n[M+1].toLowerCase().trim()].quality+'", "'+e[n[M+1].toLowerCase().trim()].translate+'", document.querySelector(\'[data-event="'+(c+1)+'"]\'), "'+p.button_size+'")'),L.dataset.event="next",L.dataset.page=Math.ceil(c/p.button_limit)+"",L.innerText="-\u25ba "+g.next,o.appendChild(L);var v=document.createElement("div");v.setAttribute("onclick","yo_page("+Math.ceil(c/p.button_limit)+');yo_player("'+encodeURIComponent(e[n[M-1].toLowerCase().trim()].iframe)+'", "'+e[n[M-1].toLowerCase().trim()].quality+'", "'+e[n[M-1].toLowerCase().trim()].translate+'", document.querySelector(\'[data-event="'+c+'"]\'), "'+p.button_size+'")'),v.dataset.event="prev",v.dataset.page=Math.ceil((c+1)/p.button_limit)+"",v.innerText="\u25c4- "+g.prev,o.appendChild(v)}}}c<1?document.querySelector("#yohoho-loading").style.display="none":c>1&&(d.appendChild(o),n.length>p.button_limit&&yo_page(1))}))}function yo_player(e,t,o,n,a,r){window.parent.postMessage({quality:t,translate:o},"*");var i=document.querySelector("#yohoho-loading");i.style.display="block",setTimeout((function(){i.style.display="none"}),2e3);var l=document.querySelector("#yohoho-iframe");if(l.style.display="block",e.indexOf("4h0y")+1?yo_get(decodeURIComponent(e),"",(function(e,t){l.setAttribute("src","data:text/html;charset=utf-8,"+encodeURIComponent(t))})):l.setAttribute("src",decodeURIComponent(e)),l.setAttribute("class",""),"function"==typeof n.setAttribute){var s=document.querySelectorAll(".yohoho-active");if(s)for(var u=0;u<s.length;u++)s[u].setAttribute("class","");n.setAttribute("class","yohoho-active")}var y=a||document.querySelector("#yohoho-buttons");r=r?parseFloat(r):1,y&&(y.style=y.style?y.style:{},y.style&&"object"==typeof y.style?y.style.right="0":y.style={right:"0"},setTimeout((function(){var e=setInterval((function(){parseInt(y.style&&y.style.right||"0")>-parseInt(y.offsetWidth)+30*r?y.style.right=parseInt(y.style.right)-1+"px":clearInterval(e)}),5)}),5e3))}function yo_page(e){var t=document.querySelectorAll("div[data-page]");if(t)for(var o=0;o<t.length;o++)t[o].style.display="none";var n=document.querySelectorAll('div[data-page="'+e+'"]');if(n)for(var a=0;a<n.length;a++)n[a].style.display="block";var r=document.querySelector("#yohoho-buttons");r&&(r.style.right=0)}function yo_get(e,t,o){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&(200===n.status?o(yo_json(n.responseText),n.responseText):o({},""))},n.open("POST",e,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(t)}function yo_json(e){try{var t=JSON.parse(e);if(t&&"object"==typeof t)return t}catch(o){}return{}}function yo_fullscreen(){var e=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement,t=document.querySelector("#yohoho-iframe");e?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen()}function yo_resize(){var e=document.querySelector("#yohoho-iframe");if(e&&e.parentNode&&e.parentNode.parentNode&&e.parentNode.parentNode.offsetWidth){var t=parseInt(e.parentNode.parentNode.offsetWidth);e.style.width=t+"px",e.setAttribute("width",t.toString()),e.parentNode.style.width=t+"px"}}!function(){var e=document.querySelectorAll("[data-ahoy]");if(e&&e.length)for(var t in e)e.hasOwnProperty(t)&&e[t]&&e[t].addEventListener("click",(function(){yo(this)}));else yo()}();