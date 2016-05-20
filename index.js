const board = [
  [1,1,3,4,5,6,7,8,9],
  [1,1,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9]]

// console.log(createRandomSudoku())
var sudokuBoard = createRandomSudoku()
// console.log(getBlockGroup(sudokuBoard, 3,3))
checkSudoku(sudokuBoard)

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

function checkSudoku(board){
  var boardCorrect = true
  for (var row = 1; row <= 9; row++){
    if (!checkRow(board, row)){
      boardCorrect = false
    }
  }
  for (var col = 1; col <= 9; col++){
    if (!checkCol(board, col)){
      boardCorrect = false
    }
  }

  console.log('board correct', boardCorrect)
  //check each row has 1 to 9 only once


  //check each column has 1 to 9 only once
  //check each 3 by 3 grid has 1 to 9 only once
}

function checkRow(board, rowIndex){
  var row = getRow(board, rowIndex)
  var possibleValues = {}
  var validRow = true
  row.map(function(cell){
    if (possibleValues[cell.value] === 'exists'){
      validRow = false
    } else {
      possibleValues[cell.value] = 'exists'
    }
  })
  return validRow
}

function checkCol(board, colIndex){
  var col = getCol(board, colIndex)
  var possibleValues = {}
  var validCol = true
  col.map(function(cell){
    if (possibleValues[cell.value] === 'exists'){
      validCol = false
    } else {
      possibleValues[cell.value] = 'exists'
    }
  })
  return validCol
}


function getRow(board, row){
 return board.filter(function(cell){ return cell.row === row })
}

function getCol(board, col){
  return board.filter(function(cell){ return cell.col === col })
}

//three block groups (1, 2, 3)
function getBlockGroup(board, rowGroup, colGroup){
  rowGroup = rowGroup * 3 - 2
  colGroup = colGroup * 3 - 2
  return board.filter(function(cell){
    if (cell.row === rowGroup || cell.row === rowGroup+1 || cell.row === rowGroup + 2){
      if (cell.col === colGroup || cell.col === colGroup+1 || cell.col === colGroup+ 2){
        return true
      }
    }
    return false
  })
}
