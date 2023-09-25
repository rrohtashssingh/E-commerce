const bar=document.querySelector('#bars')
const nav=document.getElementById('#navRight')
const cancel=document.getElementById('cancel')


if(bar){
    bar.addEventListener('click',()=>{
       nav.classList.add("active");
    })
}
if(cancel){
    cancel.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

let MainImg=document.getElementById('MainImg');
let smallimg=document.getElementsByClassName('small-img')

smallimg[0].onclick=function(){
    MainImg.src=smallimg[0].src;
}
smallimg[1].onclick=function(){
    MainImg.src=smallimg[1].src;
}
smallimg[2].onclick=function(){
    MainImg.src=smallimg[2].src;
}
smallimg[3].onclick=function(){
    MainImg.src=smallimg[3].src;
}