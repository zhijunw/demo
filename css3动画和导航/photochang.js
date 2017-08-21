$(document).ready(function() {
    /*相册使用的欢迎图片*/
    var default_image = "http://img.h5course.cn/codepen/2017.01.19.01.jpg";
    /*加载默认图像*/
    loadPhoto(default_image);
    function loadPhoto(url) {
        /*图像预加载*/
        var img = new Image();
        $(img).attr({ "src": url });
        $("#largephoto").css({
            "background-image": 'url("' + url + '")'
        });
    }
    /* 单击缩略图时*/
    $(".thumb-container").click(function() {
        var handler = $(this).find(".large-image");
        var newsrc  = handler.attr("src");
        loadPhoto(newsrc);

    });

    /* 当鼠标悬停在缩略图上时*/
    $(".thumb-container").hover(function() {  
        $(this).find(".large-thumb").stop().animate({
            "marginLeft": "-7px",
            "marginTop": "-7px"
        }, 200);
        $(this).find(".large-thumb-shine").stop();
        $(this).find(".large-thumb-shine").css({
            "background-position-x": "-100px"
        }); 
        $(this).find(".large-thumb-shine").animate({
            "background-position-x": "100px"
        }, 7000);  
    }, function() {
        $(this).find(".large-thumb").stop().animate({
            "marginLeft": "0px",
            "marginTop": "0px"
        },200);
    });
});