function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  console.log("running");
}

function draw() {
		fractialTree(windowWidth/2, windowHeight/2, 100, 4);


}

function fractialTree(x,y,height,i){
	branch(x,y,x ,windowHeight/2-height);


}

function branch(x, y, x2, y2) {
	stroke(255);
  line(x, y, x2, y2);
}
