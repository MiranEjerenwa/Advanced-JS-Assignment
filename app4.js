 const verifyName = function () {
    // Gathering user input and initializing variable 'listStatus'.
    const nameVal = $('#nameInp').val();
    let listStatus = false;
 
    // Loop through employeeList and set the listStatus to 'true' or 'false' based on userinput value.
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === nameVal) {
            listStatus = true;
            break
        } else {
            listStatus = false;
        }
    }
 
    // Based on booloean value of listStatus, use html method to alert user of action status.
    if (listStatus == true) {
        $('#scroll').html(nameVal.fontcolor("DarkBlue").bold() + ' is in the employee list');
 
    } else {
        $('#scroll').html(nameVal.fontcolor("DarkRed").bold() + ' not in the employee list');
 
    }
 
    // After performing our actions, clear the input values and re-render the list
    $('#nameInp').val('');
 
 }
 // Listening for user to click the Verify menu option.
 $(`#verify`).on(`click`, showVerifyInput);
 $('#verifyButton').on('click', verifyName);
 
 
 
 
 //  When the Update button is pressed, allows the user to input name, office number, and phone number and then update the office number and phone number
 //  of the employee that matches the input name, and then renders the updated employee list.
 const updateName = function () {
    let onEmployeetList = false;
 
    // Gathering user input.
    const nameVal = $('#nameInp').val();
    const officeVal = $('#officeNumInp').val();
    const phoneVal = $('#phoneNumInp').val();
 
    // If selected empoyee is on the list, update with new employee infomation.
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === nameVal) {
            employeeList[i].name = nameVal;
            employeeList[i].officeNum = officeVal;
            employeeList[i].phoneNum = phoneVal;
            onEmployeetList = true;
        }
    }
 
    // Alert user of action staus.
    $('#scroll').html('Directory has been updated');
 
    // If selected employee name not in the list, alert user.
    if (onEmployeetList == false) {
        $('#scroll').html(nameVal.fontcolor("DarkRed").bold() + ' is not in the Directory');
    }
 
 
    // After performing our actions, clear the input values and re-render the list
    $('#nameInp').val('');
    $('#officeNumInp').val('');
    $('#phoneNumInp').val('');
    render();
 
 }
 // Listening for user to click the Update menu option.
 $(`#update`).on(`click`, showUpdateInput);
 $('#updateButton').on('click', updateName);