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
  if (isEmailValid.includes("@gmail.com")) {
    alert("Email болсон байна");
    isGood += 1;
  } else {
    alert("Email болохгүй байна.");
  }
}
function isValidUser() {
  const isUserValid = userName.value;
  if (
    isUserValid.length == 0 ||
    isUserValid == `<div><br></div><div><br></div>` ||
    isUserValid.includes("&nbsp;")
  ) {
    alert("UserName хоосон байна.");
  } else {
    alert("UserName болсон байна.");
    isGood += 1;
  }
}
function isValidPhoneNum() {
  const isPhoneValid = phoneNumber.value;
  if (itIncludes(isPhoneValid)) {
    if (isPhoneValid.length < 8) {
      alert("Утасны дугаар богино байна.");
    } else if (isPhoneValid.length > 8) {
      alert("Утасны дугаар арай урт байна.");
    } else {
      alert("Утасны дугаар болсон байна.");
      isGood += 1;
    }
  } else {
    alert("Утасны дугаар болохгүй байна.");
  }
}

function isValidPass() {
  const isPassValid = password.value;
  if (isPassValid.length < 8) {
    alert("Password болохгүй байна.");
  } else {
    alert("Password болсон байна.");
    isGood += 1;
  }
  if (itIncludes(isPassValid)) {
    alert("Үсэг нэмэж бичнэ үү?");
  }
  itBig(isPassValid);
  if (isItTrue == false) {
    alert("Том үсэг нэмэж бичнэ үү?");
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
