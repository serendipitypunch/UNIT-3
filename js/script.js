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
