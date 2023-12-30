


const button = document.querySelector('#buttonInput'); // select the button element
const results = document.querySelector("#results");  // select the results div
const para = document.createElement("p");   // creates a <p> tag
const password1  = document.querySelector("#password");;
const password2  = document.querySelector("#password2");;
const password2Error = document.querySelector("#password2 + span.error");




button.addEventListener('submit', () => {
    console.log(`password1 is ${(password1).value}`);
    console.log(`password2 is ${(password2).value}`);
    if (!password2.validity.valid) {
        console.log('failed because: '); 
        showError();
        event.preventDefault();
    } else if (password2.validity.valid) {
        password2.textContent = ""; // Reset the content of the message
        password2.className = "error"; // Reset the visual state of the message
        console.log("account created!!");
        para.textContent = ("account created!!");
        results.appendChild(para);
    }
});

password2.addEventListener("input", (event) => {
    if (password2.value != password1.value) {
        console.log(`${password2.value} not equal to ${password1.value}`);
        password2.setCustomValidity("Passwords must be the same.");
    } else if (password2.value === password1.value) {
        password2.setCustomValidity("");
    } else if (password2.validity.valid ) {
        password2.textContent = ""; // Reset the content of the message
        password2.className = "error"; // Reset the visual state of the message
        
    } else {
        showError();
    }
});


