async function setHTML(element, filePath) {
  try {
    const response = await fetch(filePath);
    const htmlContent = await response.text();

    element.innerHTML = htmlContent;
  } catch (error) {
    console.error('Error injecting HTML:', error);
  }
}

async function injectHTML(event) {
  const path = event?.target?.attributes.getNamedItem("href")?.value;
  const contentDiv = document.getElementById("content");
  console.debug(path);
  setHTML(contentDiv, path);
}

async function switchTheme() {
  const htmlVariables = document.documentElement;
  currentTheme = htmlVariables.getAttribute("data-theme");
  const switcherButton = document.getElementById("switcher");

  htmlVariables.setAttribute("data-theme", currentTheme == "dark" ? "light" : "dark");
  currentTheme = htmlVariables.getAttribute("data-theme");
  console.debug("Setting theme ", currentTheme);
  switch (currentTheme) {
    case "dark":
      switcherButton.setAttribute("src", "/assets/sun-svgrepo-com.png");
      break;
    case "light":
      switcherButton.setAttribute("src", "/assets/moon-svgrepo-com.png");
      break;
    default:
      console.warn("huh?");
      break;
  }
}

window.onload = (event) => {
  console.log('Hello!\n');

  const links = document.getElementsByClassName('section');
  setHTML(document.getElementById("content"), "/home.html");
  for (const link of links) {
    link.addEventListener('click', injectHTML);
  }
}
