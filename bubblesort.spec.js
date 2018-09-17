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