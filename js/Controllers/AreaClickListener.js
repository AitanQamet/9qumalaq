/*!
 * Toguz Kumalak ("nine pebbles")
 * Copyright (c) 2017 Aytan
 * @Author:   Aytan Hamet
 * @E-mail:   aytsoft@gmail.com
 * @build:   Mon, 27 Feb 2017 15:42:26 GMT, BeiJing.
 */
(function () {
    window.AreaClickListener = Class.extend({
        //在不同范围触发点击事件 x 是cavas里的距离  width和height是作用范围
        init : function (canvas,x, y, width, height, callback) {
            var self = this;
            this.canvas = canvas;
            this.canvas.addEventListener("click", function(){
                self.dealEvents(event);

            });
            this.events = {
                x: x,
                y: y,
                width: width,
                height: height,
                callback: callback
            };
        },
        //点击事件触发时，判断该触发哪个自定义事件
        dealEvents : function(e){
            var event =  e || event;
            var loc = this.windowToCanvas(this.canvas, event.clientX, event.clientY);
                if (loc.x >= this.events.x && loc.x < this.events.x + this.events.width && loc.y >= this.events.y && loc.y <this.events.y + this.events.height) {
                    this.events.callback();
                }
        },
        //浏览器的单位比例而言的，要转换成canvas的单位比例，将横纵坐标各乘于(canvas.width / bbox.width)和(canvas.height / bbox.height)即可。
        windowToCanvas : function(canvas, x, y){
             var bbox = canvas.getBoundingClientRect();
             return {
                   x: (x - bbox.left) * (this.canvas.width / bbox.width),
                  y: (y - bbox.top) * (this.canvas.height / bbox.height)
             };
       }
    });
})();
