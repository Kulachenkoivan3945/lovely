<template>
  <modal-kiss :is-open="isModalKissOpen" @closeModalKiss="isModalKissOpen = false" />
  <div class="home">
    <BackGround :mode="'love'" :items-count="70" />
    <v-container class="d-flex flex-column justify-center w-75 text-white">
      <v-card class="card-container mt-16">
        <v-card-title class="pt-8 px-0 pb-0 text-pre-wrap d-flex flex-column align-stretch"
          style="color: #054d67;font-size: 30px; line-height: 1.8em">
          <div class="px-4">
            Любимая, поздравляю тебя с 3 годами наших отношений и с 14 февраля!!!
            <br>
            <div class="d-flex flex-column align-center justify-center">
              Кидаю поцелуйчик через экран, надеюсь ты поймаешь
              <img :src="kissBears" alt="" width="120px">
              <v-btn class="rounded-pill bg-pink-lighten-1" @click="isModalKissOpen = true">
                Поцеловать
              </v-btn>
            </div>
          </div>
          <img :src="flowerBg" alt="" class="w-100" style="object-fit: cover">
        </v-card-title>
      </v-card>

      <v-card class="card-container my-8">
        <carousel-panel v-slot="slotProps" :items="greetingCards" :bg="flowerBg12">
          <div class="w-100 d-flex justify-center pa-4 py-16 h-100">
            <img :src="slotProps.item.cat" alt="" width="150px" style="align-self: end;object-fit: contain">
            <p class="text-pink-darken-4 pa-5 text-pre-wrap">{{ slotProps.item.text }}</p>
            <img :src="slotProps.item.bunny" alt="" width="150px" style="align-self: end; object-fit: contain">
          </div>
        </carousel-panel>
      </v-card>

      <v-card class="card-container my-8">
        <carousel-panel v-slot="slotProps" :items="photoWeCards" :bg="flowerBg4">
          <div class="w-100 d-flex flex-column align-center justify-center pa-4">
            <img :src="slotProps.item.src" width="100%" height="100%"
              style="object-fit: cover;max-height: 80vh; max-width: 50%;border-radius: 20px" alt="">
            <p class="w-50 text-blue-darken-4 font-weight-medium pa-4 text-h6" style="line-height: 1.8em; ">
              {{ slotProps.item.text }}
            </p>
          </div>
        </carousel-panel>
      </v-card>

      <v-card class="card-container my-8">
        <actons-carousel-panel />
      </v-card>

    </v-container>
  </div>
</template>

<script setup lang="ts">
// @ is an alias to /src
import BackGround from '../components/BackGround.vue';
import ModalKiss from '../components/ModalKiss.vue';
import { greetingCards, photoWeCards } from "@/homeData/greetings";
import { onMounted, ref } from "vue";
import { useAuth } from "@/stores/useAuth";
import router from "@/router";
import CarouselPanel from "@/components/CarouselPanel.vue";

const { isAuth } = useAuth();
const pageHeight = ref(window.innerHeight);
import flowerBg from "../assets/img/flower-bg.png"
import flowerBg12 from "../assets/img/flower-bg12.png"
import flowerBg4 from "../assets/img/flower-bg4.png"
import kissBears from "../assets/img/kiss-bears.png"
import ActonsCarouselPanel from "@/components/ActonsCarouselPanel.vue";

const isModalKissOpen = ref(false);

onMounted(() => {
  if(!isAuth) router.push('login');
  pageHeight.value = document.querySelector('.home').clientHeight;
})
</script>
<style scoped>
.home {}

.card-container {
  background-color: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(3px);
}
</style>
