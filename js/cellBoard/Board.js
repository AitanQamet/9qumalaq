/**
 * Created by aytsoft on 2016/9/11.
 */
(function () {
    window.Board = Class.extend({
        init : function (x,y,cellCount,id) {
            //棋盘的坐标
            this.x = x;
            this.y = y;
            //棋盘的id号
            this.id = id;
            //棋盘里的棋子数目
            this.CellCount =cellCount;
            //这个棋盘是否tuzdikh
            this.golden = false;
            //判断位置是否在上面的或者下面的棋盘
            this.isTop = false;
            //加载棋子 管理器
            this.cellManager =null;
            //点击事件范围的高度
            this.dheight = 200;
            //点击事件范围的宽度
            this.dwidth = 80;
            //按照盘子的位置设置鼠标点击事件
            this.listener();
            this.update();

        },
        update : function () {
            this.isTopOrBottom();
            this.cellManager = new CellManager(this.x+17,this.y+14,this.CellCount,this.isTop);
            if(!!this.golden){
                this.CellCount = 0;
            }
        },
        render : function () {
            if(!!this.golden){
                game.ctx.drawImage(game.images.tuzdih,this.x,this.y);
            }else if(!this.golden){
                game.ctx.drawImage(game.images.board,this.x,this.y);
            }
            this.cellManager.render();
        },
        isTopOrBottom : function () {
            //y 轴的分界线
           this.isTop =  this.y < (game.canvas.height/2);
        },
        listener:function () {
            var _self = this;
            new AreaClickListener(game.canvas,this.x,this.y,this.dwidth,this.dheight,function(){

                //实现点击之后执行依次BoardManager对象的开关
                game.flage = true;
                //获取本棋盘对应的索引号
                game.boardArrayIndex =  _self.id;
                //本棋盘里的棋子数目
                game.boardCellNumber = _self.CellCount;
                console.log("id:"+_self.id  +"number:" +_self.CellCount );
				
            });
        }
    });
})();