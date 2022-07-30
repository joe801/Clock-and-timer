function change() {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	var randomColorForCam = Math.floor(Math.random()*16777215).toString(16);
	document.getElementById("case").style.backgroundColor = "#" + randomColor;
	document.getElementById("cam-case").style.backgroundColor = "#" + randomColorForCam;
}

document.getElementById("toggle").onclick = function(){
	change();
}

function auto(){
	setInterval(change, 2000);
}



document.getElementById("change").onclick = function(){
	setTimeout(auto, 1000);
}