function parseQuery(query) {
	var sp = query.replace(/([\w]*)[\=]?([\w]*)[\&]+/g,'$1: "$2",');
	return sp;
}
var tom = parseQuery("name=tom&age=12&gender&");
	tom;//返回值：{name: "tom", age: "12", gender: ""}
