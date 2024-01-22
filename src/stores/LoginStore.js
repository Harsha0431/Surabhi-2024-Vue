import { defineStore } from "pinia";
import { ref } from 'vue'
import { getRegisterList } from "@/service/Login/getListService";

export const useLoginStore = defineStore('login-store',() => {
    const showLoginDialog = ref(false)

    const isLoginDialog = ref(true)

    // Login attributes
    const loginUsername = ref('')
    const loginPassword = ref('')

    //Register
    const currentStep = ref(0)
    const registerUsername = ref('')
    const registerPassword = ref('')
    const registerConformPassword = ref('')
    const name = ref('')
    const email = ref('')
    const phone = ref('')
    const state = ref('')
    const gender = ref('')

    const department = ref('')
    const year = ref('')
    const college = ref('')

    const registerPlanList = ref([])
    const selectedRegisterPlan = ref(-1)

    const transactionId = ref('')

    const collegeList = ref([])
    const departmentList = ref([])
    const stateList = ref([])

    function resetAttributes() {
        loginUsername.value = ''
        loginPassword.value = ''
        currentStep.value = 0
        registerUsername.value = ''
        registerPassword.value = ''
        registerConformPassword.value = ''
        name.value = ''
        email.value = ''
        phone.value = ''
        state.value = ''
        gender.value = ''
        department.value = ''
        year.value = ''
        college.value = ''
        registerPlanList.value = []
        selectedRegisterPlan.value = -1
        transactionId.value = ''
        collegeList.value = []
        departmentList.value = []
        stateList.value = ''
    }



    const fetchRequiredList = async () => {
        if (registerPlanList.value.length > 0 && stateList.value.length > 0 && departmentList.value.length > 0 && collegeList.value.length > 0)
            return
        await getRegisterList()
            .then((res) => {
                if (res.code == 1) {
                    const data = res.data
                    registerPlanList.value = data.register
                    stateList.value = data.state
                    collegeList.value = data.college
                    departmentList.value = data.department
                }
            })
    }


    return {
        showLoginDialog,
        loginUsername,
        loginPassword,
        isLoginDialog,
        currentStep,
        registerConformPassword,
        registerPassword,
        registerUsername,
        email,
        phone,
        state,
        gender,
        department,
        year,
        college,
        name,
        registerPlanList, collegeList , stateList , departmentList , fetchRequiredList,
        selectedRegisterPlan,
        transactionId,
        resetAttributes
    }
})