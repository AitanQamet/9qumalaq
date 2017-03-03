/**
 * Created by aytsoft on 2016/10/9.
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