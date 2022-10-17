


var twoSum = function(nums, target) {
    const result = {}

    nums.forEach((num, index) => {
        result[num] = index
    });

    console.log(result);


    for(let i=0; i<=nums.length; i++){
        let complement = target - nums[i]


        if (result[complement] !== undefined && result[complement] !== i) {
            return [i, result[complement]]
        }
    }

};




 console.log(twoSum([5,7,9,10], 19))