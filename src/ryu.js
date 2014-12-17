var RyuDancer = function(top, left, timeBetweenSteps){
  GifDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node.addClass("ryu");

};

RyuDancer.prototype = Object.create(GifDancer.prototype);
RyuDancer.prototype.constructor = RyuDancer;

