/**
 * Created by aytsoft on 2016/9/9 14:56.
 */
(function () {
    //游戏类。最最核心的类。
    window.Game = Class.extend({
        //初始化
        init: function (paramsJSON) {
            var self = this;
            this.gameend = false;
            //fps表示frames per seceond每秒多少帧
            //默认值是60
            this.fps = paramsJSON.fps || 60;
            //定时器
            this.timer = null;
            //我的帧工具
            this.frameUtil = new FrameUtil();
            //得到canvas
            this.canvas = document.getElementById(paramsJSON.canvasId);
            //得到上下文
            this.ctx = this.canvas.getContext("2d");
            //所有图片
            this.images = null;
            //实例化一个静态资源管理工具
            this.sr = new StaticResoucesUtil();
            //命令这个静态资源管理工具，开始加载图片
            this.sr.loadImages("r.json", function (alreayLoadNum, allNum, imagesObj) {
                //清屏
                self.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                //打印当前加载图片个数
                self.ctx.font = "20px 黑体";
                self.ctx.fillStyle = "#3399cc";
                self.ctx.fillText("正在加载" + alreayLoadNum + "/" + allNum, 30, 50);
                //如果已经加载的图片个数，等于了图片总数，那么运行游戏
                if (alreayLoadNum == allNum) {
                    self.images = imagesObj;
                    self.run();
                }
            });

            //不同两个玩家获得的棋子数目分别为winCellCount1,winCellCount2
            this.aCount = 0;
            this.bCount = 0;
            this.aTuz = false;
            this.bTuz = false;
            this.mainArr= [9,-1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9];
            this.boardArrayIndex = -1;
            //开关
            this.flage = false;

        },
        //开始游戏
        run: function () {
            //备份this指向的指针
            var self = this;

            this.boardManager = new BoardManager();
            this.winBoardsManager = new WinBoardsManager();
            this.mainController = new MainController();

            //定时器
            this.timer = setInterval(function () {
                //主循环
                self.mainloop();
            }, 1000 / self.fps);
        },
        //主循环
        mainloop: function () {
            //里面的语句，每帧执行。
            this.frameUtil.update();
            //清屏
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //打印fps
            this.ctx.font = "14px Consolas";
            this.ctx.fillText("FPS / " + this.frameUtil.realFps,this.canvas.width-100, 20);
            //打印帧编号
            this.ctx.fillText("FNO / " + this.frameUtil.currentFrame,this.canvas.width-100, 40);

            this.winBoardsManager.render();
            this.boardManager.render();
            this.mainController.update();
        },
        //暂停游戏
        pause: function () {
            //清除定时器
            clearInterval(this.timer);
        }
    });
})();