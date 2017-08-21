$(function() {
    //获取外层的高度
    var boxW = $("#box").width();
    //得到左边的按钮
    var btnl = $("#btnl");
    //得到右边的按钮
    var btnr = $("#btnr");
    //得到包裹图片的ul
    var uls = $("#img");
    //克隆
    var clone = $("#img li").first().clone();
    //添加到Ul里面
    clone.appendTo(uls);
    //得到li的个数
    var lilength = $("#img li").length;
    console.log(lilength);
    var i = 0;
    //左边点击
    btnl.click(function() {
        movel()

    })

    function movel() {
        i++;
        console.log(i);
        if (i == lilength) {
            uls.css({ "left": 0 })
            i = 1;
        }
        uls.stop().animate({ left: -i * boxW }, 500)

        if (i == lilength - 1) {
            $("#num li").eq(0).addClass("on").siblings().removeClass("on")

        } else {
            $("#num li").eq(i).addClass("on").siblings().removeClass("on")

        }
    }
    //右边点击
    btnr.click(function() {
        mover();
    })

    function mover() {
        i--;
        if (i == -1) {
            uls.css({ left: -(lilength - 1) * boxW })

            i = lilength - 2;
        }
        console.log(i)
        uls.stop().animate({ "left": -i * boxW }, 700);
        $("#num li").eq(i).addClass("on").siblings().removeClass("on");
    }
    $("#num li").hover(function() {
        //得到索引值
        var index = $(this).index();
        i = index;
        uls.stop().animate({ "left": -index * boxW }, 700);
        $(this).addClass("on").siblings().removeClass("on");
    });
    //设置定时器
    var t = setInterval(movel, 1500);
    //清除定时器
    $("#box").hover(function() {
    	$(".btn").fadeIn(100);
        clearTimeout(t)
    }, function() {
        t = setInterval(movel, 1500)
    })
})
