// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair(array, target){
    //edge case 
    if(array.length === 0) return false 
    
    //first I create two variable a left and right. the left starts in the bigging of the array and the right start at the end. 
    let left = 0
    let right = array.length - 1
    //while left doesn't pass right with will loop 
    while(left < right){
        //here it will calculate the average. it will take the left and right points and add them together and then divide by two
        let average = (array[left] + array[right]) / 2

        //if the average is same as the target number then it returns true
        if(average === target){
            return true
        //if the average is bigger then the target value then move the right pointer down 
        }else if(average > target){
            right--
        //if the average is smaller then the target value then move the left pointer up
        }else{
            left++
        }
       
    }
    //if there are no two values that average out to the target number then return false
    return false 
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],6))