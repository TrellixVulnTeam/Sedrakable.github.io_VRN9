var offsetY = 0;
const offsetMultiplier = 0.4;
var background = document.getElementById("background");
var height = background.offsetHeight;
// if (background === null) {
//   console.log("reee");
//   background = document.getElementById("project_background");
//   window.addEventListener(
//     "scroll",
//     function (e) {
//       offsetY = window.pageYOffset;
//       scrollSpeed();
//     },
//     false
//   );
// }

window.addEventListener(
  "scroll",
  function (e) {
    offsetY = window.pageYOffset;
    scrollSpeed();
  },
  false
);

// var itemsAndSpeed = [[document.getElementById('background'),0.5]];

window.addEventListener(
  "resize",
  function (e) {
    console.log("resised");
    height = background.offsetHeight;
    scrollSpeed();
  },
  false
);

function scrollSpeed() {
  var x = offsetMultiplier * offsetY;

  var currentHeight = height - x;
  background.style.transform = "translateY(" + x + "px)";
  background.style.height = currentHeight + "px";
}
