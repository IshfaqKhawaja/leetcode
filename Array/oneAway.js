const oneAway =(s1,s2)=>{
    if(s1.length === s2.length){
        console.log(oneEditAway(s1,s2))
    }
    else if(s1.length+1 === s2.length){
        console.log(oneInsertAway(s1,s2))
    }
    else if(s1.length === s2.length+1){
        console.log(oneInsertAway(s2,s1))


    }
    else{
        console.log("Sorry")
    }
}
function oneInsertAway(s1,s2){
    let index1 = 0, index2 = 0
    while(index1<s1.length && index2<s2.length){
        if(s1[index1] !== s2[index2]){
            if(index1 !== index2){
                return false
            }
            else{
                index2++;
            }
        }
        else{
            index1++;
            index2++;
        }
    }
    return true



}
function oneEditAway(s1,s2){
    let found = false;
    for(let i=0;i<s1.length;i++){
        if(s1[i] !== s2[i]){
            if(found)
                return false
            else    
                found = true
        }
    }
    return true
}



oneAway('pale','ale')