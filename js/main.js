$(function(){

	// 捲軸高度到header添加樣式
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > $("header").outerHeight(true) ) {
			$("header").addClass('fixed')
		} else {
			$("header").removeClass('fixed')
		}
	})
	
	//選館別換顏色
	$("header ul li").click(function(){		
		if ($(this).index() == 0) {
			console.log('test');
			$(this).find('i').css('background-image', 'url("images/ic_star_rate_black_18dp_2x.png")');
		}else{
			$("header li").find('i').css('background-image', '');
		}
			$(this).find("a").addClass('active').parent().siblings('li').find('a').removeClass('active black')
	})

	// 捲軸捲到product_specifications高度將加入購物車按鈕css改變
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > $(".product_box").outerHeight(true) ){
			$(".monybotton").css('position', 'static')
		}else {
			$(".monybotton").css('position', '')
		}
	})

	// 選擇美廉社卡號
	$(".cardnumber ul li").click(function(){
		$(this).addClass("number_act").siblings().removeClass("number_act")
	})

	// 點擊前往設定打開phonepassword
	$(".member_login .nopassword").click(function() {
		$(".phonepassword").css('display', 'block');
	})

	// 點擊忘記密碼&下一步都打開alert浮層
	$(".password .phonepassword button , #forgetpassword").click(function() {
		$("#phonemessage").css('display', 'flex');
	})

    // .alertbox裡button和說明條款X按鈕功能
	$(".alertbox button").click(function() {
		$("#phonemessage").css('display', 'none');
	})


	// 說明條款X按鈕功能
	$(".closeclose").click(function() {
		$(this).parents(".alertbox").css('display', 'none');
		$("body").css('overflow', '');
	})

	// 點擊footer裡的li打開相對應的浮層
	$("footer li").click(function() {
		$("body").css('overflow', 'hidden');

		var a = $(this).index()
		$(".alertbox").eq(a).css('display', 'flex');
		
		var hh = $(".alertbox").eq(a).find(".contbox").outerHeight(true)
		if (hh > 650) {
			$(".alertbox").eq(a).find(".contbox").css({
				"height": '650',
				"overflow-y": 'scroll',
			});
		}
	});

	// 點擊訂購小密技
	$(".dropdown_list h3 a").click(function() {
		$("body").css('overflow', 'hidden');

		$("#alert2").css('display', 'flex').find(".contbox").css({
			"height": '650',
			"overflow-y": 'scroll',
		});
	});

	// 同意訂購條款
	$(".agreebox #agree").click(function() {
		$("body").css('overflow', 'hidden');

		$("#alert1").css('display', 'flex').find(".contbox").css({
			"height": '650',
			"overflow-y": 'scroll',
		});
	});

	// 打開加入會員浮層
	$(".member_login h1 a").click(function(event) {
		$(".alertbox").eq(1).css('display', 'flex');
	});



	// 會員步驟介紹下一步
	$(".step .finger a").click(NEXT)

	var N = 0 , step_li_length = $(".step ul li").length

	function NEXT(){

		if (N < step_li_length - 1) {
		    N += 1;
		    console.log(N)
		}else{
			N = 1;
			console.log(N)
		} 

		$(".step > ul").stop().animate({ left: N * 250 * -1 })

	}

	$(".step span").click(function(event) {
		$(".step > ul").stop().animate({ left: 0 * 250 * -1 })
	});

	$(".closeclose").click(function(event) {
		$(".alertbox").css('display', 'none');
	});



})
