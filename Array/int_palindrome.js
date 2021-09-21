const int_palindrome = (num)=>{
    if(num < 0){
        return false
    }
    let n = num;
    let p_num = 0;
    let count = 0;
    let num_array = []
    while(n>=1){
        num_array.push(parseInt(n%10))
        count++;
        n = parseInt(n/10)
        // console.log(num_array)
        // console.log(n)

    }
    // console.log(count)
    count--;
    let i = 0;
    while(count>=0){
        p_num += Math.pow(10,count)*num_array[i++]
        count--;
        // console.log(p_num)

    }
    return p_num === num;

}


console.log(int_palindrome(1000000001))