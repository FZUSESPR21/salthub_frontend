/**
 *@functionName: getNowTime
 *@description: 返回当前时间的字符串对象   格式:YYYY-mm-DD HH:mm:SS
 *@author: lw
 *@date: 2021-05-05 10:50:59
 *@version: V1.0.0
*/
export function getNowTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
    var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    var dataString = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
    
    console.log(dataString);
    return dataString;
}