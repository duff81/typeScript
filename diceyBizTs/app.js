//setting all my global variables here
let buttonNewDie = document.getElementById("newDie");
let buttonReroll = document.getElementById("reroll");
let buttonSumDie = document.getElementById("sumDice");
let resultsDiv = document.getElementById("results");
let diceArr = [];
let btnCount = 0;

// console.log(resultsDiv);

class Die {
  constructor() {
    this.div = document.createElement("div");
    this.div.className = "dice";
    buttonStop();
    //have to use arrow function in order to use this.roll()
    this.div.addEventListener("click", () => {
      this.roll();
    });
    this.div.addEventListener("dblclick", () => {
      btnCount = btnCount - 1;
      buttonStop();
      //   console.log(btnCount);
      this.div.remove();
      let diceIndex=diceArr.indexOf(this)
      diceArr.splice(diceIndex,1);
    });

    this.roll();
    resultsDiv.appendChild(this.div);
    diceArr.push(this);
  }
  roll() {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    this.value = randomNum;
    //  console.log(this.value);
    this.div.innerHTML = this.value;
    this.div.id = this.value;
  }
  if(btnCount = 4 && diceArr[i].value === i) {
    alert("YAHTZEEEE");
  }
}
buttonSumDie.addEventListener("click", () => {
  let startVal = 0;
  for (let i = 0; i < diceArr.length; i++) {
    startVal += diceArr[i].value;
  }
  alert(startVal);
});
buttonNewDie.addEventListener("click", function () {
  new Die();
  btnCount = btnCount + 1;
  // console.log(btnCount);
  // console.log(resultsDiv);

  // console.log(diceArr);
  // console.log(this.value);
  buttonStop();
  //   checkEqual()
});

// let checkEqual = () => {
//     let valueArr = []
//     if (btnCount == 4){
//         diceArr.forEach(die => {
//             valueArr.push(die.value)
//         })

//         for (let i = 0; i<valueArr.length; i++){
//             let base = valueArr[0]
//             if(valueArr[i]!==base){
//                 return
//             } else {
//                 console.log('All dice are equal!')
//             }
//         }
//         console.log(valueArr)
//     }
// }

buttonReroll.addEventListener("click", function () {
  diceArr.forEach((die) => die.roll());
});
//was messing around with amount of dice you could have
function buttonStop() {
  if (btnCount >= 4) {
    buttonNewDie.disabled = true;
  } else {
    buttonNewDie.disabled = false;
  }
}
