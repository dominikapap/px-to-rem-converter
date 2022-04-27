const userInput = document.querySelector("#user-text");
const output = document.querySelector(".output-text");
const convertBtn = document.querySelector("#convert-btn");
const clearBtn = document.querySelector("#clear-btn");
const copyBtn = document.querySelector("#copy-btn");

function copyText(element) {
  navigator.clipboard.writeText(element.innerText);
}

function clearElement(element){
  element = '';
}

function convertText() {
  //find all numbers with px in user input
  let text = userInput.value;
  let pattern = /\d+[p|P][x|X]/g;
  let result = text.match(pattern);

  //add elements to new list
  let list = [];
  if (result) {
    for (let i = 0; i < result.length; i++) {
      list.push(result[i]);
    }
    for (let i = 0; i < list.length; i++) {
      //remove px or PX
      let newElement = list[i].slice(0, -2);
      //change number value and add rem at the end
      let newElementRem =
        (newElement / 16).toFixed(2).replace(/[.,]00$/, "") + "rem";
      text = text.replace(list[i], newElementRem);
    }
    output.innerHTML = text;
  } else {
    output.innerHTML = "Nothing to convert :(";
    output.setAttribute("style", "color:black");
  }
}

copyBtn.addEventListener("click", () => copyText(output));

clearBtn.addEventListener("click", () => clearElement(userInput.innerHTML));

convertBtn.addEventListener("click", convertText);
