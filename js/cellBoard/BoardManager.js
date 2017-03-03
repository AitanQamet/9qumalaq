/*!
 * Toguz Kumalak ("nine pebbles")
 * Copyright (c) 2017 Aytan
 * @Author:   Aytan Hamet
 * @E-mail:   aytsoft@gmail.com
 * @build:   Mon, 27 Feb 2017 15:42:26 GMT, BeiJing.
 */
(function () {
    window.BoardManager = Class.extend({
        init : function () {
            //棋盘管理器的管理地图
            this.boardsMap = [
                //80*214
                // {x:10,y:5,id:0},
                // {x:110,y:5,id:1},
                // {x:210,y:5,id:2},
                // {x:310,y:5,id:3},
                // {x:410,y:5,id:4},
                // {x:510,y:5,id:5},
                // {x:610,y:5,id:6},
                // {x:710,y:5,id:7},
                // {x:810,y:5,id:8},
                //
                // {x:10,y:350,id:17},
                // {x:110,y:350,id:16},
                // {x:210,y:350,id:15},
                // {x:310,y:350,id:14},
                // {x:410,y:350,id:13},
                // {x:510,y:350,id:12},
                // {x:610,y:350,id:11},
                // {x:710,y:350,id:10},
                // {x:810,y:350,id:9}
                {x:10,y:350,id:0},
                {x:110,y:350,id:1},
                {x:210,y:350,id:2},
                {x:310,y:350,id:3},
                {x:410,y:350,id:4},
                {x:510,y:350,id:5},
                {x:610,y:350,id:6},
                {x:710,y:350,id:7},
                {x:810,y:350,id:8},
                {x:810,y:5,id:9},
                {x:710,y:5,id:10},
                {x:610,y:5,id:11},
                {x:510,y:5,id:12},
                {x:410,y:5,id:13},
                {x:310,y:5,id:14},
                {x:210,y:5,id:15},
                {x:110,y:5,id:16},
                {x:10,y:5,id:17}

            ];
            this.actionCellBoards = [
                null, null, null, null, null, null, null, null, null,
                null, null, null, null, null, null, null, null, null
            ];
            this. createBoardsByMap();
        },
        createBoardsByMap : function () {
            for(var i = 0; i < this.boardsMap.length; i++ ){
                this.actionCellBoards[i] = (this.boardsMap[i] !=null) ? new Board(this.boardsMap[i].x,this.boardsMap[i].y,game.mainArr[i],this.boardsMap[i].id) : null;
            }
        },
        update:function () {

        },
        render:function () {
            for(var i = 0; i < this.actionCellBoards.length; i++){
                this.actionCellBoards[i]  && this.actionCellBoards[i].render();
            }
        }
    });
})();
