//define function to validate form
    
function ValidateData() {
    event.preventDefault();

    //retrieve form data
    var firstname = document.infoform.firstname.value;
    var lastname = document.infoform.elements["lastname"].value;
    var phone = document.infoform.elements["phone"].value;
    var email = document.infoform.elements["email"].value;
    var url = document.infoform.elements["url"].value;
    var q1 = document.infoform.elements["q1"];
    var q2 = document.infoform.elements["q2"];
    
    



    //retrieve error divs

    var firstnameDivErr = document.getElementById("firstnameErr");
    var lastnameDivErr = document.getElementById("lastnameErr");
    var phoneDivErr = document.getElementById("phoneErr");
    var emailDivErr = document.getElementById("emailErr");
    var urlDivErr = document.getElementById("urlErr");

    //define error variables
    var firstnameError = false;
    var lastnameError = false;
    var phoneError = false;
    var emailError = false;
    var urlError = false;
    var q1Error = false;
    var q2Error = false;



    //Validate firstname



    document.infoform.firstname.onblur = function () {

        if (this.value.length == 0) {

            firstnameDivErr.firstChild.nodeValue = "error";
            firstnameError = false;

        } else {

            var firstNameRegEx = /^[a-zA-Z]*$/;
            if (firstNameRegEx.test(infoform.elements["firstname"].value) === true) {

                firstnameDivErr.firstChild.nodeValue = "success!";
                firstnameError = true;

            } else {

                firstnameDivErr.firstChild.nodeValue = "error";
                firstnameError = false;
            }
        }
    }

    document.infoform.firstname.onfocus = function () {

        if (firstnameDivErr.firstChild.nodeValue == null) {
            var errMsg = document.createTextNode("enter a name with letters");
            firstnameDivErr.appendChild(errMsg);
        } else {
            firstnameDivErr.firstChild.nodeValue = "enter a name with letters";
        }
    }


    //validate lastname

    document.infoform.lastname.onblur = function () {

        if (this.value.length == 0) {

            lastnameDivErr.firstChild.nodeValue = "error";
            lastnameError = false;

        } else {

            var lastNameRegEx = /^[a-zA-Z]*$/;
            if (lastNameRegEx.test(infoform.elements["lastname"].value) === true) {

                lastnameDivErr.firstChild.nodeValue = "success!";
                lastnameError = true;

            } else {

                lastnameDivErr.firstChild.nodeValue = "error";
                lastnameError = false;
            }
        }
    }

    document.infoform.lastname.onfocus = function () {

        if (lastnameDivErr.firstChild.nodeValue == null) {
            var errMsg = document.createTextNode("enter a name with letters");
            lastnameDivErr.appendChild(errMsg);
        } else {
            lastnameDivErr.firstChild.nodeValue = "enter a name with letters";
        }
    }

    //validate phone

    document.infoform.phone.onblur = function () {

        if (this.value.length == 0) {

            phoneDivErr.firstChild.nodeValue = "error";
            phoneError = false;

        } else {

            var phoneRegEx = /^\d{3}-\d{3}-\d{4}$/;
            if (phoneRegEx.test(infoform.elements["phone"].value) === true) {

                phoneDivErr.firstChild.nodeValue = "success!";
                phoneError = true;

            } else {

                phoneDivErr.firstChild.nodeValue = "error";
                phoneError = false;

            }
        }
    }

    document.infoform.phone.onfocus = function () {

        if (phoneDivErr.firstChild.nodeValue == null) {
            var errMsg = document.createTextNode("enter a phone number in the pattern of XXX-XXX-XXXX");
            phoneDivErr.appendChild(errMsg);
        } else {
            phoneDivErr.firstChild.nodeValue = "enter a phone number in the pattern of XXX-XXX-XXXX";
        }
    }



    //validate email 

    document.infoform.email.onblur = function () {

        if (this.value.length == 0) {

            emailDivErr.firstChild.nodeValue = "error";
            emailError = false;

        } else {

            var emailRegEx = /^\w+@\w+\.[a-zA-Z]{2,3}$/;
            if (emailRegEx.test(infoform.elements["email"].value) === true) {

                emailDivErr.firstChild.nodeValue = "success!";
                emailError = true;

            } else {

                emailDivErr.firstChild.nodeValue = "error";
                emailError = false;

            }
        }
    }

    document.infoform.email.onfocus = function () {

        if (emailDivErr.firstChild.nodeValue == null) {
            var errMsg = document.createTextNode("enter an email in the pattern of blah@blah.com");
            emailDivErr.appendChild(errMsg);
        } else {
            emailDivErr.firstChild.nodeValue = "enter an email in the pattern of blah@blah.com";
        }
    }

    //validate url 

    document.infoform.url.onblur = function () {

        if (this.value.length == 0) {

            urlDivErr.firstChild.nodeValue = "error";
            urlError = false;

        } else {

            var urlRegEx = /^https:\/\/[a-z0-9]+([\-\.][a-z0-9]+)+\.[a-z]+([0-9]+)*(\/.+)$/;
            if (urlRegEx.test(infoform.elements["url"].value) === true) {

                urlDivErr.firstChild.nodeValue = "success!";
                urlError = true;

            } else {

                urlDivErr.firstChild.nodeValue = "error";
                urlError = false;

            }
        }
    }

    document.infoform.url.onfocus = function () {

        if (urlDivErr.firstChild.nodeValue == null) {
            var errMsg = document.createTextNode("enter your website address");
            urlDivErr.appendChild(errMsg);
        } else {
            urlDivErr.firstChild.nodeValue = "enter your website address";
        }
    }

    //prevent form submission if errors are pressent 

    document.infoform.onsubmit = function () {
        event.preventDefault();
        console.log("button works");
        console.log(q1);
        console.log(q2);
        processForm(firstnameError, lastnameError, phoneError, emailError, urlError);    
    
    }

    function processForm() {
       
        if (firstnameError && lastnameError && phoneError && emailError && urlError) {

             //badge time 
            
             var badgeDiv = document.getElementById("badge");
             badgeDiv.appendChild(document.createTextNode("here's what you entered: " +
             "First Name: " + document.infoform.elements["firstname"].value + " " + 
             "Last Name: " + document.infoform.elements["lastname"].value + " " +
             "Mobile Number: " + document.infoform.elements["phone"].value + " " +
             "email: " + document.infoform.elements["email"].value + " " +
             "address: " + document.infoform.elements["url"].value + " "));

            
            if (q1[0].checked && q2[0].checked) {
                var image1 = document.createElement("img");
            image1.setAttribute("src", "img/picture1.jpg");
            badgeDiv.appendChild(image1);
            } else if (q1[1].checked && q2[1].checked) {
                var image2 = document.createElement("img");
                image2.setAttribute("src", "img/picture2.jpg");
                badgeDiv.appendChild(image2);
            } else if (q1[1].checked && q2[0].checked) {
                var image1 = document.createElement("img");
            image1.setAttribute("src", "img/picture1.jpg");
            badgeDiv.appendChild(image1);
            } else if (q1[0].checked && q2[1].checked) {
                var image2 = document.createElement("img");
                image2.setAttribute("src", "img/picture2.jpg");
                badgeDiv.appendChild(image2);
            }
            
            
            
            
             

        } else {
            
           
            return false;
           
    }
 }





}



window.addEventListener("load", ValidateData, false);