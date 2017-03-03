/**
 * Created by aytsoft on 2016/9/11.
 */
(function () {
    window.CellManager = Class.extend({
        init : function (x,y,num,istop) {
            //x，y 是坐标
            this.x = x;
            this.y = y;
            //数量
            this.cellBlockNumber = num;
            //行数
            this.row = 9;
            //列数
            this.col = 2;
            //棋子的高度
            this.height =20;
            //棋子的宽度
            this.width = 26;
            //this.isTopOrBottom为真就意味着上部分的棋盘，否则是底下的棋盘
            this.isTopOrBottom = !!istop;
            this.result = 0;
            //棋子的基本的布局
            this.cellBlocksMap =[
                [0,0],
                [0,0],
                [0,0],
                [0,0],
                [0,0],
                [0,0],
                [0,0],
                [0,0],
                [0,0]
            ];

            //创建播棋集合
            this.cellBlocks = [
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null]

            ];

            this.mainNum = this.cellBlockNumber+'';

            for(var i = 0; i < this.mainNum.length;i++){
                this.result +=parseInt(this.mainNum[i]);
            }

            //判断棋子的数目的奇偶性来改变this.cellBlocksMap的值；
            this.isEvenOrOdd();
            //按照this.cellBlocksMap的相对值来创建棋子集合数量
            this.cellNumberResult();
            this.createCellBlocksByMap();
        },
        createCellBlocksByMap :function () {
            for(var r = 0; r < this.row; r++){
                for(var c = 0 ; c < this.col; c++){
                    this.cellBlocks[r][c] = (this.cellBlocksMap[r][c] != 0) ? (new Cell(this.x +2+ c* this.width,this.y + r*this.height,this.cellBlocksMap[r][c])): null;
                }
            }
        },
        //判断棋子的数目是否大于10
        cellNumberResult :function () {
            var cellNUm = this.cellBlockNumber;
            if(cellNUm >= 10 && cellNUm < 20){
                if(this.isTopOrBottom){
                    this.cellBlocksMap[0][0] = 2;
                }else{
                    this.cellBlocksMap[8][1] = 2;
                }

            }else if(cellNUm >= 20 && cellNUm < 30){
                if(this.isTopOrBottom){
                    this.cellBlocksMap[0][0] = 2;
                    this.cellBlocksMap[0][1] = 2;
                }else{
                    this.cellBlocksMap[8][0] = 2;
                    this.cellBlocksMap[8][1] = 2;
                }

            }else if(cellNUm >= 30 && cellNUm < 40){
                if(this.isTopOrBottom) {
                    this.cellBlocksMap[0][0] = 2;
                    this.cellBlocksMap[0][1] = 2;
                    this.cellBlocksMap[1][0] = 2;
                }else{
                    this.cellBlocksMap[8][1] = 2;
                    this.cellBlocksMap[8][0] = 2;
                    this.cellBlocksMap[7][1] = 2;
                }
            }else if(cellNUm >= 40 && cellNUm < 50){
                if(this.isTopOrBottom){
                    this.cellBlocksMap[0][0] = 2;
                    this.cellBlocksMap[0][1] = 2;
                    this.cellBlocksMap[1][0] = 2;
                    this.cellBlocksMap[1][1] = 2;
                }else{
                    this.cellBlocksMap[8][0] = 2;
                    this.cellBlocksMap[8][1] = 2;
                    this.cellBlocksMap[7][0] = 2;
                    this.cellBlocksMap[7][1] = 2;
                }

            }else if(cellNUm >= 50 && cellNUm < 60){
                if(this.isTopOrBottom){
                    this.cellBlocksMap[0][0] = 2;
                    this.cellBlocksMap[0][1] = 2;
                    this.cellBlocksMap[1][0] = 2;
                    this.cellBlocksMap[1][1] = 2;
                    this.cellBlocksMap[2][0] = 2;
                }else{
                    this.cellBlocksMap[8][1] = 2;
                    this.cellBlocksMap[8][0] = 2;
                    this.cellBlocksMap[7][1] = 2;
                    this.cellBlocksMap[7][0] = 2;
                    this.cellBlocksMap[6][1] = 2;
                }
            }else if(cellNUm >= 60 && cellNUm < 70){
                if(this.isTopOrBottom){
                    this.cellBlocksMap[0][0] = 2;
                    this.cellBlocksMap[0][1] = 2;
                    this.cellBlocksMap[1][0] = 2;
                    this.cellBlocksMap[1][1] = 2;
                    this.cellBlocksMap[2][0] = 2;
                    this.cellBlocksMap[2][1] = 2;
                }else{
                    this.cellBlocksMap[8][0] = 2;
                    this.cellBlocksMap[8][1] = 2;
                    this.cellBlocksMap[7][0] = 2;
                    this.cellBlocksMap[7][1] = 2;
                    this.cellBlocksMap[6][0] = 2;
                    this.cellBlocksMap[6][1] = 2;
                }
            }else if(cellNUm >= 70 && cellNUm < 80){
               if(this.isTopOrBottom){
                   this.cellBlocksMap[0][0] = 2;
                   this.cellBlocksMap[0][1] = 2;
                   this.cellBlocksMap[1][0] = 2;
                   this.cellBlocksMap[1][1] = 2;
                   this.cellBlocksMap[2][0] = 2;
                   this.cellBlocksMap[2][1] = 2;
                   this.cellBlocksMap[3][0] = 2;
               }else{
                   this.cellBlocksMap[8][1] = 2;
                   this.cellBlocksMap[8][0] = 2;
                   this.cellBlocksMap[7][1] = 2;
                   this.cellBlocksMap[7][0] = 2;
                   this.cellBlocksMap[6][1] = 2;
                   this.cellBlocksMap[6][0] = 2;
                   this.cellBlocksMap[5][1] = 2;
               }
            }else if(cellNUm >=80 && cellNUm < 90){
                if(this.isTopOrBottom){
                    this.cellBlocksMap[0][0] = 2;
                    this.cellBlocksMap[0][1] = 2;
                    this.cellBlocksMap[1][0] = 2;
                    this.cellBlocksMap[1][1] = 2;
                    this.cellBlocksMap[2][0] = 2;
                    this.cellBlocksMap[2][1] = 2;
                    this.cellBlocksMap[3][0] = 2;
                    this.cellBlocksMap[3][1] = 2;
                }else{
                    this.cellBlocksMap[8][0] = 2;
                    this.cellBlocksMap[8][1] = 2;
                    this.cellBlocksMap[7][0] = 2;
                    this.cellBlocksMap[7][1] = 2;
                    this.cellBlocksMap[6][0] = 2;
                    this.cellBlocksMap[6][1] = 2;
                    this.cellBlocksMap[5][0] = 2;
                    this.cellBlocksMap[5][1] = 2;
                }
            }else if(cellNUm >=90 && cellNUm < 100){
                if(this.isTopOrBottom){
                    this.cellBlocksMap[0][0] = 2;
                    this.cellBlocksMap[0][1] = 2;
                    this.cellBlocksMap[1][0] = 2;
                    this.cellBlocksMap[1][1] = 2;
                    this.cellBlocksMap[2][0] = 2;
                    this.cellBlocksMap[2][1] = 2;
                    this.cellBlocksMap[3][0] = 2;
                    this.cellBlocksMap[3][1] = 2;
                    this.cellBlocksMap[4][0] = 2;
                }else{
                    this.cellBlocksMap[8][1] = 2;
                    this.cellBlocksMap[8][0] = 2;
                    this.cellBlocksMap[7][1] = 2;
                    this.cellBlocksMap[7][0] = 2;
                    this.cellBlocksMap[6][1] = 2;
                    this.cellBlocksMap[6][0] = 2;
                    this.cellBlocksMap[5][1] = 2;
                    this.cellBlocksMap[5][0] = 2;
                    this.cellBlocksMap[4][1] = 2;
                }
            }
        },
        render : function () {
            for(var r = 0; r < this.row; r++){
                for(var c = 0 ; c < this.col; c++){
                    this.cellBlocks[r][c]&&this.cellBlocks[r][c].render();
                }
            }
        },
        isEvenOrOdd : function () {
            //播棋的数位偶数
            var isEven = (this.result % 2 != 0);
            var cellBlocksMapRow = parseInt(this.result / this.col);
            //成立就执行上部分的棋盘布局可视化
            if(this.isTopOrBottom){
                if(this.result % 2 == 0){
                    for(var r = 0; r < cellBlocksMapRow; r++){
                        for(var c = 0; c < this.col; c++){
                            if(this.cellBlocksMap[r][c] !=2 ){
                                this.cellBlocksMap[r][c] = 1;
                            }
                        }
                    }
                }else if(this.result%2!=0){
                    switch(this.result)
                    {
                        case 1:
                            this.cellBlocksMap[0][0] = 1;
                            break;
                        case 3:
                            this.cellBlocksMap[0][0] = 1;
                            this.cellBlocksMap[0][1] = 1;
                            this.cellBlocksMap[1][0] = 1;
                            break;
                        case 5:
                            this.cellBlocksMap[0][0] = 1;
                            this.cellBlocksMap[0][1] = 1;
                            this.cellBlocksMap[1][0] = 1;
                            this.cellBlocksMap[1][1] = 1;
                            this.cellBlocksMap[2][0] = 1;
                            break;
                        case 7:
                            this.cellBlocksMap[0][0] = 1;
                            this.cellBlocksMap[0][1] = 1;
                            this.cellBlocksMap[1][0] = 1;
                            this.cellBlocksMap[1][1] = 1;
                            this.cellBlocksMap[2][0] = 1;
                            this.cellBlocksMap[2][1] = 1;
                            this.cellBlocksMap[3][0] = 1;
                            break;
                        case 9:
                            this.cellBlocksMap[0][0] = 1;
                            this.cellBlocksMap[0][1] = 1;
                            this.cellBlocksMap[1][0] = 1;
                            this.cellBlocksMap[1][1] = 1;
                            this.cellBlocksMap[2][0] = 1;
                            this.cellBlocksMap[2][1] = 1;
                            this.cellBlocksMap[3][0] = 1;
                            this.cellBlocksMap[3][1] = 1;
                            this.cellBlocksMap[4][0] = 1;
                            break;
                        case 11:
                            this.cellBlocksMap[0][0] = 1;
                            this.cellBlocksMap[0][1] = 1;
                            this.cellBlocksMap[1][0] = 1;
                            this.cellBlocksMap[1][1] = 1;
                            this.cellBlocksMap[2][0] = 1;
                            this.cellBlocksMap[2][1] = 1;
                            this.cellBlocksMap[3][0] = 1;
                            this.cellBlocksMap[3][1] = 1;
                            this.cellBlocksMap[4][0] = 1;
                            this.cellBlocksMap[4][1] = 1;
                            this.cellBlocksMap[5][0] = 1;
                            break;
                        case 13:
                            this.cellBlocksMap[0][0] = 1;
                            this.cellBlocksMap[0][1] = 1;
                            this.cellBlocksMap[1][0] = 1;
                            this.cellBlocksMap[1][1] = 1;
                            this.cellBlocksMap[2][0] = 1;
                            this.cellBlocksMap[2][1] = 1;
                            this.cellBlocksMap[3][0] = 1;
                            this.cellBlocksMap[3][1] = 1;
                            this.cellBlocksMap[4][0] = 1;
                            this.cellBlocksMap[4][1] = 1;
                            this.cellBlocksMap[5][0] = 1;
                            this.cellBlocksMap[5][1] = 1;
                            this.cellBlocksMap[6][0] = 1;
                            break;
                        case 15:
                            this.cellBlocksMap[0][0] = 1;
                            this.cellBlocksMap[0][1] = 1;
                            this.cellBlocksMap[1][0] = 1;
                            this.cellBlocksMap[1][1] = 1;
                            this.cellBlocksMap[2][0] = 1;
                            this.cellBlocksMap[2][1] = 1;
                            this.cellBlocksMap[3][0] = 1;
                            this.cellBlocksMap[3][1] = 1;
                            this.cellBlocksMap[4][0] = 1;
                            this.cellBlocksMap[4][1] = 1;
                            this.cellBlocksMap[5][0] = 1;
                            this.cellBlocksMap[5][1] = 1;
                            this.cellBlocksMap[6][0] = 1;
                            this.cellBlocksMap[6][1] = 1;
                            this.cellBlocksMap[7][0] = 1;
                            break;
                        case 17:
                            this.cellBlocksMap[0][0] = 1;
                            this.cellBlocksMap[0][1] = 1;
                            this.cellBlocksMap[1][0] = 1;
                            this.cellBlocksMap[1][1] = 1;
                            this.cellBlocksMap[2][0] = 1;
                            this.cellBlocksMap[2][1] = 1;
                            this.cellBlocksMap[3][0] = 1;
                            this.cellBlocksMap[3][1] = 1;
                            this.cellBlocksMap[4][0] = 1;
                            this.cellBlocksMap[4][1] = 1;
                            this.cellBlocksMap[5][0] = 1;
                            this.cellBlocksMap[5][1] = 1;
                            this.cellBlocksMap[6][0] = 1;
                            this.cellBlocksMap[6][1] = 1;
                            this.cellBlocksMap[7][0] = 1;
                            this.cellBlocksMap[7][1] = 1;
                            this.cellBlocksMap[8][0] = 1;
                            break;
                    }
                }

            }else{
                //成立就执行底部的棋盘布局可视化
                if(this.result % 2 == 0){
                    for(var r = this.row -1 ; r > this.row -1 -cellBlocksMapRow ; r--){
                        for(var c = 0; c < this.col; c++){
                            this.cellBlocksMap[r][c] = 1;
                        }
                    }
                }else if(this.result % 2 != 0){
                    switch(this.result)
                    {
                        case 1:
                            this.cellBlocksMap[8][1] = 1;
                            break;
                        case 3:
                            this.cellBlocksMap[8][1] = 1;
                            this.cellBlocksMap[8][0] = 1;
                            this.cellBlocksMap[7][1] = 1;
                            break;
                        case 5:
                            this.cellBlocksMap[8][1] = 1;
                            this.cellBlocksMap[8][0] = 1;
                            this.cellBlocksMap[7][1] = 1;
                            this.cellBlocksMap[7][0] = 1;
                            this.cellBlocksMap[6][1] = 1;
                            break;
                        case 7:
                            this.cellBlocksMap[8][1] = 1;
                            this.cellBlocksMap[8][0] = 1;
                            this.cellBlocksMap[7][1] = 1;
                            this.cellBlocksMap[7][0] = 1;
                            this.cellBlocksMap[6][1] = 1;
                            this.cellBlocksMap[6][0] = 1;
                            this.cellBlocksMap[5][1] = 1;
                            break;
                        case 9:
                            this.cellBlocksMap[8][1] = 1;
                            this.cellBlocksMap[8][0] = 1;
                            this.cellBlocksMap[7][1] = 1;
                            this.cellBlocksMap[7][0] = 1;
                            this.cellBlocksMap[6][1] = 1;
                            this.cellBlocksMap[6][0] = 1;
                            this.cellBlocksMap[5][1] = 1;
                            this.cellBlocksMap[5][0] = 1;
                            this.cellBlocksMap[4][1] = 1;
                            break;
                        case 11:
                            this.cellBlocksMap[8][1] = 1;
                            this.cellBlocksMap[8][0] = 1;
                            this.cellBlocksMap[7][1] = 1;
                            this.cellBlocksMap[7][0] = 1;
                            this.cellBlocksMap[6][1] = 1;
                            this.cellBlocksMap[6][0] = 1;
                            this.cellBlocksMap[5][1] = 1;
                            this.cellBlocksMap[5][0] = 1;
                            this.cellBlocksMap[4][1] = 1;
                            this.cellBlocksMap[4][0] = 1;
                            this.cellBlocksMap[3][1] = 1;
                            break;
                        case 13:
                            this.cellBlocksMap[8][1] = 1;
                            this.cellBlocksMap[8][0] = 1;
                            this.cellBlocksMap[7][1] = 1;
                            this.cellBlocksMap[7][0] = 1;
                            this.cellBlocksMap[6][1] = 1;
                            this.cellBlocksMap[6][0] = 1;
                            this.cellBlocksMap[5][1] = 1;
                            this.cellBlocksMap[5][0] = 1;
                            this.cellBlocksMap[4][1] = 1;
                            this.cellBlocksMap[4][0] = 1;
                            this.cellBlocksMap[3][1] = 1;
                            this.cellBlocksMap[3][0] = 1;
                            this.cellBlocksMap[2][1] = 1;
                            break;
                        case 15:
                            this.cellBlocksMap[8][1] = 1;
                            this.cellBlocksMap[8][0] = 1;
                            this.cellBlocksMap[7][1] = 1;
                            this.cellBlocksMap[7][0] = 1;
                            this.cellBlocksMap[6][1] = 1;
                            this.cellBlocksMap[6][0] = 1;
                            this.cellBlocksMap[5][1] = 1;
                            this.cellBlocksMap[5][0] = 1;
                            this.cellBlocksMap[4][1] = 1;
                            this.cellBlocksMap[4][0] = 1;
                            this.cellBlocksMap[3][1] = 1;
                            this.cellBlocksMap[3][0] = 1;
                            this.cellBlocksMap[2][1] = 1;
                            this.cellBlocksMap[2][0] = 1;
                            this.cellBlocksMap[1][1] = 1;
                            break;
                        case 17:
                            this.cellBlocksMap[8][1] = 1;
                            this.cellBlocksMap[8][0] = 1;
                            this.cellBlocksMap[7][1] = 1;
                            this.cellBlocksMap[7][0] = 1;
                            this.cellBlocksMap[6][1] = 1;
                            this.cellBlocksMap[6][0] = 1;
                            this.cellBlocksMap[5][1] = 1;
                            this.cellBlocksMap[5][0] = 1;
                            this.cellBlocksMap[4][1] = 1;
                            this.cellBlocksMap[4][0] = 1;
                            this.cellBlocksMap[3][1] = 1;
                            this.cellBlocksMap[3][0] = 1;
                            this.cellBlocksMap[2][1] = 1;
                            this.cellBlocksMap[2][0] = 1;
                            this.cellBlocksMap[1][1] = 1;
                            this.cellBlocksMap[1][1] = 1;
                            this.cellBlocksMap[0][1] = 1;
                            break;
                    }
                }
            }
        }
    });
})();