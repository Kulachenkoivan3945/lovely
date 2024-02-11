<template>
  <div
      class="bg-layout"
       :class="backgroundColor"
  >
    <BackGroungImage
        v-for="image in images"
        :key="image"
        :image="image.src"
        :size="image.size"
        :location="image.location"
        :animation-type="image.animationType"
    />
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {loveImages,starImages,deathImages} from '../homeData/images'
import {computed, ref, watch} from "vue";

const props = defineProps<{
  mode: string,
  itemsCount:number
}>()

const backgroundColor = ref('')
const currentImageSet = ref<string[]>([]);
const getImageSet = () => {
  switch (props.mode) {
    case 'love': {
      currentImageSet.value = loveImages;
      backgroundColor.value = 'bg-pink-lighten-5'
      break;
    }
    case 'death': {
      currentImageSet.value = deathImages;
      backgroundColor.value = 'bg-red-darken-4'
      break;
    }
    default: {
      currentImageSet.value = starImages;
      backgroundColor.value = 'bg-yellow-lighten-5'
    }
  }
}

import BackGroungImage from '../components/BackGroundImage.vue';

interface ImageObject {
  src: string,
  size: number,
  location: { x: number, y: number },
  animationType: number,
}

const images = ref<ImageObject[]>([])
const initImages = () => {
  images.value = [];
  getImageSet();
  for (let i = 0; i < props.itemsCount; i++) {
    let imageSrc = currentImageSet.value[Math.round(Math.random() * currentImageSet.value.length - 1)];
    let imageSize = Math.round(Math.random() * 50 + 50);
    let animationType =  Math.round(Math.random() * 3)
    let x = (Math.round(Math.random() * window.innerWidth - imageSize));
    if (x < imageSize) x = imageSize;

    let y = (Math.round(Math.random() * window.innerHeight - imageSize));
    if (y < imageSize) y = imageSize;

    let imageLocation = {
      x: x,
      y: y,
    }
    images.value.push({
      src: imageSrc,
      size: imageSize,
      location: imageLocation,
      animationType: animationType
    })
  }
}
initImages();

watch(() => props.mode, () => initImages())

window.addEventListener('resize', () => initImages())

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-layout {
  position: fixed;
  left: 0;
  right: 0;
  min-height: 100vh;
  min-width: 100vw;
  z-index: -1;
}
</style>
