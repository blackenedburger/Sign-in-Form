/*
const firstName = document.getElementById('firstName');
const button2 = document.querySelector("button");
button2.addEventListener("click", function(event) {
    console.log("firstName").value;
});
*/

//const lName = document.getElementById("lastName").value;
//const email  = document.getElementById("email").value;;
//const pNumber = document.getElementById("phoneNumber").value;
//const pWord1  = document.getElementById("password").value;;
//const pWord2 = document.getElementById("password2").value;


const button = document.querySelector('#buttonInput'); // select the button element
const results = document.querySelector("#results");  // select the results div
const para = document.createElement("p");   // creates a <p> tag

const fName  = document.querySelector("#firstName");;





button.addEventListener('click', () => { // add a click event listener
    //e.preventDefault(); // important to stop the form from actually submitting.
    console.log('Button clicked!'); // do something when the button is clicked
    console.log((fName).value);
    console.log(document.querySelector('#firstName').value);
  
    //console.log("document.forms[1]", inputs)[1].innerHTML;
    para.append((fName).value);
  
    console.log(results);
    para.setAttribute('style','width:50px;');
    para.setAttribute('style','background-color:white;');
    results.appendChild(para);

});



/*
if (document.forms[0].value === "a") {
    formElement.addEventListener('submit', (event) => {
        console.log("clicked");
    })
}else{
        console.log(firstName);
        console.log(user_name);
}   

*******

const button = document.querySelector('button'); // select the button element

button.addEventListener('click', () => { // add a click event listener
  console.log('Button clicked!'); // do something when the button is clicked
});
*/

/*
try to access the element by input#firstName after documennt.querySelector("form");

    // input area //
    email.addEventListener("input", (event) => {
        // Each time the user types something, we check if the
      // form fields are valid.
      if (email.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.textContent = ""; // Reset the content of the message
        emailError.className = "error"; // Reset the visual state of the message
      } else {
        // If there is still an error, show the correct error
        showError();
      }
    });
*/

// add in required to password html tags


//connect the submit button so that it prints in the console.log to test it
        // change the password type to posting it in console.log like in index12.html

// check to see if the passwords are the same
        // if same turn red x to green Checkmark 

// when submit is pressed console.log the info
        // if submit is pressed and they dont match an error message comes up


//move button over

// make input areas bigger for tablet media querie

// fix the bottom grey area when it is resized

// media queries to display login on the top picture on the bottom

// media queries to fix it for tablets

// fix the border shrinking from the top, maybe

// make logo and logo strip

//remove border colors
