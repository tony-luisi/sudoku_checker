const board = [
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9]]

// console.log(createRandomSudoku())
var sudokuBoard = createRandomSudoku()
console.log(getBlockGroup(sudokuBoard, 4,4))

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
  //check each row has 1 to 9 only once
  

  //check each column has 1 to 9 only once
  //check each 3 by 3 grid has 1 to 9 only once
}


function getRow(board, row){
 return board.filter(function(cell){ return cell.row === row })
}

function getColumn(board, col){
  return board.filter(function(cell){ return cell.col === col })
}

function getBlockGroup(board, rowGroup, colGroup){

  return board.filter(function(cell){
    if (cell.row === rowGroup || cell.row === rowGroup+1 || cell.row === rowGroup + 2){
      if (cell.col === colGroup || cell.col === colGroup+1 || cell.col === colGroup+ 2){
        return true
      }
    }
    return false
  })
}
