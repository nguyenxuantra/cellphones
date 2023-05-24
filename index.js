var arr_hinh=[
    "img/oppo.jpg.webp",
    "img/js2.webp",
    "img/js3.webp",
    "img/js4.webp",
    "img/js5.webp",
]
var index=0;
function next()
{
    index++;
    if(index>=arr_hinh.length)
    index=0;
    var hinh=document.getElementById("hinh");
    hinh.src=arr_hinh[index];
}
function trai(){
    index--;
    if(index<0)
    index= arr_hinh.length -1;
    document.getElementById("hinh").src=arr_hinh[index];
}  
setInterval("next()",3000); 



var arr_hinh1=[
    "img/b1.webp",
    "img/b11.webp",
    
]
var index1=0;
function next1()
{
    index1++;
    if(index1>=arr_hinh1.length)
    index1=0;
    var hinh=document.getElementById("hinh1");
    hinh.src=arr_hinh1[index1];
}
function trai1(){
    index1--;
    if(index1<0)
    index1= arr_hinh1.length -1;
    document.getElementById("hinh1").src=arr_hinh1[index1];
}  
setInterval("next1()",2000); 

var arr_hinh2=[
    "img/b2.webp",
    "img/b21.webp",
    "img/b22.webp",
    "img/b23.webp",
]
var index2=0;
function next2()
{
    index2++;
    if(index2>=arr_hinh2.length)
    index2=0;
    var hinh=document.getElementById("hinh2");
    hinh.src=arr_hinh2[index2];
}
function trai2(){
    index2--;
    if(index2<0)
    index2= arr_hinh2.length -1;
    document.getElementById("hinh2").src=arr_hinh2[index2];
}  
setInterval("next2()",3000); 

// code đồng hồ 
function hienthithoigian(){
    const t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();

    document.getElementById("thoigian").innerHTML= h+":"+m+":"+s;
    setTimeout(hienthithoigian,1000);
}
hienthithoigian();

//