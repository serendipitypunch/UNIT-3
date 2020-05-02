                                    /*
                                  */
                                  /*
                                */
                                /*
                            MICHAEL SHERRY
                            TREEHOUSE TECH DEGREE - UNIT 3
                            */
 /* * * * * * * * * * * * * / 
/******************************************************** 
    BASIC INFO SECTION
********************************************************/
let nameField = document.getElementById('name'); //selects the name field by id and stores in NameField
nameField.focus(); //on page load, the cursor appears in the "Name" field, ready for a user to type
let otherField = document.getElementById('other-title') //gets other-title and stores in otherField
otherField.style.display = 'none'; //change otherField display property to none
let otherFieldLabel = document.querySelector('.other-job-label') //gets .other-job-label and stores in otherField
otherFieldLabel.style.display = 'none'; //change otherFieldLabel display property to none
const titleDropdown = document.getElementById('title');


/*** Event handler to hide/unhide Other field ***/
$(title).change(function(){
    const selectedJob = $('#title').val(); //stores the value of user selection in "selected"
    if (selectedJob === 'other'){
        // console.log('Unhide!!!!');
        otherField.style.display = '';
        otherFieldLabel.style.display = '';
    } else {
        // console.log('Hide!!!!');
        otherField.style.display = 'none';
        otherFieldLabel.style.display = 'none';
    }
});


/******************************************************** 
    T-SHIRT SECTION
********************************************************/
const selectAShirt = document.querySelector('#design option').hidden = true;  //hides the "select theme" option in the "Design" menu.
let colorSelect = document.getElementById('color'); //selects the color Select by ID and stores it in "colorSelect".
let colorOptions = colorSelect.options; //selects all options in the colorSelect dropdown menu
$('#colors-js-puns').hide(); //hides the color Select dropdown and title

$(colorOptions).hide(); //hides all the  color options

const opt = document.createElement('option'); // creates an option element and stores it in "opt"
opt.value = 'selectshirt'; //sets the value of opt
opt.text = 'Please select a T-shirt theme'; //sets the text value of opt
opt.hidden = true; //hides opt
opt.selected = true; //sets opt as selected
colorSelect.add(opt, colorSelect.options[0]); //adds opt to colorSelect as first child

$('#design').change(function(){ //creates a click event that triggers when a change is made to the select element
    $('#colors-js-puns').show(); //shows the color select and it's title
    $(colorOptions).hide(); //clears the color options (basically a reset)
    const selectedValue = $('#design').val(); //stores the value of user selection in "selectedValue"
    if (selectedValue === 'js puns') { //if selectedValue equals "js puns" then
    $(colorOptions[1]).show(); //show options 1-3
    $(colorOptions[2]).show();
    $(colorOptions[3]).show();
    colorOptions[1].selected = true; //sets the 1st option as selected
    } else if (selectedValue === 'heart js'){ //else if selectedValue equals "heart js" then
        $(colorOptions[4]).show(); //show options 4-6
        $(colorOptions[5]).show();
        $(colorOptions[6]).show();
        colorOptions[4].selected = true; //sets the 4th option as selected
        }
});

/******************************************************** 
    ACTIVITIES SECTION
********************************************************/
let activityCostCounter = 0;
let activityCostDiv = document.createElement('DIV'); //creates a new Div element and stores it in "activityCostDiv"
let activityCost = document.createElement("P") //creates a P element, sets it's value to 0 and stores it in "activityCost"
activityCostDiv.className = 'activity-total';
activityCostDiv.appendChild(activityCost); //appends activityCost to activityCostDiv
document.querySelector(".activities").appendChild(activityCostDiv); //appends the activityCost Div to the .activities section

const checkboxes = document.querySelectorAll('.activities input'); //stores all of the activities section's checkboxes in "checkboxes"
activityCost.textContent = `Total: $${activityCostCounter}`;

