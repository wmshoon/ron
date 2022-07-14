const colorArray = ["#40E0D0","#FF0080","#FC466B","#3F5EFB","#7303c0","#ec38bc","#fdeff9"];

var lengthOfColorArray = colorArray.length;

const boxWidthAndHeight = [[2,4],[3,3],[12,5]]

for(var i = 0; i<10; i++){
    document.write(`<box class = "bgr" id = "bgr${i}" style = "border: ${colorArray[i]} solid 5px;"></box>`);
}