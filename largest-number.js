
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

// smalest number


function samllestElement(smallers){
    let small = 0;
    for (let i=0; i < smallers.length; i++){
        let elements = smallers[i]
        if(elements < small){
            small = elements

        }
    }
    return small

}

let age = [26,36,46,56,89,78,140,100,20];
let small = largestElement(age);
console.log('Young Member is', small)