/** Event Listener ***/
document.querySelector('.activities').addEventListener('change', (e) => { //creates an event listener on .activities section and listens for a change event
    let clicked = e.target; //var to store the clicked checkbox input
    let clickedCost = clicked.getAttribute(`data-cost`); //stores the clicked checkbox data-cost attribute in "clickedCost"
    let clickedDateTime = clicked.getAttribute(`data-day-and-time`); //stores the clicked checkbox data-cost attribute in "clickedDateTime"

    /** Activity Cost Total ***/
    if (clicked.checked) { //if the clicked checkbox has the property of checked then ->
        activityCostCounter = activityCostCounter + +clickedCost; //add the total integer value of clickedCost to activityCostCounter then store it in activityCostCounter
    } else { //else subtract the value and store
        activityCostCounter = activityCostCounter - +clickedCost;
    }
    
    activityCost = `Total: $${activityCostCounter}`; //using interpolation to concatenate a string with the value of activityCounter and stores in activityCost
    activityCostDiv.textContent = activityCost; //sets activityCostDiv innerText

/******************************************************** 
    Still need to add message to conflicting boxes!
********************************************************/

    /** Disable conflicting checkboxes ***/
    for (let i =0; i < checkboxes.length; i += 1) { //for loop the length of checkboxes
        let checkboxDateTime = checkboxes[i].getAttribute(`data-day-and-time`); //var to store the "data-day-and-time" of each of the checkboxes
        if (clickedDateTime === checkboxDateTime && clicked !== checkboxes[i]) { //if the clickedDateTime is equal to checkboxDateTime && clicked is not equal to this iteration of checkboxes then ->
          if (clicked.checked) { //if clicked is checked
            checkboxes[i].disabled = true; //change checkboxes disabled property to true
            checkboxes[i].parentElement.style.color = '#fff'; //changes the disabled checkbox text to white
            checkboxes[i].parentElement.style.textDecoration = 'line-through black'; //crosses out the disabled checkboxes
          } else {
            checkboxes[i].disabled = false; // else change checkboxes disabled property to false
            checkboxes[i].parentElement.style.color = ''; //removes the checkbox text color style
            checkboxes[i].parentElement.style.textDecoration = ''; //removes the checkbox text decoration style
          }
        }
      }
});



/******************************************************** 
    PAYMENT SECTION
********************************************************/
document.querySelector('#payment option[value="select method"]').hidden = true; //hides the "Select Payment Method" option
document.querySelector('#payment option[value="credit card"]').selected = true; //sets the "credit card" option as selected
let selectedPayment = $('#payment').val(); //gets value of payment select and stores in selectedPayment

$('#paypal').hide(); //hides the paypal div
$('#bitcoin').hide(); //hides the bitcoin div

$("#payment").change(function(){
    const selectedPayment = $('#payment').val();
    if (selectedPayment === "credit card") { //if selectedPayment equals "credit card" then only show credit card div
        $('#credit-card').show(); 
        $('#paypal').hide();
        $('#bitcoin').hide();
    } else if (selectedPayment === 'paypal'){ //else if selectedPayment equals "paypal" then only show paypal div
        $('#credit-card').hide();
        $('#paypal').show();
        $('#bitcoin').hide();
        } else { // else only show bitcoin
            $('#credit-card').hide(); 
            $('#paypal').hide();
            $('#bitcoin').show();
        }
});

/******************************************************** 
    VALIDATION SECTION
********************************************************/
let form = document.querySelector('form');
let emailField = document.getElementById('mail'); //selects the name field by id and stores in emailField
let activitySection = document.querySelector('fieldset.activities');
let cCNum = document.getElementById('cc-num'); //selects the cc number field by id and stores in cCNum
let cCZip = document.getElementById('zip'); //selects the cc zip code field by id and stores in cCZip
let cCCVV = document.getElementById('cvv'); //selects the cc cvv field by id and stores in cCCVV


/** Name Field Validator Function ***/
function isValidName(name) {
    return /^[a-zA-Z0-9]+$/.test(name)
}

/** Email Validator Function ***/
function isValidEmail(email) {
    return /[^@]+@[^@.]+\.[a-z]+/i.test(email)
}

