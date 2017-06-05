// Javascript

var DisplayedEquation = document.getElementsByClassName("box");
var PlusDiv = document.getElementById("add");

var equationArray =[];

window.onload = function() {
        var numberButtons = document.getElementsByClassName('number');
        for(var i = 0; i < numberButtons.length; i++) {
           var numberButton = numberButtons[i];
           numberButton.onclick = function() {
           		DisplayedEquation[0].innerText += this.innerText;

            }
        }
    };

PlusDiv.onclick = function() {

if (equationArray == "") {
		equationArray.push(DisplayedEquation[0].innerText);
           		DisplayedEquation[0].innerText = "";	
			}else{
				DisplayedEquation[0].innerText = "Loop to add all variables in array";
			}
           		
};