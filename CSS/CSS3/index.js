//快捷选择
var $ = function (selector) {
  return document.querySelector(selector);
};

//随机颜色

function randomColor(el) {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  $(el).style.backgroundColor = "rgb(" + r + ',' + g + ',' + b + ")";
}
randomColor('#box1');
randomColor('#box2');
randomColor('#box3');
randomColor('#box4');
randomColor('#box5');
randomColor('#box6');
randomColor('#box7');

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

// 3D x轴

$('#Rotate3dX').addEventListener('input',function(e){
  var rotateX = this.value;
  $('#box5').style.transform = 'rotateX('+rotateX+'deg)';
  $('#input3DRotateX').innerHTML = this.value;
});

// 3D y轴

$('#Rotate3dY').addEventListener('input',function(e){
  var rotateX = this.value;
  $('#box6').style.transform = 'rotateY('+rotateX+'deg)';
  $('#input3DRotateY').innerHTML = this.value;
});

// 3D z轴

$('#Rotate3dZ').addEventListener('input',function(e){
  var rotateX = this.value;
  $('#box7').style.transform = 'rotateZ('+rotateX+'deg)';
  $('#input3DRotateZ').innerHTML = this.value;
});

