var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
var x = [];
var y = [];
var state = "";
//updating the values in real time
myCanvas.addEventListener('mousemove',event=>valueUpdate(event));

//drawing a line segment using mouse click
myCanvas.addEventListener('mousedown',e =>{
    ctx.beginPath();
    ctx.moveTo(x, y);
    state = "On";
    console.log(state);
    //painting across the travelled places
    myCanvas.addEventListener('mousemove',lineSegment);
});

myCanvas.addEventListener('mouseup',e =>{
    console.log("done");
    state = "";
    console.log(state);
    lineSegment();
    myCanvas.removeEventListener('mousemove',lineSegment);
});

function valueUpdate(event){
    x.push(event.offsetX);
    y.push(event.offsetY);
    document.getElementById("mydata").innerText = " "+x+" "+y;
}

function lineSegment(){
if(state==="on"){
    for(let i = 0;i<=x.length;i++){
        ctx.lineTo(x, y); 
        ctx.stroke();
    }
}
}




