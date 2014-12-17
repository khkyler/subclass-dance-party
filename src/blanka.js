var BlankaDancer = function(top, left, timeBetweenSteps){
  GifDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  //this.$node = $('<span class="dancer"></span>')

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.rotation = 0;
  this.$node.addClass("blanka");
  //this.$node.append(this.imgSource);
  //this.$node.addClass("gifDancer");
};

BlankaDancer.prototype = Object.create(GifDancer.prototype);
BlankaDancer.prototype.constructor = RyuDancer;
