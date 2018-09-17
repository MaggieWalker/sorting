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