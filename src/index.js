module.exports = function solveSudoku(matrix, x = 0, y = 0) {    
    if (y === 9) {
        x++;
        y = 0;
    }
    if (x === 9) {
        return true;
    }

    if (matrix[x][y] != 0) {   
        if (solveSudoku(matrix, x, y + 1)) {
            if (x === 0 && y === 0) {
                return matrix;
            } else {
                return true;
            }
        }
        return;
    }
    
    for (let k = 1; k <= 9; k++) {
        let check = false;

        for (let z = 0; z < 9; z++) if (matrix[z][y] === k || matrix[x][z] === k) {
            check = true;
            break;
        }        

        for (let i = Math.trunc(x / 3) * 3; i < Math.trunc(x / 3 + 1) * 3; i++) {
            for (let j = Math.trunc(y / 3) * 3; j < Math.trunc(y / 3 + 1) * 3; j++) {
                if (matrix[i][j] === k) {
                    check = true;
                    break;
                }
            }
            if (check) break;
        }

        if (!check) {
            matrix[x][y] = k;
            if (solveSudoku(matrix, x, y + 1)) {
                if (x === 0 && y === 0) {
                    return matrix;
                } else {
                    return true;
                }
            }
            matrix[x][y] = 0;
        }   
    }    
};

// const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const initial = [
//     [6, 5, 0, 7, 3, 0, 0, 8, 0],
//     [0, 0, 0, 4, 8, 0, 5, 3, 0],
//     [8, 4, 0, 9, 2, 5, 0, 0, 0],
//     [0, 9, 0, 8, 0, 0, 0, 0, 0],
//     [5, 3, 0, 2, 0, 9, 6, 0, 0],
//     [0, 0, 6, 0, 0, 0, 8, 0, 0],
//     [0, 0, 9, 0, 0, 0, 0, 0, 6],
//     [0, 0, 7, 0, 0, 0, 0, 5, 0],
//     [1, 6, 5, 3, 9, 0, 4, 7, 0]
//   ];

// function isSolved(initial, sudoku) {
//     for (let i = 0; i < 9; i++) {        
//         let [r,c] = [Math.floor(i/3)*3,(i%3)*3];
//         if (
//         (sudoku[i].reduce((s,v)=>(s.delete(v), s), new Set(DIGITS)).size != 0) ||
//         (sudoku.reduce((s,v)=>(s.delete(v[i]), s), new Set(DIGITS)).size != 0) ||
//         (sudoku.slice(r,r+3).reduce((s,v)=>v.slice(c,c+3).reduce((s,v)=>(s.delete(v), s), s), new Set(DIGITS)).size != 0)
//         ) return false;
//     }

//     return initial.every((row, rowIndex) => {
//         return row.every((num, colIndex) => {
//             return num === 0 || sudoku[rowIndex][colIndex] === num;
//         });
//     });
// } 


// const copy = initial.map(r => [...r]);
// console.log(isSolved(initial, solveSudoku(copy)));
// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//         process.stdout.write(copy[i][j] + " ");
//         if ((j + 1) % 3 === 0) process.stdout.write(" ");       
//     }
//     console.log();
//     if ((i + 1) % 3 === 0) console.log();
// }