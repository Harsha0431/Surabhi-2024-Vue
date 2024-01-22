import { defineStore } from "pinia";
import {ref} from 'vue'
import VueCookies from 'vue-cookies'
import { verifyTokenService } from '@/service/Login/loginService'


export const useUserStore = defineStore('user-store' , ()=> {
    const isLoggedIn = ref(false)
    const token = ref(VueCookies.get('user-token'))
    const username = ref('')
    const mail = ref('')
    const name = ref('')

    function resetAttributes() {
        username.value = ''
        mail.value = ''
        name.value = ''
    }

    const checkForTokenAuthentication = async () => {
        if (VueCookies.get('user-token')) {
            await verifyTokenService(VueCookies.get('user-token'))
                .then((res) => {
                    if (res.code == 1)
                    {
                        const data = res.data
                        username.value = data.id
                        isLoggedIn.value = true
                        mail.value = data.mail
                        name.value = data.name
                    }
                })
        }
    }

    const handleLogout = () => {
        isLoggedIn.value = false
        token.value = ''
        VueCookies.remove('user-token')
    }
    return {
        isLoggedIn,
        token,
        username,
        name,
        mail,
        handleLogout,
        checkForTokenAuthentication,
        resetAttributes
    }
})