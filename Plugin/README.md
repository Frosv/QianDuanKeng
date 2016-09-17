
### 插件、封装

1.

使用单步调试查看别人的代码是怎么运行的，针对自己写插件的时候扩展思路很有必要

> step into：进入子函数

> step over：越过子函数，但子函数会执行

> step out：跳出子函数

step into就是单步执行，遇到子函数就进入并且继续单步执行；

step over是在单步执行时，在函数内遇到子函数时不会进入子函数内单步执行，而是将子函数整个执行完再停止，也就是把子函数整个作为一步。有一点,经过我们简单的调试,在不存在子函数的情况下是和step into效果一样的。

step out就是但单步执行到子函数内时，用step out就可以执行完子函数余下部分，并返回到上一层函
数。

2.

> jQuery插件

> 插件初始化

> 插件基本代码

```JavaScript
(function($) {
  var pluginName = 'slide';//定义插件名字
    var defaults = {//定义插件默认配置
    };

  function Plugin(element, options) {//插件初始化设置
    this.$window = $(window);
    this.$document = $(document);
    this.$element = $(element);

    this.options = $.extend({}, defaults, options); //后面覆盖前面
    //这里可以开始写自己需要把什么值传进来然后给其他的功能公用


    //改变上下文，将function中的this指向全局this
    this.nextEvent = $.proxy(this.nextEvent,this);
    this.prevEvent = $.proxy(this.prevEvent,this);
    this.showImg = $.proxy(this.showImg,this);

    this.init();//开始初始化
  };

  Plugin.prototype.init = function() {//将初始化封装，功能都可通过此方法添加
     this.bindEvent();//从这里开始调用其他功能
  };

  Plugin.prototype.onClick = function() {
    //改变上下文，将function中的this指向全局this，proxy在需要的时候在用，不要在初始化的时候去使用
    this.$element.on('click', next, $.proxy(this.nextEvent, this));
    this.$element.on('click', perv, $.proxy(this.prevEvent, this));
  };

  $.fn[pluginName] = function(options) {//插件对外接口
    var args = Array.prototype.slice.call(arguments, 1);//获取字符串之后的参数

    //Array 表示JavaScript中的Array类
    //prototype 表示调用Array的方法
    //slice 表示遍历从第几个开始
    //call 表示是thisobeject的一个方法
    //var args = Array.prototype.slice.call(arguments,1) 表示把调用方法的参数截取出来
    //options = 'hide',1,2,3,4
    //args = 1,2,3,4

    return this.each(function() {//回调，整个插件的开始
      var $this = $(this),
        data = $this.data('plugin_' + pluginName);

      // Create a new instance.
      if (!data) {
        $this.data('plugin_' + pluginName, (data = new Plugin(this, options)));//关键点在new 开始实例化所传入的参数
      };

      // Make it possible to access methods from public.
      // e.g `$element.rangeslider('method');`
      if (typeof options === 'string') {
        data[options].apply(data, args);
      };
    });
  };

})(jQuery);

**这是个匿名函数， 注意末尾的引号**

```
