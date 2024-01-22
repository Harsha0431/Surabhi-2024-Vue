<script setup>
import {useLoginStore} from '@/stores/LoginStore'
import { computed } from 'vue'
import qr_code from '@/assets/qr_code.jpg'

const loginStore = useLoginStore()

const dialogWidth = computed(()=>{
    const width = window.innerWidth
    if(loginStore.isLoginDialog){
        return  width>576?'400px':'99%'
    }
    return width>576?'500px':'98%'
})

const handleFormSubmit = (values) =>{
    console.log(values)
}

const handleCloseDialog = () =>{
    loginStore.showLoginDialog=false
}

const handleSwitchToRegister = async() =>{
    await loginStore.fetchRequiredList()
    loginStore.isLoginDialog = false
}

const handleRegisterBtnClick = () =>{
    const data = {
        id:loginStore.registerUsername ,
        password: loginStore.registerConformPassword ,
        name: loginStore.name,
        college: loginStore.college,
        email: loginStore.email,
        phone: loginStore.phone,
        gender: loginStore.gender,
        state: loginStore.state,
        department: loginStore.department,
        register_plan: loginStore.selectedRegisterPlan
    }
    console.log(data)
}


const handleRegisterFormSubmit = () =>{
    if(loginStore.currentStep==3){
        handleRegisterBtnClick()
        return
    }
    if(loginStore.currentStep==0){
        if(loginStore.registerPassword != loginStore.registerConformPassword)
            alert("Conform password doesn't match with original password")
    }
    loginStore.currentStep+=1
}

</script>

