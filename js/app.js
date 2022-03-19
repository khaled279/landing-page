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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function getAllSections(){
   
    return document.getElementsByTagName('section') ; 
}

function createListItems(){
    let documentFragment = document.createDocumentFragment(); 
    let sections = getAllSections(); 
    let navBarUL = document.getElementById('navbar__list') ; 
    for(let section of sections){
        let listItem = document.createElement('li'); 
        let anchor = document.createElement('a'); 
        anchor.href = `#${section.id}`;
        anchor.target = "_self" ;
        anchor.textContent = section.id ; 
        listItem.appendChild(anchor); 
        documentFragment.appendChild(listItem); 
    }
    navBarUL.appendChild(documentFragment); 
    console.log()
    console.log("createListItem" , "Everything ran smoothly") ;
}
function checkSection(){
    let sections = getAllSections(); 
 for(let section of sections){
    if (window.location.pathname+window.location.hash == `/index.html#${section.id}`) {
     console.log('Viewing contact form' + section.id);
    }
 }
 console.log("checking") ; 
 }

document.addEventListener('scroll',checkSection()) ; 
createListItems(); 

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


console.log("THEY ARE LINKED"); 