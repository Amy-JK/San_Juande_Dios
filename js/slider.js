const swiper = new Swiper('.swiper-news', {
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 4000
    },
  
    pagination: {
      el: '.swiper-pagination'
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
  const swiperGallery = new Swiper(".swiper-gallery", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  const swiperGallery2 = new Swiper(".swiper-gallery2", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });