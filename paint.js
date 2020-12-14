var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
var x = 0;
var y = 0;
//updating the values in real time
myCanvas.addEventListener('mousemove',event=>valueUpdate(event));

//drawing a line segment using mouse click
myCanvas.addEventListener('mousedown',e =>{
    ctx.beginPath();
    ctx.moveTo(x, y);
    //painting across the travelled places
    myCanvas.addEventListener('mousemove',lineSegment);
});

myCanvas.addEventListener('mouseup',e =>{
    console.log("donee");
    lineSegment();
    myCanvas.removeEventListener('mousemove',lineSegment);
});
function valueUpdate(event){
    x = event.offsetX;
    y = event.offsetY;
    document.getElementById("mydata").innerText = " "+x+" "+y;
}
function lineSegment(){
    ctx.lineTo(x, y); 
    ctx.stroke();
}




