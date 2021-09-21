const findAllAnagrams = (s,p)=>{
    let window = p.length;
    p = [...p].sort().join('')
    let indices = []
    for(let i = 0;i<s.length;i++){
        let str = s.slice(i,window+i);
        str = [...str].sort().join('');
        let count = 0
        for(let j = 0;j<window;j++){
            if(str[j]!==p[j]){
                break
            }
            else{
                count++;
            }

        }
        if(count===window){
            indices.push(i)
        }
    }
    console.log(indices)
    return indices;
}

findAllAnagrams( "baab" ,"ab")