var removeDuplicates = function(nums) {
    let mySet=new Set();
    for(let i=0;i<=nums.length;i++){
        mySet.add(nums[i]);
        }
    nums=mySet;
    return mySet;
};
console.log(removeDuplicates([1,1,2]));
