// script.js
const myButton = document.getElementById('myButton');
const mySaveButton = document.getElementById("mySaveButton")

const heading = document.querySelector('h1');
const headin2 = document.querySelector('h2');
const heading3 = document.querySelector('h3');
let clicks = 0;
let liveContent = "";

const myTextArea = document.getElementById('myTextArea'); 


myButton.addEventListener('click', () => {
	clicks = clicks + 1;
    heading3.textContent = clicks;
    myButton.style.backgroundColor = 'lightblue';

});

myTextArea.addEventListener("input", function() {
	liveContent = myTextArea.value;
});

function saveText() {
	localStorage.setItem("saveText", myTextArea.value);
}
window.addEventListener('load', function () {
	const savedText = localStorage.getItem("saveText");
	if (savedText !== null) {
		myTextArea.value = savedText;
	}
});
