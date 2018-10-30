// function to dynamically hide all panes
const hideAll = function () {
    $('.pane').hide();
}
// function to dynamically allow revealing each pane
const view = function () {
    hideAll();
    let data = '';
    for (let i = 0; i < employeeList.length; i++) {
        data += `<div style = 'border: 0.5px solid gray; margin-bottom: 2.5px; width: 400px; line-height: 28px;'>${employeeList[i].name} 
    <section>${employeeList[i].officeNum}</section> 
    <section>${employeeList[i].phoneNum}</section> </div>`;
    }
    $('.view').html(data);
    $('.view').render();
}

const showAdd = function () {
    hideAll();
    $('.add').render();
    $('.view').render();
}
const showVerify = function () {
    hideAll();
    $('.verify').render();
}
const showUpdate = function () {
    hideAll();
    $('.update').render();
}
const showDelete = function () {
    hideAll();
    $('.delete').render();
}

// Function to add an employee
var itemAdd = function () {
    // Declare object to hold user input
    const newEmployee = {
        name: '',
        officeNum: 0,
        phoneNum: ''
    };
    // collect user input
    const newName = $('.name').val();
    const newOfficeNumber = $('.officeNumber').val();
    const newPhoneNumber = $('.phoneNumber').val();

    // Add user input to declared object
    newEmployee.name = newName;
    newEmployee.officeNum = newOfficeNumber;
    newEmployee.phoneNum = newPhoneNumber;
    // OR
    // items = `<div style = 'border: 0.5px solid gray; margin-bottom: 2.5px; width: 400px; line-height: 28px;'>${newName} 
    //  <section>${newOfficeNumber}</section> 
    //  <section>${newPhoneNumber}</section> </div>`;

    // Add new employee to the list
    // $('.view').html(items);
    // employeeList.push(items);
    // $('.view').render ();
    // $('.view').append(items);
    employeeList.push(newEmployee);//saying undefined??

    alert(`${newEmployee.name} has been added !`);

    // clear input 
    $('.name').val('');
    $('.officeNumber').val('');
    $('.phoneNumber').val('');
   
    // render();
}
// $('#searchItem').css('background-color', 'red');

// function to verify employee

const verifyEmp = function () {
    //  user input
    const nameVal = $('#verifyNameField').val();
    let empStatus = false;
    // Loop through employeeList and set the 'empStatus' to 'true' or 'false' based on userinput value.
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === nameVal) {
            empStatus = true;
            break
        } else {
            empStatus = false;
        }
    }
 
    // Based on booloean value of empStatus, alert user of  status.
    if (empStatus == true) {
        alert(`${nameVal} is one of us !`);
    } else {
        alert(`${nameVal} is NOT one of us !`);
    }
 
    // After performing our actions, clear the input values and re-render the list
    $('#verifyNameField').val('');
} 

// function to delete employee

const deleteRec = function () {
    let existingEmployee = false;
    // user input
const deleteName = $('#delName').val();
// If entered name exists, delete the name
for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === deleteName) {
        employeeList.splice(i, 1);
        existingEmployee = true;

        alert(`${deleteName} has been removed !`);

        // If employee is not on the list
if (existingEmployee = false) {
    alert (`'invald employee name, please enter a different name'`);
    }
        // clear input 
        $('#delName').val('');
    }
}

}


// function to update employeeList
const updateRec = function () {
    let existingEmployeetList = false;
    // user input.
    const nameVal = $('.name').val();
    const officeVal = $('.officeNumber').val();
    const phoneVal = $('.phoneNumber').val();
    // If selected empoyee is on the list, update with new employee infomation.
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === nameVal) {
            employeeList[i].name = nameVal;
            employeeList[i].officeNum = officeVal;
            employeeList[i].phoneNum = phoneVal;
            existingEmployeetList = true;
        }
    }
    if (existingEmployeetList == false) {
        alert (`'invald employee data'`);
    }
}
 
//function to verify employee

// let verifierImp;

// verifierImp ===true
// if (verifierImp === true) {
//     $('.verifyNameField').val() = employeeList.indexOf([]);
//     alert(verifierImp + ' is an employee !')
// }
// else if (verifierImp === false) {
//     employeeList.indexOf([]);
//     alert(' Not an employee !')
//     render ();
// }






// listeners to call each function
$('#view').on('click', view);
$('#add').on('click', showAdd);
$('#verify').on('click', showVerify);
$('#update').on('click', showUpdate);
$('#delete').on('click', showDelete);
$('#addItem').on('click', itemAdd);
// $('#searchItem').on('click', verifierImp);
$('#searchItem').on('click', deleteRec);
$('#fix').on('click', updateRec);
$('#lookup').on('click', verifyEmp);
