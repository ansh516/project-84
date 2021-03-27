canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
array_images=["8_thermal_raceway_2020_track_cars_tracking_front_0.jpg","racing-circus-Racing-Road-dark-athletic-track-stage-photo-backdrop-Vinyl-cloth-High-quality-Computer-print.jpg_q50.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
car1width=100;
car1height=90;
background_image="8_thermal_raceway_2020_track_cars_tracking_front_0.jpg";
car1="unnamed.png";
car1_x=10;
car1_y=10;
console.log("background_image="+background_image);
car1_image="unnamed.png";
car2width=120;
car2height=70;
car2_x=66;
car2_y=310
function add() {
background_imgTag = newImage();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;
car1_imgTag = newImage();
car1_imgTag.onload = uploadcar1;
car1_imgTag.src = car1_image;
car2_imgTag = newImage();
car2_imgTag.onload = uploadcar2;
car2_imgTag.src = car2_image;
}
function uploadBackground(){
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
ctx.drawImage(car1_imgTag, car1_x,car1_y, car1width,car1height);
}
function uploadcar2(){
  ctx.drawImage(car2_imgTag, car2_x,car2_y, car2width,car2height);
  }
window.addEventListener("keydown", my_keydown);
function my_keydown(e) { 
keyPressed = e.keyCode;
 console.log(keyPressed);
  if(keyPressed == '38') { up(); 
console.log("up");
 } 
 if(keyPressed == '40')
  { down(); 
console.log("down");
 } 
  if(keyPressed == '37') { left();
 console.log("left");
 } if(keyPressed == '39') { right();
 console.log("right");
 } } 
function up(){
if(car1_y>=0){
car1_y=car1_y-10;
console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();
}
}
function down(){
    if(car1_y<=500){
    car1_y=car1_y+10;
   }
    function left(){b
        if(car1_x>=0){
        car1_x=car1_x-10;
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
        }
        }
        function right(){
            if(car1_x<=700){
            car1_x=car1_x+10;
            console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y);
            uploadBackground();
            uploadcar1();
            console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
          }
          if(keyPressed=='87') 
          {
          car2_up();
          console.log("key w");
          }
          if(keyPressed=='83') 
          {
          car2_down();
          console.log("key s");
          }
          if(keyPressed=='65') 
          {
          car2_left();
          console.log("key a");
          }
          if(keyPressed=='68') 
          {
          car2_right();
          console.log("key d");
          }
          }