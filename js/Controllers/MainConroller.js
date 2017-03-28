/*!
 * Toguz Kumalak ("nine pebbles")
 * Copyright (c) 2017 Aytan
 * @Author:   Aytan Hamet
 * @E-mail:   aytsoft@gmail.com
 * @build:   Mon, 27 Feb 2017 15:42:26 GMT, BeiJing.
 */
(function () {
    window.MainController  = Class.extend({
        init:function () {},
        update:function () {
            this.getBoardCellNumber();
        },
        //获取当前点击棋盘里的棋子数目
        getBoardCellNumber :function () {

            if(game.boardArrayIndex >= 0 && game.boardCellNumber>0 && !!game.flage){
                var player;
                if(game.boardArrayIndex >= 0 && game.boardArrayIndex < 9){
                    player = 1;
                }else if(game.boardArrayIndex >= 9 && game.boardArrayIndex <18){
                    player = 2;
                }
                this.LoopMyList(game.mainArr,game.boardArrayIndex,player);
                game.winBoardsManager = new WinBoardsManager();
                game.boardManager = new BoardManager();
                game.flage=false;

            }
        },
        LoopMyList:function (arr,index,player) {
            var count = arr[index];
            if (count == 0) {
                console.log("没有可玩的");
                return;
            }
            if ((player == 1 && index > 8) || (player == 2 && index < 9)) {
                console.log("走错啦~~~");
                return;
            }
            arr[index] = 0;
            for (var i = 1; i <= count; i++) {
                if (count == 1) index += 1;
                    index = index % 18;//arr index
                if (arr[index] == -1) { //tuzdih
                    if (index >= 9) {
                        game.aCount += 1;
                    } else {
                        game.bCount += 1;
                    }
                } else {
                    arr[index] += 1;
                }

                if (i == count && (arr[index] % 2 == 0 || arr[index] == 3)) {
                    if (player == 1) {
                        if (index >= 9) {
                            if (arr[index] == 3) {
                                if (!game.aTuz) {
                                    game.aCount += arr[index];
                                    arr[index] = -1;
                                    game.boardManager.actionCellBoards[index].golden=true;
                                    game.aTuz = true;
                                    console.log("aTuz");
                                }
                            } else {
                                game.aCount += arr[index];
                                arr[index] = 0
                            }
                        }
                    } else {
                        if (index < 9) {
                            if (arr[index] == 3) {
                                if (!game.bTuz) {
                                    game.bCount += arr[index];
                                    arr[index] = -1;
                                    game.bTuz = true;
                                    console.log("bTuz");
                                }
                            } else {
                                game.bCount += arr[index];
                                arr[index] = 0
                            }
                        }
                    }
                }
                //index, arr[index]

                index++;
            }
            console.log(arr + "\nacount: " + game.aCount + "  bcount: " + game.bCount);
        }
    });
})();