<template>
    <div class="">
        <van-dialog className="max-w-screen-sm"  :width="dialogWidth" style="background-color: #1e1717b5;top:50%;" v-model:show="loginStore.showLoginDialog" :showConfirmButton="false" cancel-button-text="Close">
            <button @click="handleCloseDialog" class="absolute text-gray-300 top-1 right-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="flex flex-col px-4 py-4 gap-4 max-h-[80vh] overflow-auto dialog-body">
                <span class="flex justify-center text-gray-300 tracking-wider ssm:text-[20px] text-[18px] font-merriweather font-semibold">
                    {{ loginStore.isLoginDialog? 'Login':'Register' }}
                </span>
                <div class="">
                    <div class="flex flex-col gap-3 max-vsm:gap-2">
                        <div class="">
                            <form @submit.prevent="handleFormSubmit" v-if="loginStore.isLoginDialog">
                                <div class="ssm:px-2">
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input v-model="loginStore.loginUsername" type="text" name="floating_email" id="floating_email" class="tracking-wider block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required />
                                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input v-model="loginStore.loginPassword" type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required />
                                        <label for="floating_password" class="tracking-wider peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                    </div>
                                    <div class="flex justify-center">
                                        <button type="submit" class="bg-[#454343e0] hover:bg-[#454343ca] hover:scale-[0.97] hover:animate-pulse transition-all text-gray-300 tracking-wider ssm:font-[2px] font-extrabold px-3 py-2 rounded-xl font-merriweather">
                                            LOGIN
                                        </button>
                                    </div>
                                </div>
                            </form>
                            
                            <form @submit.prevent="handleRegisterFormSubmit" v-else class="flex flex-col gap-4">
                                <div>
                                    <van-steps style="background-color: transparent;" active-icon="arrow" active-color="#07c160" :active="loginStore.currentStep">
                                        <van-step style="background-color: transparent;">Login</van-step>
                                        <van-step style="background-color: transparent;">Personal</van-step>
                                        <van-step style="background-color: transparent;">Academic</van-step>
                                        <van-step style="background-color: transparent;">Payment</van-step>
                                    </van-steps>
                                </div>
                                <div>
                                    <div v-if="loginStore.currentStep==0" class="login-form flex gap-1 flex-col">
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input v-model="loginStore.registerUsername" type="text" name="floating_username" id="floating_username" class="tracking-wider block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required />
                                            <label for="floating_username" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username or College registration ID</label>
                                        </div>
                                        <div class="relative w-full z-0 mb-5 group">
                                            <input v-model="loginStore.registerPassword" min='5' pattern="^[^ ]+$" type="password" name="floating_password" id="floating_password" class="tracking-wider block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required />
                                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Password</label>
                                        </div>
                                        <div class="relative w-full z-0 mb-5 group">
                                            <input min="5" v-model="loginStore.registerConformPassword" pattern="^[^ ]+$" type="password" name="floating_c_pass" id="floating_c_pass" class="tracking-wider block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required />
                                            <label for="_c_pass" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                                        </div>
                                    </div>

                                    <div v-if="loginStore.currentStep==1" class="personal-details flex gap-1 flex-col">
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input v-model="loginStore.name" pattern="^[a-zA-Z. ]+$" type="text" name="floating_name" id="floating_name" class="tracking-wider block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required />
                                            <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                                        </div>
                                        
                                        <div class="relative z-0 w-full mb-5 group">
                                            <label for="underline_select" class="sr-only disabled">Select State</label>
                                            <select v-model="loginStore.state" id="underline_select" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2appearance-none text-gray-400 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-400 peer">
                                                <option value="" class="px-4 py-2 bg-gray-700 text-gray-300 tracking-wide" selected>Select State</option>
                                                <option class="px-4 py-2 bg-gray-700 text-gray-300 tracking-wide" :value="state.name" v-for="state in loginStore.stateList" :key="state.name">{{ state.name }}</option>
                                            </select>
                                        </div>
                                        <div class="relative z-0 w-full mb-5 group">
                                            <label for="underline_select_gender" class="sr-only disabled">Select Gender</label>
                                            <select v-model="loginStore.gender" id="underline_select_gender" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2appearance-none text-gray-400 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-400 peer">
                                                <option value="" class="px-4 py-2 bg-gray-700 text-gray-300 tracking-wide" selected>Gender</option>
                                                <option class="px-4 py-2 bg-gray-700 text-gray-300 tracking-wide" value="Male">Male</option>
                                                <option class="px-4 py-2 bg-gray-700 text-gray-300 tracking-wide" value="Female">Female</option>
                                                <option class="px-4 py-2 bg-gray-700 text-gray-300 tracking-wide" value="Prefer not to say">Prefer not to say</option>
                                            </select>
                                        </div>
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input v-model="loginStore.email" type="email" name="floating_mail" id="floating_mail" class="tracking-wider block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required />
                                            <label for="floating_mail" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Personal Mail</label>
                                        </div>
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input v-model="loginStore.phone" pattern="^[0-9]+$" min="0" type="number" name="floating_phone" id="floating_phone" class="tracking-wider block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required />
                                            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>
                                        </div>
                                    </div>

                                    <div v-if="loginStore.currentStep==2" class="academic-details flex gap-1 flex-col">
                                        <div class="relative z-0 w-full mb-5 group">
                                            <label for="underline_select_college" class="sr-only disabled">Select Institution</label>
                                            <select v-model="loginStore.college" id="underline_select_college" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2appearance-none text-gray-400 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-400 peer">
                                                <option value="" class="px-4 py-2 bg-gray-700 text-gray-300 tracking-wide" selected>Select Institution</option>
                                                <option class="px-4 py-2 bg-gray-700 text-gray-300 tracking-wide" :value="college.name" v-for="college in loginStore.collegeList" :key="college.name">{{ college.name }}</option>
                                            </select>
                                        </div>
                                        <div class="relative z-0 w-full mb-5 group">
                                            <label for="underline_select_dept" class="sr-only disabled">Select Department</label>
                                            <select v-model="loginStore.department" id="underline_select_dept" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2appearance-none text-gray-400 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-400 peer">
                                                <option value="" class="px-4 py-2 bg-gray-700 text-gray-300 tracking-wide" selected>Select Department</option>
                                                <option class="px-4 py-2 bg-gray-700 text-gray-300 tracking-wide" :value="dept.name" v-for="dept in loginStore.departmentList" :key="dept.name">{{ dept.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div v-if="loginStore.currentStep==3" class="academic-details flex gap-1 flex-col">
                                        <div class="flex justify-center w-full pb-4">
                                            <img alt="" :src='qr_code' class="max-w-[200px]"/>
                                        </div>
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input v-model="loginStore.transactionId" pattern="^[a-zA-Z0-9. ]+$" type="text" name="floating_transaction" id="floating_transaction" class="tracking-wider block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required />
                                            <label for="floating_transaction" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Transaction ID</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex text-gray-100 justify-between rounded-lg">
                                    <button type="button" class="justify-center flex w-full px-4 py-2 bg-[#fa5252] hover:bg-[#ff5555]" v-if="loginStore.currentStep>0">
                                        <span class="w-full transition-all"  @click="loginStore.currentStep-=1">Prev</span>
                                    </button>
                                    <button type="submit" class="justify-center flex w-full px-4 py-2 bg-[#07c160] hover:bg-[#07c160]" v-if="loginStore.currentStep<=3">
                                        <span v-if="loginStore.currentStep<3" class=" transition-all" >Next</span>
                                        <span v-if="loginStore.currentStep==3" class=" transition-all" >Register</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="py-2 text-gray-400 ssm:text-[14px] tracking-wide">
                            <span v-if="loginStore.isLoginDialog" class="dialog-footer">
                                Not yet registered? <button @click="handleSwitchToRegister" class="from-left text-blue-500 hover:text-blue-600 transition-all">Register</button>
                            </span>
                            <span v-else class="dialog-footer">
                                Already registered? <button @click="loginStore.isLoginDialog=true" class="from-left text-blue-500 hover:text-blue-600 transition-all">Login</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
        </van-dialog>
    </div>
</template>

<style>
.van-dialog__header{
    color: rgb(230, 230, 230);
}

.dialog-footer button::after {
    display:block;
    content: '';
    width: inherit;
    border-bottom: solid 1px rgb(37 99 236);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
}

.dialog-footer button:hover::after { transform: scaleX(1); }
.from-left:after {
    transform-origin: left;
}

.dialog-body::-webkit-scrollbar {
    width: 5px;
}

.dialog-body::-webkit-scrollbar-thumb {
    background-color: #4d4d4dfa;
    border-radius: 6px;
    cursor: pointer;
}

.dialog-body::-webkit-scrollbar-track {
    background-color: #000015;
}
</style>