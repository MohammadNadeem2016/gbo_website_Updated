const slides= document.querySelectorAll('.slide');
const next= document.querySelector('#next');
const prev= document.querySelector('#prev');
const auto= true; 
const intervalTime=4000;
let slideInterval;

const nextSlide= ()=>{
// Get Current Class
const current = document.querySelector('.current');
//Remove Current Class
current.classList.remove('.current'); 
//check for Next Slide
if(current.nextElementSibling){
    //Add Current to Next Sibling
    current.nextElementSibling.classList.add('current');
}else{
    //Add current to start
    slides[0].classList.add('current');
}
setTimeout(()=> current.classList.remove('current'));
}

const prevSlide= ()=>{
    // Get Current Class
    const current = document.querySelector('.current');
    //Remove Current Class
    current.classList.remove('.current'); 
    //check for Prev Slide
    if(current.previousElementSibling){
        //Add Current to Prev Sibling
        current.previousElementSibling.classList.add('current');
    }else{
        //Add current to last
        slides[slides.length-1].classList.add('current');
    }
    setTimeout(()=> current.classList.remove('current'));
    }

    // Button Events

    next.addEventListener('click', e=>{
        nextSlide();
    });
    prev.addEventListener('click', e=>{
        prevSlide();
    });

    // Auto Slide
    if(auto){
        // Run next slide at interval time
        slideInterval= setInterval(nextSlide, intervalTime);
    }

    // Navigation Bar
    const hamburger_menu= document.querySelector(".hamburger-menu");
    const container= document.querySelector(".container");
    
    hamburger_menu.addEventListener("click",()=>{
        container.classList.toggle("active");
        // const para = document.createElement("style");
        // const mainhide =para.add('display:none');
        const mainhideMain=document.querySelector(".main");
        const mainhideFooter=document.querySelector(".footer");
        mainhideMain.classList.toggle("hideAll");
        mainhideFooter.classList.toggle("hideAll");
    }) 
    var delayInMilliseconds = 3000; //1 second

    setTimeout(function() {
      //your code to be executed after 1 second
    }, delayInMilliseconds);