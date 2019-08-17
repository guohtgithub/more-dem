var shadow;
var theata = 0;
var myCanvas;
var stars = [];

var type;
var options ={  
    Background :[10,10,10],
    Color1 : '#FF3054',
    Color2 : '#4614E9',
    Range : 360,
    Speed : 12,
    Points : 117,
    maxSize : 0,
    minSize: 0.9,
    Direction : 'Center',

    Random: function () { 
        options.Color1 = [random(0,255),random(0,255),random(0,255)]; 
        options.Color2 = [random(0,255),random(0,255),random(0,255)];        
        options.Speed = random(10,20);
        options.Range = random(400);
        options.Points = random(300,2000);
        options.maxSize = random(1,20);
        options.minSize = random(1,5);  
        options.Direction = random( ['Center', 'Left','Right','Up','Down'] );  

        // color1
        var color1 = rgbToHex(Math.floor(options.Color1[0]),Math.floor(options.Color1[1]),Math.floor(options.Color1[2]));
        color1Control.setValue(color1);

        //color2
        var color2 = rgbToHex(Math.floor(options.Color2[0]),Math.floor(options.Color2[1]),Math.floor(options.Color2[2]));
        color2Control.setValue(color2);
    },

    Save : function(){
        saveFrames("Star-Emission", "png", 1, 1);
    },

}


//rgb to hex颜色转换
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function setup() {
    let pc = isPC()
    if(pc){
        if(windowWidth < 1440){
            windowWidth = 1440;
        }
        myCanvas = createCanvas(windowWidth, windowHeight);
        background(10);
        for(var i = 0; i < 4001;i++){
            stars[i] = new Star();
        }
    }
}

function draw() {
    let pc = isPC()
    if(pc){
        if(options.isPNG == true){
            clear();
        }else{
            background(options.Background[0],options.Background[1],options.Background[2],30);//
        }
        if(options.Direction == 'Center'){
            translate(width/2,height/2);
        }else if (options.Direction == 'Right'){
            translate(0,height/2);
        }else if (options.Direction == 'Left'){
            translate(width,height/2);
        }else if (options.Direction == 'Down'){
            translate(width/2,0);
        }else if (options.Direction == 'Up'){
            translate(width/2,height);
        }

        for (var i = 0; i < options.Points; i++){
            stars[i].display();
            stars[i].update();
        }
    }
}



function Star(){
    this.x = random(-width*2,width*2);
    this.y = random(-height*4,height*4);
    this.z = random(width*2,width*4);
    this.pz = this.z;
    this.px = this.x;
    this.py = this.y;

    this.angle = 0;

    this.display = function(){

        var sx = map(this.x/this.z/2, -1, 1, -width, width);
        var sy = map(this.y/this.z/2, -1, 1, -height, height);

        var r = map(dist(sx,sy,this.px,this.py),0,width*3,options.minSize,options.maxSize);

        var percent = norm(dist(sx,sy,0,0), 0, options.Range);
        from = color(options.Color1);
        to = color(options.Color2);
        between = lerpColor(from, to, percent);

        stroke(between);
        strokeWeight(r);

        if(this.z >= 1 && sx <= width && sx > -width && sy > -height && sy < height ){
            line(this.px,this.py,sx,sy);   
            this.px = sx;     
            this.py = sy; 
        }          
    }

    this.update = function(){
        this.z -= options.Speed;    
        if(this.z < 1){
            this.z = random(width*1.5,width*2);
            this.x = random(-width,width);
            this.y = random(-height*2,height*2);
            this.px = map(this.x/this.z/2, -1, 1, -width, width);
            this.py = map(this.y/this.z/2, -1, 1, -height, height);
        }
    }

}

function isPC() {
    let userAgentInfo = navigator.userAgent;
    let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
        }
    }
    return flag;
}
