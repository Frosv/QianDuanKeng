# FuckWebBUG
**看名字，懂意思**

本文会将HTML，CSS，JavaScript中遇到的问题整理出来，每个标签、样式、API都会整理到一起，使用的时候搜索标签、样式、API就能找到相关的问题

> 学会拥抱失败，期待失败，接受失败，并准备直面失败。————by《Soft Skills》

> 如果你想成功，你必须要学会收起自己脆弱的自尊心，勇敢走出去，别害怕让自己出丑。每一个著名演员、音乐家、专业运动员和公共演说家都曾有过表现不佳的时候，他们自觉地选择了走出困境，尽力而为。成功终将会来。你不可能专注做某件事而毫无长进，你只要坚持足够长的时间就会有收益。你的生存之道就是不必太在意。别害怕被人看作傻瓜。 ————by《Soft Skills》

> 准备好面对批评，但不要惧怕。总会有人不喜欢你的言论，或者不赞同你的观点。你永远不可能取悦每一个人。 ————by《Soft Skills》

***

### 关于近期更新内容

> 在准备机器学习以及公众号

***

### 前端规范

> 命名规范

**取名**

直接百度翻译吧！

**class -**

在写HTML的class时，使用"-"分割名字

```html

<div class="nav-box"></div>

```

**id 驼峰式**

在写HTML的id时，使用驼峰式命名

```html

<div id="navBox"></div>

```

**变量 驼峰式**

在JavaScript中，变量使用驼峰命名，比如

```JavaScript

var = navLength;

```

**变量对象 $**

在JavaScript中，变量对象使用"$"开头

```JavaScript

var $el = $('html');

```

**私有变量 _**

在JavaScript中，函数中的私有变量对象使用下划线开头

```JavaScript

var _this = $(this).val();

```

**代码缩进**

全部都使用2个空格作为缩进标准，每个编辑器不一样，但是空格都是一样的，所以请自行设置好

**代码整理**

每个编辑器都不一样，蛮出名的插件叫"Beautify"这个插件基本上蛮多编辑器都支持的都可以试试，大家在提交代码的时候都整理代码，这样方便别人打开浏览

**注释**

在HTML每个模块应写好注释，CSS也将按HTML的模块分注释，JavaScript也是一样，针对JavaScript如果功能复杂或者变量不在上下文请使用长条注释好，方便阅读

``` HTML

<!-- nav -->

<div class="nav-box"></div>

<!-- nav end -->

```

``` CSS
/* nav */

.nav-box{
  color: #fff;
}

/* nav end*/

```

``` JavaScript

//nav

console.log('ok')

//nav end

```

***

### 常用前端工具/库

**自己看好API锻炼自己英文水平，不懂的划词翻译**

[懒加载](https://github.com/tuupola/jquery_lazyload)

[轮播图](https://github.com/kenwheeler/slick)

[进度条](https://github.com/andreruffert/rangeslider.js)

[富文本](https://github.com/summernote/summernote)

[数据渲染](https://github.com/olado/doT)

[3D制作](https://github.com/mrdoob/three.js)

[图表制作百度Echarts](https://github.com/ecomfe/echarts)

[图片压缩](https://tinypng.com/)

[图片base64转换](https://c.runoob.com/front-end/59)

[正则表达式在线测试](http://tool.chinaz.com/regex/)

本地简单服务器(nodejs)

npm i anywhere -g
anywhere 端口号(默认8000)

本地服务器的作用是可以跑起服务，然后可以在本地做ajax请求json文件测试

***

### 参考资料

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

查看各种API，方便，实用

[雅虎35条准则原版](https://developer.yahoo.com/performance/rules.html)

[雅虎35条准则翻译](http://blog.csdn.net/magneto7/article/details/53140269)

平时在写代码的时候需要多注意可以提高你页面打开的速度

[ECMAScript 6入门](https://github.com/ruanyf/es6tutorial)

[免费的计算机编程类中文书籍](https://github.com/justjavac/free-programming-books-zh_CN)

[浏览器原理](http://kb.cnblogs.com/page/129756/)


