const hideAll = function () {
    $('.pane').hide();
}

const view=function() { 
    hideAll();
    let data='';
    for (let i = 0; i < employeeList.length; i++) {
        data += `<p>${employeeList[i].name}</p> <p>${employeeList[i].officeNum}</p> <p>${employeeList[i].phoneNum}</p>`;
    }
    $('.view').html(data);
    $('.view').render ();
}

const showAdd = function () {
    hideAll();
    $('.add').render ();
    
}




// Listeners
$('#view').on('click', view);
$('#add').on('click', showAdd);

