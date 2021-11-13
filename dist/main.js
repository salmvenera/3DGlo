(()=>{"use strict";const e=({timing:e,draw:t,duration:a})=>{let n=performance.now();requestAnimationFrame((function o(r){let c=(r-n)/a;c>1&&(c=1);let l=e(c);t(l),c<1&&requestAnimationFrame(o),c>1&&requestAnimationFrame(o)}))};(e=>{const t=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),o=()=>{let e=(()=>{let e=(new Date("16 november 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining>0?(t.textContent=e.hours>9?e.hours:"0"+e.hours,a.textContent=e.minutes>9?e.minutes:"0"+e.minutes,n.textContent=e.seconds>9?e.seconds:"0"+e.seconds,setInterval(o,1e3)):(t.textContent="00",a.textContent="00",n.textContent="00")};o()})(),(()=>{document.querySelector(".menu");const e=document.querySelector("menu");e.querySelector(".close-btn"),e.querySelectorAll("ul>li>a"),document.querySelector("main"),document.querySelector("active-menu"),document.body.addEventListener("click",(t=>{console.dir(t.target),t.target.closest(".menu")?e.classList.toggle("active-menu"):t.target.closest("menu")===e&&t.target.classList.contains("close-btn")?(t.target.classList.contains("close-btn"),e.classList.toggle("active-menu")):t.target.closest("menu")!==e?e.classList.remove("active-menu"):"A"===t.target.tagName&&e.classList.toggle("active-menu")}))})(),(()=>{const t=document.querySelector(".popup"),a=document.querySelectorAll(".popup-btn");t.querySelector(".popup-close"),document.querySelector(".popup-content"),a.forEach((a=>{a.addEventListener("click",(()=>{t.style.opacity=0,t.style.display="block",document.documentElement.clientWidth>768&&e({duration:3e3,timing:e=>e,draw(e){t.style.opacity=e}})}))})),t.addEventListener("click",(a=>{a.target.closest(".popup-content")&&!a.target.classList.contains("popup-close")||document.documentElement.clientWidth>768&&(t.style.opacity="1",e({duration:3e3,timing:e=>e,draw(e){t.style.opacity=1-e}}),setTimeout((()=>{t.style.display="none"}),3e3))}))})(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),n=document.getElementById("form1-name"),o=document.getElementById("form1-email"),r=document.getElementById("form1-phone"),c=document.getElementById("form2-name"),l=document.getElementById("form2-email"),i=document.getElementById("form2-phone"),u=document.getElementById("form2-message"),s=document.getElementById("form3-name"),d=document.getElementById("form3-email"),m=document.getElementById("form3-phone");e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),n.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\-\ ]/gi,"")})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-z\-\ \@\_\.\!\'\~\*]/gi,"")})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\()\-]/gi,"")})),c.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\-\ ]/gi,"")})),l.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-z\-\ \@\_\.\!\'\~\*]/gi,"")})),i.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\()\-]/gi,"")})),u.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\-\ ]/gi,"")})),s.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\-\ ]/gi,"")})),d.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-z\-\ \@\_\.\!\'\~\*]/gi,"")})),m.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\()\-]/gi,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");console.log(n),t.forEach(((e,t)=>{e===n?(e.classList.add("active"),a[t].classList.remove("d-none")):(e.classList.remove("active"),a[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let a=0,n=0,o=0;(()=>{const e=document.querySelector(".portfolio-dots");let a="";t.forEach(((e,t)=>{a+=0===t?'<li class="dot dot-active"></li>':'<li class="dot"></li>'})),e.insertAdjacentHTML("beforeend",a),o=document.querySelectorAll(".dot")})();const r=(e,t,a)=>{e[t].classList.remove(a)},c=(e,t,a)=>{e[t].classList.add(a)},l=()=>{r(t,a,"portfolio-item-active"),r(o,a,"dot-active"),a++,a>=t.length&&(a=0),c(t,a,"portfolio-item-active"),c(o,a,"dot-active")},i=(e=1500)=>{n=setInterval(l,e)};e.addEventListener("click",(e=>{e.preventDefault();let n=e.target;e.target.matches(".dot, .portfolio-btn")&&(r(t,a,"portfolio-item-active"),r(o,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.matches(".dot")&&o.forEach(((e,t)=>{e===n&&(a=t)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),c(t,a,"portfolio-item-active"),c(o,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),a=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),o=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),c=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==a&&t.target!==n&&t.target!==o&&t.target!==r||(()=>{const t=+a.options[a.selectedIndex].value,l=n.value;let i=0,u=1,s=1;o.value>1&&(u+=+o.value/10),r.value&&r.value<5?s=2:r.value&&r.value<10&&(s=1.5),i=a.value&&n.value?e*t*l*u*s:0,c.textContent=i})()}))})(100)})();