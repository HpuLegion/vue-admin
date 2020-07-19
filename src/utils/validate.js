// 过滤特殊字符

export function stripscript(s) {
        var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")
        var rs = "";
        for (var i = 0; i < s.length; i++) {
                rs = rs + s.substr(i, 1).replace(pattern, '');
            }
        return rs;
}

// 验证邮箱正则

export function validateEmailFun(value){
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    // if(!reg.test(value)){
    //     return true
    // }else{
    //     return false
    // }

    // 三目运算符写法
    return !reg.test(value) ? true : false
}
    