<template>
  <div
      v-if="isActive"
      class="bg-layout"
  >
    <images-fontain-items
        v-for="image in images"
        :key="image"
        :image="image.src"
        :size="image.size"
        :location="image.location"
    />
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {loveImages,deathImages} from '../homeData/images'
import {computed, ref, watch} from "vue";

const props = defineProps<{
  mode: string,
  itemsCount:number,
  isActive: boolean
}>()

const currentImageSet = ref<string[]>([]);
const getImageSet = () => {
  switch (props.mode) {
    case 'love': {
      currentImageSet.value = loveImages;
      break;
    }
    case 'death': {
      currentImageSet.value = deathImages;
      break;
    }
    default: break
  }
}

import ImagesFontainItems from "@/components/imagesFontainItems.vue";

interface ImageObject {
  src: string,
  size: number,
  location: { x: number, y: number },
}

const images = ref<ImageObject[]>([])
const initImages = () => {
  images.value = [];
  getImageSet();
  for (let i = 0; i < props.itemsCount; i++) {
    let imageSrc = currentImageSet.value[Math.round(Math.random() * currentImageSet.value.length - 1)];
    let imageSize = Math.round(Math.random() * 50 + 50);
    let x = (Math.round(Math.random() * (window.innerWidth*0.75 )- imageSize));
    if (x < imageSize) x = imageSize;

    let y = (Math.round(Math.random() * (window.innerHeight*0.75) - imageSize));
    if (y < imageSize) y = imageSize;

    let imageLocation = {
      x: x,
      y: y,
    }
    images.value.push({
      src: imageSrc,
      size: imageSize,
      location: imageLocation
    })
  }
}
watch(()=> props.isActive,()=> {
  if(props.isActive) initImages()
})

window.addEventListener('resize', () => initImages())

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
