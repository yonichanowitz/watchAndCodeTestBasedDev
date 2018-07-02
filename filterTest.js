<script src="../tinytest.js"></script>

<script>

function filter(array,callback,configurableThisObject){

}

  tests({
    'run callback function array.length times ': function(){
     /*
     var counter = 0;
     forEach([1,2,3],function(){
       counter++;
     });
     eq(counter,3);*/

    fail();
    },
    'pass in the "i"th element as first argument to callback': function(){
    /*  forEach([1], function(number){
        eq(number, 1);
      });*/
      fail();
    },
    'position of index ("i"th position) as second argument':function(){
      /*forEach([1], function(number,index){
        eq(index, 0);
      });*/
     fail();
     },
    'access to origional array as third argument':function(){
    /*  var testArr = [1,2,3];
      forEach(testArr, function(number,index,originArray){
        eq(originArray, testArr);
      });
   */
        fail();
    },
    'access to this argument':function(){
    /*  forEach([1],function(){
        eq(this.description, 'configurable this object');

      }, {description:'configurable this object'});
      */
      fail();
  },
  'return new array, not the one being filtered':function(){
    fail();
  },
  'new array should only have elements that return true when running callback':function(){
    fail();
  }

})

</script>
