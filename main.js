canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

lamborgini_width=120;
lamborgini_height=70;
lamborgini_x=10;
lamborgini_y=10;

background_image="racing.jpg";
lamborgini_image="lamborghini.jpg";
bugati_image="bugati.jpg";

bugati_width=120;
bugati_height=70;
bugati_x=10;
bugati_y=100;

function add() 
{
    background_imgtag = new Image();
    background_imgtag.onload=uplodbackground;
    background_imgtag.src = background_image;

   lamborgini_imgtag= new Image();
    lamborgini_imgtag.onload=uplodLamborgini;
    lamborgini_imgtag.src = lamborgini_image;

    bugati_imgtag= new Image();
    bugati_imgtag.onload=uplodBugati;
    bugati_imgtag.src = bugati_image;
}

function uplodbackground() {
    ctx.drawImage(background_imgtag, 0,0, canvas.width , canvas.height);
}
function uplodLamborgini() {
    ctx.drawImage(lamborgini_imgtag,lamborgini_x,lamborgini_y,lamborgini_width,lamborgini_height);
}
function uplodBugati() {
    ctx.drawImage(bugati_imgtag,bugati_x,bugati_y,bugati_width,bugati_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {

keypressed=e.keyCode;
console.log(keypressed);
if(keypressed == '38'){
    L_up();
    console.log("up arrow key");
}
if(keypressed == '37'){
    L_left();
    console.log("left arrow key");
}
if(keypressed == '39'){
    L_right();
    console.log("right arrow key");
}
if(keypressed == '40'){
    L_down();
    console.log("down arrow key");
}
if(keypressed == '65'){
    B_up();
    console.log("a");
}
if(keypressed == '66'){
    B_left();
    console.log("b");
}
if(keypressed == '67'){
    B_right();
    console.log("c");
}
if(keypressed == '68'){
    B_down();
    console.log("d");
}

}

