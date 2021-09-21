function group_anangram(ary){
    let word_map = new Map();
    for(let word of ary){
        let sorted_word = [...word].sort()
        sorted_word = sorted_word.join('')
        console.log(word,sorted_word)
        if(word_map.has(sorted_word)){
            let temp_array = word_map.get(sorted_word)
            console.log(temp_array)
            temp_array.push(word)
            word_map.set(sorted_word,temp_array)
        }
        else{
            word_map.set(sorted_word,[word])


        }
    }
    let temp_array = []
    let length_array = []
    let count = 0
    for(let value of word_map.values()){
        value = value.sort()
        length_array.push([value.length,count++])
        temp_array.push(value)

    }
    length_array.sort((a,b)=>a[0]>b[0])
    let new_temp = []
    for(let i of length_array){
        new_temp.push(temp_array[i[1]])
        
    }
    console.log(new_temp)
    temp_array.sort((a,b)=>a.length > b.length)
    console.log(temp_array)
    return temp_array;
}

// function sort_word(word){
//     ascii_codes = []
//     for(let i of word){
//         ascii_codes.push(i.charCodeAt(0))
//     }
//     console.log(ascii_codes)
// }
// sort_word('tea')
group_anangram( ["eat","tea","tan","ate","nat","bat"]);