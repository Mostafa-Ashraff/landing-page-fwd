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
let links = document.getElementsByClassName('menu__link');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
let isInViewport = function (sect) {
    let top = sect.offsetTop;
    let left = sect.offsetLeft;
    let width = sect.offsetWidth;
    let height = sect.offsetHeight;

    while(sect.offsetParent) {
    sect = sect.offsetParent;
    top += sect.offsetTop;
    left += sect.offsetLeft;
    }

    return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
    );
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
}
console.log(links);
// Scroll to anchor ID using scrollTO event
for(link of links){
    link.addEventListener('click', ()=>{
        let element = document.getElementById(link.getAttribute('data__link'));
        element.scrollIntoView({behavior:'smooth', block:'start'})
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.body.addEventListener('DOMContentLoaded', buildNav());
// Scroll to section on link click
// Set sections as active

window.addEventListener('scroll', isActive)