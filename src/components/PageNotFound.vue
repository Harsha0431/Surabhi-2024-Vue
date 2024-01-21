<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const timer = ref(10)

onMounted(()=>{
    const interval = setInterval(()=>{
        timer.value--
        if(timer.value === 0){
            clearInterval(interval)
            router.back()
        }
    },1000)
})

</script>

<template>
<main class="grid min-h-[100vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
        <p class="text-base font-semibold text-indigo-600 font-merriweather max-ssm:text-[40px] sm:text-[60px] ssm:text-[50px] ">404</p>
        <h1 class="mt-4 text-2xl font-bold tracking-tight text-gray-900 ssm:text-4xl">Page not found</h1>
        <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div class="mt-10 flex flex-col items-center justify-center gap-y-4">
            <div class="w-full flex ssm:px-4 gap-4 flex-wrap justify-evenly">
                <button @click="router.push('/')" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</button>
                <button @click="router.back()" class="font-semibold text-gray-700 hover:text-gray-900 tracking-wide">Back</button>
            </div>

            <span class="text-sm font-semibold text-gray-900 text-[16px]">Redirected to previous page in {{ timer }} seconds</span>
        </div>
    </div>
</main>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>