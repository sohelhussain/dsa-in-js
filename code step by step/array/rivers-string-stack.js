const arr = [];
let currentSize = arr.length;

const poosh = val => {
    arr[currentSize] = val;
    currentSize++;
}
const poop = val => {
    lastRemvodeItem = arr[currentSize - 1]; // yanha -1 isliye kiya kyoki array ki full lenght hoti he to isse karna jaruri tha
    currentSize--;
    arr.length = currentSize
    return lastRemvodeItem
};

let str = 'sohel';
str = str.split('');  // ise string ko array ko me convert  

const riversStr = item => {
    for(let estr of item) {
        poosh(estr)
    }
    for(let i = 0; i < str.length; i++) { // yanha par for of loop nhi kaam kar rha he
        item[i] = poop()
    }
}
riversStr(str);

console.log(str.join(''));