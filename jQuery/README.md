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

***

1.

> $()

$(fuck.a,fuck.b)是找不到的，Jquery中的语法是在第二个中找第一个，正确的写法是$(fuck.a+','fuck.b)用逗号分隔开

2.

> $().prototype

在我们不熟悉Jquery的选择器后有什么功能的情况下，我们可以使用prototype去打印查看里面所封装好的功能


