var canvas;
var gameState;
var contestantCount;
var database;
var quiz;
var question;
var contestant; 
var Test;

function setup(){
  canvas = createCanvas(850,400);
 database = firebase.database;
var Test = new Quiz();
Test.getState();
Test.start();

}


function draw(){
  background("pink");

Test.display();

  
}
