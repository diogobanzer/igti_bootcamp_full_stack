window.addEventListener('load', start);

var red = null;
var green = null;
var blue = null;

function start() {
  console.log('hello world');
  red = window.document.querySelector('#red');
  green = window.document.querySelector('#green');
  blue = window.document.querySelector('#blue');
  getValue();
}

function getValue() {
  var redNum = window.document.querySelector('#redNum');
  var greenNum = window.document.querySelector('#greenNum');
  var blueNum = window.document.querySelector('#blueNum');
  var rgb = null;

  function displayColor() {
    rgb = 'rgb(' + redNum.value + ',' + green.value + ',' + blue.value + ')';
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
}
