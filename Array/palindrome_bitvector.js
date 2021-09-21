const check_palindrome = (s) =>{
    let bitVector = 0
    for(let i of s){
        let mask = 1 << i.charCodeAt(0) - 97
        console.log("mask ",mask)
        if((bitVector & mask) > 0){
            console.log(i,mask)
            console.log(bitVector & mask)
            return false;
        }
        else{
            bitVector |= mask;
        }
    }
    console.log(bitVector)
    return true;


}

console.log(check_palindrome('anana'))