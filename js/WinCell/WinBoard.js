/*!
 * Toguz Kumalak ("nine pebbles")
 * Copyright (c) 2017 Aytan
 * @Author:   Aytan Hamet
 * @E-mail:   aytsoft@gmail.com
 * @build:   Mon, 27 Feb 2017 15:42:26 GMT, BeiJing.
 */
(function () {
    window.WinBoard = Class.extend({
        init : function (x,y,count) {
            this.x = x;
            this.y = y;
            this.count = count;
            this.winCells = new  WinCell(this.x+3,this.y+3,this.count);
        },
        render:function () {
            game.ctx.drawImage(game.images.winBoard,this.x,this.y);
            this.winCells.render();
        }
    });
})();
