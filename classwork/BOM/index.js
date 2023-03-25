const [widthElem, heightElem] = document.querySelectorAll("h1");
const inputEl = document.querySelector('input[type="text"]');

// window.addEventListener("resize", reaction1);

// window.addEventListener('load', reaction1);

// window.addEventListener("keypress", reaction2);

// window.addEventListener("dblclick", reaction2);

// function reaction1(event) {
//   widthElem.innerText = `width="${window.outerWidth}px"`;
//   heightElem.innerText = `height="${window.outerHeight}px"`;
// }

window.onclick = logEvent;
window.ondblclick = logEvent;
window.onresize = logEvent;
window.onkeypress = logEvent;



function logEvent(event) {
  console.log(event);
}