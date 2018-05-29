var arr = [1, 3, 5, 7, 9]
// Built-in Reduce Method
var reduced = arr.reduce(function(total, amount){
    return total + amount
})

//console.log(reduced)

// Resuce() from scratch

function reduce1(arrray, callback){
    for(i = 0; i < arrray.length; i++){
        //console.log(arrray[i])
        var final = callback(arrray[i])
    }
    console.log(final)
}
var total = 0
reduce1(arr, (value)=>{
    total += value
    //console.log(total)
    return total
})