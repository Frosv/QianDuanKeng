# Webbugfuck
前端踩过的坑

HTML
1.input标签的type属性为range的时候，对小数点会自动变成取整

CSS
1.display: table-cell;与float: left;存在冲突，float会导致display无法实现
2.针对图片垂直居中问题，图片是个置换元素，有些特殊的特性。
.box {
 display: table-cell;
 vertical-align:middle;

 text-align:center;

 *display: block;
 *font-size: 175px;
 *font-family:Arial;

 width:200px;
 height:200px;
 border: 1px solid #eee;
}
.box img {
 vertical-align:middle;
}

<div class="box">
 <img src="" />
</div>

JavaScript
1.将功能封装，以便以后重复使用
