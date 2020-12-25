$(document).ready(function () {
    // 스크롤 페이지
    // 1. 높이 구하기
    var ht = $(window).height();
    $('section').height(ht);
    $(window).on("resize", function() {
        var ht = $(window).height();
        $('section').height(ht);
    }); 
    // 2. 냅바메뉴 클릭 시 자동 스크롤
    $('#menu li').on("click", function(e) {
        e.preventDefault();
        var ht = $(window).height();
        var i = $(this).index();
        var scPagePos = ht * i;
        $('html, body').stop().animate({ "scrollTop":scPagePos }, 700);
    });
    // 3. 스크롤 시 section 자동 맞춤
    $('section').on("mousewheel", function(event, delta) {
        if(delta > 0) {
            var prev = $(this).prev().offset().top;
            $('html, body').stop().animate({"scrollTop":prev}, 700);
        } else if(delta < 0) {
             var next = $(this).next().offset().top;
            $('html, body').stop().animate({"scrollTop":next}, 700);
        }
    });
    
    // 트리거 모양 변경
    $('.trigger').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
    
    // 왼쪽 앵커
    $('#left-side').on('click', 'li', function(e) {
        // 1. 앵커 클릭 시 자동 스크롤
        e.preventDefault();
        var aIndex = $(this).index(),
            winH = $(window).height(),
            newTop = winH * aIndex;
        $('html, body').stop().animate({
            scrollTop: newTop
        }, 1500);
        
        // 2. 앵커 클릭 시 'on'
        $('#left-side').children().removeClass();
        $(this).addClass('on');  
    });
    // 3. 스크롤 시 'on'
    $(window).on("scroll", function( ) {
		var ht = $(window).height( );
		var scroll = $(window).scrollTop( );
		
		for(var i=0; i<3; i++) {
			if(scroll >= ht*i && scroll < ht*(i+1)) {
				$('#left-side li').removeClass( );
				$('#left-side li').eq(i).addClass('on');
			}
		}
	});
    
    // 오른쪽 앵커
    // 1. 공유하기 모달뷰
    $('#right-side li').eq(0).click(function() {
        $('#modal').fadeIn();
    });
    $(document).mouseup(function(e) {
        var container = $('#modal');
        if( container.has(e.target).length === 0) {
          container.fadeOut();
        }
    });
    // 2. 맨 위로
    $('#right-side').on('click', 'li:nth-child(2)', function(e) {
        e.preventDefalt();
        $('html, body').stop().animate({
            scrollTop: 0
        }, 4500);
    });
        
    // #second: 아코디언 메뉴
   // 1. 마우스 오버 시
    if(matchMedia("screen and (min-width:280px) and (max-width:659px)").matches) {
        $('#second article').on("mouseover", function(){
            $(this).find('h2').stop().animate({ "opacity" : "0" }, 10);
            $(this).stop().animate({ "width" : "45%" }, 300, function() {
                $(this).find('p').stop().animate({ "right" : "10px" }, 400);
            });
            $(this).find('img').stop().animate({ "opacity" : "0.75" }, 600);
        });
    } else if(matchMedia("screen and (min-width:660px) and (max-width:1023px)").matches) {
        $('#second article').on("mouseover", function(){
            $(this).find('h2').stop().animate({ "opacity" : "0" }, 10);
            $(this).stop().animate({ "width" : "35%" }, 300, function() {
                $(this).find('p').stop().animate({ "right" : "10px" }, 400);
            });
            $(this).find('img').stop().animate({ "opacity" : "0.75" }, 600);
        });
    } else {
        $('#second article').on("mouseover", function(){
            $(this).find('h2').stop().animate({ "opacity" : "0" }, 10);
            $(this).stop().animate({ "width" : "32%" }, 300, function() {
                $(this).find('p').stop().animate({ "right" : "20px" }, 400);
            });
            $(this).find('img').stop().animate({ "opacity" : "0.75" }, 600);
        }); 
    }
   // 2. 마우스 아웃 시
    if(matchMedia("screen and (min-width:280px) and (max-width:659px)").matches) {
        $('#second article').on("mouseout", function(){
            $(this).find('h2').stop().animate({ "opacity" : "1" }, 10);
            $(this).stop().animate({ "width" : "30%" }, 200);
            $(this).find('p').stop().animate({ "right" : "-510px" }, 400);
            $(this).find('img').stop().animate({ "opacity" : "0" }, 600);
        });
    } else if(matchMedia("screen and (min-width:660px) and (max-width:1023px)").matches) {
        $('#second article').on("mouseout", function(){
            $(this).find('h2').stop().animate({ "opacity" : "1" }, 10);
            $(this).stop().animate({ "width" : "20%" }, 200);
            $(this).find('p').stop().animate({ "right" : "-510px" }, 400);
            $(this).find('img').stop().animate({ "opacity" : "0" }, 600);
        });
    } else {
        $('#second article').on("mouseout", function(){
            $(this).find('h2').stop().animate({ "opacity" : "1" }, 10);
            $(this).stop().animate({ "width" : "15%" }, 200);
            $(this).find('p').stop().animate({ "right" : "-510px" }, 400);
            $(this).find('img').stop().animate({ "opacity" : "0" }, 600);
        });
    }
    
    // #third: 페이드인
    AOS.init({ easing:'ease', duration:1800 });
});


