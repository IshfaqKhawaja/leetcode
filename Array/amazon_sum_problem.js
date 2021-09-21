const sum = (n)=>{
    const inside =  (total)=>{
        n = n+total
        if(total === 0)
        console.log(n)
        return inside;
    }
    
    return inside
}
let x = sum(0)(1)(2)(3)(4)(10)(0)
console.log(x)
