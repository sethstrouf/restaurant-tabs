const createHeader = () => {
  let header = document.createElement("h3");
  header.innerText = "Contact Us";
  return header;
}

const createPhoneInfo = () => {
  let div = document.createElement("div");
  let phoneImage = document.createElement("i");
  phoneImage.classList.add("fas", "fa-phone");
  let text = document.createElement("p");
  text = document.createTextNode("  402-555-5555");

  div.appendChild(phoneImage);
  div.appendChild(text);
  return div;
}

const createEmailInfo = () => {
  let div = document.createElement("div");
  let instaImage = document.createElement("i");
  instaImage.classList.add("far", "fa-envelope");
  let text = document.createElement("p");
  text = document.createTextNode("  plantastic@example.com");

  div.appendChild(instaImage);
  div.appendChild(text);
  return div;
}

const createInstaInfo = () => {
  let div = document.createElement("div");
  let instaImage = document.createElement("i");
  instaImage.classList.add("fab", "fa-instagram");
  let text = document.createElement("p");
  text = document.createTextNode("  plantasticinsta");

  div.appendChild(instaImage);
  div.appendChild(text);
  return div;
}

const createContactDiv = () => {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add('tabDiv');

  contactDiv.appendChild(createHeader());
  contactDiv.appendChild(createPhoneInfo());
  contactDiv.appendChild(createEmailInfo());
  contactDiv.appendChild(createInstaInfo());
  return contactDiv;
}

export { createContactDiv }