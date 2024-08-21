const email = document.getElementById("email");
const phoneNumber = document.getElementById("Phonenumber");
const password = document.getElementById("password");
const checkBox = document.getElementById("checkbox");
const userName = document.getElementById("UserName");

const btn = document.getElementById("button");

let isItTrue = false;

let isGood = 0;

function isValidEmail() {
  const isEmailValid = email.value;
  if (isEmailValid.includes("@")) {
    alert("Email Perfect");
    isGood += 1;
  } else {
    alert("Email is Invalid");
  }
}
function isValidUser() {
  const isUserValid = userName.value;
  if (
    isUserValid.length == 0 ||
    isUserValid == `<div><br></div><div><br></div>` ||
    isUserValid.includes("&nbsp;")
  ) {
    alert("Username is Empty");
  } else {
    alert("UserName is Perfect");
    isGood += 1;
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
      alert("Phone number Perfect");
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
    alert("Password Perfect");
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
  isValidUser();
  isValidEmail();
  isValidPhoneNum();
  isValidPass();
  if (isGood >= 4) {
    window.location.href = "./todoList.html";
    isGood = 0;
    localStorage.setItem("user", userName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("phone", phoneNumber.value);
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
