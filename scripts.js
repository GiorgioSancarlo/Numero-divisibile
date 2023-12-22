const elementInput1 = document.getElementById("input1");
const elementInput2 = document.getElementById("input2");
const elementButton = document.getElementById("btn");
const elementResult = document.getElementById("result");

function onClickButton() {
  const divisione = parseInt(elementInput1.value);
  const divisione2 = parseInt(elementInput2.value);

  if (divisione % divisione2 == 0) {
    elementResult.innerHTML = "si";
  } else {
    elementResult.innerHTML = "no";
  }
}
elementButton.addEventListener("click", onClickButton);
