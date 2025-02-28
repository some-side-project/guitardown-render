# 吉他谱渲染器

设计一种 GuitarDown 格式的记谱方法（简称 GD），并实现一种 GD 谱的渲染器。

<img width="150" src="https://img.cuiyongjian.com/blog/202502280422385.png"/>

## jssdk api

render 函数：

接受一个 dom 节点和 GD 谱内容，将渲染结果渲染到 dom 节点中。

## 细节

1、若 dom 节点为空，则渲染默认的 empty 空谱。
2、宿主环境若已安装 vue 则使用宿主环境 vue，若宿主没有则自行拉取 vue。

## 拓展

1、提供 webpack loader 解析器，将 gd 谱解析成 json
2、提供服务端 api，接受 gd 谱自动解析成 json
3、提供在线 gd 谱转换和渲染工具。用于填入 gd 谱自动渲染出吉他谱结果。
