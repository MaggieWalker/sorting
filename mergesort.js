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


