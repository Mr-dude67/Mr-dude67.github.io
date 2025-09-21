// script.js
const myButton = document.getElementById('myButton');
const heading = document.querySelector('h1');
const headin2 = document.querySelector('h2');
const heading3 = document.querySelector('h3');
let clicks = 0;

const myTextArea = document.getElementById('myTextArea'); 

myTextArea.value = "";
console.log(myTextArea.value); // Logs the current content

myButton.addEventListener('click', () => {
	clicks = clicks + 1;
    heading3.textContent = clicks;
    myButton.style.backgroundColor = 'lightblue';

});
