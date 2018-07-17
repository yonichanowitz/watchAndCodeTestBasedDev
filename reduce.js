<script src="../tinytest.js"></script>

<script>

function reduce(theArray,callback,initialValue){

  var startingIndex = 0;
if(arguments.length < 3){
   startingIndex = theArray[i];
}

  for(var i = startingIndex; i < theArray.length; i++){
    callback(initialValue,theArray[i],i);
  }
}

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
 'if initialValue, previousValue should start with initial value':function(){

reduce([1],function(previousValue){
  eq(previousValue,0);
},0);

},
 'if initialValue, currentValue === first value in array':function(){
  reduce([1],function(previousValue,currentValue){
    eq(currentValue, 1);
  },0);

 },
 'if initialValue, callback starts i[0]':function(){
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
 'if !initialValue, callback starts i[1]':function(){
   reduce([2,4,6],function(previousValue,currentValue,currentIndex){
     eq(currentValue, 4);
   });
 },
 'if initialValue, array empty, return initialValue without callback':function(){
   fail();
 },
 'if no initialValue, one element, return only element without calling callback':function(){
   fail();
 },
 'if empty, no initialValue, throw TypeError':function(){
   fail();
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
