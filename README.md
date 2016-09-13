# FuckWebBUG
**看名字，懂意思**

本文会将HTML，CSS，JavaScript中遇到的问题整理出来，每个标签、样式、API都会整理到一起，使用的时候搜索标签、样式、API就能找到相关的BUG问题

### 布局

1.

在拿到设计稿的时候先要将页面上的元素拆分，在遇到动态加载的数据标签时应当思考容器里所放入的数据是否会影响布局，做到不让数据影响布局，布局能不被数据的长度宽度打乱，如果页面上没给出数据的极限值就由我们自己去思考如何制造极限值然后去解决

```html
<p>99999999999999999999999999999999999</p>

```

```css
p{
 width:2.33px;
}
```

2.

元素之间不要相互影响，如果p标签的数据过长会导致span标签被挤出，所以不应该用margin-left来扩展两个元素之间的宽度，应该让span跟随其变化，不要使用固定值

```html
<p>22222</p><span>3333</span>
```
```css
span{
 margin-left:233px;
}


```



### HTML

1.

> input

> type='range'

input标签的type属性为range的时候，对小数点会自动变成取整

### CSS

1.

> display:table-cell

> vertical-align:middle

display: table-cell;与float: left;存在冲突，float会导致display无法实现

2.

> display:table-cell

> vertical-align:middle

针对图片垂直居中问题，图片是个置换元素，有些特殊的特性。

```css
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
```

3.

> display:table-cell

> vertical-align:middle

在遇到位置出问题的情况下，仔细看好上下文所设置的元素，特别是在图片的居中问题上，应该多往父元素去看css，因为很多时候可能是父元素的css问题。

4.

> background 

