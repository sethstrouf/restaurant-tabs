(()=>{"use strict";const e=e=>{const t=document.createElement("div");let n=e.replace(/\s+/g,"");return t.classList.add("tab",`${n}-tab`),t.innerText=e,t},t=(e,t)=>{let n=document.createElement("div");n.classList.add("itemDiv");let a=document.createElement("h4");a.innerText=e;let d=document.createElement("p");return d=document.createTextNode(t),n.appendChild(a),n.appendChild(d),n};let n=document.querySelector("#content");n.appendChild((()=>{let e=document.createElement("header");return e.appendChild((()=>{let e=document.createElement("h1");return e.appendChild(document.createTextNode("Plantastic")),e})()),e})()),n.appendChild((()=>{let e=document.createElement("h2");return e.appendChild(document.createTextNode("Eat plants! Take walks!")),e.classList="summary",e})());let a=document.createElement("nav"),d=[];d.push(e("Contact Us")),d.push(e("Menu")),d.forEach((e=>a.appendChild(e))),n.appendChild(a);let l=document.createElement("h3");l.innerText="Welcome!";let c=document.createElement("div");c.classList.add("tabDiv");let i=document.createElement("p");i=document.createTextNode("Everything here is vegan and delicious!"),c.appendChild(l),c.appendChild(i),n.appendChild(c),d.forEach((e=>e.addEventListener("click",(()=>r(e)))));const r=e=>{d.forEach((e=>e.classList.remove("selected"))),e.classList.add("selected"),"Contact Us"===e.innerText?n.replaceChild((()=>{const e=document.createElement("div");return e.classList.add("tabDiv"),e.appendChild((()=>{let e=document.createElement("h3");return e.innerText="Contact Us",e})()),e.appendChild((()=>{let e=document.createElement("div"),t=document.createElement("i");t.classList.add("fas","fa-phone");let n=document.createElement("p");return n=document.createTextNode("  402-555-5555"),e.appendChild(t),e.appendChild(n),e})()),e.appendChild((()=>{let e=document.createElement("div"),t=document.createElement("i");t.classList.add("far","fa-envelope");let n=document.createElement("p");return n=document.createTextNode("  plantastic@example.com"),e.appendChild(t),e.appendChild(n),e})()),e.appendChild((()=>{let e=document.createElement("div"),t=document.createElement("i");t.classList.add("fab","fa-instagram");let n=document.createElement("p");return n=document.createTextNode("  plantasticinsta"),e.appendChild(t),e.appendChild(n),e})()),e})(),n.lastChild):"Menu"===e.innerText&&n.replaceChild((()=>{const e=document.createElement("div");return e.classList.add("tabDiv"),e.appendChild((()=>{let e=document.createElement("h3");return e.innerText="Menu",e})()),e.appendChild(t("Buffalo 'Chicken'","Homemade seitan wings smothered with a tangy, heat-filled sauce.")),e.appendChild(t("World's Best 'Burger'","Burger patty made with lentils and beets topped with an amazing house peanut butter and pickles.")),e.appendChild(t("Tofu Quiche","Creamy tofu and spinach fill an incredible homemade pastry crust.")),e.appendChild(t("Brownie a la Ode","Vegan brownie topped with a rich oat-milk-based ice cream!")),e})(),n.lastChild)}})();