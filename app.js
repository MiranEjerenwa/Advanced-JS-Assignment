const hideAll = function () {
    $('.pane').hide();
    $('.pane').css('background-color: black');
    }
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
//     // styles
// $('.sidebar').css('backgound','blue');
// $('.content').css('background-color', 'blue');


// listeners
$('#view').on('click', view);
$('#add').on('click', showAdd);
$('#verify').on('click', showVerify);
$('#update').on('click', showUpdate);
$('#delete').on('click', showDelete);