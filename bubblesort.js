function bubbleSort(array){ 
    array = [2, 1]; 
    swap(array[0], array[1]); 
    swap(0, 1); 


    function swap(first, second){ 
        if (array[first] > array[second]){ 
            let smaller = array[second]; 
            array[second] = array[first]; 
            array[first] = smaller; 
        }
    }
}