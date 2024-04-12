var header = document.getElementById("header");
var ms=document.getElementById("mt");
var m3=document.getElementById("rx");
var mx=document.getElementById("kawasaki");
var my=document.getElementById("harley");
var model=document.getElementById("model");
var mph=document.getElementById("mph");
var speed=document.getElementById("speed");
var range=document.getElementById("range");

ms.onclick=function(){
    header.style.backgroundImage="url(https://wallpapers.com/images/high/black-yamaha-mt-15-with-yellow-rims-cng5mlmdml5k3akb.webp)";
    model.innerHTML="MT15";
    mph.innerHTML="11s";
    speed.innerHTML="130 km/h";
    range.innerHTML="530 km";


}
m3.onclick=function(){
    header.style.backgroundImage="url(https://wallpapers.com/images/high/neon-green-yamaha-rx100-motorcycle-vhxzxgq33ihknr8m.webp)";
    model.innerHTML="RX 100";
    mph.innerHTML="11.2s";
    speed.innerHTML="110 km/h";
    range.innerHTML="420 km";
}
mx.onclick=function(){
    header.style.backgroundImage="url(https://wallpapers.com/images/high/thrilling-speed-kawasaki-ninja-motorcycle-on-road-2cbzy5ghuyfymk5w.webp)";
    model.innerHTML="KAWASAKI";
    mph.innerHTML="2.5s";
    speed.innerHTML="380 km/h";
    range.innerHTML="150 km";
}
my.onclick=function(){
    header.style.backgroundImage="url(https://wallpapers.com/images/high/b-w-classic-harley-davidson-motorcycle-g7ez2ly888o8cp13.webp)";
    model.innerHTML="HARLEY";
    mph.innerHTML="30.5s";
    speed.innerHTML="177 km/h";
    range.innerHTML="280 km";
}