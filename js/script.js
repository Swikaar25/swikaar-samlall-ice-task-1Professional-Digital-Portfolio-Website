// Code Attribution:
// Title: JavaScript Console Log
// Author: W3Schools
// Date: 13 September 2026
// Version: 1
// Availability: https://www.w3schools.com/js/js_output.asp

// logging greeting message to browser console
console.log("Welcome to Swikaar Samlall's Portfolio");


// Code Attribution:
// Title: JavaScript Event Listener & Form Prevention
// Author: W3Schools
// Date: 13 September 2026
// Version: 1
// Availability: https://www.w3schools.com/js/js_htmldom_eventlistener.asp

// select contact form element from page
const form = document.querySelector("form");

// check if contact form exists on current page
if (form) {

    // listen for user submitting form
    form.addEventListener("submit", function(event) {

        // stop form from reloading browser page
        event.preventDefault();

        // pop up thank you confirmation box
        alert("Thank you for your message! I will respond as soon as possible.");

        // reset input text fields back to empty
        form.reset();

    });

}


// Code Attribution:
// Title: How To Create Accordions / Collapsible Content with JS
// Author: W3Schools
// Date: 13 September 2026
// Version: 1
// Availability: https://www.w3schools.com/howto/howto_js_accordion.asp

// grab all skill drop down buttons
const skillButtons = document.querySelectorAll(".skill-btn");

// loop through each skill button found
skillButtons.forEach(function(button) {

    // set element type attribute to standard button
    button.setAttribute("type", "button");

    // set default screen reader expanded state to false
    button.setAttribute("aria-expanded", "false");

    // add click listener to handle expanding and collapsing
    button.addEventListener("click", function() {

        // grab next element container holding skill text
        const content = this.nextElementSibling;

        // check if content panel is currently showing
        const isOpen = content.style.display === "block";

        // toggle visibility state based on current view status
        if (isOpen) {

            // hide content panel on click
            content.style.display = "none";

            // update aria attribute to closed status
            this.setAttribute("aria-expanded", "false");

        } else {

            // show content panel on click
            content.style.display = "block";

            // update aria attribute to expanded status
            this.setAttribute("aria-expanded", "true");

        }

    });

});