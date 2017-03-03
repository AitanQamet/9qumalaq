/*!
 * Toguz Kumalak ("nine pebbles")
 * Copyright (c) 2017 Aytan
 * @Author:   Aytan Hamet
 * @E-mail:   aytsoft@gmail.com
 * @build:   Mon, 27 Feb 2017 15:42:26 GMT, BeiJing.
 */
(function () {
    window.Cell = Class.extend({
        init :function (x, y,color) {
            //坐标
            this.x = x;
            this.y = y;
            this.color = color;
        },
        render : function () {
            //渲染
            if(this.color == 1){
                game.ctx.drawImage(game.images.cellBlock,this.x,this.y);
            }else if(this.color == 2){
                game.ctx.drawImage(game.images.cellRed,this.x,this.y);
            }

        }
    });
})();
