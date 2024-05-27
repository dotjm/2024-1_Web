var copyright = "Copyright (c) 2020 YJYOON All rights reserved.";
var H=34, W=20; // field size
var wallColor = "rgb(22,41,63)";
var blockColor = "#709A39";
var nowY = 1;

window.onload = function() {
    init();
};

// 초기 설정
function init(){
    drawTable();
}

function drawTable() {
    blockField = document.getElementById("blockField");
    str = "<table border=\"0\">\n";
    for(i = 0; i < H; i++){
        str += "<tr>\n";
        for(j = 0; j < W; j++) {
            if(j == 0 || j == W-1 | i == 0 || i == H-1) {
                str += "<td class=\"wall-td\" id=\"block"  + i + "x" + j + "\" style=\"background-color: " + wallColor + ";\"></td>";
            } else {
                str += "<td class=\"board-td\" id=\"block"  + i + "x" + j + "\"></td>";
            }
            
        }
        str += "</tr>\n";
    }
    str += "</table>"

    blockField.innerHTML = blockField.innerHTML + str;
}

function createShape() {
    // 9
    wallTds = document.getElementsByClassName("wall-td");
    for (let wallTd of wallTds) {
        wallTd.style.backgroundColor = wallColor;
    }
    boardTds = document.getElementsByClassName("board-td");
    for (let boardTd of boardTds) {
        boardTd.style.backgroundColor = "";
    }

    firstLeft = document.getElementById("block"+(nowY) + "x8");
    firstRight = document.getElementById("block"+(nowY) + "x9");
    secondLeft = document.getElementById("block"+(nowY+1) + "x8");
    secondRight = document.getElementById("block"+(nowY+1) + "x9");

    firstLeft.style.backgroundColor = "#709A39";
    firstRight.style.backgroundColor = "#709A39";
    secondLeft.style.backgroundColor = "#709A39";
    secondRight.style.backgroundColor = "#709A39";

    if (nowY < (H-3)) {
        nowY += 1;
    }

    
}