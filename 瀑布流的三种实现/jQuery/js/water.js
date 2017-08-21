$(window).on("load", function() {
    var dataInt = { 'data': [{ 'src': '1.jpg' }, { 'src': '2.jpg' }, { 'src': '3.jpg' }, { 'src': '4.jpg' }, { 'src': '5.jpg' }, { 'src': '6.jpg' }, { 'src': '7.jpg' }, { 'src': '8.jpg' }] };
    window.onscroll = function() {
        if (checkscrollside()) {
            $.each(dataInt.data, function(index, value) {
                var $oPin = $('<div>').addClass('pin').appendTo($("#main"));
                var $oBox = $('<div>').addClass('box').appendTo($oPin);
                $('<img>').attr('src', './images/' + $(value).attr('src')).appendTo($oBox);
            });
            waterfall();
        };
    }
})

function waterfall() {
    var $pin = $(".pin");
    //得到宽度
    var pinW = $pin.eq(0).outerWidth()
        //得到列数
    var cols = Math.floor($(window).width() / pinW);
    $('#main').width(pinW * cols).css('margin', '0 auto');
    // console.log(cols);
    var Harr = [] //存储高度

    $pin.each(function(index, value) {
            //index是索引，value是元素;
            var pinH = $pin.eq(index).outerHeight(); //得到每个盒子的高度
            if (index < cols) {
                Harr[index] = pinH;
            } else {
                //找到最小高度
                var minH = Math.min.apply(null, Harr);
                // console.log(minH)
                //找到其索引
                var minHindex = $.inArray(minH, Harr) //第一个参数为要判断的数，第二个为在哪个数组判断
                    // console.log(minHindex);
                $(value).css({
                        'position': 'absolute',
                        'top': minH + 'px',
                        'left': minHindex * pinW + 'px'
                    })
                    //改变其数组的高度
                Harr[minHindex] += $pin.eq(index).outerHeight();
            }
        })
        // console.log(Harr);
}

function checkscrollside() {
    var $pin = $("#main>div");
    var lastPinH = $pin.last().offset().top + Math.floor($pin.last().height() / 2); //创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
    var scrollTop = $(window).scrollTop() //注意解决兼容性
    var documentH = $(document).Height(); //页面高度
    return (lastPinH < scrollTop + documentH) ? true : false; //到达指定高度后 返回true，触发waterfall()函数
}
