var colorArray = [
    "#40E0D0",
    "#FF0080",
    "#FC466B",
    "#3F5EFB",
    "#7303c0",
    "#ec38bc",
    "#fdeff9",
];
var Scale = function () {
    var scaleX = document.documentElement.scrollWidth;
    var scaleY = document.documentElement.scrollHeight;
    alert(scaleX + "!" + scaleY + "!");
};
var lengthOfColorArray = colorArray.length;
var boxWidthAndHeight = [7, 12, 10, 9, 12, 8, 12, 13, 13, 9, 7, 11];
for (var i = 0; i < 12; i++) {
    document.write("<box class = \"bgr\" id = \"bgr".concat(i, "\"></box>"));
    var targetElement_1 = document.getElementById("bgr".concat(i));
    targetElement_1.style.width = "".concat(boxWidthAndHeight[i], "rem");
    targetElement_1.style.height = "".concat(boxWidthAndHeight[i], "rem");
    targetElement_1.style.animationName = "sizeChange";
    targetElement_1.style.margin = "".concat(Math.random() * Math.random() * 100, "px");
}
document.write('<box id = "aboutRon">About</box>');
var targetElement = document.getElementById("bgr".concat(3));
document.write("<title>About Ron</title>");
// function setPositionOfElement(positionX, positionY): any {}
Scale();
