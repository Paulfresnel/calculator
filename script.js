window.addEventListener('load',windowOnLoad );


function windowOnLoad(){
    console.log('loaded')
    document.querySelectorAll('.cell').forEach((button) => {
    button.addEventListener('click', addNumber)
  });
    document.querySelector('#addition').addEventListener('click',addition);
    document.querySelector('#substraction').addEventListener('click',substraction);
    document.querySelector('#multiplication').addEventListener('click',multiplication);
    
    document.querySelector('#division').addEventListener('click',division);
    document.querySelector('#calculate').addEventListener('click',calculate);
    
      document.querySelector('#reset').addEventListener('click',reset);
  
  
      console.log("fully loaded");
}

function addNumber(event){
  let target = event.currentTarget;
  console.log(target);
  let number = parseInt(event.currentTarget.innerHTML);
  console.log(number);
  console.log('working?');
  updateField(number);
}

function updateField(input){
  document.getElementById('visualization').firstChild.textContent += input;
}

function addition(){
  document.getElementById('visualization').firstChild.textContent += '+';
}

function substraction(){
    document.getElementById('visualization').firstChild.textContent += '-';
}

function multiplication(){
    document.getElementById('visualization').firstChild.textContent += '*';
}

function division(){
    document.getElementById('visualization').firstChild.textContent += '/';
}

function calculate() {
  let result = document.getElementById('visualization').textContent;
  document.getElementById('visualization').firstChild.textContent = eval(result);
}

function reset(){
  document.getElementById('visualization').innerHTML = '<p></p>';
}


