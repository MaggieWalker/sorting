
describe('Bubble Sort', function(){ 
    // beforeAll(function(){
    //     spyOn(bubbleSort, 'swap').andcallThrough();
    // });
    // it('will swap this number of times', function(){
    //     bubbleSort([2, 7, 4]);
    //     console.log(bubbleSort.swap.calls.count());
    // })

    it('handles an empty array', function(){ 
        expect(bubbleSort([])).toEqual([]); 
    }); 
    it('handles a single item', function(){ 
        expect(bubbleSort([20])).toEqual([20]); 
    });
    it('handles an array of multiple items', function(){ 
        expect(bubbleSort([5, 2, 7])).toEqual([2, 5, 7]); 
    });
    it('handles an array of many many items', function(){ 
        expect(bubbleSort([5, 2, 7, 9, 12, 4, 6, 2, 100, 22, 13, 21])).toEqual([2, 2, 4, 5, 6, 7, 9, 12, 13, 21, 22, 100]); 
    });

}); 