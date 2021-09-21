const compression = (chars)=>{
    let prev;
    let count;
    let top = -1;
    
    for(let i=0;i<=chars.length;i++){
        // console.log(chars[i],top,count)
        if(prev === chars[i]){
            count++;

        }
        else{
            if(count > 1){
                chars[top] = prev;
               if(count>=10){
                while(count >= 10){
                    top++;
                    chars[top] = String(parseInt(count/10))
                    count = count%10;
                }
                if(count>=0){
                    top++
                    chars[top] = String(count)

                }
             }
            else{
                top++;
                chars[top] = String(count)
            }

            }
                prev = chars[i]
                count = 1;
                top++;
                chars[top] = prev;
                // console.log(chars,"top",top)
           
        }
    }
    // console.log(chars,top,chars.length)
    // chars.splice(top)
    console.log(chars)
    return chars.length
}

compression(["a","b","b","b","b","b","b","b","b","b","b","b","b"])