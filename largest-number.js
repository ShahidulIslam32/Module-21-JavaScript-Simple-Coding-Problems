
function largestElement(numbers){
    let largest = 0;
    for (let i=0; i < numbers.length; i++){
        let elements = numbers[i]
        if(elements > largest){
            largest = elements

        }
    }
    return largest

}

let ages = [26,36,46,56,89,78,140,100,20];
let oldest = largestElement(ages);
console.log('oldest Member is', oldest)