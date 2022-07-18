const colorArray = [
  "#40E0D0",
  "#FF0080",
  "#FC466B",
  "#3F5EFB",
  "#7303c0",
  "#ec38bc",
  "#fdeff9",
];
const Scale = function () {
  var scaleX = document.documentElement.scrollWidth;
  var scaleY = document.documentElement.scrollHeight;
  alert(scaleX + "!" + scaleY + "!");
};

var lengthOfColorArray = colorArray.length;

const boxWidthAndHeight = [7, 12, 10, 9, 12, 8, 12, 13, 13, 9, 7, 11];

for (var i = 0; i < 12; i++) {
  document.write(`<box class = "bgr" id = "bgr${i}"></box>`);
  const targetElement: any = document.getElementById(`bgr${i}`);
  targetElement.style.width = `${boxWidthAndHeight[i]}rem`;
  targetElement.style.height = `${boxWidthAndHeight[i]}rem`;
  targetElement.style.animationName = "sizeChange";
  // targetElement.style.margin = `${Math.random() * Math.random() * 100}px`;
}

document.write('<box id = "aboutRon">About</box>');
const targetElement: any = document.getElementById(`bgr${3}`);

document.write("<title>About</title>");

// function setPositionOfElement(positionX, positionY): any {}

Scale();
