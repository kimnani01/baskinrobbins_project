const event = new Swiper('.event', {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 40,
        speed: 3000,
        autoplay:{delay:3000},
        loop: true,
        pagination:{
            el:'.event .swiper-pagination', //부모 필수
            type:'bullets',
            clickable: true,
        }   
})