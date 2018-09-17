function split(wholeArray){
    const firstHalf =[];
    const secondHalf =[];
    const halfLength = wholeArray.length/2;
    const finalArray= [];

    for (let i=0; i<halfLength; i++){
        firstHalf.push(wholeArray[i]);
    }
    finalArray.push(firstHalf);

    for (let j=halfLength; j<wholeArray.length; j++){
        secondHalf.push(wholeArray[j]);
    }
    finalArray.push(secondHalf);

    return finalArray;
}

// function merge(array1, array2) {
//     let mergedArray = [];
//     // console.log(array1[0]);
//     //  let indexFirst = 0;
//     //  let indexSecond = 0;
//     if (indexFirst === array1.length-1 || indexSecond === array2.length -1){
//         return mergedArray;
//     } else if (array1[indexFirst] < array2[indexSecond]) {
//         mergedArray.push(array1[indexFirst]);
//         indexFirst++;
//         merge(array1, array2);
//     } else {
//         mergedArray.push(array2[indexSecond]);
//         indexSecond++;
//         merge(array1, array2);
//     }
// }


// function merge(array1, array2, mergedArray = []) {
//     // let mergedArray = [];
    
//     if (array1.length === 0 || array2.length === 0) {
//         return mergedArray;
//     } else if (array1[0] < array2[0]) {
//         mergedArray.push(array1[0]);
//     array1 = array1.slice(1)
//     } else {
//         mergedArray.push(array2[0]);
//         array2 = array2.slice(1)
//     }
//     merge(array1, array2, mergedArray);
// }


function merge(array1, array2, mergedArray = []) {
    if (array1.length === 0 && array2.length === 0) {
        return mergedArray;
      }
         else if (array1[0] < array2[0]) {
        mergedArray.push(array1[0]);
        array1 = array1.slice(1);
    
    } else {
        mergedArray.push(array2[0]);
        array2 = array2.slice(1)
    }
    return merge(array1, array2, mergedArray);
}