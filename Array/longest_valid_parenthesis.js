const longestValidParenthesis  = (s)=>{
   let stack = []
   let index_stack = []
   stack.push('|')
   index_stack.push(-1)
   let max = 0
   for(let i=0;i<s.length;i++){
       if(s[i]==="("){
           stack.push(s[i]);
           index_stack.push(i)
       }
       else {
           if(stack.length !== 0 && stack[stack.length -1 ]==="("){
                // console.log(stack)
                // console.log(index_stack)
                stack.pop();
                index_stack.pop()
                // console.log(stack)
                // console.log(index_stack)
                max = Math.max(max,i-index_stack[index_stack.length - 1])
                
            }
            else{
                index_stack.push(i);
            }
    }
   }
   console.log(max)
   return max
}

longestValidParenthesis(")()())")