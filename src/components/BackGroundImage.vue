<template>
  <div class="bg-image" :style="{'top': location.y +'px', 'left': location.x +'px'}">
    <img
        :src="image"
        :width="size +'px'"
        :class="{
          'image-animation1': animationType===0,
           'image-animation2': animationType===1,
            'image-animation3': animationType===2,
             'image-animation4': animationType===3,
        }"
        alt=""
    >
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps<{
  image: string,
  size: number,
  location: { x: number, y: number },
  animationType?: number,
}>()

const blockAnimation = `

  .init-animation
  {
    @keyframes init {
      from {
        top: 0px;
      }
      90% {top: ${props.location.y + 50}px;}
      to {
        top: ${props.location.y}px;
      }
    }
    animation
  }

`
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
root {
  --from-top: 0px;
}

.bg-image {
  position: absolute;
  animation: 2s alternate init;
}

.image-animation1 {
  animation: 10s infinite alternate imageAnimation1;
}

.image-animation2 {
  animation: 10s infinite alternate imageAnimation2;
}

.image-animation3 {
  animation: 10s infinite alternate imageAnimation3;
}

.image-animation4 {
  animation: 10s infinite alternate imageAnimation4;
}

@keyframes init {
  from {
    top: -100px;
  }
}

@keyframes imageAnimation1 {
  25% {
    transform: translateX(10px) scale(1.1);
  }
  40% {
    transform: translateY(7px) translateX(-5px) scale(0.9) rotateZ(20deg);
  }
  60% {
    transform: translateY(0px) translateX(5px) scale(1) rotateZ(10deg);
  }
  80% {
    transform: translateY(7px) translateX(-5px) scale(0.9) rotateZ(30deg);
  }
}

@keyframes imageAnimation2 {
  25% {
    transform: translateX(-10px) scale(1.2);
  }
  40% {
    transform: translateY(15px) translateX(5px) scale(0.9) rotateZ(-30deg);
  }
  60% {
    transform: translateY(0px) translateX(-10px) scale(1) rotateZ(10deg);
  }
  80% {
    transform: translateY(7px) translateX(-5px) scale(0.9) rotateZ(-30deg);
  }
}

@keyframes imageAnimation3 {
  25% {
    transform: translateX(10px) scale(1);
  }
  40% {
    transform: translateY(7px) translateX(-5px) scale(0.8) rotateZ(30deg);
  }
  60% {
    transform: translateY(0px) translateX(5px) scale(1) rotateZ(0deg);
  }
  80% {
    transform: translateY(7px) translateX(-5px) scale(0.9) rotateZ(10deg);
  }
}

@keyframes imageAnimation4 {
  25% {
    transform: translateX(10px) scale(1.1);
  }
  40% {
    transform: translateY(7px) translateX(-5px) scale(0.9) rotateZ(20deg);
  }
  60% {
    transform: translateY(0px) translateX(5px) scale(1) rotateZ(-10deg);
  }
  80% {
    transform: translateY(7px) translateX(-5px) scale(0.9) rotateZ(-20deg);
  }
}
</style>
