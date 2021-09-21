const bubbleSort = (array)=>{
    let last = array.length-1
    for(let i=0;i<array.length;i++){
        let max = array[0];
        let index = 0;
        for(let j = 0;j<=last;j++){
            if(array[j]>max){
                max = array[j];
                index = j;
            }

        }
        let temp = array[last];
        array[last] = max;
        array[index] = temp
        last--;
    }
    console.log(array)
}

bubbleSort([9,100,3,2,200,8,9,0,-1,7])