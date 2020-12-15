var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
var query = document.getElementsByTagName("button");
var x = 0;
var y = 0;
var spreadx = 0;
var spready = 0;
var func = eval("spray");
var color ='#000000';

//listens to all the buttons and select the 
for (i = 0; i < query.length; i++) {
    query[i].addEventListener("click", function(event) {
        func = window[event.target.id]; 
    });
    }

//updating the values in real time
myCanvas.addEventListener('mousemove',event=>valueUpdate(event));

//drawing a line segment using mouse click
myCanvas.addEventListener('mousedown',e =>{
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    //painting across the travelled places
    myCanvas.addEventListener('mousemove',func);
});

//Stops drawing when the mouse click is released
myCanvas.addEventListener('mouseup',e =>{
    myCanvas.removeEventListener('mousemove',func);
});

//
function valueUpdate(event){
    x = event.offsetX;  y = event.offsetY;   
    document.getElementById("mydata").innerText = "X :"+x+" ; "+"Y :"+y;
}

function brush(){
    ctx.lineJoin = ctx.lineCap = 'butt'; 
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'rgb(0, 0, 0)';  
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.lineTo(x+5,y+5);
    ctx.stroke();
}

function lineSegment(){
    ctx.shadowBlur = 0;
    ctx.lineJoin = ctx.lineCap = 'round'; 
    ctx.lineTo(x,y);
    ctx.stroke();
}

function spray(){
    spreadx = Math.random()*20;
    spready = Math.random()*20; 
    ctx.lineJoin = ctx.lineCap = 'round'; 
    ctx.fillRect(x+spreadx,y-spready,2,2);
}

function smudge(){
    ctx.lineJoin = ctx.lineCap = 'round'; 
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgb(0, 0, 0)';
    ctx.lineTo(x,y);
    ctx.stroke();     
}

function pallete(id){
    color="#"+id;
}

function eraser(){
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgb(255, 255, 255)';
    ctx.lineJoin = ctx.lineCap = 'round'; 
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineTo(x,y);
    ctx.stroke();
}

function size(string){
    ctx.lineWidth = string;
}
