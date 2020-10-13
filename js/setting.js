//我是注释
"use strict"
var logo_f=document.querySelector("#logo");
function change_por(){
    var por_now=Math.ceil(Math.random()*5);
    logo_f.src=`icon/${por_now}.ico`;
    setTimeout(change_por,10000);
}
setTimeout(change_por,10000);