(function () {
  var canvas = document.getElementById('myTopCanvas');
  var ctx = canvas.getContext('2d');
  canvas.style.float='left';
  var number =20;

  ctx.strokeStyle = randomColor();
  popBubble(number);
  var timer = setInterval(function () {
    popBubble(number);
  },1000);

  function popBubble(num) {
    var maxRadius=20, minRadius=6;
    var zone={
      width:300,
      height:150
    };
    ctx.clearRect(0, 0, zone.width, zone.height);
    for( var i=0;i<num;i++){
      ctx.beginPath();
      var circleObject={
        x:randomNumber(maxRadius,zone.width-maxRadius),
        y:randomNumber(maxRadius,zone.height-maxRadius),
        rad:randomNumber(minRadius,maxRadius)
      };
      var gr=ctx.createRadialGradient(circleObject.x,circleObject.y,1,circleObject.x,circleObject.y,circleObject.rad);
      gr.addColorStop(0,randomColor(.8));
      gr.addColorStop(0.4,randomColor(.3));
      gr.addColorStop(0.8,randomColor(.6));
      gr.addColorStop(1,randomColor(.2));

      ctx.fillStyle = gr;
      ctx.arc(circleObject.x, circleObject.y, circleObject.rad, 0, Math.PI * 2);
      ctx.fill();
    }

  }

  function randomColor(opacity) {
    var r, g, b;
    opacity = opacity || 1;
    r = randomNumber();
    g = randomNumber();
    b = randomNumber();
    return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
  }

  function randomNumber(min, max) {
    min = min || 0;
    max = max || 255;
    return Math.floor(Math.random() * (max - min) + min);
  }

})();




