function setup() {
	// 線
	ctx.beginPath();
	ctx.moveTo(200, 100);
	ctx.lineTo(800, 900);
	ctx.stroke();

	// 枠線
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(screenWidth, screenHeight);
	ctx.lineTo(screenWidth/3, screenHeight);
	ctx.lineTo(0, 0);
	ctx.stroke();

	// 三次のベジェ曲線
	ctx.beginPath();
	ctx.moveTo(100, 100);
	ctx.bezierCurveTo(300, 200, 100, 300, 200, 400);
	ctx.stroke();

	// 二次のベジェ曲線
	ctx.beginPath();
	ctx.moveTo(200, 500);
	ctx.quadraticCurveTo(300, 600, 100, 700);
	ctx.stroke();

	// 塗りつぶし
	ctx.beginPath();
	ctx.moveTo(screenWidth*0.5, screenHeight*0.1);
	ctx.lineTo(screenWidth, 0);
	ctx.lineTo(screenWidth*0.8, screenHeight*0.6);
	ctx.lineTo(screenWidth*0.4, screenHeight*0.2);
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