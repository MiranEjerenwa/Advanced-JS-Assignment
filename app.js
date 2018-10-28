const hideAll = function () {
    $('.pane').hide();
}
const view=function() { 
    hideAll();
    let data='';
    for (let i = 0; i < employeeList.length; i++) {
        data += `<p>${employeeList[i].name}</p> 
        <p>${employeeList[i].officeNum}</p> 
        <p>${employeeList[i].phoneNum}</p>`;
    }
    $('.view').html(data);
    $('.view').render ();
}
const showAdd = function () {
    hideAll();
    $('.add').render ();
    
}

// $('.addItem').on('click', function () {
//     const theName = $('.name').val();
//     const officeNum = $('.officeNumber').val();
//     const thePhoneNum = $('.phoneNumber').val();
    

//     const newEmployee = {
//    theName: theName,
//    officeNum: officeNum,
//    thePhoneNum: thePhoneNum
// };
// console.log(newEmployee);
// }



// Listeners
$('#view').on('click', view);
$('#add').on('click', showAdd);




// styles
// navStyle {
//     backgound: Black;

// }
// // const navStyle = $('header');
// $('header').css('backgound', 'blue');