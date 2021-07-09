canvas = document.getElementById("myCanvas");
ctx = canvas.getContext; 

rover_width = 100;
rover_height = 90;

background_Img = "mars.jpg";
rover_Img = "rover.png";

roverx = 10;
rovery = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag = background_Img;
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag = rover_Img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, roverx, rovery, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == 37) {
        left();
        console.log("left");
    }

    if(keyPressed == 38) {
        up();
        console.log("up");
    }

    if(keyPressed == 39) {
        right();
        console.log("right");
    }

    if(keyPressed == 40) {
        down();
        console.log("down");
    }

}

function up() {
    if(rovery >= 0) {
        rovery = rovery - 10;
        console.log("When up arrow is pressed, x =" + roverx + " and y = " + rovery);
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if(rovery <= 500) {
        rovery = rovery + 10;
        console.log("When up arrow is pressed, x =" + roverx + " and y = " + rovery);
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if(roverx >= 0) {
        roverx = roverx - 10;
        console.log("When up arrow is pressed, x =" + roverx + " and y = " + rovery);
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if(roverx <= 700) {
        roverx = roverx + 10;
        console.log("When up arrow is pressed, x =" + roverx + " and y = " + rovery);
        uploadBackground();
        uploadRover();
    }
}

