function convert_int_to_roman(num){
    let digits = new Map()
            digits.set("M", 1000)
            digits.set("CM", 900)
            digits.set("D",  500)
            digits.set("CD", 400)
            digits.set("C",  100)
            digits.set("XC",  90)
            digits.set("L",   50)
            digits.set("XL",  40)
            digits.set("XXX", 30)
            digits.set("XX",  20)
            digits.set("X",   10)
            digits.set("IX",   9)
            digits.set("V",    5)
            digits.set("IV",   4)
            digits.set("I",    1)
    
   
    // console.table(digits)
    let res = ""
    for (let [suf, val] of digits.entries()){
        while (num >= val){
            num -= val
            res += suf
        }



    }
    console.log(res)




}


convert_int_to_roman(80)