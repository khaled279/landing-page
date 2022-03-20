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
// creates all Li and appends them to the UL 
function createListItems(){
    // using document fargment to achieve better performance 
    //(currently it's not making much difference but if we have alot )
    
    let documentFragment = document.createDocumentFragment(); 
   
    // gets all the sections in an HTMLCOLLECTION
    
    const sections = getAllSections();
    const navBarUL = document.getElementById('navbar__list') ; 
    for(let section of sections){
        let listItem = document.createElement('li'); 
        let anchor = document.createElement('a'); 
        anchor.href = `#${section.id}`;
        anchor.target = "_self" ;
        anchor.textContent = section.id ; 
        listItem.appendChild(anchor); 
        //appends li and anchor to the document fragment
        documentFragment.appendChild(listItem); 
    }
    //adds an eventListner to ul and uses event delegation instead of creating an event listener to each anchor
    navBarUL.addEventListener('click', function handleAnchorClicks(event){
            event.preventDefault() ; 
            //checks if the target is actually an anchor if this line 
            // is missing the code will run but there will errors in the console log 
            //anytime anything in the navbar is clicked that's not an anchor
            if(event.target.tagName.toLowerCase() === 'a')
{            const sectionLink = event.target.getAttribute("href"); 
            const section =document.getElementById(sectionLink.substring(1)); 
            section.scrollIntoView({ behavior: 'smooth' }) ;
        }
        }
    ) ; 
    // append the document fragment to the DOM just 1 reflow and 1 redraw
    navBarUL.appendChild(documentFragment); 
    console.log()
    console.log("createListItem" , "Everything ran smoothly") ;
}

// checks which section the user is currently at
function checkSection(){
    let sections = getAllSections(); 
    document.querySelector
    let mainHero = document.querySelector('.main__hero') ; 
// we loop over all sections  
for(let section of sections){
    const menuItem = document.querySelector(`[href="#${section.id}"]`);
  //we check if the if the scroll value is greater than the the offest from the top of the page
    if (scrollY >= section.offsetTop-200) {
    // we remove the active class from all sections to make sure that once we scrolled back
    // the active section is not stuck and we are not highlighting non active section
        for(let removeSection of sections) {
        removeSection.classList.remove('your-active-class'); 
        const otherMenuItems =  document.querySelector(`[href="#${removeSection.id}"]`);
        otherMenuItems.classList.remove('your-active-class'); 
    } 
    // we add the active class to active section to highlight it
     section.classList.add('your-active-class') ; 
     menuItem.classList.add('your-active-class'); 
    }
}
 }
 
createListItems(); 
document.addEventListener("scroll",checkSection) ; 


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