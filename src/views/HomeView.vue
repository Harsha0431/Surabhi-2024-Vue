<script setup>
import NavbarView from '@/components/NavbarView.vue';
import IntroViewP1 from './IntroViewP1.vue';
import AboutViewP2 from './AboutViewP2.vue';
import GalleryView from './GalleryView.vue';
import FestsCardsView from './FestsCardsView.vue';
import CultureView from './CultureView.vue';
import TeamViewP5 from './TeamViewP5.vue';
import { ref } from 'vue';

const visible = ref(true)

const prevScrollPos = ref(0)

const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrollingDown = currentScrollPos > prevScrollPos.value;
    visible.value =!isScrollingDown;
    prevScrollPos.value = currentScrollPos;
};

window.addEventListener('scroll', handleScroll);

</script>

<template>
  <main class="w-full h-full flex flex-col">
    <header>
      <IntroViewP1 />
    </header>
    <nav :class="[visible?'sticky top-0':'', 'transition-all ']" class="z-[1000]">
      <navbar-view />
    </nav>
    <div class="">
      <AboutViewP2 />
    </div>
    <div>
      <CultureView />
    </div>
    <div>
      <FestsCardsView />
    </div>
    <div>
      <TeamViewP5 />
    </div>
    <div>
      <GalleryView />
    </div>

  </main>
</template>
