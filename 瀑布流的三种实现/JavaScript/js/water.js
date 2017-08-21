window.onload = function() {
waterfull("main","pin")
window.onscroll=function(){
	checkscrollside();
}
};

function waterfull(parent,pin) {
    var oparent = document.getElementById(parent);
    var opin=getClass(oparent,pin);
    // console.log(opin.length)
    var opinW=opin[0].offsetWidth;
    //得到列数
    var cols=Math.floor(document.documentElement.clientWidth/opinW);
    //得到屏幕的宽度
    oparent.style.cssText="width:"+opinW*cols+'px';
    // console.log(cols);
    var Harr=[]//存储高度
    for (var i = 0; i < opin.length; i++) {
    	if (i<cols) {
    		//第一行
    		Harr.push(opin[i].offsetHeight);
    	}else{
    		//第二行开始就要找到最小高度以及它的索引
    		var minH=Math.min.apply(null,Harr);
    		// console.log(minH)
    		//找到其索引，在什么数组里判断什么值
    		var minHIndex=getIndex(Harr,minH)//
    		// console.log(minHIndex)
    		opin[i].style.position='absolute'
    		opin[i].style.top=minH+'px';
    		opin[i].style.left=minHIndex*opinW+'px';
    		//改变数组的高度
    		Harr[minHIndex]+=opin[i].offsetHeight;
    	}
    }
    console.log(Harr)

}
//找到父元素下所有className为某一个值得函数
function getClass(parent, clsName) {
    var oelement = parent.getElementsByTagName("*"); //会得到一个数组
    var pinArray = [] //存储
    for (var i = 0; i < oelement.length; i++) {
        if (oelement[i].className == clsName) {
            pinArray.push(oelement[i]);
        }
    }
    return pinArray;
}
function getIndex(arr,val){
for(var i in arr){
	if (arr[i]==val) {
		return i;
	}
}
}
function checkscrollside(){
	var oparent=document.getElementById("main");
	var opin=getClass(oparent,"pin");
	//得到最后一个盒子offsetTop
	var lastpinH=opin[opin.length-1].offsetTop;
	//得到滚动距离
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	//得到可以显示的高度
	var clientWidth=document.body.clientHeight||document.documentElement.clientHeight;
	console.log(clientWidth);

}






