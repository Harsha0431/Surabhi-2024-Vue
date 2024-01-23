<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

import {useUserStore} from '@/stores/UserStore'

import {useLoginStore} from '@/stores/LoginStore'
import { RouterLink } from 'vue-router';

import { useRouter } from 'vue-router';

const router = useRouter()
const loginStore = useLoginStore()
const userStore = useUserStore()


const navigation = [
  { name: 'Cine Carnival', href: 'https://klcinecarnival24.netlify.app', current: true },
  { name: 'Raaga', href: 'https://klraaga24.netlify.app', current: false },
  { name: 'Vastra Shala', href: 'https://klvastrashala24.netlify.app', current: false },
  { name: 'Sahitya', href: 'https://klsaahitya24.netlify.app', current: false },
  { name: 'Nrithya', href: '', current: false },
  { name: 'Chitra Kala', href: '', current: false },
]

function openWebpage(link){
  if(link.length>0)
    window.open(link, '_blank');
  else
    router.push({name:'page-not-found'})
}

function loginClicked(){
  loginStore.showLoginDialog = true
}

</script>

<template>
  <Disclosure as="nav" class="z-[1000] navbar-container border-b-[3px] border-b-[#62131ae5]" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-center">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-[#62131ae5]">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6 stroke-2" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6 stroke-2" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-between md:items-stretch w-full">
          <div class="hidden md:ml-6 md:block">
            <div class="flex space-x-4">
              <button @click="openWebpage(item.href)" v-for="item in navigation" :key="item.name" :class="['tracking-wide nav-item', 'px-3 py-2 text-md font-extrabold text-[19px] max-lg:text-[18px] opacity-90 hover:opacity-100 transition-all font-croissant']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</button>
            </div>
          </div>
          <div class="flex max-md:w-full justify-end items-center">
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3" v-if="userStore.isLoggedIn">
              <div>
                <MenuButton class="relative flex rounded-full bg-gray-800 text-sm ">
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    <span :class="['block px-4 py-2 text-sm text-gray-700 font-semibold']">{{ userStore.username }}</span>
                  </MenuItem>
                  <MenuItem class="w-full flex justify-start" v-slot="{ active }">
                    <RouterLink to="/profile" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</RouterLink>
                  </MenuItem>
                  <MenuItem v-slot="{ active }" class="w-full flex justify-start">
                    <button @click="userStore.handleLogout" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</button>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
            <div v-else class="w-full flex justify-end">
              <button
              @click="loginClicked"
              :class="['tracking-wide nav-item', 'px-3 py-2 text-md font-extrabold text-[19px] max-lg:text-[18px] opacity-90 hover:opacity-100 transition-all font-croissant']"
            >Login</button>
            </div>
            
          </div>
          
          
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden flex justify-center">
      <div class="space-y-1 px-2 pb-3 pt-2 text-center">
        <DisclosureButton @click="openWebpage(item.href)" v-for="item in navigation" :key="item.name" :class="['font-merriweather font-bold tracking-wide nav-item', 'block w-full rounded-md px-3 py-2 text-base']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>


<style scoped>
.navbar-container{
  background: -moz-linear-gradient(61deg, #FFEBB5 18%, #FFDDA3 35%, #F9D5A3 54%, #FFDDB1 64%, #FFD59E 78%, #FFE3BC 88%); 

    /* safari 5.1+,chrome 10+ */
    background: -webkit-linear-gradient(61deg, #FFEBB5 18%, #FFDDA3 35%, #F9D5A3 54%, #FFDDB1 64%, #FFD59E 78%, #FFE3BC 88%);

    /* opera 11.10+ */
    background: -o-linear-gradient(61deg, #FFEBB5 18%, #FFDDA3 35%, #F9D5A3 54%, #FFDDB1 64%, #FFD59E 78%, #FFE3BC 88%);

    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFE3BC', endColorstr='#FFEBB5', GradientType=0 );

    /* ie 10+ */
    background: -ms-linear-gradient(61deg, #FFEBB5 18%, #FFDDA3 35%, #F9D5A3 54%, #FFDDB1 64%, #FFD59E 78%, #FFE3BC 88%);

    /* global 94%+ browsers support */
    background: linear-gradient(61deg, #FFEBB5 18%, #FFDDA3 35%, #F9D5A3 54%, #FFDDB1 64%, #FFD59E 78%, #FFE3BC 88%);

}

.nav-item{
  /* ff 3.6+ */
  background: -moz-linear-gradient(61deg, #931D29CF 19%, #A1372DDB 51%, #B02131E8 70%);

    /* safari 5.1+,chrome 10+ */
  background: -webkit-linear-gradient(61deg, #931D29CF 19%, #A1372DDB 51%, #B02131E8 70%);

    /* opera 11.10+ */
  background: -o-linear-gradient(61deg, #931D29CF 19%, #A1372DDB 51%, #B02131E8 70%);

    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#B02131', endColorstr='#931D29', GradientType=0 );

    /* ie 10+ */
  background: -ms-linear-gradient(61deg, #931D29CF 19%, #A1372DDB 51%, #B02131E8 70%);

    /* global 94%+ browsers support */
  background: linear-gradient(61deg, #931D29CF 19%, #A1372DDB 51%, #B02131E8 70%);

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

</style>