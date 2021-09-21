const add = (num1,num2)=>{
    num1 = convert_to_bin(num1)
    num2 = convert_to_bin(num2)
    console.log(num1,num2)
    let n = Math.max(num1.length,num2.length)
    for(let i = num1.length;i<=n;i++){
        num1.push(0)
    }
    for(let i = num2.length;i<=n;i++){
        num2.push(0)
    }
    console.log(num1,num2)
    let carry = 0
    let res = []
    for(let i = 0;i<num1.length;i++){
        res.push(num1[i] ^ num2[i] ^ carry)
        console.log(res)
        carry = num1[i] && num2[i] || num1[i] && carry || num2[i] && carry
        
        console.log(carry)

    }
    res = res.reverse()
    
    console.log(res)
}

function convert_to_bin(num){
    let output = []
    while (num>0){
        output.push(num%2)
        num  = parseInt(num / 2)

    }
    return output
}

add(4,15)