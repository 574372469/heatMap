# heatMap
html5 canvas 根据直角坐标系绘制热力图
# 使用方法 
## > heat(`selector`).load(`setting`)
```
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
``` 
