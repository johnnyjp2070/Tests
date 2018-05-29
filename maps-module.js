module.exports.map1 = (arrray, callback)=>{
    var mapped = []
     for(i = 0; i < arrray.length; i++){
         //console.log(arrray[i])
         var final = callback(arrray[i])
         mapped.push(final)
     }
     console.log(mapped)
}