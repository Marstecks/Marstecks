var username = document.getElementById('username');
var password = document.getElementById('password');
var email = document.getElementById('email');
var form = document.getElementsByTagName('form');


function verify(){
    if ( username.value != "Marvelous" ) {
        alert(
            "Incorrect username"
        );    
        form[0].action = " ";
}
    else if (password.value != "marvel1@") {
        alert(
            "Incorrect password  "
        );    
        form[0].action = " ";
    }
    else if(email.value != "marvelouschibuike374@gmail.com" ) {
        alert(
            "Incorrect email"
        );    
        form[0].action = " ";
    }
        else{
             form[0].action = "../index.html";
    
            }


   }