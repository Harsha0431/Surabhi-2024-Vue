<script setup>
import SurabhiLogo from '../assets/surabhi_logo.png'
import SurabhiTextLogo from '../assets/SurabhiTextLogo.png'

</script>

<template>
    <div class="min-h-[100vh] w-[100vw] overflow-x-hidden flex justify-center py-6 2xl:px-8 max-md:py-8 max-ssm:py-4">
        <div class="flex justify-between align-middle relative place-items-center px-4 ssm:px-8 max-md:flex-col max-md:gap-8">
            <div class="flex flex-col justify-center md:max-w-[50%] xxl:max-w-[40%] max-md:order-2 font-stylish text-[21px] max-ssm:text-[18px] max-vsm:text-[17px] gap-4">
                <span class="font-semibold text-gray-200 text-stat font-merriweather max-lg:text-[40px] max-ssm:text-[35px] max-vsm:text-[30px] text-[45px]">The Theme of <span>''</span><span class="font-alegreya font-bold px-1">Surabhi</span></span>
                <span class="text-gray-300">
                    The Surabhi International Cultural Fest, scheduled for February 23rd and 24th, 2024, revolves around the theme "Sanskritikvilasa." This vibrant event promises a celebration of diverse cultural elements, showcasing art, music, dance, and traditions, fostering a rich tapestry of heritage. Don't miss this cultural extravaganza uniting
                    creativity and tradition.
                </span>
            </div>
            <div class="flex flex-col justify-end max-md:order-1 md:max-w-[50%] xxl:pr-8 gap-2">
                <img :src="SurabhiLogo" alt="Surabhi Logo"
                    class="xl:max-w-[350px] xl:max-h-[380px] lg:max-w-[300px] lg:max-h-[350px] md:max-w-[270px] md:max-h-[320px]
                            max-md:w-[350px] max-vsm:w-[320px]"
                >
                <img :src="SurabhiTextLogo" alt="Surabhi Text Logo"
                    class="xl:max-w-[400px] lg:max-w-[330px] md:max-w-[300px] max-md:w-[380px] max-vsm:w-[320px]">
            </div>
        </div>
    </div>
</template>