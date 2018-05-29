var arr = [1, 3, 5, 7, 9]
// Built-in map Method
var mapped = arr.map(function(value){
    value = value * 2
    return value
})

console.log(mapped)

// map() from scratch

function map1(arrray, callback){
    var mapped = []
     for(i = 0; i < arrray.length; i++){
         //console.log(arrray[i])
         var final = callback(arrray[i])
         mapped.push(final)
     }
     console.log(mapped)
}
var total = 0
map1(arr, (value)=>{
     value = value * 4
     //console.log(total)
     return value
 })