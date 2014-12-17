var SquareDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  var styleSettings = {
    "border":"20px solid blue",
    "border-radius":"0px"
  };
  this.$node.css(styleSettings);
  this.rotation = 0;
  var context = this;

};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.rotation += 30;
  this.$node.css('transform','rotate('+ this.rotation + 'deg)');
};

