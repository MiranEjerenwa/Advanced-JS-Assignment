// function to dynamically hide all panes
const hideAll = function () {
    $('.pane').hide();
    }
    // function to dynamically allow revealing each pane
    const view=function() { 
    hideAll();
    let data='';
    for (let i = 0; i < employeeList.length; i++) {
    data += `<div style = 'border: 0.5px solid gray; margin-bottom: 2.5px; width: 400px; line-height: 28px;'>${employeeList[i].name} 
    <section>${employeeList[i].officeNum}</section> 
    <section>${employeeList[i].phoneNum}</section> </div>`;
    }
    $('.view').html(data);
    $('.view').render ();
    }
    
    const showAdd = function () {
    hideAll();
    $('.add').render ();
    $('.view').render ();
    }
    const showVerify = function () {
        hideAll();
        $('.verify').render ();
        }
    const showUpdate = function () {
        hideAll();
        $('.update').render ();
        }
    const showDelete = function () {
            hideAll();
            $('.delete').render ();
            }

    // var itemAdd = $('.content').append('');
var itemAdd = function () {
    const newName = $('.name').val();
    const newOfficeNumber = $('.officeNumber').val();
    const newPhoneNumber = $('.phoneNumber').val();
   items = `<div style = 'border: 0.5px solid gray; margin-bottom: 2.5px; width: 400px; line-height: 28px;'>${newName} 
    <section>${newOfficeNumber}</section> 
    <section>${newPhoneNumber}</section> </div>`;

    // $('.view').html(items);
    // employeeList.push(items);
    // $('.view').render ();
    $('.view').append(items);
    employeeList.push(items);
    $('.view').render ();
}


        

// Functions to add an employee


// const itemAdd = function () {

//     const theName = $('.name').val();
//     const officeNum = $('.officeNumber').val();
//     const thePhoneNum = $('.phoneNumber').val();
//     Console.log(val);

// }
//     // styles
// $('.sidebar').css('backgound','blue');
// $('.content').css('background-color', 'blue');


// listeners to call each function
$('#view').on('click', view);
$('#add').on('click', showAdd);
$('#verify').on('click', showVerify);
$('#update').on('click', showUpdate);
$('#delete').on('click', showDelete);
$('#addItem').on('click', itemAdd);

