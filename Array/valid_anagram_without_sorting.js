const validAnagram = (s,t)=>{
    let alphabetMap = new Map();
    for(let i=0;i<s.length;i++){
        if(alphabetMap.has(s[i])){
            let count = alphabetMap.get(s[i])
            alphabetMap.set(s[i],count+1)
        }
        else{
            alphabetMap.set(s[i],1)
        }
    }
    for(let i=0;i<t.length;i++){
         if(alphabetMap.has(t[i])){
            
            let count = alphabetMap.get(t[i])
            alphabetMap.set(t[i],count-1)
        }
        else{
            return false
        }
    }
    for(let value of alphabetMap.values()){
        if(value !== 0)
             return false
    }
    console.log(alphabetMap,"Sum",sum)
    return true;
}


validAnagram("aacc","ccac")