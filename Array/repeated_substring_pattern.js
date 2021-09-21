const repeated_substring_pattern = (s)=>{
    let len = s.length;
    for(let window = 0; window<len;window++){
        if(len % window  !== 0  ){
            continue;
        }
        else{
            let temp_array = s.slice(0,window);
            console.log(temp_array)
            temp_array = temp_array.repeat(parseInt(len/window))
            console.log(temp_array)
            if(s.indexOf(temp_array) !== -1){
                console.log(temp_array)
                return true;

            }
        }
        console.log("\n")
    }
    console.log("False")
    return false;

}

repeated_substring_pattern("abcabcabcabc")