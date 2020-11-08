let w=410,h=728; //Inversion 10
let z=0;
let img=[];
let m;
let q=1;
let mn=-9;
let mx=9;
let canvas;

function setup() {  
	canvas=createCanvas(w,h);
	canvas.parent('canvas');
	for(let i=0;i<10;i++){
	console.log(q);
		img[i] = loadImage("data/Movie"+q+".jpg");
		q+=10;
	}
}

function draw() {
  background(200);
  if(mouseX>=0 && mouseX<=w){
  	m=map(mouseX,z,w,mn,mx);
	m=Math.round(m);
  }
	//console.log(m);
  createTarget();
}

function createTarget(){
	for(let i=1; i<=10; i++){
		if( m == -(10-i) ){
		push();
			scale(-1,1);//画面を反転させる。
			image(img[i-1], -width, 0, w, h); 
		pop();
		}else if( m == (10-i) ){
		push();
			image(img[i-1], 0, 0, w, h); 
		pop();
		}
	}
}
