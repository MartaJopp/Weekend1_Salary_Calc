//client.js sourced
console.log('JS Sourced');

$(document).ready(readyNow);

//once html loaded - run this
function readyNow(){
$('button').on('click', submitButtonSalary);
$('button').on('click', addTheInputs);
$('#deletebutton').on('click', deleteEmployees);
//$('button').on('click', hopeThisWorks);
}//end readyNow function

//variable to store the Monthly Costs of Employees
var totalMonthlyCosts = 0;
//function to add append salary to field and add total of monthly costs
function submitButtonSalary(){
  console.log ('button clicked');
  console.log ($('#salary').val());
  var empSalary = parseInt($('#salary').val());
  var empMonthlySalary = Math.round(empSalary/12);
  totalMonthlyCosts = (totalMonthlyCosts + empMonthlySalary);
  $('#Money').text(totalMonthlyCosts);
  console.log (totalMonthlyCosts);
}//end submitButton function

function addTheInputs(){
  //check to make sure button connected
  console.log ('button for addTheInputs');
  //change firstName input to variable for ease
  var firstName = ($('#firstName').val());
  var lastName = ($('#lastName').val());
  var idNumber = ($('#idNumber').val());
  var jobTitle = ($('#jobTitle').val());
  var annualSalary = ($('#salary').val());
  console.log ($('#firstName').val());
  //console.log input info
  console.log('first Name: ' + firstName);
  console.log('salary: ' + newEmployee);
//appending to table
$('#theTable').append('<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + idNumber + '</td><td>' + jobTitle + '</td><td>' + annualSalary + '</td></tr>');
//clearing the input fields
$('.employee').val('');
}

function deleteEmployees(){
  console.log('deleteEmployees');
}
//end addTheInputs function
/*
function hopeThisWorks() {
  console.log('insert works');
 empFirstName[i].push( $inputFirstName.value );
 $('.content').append(empFirstName);

 clearAndShow();//
}//end function insert
$(this).text();
var color = $(this).text(); // NOTE: The button text is 'red' & 'yellow'
// Get the current block count from the HTML and convert to an Integer
var currentBlockCount = parseInt($('#' + color + 'BlockCount').text());
// Add one
currentBlockCount += 1;
// Set the block count to be the new number
$('#' + color + 'BlockCount').text(currentBlockCount);

*/
var firstNameIn = ($('#firstName').val());
var newEmployee = ($('.employee').val());

var EmployeeInformation = function(firstNameIn, newEmployee) {
  this.firstname = firstNameIn;
  this.salary = newEmployee;
};
console.log(EmployeeInformation);
