var $ = function (selector) {
  return document.querySelector(selector);
};

// 位移

$('#btn1').addEventListener('click', function (e) {
  $('#box1').style.transform = 'matrix(1,0,0,1,30,30)'
});

// 放大

$('#rangeX').addEventListener('input', function (e) {
  var Xval = $('#rangeX').value;
  var Yval = $('#rangeY').value;
  $('#box2').style.transform = 'matrix(' + Xval + ',0,0,' + Yval + ',0,0)';
  $('#inputTextX').innerHTML = Xval;
});

$('#rangeY').addEventListener('input', function (e) {
  var Xval = $('#rangeX').value;
  var Yval = $('#rangeY').value;
  $('#box2').style.transform = 'matrix(' + Xval + ',0,0,' + Yval + ',0,0)';
  $('#inputTextY').innerHTML = Yval;
});

//旋转

$('#rangeRotate').addEventListener('input', function (e) {
  var cosVal = Math.cos(this.value * Math.PI / 180),
    sinVal = Math.sin(this.value * Math.PI / 180);
  var valTransform = 'matrix(' + cosVal.toFixed(6) + ',' + sinVal.toFixed(6) + ',' + (-1 * sinVal).toFixed(6) + ',' + cosVal.toFixed(6) + ',0,0)';
  $('#box3').style.transform = valTransform;
  $('#inputRotate').innerHTML = this.value;
});

//拉伸

$('#rangeSkewX').addEventListener('input', function (e) {
  var tanValY = Math.tan($('#rangeSkewX').value * Math.PI / 180),
    tanValX = Math.tan($('#rangeSkewY').value * Math.PI / 180);
  var valTransform = 'matrix(1,' + tanValY.toFixed(6) + ',' + tanValX.toFixed(6) + ',1,0,0)';
  $('#box4').style.transform = valTransform;
  $('#inputSkewX').innerHTML = this.value;
});

$('#rangeSkewY').addEventListener('input', function (e) {
  var tanValY = Math.tan($('#rangeSkewX').value * Math.PI / 180),
    tanValX = Math.tan($('#rangeSkewY').value * Math.PI / 180);
  var valTransform = 'matrix(1,' + tanValY.toFixed(6) + ',' + tanValX.toFixed(6) + ',1,0,0)';
  $('#box4').style.transform = valTransform;
  $('#inputSkewY').innerHTML = this.value;
});