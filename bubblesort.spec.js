<<<<<<< HEAD

describe('Bubble Sort', function(){ 
    beforeAll(function(){
        spyOn(window, 'swap').and.callThrough();
    });
    it('will swap this number of times', function(){
        bubbleSort([2, 7, 4]);
        expect(swap.calls.count()).toEqual(4);
    })

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
=======
describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

  it('correctly sorts an array', function(){
      expect(bubbleSort[7,9,2,4].toEqual([2,4,7,9]));
      expect(bubbleSort[7,11,56,34,9,2,4].toEqual([2,4,7,9,11,34,56]));
      expect(bubbleSort[1,2,3,4,5].toEqual([1,2,3,4,5]));
  })

  it('has a bubble method', function(){
      expect(typeof(bubbleSort.bubble)).toBe('function');
    spyOn(bubbleSort.bubble);
      expect(bubbleSort.bubble).toHaveBeenCalled();
  })

  it('the bubble method compares two values and returns them in the correct order', function(){
      expect(bubbleSort.bubble([7,2]).toEqual([2,7]));
      expect(bubbleSort.bubble([1,2]).toEqual([1,2]))
  });

    it('tracks that the function was called', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
>>>>>>> 0075a98889c43a65358e5844acfb2ccaf6f44298
