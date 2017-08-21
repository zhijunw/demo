 var area = document.getElementById("moocBox");
 var con1 = document.getElementById("con1");
 var con2 = document.getElementById("con2");
 con2.innerHTML = con1.innerHTML; //克隆
 con3.innerHTML = con1.innerHTML; //克隆
 var liHeight = 24;
 area.scrollTop = 0;
 var time;


 function scroll() {
     area.scrollTop++ //滚动起来
         if (area.scrollTop % liHeight == 0) {
             clearInterval(time);
             setTimeout("start()", 2000)
         } else {
             area.scrollTop++;
             if (area.scrollTop == area.offsetHeight) {
                 area.scrollTop = 0
             }
         }
 }

 function start() {
     area.scrollTop++;
     time = setInterval("scroll()", 50)
 }

 setTimeout("start()", 2000); //初始化

 // area.onmouseover = function() {
 //     clearInterval(time);
 // }
 // area.onmouseout = function() {
 //     time = setInterval("scroll()", 50);
 // }
