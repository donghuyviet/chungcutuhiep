( function( $ ) {
function subscribeEmail_project2(a) {
	var b = $("#phone_project2").val();
	return "" == b ? void err_re_proj2("* Vui lòng nhập số điện thoại") : "" == b || validatePhone(b) ? void(requestSent_eproject2 || (requestSent_eproject2 = !0,
		$(".form-dky-xemcanho").submit())) : void err_re_proj2("* Số điện thoại không đúng định dạng")
}

function err_re_proj2(a) {
	0 == jQuery(".deail_reg_canhomau_right_form #err_note").length ? $(".deail_reg_canhomau_right_form").append(
		'<div class="c"></div><div style="text-align:left;margin-top:5px" id="err_note">' + a + "</div>") : jQuery(".deail_reg_canhomau_right_form #err_note").html(
		a), $("#phone_project2").focus()
}

function subscribeEmail_project(a) {
	var b = $("#phone_project").val();
	return "" == b ? void err_re_proj("* Vui lòng nhập số điện thoại") : "" == b || validatePhone(b) ? void(requestSent_eproject || (requestSent_eproject = !0, $(
		".form-dky-thongbaolich").submit())) : void err_re_proj("* Số điện thoại không đúng định dạng")
}

function err_re_proj(a) {
	0 == jQuery(".v2_pd_dc_rg_boxLich_from #err_note").length ? $(".v2_pd_dc_rg_boxLich_from").append(
			'<div class="c"></div><div style="text-align:left;margin-top:10px" id="err_note">' + a + "</div>") : jQuery(".v2_pd_dc_rg_boxLich_from #err_note").html(a),
		$("#phone_project").focus()
}

function subscribe_form_new() {
	var a = $("#nhapten").val(),
		b = $("#nhapsdt").val(),
		c = $("#nhapmail").val();
	return "" == a ? ($("#err_note").css({
		display: "block"
	}), void err_re_proj1("* Vui lòng nhập họ tên")) : "" == b ? ($("#err_note").css({
		display: "block"
	}), err_re_projphone("* Vui lòng nhập số điện thoại"), void $(".v2_f_boxrightContent_form").css({
		"padding-bottom": "0"
	})) : "" == b || validatePhone(b) ? "" == c ? void err_re_proj3("* Vui lòng nhập email") : "" == c || validateEmail(c) ? void(requestSent_fthl1 || (
		requestSent_fthl1 = !0, $(".form-dungbolo").submit())) : (err_re_proj3("* Vui lòng nhập email hợp lệ"), void $(".v2_f_boxrightContent_form").css({
		"padding-bottom": "0"
	})) : ($("#err_note").css({
		display: "block"
	}), err_re_projphone("* Số điện thoại không đúng định dạng"), void $(".v2_f_boxrightContent_form").css({
		"padding-bottom": "0"
	}))
}

function err_re_proj1(a) {
	0 == jQuery(".form-new-1 #err_note").length ? $(".form-new-1").append(
		'<div class="c"></div><div style="text-align:left;margin-top:10px;font-size: 12px;" id="err_note">' + a + "</div>") : jQuery(".form-new-1 #err_note").html(
		a), $("#link-form-new").focus()
}

function err_re_proj3(a) {
	0 == jQuery(".form-new-3 #err_note").length ? $(".form-new-3").append(
		'<div class="c"></div><div style="text-align:left;margin-top:10px;font-size: 12px;" id="err_note">' + a + "</div>") : jQuery(".form-new-3 #err_note").html(
		a), $("#link-form-new").focus()
}

function err_re_projphone(a) {
	0 == jQuery(".form-new-2 #err_note").length ? $(".form-new-2").append(
		'<div class="c"></div><div style="text-align:left;margin-top:10px;font-size: 12px;" id="err_note">' + a + "</div>") : jQuery(".form-new-2 #err_note").html(
		a), $("#link-form-new").focus()
}

function subscribeemail2() {
	var a = $("#emal_baogia").val();
	return "" == a ? void err_re_proj4("* Vui lòng nhập email") : "" == a || validateEmail(a) ? requestSent_email ? void 0 : (requestSent_email = !0, $(
		".step_input1").removeClass("active"), $(".step_input2").addClass("active"), $(".step_footer2").addClass("active"), $(".step_footer1").removeClass(
		"active"), $(".step_lbl1").stop().animate({
		top: -22
	}, 500).removeClass("active"), $(".step_lbl2").stop().animate({
		top: 0
	}, 500).addClass("active"), $("#err_note").css({
		display: "none"
	}), !1) : void err_re_proj4("* Vui lòng nhập email hợp lệ")
}

function err_re_proj4(a) {
	0 == jQuery(".step_action_input #err_note").length ? $(".step_action_input").append(
		'<div class="c"></div><div style="text-align:left;margin-top:10px" id="err_note">' + a + "</div>") : jQuery(".step_action_input #err_note").html(a), $(
		"#email-next").focus()
}

function subscribesdt2() {
	var a = $("#phone_baogia").val();
	return "" == a ? ($("#err_note").css({
			display: "block"
		}), void err_re_proj5("* Vui lòng nhập số điện thoại")) : "" == a || validatePhone(a) ? void(requestSent_sdt || (requestSent_sdt = !0,$(
		".form-dky-thongbaolich").submit())) :
		($("#err_note").css({
			display: "block"
		}), void err_re_proj5("* Số điện thoại không đúng định dạng"))
}

function err_re_proj5(a) {
	0 == jQuery(".step_action_input #err_note").length ? $(".step_action_input").append(
		'<div class="c"></div><div style="text-align:left;margin-top:10px" id="err_note">' + a + "</div>") : jQuery(".step_action_input #err_note").html(a), $(
		"#btn_phone_baogia").focus()
}

function subscribe_downow() {
	var a = $("#name-downow").val(),
		b = $("#phone-downow").val(),
		c = $("#email-downow").val();
	return "" == a ? ($("#err_note").css({
			display: "block"
		}), void err_re_proj8("* Vui lòng nhập họ tên")) : "" == c ? ($("#err_note").css({
			display: "block"
		}), void err_re_proj6("* Vui lòng nhập email")) : "" == c || validateEmail(c) ? "" == b ? ($("#err_note").css({
			display: "block"
		}), void err_re_proj7("* Vui lòng nhập số điện thoại")) : "" == b || validatePhone(b) ? void(request_downow || (request_downow = !0, $(".form-download1").submit())) :
		($("#err_note").css({
			display: "block"
		}), void err_re_proj7("* Số điện thoại không đúng định dạng")) : ($("#err_note").css({
			display: "block"
		}), void err_re_proj6("* Vui lòng nhập email hợp lệ"))
}

function err_re_proj6(a) {
	0 == jQuery(".dowload-last-input2 #err_note").length ? $(".dowload-last-input2").append(
		'<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a + "</div>") : jQuery(".dowload-last-input2 #err_note").html(a), $(
		"#link-dow-now").focus()
}

function err_re_proj7(a) {
	0 == jQuery(".dowload-last-input3 #err_note").length ? $(".dowload-last-input3").append(
		'<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a + "</div>") : jQuery(".dowload-last-input3 #err_note").html(a), $(
		"#link-dow-now").focus()
}

function err_re_proj8(a) {
	0 == jQuery(".dowload-last-input1 #err_note").length ? $(".dowload-last-input1").append(
		'<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a + "</div>") : jQuery(".dowload-last-input1 #err_note").html(a), $(
		"#link-dow-now").focus()
}

function subscribe_downow_modal() {
	var a = $("#name-downow-modal").val(),
		b = $("#phone-downow-modal").val();
		// c = $("#email-downow-modal").val();
	return "" == a ? ($("#err_note").css({
        display: "block"
    }),
     void err_re_proj9("* Vui lòng nhập họ tên")) : "" == 
    // c ? ($("#err_note").css({
    //     display: "block"
    // }),
    //  void err_re_proj10("* Vui lòng nhập email")) : "" == 
    b ? ($("#err_note").css({
        display: "block"
    }),
     void err_re_proj11("* Vui lòng nhập số điện thoại")) : "" == b || validatePhone(b) ? 
    // "" == c || validateEmail(c) ?
     void(request_downow || (
        request_downow = !0, $(".form-download2").submit())) : ($("#err_note").css({
        display: "block"
    }),
    //  void err_re_proj10("* Vui lòng nhập email hợp lệ")) : ($("#err_note").css({
    //     display: "block"
    // }),
     void err_re_proj11("* Số điện thoại không đúng định dạng"))
}

function err_re_proj10(a) {
	0 == jQuery(".dowload-last-input2-modal #err_note").length ? $(".dowload-last-input2-modal").append(
			'<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a + "</div>") : jQuery(".dowload-last-input2-modal #err_note").html(a),
		$("#link-dow-now-modal").focus()
}

function err_re_proj11(a) {
	0 == jQuery(".dowload-last-input3-modal #err_note").length ? $(".dowload-last-input3-modal").append(
			'<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a + "</div>") : jQuery(".dowload-last-input3-modal #err_note").html(a),
		$("#link-dow-now-modal").focus()
}

function err_re_proj9(a) {
	0 == jQuery(".dowload-last-input1-modal #err_note").length ? $(".dowload-last-input1-modal").append(
			'<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a + "</div>") : jQuery(".dowload-last-input1-modal #err_note").html(a),
		$("#link-dow-now-modal").focus()
}

function validatePhone(a) {
	var b = /^(016([0-9]{1})|012([0-9]{1})|09[0-9]|08[0-9])(\d{7})$/i;
	return !!b.test(a)
}

function validateEmail(a) {
	var b = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return !!b.test(a)
}

function modal_red() {
	var a = $("#name-modal-red").val(),
		b = $("#phone-modal-red").val(),
		c = $("#email-modal-red").val();
	return "" == a ? ($("#err_note").css({
			display: "block"
		}), void err_red1("* Vui lòng nhập họ tên")) : "" == c ? ($("#err_note").css({
			display: "block"
		}), void err_red2("* Vui lòng nhập email")) : "" == c || validateEmail(c) ? "" == b ? ($("#err_note").css({
			display: "block"
		}), void err_red3("* Vui lòng nhập số điện thoại")) : "" == b || validatePhone(b) ? void(request_red || (request_red = !0, $(".form-tlduan-red").submit())) :
		($("#err_note").css({
			display: "block"
		}), void err_red3("* Số điện thoại không đúng định dạng")) : ($("#err_note").css({
			display: "block"
		}), void err_red2("* Vui lòng nhập email hợp lệ"))
}

function err_red1(a) {
	0 == jQuery(".input-red1 #err_note").length ? $(".input-red1").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a +
		"</div>") : jQuery(".input-red1 #err_note").html(a), $("#link-modal-red").focus()
}

function err_red2(a) {
	0 == jQuery(".input-red2 #err_note").length ? $(".input-red2").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a +
		"</div>") : jQuery(".input-red2 #err_note").html(a), $("#link-modal-red").focus()
}

function err_red3(a) {
	0 == jQuery(".input-red3 #err_note").length ? $(".input-red3").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a +
		"</div>") : jQuery(".input-red3 #err_note").html(a), $("#link-modal-red").focus()
}

function modal_blue() {
	var a = $("#name-modal-blue").val(),
		b = $("#phone-modal-blue").val(),
		c = $("#email-modal-blue").val();
	return "" == a ? ($("#err_note").css({
			display: "block"
		}), void err_blue1("* Vui lòng nhập họ tên")) : "" == c ? ($("#err_note").css({
			display: "block"
		}), void err_blue2("* Vui lòng nhập email")) : "" == c || validateEmail(c) ? "" == b ? ($("#err_note").css({
			display: "block"
		}), void err_blue3("* Vui lòng nhập số điện thoại")) : "" == b || validatePhone(b) ? void(request_blue || (request_blue = !0, $(".form-banggia-blue").submit())) :
		($("#err_note").css({
			display: "block"
		}), void err_blue3("* Số điện thoại không đúng định dạng")) : ($("#err_note").css({
			display: "block"
		}), void err_blue2("* Vui lòng nhập email hợp lệ"))
}

function err_blue1(a) {
	0 == jQuery(".input-blue1 #err_note").length ? $(".input-blue1").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a +
		"</div>") : jQuery(".input-blue1 #err_note").html(a), $("#link-modal-blue").focus()
}

function err_blue2(a) {
	0 == jQuery(".input-blue2 #err_note").length ? $(".input-blue2").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a +
		"</div>") : jQuery(".input-blue2 #err_note").html(a), $("#link-modal-blue").focus()
}

