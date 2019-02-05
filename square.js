window.onload = function()
{
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	ctx.fillStyle = 'black';
	ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
	setInterval(main, 1/60 * 100);
}

var xCord = window.innerWidth/2;
var yCord = window.innerHeight/2;
var halfwidth = 100;
var halfheight = 100;
var x = halfwidth;
var y = halfheight;

function main(){
    ctx.beginPath();
	ctx.fillStyle = 'black';
	ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
	ctx.strokeStyle = 'white';
	ctx.moveTo(xCord-halfwidth, yCord -halfheight);
	ctx.rect(xCord - halfwidth, yCord-halfheight, halfwidth * 2, halfheight * 2);
	ctx.stroke;
    ctx.moveTo(xCord,yCord);
	
	ctx.lineTo(x + xCord, y + yCord);
	if(y >= halfheight){
		x+= 1;
	}
	if( y <= halfheight * -1){
		x-=1;
	}
	if(x > halfwidth){
		y-=1;
	}
	if(x < halfwidth * -1){
		y+=1;
	}

	ctx.stroke();
}