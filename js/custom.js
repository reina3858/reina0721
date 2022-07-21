
$(function(){


var controller = new ScrollMagic.Controller({
globalSceneOptions: {
  triggerHook: 'onLeave',
  duration: "200%"
}
})

var controller01 = new ScrollMagic.Controller({
globalSceneOptions: {
  triggerHook: 'onLeave',
  duration: "10%"
}
});

    /*메인 타이틀 텍스트 효과*/
    $(document).ready(function() {
      $(".ani").lettering();
    });

    $(document).ready(function() {
      animation();
      }, 1000);
      function animation() {
      var title1 = new TimelineMax();
      title1.staggerFromTo(".ani span", 0.5, 
      {ease: Back.easeOut.config(1.3), opacity: 0, bottom: -100},
      {ease: Back.easeOut.config(1.3), opacity: 1, bottom: 0}, 0.05);
    }
    

  /*헤더*/
  window.onscroll = function() {
      scrollFunction()
  };
  function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 50) {
          $('.header').addClass('on');
      } else {
          $('.header').removeClass('on');
      }
  }

  $('.header .navbar_item a').click(function(){
      el = $(this).data('target');
      elOff = $(el).offset().top;
      $('html,body').animate({scrollTop:elOff},500)
  })

    
/*main_section.sec*/
/*메인 텍스트 스크롤시 사라지는 효과*/
  var main_txt = TweenMax.fromTo(".main01_inner .ch_txt", 0.6, {
    y: '-25%',
    opacity:1,
    webkitFilter:"blur(0px)",
  }, {
    y: '0%',
    opacity:0,
    webkitFilter:"blur(10px)",
  })
  var scene = new ScrollMagic.Scene({
  triggerElement: ".container",
  duration: '100%',
  offset: 200,
  })
  .setTween(main_txt)
  .addTo(controller)


visualCont=document.querySelector("#visual"),
visualPinScene=new ScrollMagic.Scene({triggerHook:0}).setPin(visualCont).on("end",function(e){visualCont.classList.add("fixed")})
.addTo(controller01)


var txt01 = TweenMax.fromTo(".bg_txt01", 0.6, {
  x: '20%'     
}, {
    x:'-100%'
})
    
var scene = new ScrollMagic.Scene({
    triggerElement: ".ab_me",
    duration: '100%'
  })
  .setTween(txt01)
  .addTo(controller)

      /*메인 슬라이드1 스크롤*/
      $(window).scroll(function(){		

        curr = $(this).scrollTop();
        target = $('.main_section.thr .main03_wrap').offset().top - 50;
        winHeight = $(window).height();

        bgUp('#pj1', winHeight/2);
        bgUp('#pj2', winHeight/3);
        bgUp('#pj3', winHeight/4);       
        bgUp('#pj4', winHeight/2);
        bgUp('#pj5', winHeight/3);   
        bgUp('#pj6', winHeight/4);

      })	

      function bgUp(el,offset){
          target_element = $(el).offset().top - offset;

          if(curr >= target_element){
            $(el).addClass('bg_up');
          }
        }
  
        

      /*메인 하단 소개 움직이는 텍스트*/
          var txt_ani01 = TweenMax.to('.bg_txt', 0.5, {x: '-50%'});
          var scene = new ScrollMagic.Scene({ 
          triggerElement: ".my_strong",
          duration: "600%",
          offset:-400
          })
          .setTween(txt_ani01)
          .addTo(controller)

      /*프로젝트 페이지 움직이는 텍스트1*/
          var txt_ani02 = TweenMax.to('.pj_bg_txt01', 0.3, {x: '-50%'});
          var scene = new ScrollMagic.Scene({ 
          triggerElement: ".my-pjs",
          duration: "600%",
          
          offset:-600
          })
          .setTween(txt_ani02)
          .addTo(controller)

      /*프로젝트 페이지 움직이는 텍스트2*/
          var txt_ani03 = TweenMax.to('.pj_bg_txt02', 0.3, {x: '50%'});
          var scene = new ScrollMagic.Scene({ 
          triggerElement: ".my-pjs ul li:nth-child(3)",
          duration: "600%",
          offset:-600
          })
          .setTween(txt_ani03)
          .addTo(controller)

          
      /*모바일 햄버거 메뉴*/
      $('.navbar_toggle').click(function(){
          $('.aside').addClass('on');
          $('.dimmed').addClass('on');
      });
      $('.dimmed, .btn_close').click(function(){
          $('.aside').removeClass('on');
          $('.dimmed').removeClass('on');
      });
          

      AOS.init();


      /*마우스 효과*/
      var circle = $('.circle');

      function moveMove(e) {
        TweenLite.to(circle, 0.3, {
          css: {
            left: e.pageX,
            top: e.pageY
          }
        });
      }
      

      $(window).on('mousemove', moveMove);

      function sizeAll() {
        var	w = window.innerWidth;
        
        if ( w < 1024) {
          moveMove.enabled(false);
      
        } else {
          moveMove.enabled(true);
        }
      
      }
      
      $(window).resize(sizeAll);
      

  

 

  
});