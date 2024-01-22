<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router";
import { useEventStore } from "@/stores/FestStore";

import { Splide, SplideSlide } from '@splidejs/vue-splide';

const options = {
  rewind: true,
  autoplay: false,
  perPage: 3,
  perMove: 1,
  gap:'1.4rem',
  padding:'1.3rem',
  type: 'slide',
  rewindSpeed: false,
  arrows: true,
  pagination: false,
  breakpoints: {
    768: { perPage: 1 , gap:'0rem', padding:'0rem' },
    1150: { perPage: 2 , gap:'0rem', padding:'0rem'},
    1350: { perPage: 3 },
    1700: { perPage: 4 },
    2000: { perPage: 5 },
  },
};

const eventStore = useEventStore()
const showFests = ref(eventStore.viewEventCards || false)
const router = useRouter()

const festsList = [
    {
        name: 'Cine Carnival',
        image: 'https://i.postimg.cc/QXfGS7Jt/reel-making-vertical-2.png',
        link: 'https://klcinecarnival24.netlify.app'
    },
    {
        name: 'Raaga',
        image: 'https://i.postimg.cc/QXfGS7Jt/reel-making-vertical-2.png'
    },
    {
        name: 'Vastra Shala',
        image: 'https://i.postimg.cc/QXfGS7Jt/reel-making-vertical-2.png'
    },
    {
        name: 'Sahitya',
        image: 'https://i.postimg.cc/QXfGS7Jt/reel-making-vertical-2.png'
    },
    {
        name: 'Nritya',
        image: ''
    },
    {
        name: 'Chitra Kala',
        image: ''
    },
    {
        name: 'Other',
        image: ''
    },
]

const handleViewFestClick = () =>{
    eventStore.viewEventCards = true
    showFests.value = eventStore.viewEventCards || true
    document.querySelector('.fest-container').scrollIntoView({ behavior: 'smooth' });
}

const handlePosterClick = (link) =>{
    if (!link || link=='')
    {
        router.push({name:'page-not-found'})
        return
    }
    window.open(link , '_blank')
}

</script>

<template>
    <div class="py-8 px-1 text-white">
        <div class="flex justify-between px-8 max-ssm:flex-col max-ssm:gap-1">
            <button @click="router.push('/event/list')" class="text-center font-extrabold font-montserrat text-[45px] max-sm:text-[45px] max-ssm:text-[40px] max-vsm:text-[30px] max-vvsm:text-[30px]">Surabhi Fests</button>
            <button @click="router.push('/event/list')" class="ssm:flex text-right place-items-end mb-2 relative">View All</button>
        </div>
        <div class="flex justify-center items-center py-8">
            <Splide :options="options" class="flex justify-center">
                <SplideSlide v-for="(event,index) in festsList" :key="index"
                    class="flex rounded-2xl overflow-hidden justify-center
                        lg:w-[360px] lg:h-[460px] max-lg:w-[330px] max-lg:h-[400px] max-md:w-[280px] max-md:h-[360px]
                        ssm:w-[330px] ssm:h-[430px] vsm:w-[330px] vsm:h-[380px] max-vsm:w-[260px] max-vsm:h-[330px]
                        max-vvsm:w-[200px] max-vvsm:h-[280px] bg-[#000]">
                    <img @click="handlePosterClick(event.link || '')"
                        :src="event.image" :alt="event.name"
                        class="flex justify-center active:cursor-grabbing cursor-grab"
                    >
                </SplideSlide>
            </Splide>
        </div>
        <!-- <div class="fest-container ">
            <Transition name="bounce">
                <div v-if="showFests" class="fest-container flex flex-wrap justify-around gap-12 pt-8">
                    <div class="max-w-[350px] max-lg:w-[320px] max-md:w-[300px] max-sm:w-[350px] max-vvsm:w-[280px]" v-for="fest in festsList" :key="fest.name">
                        <img @click="handlePosterClick(fest.link)" :alt="fest.name" :src="fest.image" class="hover:cursor-pointer object-contain"/>
                    </div>
                </div>
            </Transition>
        </div> -->
    </div>
</template>

<style scoped>

.overlay-heading2 {
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
}


.splide{
  padding:20px;

  @media screen and (max-width: 758px) {
    padding: 0px;
  }
}
.carousel-container-c {
  animation: carousel-scroll 17s linear infinite;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>