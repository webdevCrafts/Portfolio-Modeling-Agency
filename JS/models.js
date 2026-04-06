// Select all image-related elements from the DOM
// The actual portrait container
const modelPortraits = document.querySelectorAll('main figure');
// The link with the data-title attribute for lightbox
const modelPortraitLinks = document.querySelectorAll('main figure a[data-title]');
// The images of the models
const modelPortraitImgs = document.querySelectorAll('main figure img');
// Each Model's Bio/Description
const description = document.querySelectorAll('main figcaption  p');
// The measurements for each model
const measurements = document.querySelectorAll('.innerText');

// Enable focus on images for accessibility
   function enableFocus () {
      modelPortraitImgs.forEach(function(element) {
         element.setAttribute('tabindex', '0');
      });
      console.log("focus enabled");
   }

// Set the caption text as the data-title attribute for each link in the model portraits
    for (let i = 0; i < modelPortraitLinks.length; i++) { 
       modelPortraitLinks[i].setAttribute('data-title', description[i].textContent);
       console.log("Model Portrait Link: " + modelPortraitLinks[i].getAttribute('data-title'));  
    }
    

   for (let i = 0; i < modelPortraits.length; i++) {
       // Add mouseover event listener to each model portrait
       modelPortraits[i].addEventListener('mouseover', function() {
         // Show the model's measurements & position them neatly
         measurements[i].style.display = 'block';
         measurements[i].style.position = 'absolute';
         measurements[i].style.top = modelPortraitImgs[i].offsetTop + 'px';

         // Apply blur if the measurements are displayed
            if (measurements[i].style.display === 'block') {
               modelPortraitImgs[i].style.filter = 'blur(5px)';
               modelPortraitImgs[i].style.transition = "filter 0.5s ease";
               modelPortraitImgs[i].style.opacity = 0.5;
               modelPortraitImgs[i].style.transition = "opacity 0.5s ease";
            }
      });

      // When hover is off the model portrait
      modelPortraits[i].addEventListener('mouseout', function() {
         // Hide the model's measurements & return the image to original state
         measurements[i].style.display = 'none';
         modelPortraitImgs[i].style.filter = 'revert';
         modelPortraitImgs[i].style.transition = "filter 0.5s ease";
         modelPortraitImgs[i].style.opacity = 1;
         modelPortraitImgs[i].style.transition = "opacity 0.5s ease";
   }); 
}
   
   for (let i = 0; i < modelPortraitImgs.length; i++) {
      // When focusing on the model's image
      modelPortraitImgs[i].addEventListener('focus', (e) => {
         // Show the model's measurements & position them neatly
         measurements[i].style.display = 'block';
         measurements[i].style.position = 'absolute';
         measurements[i].style.top = modelPortraitImgs[i].offsetTop + 'px';

            // Apply blur if the measurements are displayed 
            if (measurements[i].style.display === 'block') {
               modelPortraitImgs[i].style.filter = 'blur(5px)';
               modelPortraitImgs[i].style.transition = "filter 0.5s ease";
               modelPortraitImgs[i].style.opacity = 0.5;
               modelPortraitImgs[i].style.transition = "opacity 0.5s ease";
            }
      });

    // When focus is lost from the model's image
    modelPortraits[i].addEventListener('focusout', function() {
      // Hide the model's measurements & return the image to original state
        measurements[i].style.display = 'none';
        modelPortraitImgs[i].style.filter = 'revert';
        modelPortraitImgs[i].style.transition = "filter 0.5s ease";
         modelPortraitImgs[i].style.opacity = 1;
         modelPortraitImgs[i].style.transition = "opacity 0.5s ease";
   }); 
}
