// finde a largest number of elements in the array

let arr = [10,32,53,14,25,60,78,8,19];

// let max = 0;
// const arrfunc = arr => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//         return max;
//     }
// }
// const ans = arrfunc(arr);
// console.log(ans);


const arrfunc = arr => {
    let max = arr[0]; // Initialize max to the first element of the array (we not use 0 insted we use index 0)
    for(let i = 1; i < arr.length; i++){ // Start loop from the second element
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max; // Return the max value after the loop ends
}

const ans = arrfunc(arr);
console.log(ans);