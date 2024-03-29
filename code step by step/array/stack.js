
// ---------------------------------------------------------------- push opration


let arr = [];
let currentValue = arr.length; // array ki length 0 he to currentValue ki value bhi 0 ho jayegi jis se ham niche function me val ko 0 index par assign kar sake, ynha par array ki length 0 is ka matlab ham currentValue ko niche function me ham update kar sakte hen........
const max = 4;

const poosh = val => {
    if(currentValue >= max){
        console.log("stack is overFlow",val);
    }
        arr[currentValue] = val;
    currentValue++;  // agar ham is line ko nhi likhenge to jab bhi ham arr[currentValue] me jo bhi value denge to to vo ek hi index par jaker store hogi just like arr[0] = 2, arr[0] = 23, to 23 us 2 ko overright kar dega iski vajah se array ki length nhi badegi. 
}
poosh(24)
poosh(2)
poosh(40)
poosh(24)
poosh(4)
poosh(26)

// ---------------------------------------------------------------- pop opration


const poop = val => {
    if(currentValue > 0){
        currentValue--;
        arr.length = currentValue;
    }
}
poop()
poop()
poop()
console.log(arr);
console.log(arr.length);

