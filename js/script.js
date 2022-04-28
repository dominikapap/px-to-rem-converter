const userInput = document.querySelector("#user-text");
const output = document.querySelector(".output-text");
const convertBtn = document.querySelector("#convert-btn");
const clearBtn = document.querySelector("#clear-btn");
const copyBtn = document.querySelector("#copy-btn");
let baseInput = document.querySelector("#base");
let decimals = document.querySelector("#decimals");
let convertMin = document.querySelector("#convert-min");
decimals.value = 2;
baseInput.value = 16;
convertMin.value = 8;

function copyText(element) {
  navigator.clipboard.writeText(element.innerText);
}

function clearElement(element) {
  element.value = none;
}

function convertText() {
  //find all numbers with px in user input
  let text = userInput.value;
  let pattern = /[\(:\s]*\d*.?\d+[p][x]/gi;
  let patternChars = /[\(:\s-]*/gi;
  let result = text.match(pattern);

  //add elements to new list
  let list = [];
  if (result) {
    for (let i = 0; i < result.length; i++) {
      list.push(result[i]);
    }

    for (let i = 0; i < list.length; i++) {
      //remove unnecessary characters
      let newElement = list[i].slice(0, -2).replace(patternChars,"");
      //change number value and add rem at the end
      if (newElement > Math.abs(convertMin.value-1)){
        let newElementRem =(newElement / baseInput.value).toFixed(decimals.value).replace(/[.,]00$/, "") + "rem";
        text = text.replace(list[i].replace(patternChars,""), newElementRem);
        }    
      }
    
    output.innerText = text;
    scrollUp(userInput);
  } 
  
}

function scrollUp(element){
  element.scrollTop=0;
  element.scrollLeft=0;
}

copyBtn.addEventListener("click", () => copyText(output));

clearBtn.addEventListener("click", () => (userInput.value = ""));

convertBtn.addEventListener("click", convertText);

userInput.addEventListener("input", convertText);
userInput.addEventListener("change", ()=>{scrollUp(userInput);});

let changes = [baseInput, decimals, convertMin]

changes.forEach(element => {
  element.addEventListener("change", convertText)});


