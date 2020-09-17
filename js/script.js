$(document).ready(function () {
    $(".menu>li").hover(function () {
        $(".menu ul,.gnb_bg").stop().slideDown('fast');
    }, function () {
        $(".menu ul,.gnb_bg").stop().slideUp('fast');
    });
    $(".language").click(function () {
        $(".language ul").stop().toggle();
    });
    $(".departure_wrap>a").click(function () {
        $(this).next(".departure").stop().fadeToggle();
    });
    $(".destination_wrap>a").click(function () {
        $(this).next(".destination").stop().fadeToggle();
    });
    $(".wish_btn_wrap .btn2").click(function () {
        $(".wish_list_more").fadeToggle('fast');
    });
    /*탑버튼*/
    $(".top_btn").click(function () {
        return $("html, body").animate({
            scrollTop: 0
        }, 300), !1
    });

    let slideIdx=1;
    let len = $("ul.main_img").find("li").length;
    let imgwidth=$("ul.main_img").find("li").width();
    let main_width = imgwidth * len;
    console.log($(".main_img").width());
    $(".main_img").css({width:main_width});
    console.log($(".main_img").width());
    
    $(".slider_btn .next").click(function(){
        if(slideIdx===len){
            slideIdx=1;
            $(".main_img").css({transform:"translateX(0px)"});
        }else{
            slideIdx++;
            $(".main_img").css({transform:"translateX(-"+imgwidth*(slideIdx-1)+"px)"});
        }                       
    });
    $(".slider_btn .prev").click(function(){
        if(slideIdx===1){
            slideIdx=len;
            $(".main_img").css({transform:"translateX(-"+imgwidth*(len-1)+"px)"});
        }else{
            slideIdx--;
            $(".main_img").css({transform:"translateX(-"+imgwidth*(slideIdx-1)+"px)"});
        }                      
    });
});
