
function convertArrayToSudokuObject(sudokuArray){
  var board = []
  var value = 1
  for (var row = 1; row <= 9; row++){
    for (var col = 1; col <= 9; col++){
      var cell = { row: row, col: col, value: sudokuArray[row-1][col-1]}
      board.push(cell)
    }
  }
  return board
}

function isIncomplete(board){
  var incompleteCells = getCellsWithValue(board, 0)
  return incompleteCells.length > 0

}
//returns a new board
// function setCell(board, )

function incrementCell(board, cell){
  var cellIndex = board.indexOf(cell)
  var newBoard = board.map(function(boardCell){ return boardCell })
  newBoard[cellIndex] = Object.assign({}, cell, { value: ++cell.value })
  return newBoard
}

function removeCellFromBoard(board, cell){
  var newBoard = board.filter(function(boardCell){
    return !(boardCell.row === cell.row && boardCell.col === cell.col)
  })
  return newBoard
}

function createRandomSudoku(){
  var board = []
  var value = 1
  for (var row = 1; row <= 9; row++){
    for (var col = 1; col <= 9; col++){
      if (value === 10) {
        value = 1
      }
      var cell = { row: row, col: col, value: value++}
      board.push(cell)
    }
  }
  return board
}

function getCellValue(board, row, col){

}

function getCellsWithValue(board, value){
  return board.filter(function(cell){
    return cell.value === value
  })
}

module.exports = {
  convertArrayToSudokuObject: convertArrayToSudokuObject,
  createRandomSudoku: createRandomSudoku,
  getCellsWithValue: getCellsWithValue,
  isIncomplete: isIncomplete,
  incrementCell: incrementCell
}
