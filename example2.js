function setup() {
	// 円弧
  ctx.beginPath();
  // 中心のX座標,中心のY座標,半径,開始角度,終了角度,半時計回りに描くのか？
  ctx.arc(500, 200, 100, 30/180*Math.PI, 120/180*Math.PI, true);
  ctx.stroke();

  // これ以降に描く線は14になる
  ctx.lineWidth = 14;

  // 楕円
  ctx.beginPath();
  // 中心のX座標,中心のY座標,横半径,縦半径,傾き,開始角度,終了角度,半時計回りに描くのか？
  ctx.ellipse(500, 600, 200, 100, 45/180*Math.PI, 30/180*Math.PI, 120/180*Math.PI, true);
  ctx.stroke();
}

function loop() {
}

function touchStart() {
	
}

function touchMove() {
	
}

function touchEnd() {
	
}