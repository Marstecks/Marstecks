
function confirm(){
    var confirmPassword = document.getElementById('confirm-password');
var password = document.getElementById('password');
var form = document.getElementsByTagName('form');

    if (password.value != "" && confirmPassword.value != "") {
        if (password.value == confirmPassword.value ) {
            return true;
        } else {
            alert(
                "Password Unconfirmed"
            );
            return false;  
            form[0].action = '' ;
        }   
}
 }