var copyright = "Copyright (c) 2020 YJYOON All rights reserved.";
var H=34, W=20; // field size
var shapeArray = [
    [[2,2],[1,2],[1,1],[0,1]],
    [[1,1],[1,0],[0,2],[0,1]],
    [[2,1],[1,1],[1,2],[0,2]],
    [[1,2],[1,1],[0,1],[0,0]],
    [[1,2],[1,1],[0,2],[0,1]],
    [[2,0],[1,1],[1,0],[0,0]],
    [[1,1],[0,2],[0,1],[0,0]],
    [[2,2],[1,2],[1,1],[0,2]],
    [[1,2],[1,1],[1,0],[0,1]],
    [[3,1],[2,1],[1,1],[0,1]],
    [[1,3],[1,2],[1,1],[1,0]],
    [[2,2],[2,1],[1,1],[0,1]],
    [[1,0],[0,2],[0,1],[0,0]],
    [[2,2],[1,2],[0,2],[0,1]],
    [[1,2],[1,1],[1,0],[0,2]],
    [[2,2],[2,1],[1,2],[0,2]],
    [[2,2],[2,1],[2,0],[1,0]],
    [[2,1],[1,1],[0,1],[0,2]],
    [[1,2],[0,2],[0,1],[0,0]]
];
var shapeColorArray = [
    "rgb(199,82,82)",
    "rgb(233,174,43)",
    "rgb(105,155,55)",
    "rgb(53,135,145)",
    "rgb(49,95,151)",
    "rgb(102,86,167)"
];
var wallColor = "rgb(22,41,63)";
var shapeColor;
var shapeColorIndex, nextColorIndex;

var shapeCell;
var existField;
var shapePoint = [1,parseInt(W/2)-2];
var createPoint = [1,parseInt(W/2)-2];
var currentShape, nextShape;


init();

// 초기 설정
function init(){
    drawTable();
    initExistField();
    setWall();
    
    nextColorIndex = -1;
    shapeCell=[];
 
    chooseNextShape();
    chooseNextColor();
    moveShape();

    
 
}

function gebi(y,x){
    var ret = document.getElementById(String(y)+" "+String(x));
    return ret;
}

// 필드 초기화
function initExistField(){
    existField = new Array(H);
    for(var i=0;i<H;i++)
        existField[i]=new Array(W);
    for(var i=0;i<H;i++)
        for(var j=0;j<W;j++)
            existField[i][j]=false;
}
function drawTable(){
    var fieldTag = "<table id=\"gameTable\" border=0>";
    for(var i=0;i<H;i++){
        fieldTag += "<tr>";
        for(var j=0;j<W;j++)
            fieldTag += "<td id=\""+String(i)+" "+String(j)+"\"  ></td>";
        fieldTag += "</tr>";
    }
    document.write(fieldTag);
}
function setWall(){
    for(var i=0;i<H;i++){
        gebi(i,0).style.background = wallColor;
        gebi(i,W-1).style.background = wallColor;
        existField[i][0]=true;
        existField[i][W-1]=true;
    }
    for(var i=0;i<W;i++){
        gebi(0,i).style.background = wallColor;
        gebi(H-1,i).style.background = wallColor;
        existField[0][i]=true;
        existField[H-1][i]=true;
    }
}

function chooseNextShape(){
    nextShape = parseInt(Math.random() * shapeArray.length);
}
function chooseNextColor(){
    if(++nextColorIndex == shapeColorArray.length)
        nextColorIndex=0;
}

function moveShape(){
    let s = setInterval(createShape,300);
}

function createShape(){
    
    currentShape = nextShape;
    currentColorIndex = nextColorIndex;
    shapeColor = shapeColorArray[currentColorIndex];
    var shape = shapeArray[currentShape];

    if((shapePoint[0] == createPoint[0]) && (shapePoint[1] == createPoint[1])) {
        //도형 그리기
        for(var i=0;i<shape.length;i++){
            var sy = shapePoint[0]+shape[i][0];
            var sx = shapePoint[1]+shape[i][1];
            var ret = document.getElementById(String(sy)+" "+String(sx));
            ret.style.backgroundColor = shapeColor;
            shapeCell.push([sy,sx]);
        }
        shapePoint[0] += 1

    }
    else {
        if (isValidPoint(shapePoint, shape)) {
            for(var i=0;i<shapeCell.length;i++){
                var ret = document.getElementById(shapeCell[i][0]+" "+shapeCell[i][1]);
                ret.style.background = 'rgb(232, 235, 238)';
            }
            shapeCell = [];

            for(var i=0; i<shape.length; i++){
                var sy = shapePoint[0]+shape[i][0];
                var sx = shapePoint[1]+shape[i][1];
                var ret = document.getElementById(String(sy)+" "+String(sx));
                ret.style.backgroundColor = shapeColor;
                shapeCell.push([sy,sx]);
            }
            shapePoint[0] += 1
        }
        else {
            for(var i=0;i<shapeCell.length;i++){
                var ret = document.getElementById(shapeCell[i][0]+" "+shapeCell[i][1]);
                ret.style.backgroundColor = 'rgb(232, 235, 238)';
            }
            shapeCell = []
            chooseNextShape();
            chooseNextColor();
            shapePoint[0] = createPoint[0];
            shapePoint[1] = createPoint[1];
        }
    }
}

function isValidPoint(shapePoint,shape){

    for(var i=0;i<shape.length;i++){
        var y = shapePoint[0]+shape[i][0];
        var x = shapePoint[1]+shape[i][1];
        if (!(y<=0 || y>=H-1 || x<=0 || x>=W-1 || existField[y][x]))
            return true
        else
            return false
    }
}