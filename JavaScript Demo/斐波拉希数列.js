function fibonacci(n){
    var a,b,result;
    if(n<=2){
		if(n===0) {return 0;}
		else if(n===1||2) {return 1;}
    }
    a = b = 1;
    for(var i=3;i<=n;i++){
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));
// version 2.0
(function (value) {
                if (value > 1)
                    return value *arguments.callee(value-1);
                return value;
	})(10);
  //为什么不能用变量代替数值，会报错！
