<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router";
import { useEventStore } from "@/stores/FestStore";

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
        image: ''
    },
    {
        name: 'Vastra Shala',
        image: ''
    },
    {
        name: 'Sahitya',
        image: ''
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
    if (!link)
    {
        router.push({name:'page-not-found'})
        return
    }
    window.open(link , '_blank')
}

</script>

<template>
    <div class="pb-16 sm:px-8 sm:py-10 py-8 px-4 text-white">
        <div class="flex flex-col gap-8 justify-between">
            <div class="flex flex-col gap-4 max-w-[70%]">
                <span class="font-bold text-[40px]">
                    About Surabhi Fests
                </span>
                <span>
                    The Surabhi International Cultural Fest, scheduled for February 23rd and 24th, 2024, revolves around the theme "Sanskritikvilasa." This vibrant event promises a celebration of diverse cultural elements, showcasing art, music, dance, and traditions, fostering a rich tapestry of heritage. Don't miss this cultural extravaganza uniting creativity and tradition.
                </span>
            </div>
            <div class="text-gray-300 font-merriweather hover:text-gray-200 hover:rounded-2xl hover:duration-400 transition-all md:text-[35px] ssm:text-[30px] border-2 w-fit px-4 py-1 border-gray-400 hover:border-gray-300">
                <button @click="handleViewFestClick">View Fests</button>
            </div>
        </div>
        <div class="fest-container ">
            <Transition name="bounce">
                <div v-if="showFests" class="fest-container flex flex-wrap justify-around gap-12 pt-8">
                    <div class="max-w-[350px] max-lg:w-[320px] max-md:w-[300px] max-sm:w-[350px] max-vvsm:w-[280px]" v-for="fest in festsList" :key="fest.name">
                        <img @click="handlePosterClick(fest.link)" :alt="fest.name" :src="fest.image" class="hover:cursor-pointer object-contain"/>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
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