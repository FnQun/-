var date = new Date(2001, 8, 11, 8, 26, 8);
function formatDate(date,arr) {
    var year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    if(month < 10){month ='0'+month;}
    if(day < 10){day = '0'+day;}
    if(hours < 10){hours ='0'+hours;}
    if(minutes < 10){minutes ='0'+minutes;}
    if(seconds < 10){seconds ='0'+seconds;}
    var dd=/d+/.test(arr),
        HH=/H+/.test(arr),
        ss=/s+/.test(arr);
    if(dd===true&&HH===false){return year+'-'+month+'-'+day;}
    else if(HH===true&&ss===false){return year+'-'+month+'-'+day+' '+hours;}
    else if(ss===true){return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds}
    };
    formatDate(date,"yyyy-MM-dd HH")
