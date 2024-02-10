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
import {computed, ref, watch} from "vue";

import love1 from '../assets/svg/love/love1.svg'
import love2 from '../assets/svg/love/love2.svg'
import love3 from '../assets/svg/love/love3.svg'
import love4 from '../assets/svg/love/love4.svg'
import love5 from '../assets/svg/love/love5.svg'
import love6 from '../assets/svg/love/love6.svg'
import love7 from '../assets/svg/love/love7.svg'
import love8 from '../assets/svg/love/love8.svg'
import love9 from '../assets/svg/love/love9.svg'
import love10 from '../assets/svg/love/love10.svg'

import star1 from '../assets/svg/stars/star1.svg'
import star2 from '../assets/svg/stars/star2.svg'
import star3 from '../assets/svg/stars/star3.svg'
import star4 from '../assets/svg/stars/star4.svg'
import star5 from '../assets/svg/stars/star5.svg'
import star6 from '../assets/svg/stars/star6.svg'
import star7 from '../assets/svg/stars/star7.svg'

import death1 from '../assets/svg/death/death1.svg'
import death5 from '../assets/svg/death/death5.svg'
import death2 from '../assets/svg/death/death2.png'
import death3 from '../assets/svg/death/death3.png'
import death4 from '../assets/svg/death/death4.png'
import death6 from '../assets/svg/death/death6.png'
import death7 from '../assets/svg/death/death7.png'
import death8 from '../assets/svg/death/death8.png'

const props = defineProps<{
  mode: string,
  itemsCount:number
}>()

const loveImages: string[] = [love1, love2, love3, love4, love5, love6, love7, love8, love9, love10]
const starImages: string[] = [star1, star2, star3, star4, star5, star6, star7]
const deathImages: string[] = [death1, death2, death3, death4, death5, death6, death7, death8]
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
