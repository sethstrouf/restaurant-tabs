const createHeader = () => {
  let header = document.createElement("h3");
  header.innerText = "Menu";
  return header;
}

const createMenuItem = (title, summary) => {
  let itemDiv = document.createElement("div");
  itemDiv.classList.add("itemDiv");
  let header = document.createElement("h4");
  header.innerText = title;
  let copy = document.createElement("p");
  copy = document.createTextNode(summary);

  itemDiv.appendChild(header);
  itemDiv.appendChild(copy);
  return itemDiv;
}

const createMenuDiv = () => {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add('tabDiv');

  menuDiv.appendChild(createHeader());
  menuDiv.appendChild(createMenuItem("Buffalo 'Chicken'",
      "Homemade seitan wings smothered with a tangy, heat-filled sauce."));
  menuDiv.appendChild(createMenuItem("World's Best 'Burger'",
      "Burger patty made with lentils and beets topped with an amazing house peanut butter and pickles."));
  menuDiv.appendChild(createMenuItem("Tofu Quiche",
      "Creamy tofu and spinach fill an incredible homemade pastry crust."));
  menuDiv.appendChild(createMenuItem("Brownie a la Ode",
      "Vegan brownie topped with a rich oat-milk-based ice cream!"));
  return menuDiv;
}

export { createMenuDiv }