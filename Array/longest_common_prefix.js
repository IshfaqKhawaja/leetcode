function longest_common_prefix(array){
    console.log(array)
    const total_strs = array.length
    // console.log(total_strs)
    const str1 = array[0]
    let count = 0;
    let sub_str = ''
     for(let j=0;j<str1.length;j++){
         let flag = 0
          for(let i=1;i<total_strs;i++){
              if(str1[j] !== array[i][j]){
                  flag =1;
                  break
                  
                  }
                   
        }
        if(flag === 0){
            sub_str+=str1[j]
        }
        else{
            break
        }
    }
    console.log(sub_str)
   return sub_str;
}
longest_common_prefix(["flower","flow","f"])