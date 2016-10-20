### Jquery

针对JavaScript的api加上自己对其的理解,斜体为*用途*,粗体是**理解**

### 核心

> 驼峰式

*在JavaScript中很多的名称都是以fuckYou这样的第一个单词小写之后的每次单词首个字母大写的方式命名,方便别人阅读此函数的大致意思也可以方便自己在下次处理的时候能马上想起来,而且在底层中所有的都是以驼峰式的为标准,平时写的marign-left在浏览器里其实是marignLeft*

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

*搜索匹配元素,并返回相应元素的索引值,从0开始*

> data([key],[value])

*在元素上存放或者读取数据*

**data-是html5的一个新加入的属性,可以将自定义的data属性轻松获取,记得在html标签上定义的时候data-type-name,在js中获取就要写成data('dataName'),这是因为data支持驼峰式定义法**

> removeData([name|list])

*移除元素上存放的data*

> queue(element,[queueName])

*显示或者操作匹配元素上执行的函数队列*

**迷之方法,不知道有什么用**

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

**具体使用：this.options = $.extend({}, defaults(默认配置), options(传入配置));传入顺序是从后往前,后面的将会覆盖前面的默认配置,这样可以做到有默认属性可以在初始化的时候能使用**

> jQuery.noConflict([extreme])

*运行这个函数将变量由$的控制权让渡给第一个实现它的库*

**jQuery.noConflict()就是$不能使用,必须使用jQuery来作为开头**

### 选择器

> $('#id')

*选择id*

**使用任何的元字符（如 !"#$%&'()*+,./:;<=>?@[\]^`{|}~）作为名称的文本部分, 它必须被两个反斜杠转义：\\**

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

*匹配如h1,h2等标题*

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

> :has

*匹配含有选择器所匹配的元素的元素*

> :parent

*匹配含有子元素或者文本的元素*

> :hidden

*匹配所有不可见元素*

> :visible

*匹配所有的可见元素*

> [attribute]

*匹配包含给定属性的元素*

> :first-child

*匹配第一个子元素*

> :frist-of-type

*查找作为父元素的span类型子元素中的"长子"的span标签*

> :nth-child

*匹配其父元素下的第N个子或者偶元素*

> :only-child

*匹配某元素是父元素中唯一的子元素*

> :input  :checkbox :*

*匹配各种标签或者type*

***

### AJAX

> $.ajax(url,[settings])

*通过HTTP请求加载远程数据*

> load(url,[data],[callback])

*载入远程HTML文件代码并插入至DOM中*

> $.get(url,[data],[fn],[type])

*通过远程HTTP GET请求载入信息*

> $.getJSON(url,[data],[fn])

*通过HTTP GET请求载入JSON数据*

> $.getScript(url,[callback])

*通过HTTP GET请求载入并执行一个JavaScript文件*

> $.post(url,[data],[fn],[type])

*通过远程HTTP POST 请求载入信息*

> ajaxComplete(callback)

*AJAX请求完成时执行函数(AJAX事件)*

> ajaxError(callback)

*AJAX请求发生错误时执行函数(AJAX事件)*

> ajaxSend(callback)

*AJAX请求发送前执行函数(AJAX事件)*

> ajaxStart(callback)

*AJAX请求开始执行时函数(AJAX事件)*

> ajaxStop(callback)

*AJAX请求结束执行时函数(AJAX事件)*

> ajaxSuccess(callback)

*AJAX请求成功执行时函数(AJAX事件)*

### 属性

> attr(name|pro|key,val|fn)

*设置或返回被选元素的属性值*

> removeAttr(name)

*从每个匹配的元素中删除一个属性*

> prop(name|properties|key,value|fn)

*获取在匹配的元素集中的第一个元素的属性值*

> removeProp(name)

*用来删除由.prop方法设置的属性值*

**在有些特定的属性上如果.attr()无法获取就要用.prop()来获取**

> addClass(class|fn)

*为每个匹配的元素添加制定的类名*

> removeClass([class|fn])

*从匹配的所有元素中删除全部或者制定的类*

> toggleClass(class|fn[,sw])

*如果存在(不存在)就删除(添加)一个类*

**在制作一个点击变化的时候可以使用这个**

> html([val|fn])

*取得第一个匹配元素的html的内容*

> text([val|fn])

*取得所有匹配元素的内容*

> val([val|fn|arr])

*获得匹配元素的当前值*

### CSS

