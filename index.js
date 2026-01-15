async function setHTML(filePath, element) {
  try {
    const response = await fetch(filePath);
    const htmlContent = await response.text();

    element.innerHTML = htmlContent;
  } catch (error) {
    console.error('Error loading file:', error);
  }
}

async function injectHTML(event) {
  console.log(event);

  const file = event?.target?.attributes.getNamedItem("href")?.value;
  const contentDiv = document.getElementById("content");

  console.log(file);
  console.log(contentDiv);

  setHTML(file, contentDiv);
}

window.onload = (event) => {
  console.log('Hello!\n');

  const links = document.getElementsByClassName('section');

  setHTML("/home.html", document.getElementById("content"));

  for (const link of links) {
    link.addEventListener('click', injectHTML);
  }
}
