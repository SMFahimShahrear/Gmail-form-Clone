let password_show_checkbox = document.querySelector("#checkbox-show-pass");
let fname_field = document.querySelector(".f-name");
let lname_field = document.querySelector(".l-name");
let mail_field = document.querySelector(".mail");
let password_field = document.querySelector(".password");
let confirm_password_field = document.querySelector(".confirm-password");
let error = 0;
let data = "";

function checkfuntion(e) {
    if (e.value != "") {
        e.nextElementSibling.classList.add('input-filled');
    }
    else {
        e.nextElementSibling.classList.remove('input-filled');
    }
}


// form_transition = document.querySelectorAll(".form-transaction");

function password_visibility(e) {
    if (e.checked == true) {
        password_field.type = "text";
        e.parentElement.classList.add("check-box-hover-color");
    } else {
        password_field.type = "password";
        e.parentElement.classList.remove("check-box-hover-color");
    }
}
function password_visibility2(e) {
    if (e.checked == true) {
        document.querySelector(".pass-check").type = "text";
        e.parentElement.classList.add("check-box-hover-color");
    } else {
        document.querySelector(".pass-check").type = "password";
        e.parentElement.classList.remove("check-box-hover-color");
    }
}

// validation
function validation() {
    // document.querySelectorAll(".empty-field-alart").classList.add("hidden");
    document.querySelector(".empty-field-alart-1").classList.add("hidden");
    document.querySelector(".empty-field-alart-2").classList.add("hidden");
    document.querySelector(".empty-field-alart-3").classList.add("hidden");
    document.querySelector(".empty-field-alart-4").classList.add("hidden");
    document.querySelector(".empty-field-alart-5").classList.add("hidden");
    document.querySelector(".empty-field-alart-6").classList.add("hidden");
    document.querySelector(".empty-field-alart-7").classList.add("hidden");
    document.querySelector(".empty-field-alart-8").classList.add("hidden");
    document.querySelector(".empty-field-alart-9").classList.add("hidden");
    fname_field.classList.remove("border-red");
    lname_field.classList.remove("border-red");
    mail_field.classList.remove("border-red");
    password_field.classList.remove("border-red");
    error = 0;

    if (fname_field.value == "" && lname_field.value == "") {
        fname_field.classList.add("border-red");
        lname_field.classList.add("border-red");
        document.querySelector(".empty-field-alart-1").classList.remove("hidden");
        error = 1;
    } else if (fname_field.value == "") {
        fname_field.classList.add("border-red");
        document.querySelector(".empty-field-alart-2").classList.remove("hidden");
        error = 1;
    } else if (lname_field.value == "") {
        lname_field.classList.add("border-red");
        document.querySelector(".empty-field-alart-3").classList.remove("hidden");
        error = 1;
    }

    if (mail_field.value == "") {
        mail_field.classList.add("border-red");
        document.querySelector(".empty-field-alart-4").classList.remove("hidden");
        document.querySelector(".mail-rule").classList.add("hidden");
        error = 1;
    }
    else {
        let check = localStorage.getItem(mail_field.value);

        if (check) {
            sessionStorage.setItem("mailaddress", mail_field);
            error = 1;
            document.querySelector(".empty-field-alart-4").classList.add("hidden");
            document.querySelector(".empty-field-alart-5").classList.remove("hidden");
        }
    }

    if (password_field.value == "") {
        password_field.classList.add("border-red");
        document.querySelector(".empty-field-alart-6").classList.remove("hidden");
        document.querySelector(".empty-field-alart-8").classList.add("hidden");
        document.querySelector(".empty-field-alart-7").classList.add("hidden");
        document.querySelector(".password-rule").classList.add("hidden");
        error = 1;
    }

    else if(password_field.value.length < 7){
        password_field.classList.add("border-red");
        document.querySelector(".empty-field-alart-7").classList.remove("hidden");
        document.querySelector(".empty-field-alart-8").classList.add("hidden");
        document.querySelector(".password-rule").classList.add("hidden");
        error = 1;
    }
    else {
        if (confirm_password_field.value == "") {
            confirm_password_field.classList.add("border-red");
            document.querySelector(".empty-field-alart-8").classList.remove("hidden");
            document.querySelector(".empty-field-alart-7").classList.add("hidden");
            document.querySelector(".password-rule").classList.add("hidden");
            error = 1;
        }
        else {
            if (password_field.value.localeCompare(confirm_password_field.value) != 0) {               //passowrd match
                error = 1;
                document.querySelector(".empty-field-alart-9").classList.remove("hidden");
                // document.querySelector(".empty-field-alart-8").classList.add("hidden");
                document.querySelector(".password-rule").classList.add("hidden");
            }
        }
    }

    if (error == 1) {
        return false;
    } else {
        data = password_field.value.length + "pass:" + password_field.value + "fname:" + fname_field.value + "lname:" + lname_field.value + "||";
        localStorage.setItem(mail_field.value, data);
        // console.log(localStorage.getItem(mail_field.value));
        window.alert("Account created!");
    }
}


function emailAuth() {
    document.querySelector(".empty-field-alart-20").classList.add("hidden");
    let mail_field2 = document.querySelector('.mail-check').value;
    let check = localStorage.getItem(mail_field2);


    if (mail_field2 == '') {
        document.querySelector(".empty-field-alart-21").classList.remove("hidden");
        return false;
    }

    if (check) {
        sessionStorage.setItem("mailaddress", mail_field2);
    } else {
        document.querySelector(".empty-field-alart-20").classList.remove("hidden");
        document.querySelector(".empty-field-alart-21").classList.add("hidden");
        return false;
        // document.querySelector(".password-rule").classList.add("hidden");
    }
}

function nameappear() {
    let find = sessionStorage.getItem("mailaddress");
    if (find) {
        let str = localStorage.getItem(find);
        let position_start = str.search("fname:");
        let position_end = str.search("lname:");
        let username = str.slice(position_start + 6, position_end);
        document.querySelector(".user-name").innerText = username.toUpperCase();
    }
}

function passAuth() {
    let password = document.querySelector(".pass-check");
    document.querySelector(".empty-field-alart-30").classList.add("hidden");
    document.querySelector(".empty-field-alart-31").classList.add("hidden");
    let find = sessionStorage.getItem("mailaddress");

    if (password.value == '') {
        document.querySelector(".empty-field-alart-31").classList.remove("hidden");
        return false;
    }
    if (find) {
        let str = localStorage.getItem(find);
        let position_start = str.search("pass:");
        let position_end = str.search("fname:");
        let pass = str.slice(position_start + 5, position_end);
        console.log(pass);
        console.log(password.value);
        if (pass.localeCompare(password.value) == 0) {
            console.log("ok");
        }
        else {
            document.querySelector(".empty-field-alart-30").classList.remove("hidden");
            return false;
        }
    }
    else {
        window.alert("Error occured");
        return false;
    }

}
