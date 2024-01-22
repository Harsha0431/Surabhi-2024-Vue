<script setup>
import { computed, onMounted, ref } from "vue"
import { useRouter } from "vue-router";

const router = useRouter()

const teams = [
    {
        parent:"Cine Carnival",
        children:[
            {
                role:'',
                members:[
                {
                        name:'Nanda',
                        image:'https://i.postimg.cc/SNDXnWZF/nandha.png',
                        designation:'DEG 1'
                    },
                    {
                        name:'E.Raghu',
                        image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Satyanarayana',
                        image:'https://i.postimg.cc/X7cfQGQQ/sathya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Sai Shree',
                        image:'https://i.postimg.cc/XYsw0MM5/sai-shree.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Abhinandu',
                        image:'https://i.postimg.cc/8zYm68yS/abhinandu.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Praveen',
                        image:'https://i.postimg.cc/RFK6hyYX/praveen.png',
                        designation:'DEG 3'
                    }
                ]
            }
        ]
    },
    {
        parent:"Raagha",
        children:[
            {
                role:'',
                members:[
                {
                        name:'Nanda',
                        image:'https://i.postimg.cc/SNDXnWZF/nandha.png',
                        designation:'DEG 1'
                    },
                    {
                        name:'E.Raghu',
                        image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Satyanarayana',
                        image:'https://i.postimg.cc/X7cfQGQQ/sathya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Sai Shree',
                        image:'https://i.postimg.cc/XYsw0MM5/sai-shree.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Abhinandu',
                        image:'https://i.postimg.cc/8zYm68yS/abhinandu.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Praveen',
                        image:'https://i.postimg.cc/RFK6hyYX/praveen.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Surya',
                        image:'https://i.postimg.cc/Wz0GRhjp/surya.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Rupesh',
                        image:'https://i.postimg.cc/Yq3F1cCP/rupesh.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Basha',
                        image:'https://i.postimg.cc/fb352W3y/basha.png',
                        designation:'DEG 1'
                    },
                    {
                        name:'Dheeraj',
                        image:'https://i.postimg.cc/G2WfJ8qb/dheeraj.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Gnaneswar',
                        image:'https://i.postimg.cc/d3CzzmL7/gnaneshwar.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Harshitha',
                        image:'https://i.postimg.cc/wMBpZsDL/harshitha.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Uday',
                        image:'https://i.postimg.cc/LXnDW9nh/uday.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'User 2',
                        image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'User 2',image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                        designation:'DEG 2'
                    }
                ]
            }
        ]
    },
    {
        parent:"Vastra Shala",
        children:[
            {
                role:'',
                members:[
                {
                        name:'Nanda',
                        image:'https://i.postimg.cc/SNDXnWZF/nandha.png',
                        designation:'DEG 1'
                    },
                    {
                        name:'E.Raghu',
                        image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Satyanarayana',
                        image:'https://i.postimg.cc/X7cfQGQQ/sathya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Sai Shree',
                        image:'https://i.postimg.cc/XYsw0MM5/sai-shree.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Abhinandu',
                        image:'https://i.postimg.cc/8zYm68yS/abhinandu.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Praveen',
                        image:'https://i.postimg.cc/RFK6hyYX/praveen.png',
                        designation:'DEG 3'
                    }
                ]
            }
        ]
    },
    {
        parent:"Sahitya",
        children:[
            {
                role:'',
                members:[
                {
                        name:'Nanda',
                        image:'https://i.postimg.cc/SNDXnWZF/nandha.png',
                        designation:'DEG 1'
                    },
                    {
                        name:'E.Raghu',
                        image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Satyanarayana',
                        image:'https://i.postimg.cc/X7cfQGQQ/sathya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Sai Shree',
                        image:'https://i.postimg.cc/XYsw0MM5/sai-shree.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Abhinandu',
                        image:'https://i.postimg.cc/8zYm68yS/abhinandu.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Praveen',
                        image:'https://i.postimg.cc/RFK6hyYX/praveen.png',
                        designation:'DEG 3'
                    }
                ]
            }
        ]
    },
    {
        parent:"Nrithya",
        children:[
            {
                role:'',
                members:[
                {
                        name:'Nanda',
                        image:'https://i.postimg.cc/SNDXnWZF/nandha.png',
                        designation:'DEG 1'
                    },
                    {
                        name:'E.Raghu',
                        image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Satyanarayana',
                        image:'https://i.postimg.cc/X7cfQGQQ/sathya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Sai Shree',
                        image:'https://i.postimg.cc/XYsw0MM5/sai-shree.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Abhinandu',
                        image:'https://i.postimg.cc/8zYm68yS/abhinandu.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Praveen',
                        image:'https://i.postimg.cc/RFK6hyYX/praveen.png',
                        designation:'DEG 3'
                    }
                ]
            }
        ]
    },
    {
        parent:"Chitra Kala",
        children:[
            {
                role:'',
                members:[
                {
                        name:'Nanda',
                        image:'https://i.postimg.cc/SNDXnWZF/nandha.png',
                        designation:'DEG 1'
                    },
                    {
                        name:'E.Raghu',
                        image:'https://i.postimg.cc/VL67rFYX/aishwariya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Satyanarayana',
                        image:'https://i.postimg.cc/X7cfQGQQ/sathya.png',
                        designation:'DEG 2'
                    },
                    {
                        name:'Sai Shree',
                        image:'https://i.postimg.cc/XYsw0MM5/sai-shree.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Abhinandu',
                        image:'https://i.postimg.cc/8zYm68yS/abhinandu.png',
                        designation:'DEG 3'
                    },
                    {
                        name:'Praveen',
                        image:'https://i.postimg.cc/RFK6hyYX/praveen.png',
                        designation:'DEG 3'
                    }
                ]
            }
        ]
    }
]

