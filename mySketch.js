var k = 0;

let words = ['STAY AT HOME'];
let indexWord = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
	
  fill(255,255,255);
  textSize(50);
  textAlign(CENTER);
	
  changeIt();
}

function draw() {
  background(0);
  k++;	
	
  translate(width/3, height/3);
  for (var i = 0; i < 5; i++) {
		for (var j = 0; j< words[indexWord].length; j++) {	
		 var dx = 50*sin(radians(k*1+j*10));
		 text(words[indexWord][j],50*j, -2*dx+(50+dx)*i); 
		}
  }
}


function changeIt() {
	indexWord++;
	if(indexWord >= words.length){
		indexWord = 0;
	}
}



