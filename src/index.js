import "./style.css";
import "bootstrap";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "<h1>Webpack + Bootstrap is Working</h1>";

  return element;
}

document.body.appendChild(component());
