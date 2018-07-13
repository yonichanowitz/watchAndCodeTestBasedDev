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


function reduce(theArray,callback,initialValue){
  var startingIndex = 0;
if(arguments.length <= 3){
   startingIndex++;
}

  for(var i = startingIndex; i<theArray.length;i++){
    callback();
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
       eq(numberOfTimesRun,1);
  },
 'if initialValue, previousValue should start with initial value':function(){

reduce([1],function(previousValue){
  eq(previousValue,0);
},0);

},
 'if initialValue, currentValue === first value in array':function(){

fail();
 },
 'if initialValue, callback starts i[0]':function(){
fail();

 },
 'if !initialValue, previousValue should === first value in array':function(){
fail();

 },
 'if !initialValue, currentValue === second value in array':function(){
fail();

 },
 'if !initialValue, callback starts i[1]':function(){
   fail();
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
