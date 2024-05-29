// finde a largest number of elements in the array

let arr = [1,2,3,4,5,60,7,8,9];

let max = 0;
const arrfunc = arr => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        return max;
    }
}
const ans = arrfunc(arr);
console.log(ans);