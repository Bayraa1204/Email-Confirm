const email = document.getElementById("email");
const phoneNumber = document.getElementById("Phonenumber");
const password = document.getElementById("password");
const checkBox = document.getElementById("checkbox");

const btn = document.getElementById("button");

function isValidEmail() {
  const isEmailValid = email.value;
  if (isEmailValid.includes("@")) {
    alert("Email is Valid");
  } else {
    alert("Email is Invalid");
  }
}

function isValidPhoneNum() {
  const isPhoneValid = phoneNumber.value;
  if (NaN(isPhoneValid)) {
    if (isPhoneValid.length >= 8) {
      alert("Phone number is Valid");
    } else {
      alert("Phone number is Too Short");
    }
  } else {
    alert("Phone number is Invalid");
  }
}

function isValidPass() {
  const isPassValid = password.value;
  if (isPassValid.length >= 8) {
    alert("Password is Valid");
  } else {
    alert("Password is Too Short");
  }
}

btn.addEventListener("click", function () {
  isValidEmail();
  isValidPhoneNum();
  isValidPass();
});

checkBox.onclick = isVisible;

function isVisible() {
  var show = document.getElementById("password");
  if (show.type === "password") {
    show.type = "text";
  } else {
    show.type = "password";
  }
}