const activeParent = ref('Cine Carnival')
const activeParentIndex = computed(() => {
    return teams.findIndex(team => team.parent === activeParent.value);
});

const activeChild = ref(teams[activeParentIndex.value].children[0].role || '')

const activeChildIndex = computed(() => {
    const activeParentIndexValue = activeParentIndex.value;
    const activeChildValue = activeChild.value;

    if (activeParentIndexValue !== -1) {
        const activeParentChildren = teams[activeParentIndexValue].children;

        // Find the index of the active child role
        const index = activeParentChildren.findIndex(child => child.role === activeChildValue);

        return index;
    }

    return -1;
});

const handleParentNavItemClick = (team) =>{
    activeParent.value = team
    activeChild.value = teams[activeParentIndex.value].children[0].role
}

const handleChildrenNavItemClick = (role) =>{
    activeChild.value = role.role
}

onMounted(()=>{
    document.title = `Team - Surabhi`
})

</script>

<template>
    <div class="flex flex-col min-h-[100vh] bg-[rgb(0,0,0)] justify-center py-4 ssm:pb-12">
        <button @click="router.back()" class="arrow-icon-prev fixed top-5 left-5 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-8 h-8 stroke-gray-400 hover:stroke-gray-300 transition-all">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
        <span class="text-center font-montserrat font-extrabold tracking-wide text-3xl sm:text-4xl relative mt-16">Team Carnival</span>
        <div class="flex flex-col gap-8 w-full justify-center relative mt-6">
            <nav aria-label="team-parent-nav" class="flex justify-center">
                <div class="border-b-2 border-gray-300 border-opacity-50 px-8 flex flex-wrap justify-center gap-8 pb-2">
                    <button :class="activeParent==team.parent ? 'text-gray-50': 'text-gray-400'" class="text-xl hover:text-gray-300 font-semibold transition-all tracking-wider" v-for="team in teams" :key="team.parent" @click="handleParentNavItemClick(team.parent)">{{ team.parent }}</button>
                </div>
            </nav>
            <nav v-if="teams[activeParentIndex].children[0].role.length>0 || false" aria-label="team-children-nav" class="flex justify-center">
                <div class="border-b-2 border-gray-300 border-opacity-50 px-8 flex flex-wrap justify-center gap-8 pb-2">
                    <button :class="activeChild==role.role?'text-gray-50':'text-gray-400'" class="text-xl hover:text-gray-300 font-semibold transition-all tracking-wider" v-for="role in teams[activeParentIndex].children" :key="role" @click="handleChildrenNavItemClick(role)">{{ role.role }}</button>
                </div>
            </nav>
        </div>

        <div class="flex relative min-[100vh] mt-12 justify-center">

            <div class="flex sm:gap-14 gap-10 flex-wrap justify-evenly">
                
                <div v-for="(event, index) in teams[activeParentIndex].children[activeChildIndex].members" :key="index" class="card relative w-[380px] h-[480px] rounded-3xl overflow-hidden shadow-md">
                    <div class="poster relative top-0 left-0 w-full h-full overflow-hidden">
                        <img :src="event.image" :alt="event.name" class="md:w-[280px] md:h-[380px] object-contain" />
                    </div>
                    <div class="details flex flex-col justify-center gap-4 py-2 pb-4">
                        <div class="flex justify-center">
                            <button class="view-btn px-5 font-bold font-montserrat py-2 rounded-3xl text-gray-300 hover:text-gray-100 tracking-wide transition-all hover:transition-all flex justify-center relative text-center w-min">
                                <RouterLink :to="'/'">View</RouterLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Oswald:wght@400;600&family=Roboto+Slab:wght@300;400;700&display=swap');
.arrow-icon-prev{
    animation: left-right 1000ms infinite;
}

@keyframes left-right {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0);
    }
}

</style>

<style scoped>
.card{
    position: relative;
}

.poster::before{
    content: '';
    position: absolute;
    bottom: -45%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: .5s;
}

.card:hover .poster::before{
    bottom: 0;
}

.poster img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: .5s;
}

.card:hover .poster img{
    transform: scale(1.1);
}

.details{
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: auto;
    background: #00000067;
    backdrop-filter: blur(16px) saturate(150%);
    transition: .5s;
    color: #fff;
    z-index: 2;
}

.card:hover .details{
    bottom: 0;
}

.view-btn{
    border: 1.5px solid rgba(255 255 255 / 0.4);
}

.arrow-icon-prev{
    animation: left-right 1000ms infinite;
}

@keyframes left-right {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0);
    }
}

</style>