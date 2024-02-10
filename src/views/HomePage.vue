<template>
  <modal-kiss :is-open="isModalKissOpen" @closeModalKiss="isModalKissOpen=false"/>
  <div class="home">
    <BackGround :mode="'love'" :items-count="70"/>
    <v-container class="d-flex flex-column justify-center w-75 text-white">
      <v-card class="card-container mt-16">
        <v-card-title
            class="pt-8 px-0 pb-0 text-pre-wrap d-flex flex-column align-stretch"
            style="color: #054d67;font-size: 30px; line-height: 1.8em"
        >
          <div class="px-4">
            Любимая, поздравляю тебя с 3 годами наших отношений и с 14 февраля!!!
            <br>
           <div class="d-flex flex-column align-center justify-center">
             Кидаю поцелуйчик через экран, надеюсь ты поймаешь
             <img :src="kissBears" alt="" width="120px">
             <v-btn
             class="rounded-pill bg-pink-lighten-1"
             @click="isModalKissOpen = true"
             >
               Поцеловать
             </v-btn>
           </div>
          </div>
          <img
              :src="flowerBg" alt=""
              class="w-100"
              style="object-fit: cover"
          >
        </v-card-title>
      </v-card>

      <v-card class="card-container my-8">
        <carousel-panel
            v-slot="slotProps"
            :items="greetingCards"
        >
          <div class="w-100 d-flex justify-center pa-4">
            <img
                :src="flowerCat"
                alt=""
                width="150px"
                height="190px"
                style="align-self: end"
            >
            <p class="text-pink-darken-4 pa-5 text-pre-wrap">{{ slotProps.item.text }}</p>
            <img
                :src="flowerRabbit"
                alt=""
                width="150px"
                height="150px"
                style="align-self: end"
            >
          </div>
        </carousel-panel>
      </v-card>

      <v-card class="card-container my-8">
        <carousel-panel :items="we">
        </carousel-panel>
      </v-card>

    </v-container>
  </div>
</template>

<script setup lang="ts">
// @ is an alias to /src
import BackGround from '../components/BackGround.vue';
import ModalKiss from '../components/ModalKiss.vue';
import {greetingCards} from "@/homeData/greetings";

import {onMounted, ref} from "vue";
import {useAuth} from "@/stores/useAuth";
import router from "@/router";
import CarouselPanel from "@/components/CarouselPanel.vue";

const {isAuth} = useAuth();
const pageHeight = ref(window.innerHeight);
import flowerBg from "../assets/img/flower-bg.png"
import flowerCat from "../assets/img/flower-cat.png"
import flowerRabbit from "../assets/img/flower-krol.png"
import kissBears from "../assets/img/kiss-bears.png"
import {we} from "../homeData/images";

const isModalKissOpen = ref(false  );

onMounted(() => {
  /*if(!isAuth) router.push('login');*/
  pageHeight.value = document.querySelector('.home').clientHeight;
})
</script>
<style scoped>
.home {

}

.card-container {
  background-color: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(3px);
}
</style>
