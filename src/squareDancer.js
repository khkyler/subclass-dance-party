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

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.rotation += 30;
  this.$node.css('transform','rotate('+ this.rotation + 'deg)');
};

