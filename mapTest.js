<script src="../tinytest.js"></script>

<script>

function map(origionalArray,callback,optionalThis){
var mapCallback = callback;
var mappedArray = [];
  if(optionalThis){
    mapCallback = callback.bind(optionalThis);
  }
   for(var i = 0; i < origionalArray.length;i++){
     mappedArray.push(mapCallback(origionalArray[i],i,origionalArray));
   }
   return mappedArray;
}

  tests({
    'run callback function array.length times ': function(){

     var timesItWasRun = 0;
     map([1,2,3],function(){
       timesItWasRun++;
     });
     eq(timesItWasRun,3);

    },
    'pass in the "i"th element as first argument to callback': function(){
      map([1], function(number){
        eq(number, 1);
      });

    },
    'position of index ("i"th position) as second argument':function(){
      map([1], function(number,index){
        eq(index, 0);
      });
     },
    'access to origional array as third argument':function(){
     var testArr = [1,2,3];
      map(testArr, function(number,index,theArray){
        eq(theArray, testArr);
      });

    },
    'access to this argument':function(){
       map([1],function(){
        eq(this.description, 'configurable this object');

      }, {description:'configurable this object'});

  },
  'should return array':function(){
      var mappedArr = map([], function(){});
    eq(Array.isArray(mappedArr),true);

  },
  'return new array, not the one being filtered':function(){
    var testArr = [],
    mappedArr = map(testArr, function(){});
    eq(testArr !== mappedArr, true);
  },
  'new array should return mapped array':function(){
   var mappedArr = map([1],function(number){
      return number * 2;
   });
  eq(mappedArr[0],2);
  }

});

</script>
