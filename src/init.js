$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //debugger;
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
       Math.random() * 1000
    );
  $(".dancer").hover(function(){
    $("span").addClass("mouseDancer");
  });
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });


  $(".moveDancerButton").on("click", function(event){
    var lineUp = function (){
      for (var i = 0; window.dancers.length; i++){
        window.dancers[i].moveLeft(10);
      }

    };
    lineUp();

  });

    $(".moveDancerCloser").on("click", function(event){
    var moveCloser = function (){
      var pointA = window.dancers[Math.floor(Math.random()*window.dancers.length)];
      var pointB = window.dancers[Math.floor(Math.random()*window.dancers.length)];
      while (pointA === pointB){
        pointA = window.dancers[Math.floor(Math.random()*window.dancers.length)];
      }
      var distance = pythag(pointA.left-pointB.left, pointA.top-pointB.top);
      while (distance> 100){
        pointA.top = $("body").height() * Math.random();
        pointB.top = $("body").height() * Math.random();
        pointA.left = $("body").width() * Math.random();
        pointB.left = $("body").width() * Math.random();
        pointA.setPosition(pointA.top,pointA.left);
        pointB.setPosition(pointB.top,pointB.left);
        distance = pythag(pointA.left-pointB.left, pointA.top-pointB.top);
      }
      // for (var i = 0; window.dancers.length; i++){
      //   window.dancers[i].moveLeft(10);
      // }

    };
    setInterval(moveCloser(), 1000);

  });

  var pythag = function(a,b){
    return Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
  }
});

