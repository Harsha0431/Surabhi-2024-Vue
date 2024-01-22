<script setup>
    import TeamPhoto from '../assets/TeamPhoto.jpg'
    import { useRouter } from 'vue-router';
    const router = useRouter()
</script>

<template>
    <div class="app-container flex justify-center relative mb-16 mt-20 max-ssm:mt-14 max-ssm:mb-10 max-xl:gap-8 gap-24 max-xl:flex-col flex-wrap place-items-center">
        <div class="overlay-box2 max-xl:order-2 font-merriweather xl:w-[38%] max-xl:w-[70%] max-xl:px-4 max-md:w-[80%] max-sm:w-[90%] max-vsm:w-[95%] w-[75%] mb-3">
            <h2 class="overlay-heading2 flex flex-col text-left text-[40px] pb-8 max-sm:pb-4 max-lg:pb-4 max-sm:text-[45px] max-ssm:text-[40px] max-vsm:text-[30px] max-vvsm:text-[30px]">
                <RouterLink to="/team" class="font-extrabold font-montserrat text-[#f3f4f6] w-max">Team Surabhi</RouterLink>
                <RouterLink to="/team" class="text-[13px] tracking-wide ml-6 -mt-2 text-gray-300 relative font-thin font-merriweather w-max">Click here to view team</RouterLink>
            </h2>
            <p class="mb-3 font-montserrat text-[#f3f4f6] flex justify-center max-xl:px-2
                xxl:text[35px] text-[20px] max-sm:text-[20px] max-ssm:text-[18px] max-vsm:text-[16px]">
                Get ready for an extraordinary journey at Surabhi 2024! This is not just an event; it's an immersive experience crafted by an exceptional team. Join us as we introduce you to the heart and soul behind Surabhi—the talented individuals who have poured their creativity into every detail. Explore, discover, and share the excitement with your peers. Let's make Surabhi 2024 an unforgettable celebration together!
            </p>
        </div>
        <div class="xl:w-[40%] xxl:w-[35%] max-xl:order-1 max-xl:w-[60%] max-md:w-[80%] max-sm:w-[85%] max-vvsm:w-[95%] w-[70%] saturate-0 bg-blend-color-burn overflow-hidden">
            <img @click="router.push({name:'team'})" class="w-full h-full cursor-pointer hover:scale-105 transition-all duration-500" :src="TeamPhoto" alt="Team Surabhi"/>
        </div>
    </div>
</template>