# 使用Bootstrap构建

*尽量使用chrome来查看这些网页,以达到最好的浏览体验*

*使用git,所提交的修改会进行说明*

### 引入:这是一个标准的bootstrap页面

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <title>title</title>
    <!-- 引入bootstrap核心样式 -->
    <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
	....
    <!-- 引入bootstrap的js文件 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
    <script>
        // 开启弹窗提示
        $(function () {
            $('[data-toggle="popover"]').popover()
        })
        // 开启提示框
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    </script>
</body>
</html>
```
### 继续了解:

具体了解bootstrap详情可以查看官网 -- [bootstrap官网](https://getbootstrap.com/)

### 下载使用

```git
使用git克隆项目: git clone https://github.com/leibo521/Astronomical_WebSite.git
或者你可以在界面上直接下载压缩包,解压后直接运行index.html就可以
```

