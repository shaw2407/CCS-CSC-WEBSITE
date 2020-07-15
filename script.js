const txt1 = document.querySelector(".itxt1");
const txt = document.querySelector(".itxt");
const itxt = txt1.textContent;
const stxt = itxt.split("");
const pic = document.querySelector(".slides");
const desc = document.querySelector(".desc");
const innerDesc = document.querySelector(".inner-desc");
const circle = document.querySelector(".slide-butts");
const slider = document.querySelector(".csc");
txt1.textContent= "";
let nav = document.querySelector(".nav");
let menuList = document.querySelector(".menu-list");



// Slider starts here

let offName =[
    "Albert Darion Estrella",
    "Albert Darion Estrella",
    "Chandler Dave Mosquito",
    "Jobelene De Leon",
    "Patricia Bianca Ramos",
    "Jerome Viterbo",
    "Jerico Stanley Onate",
    "Erika Rose Ramos"
]

let offPos = [
    "Governor",
    "Governor",
    "Vice Governor",
    "Board Member on Records",
    "Board Member on Finance",
    "Board Member on Audit",    
    "Board Member on Public Information Officer",
    "Board Member on Ways & Means",
]

for(let i=0;i<8;i++){
    if(i==0){
        pic.innerHTML ='<img class="image" src="./imgs/officers/off-1.png">'
        desc.innerHTML += '<div class="inner-desc"><h1>Albert Einstein</h1><h3>Governor</h3></div>'
        
    }else{
       pic.innerHTML += '<img class="image" src="./imgs/officers/off-'+i+'.png">'
       desc.innerHTML += '<div class="inner-desc"><h1>'+offName[i]+'</h1><h3>'+offPos[i]+'</h3></div>'
    }
}


let picSlide = [0, -80, -160, -240, -320, -400, -480, -560];
let textSlide = [0, -50, -100, -150, -200, -250, -300, -350];
let index = 0;
let starter = setInterval(start, 5000)
let slideTimer = setInterval(autoPlay, 7000) 


for(let i=0;i<8;i++){
    const div = document.createElement('div')
    div.classList.add('butt')
    div.setAttribute('onclick','circleIndicator(this)')
    div.id+=i
    if(i==0){
        div.className='butt active'
    }
    circle.appendChild(div)
}

function circleUpdate(){
    for(let i=0;i<circle.children.length;i++){
        circle.children[i].classList.remove('active')
    }
    circle.children[index].classList.add('active')
}

function circleIndicator(element){
    index=element.id
    changeSlide(index)
    resetTimer()
}

function changeSlide(){
    pic.style.margin= picSlide[index]+'vh 0 0 0'
    pic.style.transition = '1s'
    desc.style.margin= '0 0 0 '+textSlide[index]+'vw'
    desc.style.transition = '1s'
}

function resetTimer(){
    clearInterval(slideTimer)
    slideTimer = setInterval(autoPlay, 7000)
    circleUpdate()
}



function nextSlide(){
    if(index == pic.children.length-1){
        index=0
    }else{
        index++
    }
    changeSlide()
}

function autoPlay(){
    nextSlide()
    circleUpdate()
}

function start(){
    clearInterval(starter)
}




for(let i=0; i < stxt.length ; i++){
    txt1.innerHTML += "<span>" + stxt[i] + "</span>";
}

let itimer = 0;
const tiktimer = setInterval(tik, 50);
const slideShowTimer = setInterval(slideShow, 5000);



function tik(){
    const span = txt1.querySelectorAll("span")[itimer];
    span.classList.add("fade");
    itimer++;
    if(itimer === stxt.length){
        clearInterval(tiktimer);
        txt1.style.opacity="0";
        txt1.style.transition="1s ease-out 1.4s";
        return
    }
}


function slideShow(){
    slider.style.opacity="1";
    slider.style.transition="2s ease";
    clearInterval(slideShowTimer);
}

function slideToggle(){
    if (!(nav.style.width=="50%") && !(nav.style.height=="100%") && !(menuList.style.display=="flex")) {
        nav.style.width="50%";
        nav.style.height="100%";
        menuList.style.display="flex";
    }else{
        nav.style.width="15%";
        nav.style.height="10%";
        menuList.style.display="none";
    }
}

