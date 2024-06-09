const opBtn = document.querySelectorAll(".op");
const digitBtn = document.querySelectorAll(".digit");
let inputField = document.querySelector("#input");
let resultField = document.querySelector("#result");
let historyOutput = document.querySelector(".history");

let total = 0;
let lastButtonPressed = 0;
let history = "";

inputField.innerText = "";
resultField.innerText = total;

setOpDisabled(true);

digitBtn.forEach((dgt) => {
  dgt.addEventListener("click", () => {
    const dgtValue = Number(dgt.innerText);

    inputField.innerText = dgtValue;
    if (lastButtonPressed === "+") {
      total += dgtValue;
    } else if (lastButtonPressed === "-") {
      total -= dgtValue;
    } else if (lastButtonPressed === "*") {
      total *= dgtValue;
    } else if (lastButtonPressed === "/") {
      total /= dgtValue;
    } else if (lastButtonPressed === "√x") {
      total = dgtValue;
    } else if (lastButtonPressed === "x^2") {
      total = dgtValue;
    } else if (lastButtonPressed === "Clear") {
      total = dgtValue;
    } else if (typeof lastButtonPressed === "number") {
      total = dgtValue;
    } else {
      console.warn("unknown button " + lastButtonPressed);
    }
    resultField.innerText = total;
    lastButtonPressed = dgtValue;
    history += " " + dgtValue + " ";
    createHistory();
    setOpDisabled(false);
    setDigitDisabled(true);
  });
});

opBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const operatorValue = button.innerText;
    inputField.innerText = operatorValue;
    lastButtonPressed = operatorValue;
    if (operatorValue === "√x") {
      total = Math.sqrt(total);
      setOpDisabled(false);
      setDigitDisabled(true);
    } else if (operatorValue === "x^2") {
      total *= total;
      setOpDisabled(false);
      setDigitDisabled(true);
    } else if (operatorValue === "Clear") {
      // CLEAR!
      total = 0;
      setOpDisabled(true);
      setDigitDisabled(false);
    } else {
      setOpDisabled(true);
      setDigitDisabled(false);
    }
    resultField.innerText = total;
    if (operatorValue === "Clear") {
      history = "";
    } else {
      history += " " + operatorValue + " ";
    }
    createHistory();
  });
});

function setOpDisabled(disabled) {
  opBtn.forEach((button) => {
    if (button.innerText !== "Clear") {
      button.disabled = disabled;
    }
  });
}

function setDigitDisabled(disabled) {
  digitBtn.forEach((button) => {
    button.disabled = disabled;
  });
}

function createHistory() {
  let newLi = document.createElement("li");
  newLi.textContent = history + " => " + total;
  historyOutput.appendChild(newLi);
}
