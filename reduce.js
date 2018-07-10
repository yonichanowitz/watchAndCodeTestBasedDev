<script src="../tinytest.js"></script>

<script>

function reduce(origionalArray,callback,optionalThis){

}

  tests({
    'accumulator ': function(){

  },
  'currentValue ': function(){

}

});

/*
mapCallback   previousVBalue
currentValue
currentIndex
Array

returns single value

execute once for each item in Array

//if initialValue, previousValue should === initial value

//if initialValue, currentValue === first value in array

//if initialValue, callback starts i[0]

//if !initialValue, previousValue should === first value in array

//if !initialValue, currentValue === second value in array

//if !initialValue, callback starts i[1]

//if empty, no initialValue, throw TypeError

//if one element, no initialValue, return only element without calling callback

//if array empty, no initialValue, return initialValue

first time called, accumulator and current can be one of two things
1)initialvalue is something,
   accum equals initial,
   current is first value in array.
   callback starts at index 0
2)no initial value,
   accum equals first value in array,
   current is the second
   callback starts at index 1

edge cases

 if array is empty 'TypeError' is thrown
 
 if only one value in array, and no initial value,
 or initial value is there but array is empty
    item is returned without calling mapCallback

example of edge cases
reduce([/*hole*/,1],function(){})
//return 1 without calling callback

reduce([1], function(){})
//return 1 without calling callback

reduce([/*hole*/,/*hole*/],function(){})
//return 0 without calling callback


*/

</script>
