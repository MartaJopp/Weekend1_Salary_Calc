//client.js sourced
console.log('JS Sourced');

$(document).ready(readyNow);

//once html loaded - run this
function readyNow(){
$('button').on('click', submitButton);


}//end readyNow function

var numOfEmployees = 0;
var totalAnnualSalary = 0;

var $avgMonthlySalaryCost = 0;
function submitButton(){
  console.log ('button clicked');
  console.log ($('.employee').val());
  var empSalary = parseInt($('.employee').val());
  $('.content').append(empSalary);
  totalAnnualSalary = (totalAnnualSalary + empSalary);
  $('#Money').text(totalAnnualSalary);
  console.log (totalAnnualSalary);
}//end submitButton function
$(this).text();
var color = $(this).text(); // NOTE: The button text is 'red' & 'yellow'
// Get the current block count from the HTML and convert to an Integer
var currentBlockCount = parseInt($('#' + color + 'BlockCount').text());
// Add one
currentBlockCount += 1;
// Set the block count to be the new number
$('#' + color + 'BlockCount').text(currentBlockCount);
