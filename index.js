// console.log("test");
// console.log(document.forms[0]);

var inputsCheck;
const testCheck = document.getElementById("testCheck");
var inputs = document.querySelectorAll("input[type=checkbox]");

function testChecked() {
  inputsCheck = document.querySelectorAll("input:checked");
  console.log(inputsCheck.length);
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

inputs.forEach((e) => {
  e.addEventListener("click", testChecked);
});
