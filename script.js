const main = $("main"),
    success = $("article"),
    replace = $("b"),
    errorLabel = $(".error__message"),
    errorInput = $("#email");
    
function validate(e) {
    
    e.preventDefault(); // prevents auto submission i.e email= in the url

    // logic in here 
    var mail = $("#email").val();
    var regex = /^([\w\._]+)@(gmail|proton|outlook|hotmail|yahoo|mail|aol|zoho|icloud|gmx|yandex|hushmail|fastmail|tutanota)+.([a-z]+)(.[a-z]+)?$/; // only popular email services are supported

    if (mail.match(regex)) { // checks the input against the regex
        main.hide().fadeOut(1000);
        success.fadeIn(1000);
        replace.text(mail);
        errorLabel.css("display", "none");
    } else {
        errorLabel.css("display", "block");
        errorInput.addClass("error__input");
    }

}
function reset(){
    success.fadeOut(1000);
    main.fadeIn(1000);
    errorInput.val("");
    errorInput.removeClass("error__input");
}
var form = $("#main__form"),
    dismiss = $(".button");
form.on("submit",validate);
dismiss.on("click",reset);