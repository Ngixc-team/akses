var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var password = document.getElementById("password").value;
if ( password == "cool"){
alert ("Login successfully");
window.location = "suc.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("password e salah jon"+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
