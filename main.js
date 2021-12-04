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
   
    // Scrolling Menu Appear Start
    // document.addEventListener("DOMContentLoaded", function(){
    //     window.addEventListener('scroll', function() {
    //         if (window.scrollY > 50) {
    //         //   document.getElementById('navbar_top').classList.add('fixed-top');
    //           // add padding top to show content behind navbar
    //           navbar_height = document.querySelector('.navbar').offsetHeight;
    //         //   document.getElementById('navbar_height').style.marginTop = "5rem";
    //          } //  else {
    //         //   document.getElementById('navbar_top').classList.remove('fixed-top');
    //         //    // remove padding top from body
    //         //   document.body.style.paddingTop = '0';
    //         // } 
    //     });
    //   }); 



    //   $(window).bind('resize', function(){ 
    //     var barWidth = $(".topBar").width(); 
    //     $(".barModules li").css('margin-left', my dynamic value here));
    // });
     // Scrolling Menu Appear End