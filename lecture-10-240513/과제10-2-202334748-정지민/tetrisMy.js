var copyright = "Copyright (c) 2020 YJYOON All rights reserved.";
var H=34, W=20; // field size
var wallColor = "rgb(22,41,63)";

init();

// 초기 설정
function init(){
    drawTable();
}

function drawTable() {
    blockField = document.getElementById("blockField");
    str = "<table border=\"1\">\n";
    for(i = 0; i < H; i++){
        str += "<tr>\n";
        for(j = 0; j < W; j++) {
            if(j == 0 || j == W-1 | i == 0 || i == H-1) {
                str += "<td style=\"background-color: " + wallColor + ";\"></td>";
            } else {
                str += "<td></td>";
            }
            
        }
        str += "</tr>\n";
    }
    str += "</table>"

    blockField.innerHTML = blockField.innerHTML + str;
}