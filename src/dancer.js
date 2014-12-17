// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.left = left;
  this.top = top;
  var context = this;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.$node.mouseover(function(){
    $(this).addClass("mouseDancer");
    var x = "+=" + (250-(Math.random() * 500)) + "px";
    var y = "+=" + (250-(Math.random() * 500)) + "px";
    context.move(x,y);

  });

  this.step();
  this.setPosition(top, left);

};
Dancer.prototype.findDistance = function(a,b){
    return Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
};

Dancer.prototype.moveDancer = function (pointA, pointB) {
  var distance = this.findDistance(pointA.left-pointB.left, pointA.top-pointB.top);
  while (distance> 100){
    pointA.top = $("body").height() * Math.random();
    pointB.top = $("body").height() * Math.random();
    pointA.left = $("body").width() * Math.random();
    pointB.left = $("body").width() * Math.random();
    pointA.move(pointA.top,pointA.left);
    pointB.move(pointB.top,pointB.left);
    distance = this.findDistance(pointA.left-pointB.left, pointA.top-pointB.top);
  }
};

Dancer.prototype.move = function(x,y){
  this.$node.animate({"left": x,"top": y}, "slow");
}

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
Dancer.prototype.moveLeft = function(fromLeft){
  this.setPosition(top, fromLeft);
};
