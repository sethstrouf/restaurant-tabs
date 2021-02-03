const createNavBar = () => {
  const navBar = document.createElement("nav");
  return navBar;
}

const createTab = (text) => {
  const tab = document.createElement("div");
  // Get rid of white space in string
  let noSpaceText = text.replace(/\s+/g, '');
  tab.classList.add("tab", `${noSpaceText}-tab`);
  tab.innerText = text;
  return tab;
}


export { createNavBar, createTab }