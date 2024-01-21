<script setup>
    import TeamPhoto from '../assets/TeamPhoto.jpg'
</script>

<template>
    <div class="flex justify-between px-12 py-4 relative ssm:mb-5 max-md:px-8 max-md:flex-col max-md:justify-center">
        <div class="flex flex-col gap-2 max-md:order-2 justify-center text-gray-200">
            <span class="md:text-[40px] max-sm:text-[35px] max-ssm:text-[30px] text-[26px] font-bold font-merriweather">
                Team Surabhi
            </span>
            <span>
                Text
            </span>
        </div>
        <div class="max-md:order-1 rounded-2xl overflow-hidden flex justify-center">
            <img :src="TeamPhoto" alt="Team Shurabi" class="hover:scale-105 duration-300 cursor-pointer transition-all xl:w-[500px] lg:w-[450px] md:w-[400px]  rounded-2xl max-md:max-w-[450px]" />
        </div>
    </div>
</template>