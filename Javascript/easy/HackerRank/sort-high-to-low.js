// Problem: Sort the array from high to low

/* The bubble sort is very slow, but it was the 
only solution that came to my mind... besides using .sort().reverse() lol
The bubble sort will push the highest value to the end so 
I did a small modification to make it work in reverse. */

const array = [5,8,2,9,3,10];
function highToLow(unsortedArray) {

    for(let i = 0; i < unsortedArray.length; i++){
        for(let j = i+1; j < unsortedArray.length; j++){
            if(unsortedArray[j] > unsortedArray[i]){

/*                 let lesser = unsortedArray[i];
                unsortedArray[i] = unsortedArray[j];
                unsortedArray[j] = lesser;  */

                //This is a more clean way to reassing the values
                // using ES6 ... me quiero ver chingon
                [unsortedArray[i], unsortedArray[j]] = [unsortedArray[j], unsortedArray[i]];
            }
        }
    }
}

highToLow(array);

console.log(array);