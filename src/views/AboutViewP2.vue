<script setup>
import SurabhiLogo from '../assets/surabhi_logo.png'
import SurabhiTextLogo from '../assets/SurabhiTextLogo.png'
import surabhi_rotation_92 from '../assets/surabhi_rotation_92.mp4'


</script>

<template>
    <div class="app-container flex max-ssm:pt-14 max-lg:flex-col justify-center py-8 pb-12 relative mt-24 max-lg:gap-8 max-xl:gap-12 gap-20 place-items-center">
        <div class="overlay-box2 xxl:w-[38%] order-2 xl:w-[43%] max-lg:w-[80%] max-md:px-4 max-sm:w-[90%] max-vsm:w-[95%] w-[45%] mb-3">
            <h2 class="overlay-heading2 font-extrabold font-montserrat text-left text-[50px] pb-8 max-sm:pb-4 max-lg:pb-4 max-sm:text-[55px] max-ssm:text-[45px] max-vsm:text-[35px] max-vvsm:text-[30px]">
                Theme
            </h2>
            <p class="mb-3 font-montserrat flex justify-center text-[18px] max-sm:text-[18px] max-ssm:text-[16px] max-vsm:text-[16px]">
                The Surabhi International Cultural Fest, scheduled for February 23rd and 24th, 2024, revolves around the theme "Sanskritikvilasa." This vibrant event promises a celebration of diverse cultural elements, showcasing art, music, dance, and traditions, fostering a rich tapestry of heritage. Don't miss this cultural extravaganza uniting
                creativity and tradition.
            </p>
        </div>
        <div class="flex flex-col justify-end max-lg:order-1 gap-3">
            <!-- <video loop autoplay muted class="relative top-0 w-full h-full object-contain max-ssm:object-fill max-lg:max-w-[550px] max-w-[650px]">
                <source :src="'https://firebasestorage.googleapis.com/v0/b/sharewithme-88880.appspot.com/o/surabhi_rotation_92.mp4?alt=media&token=28281f8f-6bad-401d-8a9c-cf4bd4fa3f8f'" type="video/mp4">
            </video> -->
            <img :src="SurabhiLogo" alt="Surabhi Logo"
                class="xl:max-w-[380px] xl:max-h-[350px] lg:max-w-[300px] lg:max-h-[320px]
                    max-lg:w-[350px] max-md:w-[320px] max-vsm:w-[290px]"
            >
            <img :src="SurabhiTextLogo" alt="Surabhi Text Logo"
                class="xl:max-w-[350px] lg:max-w-[290px] max-lg:w-[330px] max-md:w-[300px] max-vsm:w-[290px]">
        </div>
    </div>
    <!-- Cultural -->
    <div class="app-container vsm:px-4 flex max-xl:flex-col justify-center pb-16 relative mt-24 max-lg:gap-8 max-xl:gap-12 gap-20 place-items-center">
        <div class="flex flex-col justify-end max-xl:order-1 gap-3">
            <video loop autoplay muted class="relative top-0 w-full h-full object-contain max-ssm:object-fill max-lg:max-w-[550px] max-w-[650px]">
                <source :src="surabhi_rotation_92" type="video/mp4">
            </video>
        </div>
        <div class="overlay-box2 max-xl:order-2 xxl:w-[38%] xl:w-[43%] max-xl:w-[80%] max-md:px-4 max-sm:w-[90%] max-ssm:w-[100%] w-[45%] mb-3">
            <h2 class="overlay-heading2 font-extrabold font-montserrat text-left text-[50px] pb-8 max-sm:pb-4 max-lg:pb-4 max-lg:text-[45px] max-sm:text-[42px] max-ssm:text-[38px] max-vsm:text-[30px] max-vvsm:text-[28px]">
                The Theme of Sanskritikvilasa
            </h2>
            <p class="mb-3 font-montserrat tracking-wide flex justify-center text-[18px] max-sm:text-[18px] max-ssm:text-[16px] max-vsm:text-[16px]">
                "Sanskritikvilasa: Celebrating Our Cultural Legacy." "Sanskritikvilasa" embodies the fusion of "Nations Pride," "My Nation, My Responsibility," and "My Pride." It signifies the joyful celebration of cultural heritage, where each individual's commitment to their nation's well-being becomes a source of immense pride. It's a vibrant tapestry of cultural responsibility, woven with threads of national glory.
            </p>
        </div>
    </div>
</template>

<style scoped>
.app-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
  background-color: rgb(0, 0, 0);
}
.overlay-box2{
  background-color: transparent;
  border-radius: 10px;
  text-align: left;
  color: #fff;
}

.overlay-box2 p {
  letter-spacing: 1px;
}

.overlay-heading2 {
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
}
</style>
