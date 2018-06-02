
//Range from 19 to 120
var randomNum;

//Range from 1 to 12
var candy1;
var candy2;
var candy3;
var candy4;
var result = 0;
var wins = 0;
var lose = 0;

function reset(){	
	randomNum = Math.floor((Math.random()*102)+19);
	document.querySelector("#randNum").innerText = randomNum;
	result = 0;
	candy1 = Math.floor((Math.random()*12)+1);
	candy2 = Math.floor((Math.random()*12)+1);
	candy3 = Math.floor((Math.random()*12)+1);
	candy4 = Math.floor((Math.random()*12)+1);
}
reset();

$('body').on('click', function(evt) {
     if($(evt.target).is('#candy1')) {
		result+=candy1;       
    }
	else if ($(evt.target).is('#candy2')) {
		result+=candy2;       
    }
	else if ($(evt.target).is('#candy3')) {
		result+=candy3;       
    }
	else if ($(evt.target).is('#candy4')) {
		result+=candy4;       
    }
	document.querySelector("#userNum").innerText = result.toString();
	
	if (result == randomNum){
		wins++;
		document.querySelector("#win").innerText = wins.toString();
		reset();
		document.querySelector("#userNum").innerText = "";
	}
	if (result > randomNum){		
		lose++;
		document.querySelector("#lose").innerText = lose.toString();
		reset();
		document.querySelector("#userNum").innerText = "";
	}
	return false;
});

