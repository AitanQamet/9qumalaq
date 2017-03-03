/*!
 * Toguz Kumalak ("nine pebbles")
 * Copyright (c) 2017 Aytan
 * @Author:   Aytan Hamet
 * @E-mail:   aytsoft@gmail.com
 * @build:   Mon, 27 Feb 2017 15:42:26 GMT, BeiJing.
 */
(function () {
    window.WinCell = Class.extend({
        init:function (x,y,count) {
            this.x = x;
            this.y = y;
            this.count = count;
            this.col = 37;
            this.row = 2;
            //初始布局
            this.cellMap = [
                [0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0]
            ];
            //创建棋子集合
            this.cellActiveBlock = [
                [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
            ];
            this.createMapByCount();
            this.createBlockByMap();
        },
        createBlockByMap : function () {
            for(var r = 0; r < this.row; r++){
                for(var c = 0 ; c < this.col; c++){
                    this.cellActiveBlock[r][c] = (this.cellMap[r][c] != 0) ? (new Cell(this.x +2+ c* 18,this.y + r*18,this.cellMap[r][c])): null;
                }
            }
        },
        createMapByCount:function () {
            if(this.count <= this.col){
                for(var i = 0; i < this.count; i++){
                    this.cellMap[0][i]=1;
                }
            }else if(this.count > this.col){
                for(var i = 0; i < this.col; i++){
                    this.cellMap[0][i]=1;
                }
                for(var j = 0; j < this.count -this.col; j++){
                    this.cellMap[1][j] = 1;
                }
            }

        },
        render:function () {
            for(var r = 0; r < this.row; r++){
                for(var c = 0 ; c < this.col; c++){
                    this.cellActiveBlock[r][c]&&this.cellActiveBlock[r][c].render();
                }
            }
        }
    });
})();
