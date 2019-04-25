//Canvas
function shape()
{
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	canvas.shadowOffsetX=4;
	canvas.shadowOffsetY=4;
	canvas.shadowBlur=1;
	canvas.shadowColor='rgba(0,0,255,.5)';
	canvas.font="bold 24px Tahoma";
	canvas.textAlign="end";
	canvas.fillText("Food Restaurant",250,30);
}
window.addEventListener("load",shape,false);



