import { defineStore } from "pinia";
import { ref } from 'vue'

export const useEventStore = defineStore('eventStore',() => {
    const viewEventCards = ref(false)

    return {
        viewEventCards
    }
})