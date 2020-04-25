const nameField = document.getElementById("name").focus(); //on page load, the cursor appears in the "Name" field, ready for a user to type
const otherField = document.getElementById("other-title").style.display = "none"; //hides the "other-title" field I added to the HTML



/*** T-SHIRT SECTION ***/
const selectAShirt = document.querySelector('#design option').hidden = true;  //hides the "select theme" option in the "Design" menu.
let colorSelect = document.getElementById("color"); //selects the color Select by ID and stores it in "colorSelect".
let colorOptions = colorSelect.options; //selects the option in the colorSelect dropdown menu

$(colorOptions).hide(); //hides all the options

const opt = document.createElement("option"); // creates an option element and stores it in "opt"
opt.value = "selectshirt"; //sets the value of opt
opt.text = "Please select a T-shirt theme"; //sets the text value of opt
opt.hidden = true;
opt.selected = true;
colorSelect.add(opt, colorSelect.options[0]); //adds opt to colorSelect as first child

$('#design').change(function(){ //creates a click event that triggers when a change is made to the select element
    $(colorOptions).hide(); //clears the color options (basically a reset)
    const selectedValue = $('#design').val(); //stores the value of user selection in "selectedValue"
    if (selectedValue === "js puns") { //if selectedValue equals "js puns" then
    $(colorOptions[1]).show(); //show options 1-3
    $(colorOptions[2]).show();
    $(colorOptions[3]).show();
    colorOptions[1].selected = true; //sets the 1st option as selected
    } else if (selectedValue === "heart js"){ //else if selectedValue equals "heart js" then
        $(colorOptions[4]).show(); //show options 4-6
        $(colorOptions[5]).show();
        $(colorOptions[6]).show();
        colorOptions[4].selected = true; //sets the 4th option as selected
        }
});


/*** ACTIVITIES SECTION ***/
let activityCostDiv = document.createElement("DIV"); //creates a new Div element and stores it in "activityCostDiv"
let activityCost = document.createElement("P").textContent = 0; //creates a P element, sets it's value to 0 and stores it in "activityCost"
activityCostDiv.append(activityCost); //appends activityCost to activityCostDiv
document.querySelector(".activities").appendChild(activityCostDiv); //appends the activityCost Div to the .activities section

const checkboxes = document.querySelectorAll('.activities input'); //stores all of the activities section's checkboxes in "checkboxes"

/** Event Listener ***/
document.querySelector('.activities').addEventListener('change', (e) => { //creates an event listener on .activities section and listens for a change event
    let clicked = e.target; //var to store the clicked checkbox input
    let clickedCost = clicked.getAttribute(`data-cost`); //stores the clicked checkbox data-cost attribute in "clickedCost"
    let clickedDateTime = clicked.getAttribute(`data-day-and-time`); //stores the clicked checkbox data-cost attribute in "clickedDateTime"
    console.log(clickedDateTime);

    /** The  ***/
    

    /** To disable conflicting checkboxes ***/
    for (let i =0; i < checkboxes.length; i += 1) { //for loop the length of checkboxes
        let checkboxDateTime = checkboxes[i].getAttribute(`data-day-and-time`); //var to store the "data-day-and-time" of each of the checkboxes
        if (clickedDateTime === checkboxDateTime && clicked !== checkboxes[i]) { //if the clickedDateTime is equal to checkboxDateTime && clicked is not equal to this iteration of checkboxes then ->
          if (clicked.checked) { //if clicked is checked
            checkboxes[i].disabled = true; //change checkboxes disabled property to true
          } else {
            checkboxes[i].disabled = false; // else change checkboxes disabled property to false
          }
        }
      }
});






/*** PAYMENT SECTION ***/
document.querySelector('#payment option[value="select method"]').hidden = true; //hides the "Select Payment Method" option
document.querySelector('#payment option[value="credit card"]').selected = true; //sets the "credit card" option as selected

$("#paypal").hide(); //hides the paypal div
$("#bitcoin").hide(); //hides the bitcoin div

$("#payment").change(function(){
    const selectedPayment = $('#payment').val();
    if (selectedPayment === "credit card") { //if selectedPayment equals "credit card" then only show credit card div
        $("#credit-card").show(); 
        $("#paypal").hide();
        $("#bitcoin").hide();
    } else if (selectedPayment === "paypal"){ //else if selectedPayment equals "paypal" then only show paypal div
        $("#credit-card").hide();
        $("#paypal").show();
        $("#bitcoin").hide();
        } else { // else only show bitcoin
            $("#credit-card").hide(); 
            $("#paypal").hide();
            $("#bitcoin").show();
        }
});