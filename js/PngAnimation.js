"use strict"
function set_img_wraps(img){
    if (img.height >=500){
        let img_wraps=document.createElement('div');
        img.parentNode.insertBefore(img_wraps,img);
        img_wraps.appendChild(img);
        img.classList.add('img_scale_property');
        img_wraps.style.width=img.width +'px';
        img_wraps.style.height=img.height +'px';
        img_wraps.classList.add('div_scale_property');
    if (img.classList.contains('iscenter')){
        img_wraps.classList.add('is_center');
    }
    }
}
let imgs=document.querySelectorAll('.attached_png');
let end=imgs.length;
for (let i=0;i<end;i++){set_img_wraps(imgs[i]);};
