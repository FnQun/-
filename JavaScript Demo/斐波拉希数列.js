(function (value) {
                if (value > 1)
                    return value *arguments.callee(value-1);
                return value;
	})(10);
  //为什么不能用变量代替数值，会报错！
