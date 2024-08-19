const email = document.getElementById("email");
const phoneNumber = document.getElementById("Phonenumber");
const password = document.getElementById("password");
const checkBox = document.getElementById("checkbox");

const btn = document.getElementById("button");

let isItTrue = false;

let isGood = 0;

function isValidEmail() {
  const isEmailValid = email.value;
  if (isEmailValid.includes("@")) {
    alert("Perfect");
    isGood += 1;
  } else {
    alert("Email is Invalid");
  }
}

function isValidPhoneNum() {
  const isPhoneValid = phoneNumber.value;
  if (itIncludes(isPhoneValid)) {
    if (isPhoneValid.length < 8) {
      alert("Phone number is Too Short");
    } else if (isPhoneValid.length > 8) {
      alert("Phone number is Too Long");
    } else {
      alert("Perfect");
      isGood += 1;
    }
  } else {
    alert("Phone number is Invalid");
  }
}

function isValidPass() {
  const isPassValid = password.value;
  if (isPassValid.length < 8) {
    alert("Password is Too Short");
  } else {
    alert("Perfect");
    isGood += 1;
  }
  if (itIncludes(isPassValid)) {
    alert("Please add more symbols and letters.");
  }
  itBig(isPassValid);
  if (isItTrue == false) {
    alert("Add a UpperCase Letter");
  }
}

btn.addEventListener("click", function () {
  isValidEmail();
  isValidPhoneNum();
  isValidPass();
  if (isGood == 3) {
    window.location.href = "todo-list-lovat-eight-97.vercel.app";
  }
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

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function itIncludes(PhoneNum) {
  for (let i = 0; i < PhoneNum; i++) {
    if (numbers.includes(Number(PhoneNum)[i])) {
      return false;
    } else {
      return true;
    }
  }
}

function itBig(Pass) {
  let Upper = "";
  for (let i = 0; i < Pass.length; i++) {
    if (!itIncludes(Pass[i])) {
      Upper = Pass[i].toUpperCase();
      if (Upper == Pass[i]) {
        isItTrue = true;
      }
    }
  }
}
