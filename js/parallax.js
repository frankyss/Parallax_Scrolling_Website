
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountainsBehind = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let subText = document.getElementById("sub-text");
let btn = document.getElementById("btn");
let mountainsFront = document.getElementById("mountains_front");
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value =this.window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountainsBehind.style.top = value * 0.5 + 'px';
    mountainsFront.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    subText.style.marginLeft = value * 4 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
});