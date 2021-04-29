# 晒研论坛项目团队前端VUE项目代码规范

### 规范目的
在团队编码过程中，统一编码风格，命名规范，注释要求，在团队协作中输出可读性强，易维护，风格一致的代码

### 环境要求

1. 使用 [Visual Studio Code (VS Code)](http://www.baidu.com/link?url=Sn0aBa011utoLAP3IC799QxEcwe1-mmChrkEchQsAaOJJwwbN8ZMTyf8XF8uDId9) 进行代码编写

###  SRC目录规范

1. api目录 （相关全局请求调用配置、axios、jsonp）

2. assets目录（放置样式和需要使用的图片）

3. components目录 （基础组件：样式组件等 注意组件分类规范,可以在其下自建文件夹）

4. router目录 （路由配置）

5. store目录 （vuex的状态管理）

6. utils目录 （ js工具类 ）

7. views目录 （vue页面）

### HTML / Template 编码规范
1. Tab缩进，**二个空格**，层次要求分明
2.不要省略可选的结束标签（closing tag）（如`</li>` 或 `</body>`）

### CSS  编码规范
1. 类名使用小写字母
2. id 采用驼峰式命名
3. 所有声明语句都应当以分号结尾
4. 避免为 0 值指定单位，例如，用 `margin: 0;` 代替 `margin: 0px;`
5. 声明块的左花括号前添加一个空格
6. 声明块的右花括号应当单独成行
7. 每条样式声明应该独占一行
8. 十六进制值应该全部小写，例如，`#f3f6fa`

### JavaScript 编码规范
1. 标准变量采用驼峰式命名
2. 常量全大写，用下划线连接
3. 变量名不应过短，要能准确完整地描述该变量所表述的事物

### 组件开发规范

#### 组件模板开发
1. 尽可能语义化标签，使结构更加信息
2. 大段功能模块都需要明确中文注释（要求简短明确）
3. 模板语法中的逻辑尽可能在filters、computed、methods中处理
4. Tab缩进，**四个空格**，层次要求分明
5. **组件名**应该始终是多个单词的
6. **单文件组件**的文件名应该要么始终是单词大写开头（ PascalCase ），要么始终是横线连接（ kebab-case ）
7. 单文件组件应该总是按照 `<template>`、`<script>` 和 `<style>` 的标签顺序**

#### 组件样式开发
1. 基本上处于scoped 私有域开发

### 注释规范
#### TEMPLATE结构内容注释
1. 大区块之间需要回车换行，且有有单独的中文注释

#### SCRIPT注释
1. 尽可能多用单行注释，注释需要与被注释的地方对齐

   

### 参考文档
[团队开发前端VUE项目代码规范][1]
[vue风格指南][2]


[1]: https://www.cnblogs.com/mouseleo/p/11110654.html
[2]: https://cn.vuejs.org/v2/style-guide/