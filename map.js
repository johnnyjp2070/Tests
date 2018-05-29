var arr = [1, 3, 5, 7, 9]
// Built-in map Method
var mapped = arr.map(function(value){
    value = value * 2
    return value
})
console.log("Text to check Async")
console.log(mapped)
var map1 = require('./maps-module.js')
// map() from scratch


var total = 0
map1.map1(arr, (value)=>{
     value = value * 4
     //console.log(total)
     return value
 })

