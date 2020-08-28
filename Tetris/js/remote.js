var Remote = function(socket) {
    // 游戏对象
    var game;
    // 绑定按钮事件
    var bindEvents = function() {
        socket.on('init', function(data) {
            start(data.type, data.dir);
        });
        socket.on('next', function(data) {
            game.performNext(data.type, data.dir);
        });
        socket.on('rotate', function() {
            game.rotate();
        });
        socket.on('down', function() {
            game.down();
        });
        socket.on('left', function() {
            game.left();
        });
        socket.on('fixed', function() {
            game.fixed();
        });
        socket.on('full', function() {
            game.full();
        });
        socket.on('right', function() {
            game.right();
        });
        socket.on('line', function(data) {
            game.checkClear();
            game.addScore(data);
        });
        socket.on('time', function(data) {
            game.setTime(data);
        });
        socket.on('lose', function() {
            game.gameOver(false);
        });
        socket.on('addTailLines', function(data) {
            game.addTailLines(data);
        });
    }
    // 开始
    var start = function(type, dir) {
        var doms = {
            gameDiv : document.getElementById('remote_game'),
            nextDiv : document.getElementById('remote_next'),
            timeDiv : document.getElementById('remote_time'),
            scoreDiv : document.getElementById('remote_score'),
            resultDiv: document.getElementById('remote_gameOver')
        }
        game = new Game();
        game.init(doms, type, dir);

    }
    // 导出
    // this.start = start;
    // this.bindEvents = bindEvents;
    bindEvents();
}
