$(function() {
    $("form :input").blur(function() {
        var $parent = $(this).parent();
        $parent.find(".formtips").remove();
        //验证用户名
        if ($(this).is("#name")) {
            if ($(this).val() == "" || $(this).val().length < 4 || $(this).val().length > 20) {
                var errormsg = "4-20位字符，支持数字，字符和_。";
                $parent.append('<span class="formtips onerror">' + errormsg + '</span>');
                // $(this).css({ "border": "1px solid red" });

            } else {
                var successmsg = "输入正确";
                $parent.append('<span class="formtips onsuccess">' + successmsg + '</span>')
            }

        };
        //验证密码
        var password = $("#password").val();

        if ($(this).is("#password")) {
            var passlength = $(this).val().length;
            if (passlength <= 6 || passlength > 20) {
                var errormsg = "6-20位字符，建议包含数字和字符";
                $parent.append('<span class="formtips onerror">' + errormsg + '</span>');
                $(this).css({ "border": "1px solid red" });

            } else if (passlength > 6 && passlength <= 10) {
                var $passwordl = $(".passwordlength");
                $passwordl.fadeIn(100);
                var successmsg = "输入正确";
                $parent.append('<span class="formtips onsuccess">' + successmsg + '</span>')
            } else if (passlength >= 11 && passlength <= 15) {

                var passlogo = $(".passwordlength .pass-logo");
                passlogo.css({
                    "background-position": "0 -13px"
                })
                var successmsg = "输入正确";
                $parent.append('<span class="formtips onsuccess">' + successmsg + '</span>')
            } else if (passlength >= 16 && passlength <= 20) {

                var passlogo = $(".passwordlength .pass-logo");
                passlogo.css({
                    "background-position": "0 -26px"
                })
                var successmsg = "输入正确";
                $parent.append('<span class="formtips onsuccess">' + successmsg + '</span>')

            } else if (!isNaN($(this).val())) {
                var warnmsg = "您输入的密码过于简单，建议数字和字符一起";
                $parent.append('<span class="formtips onerror">' + warnmsg + '</span>');
                $(this).css({ "border": "1px solid red" });

            }
        };
        //确认密码
        if ($(this).is("#sure")) {
            if ($(this).val() == password) {
                var successmsg = "输入正确";
                $parent.append('<span class="formtips onsuccess">' + successmsg + '</span>')

            } else {
                var errormsg = "和上次输入的密码不一致";
                $parent.append('<span class="formtips onerror">' + errormsg + '</span>');
            }

        };
        //验证公司
        if ($(this).is("#company")) {
            if ($(this).val().length < 4 || $(this).val().length > 20) {
                var errormsg = "4-20位字符，支持数字，字符和_。";
                $parent.append('<span class="formtips onerror">' + errormsg + '</span>');
                $(this).css({ "border": "1px solid red" });
            } else {
                var successmsg = "输入正确";
                $parent.append('<span class="formtips onsuccess">' + successmsg + '</span>')
            }

        };
        //验证地址
        if ($(this).is("#adress")) {
            if ($(this).val().length < 4 || $(this).val().length > 20) {
                var errormsg = "4-20位字符，支持数字，字符和_。";
                $parent.append('<span class="formtips onerror">' + errormsg + '</span>');
                $(this).css({ "border": "1px solid red" });
            } else {
                var successmsg = "输入正确";
                $parent.append('<span class="formtips onsuccess">' + successmsg + '</span>')
            }

        };



        if ($(this).is("#selected")) {
            var $selected = $("select :selected").text();
            if ($selected == null || $selected == "") {
                var errormsg = "请选择";
                $parent.append('<span class="formtips onerror">' + errormsg + '</span>');

            } else {
                var successmsg = "输入正确";
                $parent.append('<span class="formtips onsuccess">' + successmsg + '</span>')
            }

        };
        //验证姓名
        if ($(this).is("#realname")) {
            if ($(this).val() == "" || $(this).val().length < 2 || $(this).val().length > 20) {
                var errormsg = "2-20位字符，支持数字，字符和_。";
                $parent.append('<span class="formtips onerror">' + errormsg + '</span>');
                $(this).css({ "border": "1px solid red" });

            } else {
                var successmsg = "输入正确";
                $parent.append('<span class="formtips onsuccess">' + successmsg + '</span>')
            }

        };
        //验证手机
        if ($(this).is("#tel")) {
            if (/^0?(13|15|17|18|14)[0-9]{9}$/.test(this.value)) {
                var successmsg = "输入正确";
                $parent.append('<span class="formtips onsuccess">' + successmsg + '</span>')
            } else {
                var errormsg = "请输入11位电话号码";
                $parent.append('<span class="formtips onerror">' + errormsg + '</span>');
                $(this).css({ "border": "1px solid red" });
            }

        };
        //验证固定电话
        if ($(this).is("#fixedTel")) {
            if (/^[0-9\-()（）]{7,18}$/.test(this.value)) {
                var successmsg = "输入正确";
                $parent.append('<span class="formtips onsuccess">' + successmsg + '</span>')
            } else {
                var errormsg = "请输入正确的固定电话";
                $parent.append('<span class="formtips onerror">' + errormsg + '</span>');
                $(this).css({ "border": "1px solid red" });
            }

        };
        //验证邮箱
        if ($(this).is("#emall")) {
            if (/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(this.value)) {
                var successmsg = "输入正确";
                $parent.append('<span class="formtips onsuccess">' + successmsg + '</span>')
            } else {
                var errormsg = "请输入正确邮箱";
                $parent.append('<span class="formtips onerror">' + errormsg + '</span>');
                $(this).css({ "border": "1px solid red" });
            }

        };

    }).keyup(function() {
        $(this).triggerHandler("blur");
    })

    $('#send').click(function(e) {
        // e.preventDefault();
        $("form :input").trigger('blur');
        var numError = $('form .onerror').length;
        console.log(numError);
        if (numError) {
            return false;
        }
        alert("注册成功,密码已发到你的邮箱,请查收.");
    });
    //全选
    $("#checkedAll").click(function() {

        $('[type=checkbox]:checkbox').prop('checked', true);
    });
    //全不选
    $("#checkedNo").click(function() {
        console.log(11);
        $('[type=checkbox]:checkbox').prop('checked', false);
    });
    //反选
    $("#checkedRev").click(function() {
        $('[type=checkbox]:checkbox').each(function() {
            // //此处用JQ写法颇显啰嗦。体现不出JQ飘逸的感觉。
            // //$(this).attr("checked", !$(this).attr("checked"));
            // $(this).prop("checked", !$(this).prop("checked"));
            this.checked = !this.checked;
        });
    });

})
