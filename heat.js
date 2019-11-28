/* 
    author: ruiming;
    Date: 2019/11/28 14:53
    version: 0.0.1 
    description: 根据直角坐标系绘制热力图
    usege:
        // demo
        var setting = {
            width: this[0].offsetWidth,    // 宽度
            height: this[0].offsetHeight,  // 高度
            imgurl: './images/bg',         //背景图
            points: [
                {
                    x: 100,      // 坐标x,
                    y: 100,      // 坐标y
                    ratio: 2,    // 最小半径
                    opacity: 0.9 // 最大透明度
                }
            ],
        }
        heat('#heat').load(setting); 
*/
(function () {
    function heat(selector, dom) {
        // this.colorGradual = [0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 0, 255, 51, 0, 5, 255, 52, 5, 10, 255, 53, 5, 14, 250, 54, 9, 19, 250, 55, 9, 23, 250, 56, 9, 27, 251, 57, 9, 31, 246, 58, 13, 35, 246, 59, 13, 38, 247, 60, 17, 46, 247, 61, 16, 45, 243, 62, 20, 53, 243, 63, 20, 56, 239, 64, 24, 63, 243, 65, 24, 67, 243, 65, 27, 72, 240, 67, 27, 72, 240, 67, 30, 78, 237, 69, 30, 81, 237, 69, 36, 86, 237, 71, 36, 90, 237, 71, 38, 98, 234, 73, 38, 101, 234, 73, 41, 105, 231, 75, 41, 109, 231, 75, 43, 113, 232, 77, 40, 116, 232, 77, 39, 119, 232, 79, 36, 123, 232, 79, 35, 126, 233, 81, 35, 129, 233, 81, 34, 132, 233, 83, 31, 135, 233, 83, 30, 138, 234, 85, 27, 141, 237, 85, 26, 144, 234, 87, 23, 147, 237, 87, 23, 152, 235, 89, 20, 155, 238, 89, 20, 157, 235, 91, 17, 160, 238, 91, 16, 165, 239, 93, 14, 167, 239, 93, 13, 169, 239, 95, 11, 173, 236, 96, 11, 176, 239, 97, 8, 177, 239, 98, 8, 183, 240, 99, 5, 184, 240, 100, 5, 189, 240, 101, 0, 190, 240, 102, 2, 193, 240, 103, 2, 191, 235, 104, 5, 194, 236, 105, 5, 192, 233, 106, 7, 195, 231, 107, 7, 194, 229, 108, 7, 197, 229, 109, 7, 195, 225, 110, 9, 198, 225, 111, 9, 196, 221, 112, 11, 199, 221, 113, 11, 199, 219, 114, 13, 200, 217, 115, 13, 200, 215, 116, 15, 201, 214, 117, 15, 201, 212, 118, 17, 201, 210, 119, 15, 204, 210, 119, 17, 202, 207, 121, 17, 204, 204, 121, 19, 205, 203, 123, 19, 205, 201, 123, 20, 206, 200, 125, 20, 206, 198, 125, 22, 207, 195, 127, 22, 207, 195, 127, 24, 208, 192, 129, 24, 210, 190, 129, 25, 208, 189, 131, 25, 210, 187, 131, 27, 211, 184, 133, 27, 211, 184, 133, 28, 212, 181, 135, 30, 212, 179, 135, 32, 212, 177, 137, 32, 214, 177, 137, 33, 213, 174, 139, 33, 215, 172, 139, 34, 215, 170, 141, 34, 215, 168, 141, 36, 216, 166, 143, 36, 218, 166, 143, 37, 216, 164, 145, 37, 218, 162, 145, 38, 219, 160, 147, 40, 219, 158, 147, 41, 219, 156, 149, 41, 221, 154, 149, 42, 221, 152, 151, 42, 221, 150, 151, 43, 222, 148, 153, 47, 223, 147, 153, 51, 222, 146, 155, 54, 224, 145, 155, 58, 223, 143, 157, 63, 224, 141, 157, 67, 223, 141, 159, 71, 225, 140, 159, 76, 223, 138, 161, 79, 225, 136, 161, 83, 225, 136, 163, 88, 225, 135, 163, 91, 226, 133, 165, 96, 226, 131, 165, 99, 226, 130, 167, 104, 226, 130, 167, 109, 226, 128, 169, 112, 228, 127, 169, 116, 227, 125, 171, 121, 228, 124, 171, 124, 227, 122, 173, 128, 228, 122, 173, 133, 227, 121, 175, 137, 229, 119, 175, 141, 229, 118, 177, 146, 229, 117, 177, 150, 229, 115, 179, 154, 229, 114, 179, 158, 230, 113, 181, 162, 231, 111, 181, 166, 230, 110, 183, 170, 231, 109, 183, 174, 230, 108, 185, 178, 232, 106, 185, 181, 232, 105, 187, 185, 232, 104, 187, 190, 232, 103, 189, 194, 233, 101, 189, 198, 232, 100, 191, 203, 234, 99, 191, 206, 233, 98, 193, 210, 234, 96, 193, 214, 234, 95, 195, 218, 234, 94, 195, 223, 234, 92, 197, 227, 236, 91, 197, 231, 234, 90, 199, 236, 236, 88, 199, 239, 236, 88, 201, 244, 236, 86, 201, 247, 236, 85, 203, 251, 237, 83, 203, 254, 235, 82, 205, 254, 230, 81, 205, 255, 227, 80, 206, 254, 221, 79, 207, 255, 217, 77, 208, 254, 212, 76, 209, 255, 208, 75, 210, 254, 202, 73, 211, 255, 198, 72, 212, 254, 193, 71, 213, 255, 189, 70, 214, 254, 184, 68, 215, 255, 179, 67, 216, 254, 174, 66, 217, 255, 171, 64, 218, 254, 165, 63, 219, 255, 161, 63, 220, 254, 156, 60, 221, 255, 152, 60, 222, 254, 146, 57, 223, 255, 142, 57, 224, 255, 138, 56, 224, 255, 133, 54, 226, 255, 129, 53, 226, 255, 124, 51, 228, 255, 119, 50, 228, 255, 115, 49, 230, 255, 111, 47, 230, 255, 107, 45, 232, 255, 102, 43, 232, 255, 98, 40, 234, 255, 94, 38, 234, 255, 90, 37, 236, 255, 85, 34, 237, 255, 81, 33, 238, 255, 77, 31, 239, 255, 72, 29, 240, 255, 68, 26, 241, 255, 64, 25, 242, 255, 60, 23, 243, 255, 56, 21, 244, 255, 51, 19, 245, 255, 48, 18, 246, 255, 42, 14, 247, 255, 39, 13, 248, 255, 35, 11, 249, 255, 31, 9, 250, 255, 26, 7, 251, 255, 22, 6, 252, 255, 17, 3, 253, 255, 14, 2, 254]
        return new heat.prototype.init(selector);
    }
    heat.prototype = {
        init: function (selector, dom) {
            var _init = null;
            dom = dom || document;
            var firstChar = typeof selector === 'string' && selector.charAt(0);
            // 处理document或一个父对象标签的情况
            if (dom === document || dom.length === 1) {
                // 传递第二个参数dom了，并且dom里只有一个父标签对象
                dom = dom.length ? dom[0] : document;
                _init = getDom(this, dom, firstChar, selector);
            } else {
                var subNodeList = [];
                for (var index = 0; index < dom.length; index++) {
                    _init = getDom(this, dom[index], firstChar, selector);
                    for (var j = 0; j < _init.length; j++) {
                        subNodeList.push(_init[j]);
                    }
                }
                for (var index in subNodeList) {
                    _init[index] = subNodeList[index];
                }
                _init.length = subNodeList.length;
            }
            return _init;
        },
        extend: function (obj) {
            for (var index in obj) {
                this[index] = obj[index];
            }
        }
    }
    heat.extend = function (obj) {
        for (var index in obj) {
            this[index] = obj[index];
        }
    };


    heat.prototype.extend({
        load: function (setting) {
            // points, w, h, imgurl
            if (!setting) {
                setting = {
                    width: this[0].offsetWidth,
                    height: this[0].offsetHeight,
                    imgurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574933171854&di=76f472b7a34b41461c00dafa071d5f57&imgtype=0&src=http%3A%2F%2Fmap.ps123.net%2Fchina%2FUploadFile%2F201508%2F2015082408303567.jpg',
                    points: [],
                }
                for (var i = 0; i < 100; i++) {
                    setting.points[i] = {
                        x: 100 + Math.random() * 800, // 坐标x,
                        y: 100 + Math.random() * 300, // 坐标y
                        ratio: Math.random() * 2, // 半径
                        opacity: 0.9
                    }

                }
            }
            // 创建 canvas 
            var offCanvas = document.createElement('canvas');
            var canvas = document.createElement('canvas');
            // 设置画布
            offCanvas.width = canvas.width = setting.width;
            offCanvas.height = canvas.height = setting.height;
            // 获取色彩通道和透明通道的映射关系
            this.colorGradual = getColorGradual(offCanvas);
            clearCanvas(canvas);
            // 在离屏渲染
            drawCanvas(offCanvas, setting.points, setting.width, setting.height, 20);
            drawGradual(offCanvas, this.colorGradual.data);
            // 写入canvas
            draw(offCanvas, canvas, setting.imgurl);
            // 插入画布
            this[0].append(canvas)
            return this;

        },
        css: function () {
            if (arguments.length > 0) {
                if (heat.getType(arguments[0]) === 'string' && arguments.length === 1) {
                    for (var i = 0; i < this.length; i++) {
                        var split  = arguments[0].split(":");
                        var key  = split[0];
                        var value  = split[1];
                        this[i].style[key] = value;
                    }
                } else if (heat.getType(arguments[0]) === 'string' && arguments.length === 2) {
                    for (var i = 0; i < this.length; i++) {
                        this[i].style[arguments[0]] = arguments[1];
                    }
                } else if (heat.getType(arguments[0]) === 'object' && arguments.length === 1) {
                    for (var i = 0; i < this.length; i++) {
                        for (var key in arguments[0]) {
                            this[i].style[key] = arguments[0][key];
                        }
                    }
                }
            }
            return this;
        }
    });

    heat.extend({
        getType: function (data) {
            // [object Array]
            var type = Object.prototype.toString.call(data);
            type = type.replace(/^\[object\s(\w+)\]$/g, '$1');
            return type.toLowerCase();
        },
    });
    function getDom(_this, dom, firstChar, selector) {
        if (firstChar === '#') {
            _this[0] = dom.getElementById(selector.substring(1));
            _this.length = 1;
        } else if (firstChar === '.') {
            var domList = dom.getElementsByClassName(selector.substring(1));
            for (var index = 0; index < domList.length; index++) {
                _this[index] = domList[index];
            }
            _this.length = domList.length;
        } else if (firstChar === '<') {
            var virtualDom = document.createElement(selector.replace(/<|>/g, ''));
            _this[0] = virtualDom;
            _this.length = 1;
        } else if (typeof selector === 'object') {
            _this[0] = selector;
            _this.length = 1;
        } else {
            var domList = dom.getElementsByTagName(selector);
            for (var index = 0; index < domList.length; index++) {
                _this[index] = domList[index];
            }
            _this.length = domList.length;
        }
        return _this;
    }

    // 绘制彩色渐变条 拿第一排像素颜色做透明通道和色彩通道的映射
    function getColorGradual(canvas) {
        let ctx = canvas.getContext('2d');;
        let grd = ctx.createLinearGradient(0, 0, 256, 10);
        grd.addColorStop(0.2, "rgba(0,0,255,0.2)");
        grd.addColorStop(0.3, "rgba(43,111,231,0.3)");
        grd.addColorStop(0.4, "rgba(2,192,241,0.4)");
        grd.addColorStop(0.6, "rgba(44,222,148,0.6)");
        grd.addColorStop(0.8, "rgba(254,237,83,0.8)");
        grd.addColorStop(0.9, "rgba(255,118,50,0.9)");
        grd.addColorStop(1, "rgba(255,10,0,0.95)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 256, 10);
        var imgData = ctx.getImageData(0, 0, 256, 1)
        return imgData;
    }

    // 绘制热力点透明通道
    function drawCanvas(canvas, points, width, height, range) {
        var p_width = width,
            p_height = height,
            range = range;
        ctx = canvas.getContext("2d");
        clearCanvas(canvas);
        points.map(val => {
            var ratio = val.ratio,
                opacity = val.opacity,
                x = val.x,
                y = val.y;
            ctx.beginPath();
            var grd = ctx.createRadialGradient(x, y, ratio, x, y, range * ratio);
            grd.addColorStop(0, 'rgba(0,0,0,' + opacity);
            grd.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = grd;
            ctx.arc(x, y, range * ratio, 0, 2 * Math.PI);
            ctx.fill();

        });
    }

    // 绘制渐变映射
    function drawGradual(canvas, colorGradual) {
        var ctx = canvas.getContext('2d');
        var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 3; i < imgData.data.length; i += 4) {
            let j = imgData.data[i] * 4;
            if (!j) {
                continue;
            }
            imgData.data[i - 1] = colorGradual[j + 2];
            imgData.data[i - 2] = colorGradual[j + 1];
            imgData.data[i - 3] = colorGradual[j];
        }
        clearCanvas(canvas);
        ctx.putImageData(imgData, 0, 0);
    }

    // drawImage 将离屏的画布上的内容画到屏幕上
    function draw(offCanvas, canvas, imgUrl) {
        var ctx = canvas.getContext('2d');
        var offctx = offCanvas.getContext('2d');
        var width = offCanvas.width;
        var height = offCanvas.height;
        clearCanvas(canvas);
        if (imgUrl && typeof (imgUrl) == 'string') {
            var img = new Image();
            img.width = width;
            img.height = height;
            img.src = imgUrl;
            img.onload = function () {
                ctx.drawImage(img, 0, 0, width, height);
                ctx.drawImage(offCanvas, 0, 0);
            }
        }
        else {
            ctx.drawImage(offCanvas, 0, 0);
        }
    }

    function clearCanvas(canvas) {
        var cxt = canvas.getContext("2d");
        cxt.clearRect(0, 0, canvas.width, canvas.height);
    }

    // 将heat的prototype给init的prototype即可
    heat.prototype.init.prototype = heat.prototype;
    window.heat = heat;
})();