[base-48转换](http://c.runoob.com/front-end/59)

有时候很多“雪碧图”可以将其转换成base-48来直接放入css样式里，这样就可以节省我们在background里去找文件引用

### CSS

1.

记住 hex code 遵循 red-green-blue（红-绿-蓝），或称为 rgb 格式。hex code 中的前两位表示颜色中红色的数量，第三四位代表绿色的数量，第五六位代表蓝色的数量.

### JavaScript

针对JavaScript的api加上自己对其的理解，斜体为*用途*，粗体是**理解**

### A-E

> Math.abs(number)

*返回数字的绝对值*

**在计算的时候使用**

> Math.acos(number)

*返回数字的反余弦值*

**在计算的时候使用**

> strVariable.anchor(anchorString)

*在对象中的指定文本两端放置一个有name属性的html锚点*

**锚点这个感觉平时还没什么用途**

> apply([thisObj],[argArray])

*应用某一对象的一个方法，用另一个对象替换当前对象*

**这个方法是很重要的，在写插件的时候经常会用到，将一个方法（function）应用到另一个对象（object）上**

> Math.asin(number)

*返回数字的反正弦值*

**在计算的时候使用**

> Math.atan(number)

*返回数字的反正切值*

**在计算的时候使用**

> Math.atan2(y, x)

*返回由 X 轴到 (y,x) 点的角度（以弧度为单位）*

**在制作旋转之类的时候使用**

> myEnum.atEnd()

*返回一个 Boolean 值，指明枚举算子是否位于集合的末尾*

**这个感觉目前没用到的地方**

> strVariable.big( )

*把 HTML <big> 标记放置在 String 对象中的文本两端*

> strVariable.blink( )

*把 HTML <blink> 标记放置在 String 对象中的文本两端*

> strVariable.bold()

*把 HTML <b> 标记放置在 String 对象中的文本两端*

> call([thisObj,[arg]...)

*调用一个对象的一个方法，以另一个对象替换当前对象*

**call在插件制作中是一个非常重要的方法，将arguments取出然后传递**

> Math.ceil(number)

*返回大于等于其数字参数的最小整数*

> strObj.charAt(index)

*返回指定索引位置处的字符*

>  strObj.charCodeAt(index)

*返回一个整数，代表指定位置上字符的 Unicode 编码*

> rgExp.compile(pattern, [flags])

*把正则表达式编译为内部格式，从而执行得更快*

> array1.concat(A,B)

*返回一个新数组，这个新数组是由两个或更多数组组合而成的*

**平时在结合数组的时候用到**

> Math.cos(number)

*返回数的余弦值*

> decodeURI(URIstring)

*返回一个已编码的统一资源标识符 (URI) 的非编码形式*

> decodeURIComponent(encodedURIString)

*返回统一资源标识符 (URI) 的一个已编码组件的非编码形式*

> array.dimensions( ) 

*返回 VBArray 的维数*

> encodeURI(URIString)

*将文本字符串编码为一个有效的统一资源标识符 (URI)*

> encodeURIComponent(encodedURIString)

*将文本字符串编码为一个统一资源标识符 (URI) 的一个有效组件*

> escape(charString)

*对 String 对象编码以便它们能在所有计算机上可读*

> eval(codeString)

*检查 JScript 代码并执行*

> rgExp.exec(str)

*用正则表达式模式在字符串中运行查找，并返回包含该查找结果的一个数组*

> Math.exp(number)

*返回 e（自然对数的底）的幂*

### F-I

> strVariable.fixed( )

*把 HTML <TT> 标记放置在 String 对象中的文本两端*

> Math.floor(number)

*返回小于等于其数值参数的最大整数*

> strVariable.fontcolor(colorVal)


*把带有 COLOR 属性的一个 HTML <FONT> 标记放置在 String 对象中的文本两端*

> strVariable.fontsize(intSize)

*把一个带有 SIZE 属性的 HTML <FONT> 标记放置在 String 对象中的文本的两端*

> String.fromCharCode([code1[, code2[, ...[, codeN]]]])

*从一些 Unicode 字符值中返回一个字符串*

> dateObj.getDate() 

*返回Date对象中用本地时间表示的一个月中的日期值*

**获取时间，经常用到，在一些记录时间的地方**

> dateObj.getDay()

*返回 Date 对象中用本地时间表示的一周中的日期值*

> dateObj.getFullYear()

*返回date对象中用本地时间表示的年份值*

> dateObj.getHours()

*返回date对象中用本地时间表示的小时值*

> strObj.indexOf(subString,[startIndex])

*返回 String 对象内第一次出现子字符串的字符位置*

> isFinite(number)

*返回一个 Boolean 值,指明所提供的数字是否是有限的*

> isNaN(numValue)

*返回一个 Boolean 值，指明提供的值是否是保留值 NaN （不是数字）*

**这个是‘不是数字’，所以判断数字就只需要!isNaN就可以做判断了，也不用写什么正则表达式了**

> enumObj.item()

*返回集合中的当前项*

### J-R

> arrayObj.join(separator)

*返回字符串值，其中包含了连接到一起的数组的所有元素，元素由指定的分隔符分隔开来*

> strObj.lastIndexOf(substring,[startindex])

*返回 String 对象中子字符串最后出现的位置*

> safeArray.lbound(dimension) 

*返回在 VBArray 的指定维中所使用的最小索引值*

> stringVar.localeCompare(stringExp)

*返回一个值，指出在当前的区域设置中两个字符串是否相同*

**做查重或者在其他方面可以用到**

> Math.log(number) 

*返回数字的自然对数*

> stringObj.match(rgExp) 

*使用正则表达式模式对字符串执行查找，并将包含查找的结果作为数组返回*

**这个感觉很有用啊，可以做很多东西，让东西自己找出来**

> Math.max(number)

*返回给出的零个或多个数值表达式中较大者*

> Math.min(number)

*返回给出的零个或多个数值表达式中较小的值*

> enumObj.moveFirst( )

*重新将集合中的当前项设置为第一项*

> enumObj.moveNext( )

*将集合中的当前项移动到下一项*

> Date.parse(dateVal)

*解析一个包含日期的字符串，并返回该日期与 1970 年 1 月 1 日午夜之间所间隔的毫秒数*

> parseFloat(numString)

*返回由字符串转换得到的浮点数*

**获取html里的数值了之后需要先转换再比较，不然string比较会变成ASCII再比较，会出现比较不对的结果**

>  parseInt(numString, [radix])

*返回由字符串转换得到的整数*

> arrayObj.pop( )

*移除数组中的最后一个元素并返回该元素*

> Math.pow(base, exponent) 

*返回底表达式的指定次幂*

> arrayObj.push([item1 [item2 [. . . [itemN ]]]])

*将新元素添加到一个数组中，并返回数组的新长度值*

> Math.random( )

*返回介于 0 和 1 之间的伪随机数*

**做抽奖的时候可以用到**

> stringObj.replace(rgExp, replaceText)

*返回根据正则表达式进行文字替换后的字符串的复制*

> stringObj.replace(rgExp, replaceText)

*返回根据正则表达式进行文字替换后的字符串的复制*

> arrayObj.reverse( )

*返回一个元素顺序被反转的 Array 对象*

**在制作排序的时候，将所获得的东西反过来**

> Math.round(number) 

*返回与给出的数值表达式最接近的整数*

### S

> stringObj.search(rgExp)

*返回与正则表达式查找内容匹配的第一个子字符串的位置*

> dateObj.setDate(numDate)

*设置Date对象中用本地时间表示的数字日期*

### Jquery

针对JavaScript的api加上自己对其的理解，斜体为*用途*，粗体是**理解**

### 核心

> each(callback)

*以每一个匹配的元素作为上下文来执行一个函数*

**在遍历数组对象后然后执行一系列的操作**

> size()

*当前匹配的元素个数*

> length()

*当前匹配的元素长度*

> selector()

*返回jq原始选择器*

**比如$('a').selector()会返回a**

> context

*返回原始匹配节点内容*

**与selector同时使用可以更好的做判断选择器是否选择正确**

> get([index])

*获取匹配的index上的元素*

> index([selector|element])

*搜索匹配元素，并返回相应元素的索引值，从0开始*

> data([key],[value])

*在元素上存放或者读取数据*

**data-是html5的一个新加入的属性，可以将自定义的data属性轻松获取，记得在html标签上定义的时候data-type-name，在js中获取就要写成data('dataName')，这是因为data支持驼峰式定义法**

> removeData([name|list])

*移除元素上存放的data*

> queue(element,[queueName])

*显示或者操作匹配元素上执行的函数队列*

**迷之方法，不知道有什么用**

 > dequeue([queueName])

*从队列最前端移除一个队列函数并执行*

**同上**

> clearQueue([queueName])

*清空对象上尚未执行的所有队列*

**同上**

> jQuery.fn.extend(object)

*扩展jQuery元素集来提供新的方法（通常用来制作插件）*

> jQuery.extend(object)

*扩展jQuery对象本身*

**具体使用：this.options = $.extend({}, defaults(默认配置), options(传入配置));传入顺序是从后往前，后面的将会覆盖前面的默认配置，这样可以做到有默认属性可以在初始化的时候能使用**

> jQuery.noConflict([extreme])

*运行这个函数将变量由$的控制权让渡给第一个实现它的库*

**jQuery.noConflict()就是$不能使用，必须使用jQuery来作为开头**

### 选择器

> $('#id')

*选择id*

**使用任何的元字符（如 !"#$%&'()*+,./:;<=>?@[\]^`{|}~）作为名称的文本部分， 它必须被两个反斜杠转义：\\**

$('#fuckYou')

***

> element

*选择给定元素的所有元素*

$('div')

***

> .class

*根据给定的css类型选择元素*

$('.fuck-you')

***

> *

*匹配所有元素*

$('*')

***

> selector1,selector2,selectorN

*将每一个选择器匹配到的元素合并然后返回*

**当selector是变量的时候应该$(a+','+b+','c)**

***

> ancestor descendant

*匹配祖先元素下得所有后代元素*

***

> parent > child

*匹配给定元素下的所有子元素（子元素里的后代元素不会被匹配）*

***

> prev + next

*匹配所有紧接在prev元素后的next元素*

***

> prev ~ siblings

*匹配prev元素之后的所有siblings元素*

***

> :first

*匹配第一个元素*

***

> :not(selector)

*去除所有给定的选择器匹配元素*

**在jQuery1.3中支持复杂选择器（:not(div a)和:not(div,a)）**

***

> :even

*匹配偶数*

***

> :odd

*匹配单数*

***

> eq(index)

*匹配一个给定的索引值的元素*

> gt(index)

*匹配所有大于给定索引值得元素*

***

> :last

*最后一个元素*

***

> lt(index)

*匹配所有小于给定索引值得元素*

***

> :header

*匹配如h1，h2等标题*

***

> :animated

*匹配所有正在执行的动画*

***

> :focus

*匹配当前获取焦点的元素*

**jQuery1.6+**

***

> :root

*选择该文档的根元素*

**jQuery1.9+**

> :target

*选择由文档URL的格式化识别码表示的目标元素*

**jQuery1.9+**

***

> :contains(text)

*选择包含给定文本的元素*

***

> :empty

*匹配所有不包含子元素或者文本的空元素*

***


1.

> $()

$(fuck.a,fuck.b)是找不到的，Jquery中的语法是在第二个中找第一个，正确的写法是$(fuck.a+','fuck.b)用逗号分隔开

2.

> $().prototype

在我们不熟悉Jquery的选择器后有什么功能的情况下，我们可以使用prototype去打印查看里面所封装好的功能


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

### 压缩

> gulp uglifyjs webpack

使用这些工具来帮助我们去进行压缩混淆整理我们的JavaScript代码，这能让我们在上线的时间让网站加快加载
