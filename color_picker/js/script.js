window.addEventListener('load', start);

var red = null;
var green = null;
var blue = null;

function start() {
  console.log('hello world');
  red = window.document.querySelector('#red');
  red.value = 0;
  green = window.document.querySelector('#green');
  green.value = 0;
  blue = window.document.querySelector('#blue');
  blue.value = 0;
  getValue();
}

function getValue() {
  var redNum = window.document.querySelector('#redNum');
  var greenNum = window.document.querySelector('#greenNum');
  var blueNum = window.document.querySelector('#blueNum');
  var color = window.document.querySelector('#color');
  var rgb = null;

  function displayColor() {
    rgb =
      'rgb(' + redNum.value + ',' + greenNum.value + ',' + blueNum.value + ')';
    color.style.backgroundColor = rgb;
  }

  function pickColor(primaryColor, primaryValue) {
    primaryColor.addEventListener(
      'change',
      function () {
        primaryValue.value = primaryColor.value;
        displayColor();
      },
      false
    );
  }

  pickColor(red, redNum);
  pickColor(green, greenNum);
  pickColor(blue, blueNum);
}
