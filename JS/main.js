// Enable focus on all links and areas for accessibility
// SITE ENHANCEMENT #3: JS for DOM Modification
function enableFocus () {
    let focusableElements = document.querySelectorAll('a, area');
    focusableElements.forEach(function(element) {
        element.setAttribute('tabindex', '0');
    });
    console.log("focus enabled");
}

// Change Three Lines to a black image on light mode 
let lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
let burgerIcon = document.querySelector('#burger-menu img');
  // Is light mode on?
  if (lightModeMediaQuery.matches) {
    console.log("light mode detected: changing burger menu icon to black");
    burgerIcon.src = '../icons/black-burger-menu.png';
} else {
  // Is dark mode on?
    console.log("dark mode detected: changing burger menu icon to white");
    burgerIcon.src = '../icons/white-burger-menu.png';
}

// Burger Menu Variables
let bg = document.querySelector('main');
let button = document.getElementById('burger-menu');
let sidebar = document.getElementById('pop-item');
let windowWidth = window.innerWidth;

// Reveal Sidebar
function showSidebar() {
    bg.style.opacity = 0.2;
    bg.style.transition = "opacity 0.5s ease";
    button.style.rotate = "90deg";
    button.style.transition = "rotate 0.5s ease";
    sidebar.style.display = "block";
}

// Fade away sidebar onclick outside of sidebar
document.addEventListener('click', (e) => {
    if (!e.target.closest('#pop-item') && !e.target.closest('button')) {
        bg.style.opacity = 1;
        bg.style.transition = "opacity 0.5s ease";
        button.style.rotate = "0deg";
        button.style.transition = "rotate 0.5s ease";
        sidebar.style.display = "none";
 } 
});

// Fade away sidebar on off focus
window.addEventListener('focusout', (e) => {
    if (!e.target.closest('#pop-item') && !e.target.closest('button')) {
        bg.style.opacity = 1;
        bg.style.transition = "opacity 0.5s ease";
        button.style.rotate = "0deg";
        button.style.transition = "rotate 0.5s ease";
        sidebar.style.display = "none";
    }
});

// Fade away sidebar on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 700) {
        bg.style.opacity = 1;
        bg.style.transition = "opacity 0.5s ease";
        button.style.rotate = "0deg";
        button.style.transition = "rotate 0.5s ease";
        sidebar.style.display = "none";
    }
});
