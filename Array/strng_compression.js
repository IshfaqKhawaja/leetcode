const compression = (chars)=>{
    let char_temp = []
    let count = []
    let top = -1;
    for(let i=0;i<chars.length;i++){
        if(char_temp.indexOf(chars[i]) !== -1){
            if(char_temp[top]===chars[i]){
                count[top]++;

            }
            else{
                console.log(top)
                top++;
                char_temp.push(chars[i])
                count.push(1);
            }
        }
        else{
            // console.log(top)
            top++;
            char_temp.push(chars[i])
            count.push(1)

        }
    }
    console.log(count)
    console.log(char_temp)
    chars.length = 0
    console.log(chars)
    for(let i=0;i<count.length;i++){
        chars.push(char_temp[i])
        if(count[i]>=10){
            while(count[i]>=10){
                chars.push(String(parseInt(count[i]/10)));
                count[i]%=10
            }
            if(count[i]>=0){
                chars.push(String(count[i]))
            }
        }
        else if(count[i]>1){
            chars.push(String(count[i]))
        }
    }
        console.log(chars)
        return chars;



}

compression(["o","o","o","o","o","o","o","o","o","o"])