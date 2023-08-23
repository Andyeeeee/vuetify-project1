<template>
  <swiper
    :spaceBetween="20"
    :centeredSlides="true"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="@/image/main/p1.jpg" width="100%" alt=""> </swiper-slide>
    <swiper-slide><img src="@/image/main/p2.jpg" width="100%" alt=""></swiper-slide><swiper-slide><img src="@/image/main/p3.png" width="100%" alt=""></swiper-slide>
    <swiper-slide><img src="@/image/main/p4.jpg" width="100%" alt=""></swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue'

  // Import Swiper styles
  import 'swiper/css'

  import 'swiper/css/pagination'
  import 'swiper/css/navigation'

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules'

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      }
    },
  }
</script>