> css(name|pro|[,val|fn])

*访问匹配元素的样式属性*

> $.cssHooks

*给属性加上前缀*

> offset([coordinates])

*获取匹配元素在当前视口的相对偏移*

> position()

*获取匹配元素相对父元素的偏移*

> scrollTop([val])

*获取匹配元素相对滚动条顶部的偏移*

> scrollTop([val])

*获取匹配元素相对滚动条左侧的偏移*

> height([val|fn])

*取得匹配元素当前计算的高度值*

**有些父元素在没设置高度值的时候也无法获取是因为你没清除浮动,clearfix**

> width([val|fn])

*取得第一个匹配元素当前计算的高度值*

> innerHeight()

*获取第一个匹配元素内部区域高度(包括补白,不包括边框)*

> innerWidth()

*获取第一个匹配元素内部区域宽度*

> outerHeight([soptions])

*获取第一个匹配元素外部高度(默认包括补白和边框)*

> outerWidth([options])

*获取匹配元素外部宽度*

### 文档处理

> append(content|fn)

*向匹配元素内部追加内容*

> appendTo(content)

*将匹配元素追加到另一个制定的元素中*

> prepend(content|fn)

*向匹配元素内部前置追加内容*

> prepend(content)

*将匹配元素追加到另一个制定的元素中*

> after(content|fn)

*在匹配元素之后插入内容*

> before(content|fn)

*在匹配元素之前插入内容*

> wrap(html|element|fn)

*将匹配元素用其他元素的结构化标记包裹起来*

> unwrap()

*移除父元素*

> replaceWith(content|fn)

*将匹配元素替换成制定的HTML或DOM元素*

> empty()

*删除匹配元素集合中的所有子节点*

> remove([expr])

*从DOM中删除所有匹配的元素*

> detach([expr])

*与remove不同在于事件和数据都会保留*

> clone([Even[,deepEven]])

*克隆匹配的DOM元素并且选中这些克隆的副本*

### 筛选

> eq(index|-index)

*获取匹配元素的第N个元素*

> first()

*获取第一个元素*

> last()

*获取最后一个元素*

> hasClass(class)

*检测当前元素是否含有特定的类*

> filter(expr|obj|ele|fn)

*筛选出与指定表达式匹配的元素集合*

> is(expr|obj|ele|fn)

*根据选择器、DOM元素或者JQ对象来检测匹配元素集合*

> map(callback)

*将一组元素转换成其他数组*

> has(expr|ele)

*保留包含特定后代的元素,去掉那些不含有指定后代的元素*

> not(expr|ele|fn)

*删除与指定表达式匹配的元素*

> slice(start,[end])

*选取一个匹配的子集*

> children([expr])

*获取子元素*

> closest(expr|object|element)

*从元素开始向上级元素匹配,并返回最先匹配到的元素*

> find(expr|obj|ele)

*搜索所有与指定表达式匹配的元素*

> next([expr])

*匹配元素的下一个元素*

> nextAll([expr])

*查找当前元素之后所有的同辈元素*

> nextUntil([ele|fn])

*查找当前元素之后所有的同辈元素,直到遇到匹配的那个元素为止*

> offsetParent()

*返回第一个匹配元素用于定位的父节点*

> parent([expr])

*获取元素的第一个父元素*

> parents([expr])

*获取所有匹配元素的祖先元素的合集*

> parentsUntil([expr|element][,filter])

*查找当前元素的所有的父辈元素,直到遇到匹配的元素为止*

> prev([expr])

*获取之前的同辈元素*

> prevall([expr])

*查找当前元素之前的所有同辈元素*

> prevUntil([ele][,f])

*查找当前元素之前所有同辈元素,直到遇到匹配的元素为止*

> siblings([expr])

*取得一个白喊匹配元素中的当下的子元素的同辈元素,子元素中的元素不匹配*

> add[expr|ele|html|obj[,con]]

*将匹配的元素添加在对象中*

**根本版本不同有区别,用到再说**

> addSelf()

*加入先前所选的加入当前元素中*

**1.8版本之后被标记为过时元素**

> addBack()

*添加堆栈中元素集合到当前集合,一个选择性的过滤选择器*

> contents()

*查找匹配元素内部所有的子节点(包括文本节点)*

> end()

*返回最新一个“破坏性”操作之前*

**“破坏性”操作指对JQ元素进行操作改变原有的结构**

### 事件

> ready(fn)

*在DOM加载完后执行*

