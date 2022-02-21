function setup() {
}

function loop() {
  ctx.clearRect(0, 0, screenWidth, screenHeight);
  if (yubiTouched) {
    ctx.beginPath();
    ctx.arc(curYubiX, curYubiY, 200, 0, Math.PI*2);
    ctx.stroke();
  }
}

function touchStart() {
	
}

function touchMove() {
	
}

function touchEnd() {
	
}