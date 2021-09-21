const oneAway = (s1,s2)=>{
    let found = false;
    let first = s1.length < s2.length?s1:s2;
    let second = s1.length < s2.length?s2:s1;
    console.log(first,second)
    let index1 = 0,index2 = 0;
    while(index1<first.length && index2<second.length){
        if(first[index1] !== second[index2]){
            if(found) return false;
            else found = true;
            if(first.length === second.length){
                index1++;
            }
            

        }
        else{
            index1++;
        }
        index2++;
    }
    return true;
}


console.log(oneAway('alee','pale'))