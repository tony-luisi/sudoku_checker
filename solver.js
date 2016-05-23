var checker = require('./checker')
var sudoku = require('./sudoku')

function solveSudoku(board){
  return sudokuBruteForce(board)


}

function sudokuBruteForce(board) {
  var emptyCells = sudoku.getCellsWithValue(board, 0)
  console.log(emptyCells)
}


//if the board is not complete then
  //if the board is still valid
    //get the next empty cell
    //increment the cell by one
    //call the function again with the new cell added
    //if its not valid
      //increment by one
      //call the function again the with new cell added

  //if it's not valid
    //go back one

//el


function sudokuRecursive(board, incompleteCells){
  var currentCell = incompleteCells.pop()

  console.log('current cell', currentCell)

}

// function sudokuRecursive(board, currentCell, incompleteCells){
//   if (!sudoku.isIncomplete(board)) {
//     console.log('board is complete')
//     if (checker.checkSudoku(board)){
//       console.log('board is complete and valid')
//       return board
//     } else {
//       console.log('board is complete but not valid')
//     }
//   } else {
//     console.log('board is not complete')
//
//     if (checker.checkSudoku(board)){
//       console.log('board is not complete but still valid')
//
//       console.log('incrementing cell', currentCell)
//
//       var newBoard = sudoku.incrementCell(board, currentCell)
//       // console.log('new board', newBoard)
//       return solveSudoku(newBoard)
//       console.log('returned lets check')
//       // currentCell.value++
//       //start at the first incomplete cell
//       //increment the first incomplete cell
//       //check if the board is still valid
//       //if it is go to the next cell
//     } else {
//       console.log('board is not complete and not valid')
//       console.log(board)
//     }
//
//   }
// }





module.exports = {
  solveSudoku: solveSudoku
}
