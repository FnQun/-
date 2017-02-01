function parseQuery(query) {
	var sp = query.replace(/([\w]*)[\=]?([\w]*)[\&]+/g,'$1: "$2",');
	return sp;
}
var tom = parseQuery("name=tom&age=12&gender&");
	tom;//返回值：{name: "tom", age: "12", gender: ""}
//版本二
function escapeHTML(htmlStr){
htmlStr = htmlStr.replace(/[<>&"]/g,function(m0) {
	switch(m0){
	case '<':
	   return '&lt;';
	case '>':
	   return '&gt;';
	case '&':
	   return '&amp;';
	case '"':
	   return '&quot;';
    };
});
return htmlStr;
}
var a = escapeHTML('<input type="text" name="mobile">');
alert(a);
