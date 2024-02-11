<template>
  <div
      class="carousel-container position-relative"
  >
    <div class="carousel-item-container align-center">
      <carousel-item
          v-for="(item, i) in weOrNot"
          :key="i"
          class="w-100 d-flex flex-column h-100"
          style="min-width: 100%;min-height: 100%; transition: all 0.9s ease-in-out;"
         :style="{'transform': `translateX(-${100*currentItem}%) scaleY(${itemScale(i)})` }"
      >
        <transition name="fade">
          <div
              v-if="!isOver"
              class="w-100 d-flex flex-column align-center justify-center pa-4 pt-2"
          >
            <div class="d-flex flex-row align-center justify-space-between" style="position: absolute;top: 0;left: 0;z-index: 0;width: 100%;height: 100%">
              <img
                  :src="flowerBg16"
                  alt=""
                  style="height: 70%; object-fit: cover;"
              >
              <img
                  :src="flowerBg18"
                  alt=""
                  style="height: 60%; object-fit: cover;"
              >
            </div>
            <h2 class="pb-3">Мы или не мы?</h2>
            <img
                :src="item"
                width="100%"
                height="100%"
                style="object-fit: cover;max-height: 80vh; max-width: 50%;border-radius: 20px"
                alt=""
            >
            <div class="d-flex justify-space-between w-50 my-6">
              <v-btn
                  class="mr-4 bg-red-lighten-1"
                  style="width: 40%"
                  @click="toNextItem(false)"
              >
                НЕ МЫ
              </v-btn>
              <v-btn
                  class="ml-4 bg-green-lighten-1"
                  style="width: 40%"
                  @click="toNextItem(true)"
              >
                МЫ
              </v-btn>
            </div>
            <images-fontain
                :mode="'love'"
                :items-count="20"
                :is-active="isLoveFontainActive"
            />
            <images-fontain
                :mode="'death'"
                :items-count="20"
                :is-active="isDeathFontainActive"
            />
          </div>
          <div
              v-else
              class="pa-8"
          >
            <h2>Ура, вопросы закончились</h2>
            <h3>Это мы на - {{result}}%</h3>
            <div v-if="result>50">
              <h3 class="mb-4">Ура, все таки мы!!!</h3>
              <img :src="yesWe" alt="" width="60%" style="border-radius: 20px; max-height: 60vh">
            </div>
            <div v-else>
              <h3 class="mb-4">Очень жаль, все таки не мы(((</h3>
              <img :src="notWe" alt="" width="60%" style="border-radius: 20px; max-height: 60vh; object-fit: cover">
            </div>
            <v-btn
                class="ma-6 bg-blue-lighten-1"
                append-icon="mdi-restart"
                @click="restart"
            >
              Пройти заново
            </v-btn>
          </div>
        </transition>
      </carousel-item>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

import {weOrNot} from "@/homeData/images";
import notWe from "../assets/img/weOrNot/notWe.jpg"
import yesWe from "../assets/img/weOrNot/yesWe.png"
import ImagesFontain from "@/components/ImagesFontain.vue";
import flowerBg16 from "../assets/img/flower-bg-16.png"
import flowerBg17 from "../assets/img/flower-bg17.png"
import flowerBg18 from "../assets/img/flower-bg18.png"

const isLoveFontainActive = ref(false);
const isDeathFontainActive = ref(false);

const itemScale = (item: number) => {
  return currentItem.value === item ? '1' : '0'
}

const currentItem = ref(0)
const toNextItem = (answer: boolean) => {
  answers.value.push(answer)
  if(answer) isLoveFontainActive.value = true;
  else isDeathFontainActive.value = true;
  setTimeout(()=>{
    isLoveFontainActive.value = false;
    isDeathFontainActive.value = false;
    if (currentItem.value < weOrNot.length - 1) {
      currentItem.value++
    }
    else {
      isOver.value = true
      result.value = Math.round(answers.value.filter(el=> el===true).length / answers.value.length * 100);
      console.log(result.value)
      console.log(answers.value.filter(el=> el===true).length);
    }
  },1800)
}

const restart = ()=>{
  answers.value = [];
  result.value = 0;
  isOver.value = false;
  currentItem.value = 0;
}
const result = ref(0)
const answers = ref<boolean[]>([]);
const isOver = ref(false);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}

.carousel-item-container {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
}
</style>
