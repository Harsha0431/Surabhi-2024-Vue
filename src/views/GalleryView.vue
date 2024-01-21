<script setup>
const data = [
  'https://i.postimg.cc/yY7tC5qq/fek-14.jpg',
  'https://i.postimg.cc/xdqHpZg3/fek-5.jpg',
  'https://i.postimg.cc/Bvg9F0fC/fek-9.jpg',
  'https://i.postimg.cc/859yJKcH/fek-7.jpg',
  'https://i.postimg.cc/zXdtZGSW/fek3.jpg',
  'https://i.postimg.cc/7ZWW7Z5D/fek4.jpg',
]

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const options = {
  rewind: true,
  autoplay: 3000,
  perPage: 3,
  perMove: 1,
  gap: '1rem',
  type: 'loop',
  rewindSpeed: 3000,
  autoplayDelay: 30000,
  arrows: false,
  pagination: false,
  extensions: { AutoScroll },
  autoScroll: {
    speed: 100,
    pauseOnHover: true,
    pauseOnFocus: false,
  },
  interval: 1000,
    breakpoints: {
    750: { perPage: 1 },
    1056: { perPage: 2 },
    1350: { perPage: 3 },
    1700: { perPage: 4 },
    1800: { perPage: 4 },
    2000: { perPage: 5 },
    2500: { perPage: 5 },
    3500: { perPage: 6 },
    4500: { perPage: 7 },
    5500: { perPage: 8 },
    6500: { perPage: 9 },
    7500: { perPage: 10 },

  },
};


</script>

<template>
  <div class="flex flex-col mt-8 gap-5 max-sm:gap-4 sm:pb-10 pb-6 max-vsm:py-4 overflow-hidden">
    <div class="flex justify-between px-8">
      <span class="text-center text-gray-100 font-extrabold font-merriweather text-[45px] max-sm:text-[42px] max-ssm:text-[40px] max-vsm:text-[30px] ">Recap Surabhi 2023</span>
    </div>
    <div class="flex justify-center items-center max-lg:px-8 overflow-hidden">
      <Splide :options="options" class="flex justify-center">
        <SplideSlide v-for="(image ,index) in data" :key="index"
          class="flex px-4 overflow-hidden rounded-3xl object-fill justify-center max-vsm:w-full w-[465px] h-[260px] bg-transparent">
          <img :src="image" :alt="'Gallery image - ' + (index+1)"
            class="flex justify-center rounded-3xl overflow-hidden active:cursor-grabbing cursor-grab object-cover max-vsm:object-contain max-vsm:max-w-[90vw]"
          >
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<style scoped>
.carousel-container-c {
  animation: carousel-scroll 18s linear infinite;
}

.splide{
  padding: 0rem;
}

@keyframes carousel-scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-465px * 8))}
}

</style>