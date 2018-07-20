<script src="../tinytest.js"></script>

<script>

  
function reduce(theArray,callback,initialValue){
var valueToReturn = '';
var startingIndex = 0;
var resultsSoFar = initialValue;
//if no initialValue
if(arguments.length < 3){
  resultsSoFar = theArray[startingIndex];
 startingIndex++;
//if array has one element return it
//55:51
if (Object.keys(theArray).length === 1){
    var singleIndex = Object.keys(theArray)[0];
    var singleElement = theArray[singleIndex];
      return singleElement
    }
    if (Object.keys(theArray).length === 0){
      return "TypeError";
    }
  }else{
    //there is an initial value but nothing in array
    if(Object.keys(theArray).length === 0){
      return initialValue;
      }
    for(var i = startingIndex; i < theArray.length; i++){
      callback(resultsSoFar,theArray[i],i);
      }
    }
  };



tests({

  "if initialValue callback should run array.length times":function(){
 var numberOfTimesRun = 0;
    reduce([1],function(){
      numberOfTimesRun++;
    },0);
    eq(numberOfTimesRun,1);
  },
  "if no initialValue callback should run array.length-1 times":function(){
    var numberOfTimesRun = 0;
       reduce([1],function(){
         numberOfTimesRun++;
       });
       eq(numberOfTimesRun,0);
  },
 "if initialValue, previousValue should start with initial value":function(){
  reduce([1],function(previousValue){
  eq(previousValue,0);
    },0);

},
 "if initialValue, currentValue === first value in array":function(){
  reduce([1],function(previousValue,currentValue){
    eq(currentValue, 1);
  },0);

 },
 "if initialValue, callback starts i[0]":function(){
   reduce([1],function(previousValue,currentValue,currentIndex){
     eq(currentIndex, 0);
   },0);

 },
 'if !initialValue, previousValue should === first value in array':function(){
   reduce([2,4,6],function(previousValue,currentValue,currentIndex){
     eq(previousValue, 2);
   });

 },
 'if !initialValue, currentValue === second value in array':function(){
   reduce([2,4,6],function(previousValue,currentValue,currentIndex){
     eq(currentValue, 4);
   });

 },
 'if !initialValue, callback index starts i[1]':function(){
   reduce([2,4,6],function(previousValue,currentValue,currentIndex){
     eq(currentIndex, 1);
   });
 },
 'if initialValue, array empty, return initialValue without calling callback':function(){
  var initialValueHere = 'zero';
  var numberOfTimesRun = 0;
   var reduceresult = reduce([,,,],function(){
   numberOfTimesRun++;
 },initialValueHere);
    eq(reduceresult, initialValueHere);
    eq(numberOfTimesRun,0);
 },
 'if no initialValue, one element, return only element without calling callback':function(){
   var numberOfTimesRun = 0;
    var reduceresult = reduce([,,2,],function(){
     numberOfTimesRun++;
     });
     eq(reduceresult, 2);
 },
 'if empty, no initialValue, throw TypeError':function(){
    var reduceresult = reduce([,,,,],function(){});
    eq(reduceresult,"TypeError");
 },
 'should exclude holes':function(){
   fail();
 },
 'should actually reduce array':function(){
   fail();
 },
 'should pass array as 4th arg to callback':function(){
   fail();
 }

});



</script>
