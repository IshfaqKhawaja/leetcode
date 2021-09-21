const longestSequence  = (nums)=>{
    let num_set = new Set()
    for(let num of nums){
        num_set.add(num);
    }
    let longest  = 0;
    for(let num of num_set){
        if(!num_set.has(num-1)){
            let current = num;
            let count = 0;
            while(num_set.has(current)){
                current = current+1;
                count = count + 1;
            }

            longest = Math.max(longest,count)
        }
    }
    console.log(longest)
    return longest;

}

longestSequence([100,4,200,1,3,2])