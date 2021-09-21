let longestConsecutive = function(nums) {
    let set = new Set();
    for (let num of nums) {
        set.add(num);
    }

    let longestStreak = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    console.log(longestStreak)
    return longestStreak;
};
longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])