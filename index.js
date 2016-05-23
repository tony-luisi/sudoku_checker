var checker = require('./checker')
var sudoku = require('./sudoku')
var solver = require('./solver')

const board = [
  [1,2,3,4,5,6,7,8,9],
  [4,5,6,7,8,9,1,2,3],
  [7,8,9,1,2,3,4,5,6],
  [2,3,4,5,6,7,8,9,1],
  [5,6,7,8,9,1,2,3,4],
  [8,9,1,2,3,4,5,6,7],
  [3,4,5,6,7,8,9,1,2],
  [6,7,8,9,1,2,3,4,5],
  [9,1,2,3,4,5,6,7,8]]


  const incompleteBoard = [
    [0,1,3,4,5,6,7,8,9],
    [4,5,6,7,8,9,1,2,3],
    [7,8,9,1,2,3,4,5,6],
    [2,3,4,5,6,7,8,9,1],
    [5,6,7,8,9,1,2,3,4],
    [8,9,1,2,3,4,5,6,7],
    [3,4,5,6,7,8,9,1,2],
    [6,7,8,9,1,2,3,4,5],
    [9,1,2,3,4,5,6,7,8]]

var sudokuBoard = sudoku.convertArrayToSudokuObject(board)
var sudokuBoardIncomplete = sudoku.convertArrayToSudokuObject(incompleteBoard)
console.log(checker.checkSudoku(sudokuBoard))
console.log(sudoku.getCellsWithValue(sudokuBoard, 0))
console.log(sudoku.isIncomplete(sudokuBoard))
console.log(solver.solveSudoku(sudokuBoardIncomplete))