/** Activities Section Validator Function ***/
function isChecked(check) {
    if (check >= 1) { //if check is greater than or equal to 1 then ->
        return true
    } else {
        return false
    }
}

/** CC Number Field Validator Function ***/
function creditCardNumIsValid(number) {
    return /\d{13,16}/.test(number)
}

/** CC Zip Code Field Validator Function ***/
function creditCardZipIsValid(zipcode) {
    return /\d{5}/.test(zipcode)
}

/** CC CVV Validator Function ***/
function creditCardCVVIsValid(cvv) {
    return /\d{3}/.test(cvv)
}

/*********************************/
/** CREATE ERROR MESSAGE FUNCTION ***/
/*********************************/
function createErrorMessage(caller, message) {
    let nameErrorMessage = document.createElement("DIV")
        nameErrorMessage.className = "error-message";
        nameErrorMessage.innerHTML =  `<h5>${message}</h5>`;
        $(caller).after(nameErrorMessage);
}




/*********************************/
/** MASTER VALIDATION FUNCTION ***/
/*********************************/
function masterValidate(e) {
    const fieldBorderColor = '2px solid rgb(111, 157, 220)'; //a variable to store the original field border color
    $('.error-message').remove(); //a removes any error messages (basically a reset)
    let numberOfCheckedBoxes = document.querySelectorAll('input[type="checkbox"]:checked').length
    

    if (!isValidName(nameField.value)) { //Check name field
        e.preventDefault();
        nameField.style.border = '2px solid rgb(255, 0, 0)';
        createErrorMessage('#name', 'Please type a name');
    } else {
        nameField.style.border = fieldBorderColor;
    }

    if (!isValidEmail(emailField.value)) { //Check email field
        e.preventDefault();
        emailField.style.border = '2px solid rgb(255, 0, 0)';
        
        createErrorMessage('#mail', 'Enter a valid email');
    } else {
        emailField.style.border = fieldBorderColor;
    }

    if (!isChecked(numberOfCheckedBoxes)) { //Check to see if at least one activity section is checked field
        e.preventDefault();
        // activitySection.style.border = '2px solid rgb(255, 0, 0)';

        createErrorMessage('.activities', 'Select at least one activity');
    } else {
        // activitySection.style.border = 'none';
    }


    /*************** Credit Card Call ************************/
    if ($('#payment').val() === "credit card") { //check if cc is selected
        if (!creditCardNumIsValid(cCNum.value)) { //Check CC num field
            e.preventDefault();
            cCNum.style.border = '2px solid rgb(255, 0, 0)';
        
            createErrorMessage('#cc-num', 'Enter a valid credit card number');
        } else {
            cCNum.style.border = fieldBorderColor;
        }



        if (!creditCardZipIsValid(cCZip.value)) { //Check CC num field
            e.preventDefault();
            cCZip.style.border = '2px solid rgb(255, 0, 0)';
        
            createErrorMessage('#zip', 'Enter your Zip code');
        } else {
            cCZip.style.border = fieldBorderColor;
        }



        if (!creditCardCVVIsValid(cCCVV.value)) { //Check CC num field
            e.preventDefault();
            cCCVV.style.border = '2px solid rgb(255, 0, 0)';
        
            createErrorMessage('#cvv', 'Enter your 3-digit CVV number');
        } else {
            cCCVV.style.border = fieldBorderColor;
        }
    }
}

form.addEventListener('submit', (e) => {
    masterValidate(e);
});



    // var $regexname=/^[a-zA-Z0-9]+$/;
    // $('#name').on('keypress keydown keyup',function(){
    //          if (!$(this).val().match($regexname)) {
    //             console.log('Wrong');
    //          }
    //        else{
    //             console.log('Right');   
    //            }
    //      });


    /****** WORKING ERROR MESSAGE ******/
        // let nameErrorMessage = document.createElement("DIV")
        // nameErrorMessage.className = "error-message";
        // nameErrorMessage.innerHTML =  '<h5>Error Message!</h5>';
        // $('#name').after(nameErrorMessage);