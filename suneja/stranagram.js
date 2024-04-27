//String Anagram  -> number of elements are same but arrangement are difrent
//hello -> llheo

/* condition
    length check(for both String)


    */



// solution -> 


const chek = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    let map = {};
    for(let letter of str1) {
        map[letter] = (map[letter] || 0) + 1;
    }

    for(let item of str2) {
        if(!map[item]) return false;
        map[item] -= 1;
    }
    return true
}
const ans = chek('hello', 'llheo') // -> output is true


// linear time complexity

