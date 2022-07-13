const logoCover =document.getElementById('logocover')
const logoImg= document.getElementById('logoimg')

const video = document.querySelectorAll("video")
const videoPlay= document.getElementById('videoPlay')
const colection1 = document.getElementById('colection1')
const colection2 = document.getElementById('colection2')
const colection3 = document.getElementById('colection3')
const title = document.getElementsByClassName('title')
const title1= document.getElementById('title1')
const title2= document.getElementById('title2')
const imgSe1 = document.getElementById('img_se1')
const imgSe2 = document.getElementById('img_se2')

const navHidden = document.getElementById('navhidden')
const navShow =document.querySelector('.nav_hidden')


const imgSe1Top= imgSe1.offsetTop
const imgSe2Top= imgSe2.offsetTop

window.addEventListener('scroll',()=>{
     logoScale();
     titleTranform();

})

videoPlay.addEventListener('mouseover',()=>{
     videoPlay.play()
})
videoPlay.addEventListener('mouseleave',()=>{
     videoPlay.pause()
})
colection1.addEventListener('mouseover',()=>{
     colection1.play()
})
colection1.addEventListener('mouseleave',()=>{
     colection1.pause()
})
colection2.addEventListener('mouseover',()=>{
     colection2.play()
})
colection2.addEventListener('mouseleave',()=>{
     colection2.pause()
})
colection3.addEventListener('mouseover',()=>{
     colection3.play()
})
colection3.addEventListener('mouseleave',()=>{
     colection3.pause()
})

function logoScale(){
     const scroll = window.scrollY
     let s = logoCover.offsetWidth/logoImg.width
     let imgScale = s - (scroll/1200)

     // console.log(imgScale)
     if(imgScale > 0.09){
          logoImg.style.transform =`scale(${imgScale})`
     }
}

function titleTranform(){
     const scroll = window.scrollY
     if(scroll>imgSe1Top){
          title1.classList.add('transform');
     }else{
          title1.classList.remove('transform')
     }
     if(scrollY>imgSe2Top){
          title2.classList.add('transform');
     }else{
          title2.classList.remove('transform')
     }
}


navHidden.addEventListener('click',()=>{
     navShow.classList.toggle('hidden')
 });
 
 window.addEventListener('click',(e)=>{
     e.target
     console.log(e.target)
     if(e.target == navShow){
          navShow.classList.add('hidden')
     }
 })