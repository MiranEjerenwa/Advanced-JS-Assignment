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
        officeNumber: '',
        phoneNumber: ''
    };
    // collect user input
    const newName = $('.name').val();
    const newOfficeNumber = $('.officeNumber').val();
    const newPhoneNumber = $('.phoneNumber').val();

    // Add user input to declared object
    newEmployee.name = newName;
    newEmployee.officeNumber = newOfficeNumber;
    newEmployee.phoneNumber = newPhoneNumber;
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

    // clear input 
    $('.name').val('');
    $('.officeNumber').val('');
    $('.phoneNumber').val('');
   
    render();
};



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
    }
}

// If employee is not on the list
if (existingEmployee = false) {
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
