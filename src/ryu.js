var RyuDancer = function(top, left, timeBetweenSteps){
  GifDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  //this.$node = $('<span class="dancer"></span>')

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.rotation = 0;
  this.$node.addClass("ryu");
  //this.$node.append(this.imgSource);
  //this.$node.addClass("gifDancer");
};

RyuDancer.prototype = Object.create(GifDancer.prototype);
RyuDancer.prototype.constructor = RyuDancer;

// GifDancer.prototype.step = function(){

//   Dancer.prototype.step.call(this);

//   //sets rotation on the gif
//   this.rotation += 30;
//   this.$node.css('transform','rotate('+ this.rotation + 'deg)');

// };

// GifDancer.prototype.setPosition = function(top, left){
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/

//   var styleSettings = {
//     top: top,
//     left: left,
//     //border: 'blue'

//   };
//   this.$node.css(styleSettings);
// };
