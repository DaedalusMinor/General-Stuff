var x = window.innerWidth/2;
var y = window.innerHeight/2 - 1;

window.onload = function()
{
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	main();
}

function main(){
	ctx.fillStyle = 'white';
	ctx.fillRect(0,0,window.innerWidth, window.innerHeight);
	ctx.beginPath();
	ctx.strokeStyle = "black";
	theta = 3* Math.PI / 2
	drawTree(8, theta, 200, window.innerWidth/2, window.innerHeight/2 + 200);
	ctx.stroke();
}


Mouse = function()	
{
	var mouse={};
	mouse.x=0;
	mouse.y=0;
	
	function move(e)
	{
		mouse.x=e.clientX;
		mouse.y=e.clientY;
	}
	canvas.addEventListener('mousemove',move);
	return mouse;
}

function drawTree(stems, theta, longness, startX, startY){
	if(stems >= 1){
		ctx.moveTo(startX, startY);
		ctx.lineWidth = stems;
		ctx.lineTo(startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		drawTree(stems-1,theta - 2*Math.PI / 2, longness/1.618, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		drawTree(stems-1, theta - Math.PI / 4, longness/1.618, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		drawTree(stems-1, theta + 2*Math.PI / 4, longness/1.618, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		drawTree(stems-1, theta + 4* Math.PI / 2, longness/1.618, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		
	}
}