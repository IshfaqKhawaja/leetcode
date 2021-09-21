const check_permutation = (s1,s2)=>{
    console.log(s1,s2);
    if(s1.length !== s2.length){
        return false;
    }
    let char_set = new Map();
    for(let i of s1){
        if(char_set.has(i)){
            let count = char_set.get(i)
            char_set.set(i,count+1)
        }
        else{

            char_set.set(i,1)
        }
    }
    console.table(char_set)
    for(let i of s2){
        if(char_set.has(i)){
            let count = char_set.get(i)
            char_set.set(i,count-1)
        }
        else{

        return false;        }
    }
    console.table(char_set)
    for(let i of char_set.values()){
        console.log(i)
        if(i!==0){
            return false;
        }
    }
    return true;
}

console.log(check_permutation("abcaa","abcaa"))