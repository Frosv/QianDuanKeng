### HTML

1.

> input

> type='range'

**input标签的type属性为range的时候，对小数点会自动变成取整**

> input placeholder

*IE 浏览器不支持*

(JQplaceholder)[https://github.com/mathiasbynens/jquery-placeholder]

> input placeholder color

*在使用上方的插件后会在IE10+出现显示问题*

``` css
::-webkit-input-placeholder { /* WebKit browsers */
color: #999;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
color: #999;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
color: #999;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
color: #999;
}
```

