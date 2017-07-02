var $ = function (selector) {
  return document.querySelector(selector);
};

// 位移

$('#btn1').addEventListener('click', function (e) {
  $('#box1').style.transform = 'matrix(1,0,0,1,30,30)'
});

// 放大

$('#rangeX1').addEventListener('input', function (e) {
  var Xval = $('#rangeX1').value;
  var Yval = $('#rangeY1').value;
  $('#box2').style.transform = 'matrix(' + Xval + ',0,0,' + Yval + ',0,0)';
  $('#inputTextX1').innerHTML = Xval;
});

$('#rangeY1').addEventListener('input', function (e) {
  var Xval = $('#rangeX1').value;
  var Yval = $('#rangeY1').value;
  $('#box2').style.transform = 'matrix(' + Xval + ',0,0,' + Yval + ',0,0)';
  $('#inputTextY1').innerHTML = Yval;
});

//旋转

$('#rangeRotate1').addEventListener('input', function (e) {
  var cosVal = Math.cos(this.value * Math.PI / 180),
    sinVal = Math.sin(this.value * Math.PI / 180);
  var valTransform = 'matrix(' + cosVal.toFixed(6) + ',' + sinVal.toFixed(6) + ',' + (-1 * sinVal).toFixed(6) + ',' + cosVal.toFixed(6) + ',0,0)';
  $('#box3').style.transform = valTransform;
  $('#inputRotate1').innerHTML = this.value;
});