// quetion is checking sum zero
// [-5,-4,-3,-2,0,2,4,6,8] ---> input


/* const arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

let found = false; // Flag variable to track if the condition is met

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
            console.log(arr[i], arr[j], "done");
            found = true; // Set flag to true if condition is met
            break; // Exit the inner loop
        }
    }
    if (found) { // Check flag after inner loop
        break; // Exit the outer loop if flag is true
    }
} */

// -------> the time complexity is quadratic o(n^2);




// ----------------------------------------------------------------> optimiz solutions



const arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];



const optimizer = arr => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0) {
            right--
        }else{
            left++;
        }
    }
}
let ans = optimizer(arr);
console.log(ans);

