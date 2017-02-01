if( typeof Object.create != 'function'){
    Object.create = function(proto){
        if( typeof proto != 'object' ){
            throw TypeError('Object prototype Maybe an Object or null')
        }
        var back = function(){}
        back.prototype = proto
        return back;
    }
}
var a = Object.create({x:1,y:2})
alert(a.y)
