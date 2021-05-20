// - Flood Fill
/*
You are given a canvas (2-dimensional array of integers), 
starting coordinate (2-element array), and the color to flood (integer value). 
Build floodFill(canvas2D,startXY,newColor)! 
Replace a pixel’s color value only if it is the same color as the 
origin coordinate and is directly adjacent via X or Y to another pixel you will change. 
Note: diagonally related pixels are not considered adjacent.
*/

var arr = [
    [3,2,3,4,3],
    [2,3,3,4,0],
    [7,3,3,5,3],
    [6,5,3,4,1],
    [1,2,3,3,3],
]
console.log("Initial: \n", arr);

function floodFill(canvas, startXY, newColor){
    var og_color = canvas[startXY[1]][startXY[0]];
    canvas[startXY[1]][startXY[0]] = newColor;

    if (canvas[startXY[1]-1] != undefined){
        if (canvas[startXY[1]-1][startXY[0]] == og_color){
            floodFill(canvas, [startXY[0],startXY[1]-1], newColor);
        }
    }
    if (canvas[startXY[1]][startXY[0]-1] == og_color){
        floodFill(canvas, [startXY[0]-1,startXY[1]], newColor);
    }
    if (canvas[startXY[1]][startXY[0]+1] == og_color){
        floodFill(canvas, [startXY[0]+1,startXY[1]], newColor);
    }
    if (canvas[startXY[1]+1] != undefined){
        if (canvas[startXY[1]+1][startXY[0]] == og_color){
            floodFill(canvas, [startXY[0],startXY[1]+1], newColor);
        }
    }
}
floodFill(arr, [1,3], 3);
console.log("After: \n", arr);