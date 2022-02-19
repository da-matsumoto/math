function setup() {
	ctx.lineWidth = 40;
  ctx.fillStyle = "pink";
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.arc(400, 500, 300, 0, 180*Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgb(160, 160, 160)";
  ctx.strokeStyle ="#990000";
  ctx.beginPath();
  ctx.arc(700, 500, 300, 0, 180*Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(250, 0, 0, 0.5)";
  ctx.beginPath();
  ctx.arc(550, 800, 300, 0, 180*Math.PI*2, true);
  ctx.fill();
}

function loop() {
}

function touchStart() {
	
}

function touchMove() {
	
}

function touchEnd() {
	
}