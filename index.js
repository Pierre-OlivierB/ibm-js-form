// *-------------------------------------------
// *Choix multiple
// console.log("test");
// console.log(document.forms[0]);

var inputsCheck;
const testCheck = document.getElementById("testCheck");
var inputs = document.querySelectorAll("#first_card input[type=checkbox]");

function testChecked() {
  inputsCheck = document.querySelectorAll("#first_card input:checked");
  // console.log(inputsCheck.length);
  if (inputsCheck.length > 0) {
    testCheck.classList.remove("not-valid");
    inputs.forEach((e) => {
      e.classList.remove("not-valid");
    });
  }
  if (inputsCheck.length <= 0) {
    testCheck.classList.add("not-valid");
  }
  if (inputsCheck.length == 5) {
    inputs.forEach((e) => {
      e.classList.add("not-valid");
    });
  }
}
function validateData() {
  // console.log(inputsCheck.length);
  testCheck.classList.add("not-valid");
  inputs.forEach((e) => {
    e.checked = false;
    e.classList.remove("not-valid");
  });
}

inputs.forEach((e) => {
  e.addEventListener("click", testChecked);
});
testCheck.addEventListener("click", validateData);

// !-----------------------------------------------
// * Marquez des Points
const btnCheckQuestions = document.getElementById("testCheckQuestions");
var answerChoosen;
const answerGiven = document.querySelectorAll("#sec_card input[type=radio]");
// console.log(answerGiven);
const validateAnswer = ["un marron", "un poussin", "plouf", "blanc", "42"];
var score = 0;
// console.log(btnCheckQuestions);
const scorePlayer = [
  "Essaye encore !",
  "1 ? Pas mal, peut mieux faire.",
  "2?!? C'est bien.",
  "3 ? why not",
  "4! Pas mal.",
  "5, best score!",
];
function testScore() {
  for (let i = 0; i < scorePlayer.length; i++) {
    if (i == score) {
      return alert(scorePlayer[score]);
    }
  }
}
function checkResponse() {
  if (answerChoosen.length == 5) {
    // console.log("faites vos jeux");
    for (let i = 0; i < answerChoosen.length; i++) {
      answerChoosen[i].value == validateAnswer[i] ? score++ : null;
    }
    alert("Votre score est de : " + score);
  }
}
function resetData() {
  // console.log(inputsCheck.length);
  score = 0;
  btnCheckQuestions.classList.add("not-valid");
  answerChoosen.forEach((e) => {
    e.checked = false;
  });
}

answerGiven.forEach((e) => {
  e.addEventListener("click", () => {
    answerChoosen = document.querySelectorAll("#sec_card input:checked");
    if (answerChoosen.length == 5) {
      btnCheckQuestions.classList.remove("not-valid");
      // console.log("faites vos jeux");
    }
  });
});

btnCheckQuestions.addEventListener("click", () => {
  checkResponse();
  testScore();
  resetData();
});

// *----------------------------------------------------------
// *Mot de passe
const btnTestMdp = document.getElementById("testMdp");
const valueCrypt = document.getElementById("valueCrypt");
// console.log(btnTestMdp);
// console.log(valueCrypt);
var inputMdpValue;

function verifyMdp() {
  inputMdpValue = valueCrypt.value;
  console.log(inputMdpValue);
  console.log("verification");
}

btnTestMdp.addEventListener("click", verifyMdp);
