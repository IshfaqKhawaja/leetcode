function find_needle_in_haystack(haystack,needle,first = true){
    // console.log(haystack)
    // console.log(needle)
    if(haystack === "" || needle === "")
        return 0;
    let needle_len = needle.length
    for(let i=0;i<haystack.length-needle_len+1;i++){
        let temp_str = haystack[i]
        for(let j = 1;j<needle_len;j++){
            temp_str += haystack[i+j]
            
            
        }
        // console.log(temp_str)
        if(temp_str === needle  && first === true){
            return i;
        }
        
        
    }
    return -1;
    
}
console.log(find_needle_in_haystack("",""))