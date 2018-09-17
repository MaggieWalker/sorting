function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            swap(j, j + 1, array);
        }

    }
    
    return array;
}

function swap(first, second, array) {
    //console.log(this); 
    if (array[first] > array[second]) {
        let smaller = array[second];
        array[second] = array[first];
        array[first] = smaller;
    }
    return array;
}