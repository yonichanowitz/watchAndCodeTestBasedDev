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

//should not run holes in array 
//[hole,1]

//if initialValue, previousValue should === initial value example
//if initialValue, currentValue === first value in array
//if initialValue, callback starts i[0]

//if !initialValue, previousValue should === first value in array
//if !initialValue, currentValue === second value in array
//if !initialValue, callback starts i[1]

edge cases

//if empty, no initialValue, throw TypeError
//if one element, no initialValue, return only element without calling callback
//if array empty, no initialValue, return initialValue

should actually reduce array


example of edge cases
reduce([hole,1],function(){})
//return 1 without calling callback

reduce([1], function(){})
//return 1 without calling callback

reduce([hole , hole],function(){})
//return 0 without calling callback


*/

</script>
