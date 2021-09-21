const check = (s)=>{
    let stack = [];
    let index = []
    let top = -1;
    index.push(-1)
    stack.push('|')
    let max = 0;
    for(let i=0;i<s.length;i++){

        if(s[i]==="("){ 
            stack.push(s[i])
            index.push(i)

        }
        else{
            if(stack.length !== 0 && stack[stack.length-1] === "("){
                    stack.pop()
                    index.pop()

                    max = Math.max(max,i-index[index.length-1])

            }
            else{
                stack.push(s[i]);
                index.push(i);
            }
            
        }

    }
    console.log(max)
   
}

check(")()((()()))")