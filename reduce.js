<script src="../tinytest.js"></script>

<script>

  

function reduce(theArray, callback, initialValue) {
    var startingIndex = 0;
    var resultsSoFar = initialValue;
    var arrLength = theArray.length;
    var objKeysInArr = Object.keys(theArray);
//if no initialValue
    if(arguments.length < 3) {

//if array has one element return it
        if(objKeysInArr.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        if(objKeysInArr.length === 1) {
            var onlyIndex = objKeysInArr[0];
            var onlyElement = theArray[onlyIndex];
            return onlyElement;
        }
        while(startingIndex in theArray === false && startingIndex < arrLength) {
            startingIndex++;
        }
        resultsSoFar = theArray[startingIndex];
        startingIndex++;
    //return resultsSoFar;
    //has initialValue
    } else {
    //there is an initial value but nothing in array
        if(objKeysInArr.length === 0) {
            return initialValue;
        }
    }
    for(var i = startingIndex; i < arrLength; i++) {
        if(i in theArray){
            resultsSoFar = callback(resultsSoFar,theArray[i],i,theArray);
        }
    }
    return resultsSoFar;
};



tests({
  "if initialValue callback should run array.length times":function() {
        var numberOfTimesRun = 0;
        reduce([1], function() {
            numberOfTimesRun++;
        },0);
       eq(numberOfTimesRun, 1);
   },
   "if no initialValue callback should run array.length-1 times":function() {
        var numberOfTimesRun = 0;
        reduce([1], function() {
            numberOfTimesRun++;
        });
        eq(numberOfTimesRun, 0);
    },
    "if initialValue, previousValue should start with initial value":function() {
         reduce([1], function(previousValue) {
         eq(previousValue, 0);
         },0);

    },
    "if initialValue, currentValue === first value in array":function() {
        reduce([1], function(previousValue, currentValue) {
        eq(currentValue, 1);
        },0);
    },
    "if initialValue, callback starts i[0]":function() {
        reduce([1],function(previousValue, currentValue, currentIndex) {
        eq(currentIndex, 0);
        },0);
    },
    "if !initialValue, previousValue should === first value in array":function() {
         reduce([2], function(previousValue, currentValue, currentIndex) {
         eq(previousValue, 2);
         });

    },
    "if !initialValue, currentValue === second value in array":function() {
         reduce([2,4], function(previousValue, currentValue, currentIndex){
         eq(currentValue, 4);
         });
    },
    "if !initialValue, callback index starts i[1]":function(){
        reduce([2,4], function(previousValue, currentValue, currentIndex) {
        eq(currentIndex, 1);
        });
    },
    "if initialValue, array empty, return initialValue without calling callback":function() {
          var initialValueHere = 'zero';
          var numberOfTimesRun = 0;
          var reduceresult = reduce([,,,], function() {
              numberOfTimesRun++;
          }, initialValueHere);
         eq(reduceresult, initialValueHere);
         eq(numberOfTimesRun, 0);
    },
    "if no initialValue, one element, return only element without calling callback":function(){
           var numberOfTimesRun = 0;
           var reduceresult = reduce([,, 2,], function() {
               numberOfTimesRun++;
           });
           eq(reduceresult, 2);
    },
    "should actually reduce array":function(){
            var results = reduce([1, 2, 3], function(a, b) {
                return a + b;
            },0);
            eq(results, 6);
    },
    "if initialValue should exclude holes":function(){
        var results = reduce([ , 1, , 2, , 3, ],function(a, b) {
            return a + b;
        }, 0);
        eq(results, 6);
        console.log(results);
    },
    "if !initialValue should exclude holes":function() {
        var results = reduce([ , 1, , 2, , 3, ],function(a, b) {
            return a + b;
        });
        eq(results, 6);
        console.log(results);
    },
    "if empty, no initialValue, throw TypeError":function() {
          var isTypeError = false;
          try{ reduce([,,,,],function() {});
          }catch(e){
              isTypeError = (e instanceof TypeError);
              console.log();
          }
          eq(isTypeError, true);
    },
    "should pass array as 4th arg to callback":function() {
        var testArray = [1, 2];
        reduce(testArray, function(previous, currentVal, currentIndex, origionalArray) {
          eq(origionalArray, testArray);
        });
    }

});






</script>
