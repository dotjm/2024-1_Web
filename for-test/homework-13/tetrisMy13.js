const blockList = [
  [[2, 2], [1, 2], [1, 1], [0, 1]],
  [[1, 1], [1, 0], [0, 2], [0, 1]],
  [[2, 1], [1, 1], [1, 2], [0, 2]],
  [[1, 2], [1, 1], [0, 1], [0, 0]],
  [[1, 2], [1, 1], [0, 2], [0, 1]],
  [[2, 0], [1, 1], [1, 0], [0, 0]],
  [[1, 1], [0, 2], [0, 1], [0, 0]],
  [[2, 2], [1, 2], [1, 1], [0, 2]],
  [[1, 2], [1, 1], [1, 0], [0, 1]],
  [[3, 1], [2, 1], [1, 1], [0, 1]],
  [[1, 3], [1, 2], [1, 1], [1, 0]],
  [[2, 2], [2, 1], [1, 1], [0, 1]],
  [[1, 0], [0, 2], [0, 1], [0, 0]],
  [[2, 2], [1, 2], [0, 2], [0, 1]],
  [[1, 2], [1, 1], [1, 0], [0, 2]],
  [[2, 2], [2, 1], [1, 2], [0, 2]],
  [[2, 2], [2, 1], [2, 0], [1, 0]],
  [[2, 1], [1, 1], [0, 1], [0, 2]],
  [[1, 2], [0, 2], [0, 1], [0, 0]],
];

const blockColorList = [
  "rgb(199,82,82)",
  "rgb(233,174,43)",
  "rgb(105,155,55)",
  "rgb(53,135,145)",
  "rgb(49,95,151)",
  "rgb(102,86,167)",
];

let currentBlockColorIndex = 0;
let currentBlock;
let currentColor;
let currentY = 1;
let currentX = 8;

const H = 34;
const W = 20;
const wallColor = "rgb(22,41,63)";
const emptyColor = "rgb(232, 235, 238)";
let gameInterval;

window.onload = function () {
  init();
  startGame();
};

function init() {
  drawTable();
  spawnNewBlock();
}

function drawTable() {
  const blockField = document.getElementById("blockField");
  let str = "<table border=\"0\">\n";
  for (let i = 0; i < H; i++) {
    str += "<tr>\n";
    for (let j = 0; j < W; j++) {
      if (j === 0 || j === W - 1 || i === 0 || i === H - 1) {
        str += `<td id="block${i}x${j}" style="background-color: ${wallColor};"></td>`;
      } else {
        str += `<td id="block${i}x${j}" class="board-td" style="background-color: ${emptyColor};"></td>`;
      }
    }
    str += "</tr>\n";
  }
  str += "</table>";
  blockField.innerHTML = str;
}

function spawnNewBlock() {
  let randomIndex = Math.floor(Math.random() * blockList.length);
  currentBlock = blockList[randomIndex];
  currentColor = blockColorList[currentBlockColorIndex % blockColorList.length];
  currentY = 1;
  currentX = 8;
  currentBlockColorIndex = (currentBlockColorIndex + 1) % blockColorList.length;
  drawBlock();
}

function drawBlock() {
  clearBoard();
  currentBlock.forEach(([y, x]) => {
    const cell = document.getElementById(`block${currentY + y}x${currentX + x}`);
    if (cell) cell.style.backgroundColor = currentColor;
  });
}

function clearBoard() {
  const boardTds = document.getElementsByClassName("board-td");
  for (let boardTd of boardTds) {
    boardTd.style.backgroundColor = emptyColor;
  }
}

function moveBlockDown() {
  if (canMoveDown()) {
    currentY++;
    drawBlock();
  } else {
    spawnNewBlock();
  }
}

function canMoveDown() {
  let maxY = Math.max(...currentBlock.map(([y, _]) => y));
  let minX = Math.min(...currentBlock.map(([_, x]) => x));
  let nextCell = document.getElementById(`block${currentY + maxY + 1}x${currentX + minX}`);
  let isEmpty = nextCell && nextCell.style.backgroundColor === emptyColor;
  return isEmpty;
}

function startGame() {
  gameInterval = setInterval(moveBlockDown, 1000);
}

function stopGame() {
  clearInterval(gameInterval);
}
