/**
 * Created by stu on 1/5/18.
 */
/* You have an array of integers, and for each index you want to find the
product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of
integers and returns an array of the products.

For example, given:

[1, 7, 3, 4]

your function would return:

[84, 12, 28, 21]

by calculating:

    [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Division is not allowed in solution
    */

//[84, 12, 28, 21]

//For each index in the array (outer loop) set that index to 1
// and multiply it by every index in the array (inner loop)
// when inner loop reaches the original value index of outer loop index,
// set inner value to 1 so product doesn't increase.
function getProductsOfAllIntsExceptAtIndex(array){
    var result = [],
        originalOuterValue;
    array.forEach(function(outerValue){
        originalOuterValue = outerValue;//keep track of outer value
        outerValue = 1;//set to one so product doesn't increase
        array.forEach(function(innerValue){
            if(innerValue === originalOuterValue){
                innerValue = 1; //set to one so product doesn't increase
            }
            outerValue *= innerValue;//multiply
        });
        result.push(outerValue);

    });
    return result;
}

getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]);