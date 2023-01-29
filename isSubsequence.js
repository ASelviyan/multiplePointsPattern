//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2){
    //first make the strings that are inputted into arrays of char
    const arr1 = str1.split("")
    const arr2 = str2.split("")

    //then create a home variable that will keep track of the characters in the first string 
    let home = 0

    //creating the second variable (scout) to go through the second string 
    for (let scout = 0; scout < arr2.length; scout++) {
        //if the first strings character is the same as the second strings character then add one to home to move up the home pointer up in the first string so that hte scout pointer can keep moving ahead and checking if the character match up
        if(arr1[home] === arr2[scout]){
            home++
        }
        //if there are no more characters to check in the first string then return true because we found subsequence of the characters in the second string 
        if(arr1.length - 1 === home){
            return true

        }
    }
    //if there weren't any subsequences then return false  
    return false 
}

console.log(isSubsequence('hello', 'hello World'))