const check_unique = (s)=>{
    for(let i  = 0;i<s.length;i++){
        // if(s.slice(0,i).indexOf(s[i]) === -1){
        //     unique.push(s[i]);
        // }
        for(let j= 0 ;j<i;j++){
            if(s[j] === s[i]){
                console.log("FALSE")
            }
            else{
                console.log(s[j])
            }
            
        }
       
    }
}

check_unique("check")