// Welcome Message
console.log("Welcome to Swikaar Samlall's Portfolio");

// Contact Form
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(event){

        event.preventDefault();

        alert("Thank you for your message!");

        form.reset();

    });

}

// Skills Dropdown

const buttons = document.querySelectorAll(".skill-btn");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        const content = this.nextElementSibling;

        if(content.style.display === "block"){

            content.style.display = "none";

        }else{

            content.style.display = "block";

        }

    });

});