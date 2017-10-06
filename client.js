//client.js sourced
console.log('JS Sourced');

$(document).ready(readyNow);

//once html loaded - run this
function readyNow(){
$('button').on('click', submitButton);


}//end readyNow function




function submitButton(){
  console.log ('button clicked');
}//end submitButton function
