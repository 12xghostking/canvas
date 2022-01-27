var canvas=document.querySelector('canvas')
canvas.width=window.innerWidth
canvas.height=window.innerHeight

var c=canvas.getContext('2d')
// c.fillStyle='rgba(255,0,0,0.5)'
// c.fillRect(100,100,30,30)
// c.fillStyle='rgba(255,255,0,0.5)'
// c.fillRect(400,300,67,67)
// //line
// c.beginPath()

// c.moveTo(50,300)
// c.lineTo(70,400)
// c.lineTo(380,300)
// c.strokeStyle='#274be4'
// c.stroke()
//arc
// c.beginPath()
// c.arc(500,500,30,0,Math.PI*2,false)
// c.strokeStyle='red'
// c.stroke()

// for(var i=0;i<30;i++){
//     var x=Math.random()*window.innerWidth
//     var y=Math.random()*window.innerHeight
//     c.beginPath()
//     c.arc(x,y,30,0,Math.PI*2,false)
//     c.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
//     c.stroke()
// }
    function Circle(x,y,dx,dy,radius,fill){
        this.x=x
        this.y=y
        this.dx=dx
        this.dy=dy
        this.minRadius=radius
        this.radius=radius
        this.draw=function(){
            c.beginPath()
            c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
            c.stroke()
            c.fillStyle=fill
            c.fill()
        }
        this.update=function(){
            if(this.x+this.radius>innerWidth||this.x-this.radius<0){
                this.dx=-this.dx
                
                }
                if(this.y+this.radius>innerHeight||this.y-this.radius<0){
                    this.dy=-this.dy
                    
                    }
                 
             
                this.x+=this.dx
                this.y+=this.dy
                //activity
                if(mouse.x-this.x<50&& mouse.x-this.x>-50&&mouse.y-this.y<50&&mouse.y-this.y>-50){
                    if(this.radius<maxRadius){
                         this.radius+=1
                    }
                   
                }
                else if(this.radius>this.minRadius){
                    this.radius-=1
                }
                this.draw()
        }
    } 
    
 
 
    var mouse={
        x:undefined,
        y:undefined
    }
    var maxRadius=50
    var minRadius=2
    window.addEventListener('mousemove',function(event){
        mouse.x=event.x
        mouse.y=event.y
        

 })   
 window.addEventListener('resize',function(){
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    init()
 })
 var circleArray=[]
function init(){
      circleArray=[]
    for(var i=0;i<400;i++){
        var radius=Math.random()*3+1
        var x=Math.random()*(innerWidth-2*radius)+radius
        var y=Math.random()*(innerHeight-2*radius)+radius
        var dx=(Math.random()-0.5)*5
        var dy=(Math.random()-0.5)*5
       
        var fill="#"+((1<<24)*Math.random()|0).toString(16);
        circleArray.push(new Circle(x,y,dx,dy,radius,fill))
        
    }
}
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight)
    for(var i=0;i<circleArray.length;i++)   {
        circleArray[i].update()
    }
}
init()
animate()