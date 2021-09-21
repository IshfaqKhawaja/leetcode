const findSubstring = (s,words)=>{
    // console.log(s)
   let window = words.length * words[0].length;
//    console.log(window)
   let indices = []
   for(let i =0;i<s.length - words.length +1 ;i++){
       let array = s.slice(i,window+i)
    //    console.log(array)
       let flag = 0;
       let temp_words = [...words]
       for(let j=0;j<window;j+=words[0].length){
           let str = array.slice(j,j+words[0].length)
        //    console.log(str)
            if(temp_words.indexOf(str) !== -1){
                temp_words.splice(temp_words.indexOf(str),1)
                flag += 1;
                
            }
            else{
                break
            }
           
       }
       if(flag === words.length){
        indices.push(i)
       }
       
   }
//    console.log(indices)
return indices
}

findSubstring("barfoothefoobarman",["foo","bar"])
