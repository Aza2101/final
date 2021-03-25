//animate
    new WOW().init();

//validate
function ValidateEmail(inputText) {
    let mailformat = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com/";
    if (!inputText.value.match(mailformat)) {
        alert("You have entered an invalid email address! Please follow the example example@gmail.com");
        document.form1.text1.focus();
        return false;
    }
    else {
        return true;
    }
}

function Validate() {
    let password = document.getElementById("txtPassword").value;
    let confirmPassword = document.getElementById("txtConfirmPassword").value;
    let passwordformat2 = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";
    if (password == confirmPassword && password.value.match(passwordformat2) ) {
     
        alert("Passwords are same and valid.");
        return true;
    }
else
    {
        alert("Passwords do not match.");
        return false;
    }
}

function matchpass() {
    let mailformat2 = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/";
    let firstpassword = document.getElementById("txtPassword").value;
    let secondpassword = document.getElementById("txtConfirmPassword").value;
    if (firstpassword.value.match(mailformat2) && firstpassword == secondpassword ) {

        alert("SUCESS!")
        return true;
    }
    else {
        alert("You have to enter valid  and same passwords");

        return false;

    }

}  

$('form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "../db.json/users",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		$('#staticBackdrop').fadeOut();
		$('myaccaunt.html').fadeIn('slow');

		$('form').trigger('reset');
	});
	return false;
});


//search
document.querySelector('#elastic').oninput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.card');
    if (val != '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
                elem.innerHTML = elem.class;
            }
            else {
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
            elem.innerHTML = elem.class;
        });
    }
}

function insertMark(string, pos, len) {
    
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}