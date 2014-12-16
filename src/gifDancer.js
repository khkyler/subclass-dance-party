var GifDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  //this.$node = $('<span class="dancer"></span>')

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

GifDancer.prototype = Object.create(Dancer.prototype);
GifDancer.prototype.constructor = GifDancer;

GifDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);

  this.$node.toggle();
};

  GifDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    this.$node.append('<img src="src/giphy.gif">');
    var styleSettings = {
      top: top,
      left: left,
      //border: 'blue'

    };
    this.$node.css(styleSettings);
  };
