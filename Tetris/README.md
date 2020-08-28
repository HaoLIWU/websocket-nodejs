### 结构目录

#### 1. css/
(1-1). `style.css`  html文件的样式文件
#### 2. js/
+ (2-1).  `game.js` 定义整个游戏的各个方法
+ (2-2).  `local.js` 对整个游戏非方块方法的实现
+ (2-3).  `remote.js` 监听本地当前的动作，并同步到远程
+ (2-4).  `script.js` 本地js入口文件
+ (2-5).  `square.js` 定义方块的各个方法
+ (2-6).  `squareFactory.js` 定义有哪些方块
#### 3. `index.html`   前端网页入口文件
#### 4. `socket.io-2.0.3.js`   前端`index.html`运行websocket的依赖文件
#### 5. `wsServer.js`  后端入口文件
