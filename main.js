function map(array, mapCallback) {
    if (! Array.isArray(array) || ! array.length || typeof mapCallback !== 'function') { 
        return [];
    } else {
        let result = [];

        for (let i = 0, len = array.length; i < len; i++) {
            result.push(mapCallback(array[i], i, array)); 
        }

        return result;
    }
}

 const test = map([10,2,2] , function(item){
        return item *2
    })
    console.log(test)