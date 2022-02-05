/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

let sectionsNumber = document.querySelectorAll('section').length;
let fragment = document.createDocumentFragment();
let nav = document.getElementById('nav');
let ul = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewport (elem) {
    let sectionPosition = elem.getBoundingClientRect();
    return (sectionPosition.top >= -400 && sectionPosition.top <= 150);
} 
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let buildNav = () => {


    ul.setAttribute('class', 'menu');

    fragment.appendChild(ul);

    for(let i = 1; i <= sectionsNumber; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = `#section${i}`;
        a.setAttribute('class', 'menu__link');
        a.setAttribute('data__link', `section${i}`);
        a.textContent = `section ${i}`;
        li.appendChild(a);
        ul.appendChild(li);
    }
    
    fragment.appendChild(ul);
    nav.appendChild(fragment);
}
// Build menu
document.body.addEventListener('DOMContentLoaded', buildNav());

// Add class 'active' to section when near top of viewport
function isActive() {
    for (section of sections){ 
        if (isInViewport(section)){

            if(!section.classList.contains('active')){
                section.classList.add('active');
            }
        
        
    }else {
        section.classList.remove('active');
    }
}
};

// Scroll to anchor ID using scrollTO event
let links = document.getElementsByClassName('menu__link');
let linksNumber = links.length;
/*console.log(links);
console.log(links[2]);
*/

[...links].forEach((link) =>{
    // Scroll to section on link click
    link.addEventListener('click', (el) => {
        el.preventDefault();
        let clickedSection = document.getElementById(link.getAttribute('data__link'));
        clickedSection.scrollIntoView({behavior:'smooth'})
    })
    
});







// Set sections as active

document.addEventListener('scroll', isActive)