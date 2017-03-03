/*!
 * Toguz Kumalak ("nine pebbles")
 * Copyright (c) 2017 Aytan
 * @Author:   Aytan Hamet
 * @E-mail:   aytsoft@gmail.com
 * @build:   Mon, 27 Feb 2017 15:42:26 GMT, BeiJing.
 */
(function () {
    window.WinBoardsManager = Class.extend({
        init:function () {
            this.count1 = game.aCount;
            this.count2 = game.bCount;
            this.dx = 112;
            this.dy1 = 230;
            this.dy2 = 290;
            //初始化赢盘
            this.winBoardsMap = [1,1];
            //动态的赢盘内容
            this.activeWinBoards = [null,null];
            //初始化每个赢盘的位置和其容纳的棋子数目
            this.initWinBoards = [
                {x:this.dx,y:this.dy1,count:this.count1},
                {x:this.dx,y:this.dy2,count:this.count2}
            ];
            //按照初始化条件创建WinBoard的程序集
            this.createWinBoardsByMap();
        },
        createWinBoardsByMap :function () {
            for(var i = 0; i < this.winBoardsMap.length; i++ ){
                this.activeWinBoards[i] = (!!this.winBoardsMap[i]) ? new WinBoard(this.initWinBoards[i].x,this.initWinBoards[i].y,this.initWinBoards[i].count) : null;
            }
        },
        render:function () {
            for(var i = 0; i < this.activeWinBoards.length; i++){
                this.activeWinBoards[i]  && this.activeWinBoards[i].render();
            }
        }
    });
})();
