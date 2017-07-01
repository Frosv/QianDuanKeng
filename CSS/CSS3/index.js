var $ = function (selector) {
  return document.querySelector(selector);
};

$('#btn1').addEventListener('click',function(e){
  $('#box1').style.transform = 'matrix(1,0,0,1,30,30)'
});

