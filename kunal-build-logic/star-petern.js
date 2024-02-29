// how to aproch the problem of star peturn

// let spose this is a quetions of the star peturn

/*   *
     * *
     * * *
     * * * *   */

/* ✅ 1):- firsty we saw the row, how many row's are persent in the peturn
 because number of lines = number of rows = number of times are outer loops will run */


/* ✅ 2):- identify for row number
       * how many columns are there
       * types of elements in columns  */

//✅ 3):- and what doyou need to print

//✅ 4):- try to find the formula acroding to row/column




// ------------------solve the problem--------------------------------


// steps to solve the problem


// the following peturn are contain 4 row and we know about the how many times are outer for loops are run 

// for (let row = 1; row <= 4; row++) {
//     let outer = ""; 
//     for (let col = 1; col <= row; col++) {
//         outer += "* ";
//     }
//     console.log(outer);
// }







// peturn 2 

/*   * * * *
     * * * *
     * * * *
     * * * *   */

// for(let row = 1; row <= 4; row++) {
//     let outer = "";
//     for (let col = 1; col <= 4; col++) {
//         outer += "* "
//     }
//     console.log(outer);
// }








// peturn 3

/*   * * * *
     * * * 
     * * 
     *    */

// for(let row = 1; row <= 4; row++) {
//     let outer = "";
//     for (let col = 1; col <= 4-row+1 ; col++) {                  // the outer loop are run by zero to less than 4 rows then the column formula are 4-row that ist
//         outer += "* "
//     }
//     console.log(outer);
// }