> on(event,[select],[data],fn)

*选择元素上的事件绑定*

> off(event,[select],[fn])

*移除on()*

> one(type.[data],fn)

*为匹配元素绑定一次性事件*

> trigger(type,[data])

*触发匹配元素上的某些事件*

> triggerHandler(type,[data])

*这个特殊的方法将会触发制定的事件类型上的所有绑定的处理函数*

> hover([over,]out)

*鼠标悬停事件*

> toggle([speed],[easing],[fn])

*用于绑定两个或者多个事件处理器函数,hide和show相互切换*

> blur([data],[fn])

*当元素失去焦点时触发blur事件*

> change([data],[fn])

*当元素的值发生改变时,会发生change事件*

> click([data],fn)

*触发每一个匹配元素的click事件*

> dblclick([data],fn)

*当双击元素时,会触发事件*

> error([data],fn)

*当元素遇到错误(没有正确载入)时触发事件*

> focus([data],fn)

*当元素获取焦点时触发*

> focusin([data],fn)

*当元素获取焦点时触发,父元素上可以检测子元素获取焦点的事件*

> focusout([data],fn)

*当元素失去焦点触发,父元素也可以检测到*

> keydown([data],fn)

*当键盘或者按钮按下时触发*

> keypress([data],fn)

*当键盘或者按钮按下时触发在获得焦点的元素上*

> keyup([data],fn)

*当按钮松开时触发*

> mousedown([data],fn)

*当鼠标指针移动到元素上并按下鼠标时触发事件*

> mouseenter([data],fn)

*当鼠标穿过元素时才触发,经常与mouseleave一起*

> mouseleave([data],fn)

*当鼠标移开时触发*

> mousemove([data],fn)

*当鼠标在指定元素中移动时触发*

> mouseout([data],fn)

*当鼠标从元素上移开时触发*

> mouseover([data],fn)

*当鼠标在元素上方时触发*

> mouseup([data],fn)

*当鼠标在元素上松开按钮时触发*

> resize([data],fn)

*当调整浏览器窗口大小时触发*

> scroll([data],fn)

*当滚动指定滚动的元素时触发*

> select([data],fn)

*当textarea或者文本类型的input元素中的文本被选中时触发*

> submin([data],fn)

*当提交表单时触发*

> unload([data],fn)

*当用户离开页面时触发*

### 效果

> show([s,[e],[fn]])

*显示隐藏的匹配元素*

> hide([s,[e],[fn]])

*隐藏匹配的元素*

> slideDown([speed],[easing],[fn])

*通过高度变化(向下增大)来动态地显示所有匹配的元素,在显示完成后可选触发一个回调*

> slideUp([speed,[easing],[fn]])

*通过高度变化(向上减小)来动态地显示所有匹配的元素,在显示完成后可选触发一个回调*

> slideToggle([speed],[easing],[fn])

*通过高度变化来切换所有匹配元素的可见性,并在切换完成后可选触发回调*

> fadeIn([speed],[easing],[fn])

*通过不透明度的变化来实现所有匹配元素的淡入效果,并在动画完成后触发一个回调*

> fadeOut([speed],[easing],[fn])

*通过不透明度的变化来实现所有匹配元素的淡出效果,并在动画完成后触发一个回调*

> fadeTo([[speed],opacity,[easing],[fn]])

*把所有匹配元素的不透明度以渐进方式调整到指定的不透明度,并在动画完成后触发一个回调*

> fadeToggle([s,[e],[fn]])

*通过不透明度的变化来开关所有匹配元素的淡入淡出,并在动画完成后触发一个回调*

> animate(params,[speed],[easing],[fn])

*用于创建自动以动画的函数*

**所有指定的函数必须是驼峰式**

> stop([clearQueue],[jumpToEnd])

*停止所有在指定元素上正在运行的动画*

> delay(d,[q])

*设置一格延迟来推迟执行队列中的项目*

> finish([queue])

*停止当前正在运行的动画,删除排队中的所有动画,并完成匹配所有元素的动画*

> Jquery.fx.off

*关闭页面上的所有动画*

***

1.

> $()

$(fuck.a,fuck.b)是找不到的,Jquery中的语法是在第二个中找第一个,正确的写法是$(fuck.a+','fuck.b)用逗号分隔开

2.

> $().prototype

在我们不熟悉Jquery的选择器后有什么功能的情况下,我们可以使用prototype去打印查看里面所封装好的功能


