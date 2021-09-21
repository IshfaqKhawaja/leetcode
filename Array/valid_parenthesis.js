const valid =(str)=>{
    str = [...str]
    // console.log(str)
    let array = []
    let top = -1
    const char = new Map();
    char.set(')','(');
    char.set('}','{');
    char.set(']','[');

    for(let i of str){
        // console.log(i)
        if(i === "(" || i=== "{" || i=="["){
            array.push(i)
            top++;
            // console.log(array)
        }
        else{
            // console.log(top)
            if(array[top] !== char.get(i)){

                return false
            }
            else{
                array.pop()
                top--;
            }
        }
       


    }
    if(array.length === 0)
    {
        return true;
    }
    else{
        return false;
    }

}


console.log(valid("]"))