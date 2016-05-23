var sudoku = require('./sudoku')

function checkSudoku(board){
  var boardCorrect = true

  //check if the board is complete
  // var emptyCells = sudoku.getCellsWithValue(board, 0)
  // if (emptyCells.length > 0){
  //   console.log('board is incomplete')
  //   return false
  // }

  for (var cell = 1; cell <= 9; cell++){
    if (!checkRow(board, cell)){
      console.log('row', cell, 'incorrect')
      boardCorrect = false
    }
    if (!checkCol(board, cell)){
      console.log('col', cell, 'incorrect')
      boardCorrect = false
    }
  }

  for (var rowBlock = 1; rowBlock <= 3; rowBlock++){
    for (var colBlock = 1; colBlock <= 3; colBlock++){
      if (!checkBlock(board, rowBlock, colBlock)){
        console.log('not valid')
        boardCorrect = false
      }
    }
  }
  console.log('board correct', boardCorrect)
  return boardCorrect
}

function checkBlock(board, rowIndex, colIndex){
  return checkValid(getBlockGroup(board, rowIndex, colIndex))
}

function checkRow(board, rowIndex){
  return checkValid(getRow(board, rowIndex))
}

function checkValid(cells){
  var valid = true
  var possibleValues = {}
  cells.map(function(cell){
    if (cell.value === 0){
      return
    }
    if (possibleValues[cell.value] === 'exists'){
      valid = false
    } else {
      possibleValues[cell.value] = 'exists'
    }
  })
  return valid
}

function checkCol(board, colIndex){
  return checkValid(getCol(board, colIndex))
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

module.exports = {
  checkSudoku: checkSudoku
}
