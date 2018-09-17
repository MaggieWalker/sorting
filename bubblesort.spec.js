describe('Bubble Sort', function(){ 
    it('handles an empty array', function(){ 
        expect(bubbleSort([])).toEqual([]); 
    }); 
    it('handles a single item', function(){ 
        expect(bubbleSort([20])).toEqual([20]); 
    });
    it('handles an array of multiple items', function(){ 
        expect(bubbleSort([5, 2, 7])).toEqual([2, 5, 7]); 
    });

}); 