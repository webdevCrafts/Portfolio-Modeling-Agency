// Slideshow Source: https://www.youtube.com/watch?v=RTUJbpLZJkk
// Slideshow Variables
const container = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slide');
// I added the below variable
const slideImg = document.querySelectorAll('.slide img');

// Offset value for slides container
let offset = 0;

// Slide ID
let slideID = 0;

let intervalId = setInterval(() => {

// Set offset to side width 
offset = slides[0].offsetWidth;


// Set container transition

container.style.transition = "left ease-in-out 500ms";

// Move slides container by negative offset
container.style.left = -offset + 'px';

// Set a timeout
setTimeout (() => {
    
    slideImg.forEach(Img => {
                console.log[slideID + "Hello!!!"];
                    //Reset all slides order

                    Img.classList.remove('current');
            });

    // Remove container transition
    container.style.transiton = "none";

    // Move the current slide to the last position
    slides[slideID].style.order = slides.length - 1;
    
    // If the slide ID is greater than 0
    if (slideID > 0) {
        // Remove current class from the current slide
        slideImg[slideID].classList.remove('current');
    }

    // Move the container back to the starting position
    container.style.left = 0;

/* The code below attempts to add a "focus" effect on the center
image of the carousel, but I haven't been able to figure it out
because when I try to add the "current class" when I increment 
the slideID, the last image in the array is "undefined."*/
// console.log(slideImg[slideID]);
// slideImg[slideID + 1].classList.add('current');
 
 
    // Increment Slide ID
    slideID++;
    
    // If the slide ID reaches the slides length
        if(slideID === slides.length && slideID > 0) {
         
            // Set slide ID to 0.
            slideImg[slideID - 1].classList.remove('current');
            slideID = 0;

           
                // Select all the Slides
                slides.forEach(slide => {
                
                    //Reset all slides order
                    slide.style.order ="initial";
            });
             
        }
    }, 500);
},2500);


let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

 if (prefersReducedMotion.matches) {
    clearInterval(intervalId);
    
}
    
