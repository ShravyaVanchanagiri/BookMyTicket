/**
 * Created by vanchanagiri shravya on 12/27/2016.
 */
function validate() {
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var phnregex = /[2-9]{2}\d{8}/;
    var name = document.f02.name.value;
    var email = document.f02.email.value;
    var passwordlength = document.f02.password.value.length;
    var passwordlength1 = document.f02.password1.value.length;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var phn=document.getElementById("phnno").value;
    var status = false;
    var cou = 0;
    if (name == null || name == "") {
        document.getElementById("namelocation").innerHTML = "Please enter your Name";
    }else{
        cou++;
    }
    if (email == null || email == "") {
        document.getElementById("emaillocation").innerHTML = "Please enter your Email id";
    }else if(!emailRegex.test(email)){
        document.getElementById("emaillocation").innerHTML = "Emai should be in correct format";
    } else {
        cou++;
    }

    if (passwordlength < 6) {
        document.getElementById("passwordlocation").innerHTML = "Password must be greater than 6";
    }
    //alert("checking Passwords"+pass1+" "+pass2);
    if (pass1 != pass2) {
        document.getElementById("pass2").innerHTML="Passwords not matched..!";
        document.getElementById("pass1").style.borderColor = "#E34234";
        document.getElementById("pass2").style.borderColor = "#E34234";
        status = false;
    }else{
        cou++;
    }
    if(phn == null || phn == ""){
        document.getElementById("phnnolocation").innerHTML="Phone number should be given";
    }else if(!phnregex.test(phn)){
        document.getElementById("phnnolocation").innerHTML="Must be 10 digits";
    }else{
        cou++;
    }

    if (cou == 4) {
        //alert("Registration Successful");
        window.open('login.html');

    }
    //window.open('login.html');        }
    else{
        //alert("Registration Failed");
    }
}

