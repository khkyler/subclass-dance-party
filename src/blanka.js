var BlankaDancer = function(top, left, timeBetweenSteps){
  GifDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node.addClass("blanka");

};

BlankaDancer.prototype = Object.create(GifDancer.prototype);
BlankaDancer.prototype.constructor = RyuDancer;
