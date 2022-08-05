# 小程序内嵌 H5 ，实现 对直播流的播放

## 前端部分
采用 Vue3  + Vite 实现前端页面

## 流媒体服务器
利用 [`node-media-server`](https://github.com/illuspas/Node-Media-Server) 搭建流媒体转发服务器
实现功能：
1. 拉取 rtmp 流
2. 转换视频格式 ： HLS、DASH


## 项目演示地址
[在线演示](http://chenkuan1110.github.io/live-player-demo)