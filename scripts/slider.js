
        var swiper = new Swiper(".bg-slider-thumbs", {
          loop: true,
          spaceBetween: 0,
          slidesPerView: 0,
        });
        var swiper2 = new Swiper(".bg-slider", {
          loop: true,
          spaceBetween: 0,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          thumbs: {
            swiper: swiper,
          },
        });


        