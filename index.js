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
  console.log(path);
  setHTML(contentDiv, path);
}

function switchTheme() {
  const htmlVariables = document.documentElement;
  const currentTheme = htmlVariables.getAttribute("data-theme");
  htmlVariables.setAttribute("data-theme", currentTheme == "dark" ? "light" : "dark");
}

// Source - https://stackoverflow.com/a/57795495
// Posted by Mark Szabo, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-13, License - CC BY-SA 4.0
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  const newColorScheme = event.matches ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newColorScheme);
});


window.onload = (event) => {
  console.log('Hello!\n');

  const links = document.getElementsByClassName('section');
  setHTML(document.getElementById("content"), "/home.html");
  for (const link of links) {
    link.addEventListener('click', injectHTML);
  }
}
