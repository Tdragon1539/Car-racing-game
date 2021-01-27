canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car_width=100;
car_height=90;
car_x=10;
car_y=10;
car2_width=100;
car2_height=90;
car2_x=110;
car2_y=110;
background_image="racing.jpg";
car1_image= "car1.png";
car2_image= "car2.png";

function add(){

    background_img= new Image();
    background_img.onload=upload_background;
    background_img.src=background_image;

    car1_img= new Image();
    car1_img.onload=upload_car1;
    car1_img.src=car1_image;

    car2_img= new Image();
    car2_img.onload=upload_car2;
    car2_img.src=car2_image;
}


function upload_background(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function upload_car(){
    ctx.drawImage(car1_img, car_x, car_y, car_width, car_height);
}

function upload_car(){
    ctx.drawImage(car2_img, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
key_pressed=e.keyCode;

if (key_pressed=="38"){
    up();
}
if (key_pressed=="40"){
    down();
}
if (key_pressed=="37"){
    left();
}
if (key_pressed=="39"){
    right();
}

if (key_pressed=="38"){
    w();
}
if (key_pressed=="40"){
    s();
}
if (key_pressed=="37"){
    a();
}
if (key_pressed=="39"){
    d();
}
}


function up(){
    if(car_y>=0){
        car_y= car_y-10;
        upload_background();
        upload_car1();



    }

}

function down(){
if(car_y<=500){
    car_y= car_y+10;
    upload_background();
    upload_car1();
}

}

function left(){
    if(car_x>=0)
{ 
    car_x= car_x-10;
    upload_background();
    upload_car1();
}
}

function right(){
    if(car_x<=600){
car_x= car_x+10;
upload_background();
upload_car1();
    }
}





function w(){
    if(car2_y>=0){
        car2_y= car2_y-10;
        upload_background();
        upload_car2();



    }

}

function s(){
if(car2_y<=500){
    car2_y= car2_y+10;
    upload_background();
    upload_car2();
}

}

function a(){
    if(car2_x>=0)
{ 
    car2_x= car2_x-10;
    upload_background();
    upload_car2();
}
}

function d(){
    if(car2_x<=600){
car2_x= car2_x+10;
upload_background();
upload_car2();
    }
}





