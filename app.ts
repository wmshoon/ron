const colorArray = [
  "#40E0D0",
  "#FF0080",
  "#FC466B",
  "#3F5EFB",
  "#7303c0",
  "#ec38bc",
  "#fdeff9",
];

var lengthOfColorArray = colorArray.length;

const boxWidthAndHeight = [
  199, 143, 165, 138, 102, 124, 180, 143, 179, 200, 132, 131, 143, 143, 166,
  196, 127, 210, 74, 114, 115, 137, 217, 83, 112, 195, 209, 231, 31, 42, 51, 85,
  190, 30, 106, 107, 112, 204,
];

for (var i = 0; i < 12; i++) {
  document.write(`<box class = "bgr" id = "bgr${i}"></box>`);
  const targetElement: any = document.getElementById(`bgr${i}`);
  targetElement.style.width = `${boxWidthAndHeight[i]}px`;
  targetElement.style.height = `${boxWidthAndHeight[i]}px`;
  targetElement.style.animationName = "sizeChange";
  targetElement.style.margin = `${Math.random() * Math.random() * 100}px`;
}

document.write('<box id = "aboutRon">About Ron</box>');
document.write("<title>About Ron</title>");
