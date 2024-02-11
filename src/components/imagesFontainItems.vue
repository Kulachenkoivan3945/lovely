<template>
  <transition name="fade">
    <div class="bg-image" :style="{'top': location.y +'px', 'left': location.x +'px'}">
      <img
          :src="image"
          :width="size +'px'"
          alt=""
      >
    </div>
  </transition>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps<{
  image: string,
  size: number,
  location: { x: number, y: number },
}>()

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

.bg-image {
  position: absolute;
  animation: 1s alternate init;
}


@keyframes init {
  from {
    top: 100%;
    left: 50%;
  }
}

</style>
