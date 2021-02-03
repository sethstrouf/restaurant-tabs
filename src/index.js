import { createHeader, createSummary } from './pageInit'
import { createNavBar, createTab } from './createTabs'
import { createContactDiv } from './contactTab'
import { createMenuDiv } from './menuTab'

let contentDiv = document.querySelector("#content");

//Header
contentDiv.appendChild(createHeader());
contentDiv.appendChild(createSummary());

//Tabs
let navBar = createNavBar();
let tabArray = [];
tabArray.push(createTab("Contact Us"));
tabArray.push(createTab("Menu"));
tabArray.forEach(tab => navBar.appendChild(tab));
contentDiv.appendChild(navBar);

//Initial Tab
let header = document.createElement("h3");
header.innerText = "Welcome!";
let tabDiv = document.createElement("div");
tabDiv.classList.add("tabDiv");
let copy = document.createElement("p");
copy = document.createTextNode("Everything here is vegan and delicious!")
tabDiv.appendChild(header);
tabDiv.appendChild(copy);
contentDiv.appendChild(tabDiv);

//Tab Logic
tabArray.forEach(tab => tab.addEventListener("click", () => tabClicked(tab)));

const tabClicked = (tab) => {
  tabArray.forEach(tab => tab.classList.remove("selected"));
  tab.classList.add("selected");
  if(tab.innerText === "Contact Us") {
    contentDiv.replaceChild(createContactDiv(), contentDiv.lastChild);
  } else if(tab.innerText === "Menu") {
    contentDiv.replaceChild(createMenuDiv(), contentDiv.lastChild);
  }
}