function err_blue3(a) {
	0 == jQuery(".input-blue3 #err_note").length ? $(".input-blue3").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a +
		"</div>") : jQuery(".input-blue3 #err_note").html(a), $("#link-modal-blue").focus()
}

function modal_vag() {
	var a = $("#name-modal-yellow").val(),
		b = $("#phone-modal-yellow").val();
	return "" == a ? ($("#err_note").css({
		display: "block"
	}), void err_yellow1("* Vui lòng nhập họ tên")) : "" == b ? ($("#err_note").css({
		display: "block"
	}), void err_yellow2("* Vui lòng nhập số điện thoại")) : "" == b || validatePhone(b) ? void(request_yellow || (request_yellow = !0, $(
		".form-lichmoban-yellow").submit())) : ($("#err_note").css({
		display: "block"
	}), void err_yellow2("* Số điện thoại không đúng định dạng"))
}

function err_yellow1(a) {
	0 == jQuery(".input-vag1 #err_note").length ? $(".input-vag1").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a +
		"</div>") : jQuery(".input-vag1 #err_note").html(a), $("#link-modal-yellow").focus()
}

function err_yellow2(a) {
	0 == jQuery(".input-vag2 #err_note").length ? $(".input-vag2").append('<div class="c"></div><div style="text-align:left;margin-top:3px" id="err_note">' + a +
		"</div>") : jQuery(".input-vag2 #err_note").html(a), $("#link-modal-yellow").focus()
}
jQuery(document).ready(function() {
	$(".nav-header").affix({
		offset: {
			top: $(".banner").outerHeight(!0)
		}
	})
}), jQuery("document").ready(function() {
	$("#btn_startdownloadtailieu").click(function() {
		return $(".step_down0").removeClass("active"), $(".step_down1").addClass("active"), !1
	}), $(".btn-res1").on("click", function(a) {
		var b = $(a.target);
		$(b.attr("href")).length > 0 && b.is("a.btn-res1") && ($("html, body").stop().animate({
			scrollTop: $(b.attr("href")).offset().top - 0
		}, 1500, "easeInOutExpo"), a.preventDefault())
	})
}), jQuery(document).ready(function() {
	var a = 220,
		b = 500;
	$(window).scroll(function() {
		$(this).scrollTop() > a ? $(".back-to-top").fadeIn(b) : $(".back-to-top").fadeOut(b)
	}), $(".back-to-top").click(function(a) {
		return a.preventDefault(), $("html, body").animate({
			scrollTop: 0
		}, b), !1
	}), $(".search-click").click(function(a) {
		var b = $(".search");
		"" != $(".input-search").val() && b.hasClass("active") ? CheckValue() : (b.toggleClass("active"), setTimeout(function() {
			$(".input-search").focus()
		}, 500))
	})
}), jQuery(document).click(function(a) {
	var b = $(".search");
	$(".input-search").show(), b.is(a.target) || 0 !== b.has(a.target).length || ($(".search").removeClass("active"), $(".input-search").css({
		width: "0",
		padding: "0",
		border: "none"
	}))
});
var requestSent_eproject2 = !1,
	requestSent_eproject = !1,
	requestSent_fthl1 = !1,
	requestSent_email = !1,
	requestSent_sdt = !1,
	request_downow = !1;
