var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor:true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 600,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next ",
      prevEl: ".swiper-button-prev",
    },
  });


  new VenoBox({
    selector: '.my-video-links',
  });




var swiper = new Swiper(".mySwiper pic_slide_img", {
    slidesPerView: 'auto',
    spaceBetween: 50,
    centeredSlides: true,
    grabCursor:true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 600,
    pagination: {
      el: ".swiper-pagination ",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next ",
      prevEl: ".swiper-button-prev",
    },
  });


  new VenoBox({
    selector: '.my-video-links',
  });

  $("#slide_up_down").click(function(){
    $(".box").slideToggle(1000);
})