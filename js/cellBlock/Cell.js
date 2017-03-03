/**
 * Created by aytsoft on 2016/9/11.
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

