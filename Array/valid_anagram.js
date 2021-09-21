const validAnagram = (s,t)=>{
    s = [...s].sort().join('')
    t = [...t].sort().join('')
    for(let i = 0;i<s.length;i++){
        if(s[i]!==t[i]){
            return false
        }
    }
    if(s.length === t.length){
        return true;
    }
    else{
        return false;
    }
}

console.log(validAnagram("rat","cat"))