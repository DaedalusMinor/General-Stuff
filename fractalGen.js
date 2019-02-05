var x = window.innerWidth/2;
var y = window.innerHeight/2 - 1;

window.onload = function()
{
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	setInterval(main, 1/60);
	mouse = new Mouse();
}

Mouse = function() {
	var mouse = {};
	mouse.x = 0;
	mouse.y = 0;
	
	function move(e) {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	}
	canvas.addEventListener('mousemove', move);
	return mouse;
}


function main(){
	ctx.fillStyle = 'black';
	ctx.fillRect(0,0,window.innerWidth, window.innerHeight);
	ctx.beginPath();
	ctx.strokeStyle = "white";
	
	var y = mouse.y - window.innerHeight/2;
	var x = mouse.x - window.innerWidth/2;
	var distance = Math.sqrt((y * y) + (x * x));
	var branches = 4;
	var len = 0;
	
	if (mouse.x - window.innerWidth/2 >= 0){
		theta = Math.atan(y / x);
	}
	else{
		theta = Math.atan(y/x) + Math.PI;
	}
	
	if(distance >= 300){
		branches += 1;
	}
	if(distance >= 400){
		branches += 1;
	}
	if(distance >= 500){
		branches += 1;
	}
	
	if(distance >= 250){
		len = 250;
	}
	else{
		len = distance;
	}
	
	drawTree(branches, theta, len, window.innerWidth/2, window.innerHeight/2);
	ctx.stroke();
}

function drawTree(stems, theta, longness, startX, startY){
	if(stems >= 1){
		ctx.moveTo(startX, startY);
		ctx.lineWidth = stems;
		ctx.lineTo(startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		drawTree(stems-1,theta * 3 , longness/1.618, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		drawTree(stems-1, theta * 4, longness/1.618, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		drawTree(stems-1, theta * 2, longness/1.618, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		drawTree(stems-1, theta * 1, longness/1.618, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		drawTree(stems-1, theta * 5, longness/1.618, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
	}
}