//var a = 1, b = 2, c = 3;

(function firstFunction() {
    var b = 5, c = 6;

    (function secondFunction() {
        //var b = 8;
        
        (function thirdFunction() {
            //var a = 7, c = 9;
           
            (function fourthFunction() {
                //var a = 1, c = 8;
            })();
        })();
    })();
})();
for (var i = 0; i < 5; i++){
    console.log(i + "Inside For Loop");
}
console.log(i + "After for loop");

var  j = 3;
if (j < 5){
    i = 10;
}
console.log(i);
