// Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted 
//This function is a O(N) time complexity and 0(1) space complexity
//We again use the multiple pointer pattern to solve this problem
function countUniqueValues(array){
    //The first pointer we create is the home which will keep track of unique values in the array
    //The second pointer is the scout which scouts out the unique values that the first pointer (home) keeps track of.
    let home = 0
    //this conditional checks if the array is empty so we don't have to go to the for loop for no reason
    if(array.length === 0){
        return 0
    }

    //iterate though the array
    for (let scout = 1; scout < array.length; scout++) {
        //because the array that is given to us is sorted we just have to go up the array with our scout pointer
        //so the home pointer is telling the scout that the first unique value is -1 and if scout sees that the next index in the array is -1 it ignores it and goes to the next idex
        //but if the next index that the scout finds isn't -1 then the home pointer is move up form when it is and changes it to the new unique number the scout has found  
        if(array[home] !== array[scout]){
            home++
            array[home] = array[scout]
        }  
    }
    //after the for loop is over the we return the home pointer plus one. The home pointer is useful here because it keeps track of the unique values. we add one because the index start at 0 instead of 1
    return home + 1
}

console.log(countUniqueValues([-1, -1, 1, 1, 3, 6, 7]))