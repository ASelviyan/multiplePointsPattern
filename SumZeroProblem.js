// - Write a function called sumZero which accepts sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero OR undefined if a pair does not exist 
// - We know that the array that is given to us is sorted    
       
       //Naive Solution 
        //This function is O(n^2) time complexity and 0(1) space complexity (imagine if you had an array that had a thousand items in it this function would take forever)
function sumZero(array){
    //In this solution we are taking an array and iterating through it and then iterating through it again to see if it matches the conditional
    //So the array picks the first index which is 1 and then iterated through the array again see if it takes the other numbers and substrates the 1 with the rest of array it'll get a 0.
    //if it does then it will return the two numbers that passed the conditional 
    for(let i = 0; i < array.length; i++){
        for (let j = i+1; j < array.length; j++) {
           if(array[i] + array[j] === 0){
            return [array[i], array[j]]
           }
            
        }
    }
}

// console.log(sumZero([-4,-3,-1,0,1,5])) //output [-1,1]



        //Multiple Pointers Pattern Solution 
        //This function is a O(N) time complexity and 0(1) space complexity, which is much better time complexity then the previous solution 
function sumZeroMPP(arr){
    //first we create to pointers a left and a right 
    //the left pointer will be in the beginning of the array
    let left = 0;
    //the left pointer will be at the end of the array 
    let right = arr.length - 1;
    //this while loop will check that the the two pointers don't cross over
    while(left < right){
        //in the while loop we will make a sum variable that subtracts the two pointers 
        let sum = arr[left] + arr[right];
        //if the sum results to 0 then it returns the two pointers that make that happen 
        if(sum === 0){
            return [arr[left], arr[right]]
        //if sum is a negative number then it will make the right pointer move one to the right in the array 
        
        }else if(sum > 0){
            right--;
        //if the sum is a positive number then it will make the left pointer move one to the left in the array 
        }else{
            left++
        }
    }

}
//So the the pointers are going to start at left = -4 and right 5
//then its going to subtract the two pointers. The result is going to be 1 so its going through the conditionals and see thats the sum isn't a 0 or that its not a negative number so its going to go to the last conditional and move the left pointer one to the left
//its going to redo all of those steps again with left = 4 and right = -4 but this time it will do the first conditional when the sum equals 0. Returning the two pointers that equaled 0 
console.log(sumZeroMPP([-4,-3,-1,0,4,5])) //output [-4,4]
