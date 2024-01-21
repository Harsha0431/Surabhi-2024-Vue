<script setup>
import surabhi_rotation_92 from '../assets/surabhi_rotation_92.mp4'
</script>

<template>
    <div class="h-[100vh] w-[100vw]">
        <video loop autoplay muted class="relative top-0 w-full h-full object-contain max-ssm:object-fill">
            <source :src="surabhi_rotation_92" type="video/mp4">
        </video>
    </div>
</template>