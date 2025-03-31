---
title: jQuery
createTime: 2025/03/31 10:02:35
permalink: /JavaScript/eezepuk2/
---
# jQuery

## jQuery引入

引入`jQuery`要下载代码

也可以通过cdn的方式引入

`<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`

## jQuery与JavaScript的区别

```js
/*
html
<button>btn</button>
*/

let btn = document.querySelector("button")
$("button")
```

## jQuery与JavaScript的入口函数区别

```js
$(document).ready(()=>{})
/* 简写 */
$(()=>{})
```

```js
/* 点击事件 */
$("button").click(()=>{})
```

## jQuery对象

`$`:全局作用域下的全局变量

## jQuery对象与DOM对象的方法不通用

`hide()`：隐藏元素

`$("button").style.display => 错误的`

## jQuery对象转换为DOM对象

```js
$("button")[0].style.display // 通过下标法转为document对象

$("button").get(0).style.display // get方法
```

## DOM对象转换为jQuery对象

`$()`：将非`jQuery`对象转换为`jQuery`

```js
$(btn)
```

## 筛选选择器

1. `:first`：获取第一个元素

`$("div:first")`

2. `:eq(n)`：选择索引为n的元素
3. `:odd`：选择索引为奇数的元素
4. `:even`：选择索引为偶数的元素
5. `children(selector)`：查找子级元素

`$(".father").children("p")`

6. `siblings()`：获取同级兄弟元素

## jQuery样式操作

### 获取样式

```js
$('div').css('height',500) // 只写属性名则返回其样式值

$('div').css({
    width:200,
    height:200,
    backgroundColor:'skyblue'
})
```

## 类操作

`addClass()`：添加类名

```html
<div>
    添加类名
</div>
<script>
	$("div").click(function(){
        $(this).addClass("current")
    })
</script>
```

`toggleClass()`：切换类名，有则删；无则加

```html
<div class="current">
    切换类名
</div>
<script>
	$("div").click(function(){
        $(this).toggleClass("current")
    })
</script>
```

`index()`：获取当前元素索引

## jQuery属性操作

### prop

> 固有属性：自带的(`id`、`class`等)
>
> 自定义属性：自定义的(`hahaha`等)

- 作用：用来**获取或设置**元素的**固有属性**值

- 语法

1. `$(selector).prop("属性名")`：获取属性值
2. `$(selector).prop("属性名","属性值")`：设置属性值

```js
$('div').prop("id")
```

### attr()

- 作用：同上，包括自定义属性

### data()

- 作用：指定元素上存取的数据，数据保存在**内存**中，**不修改`DOM`元素结构**

```html
<body>
    <div data-hahaha="123">
        
    </div>
    <script>
    	$('div').data("hahaha")
    </script>
</body>
```

## `jQuery`的内容操作方法

- 语法

1. `html()`：获取或者设置第一个匹配元素的`html`内容

## 遍历元素

- 语法：`$(selector).each(function(index,domEle){});`

1. `domEle`:**`DOM`**元素的对象

```html
<body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <script>
        let color=['red','green','blue'];
    	$('div').each(function(index,domEle){
           console.log(index); // 遍历元素的索引号
           console.log(domEle); // $("div")内的每一个DOM元素
           // $(domEle)是一个伪数组对象
           $(domEle).css("color",color[index]); // 把DOM元素转换为jQuery对象再使用CSS方法
        });
    </script>
</body>
```

### $.each()：万能遍历

- 语法：`$.each(Object, function(index, element) {});`

```js
// 遍历数组
$.each(color,function(index,ele){
    console.log(index,ele);
})

// 遍历对象
$.each(obj,function(name,val){
    console.log(name,val);
})
```

## 添加元素

- 语法

1. `$(selector).append(新元素)`：元素内部后面追加
2. `$(selector).prepend(新元素)`：元素内部前面追加

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./jquery.js"></script>
    <title>Document</title>
</head>

