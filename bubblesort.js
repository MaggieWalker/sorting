<<<<<<< HEAD
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
=======
let bubbleSort = (array) => {
    let newArray = [];
    
    this.bubble = (array)=> {
        for (let i=0;  i<array.length; i++){
            for (let j=0; j<array.length-1; j++){
                if (array[j]> array[j+1]){
                    let left =array[j];
                    let right = array[j+1];
        
                    array[j]= right;
                    array[j+1] = left;
                }
            }
        }
    }

    return newArray;
}

// class BubbleSort {
//     constructor (array){
//         this.array=array;
//         this.returnedArray =[];
//     }

//     bubble (array){
//         if (array[0]>array[1]){
//          return this.returnedArray= [array[1],array[0]];
//          }
//         return this.returnedArray.push(arr2);
//     }

// }


// for (let i=0;  i<array.length; i++){
//     for (let j=0; j<array.length-1; j++){
//         if (array[j]> array[j+1]){
//             let left =array[j];
//             let right = array[j+1];

//             array[j]= right;
//             array[j+1] = left;
//         }
//     }
// }
>>>>>>> 0075a98889c43a65358e5844acfb2ccaf6f44298
