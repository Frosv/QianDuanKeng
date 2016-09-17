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
