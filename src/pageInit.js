const createLogo = () => {
  let logo = document.createElement("img");
  logo.src = "https://lh3.googleusercontent.com/proxy/KcD6aIfjvT2BHNFILeTkO4x7Z-g_M0jHwjc4p50EFPEIjnTXgvZaKlMEs1UE91PwXdz6RiIxJCSjzAhm9kfBebqJ7fzs_3xCKQ9umr8ZTh0bw4Y0R87VlGCskVaXOmy8Ao1JbL_RvtLv_-WRedVHnvZKKjX2eT7rSF8sYw";
  logo.alt = "Logo";
  logo.classList = "logo";
  return logo;
}

const createTitle = () => {
  let title = document.createElement("h1");
  title.appendChild(document.createTextNode("Plantastic"));
  return title;
}

const createSummary = () => {
  let summary = document.createElement("h2");
  summary.appendChild(document.createTextNode("Eat plants! Take walks!"));
  summary.classList = "summary";
  return summary;
}

const createHeader = () => {
  let header = document.createElement("header")
  //header.appendChild(createLogo());
  header.appendChild(createTitle());
  return header;
}

export { createSummary, createHeader }