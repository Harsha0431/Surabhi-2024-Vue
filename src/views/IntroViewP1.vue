<script setup>
import { ref } from 'vue';
import SurabhiPromo from '../assets/SurabhiPromo.mp4';

const bgVideo = ref(null);

const isMuted = ref(true);

const firstClick = ref(true);

const toggleAudio = () =>{
  if(bgVideo.value){
    bgVideo.value.muted = !bgVideo.value.muted
    isMuted.value = bgVideo.value.muted
  }
}

const startVideo = () => {
  if (bgVideo.value) {
    if(firstClick.value){
      bgVideo.value.muted = !bgVideo.value.muted
      isMuted.value = bgVideo.value.muted
      firstClick.value = false
    }
    bgVideo.value.play().catch(error => {
      console.error('Autoplay failed:', error);
    });
  }
};

</script>

<template>
  <main class="app-container max-ssm:h-auto h-[100vh] opacity-90" @click="startVideo">
    <div class="h-full w-full">
      <div class="absolute flex justify-end left-2 top-2 z-[5]">
        <svg @click="toggleAudio" v-if="isMuted"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"  class="sound-muted cursor-pointer w-6 h-6 stroke-gray-400 hover:stroke-gray-300">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        </svg>

        <svg v-else @click="toggleAudio" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"  class="w-6 h-6 sound-active cursor-pointer stroke-gray-400 hover:stroke-gray-300">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        </svg>

      </div>
      <video ref="bgVideo" loop autoplay muted class="relative top-0 w-full h-full object-cover max-ssm:object-fill">
        <source :src="SurabhiPromo" type="video/mp4">
      </video>
    </div>
    
  </main>
</template>

<style scoped>

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0;
  background-color: #000;
}

video {
  height: 100%;
}

</style>
