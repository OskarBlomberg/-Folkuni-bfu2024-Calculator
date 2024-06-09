const button = document.querySelectorAll("button");
const digitBtn = document.querySelectorAll(".digit");
const addBtn = document.querySelector(".badd");
let inputField = document.querySelector("#input");
let resultField = document.querySelector("#result");

let total = 0;
let lastButtonPressed;

inputField.innerText = "";
resultField.innerText = total;

digitBtn.forEach((dgt) => {
  dgt.addEventListener("click", () => {
    const dgtValue = Number(dgt.innerText);

    inputField.innerText = dgtValue;
    if (lastButtonPressed === "+") {
      if (lastButtonPressed === "+") {
        total = total + dgtValue;
      }
    } else {
      total = dgtValue;
    }
    resultField.innerText = total;
    lastButtonPressed = dgtValue;
  });
});

addBtn.addEventListener("click", () => {
  inputField.innerText = "+";
  lastButtonPressed = "+";
});

/*  man trycker på siffror
V siffra visas
V siffra sparas som variabel
V man trycker på operator
V operator visas
V lägga förutsättningarna för att nästa siffra som trycks in ska hamna "efter" operatorn
V trycka på en siffra
V siffran visas

om det är tomt i resultat visas siffran direkt i total
om det redan står en siffra i total beror resultatet av
om man tryckte på en operator innan siffran
eller om man tryckte på siffran i stället för en operator = ny beräkning
OM OPERATOR ÄR "AKTIV"
  UTFÖR OPERATION
  VISA/UPPDATERA RESULTAT
ANNARS RESULTAT = SIFFRA (NY BERÄKNING)
resultatet av operationen visas i result
värdet i result sparas som variabel för vidare manipulation
*/
