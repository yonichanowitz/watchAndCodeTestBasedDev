<script src="../tinytest.js"></script>

<script>

function filter(origionalArray,callback,optionalThis){
  var filteredAlready = callback,
      newArr = [];
  if(optionalThis){
    filteredAlready = callback.bind(optionalThis);
  }
   for(var i = 0;i< origionalArray.length;i++){
     if(filteredAlready(origionalArray[i],i,origionalArray)){
       newArr.push(origionalArray[i]);
     }
   }
   return newArr
}

  tests({
    'run callback function array.length times ': function(){

     var timesItWasRun = 0;
     filter([1,2,3],function(){
       timesItWasRun++;
     });
     eq(timesItWasRun,3);

    },
    'pass in the "i"th element as first argument to callback': function(){
      filter([1], function(number){
        eq(number, 1);
      });

    },
    'position of index ("i"th position) as second argument':function(){
      filter([1], function(number,index){
        eq(index, 0);
      });
     },
    'access to origional array as third argument':function(){
     var testArr = [1,2,3];
      filter(testArr, function(number,index,originArray){
        eq(originArray, testArr);
      });

    },
    'access to this argument':function(){
       filter([1],function(){
        eq(this.description, 'configurable this object');

      }, {description:'configurable this object'});

  },
  'should return array':function(){
      filteredArr = filter([], function(){});
    eq(Array.isArray(filteredArr),true);

  },
  'return new array, not the one being filtered':function(){
    var testArr = [],
    filteredArr = filter(testArr, function(){});
    eq(testArr !== filteredArr, true);
  },
  'new array should only have elements that return true when running callback':function(){
    var filteredArr = filter([1,2],function(number){
      return number >1
    });
    eq(filteredArr.length, 1);
    eq(filteredArr[0],2)
  }

});

</script>