<body>
    <div class="father">
        <div>老大</div>
        <div>老二</div>
        <div>老小</div>
    </div>
    <script>
        let div1 = $('<div>append的DIV</div>');
        let div2 = $('<div>prepend的DIV</div>');
        //添加在内部的最后
        $('.father').append(div1);
        //添加在内部的最前
        $('.father').prepend(div2);
    </script>


</body>

</html>

```

## 外部添加

- 语法

1. `$(selector).after`：目标元素后面追加
2. `$(selector).before`：目标元素前面追加

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./jquery.js"></script>
    <title>Document</title>
</head>

<body>
    <div>
        <div>老大</div>
        <div class="second">老二</div>
        <div>老小</div>
    </div>
    <script>
        let div1 = $('<div>after的DIV</div>');
        let div2 = $('<div>before的DIV</div>');
        //添加在外部的后面
        $('.second').after(div1);
        //添加在外部的前面
        $('.second').before(div2);
    </script>


</body>

</html>
```

## 删除元素

- 语法

1. `$(selector).empty()`：删除子节点，内容全删
2. `$(selector).remove()`：删除自己

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./jquery.js"></script>
    <title>Document</title>
</head>

<body>
    <div class="father">
        爸爸
        <div>老大</div>
        <div>老二</div>
        <div>老小</div>
    </div>
    <script>
        //删除该元素内的子节点
        $('.father').empty();
        //删除该元素
        $('.father').remove();
    </script>


</body>

</html>
```

## `jQuery`尺寸和位置操作

- 语法

1. `width()`：获取或者设置宽度
2. `height()`：获取或设置高度

> `W3C`宽高是盒子中的`content`内容
>
> `Ie`宽高是盒子中的`content+border+padding`，在`W3C`中可以通过`box-sizing:border-box`去兼容

## `offset()`

- 作用：获取/设置元素的位置(`top`、`left`)，相对于文档

## `position()`

- 作用：上同，不同在于相当于**最近的具有定位的**元素的位置，还有**不能设置**

## `scrollTop()`和`scrollLeft()`

`scrollTop()`：获取或设置**滚动条距头部**的位置

`scrollLeft()`：获取或设置**滚动条距左部**的位置

## `on()`

- 作用：绑定一个或多个事件

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        div {
            height: 100px;
            width: 100px;
            background-color: pink;
        }
    </style>
    <script src="./jquery.js"></script>
</head>

<body>
    <div></div>
    <script>
        // 一次绑定一个事件
        $("div").on("click", function () {
            $(this).css("background", "yellow")
        });
    </script>

</body>

</html>

```

### 绑定多个事件

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        div {
            height: 100px;
            width: 100px;
            background-color: pink;
        }
    </style>
    <script src="./jquery.js"></script>
</head>

<body>
    <div></div>
    <script>
        // 一次绑定多个事件, 参数为对象类型
        $("div").on({
            mouseenter: function () {
                $(this).css("background", "skyblue");
            },
            click: function () {
                $(this).css("background", "purple");
            },
            mouseleave: function () {
                $(this).css("background", "yellow");
            }
        });

    </script>

</body>

</html>

```

### 绑定相同的事件处理函数

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        div {
            height: 100px;
            width: 100px;
            background-color: pink;
        }
        .bidRed{
            background-color: red;
        }
    </style>
    <script src="./jquery.js"></script>
</head>

<body>
    <div></div>
    <script>
        // 为不同事件绑定相同的事件处理函数
        $("div").on("mouseenter mouseleave", function () {
            $(this).toggleClass("bidRed");
        });


    </script>

</body>

</html>

```

### 事件委派

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>

    </style>
    <script src="./jquery.js"></script>
</head>

<body>
    <ul>
        <li>我是第1个li</li>
        <li>我是第2个li</li>
    </ul>
    <script>
        $("ul").on("click", "li:first-child", function () {
            console.log("单击了li");// 单击第1个li会触发此事件
        });
    </script>


</body>

</html>

