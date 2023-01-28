// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
function areThereDuplicates(...args) {
    //before we start checking if there are duplicates we have to sort the array
    //i made a conditional that checks if the arguments that are inputted are numbers or strings because sorting strings is different to sorting numbers 
    //then i sort them with the sort() method
        if(typeof(args[0]) === Number){
            args.sort(function(a, b){return a - b});
        }else{
            args.sort()
        }

    //The first pointer we create is the home which will keep track of unique values in the array
    //The second pointer is the scout which scouts out the none unique values 
    let home = 0

    for (let scout = 1; scout < args.length; scout++) {
      //because we sorted the arguments that was given to us we can just keep tracking up the array of arguments and checking if there are any duplicates
           //this conditional checks if the two pointers have the same value 
           if(args[home] === args[scout]){
            return true
           //if not it moves up the home pointer up
           }else{
            home++
           } 
    }
    //if it doesn't find duplicates it return false 
    return false
  }

  //An easier way to do this problem is the One Liner Solution
  function areThereDuplicatesLinear() {
    //this code uses the Set method that takes an array and creates a new array with only unique values. So it basically removes duplicates
    //then this code compares the length of the new array that was created with the Set method and the array that was given to us
    //if the both arrays length is the same then there isn't any duplicates and it returns false but if there is duplicates so the two arrays length aren't the same so it returns true
    return new Set(arguments).size !== arguments.length;
  }

  console.log(areThereDuplicatesLinear(1,2,4,3,3) )// true )