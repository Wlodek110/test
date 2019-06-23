let carlike = function(obj, loc){
    obj.loc = loc;
    obj.move = function(){
        obj.loc++;
    }
    return obj;
}


let amy = carlike({},1);
console.log(amy);
amy.move();
console.log(amy);