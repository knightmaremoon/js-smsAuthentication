# 环境配置指南

本文将指导如何配置项目环境并进行测试，以下为详细步骤：

## 参考文档
根据 [此文档](https://www.cnblogs.com/yxlbk/p/16578550.html) 操作，完成至第四步。

## 安装依赖
在完成第四步后，运行以下命令安装依赖包：

```bash
npm install blueimp-md5 moment js-base64 request
```
## 测试步骤

1. **新建 Vue 项目**
   在你本地环境中，创建一个 Vue 项目

2. **添加文件**
- 将 `getMessage.js` 文件放到以下路径：
```
./src/utils/getMessage.js
```
- 将 `testGetMessage.js` 文件放到项目根目录下：
```
./testGetMessage.js
```
3. **运行脚本**
在项目根目录下运行以下命令以执行测试：
```
node testGetMessage.js
```