```

## 事件解绑 `off()`

- 作用：解除事件

- 语法

1. `$(selector).off()`：解除元素上的所有事件
2. `$(selector).off('click')`：解除元素上的点击事件
3. `$(selector).off('click','li)`：解除事件委派

### `one()`

- 作用：只能触发一次事件

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>

    </style>
    <script src="./jquery.js"></script>
</head>

<body>
    <button>BTN</button>
    <script>
       $('button').one('click',function(){
        console.log(1);
       })
    </script>


</body>

</html>

```

## 触发事件

- 作用：无需用户操作，**自动触发**

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>

    </style>
    <script src="./jquery.js"></script>
</head>

<body>
    <button>BTN</button>
    <script>
        //绑定事件
       $('button').click(function(){
        console.log(1);
       })
       //触发事件
       $('button').click();
    </script>


</body>

</html>
```

## 实战

### 光暗切换

- 核心代码

使用jQuery的addClass()和removeClass()方法来添加和删除类，通过切换类改变网页的样式

```js
if ($('#toggle').is(":checked")) {
	$("body").addClass("dark-class");
} else {
	$("body").removeClass("dark-class")
}
```

- 实现步骤

  1. 在HTML中添加一个按钮和一个复选框，通过label标签for属性与input的id进行关联，使得在复选框以外的地方点击，都能够相匹配，用于切换模式

  2. 为HTML创建黑暗模式和光亮模式的css样式

  3. 使用jQuery代码为开关按钮添加功能，实现明暗模式的切换

     ```html
     <script>
     	// 监听开关按钮的变化
     	$('#toggle').change(() => {
     		// 检查开关按钮是否被选中
     		if ($('#toggle').is(":checked")) {
     			$("body").addClass("dark-class");
     		} else {
     			$("body").removeClass("dark-class")
     		}
     	})
     </script>
     ```

- 具体实现步骤

  1. 创建HTML文档，添加按钮和复选框

     ```html
     <body>
         <h2>Using the <i> JQuery </i> to toggle between light and dark modes in JavaScript.</h2>
         <p>This is the content of the webpage.</p>
         <label class="toggleButton" for="toggle">
             <input type="checkbox" id="toggle">
             <div class="roundButton circle"></div>
         </label>
     </body>
     ```

  2. 编写css样式

     ```html
     <head>
         <style>
             body {
                 color: black;
                 background-color: rgb(241, 241, 241);
                 text-align: center;
                 justify-content: center;
             }
     
             .dark-class {
                 color: white;
                 background-color: rgb(12, 10, 10);
             }
     
             p {
                 font-size: 1.2rem;
             }
     
             .toggleButton {
                 width: 5rem;
                 height: 2rem;
                 position: relative;
                 display: inline-block;
             }
     
             .toggleButton input {
                 opacity: 0;
             }
     
             .roundButton {
                 background-color: black;
                 top: 0;
                 left: 0;
                 position: absolute;
                 right: 0;
                 bottom: 0;
                 cursor: pointer;
             }
     
             .roundButton:before {
                 left: 0;
                 bottom: 0;
                 position: absolute;
                 content: "";
                 background-color: grey;
                 transition: 1s;
                 height: 2rem;
                 width: 2rem;
             }
     
             input:checked+.roundButton {
                 background-color: white;
             }
     
             input:checked+.roundButton:before {
                 transform: translateX(3rem);
             }
     
             .roundButton.circle {
                 border-radius: 2rem;
             }
     
             .roundButton.circle:before {
                 border-radius: 50%;
             }
     
             #test {
                 display: block;
                 width: 200px;
                 height: 200px;
                 background-color: red;
             }
         </style>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"
             Integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ=="
             crossorigin="anonymous" referrerpolicy="no-referrer"> </script>
     </head>
     ```

  3. 使用jQuery实现光暗切换功能

     ```html
     <body>
         <script>
             // 监听开关按钮的变化
             $('#toggle').change(() => {
                 // 检查开关按钮是否被选中
                 if ($('#toggle').is(":checked")) {
                     $("body").addClass("dark-class");
                 } else {
                     $("body").removeClass("dark-class")
                 }
             })
         </script>
     </body>
     ```