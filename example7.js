function setup() {
}

function loop() {
  ctx.clearRect(0, 0, screenWidth, screenHeight);
  ctx.lineWidth = 40;
  ctx.beginPath();
  ctx.arc(curYubiX, curYubiY, 200, 0, Math.PI*2);
  ctx.stroke();
}

function touchStart() {
	ctx.strokeStyle = "red";
}

function touchMove() {
	ctx.strokeStyle = "pink";
}

function touchEnd() {
	ctx.strokeStyle = "grey";
}