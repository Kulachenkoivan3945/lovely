<template>
  <div
      class="carousel-container position-relative"
      @mouseenter="showControls=true"
      @mouseleave="showControls=false"
  >
    <div class="carousel-item-container align-center">
      <div style="position: absolute;top: 0;left: 0;z-index: 0;width: 100%;height: 100%">
        <img
            :src="bg"
            alt=""
            style="width: 100%;height: 100%; object-fit: cover;"
        >
      </div>
      <carousel-item
          v-for="(item, i) in items"
          :key="i"
          class="w-100 d-flex flex-column h-100"
          style="min-width: 100%;min-height: 100%; transition: all 0.9s ease-in-out;"
         :style="{'transform': `translateX(-${100*currentItem}%) scaleY(${itemScale(i)})` }"
      >
        <slot :item="item">
        </slot>
      </carousel-item>
    </div>
    <transition name="fade">
      <div
          v-if="showControls"
          class="carousel-controls position-absolute h-100 w-100 d-flex align-center justify-space-between pa-4"
          style="top:0;left:0;">
        <transition name="fade">
          <v-btn
              :style="currentItem >0 ? '' : 'opacity: 0'"
              icon="mdi-chevron-left"
              style="z-index: 1500;"
              @click="toPrevItem"
          >
          </v-btn>
        </transition>
        <transition name="fade">
          <v-btn
              :style="currentItem < props.items.length -1 ? '' : 'opacity: 0'"
              icon="mdi-chevron-right"
              style="z-index: 1500"
              class="align-self-center"
              @click="toNextItem"
          ></v-btn>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {ref} from "vue";

const props = defineProps<{
  items: [],
  bg?: string
}>()

const itemScale = (item: number) => {
  return currentItem.value === item ? '1' : '0'
}

const showControls = ref(false);
const currentItem = ref(0)
const toNextItem = () => {
  if (currentItem.value < props.items.length - 1) {
    currentItem.value++
  }
}

const toPrevItem = () => {
  if (currentItem.value > 0) {
    currentItem.value--
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.carousel-item-container {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
}
</style>
