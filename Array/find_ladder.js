const findLadder = (beginWord,endWord,wordLadder)=>{
    // console.log(beginWord,endWord,wordLadder)
    let outputLadder = []
    outputLadder.push(beginWord)
    if(wordLadder.indexOf(endWord) === -1){
        console.log("Helloe")
        return 0;
    }
    while(true){
        let flag = 0;
        // console.log("Begin",beginWord)
        for(let j = 0;j<wordLadder.length;j++){
            if(findDifference(beginWord,wordLadder[j])){
                beginWord = wordLadder[j];
                outputLadder.push(wordLadder[j])
                let newLadder = wordLadder.filter((word)=>word.indexOf(wordLadder[j]) === -1)
                wordLadder  = [...newLadder];
                // console.log("Changed",beginWord)
                // console.log(newLadder);
                // console.log(wordLadder);
                flag++;
                // console.log("\n")
            }
        
        }
        if(outputLadder[outputLadder.length-1].indexOf(endWord) !== -1){
            break;
        }
        if(flag === 0){
            if(wordLadder.length === 0){
                outputLadder = []

            }
            // console.log(outputLadder)
            // console.log("flag",flag)
            break;
        }
        // console.log("\n\n")

    }
    console.log("output Ladder",outputLadder)
    return outputLadder.length;
    
}

function findDifference(s1,s2){
    let place = 0;
    for(let i=0;i<s1.length;i++){
        if(s1[i]!==s2[i]){
            place++;
        }
    }
    if(place <= 1){
        return true
    }
    else{
        return false;
    }
}
// console.log(findDifference('hit','dot'))
findLadder("hit","cog",["hot","dot","dog","lot","cog"])