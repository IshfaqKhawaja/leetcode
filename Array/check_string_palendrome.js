const check =(s)=>{
    s = s.toLowerCase().split(' ').join('')
    console.log(s)
    let char_map = new Map();
    for(let letter of s){
        if(char_map.has(letter)){
            let count = char_map.get(letter)
            char_map.set(letter,count + 1)
        }
        else{
            char_map.set(letter,1)
        }
    }
    console.table(char_map)
    let flag = 0;
    for(let value of char_map.values()){
        if(value % 2 !== 0 ){
            if(flag){
                return false;
            }
            else{
                flag++;
            }
        }
    }
    if(flag > 1){
        return false;
    }
   return true;
}

console.log(check("tactcaopa"))