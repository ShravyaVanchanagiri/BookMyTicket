/**
 * Created by vanchanagiri shravya on 12/27/2016.
 */
function validate() {
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var email = document.f01.email.value;
    //var passwordlength = document.f02.password.value.length;
    var pass1 = document.getElementById("pass1").value;
    var count=0;
    if (email == null || email == "") {
        document.getElementById("emaillocation").innerHTML = "Please enter your Email id";
    }else if(!emailRegex.test(email)){
        document.getElementById("emaillocation").innerHTML = "Emai should be in correct format";
    } else {
        count++;
    }
    if(pass1 == null || pass1 == ""){
        document.getElementById("passwordlocation").innerHTML = "Password Should not be empty";
    }else{
        count++;
    }
    if(count==2){
        window.open('postTicket.html');
    }else{
        alert("login failed.........!");
    }
}