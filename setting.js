//我是注释
"use strict"
const logo_max=2;
let logo_img=document.querySelectorAll("#logo");
let logo_now=0;
let changelog=(a)=>{
    let rand_math=Math.ceil(Math.random() * logo_max);
    if (rand_math===0){changelog();}
    else {logo_now=rand_math;
        logo_img.src="${logo_now}.ico";
        setTimeout(changelog,5000);}
}
setTimeout(changelog,5000);
