var colorArray = [
    "#40E0D0",
    "#FF0080",
    "#FC466B",
    "#3F5EFB",
    "#7303c0",
    "#ec38bc",
    "#fdeff9",
];
var scaleX = document.documentElement.scrollWidth;
var scaleY = document.documentElement.scrollHeight;
var lengthOfColorArray = colorArray.length;
var boxWidthAndHeight = [7, 12, 10, 9, 12, 8, 12, 13, 13, 9, 7, 11];
for (var i = 0; i < 12; i++) {
    document.write("<box class = \"bgr\" id = \"bgr".concat(i, "\"></box>"));
    var targetElement = document.getElementById("bgr".concat(i));
    targetElement.style.width = "".concat(boxWidthAndHeight[i], "rem");
    targetElement.style.height = "".concat(boxWidthAndHeight[i], "rem");
    targetElement.style.animationName = "sizeChange";
    targetElement.style.position = "absolute";
    //위치지정 안함. 랜덤 크기로 뿌리기만 함.
}
document.write('<box id = "aboutRon">About</box>');
document.write("<title>About</title>");
if (scaleX / scaleY > 16 / 9 || scaleX / scaleY < 1) {
    alert("sorry. not available for this kind of device. the site will be redirected to github page automatically.");
    window.location.href = "http://github.com/wmshoon/ron";
}
alert(scaleX / scaleY);
