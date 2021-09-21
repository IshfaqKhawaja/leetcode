const rotate_matrix = (matrix)=>{
    for(let i of matrix){
        console.log(i)
    }
    let rows = matrix.length-1;
    let columns = matrix[0].length-1;

    for(let i=0;i<=rows;i++ ){
        let temp = [...matrix[i]];
        for(let j=i;j<=columns-i;j++){
            matrix[i][columns - j] = matrix[j][i]
            
        }
        for(let j=i;j<=columns-i;j++){
            matrix[j][i] = matrix[rows - i][j]
        }
        for(let j=i;j<=columns-i;j++){
           matrix[rows - i][j] = matrix[rows - j][columns - i]
        }
        for(let j=i;j<=columns-i;j++){
           matrix[rows - j][columns - i] = temp[columns - j]
        }
        
    }
    console.log("\n")
    for(let i of matrix){
        console.log(i)
    }

}
const rotate_matrix_opt = (matrix)=>{
    let n = matrix.length -  1;
    for (let i of matrix)
        console.log(i)
    console.log("\n")
    for(let i=0;i<=n;i++){
        for(let j=i;j < n-i;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n-j][i];
            matrix[n-j][i] = matrix[n-i][n-j];
            matrix[n-i][n-j] = matrix[j][n-i];
            matrix[j][n-i] = temp;
        }

        
    }
    for(let i of matrix){
        console.log(i)
    }

}
let matrix =[[ 5, 1, 9, 11 ],
            [ 2, 4, 8, 10 ],
            [ 13, 3, 6, 7 ],
            [ 15, 14, 12, 16 ]] 
// matrix = [[1,2],[3,4]]
// rotate_matrix(matrix)
rotate_matrix_opt(matrix)