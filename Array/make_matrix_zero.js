var setZeroes = function(matrix) {
    for(let i of matrix){
        console.log(i)
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j] === 0){
                matrix[i][j] = '#'
            }
        }
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j] === '#'){
                console.log(i,j)
               for(let ind = 0;ind<matrix[0].length;ind++){
                    if(matrix[i][ind] !== '#'){
                        matrix[i][ind] = 0;
                     }
                }
                for(let ind = 0;ind<matrix.length;ind++){
                    if(matrix[ind][j] !== '#'){
                        matrix[ind][j] = 0;
                    }
             }
             matrix[i][j] = 0;
            }
        }
    }
    
    for(let i of matrix){
        console.log(i)
    }
    
};

function use_first_row(matrix){
    for(let i of matrix){
        console.log(i)
    }
    let firstRowHasZero = false;
    let firstColumnHasZero = false;
    for(let i=0;i<matrix[0].length;i++){
        if(matrix[0][i]===0){
            firstRowHasZero = true;
            break
        }
    }
    for(let i=0;i<matrix.length;i++){
        if(matrix[i][0] === 0){
            firstColumnHasZero = true;
            break
        }
    }
    console.log(firstRowHasZero,firstColumnHasZero)

    for(let i=1;i<matrix.length;i++){
        for(let j=1;j<matrix[0].length;j++){
            if(matrix[i][j] === 0){
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }

    }
    for(let i=1;i<matrix[0].length;i++){
        if(matrix[0][i]===0){
            for(let j=0;j<matrix.length;j++){
                matrix[j][i] = 0
            }
        }
    }
    for(let i=1;i<matrix.length;i++){
        if(matrix[i][0]===0){
            for(let j=0;j<matrix[0].length;j++){
                matrix[i][j] = 0
            }
        }
    }
    if(firstRowHasZero){
        for(let j=0;j<matrix[0].length;j++){
                matrix[0][j] = 0
            }

    }
    if(firstColumnHasZero){
        for(let j=0;j<matrix.length;j++){
                matrix[j][0] = 0
            }

    }
    for(let i of matrix){
        console.log(i)
    }
    return matrix;
}

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
// setZeroes(matrix)
use_first_row(matrix)