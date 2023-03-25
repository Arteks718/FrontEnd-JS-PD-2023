// let ranges = document.querySelectorAll('input[type="range"]');
// window.addEventListener("load", () => {
//   document.body.style.backgroundColor = localStorage.getItem("BG-COLOR");
// });
// ranges.forEach((el) => (el.oninput = updBodyColor));

// function updBodyColor(event) {
//   //const color = `rgb(${ranges[0].value},${ranges[1].value},${ranges[2].value})`;
//   let color = "rgb(";
//   ranges.forEach((el, index, list) =>
//     index == list.length - 1
//       ? (color += el.value + ")")
//       : (color += el.value + ",")
//   );
//   document.body.style.backgroundColor = color;
//   localStorage.setItem("BG-COLOR", color);
// }

// ]

const content = document.querySelector('button');
content.onclick = function(){
  location.replace(`${location.origin}/classwork/BOM//assets/pages/contact.html`);
}


document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

