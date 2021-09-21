const letter_comb = (digits) => {
    let digit_array = [...digits]
    let digits_len = digit_array.length
    let alphabets = new Map()
    alphabets.set('2',['a','b','c']);
    alphabets.set('3',['d','e','f']);
    alphabets.set('4',['g','h','i']);
    alphabets.set('5',['j','k','l']);
    alphabets.set('6',['m','n','o']);
    alphabets.set('7',['p','q','r','s']);
    alphabets.set('8',['t','u','v']);
    alphabets.set('9',['w','x','y','z']);
    // console.table(alphabets)
    // console.log(digit_array)
    // console.log(digits_len)
    if(digits_len === 0)
        return [];
    let str = alphabets.get(digit_array[0]);
    // console.log(str,digits_len)
    for(let digit = 1;digit<digits_len;digit++){
           let temp_str = []
            for(let i of str){
                for(let j of alphabets.get(digit_array[digit])){
                    temp_str.push(i+j)
                    // console.log(temp_str)
                }
            
            }
            str = temp_str
            
        
    }
    console.log(str)
    return str;


}

letter_comb("999")