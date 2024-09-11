$(document).ready(function(e){
    $('.top_header .slide').slick({
      autoplay:true,
    });
    $('.main_slide').slick({
      autoplay:true,
      arrows:false,
      dots:true
    });
    $('m_gnb>li>.m_depth2').hide()
    $('.title>.gnb>li>.depth2').hide()
    $('.title .gnb li').on('mouseenter',function(){
      $(this).find('.depth2').fadeIn(500)
      $(this).siblings().finish()
    })
    $('.title .gnb li').on('mouseleave',function(){
      $(this).find('.depth2').fadeOut(500)
      $(this).siblings().finish()
    })
    // 메뉴 버튼 클릭시 옆에서 나옴
    $('.m_menuBtn').on('click',function(){
      $('.m_menu_wrap').animate({'left':0})
      $('.cover').fadeIn()
      $('body,html').css({'overflow':'hidden'})
    })
    $('.cover').on('click',function(){
      $('.m_menu_wrap').animate({'left':'-100%'})
      $('.cover').fadeOut()
      $('body,html').css({'overflow':'auto'})
    })
      //  모바일 메뉴(아코디언 메뉴)
    $('.m_gnb>li>a').on('click',function(){
      $(this).next().slideToggle().parent().siblings().find('.m_depth2').slideUp()
    })
  });
              