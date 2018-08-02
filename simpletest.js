//editing and adding features to Gordon Zhu's TinyTest

var tinyTestUtilities = {
     renderingStuff: function(tests, failures) {
       var newDiv = document.createElement("div");
       newDiv.style.width = "600px";
       newDiv.style.height = "200px";
       newDiv.style.padding = "300px";
       newDiv.style.fontSize = "xx-large";
       if(failures <= 0) {
           newDiv.style.color = "gold";
       } else {
           newDiv.style.color = "black";
       }
       document.body.appendChild(newDiv);
       newDiv.innerHTML =  "Total amount of failures = " + failures.toString()
                            + "Total amount of successes = "
                            + (Object.keys(tests).length - failures);
     }
 };
 var TinyTest = {

     run: function(tests) {
         var failures = 0;
         for (var testName in tests) {
             var testAction = tests[testName];
             try {
                 testAction.apply(this);
                 console.log('%c' + testName, "color:green;");
             } catch (e) {
                 failures++;
                 console.groupCollapsed('%c' + testName + 'FAILED', "color:red");
                 console.error(e.stack);
                 console.groupEnd();
             }
         }
         setTimeout(function() { // Give document a chance to complete
             if (window.document && document.body) {
                 document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
                 tinyTestUtilities.renderingStuff(tests, failures);
             }
         }, 0);
     },

     fail: function(msg) {
         throw new Error('fail(): ' + msg);
     },

     assert: function(value, msg) {
         if (!value) {
             throw new Error('assert(): ' + msg);
         }
     },

     assertEquals: function(expected, actual) {
         if (expected != actual) {
             throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
         }
     },

     assertStrictEquals: function(expected, actual) {
         if (expected !== actual) {
             throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
         }
     },
 };

 var fail               = TinyTest.fail.bind(TinyTest),
     assert             = TinyTest.assert.bind(TinyTest),
     assertEquals       = TinyTest.assertEquals.bind(TinyTest),
     eq                 = TinyTest.assertEquals.bind(TinyTest), // alias for assertEquals
     assertStrictEquals = TinyTest.assertStrictEquals.bind(TinyTest),
     tests              = TinyTest.run.bind(TinyTest);
