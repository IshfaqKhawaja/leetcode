function detect_capital (word){
    let flag = 0
    let i = 0;

    if(word.charCodeAt(0) >= 65 && word.charCodeAt(0) < 95){
        if(word.charCodeAt(1) >=65 && word.charCodeAt(1) <95){
            for(let i = 1;i<word.length;i++){
                if(word.charCodeAt(i)>=95){
                    return false;
                }
        }
        }
        else{

            for(let i = 1;i<word.length;i++){
                if(word.charCodeAt(i)<95){
                    return false;
                }
            }
        }
    }
   
    else{

    for(let i = 1;i<word.length;i++){
        if(word.charCodeAt(i) < 95){
                return false;
            }
        }
    }
    return true
    
    


}
    



console.log(detect_capital("Lee"))