jQuery(document).ready(function() {
	$(window).width() <= 992 && ($("a.btn-res1").removeAttr("href"), $("a.btn-res1").each(function() {
		this.href += "#f_boxright-link"
	}))
});
var request_red = !1,
	request_blue = !1,
	request_yellow = !1;
jQuery(document).ready(function() {
	$(window).width() >= 992 && $("#dowload-last-link").scrollToFixed({
		marginTop: 40,
		zIndex: 90,
		limit: function() {
			var a = 0;
			return $(".section3").length && (a = $(".section3").offset().top - $(this).outerHeight(!0) - 10), a
		},
		preFixed: function() {},
		postFixed: function() {}
	})
});


   // ------------------ Check sdt -form-modal-header -----------------
var requestSent_eprojectttt  = false;
    function submit_header() {
        var phone = $('#phone-header').val();
        if (phone == '') {
            err_re_projjjj('* Vui lòng nhập số điện thoại');
            return;
        }
        if (phone != '' && !validatePhone(phone)) {
            err_re_projjjj('* Số điện thoại không đúng định dạng');
            return;
        }
        if (!requestSent_eprojectttt ) {
            requestSent_eprojectttt  = true;
            $("#form-header").submit();
        }
    }
    function err_re_projjjj(sms) {
        if (jQuery('.input-gr-sdt #err_note').length == 0) {
            $('.input-gr-sdt').append('<div class="c"></div><div style="text-align:left ;margin-bottom:10px;color: red;" id="err_note">' + sms + '</div>');
        } else {
            jQuery('.input-gr-sdt #err_note').html(sms);
        }
        $('#phone_prheader').focus();
    }
} )( jQuery );