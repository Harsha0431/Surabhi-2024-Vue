import { defineStore } from "pinia";
import {ref} from 'vue'
//success , error , alert
export const ToastStore = defineStore('Toast Store' ,()=>{
    const showToast = ref(false)
    const message = ref('')
    const type = ref('')
    return{
        showToast,
        message,
        type
    }
})