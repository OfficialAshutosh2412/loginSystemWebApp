//for get and checked the values of the fields
function validation(){
    // getting the values of the fields by using IDs...........
    var mail = document.getElementById("email").value;
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var pswd = document.getElementById("password").value;
    var cpswd = document.getElementById("cpassword").value;
    var sex = document.getElementById("gender").value;
    var dateOfBirth = document.getElementById("dob").value;
    var degree = document.getElementById("courses").value;
    var adrs = document.getElementById("address").value;
    var checkBox = document.querySelector('#check').checked;

    //checking for empty field and alert if found..............
    if(mail==""){
       document.getElementById("mailError").innerHTML = "Email required !";
       document.getElementById("email").style.border = "2px solid red";
       document.getElementById("mailError").style.color = "#fcba03";
       return false;
    }
    else if(firstName==""){
        document.getElementById("fnameError").innerHTML = "Name required !";
        document.getElementById("fname").style.border = "2px solid red";
        document.getElementById("fnameError").style.color = "#fcba03";
        return false;
    }
    else if(lastName==""){
        document.getElementById("lnameError").innerHTML = "Last Name required !";
        document.getElementById("lname").style.border = "2px solid red";
        document.getElementById("lnameError").style.color = "#fcba03";
        return false;
    }
    else if(pswd==""){
        document.getElementById("pswdError").innerHTML = "password required !";
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("pswdError").style.color = "#fcba03";
        return false;
    }
    else if(cpswd==""){
        document.getElementById("cpswdError").innerHTML = "confirm your password";
        document.getElementById("cpassword").style.border = "2px solid red";
        document.getElementById("cpswdError").style.color = "#fcba03";
        return false;
    }
    else if(sex==""){
         document.getElementById("genderError").innerHTML = "gender required !";
        document.getElementById("gender").style.border = "2px solid red";
        document.getElementById("genderError").style.color = "#fcba03";
        return false;
    }
    else if(dateOfBirth==""){
        document.getElementById("dobError").innerHTML = "Date of birth required !";
        document.getElementById("dob").style.border = "2px solid red";
        document.getElementById("dobError").style.color = "#fcba03";
        return false;
    }
    else if(degree==""){
        document.getElementById("courseError").innerHTML = "course required !";
        document.getElementById("courses").style.border = "2px solid red";
        document.getElementById("courseError").style.color = "#fcba03";
        return false;
    }
    else if(adrs==""){
        document.getElementById("adrsError").innerHTML = "address required !";
        document.getElementById("address").style.border = "2px solid red";
        document.getElementById("adrsError").style.color = "#fcba03";
        return false;
    }
    else if(checkBox == false){
        alert("Please Accept the terms and conditions.");
        return false;
    }
    else if (pswd != cpswd) {
        alert("password not matching !")
        return false
    }
    else if((pswd.length < 10 )|| (pswd.length > 10)){
        alert("password must be atleast 10 characters long !");
        return false;
    }
    else{
        return true;
    }
}

//error clear functions on key press.............
function clearMailError(a){
    a.value = a.value.trim();
    if(a.value.indexOf("@") <= 0){
        document.getElementById("mailError").innerHTML = "Invalid Email !";
        document.getElementById("mailError").style.color = "cyan";
        return false;
    }
    else if(a.value.charAt(a.value.length - 3) != "."){
        document.getElementById("mailError").innerHTML = "(' . ') is required !";
        document.getElementById("mailError").style.color = "cyan";
        return false;
    }
    else{
        document.getElementById("mailError").innerHTML = "";
        document.getElementById("email").style.border = ""
        return true;
    }
}
function clearFnameError(b){
    document.getElementById("fname").style.border = "";
    document.getElementById("fnameError").innerHTML = "";
}
function clearLnameError(c){
    document.getElementById("lnameError").innerHTML = "";
    document.getElementById("lname").style.border = "";
}
function clearPasswordError(d){
    var pswd = d.value.trim();
    d.type = "text";
    if((pswd.length < 10) || (pswd.length > 10)){
        document.getElementById("pswdError").innerHTML = "password must be 10 characters !";
        document.getElementById("pswdError").style.color = "cyan";
        return false;
    }
    else{
        document.getElementById("pswdError").innerHTML = "";
        document.getElementById("password").style.border = "";
        d.type = "password"
        return true;
    }
}
function clearCpasswordError(e){
    document.getElementById("cpswdError").innerHTML = "";
    document.getElementById("cpassword").style.border = "";
}
function clearGenderError(f){
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("gender").style.border = "";
}
function clearDobError(g){
    document.getElementById("dobError").innerHTML = "";
    document.getElementById("dob").style.border = "";
}
function clearCourseError(g){
    document.getElementById("courseError").innerHTML = "";
    document.getElementById("courses").style.border = "";
}
function clearAdrsError(h){
    h.trim();
    document.getElementById("adrsError").innerHTML = "";
    document.getElementById("address").style.border = "";
}
function showPswd(z){
    var data = document.getElementById('showPassword');
    if(data.type == "password"){
        data.type = "text";
    }
    else{
        data.type = "password";
    }
}

/*-----login validation-------------*/
function validLogin(){
    var mail = document.getElementById("email").value;
    var pswd = document.getElementById("showPassword").value;
    if((mail == "") || (showPassword == "")){
        alert('All fields are required !');
        return false;
    }
    else{
        return true;
    }
}
function loginEmail(k){
    k.value = k.value.trim();
    if(k.value.indexOf("@") <= 0){
        document.getElementById("logMailError").innerHTML = "Invalid Email !";
        document.getElementById("logMailError").style.color = "cyan";
        return false;
    }
    else if(k.value.charAt(k.value.length - 3) != "."){
        document.getElementById("logMailError").innerHTML = "(' . ') is required !";
        document.getElementById("logMailError").style.color = "cyan";
        return false;
    }
    else{
        document.getElementById("logMailError").innerHTML = "";
        document.getElementById("email").style.border = ""
        return true;
    }
}

function clearMsg(){
    document.getElementById("messageBox").style.display = "none";
}