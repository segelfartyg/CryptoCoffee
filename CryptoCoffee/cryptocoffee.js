const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");

const width = 600;
const height = 600;

let combinations = [];
let count = 0;
let done = false;
let backnumber = 0;
let mugnumber = 0;
let earnumber = 0;

while(!done){
    main();
    count++;;
}

function main(){

    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");
    
    
    backnumber = Math.floor(Math.random() * 3) + 1;

    loadImage("./back" + backnumber + "_Rityta 1.png").then(back => {
     
        context.drawImage(back, 0, 0, 600, 600);    

        earnumber = Math.floor(Math.random() * 3) + 1;
        loadImage("./ear" + earnumber + "_Rityta 1.png").then(ear => {
            context.drawImage(ear, 0, 0, 600, 600);
    


            mugnumber = Math.floor(Math.random() * 3) + 1;
            loadImage("./mug" + mugnumber + "_Rityta 1.png").then(mug => {
                context.drawImage(mug, 0, 0, 600, 600);
               
    
                buildImage(canvas);
                count++;
    
            })     
        })
    });

   if(count == 10){
       done = true;
   }
    console.log(count);
}

 
function buildImage(canvas){
    const buffer = canvas.toBuffer("image/png");   
    fs.writeFileSync("./Generated/coffee" + count + ".png", buffer)
}
























