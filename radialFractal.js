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
	ctx.moveTo(window.innerWidth/2, window.innerHeight/2 + 200);
	draw(4, 3 * Math.PI / 2, 50, window.innerWidth/2, window.innerHeight/2 + 200);
	ctx.stroke();
}

function draw(stems, theta, longness, startX, startY){
	if(stems >= 1){
		ctx.moveTo(startX, startY);
		ctx.lineWidth = stems;
		ctx.arc(startX + longness*Math.cos(theta), startY + longness*Math.sin(theta), longness, theta, 2*Math.PI + theta);
		draw(stems - 1, theta + 4*Math.PI / 2, longness/0.85, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		draw(stems - 1, theta - 7*Math.PI / 2, longness/0.85, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		draw(stems - 1, theta + 7*Math.PI / 4, longness/0.85, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		draw(stems - 1, theta - 5*Math.PI / 4, longness/0.85, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
		draw(stems - 1, theta - 5*Math.PI / 4, longness/0.85, startX + longness*Math.cos(theta), startY + longness*Math.sin(theta));
	}
}