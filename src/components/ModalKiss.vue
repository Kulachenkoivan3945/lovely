<template>
  <transition name="fade">
    <div
        v-if="isOpen"
        class="bg-layout"
        @click="closeModal"
    >
      <img
          :src="kiss"
          width="30%"
          alt=""
          class="image-kissing"
      >
    </div>
  </transition>
</template>

<script setup lang="ts">
import {defineProps, watch} from "vue";
import kiss from "../assets/img/kiss.png"
import {defineEmits} from "vue";
const props = defineProps<{
  isOpen: boolean,
}>()

const closeModal = ()=>{
  emit('closeModalKiss')
}

const emit= defineEmits(['closeModalKiss'])

watch(()=>props.isOpen,()=>{
  if(props.isOpen){
    setTimeout(()=>{
      closeModal()
    },3000);
  }
})

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

.bg-layout {
  position: fixed;
  left: 0;
  right: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: transparent;
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

@keyframes kissAniamtion {
  0%{
    transform: scale(0.5);
  }
  50%{
    transform: scale(1.5);
  }
  100%{
    transform: rotateZ(360deg) scale(1);
  }
}

.image-kissing{
  animation: 3s alternate kissAniamtion;
}
</style>
