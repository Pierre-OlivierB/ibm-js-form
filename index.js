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
var mdpPower = 0;
var power;
const regexMaj = /[A-Z]/g;
const regexMin = /[a-z]/g;
const regexNum = /[0-9]/g;
const regexSym = /[$&+,:;=?@#|'<>.^*()%!-]/g;

const regexLength = [26, 10, 22];

var flagMaj = false;
var flagMin = false;
var flagNum = false;
var flagSym = false;

function verifyMdp() {
  inputMdpValue = valueCrypt.value;
  console.log(inputMdpValue);
  console.log("verification");
  switchMdpValue(inputMdpValue);
}

function switchMdpValue(userMdp) {
  for (let i = 0; i < userMdp.length; i++) {
    if (!flagMaj && userMdp[i].match(regexMaj)) {
      // console.log("maj");
      flagMaj = true;
    }
    if (!flagMin && userMdp[i].match(regexMin)) {
      // console.log("Min");
      flagMin = true;
    }
    if (!flagNum && userMdp[i].match(regexNum)) {
      // console.log("Num");
      flagNum = true;
    }
    if (!flagSym && userMdp[i].match(regexSym)) {
      // console.log("Sym");
      flagSym = true;
    }
  }
  console.log(userMdp.length);
  // userMdp.length<=8?mdpPower=49:null;
  // if(userMdp.length>8&&userMdp.length<=10&&){
  //   mdpPower=65
  // }
}

function powerAffectation(userMdp) {
  let n = 0;
  flagMaj ? (n = n + regexLength[0]) : null;
  flagMin ? (n = n + regexLength[0]) : null;
  flagNum ? (n = n + regexLength[1]) : null;
  flagSym ? (n = n + regexLength[2]) : null;

  let l = userMdp.length;
}

function strongMdp(stat) {
  switch (stat) {
    case "strong":
      console.log("fort");
      break;
    case "medium":
      console.log("moyen");
      break;
    case "low":
      console.log("faible");
      break;
    default:
      console.log("erreur");
      break;
  }
}

btnTestMdp.addEventListener("click", verifyMdp);
