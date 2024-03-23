function validate(e) {

    e.preventDefault(); // prevents auto submission i.e email= in the url

    // logic in here 

    var mail = document.getElementById("email").value;
    var regex = /^([a-zA-Z0-9\._]+)@(gmail|proton|outlook|hotmail|yahoo|mail)+.([a-z]+)(.[a-z]+)?$/;

    if (mail.match(regex)) {
        alert("Valid email address");
    } else {
        alert("Invalid email address");
    }

}
var form = document.querySelector("#main__form");
form.addEventListener("submit",validate);