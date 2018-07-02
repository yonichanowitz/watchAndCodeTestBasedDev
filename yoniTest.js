<script src="../tinytest.js"></script>

  <script>
/*
forEach()
execute callback once for each item in array
in ascending order
take three arguments
  value
  index
  array
  this argument
*/
function forEach(array,callback,configurableThisObject){
  var forEachCallback = callback;
    if(configurableThisObject){
      forEachCallback = callback.bind(configurableThisObject);
    }
    for(var i = 0;i < array.length; i++){
      //the parenthesis are running the callback as opposed to just calling the callback and doing nothing with it
      forEachCallback(array[i],i,array);
    }
}

  tests({
    'run callback function array.length times ': function(){
      var counter = 0;
      forEach([1,2,3],function(){
        counter++;
      });
      eq(counter,3);
    },
    'pass in the "i"th element as first argument to callback': function(){
      forEach([1], function(number){
        eq(number, 1);
      });
    },
    'position of index ("i"th position) as second argument':function(){
      forEach([1], function(number,index){
        eq(index, 0);
      });

     },
    'access to origional array as third argument':function(){
      var testArr = [1,2,3];
      forEach(testArr, function(number,index,originArray){
        eq(originArray, testArr);
      });

    },
    'access to this argument':function(){
      forEach([1],function(){
        eq(this.description, 'configurable this object');

      }, {description:'configurable this object'});

  }
})
  </script>
