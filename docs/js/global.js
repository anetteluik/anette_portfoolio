// DEFINE FUNCTIONS
let select = function(s) {
        return document.querySelector(s);
}

// DEFINING ELEMENTS
let navMenuButton = select('.navbar-drop');
let brgr = select('#burger')

// HANDLE EVENTS
if (brgr && navMenuButton) {
    brgr.onclick = function() {
        navMenuButton.classList.toggle('active');
    }
}