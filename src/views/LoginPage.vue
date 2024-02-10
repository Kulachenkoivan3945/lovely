<template>
  <div style="position: relative; overflow: hidden">
    <BackGround :mode="currentMode" :items-count="70"/>
    <v-container
        class="d-flex flex-column justify-center align-center"
        style="height: 100vh;"
    >
      <v-card
          :class="{'bg-shades-black': errors.length ===5, 'bg-pink-accent-1':isGood}"
          class="d-flex flex-column justify-center align-center pa-8 "
          style="min-width: 500px"
      >
        <v-card-title>
          ДОБРО ПОЖАЛОВАТЬ!
          <span
              v-for="(error, index) in errors" :key="error"
              class="text-red-darken-1"
          >
          <br>
          {{ errorTitles[index] }}
        </span>
          <span v-if="isGood">
          <br>
          ПРИВЕТ, ЛЮБИМКА!!! Я ЗАЖДАЛСЯ, ВХОДИ СКОРЕЕ
        </span>
        </v-card-title>
        <v-text-field
            v-model="password"
            placeholder="Введите пароль"
            class="w-75 mx-auto rounded-pill align-center flex-grow-0 pa-8"
            color="primary"
            variant="outlined"
            clearable
        >

        </v-text-field>
        <v-row class="flex-column pa-4 flex-grow-0">
          <v-col v-if="isGood">
            <v-btn @click="toHome">Войти (только для моей булки)</v-btn>
          </v-col>
          <v-col v-else>
            <v-btn @click="logIn">Войти</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>

</template>
<script setup lang="ts">
import BackGround from '../components/BackGround.vue';
import {useAuth} from "@/stores/useAuth";
import {storeToRefs} from "pinia";
import {ref, watch} from "vue";
import router from "@/router";

const {
  isAuth
} = storeToRefs(useAuth())
const {checkPassword} = useAuth();
const password = ref('');

const currentMode = ref('');

const errors = ref<boolean[]>([]);
const isGood = ref(false);
const errorTitles = ['Если вас не ждут - УХОДИТЕ!!!', 'УХОДИТЕ, СКАЗАЛИ ЖЕ!!!',
  'ВЫ ЗДЕСЬ НЕ НУЖНЫ!!!', 'ПОСЛЕДНИЙ РАЗ ПОВТОРЯЮ - ПРОВАЛИВАЙТЕ!!!', 'ВСЕ, Я ОБИДЕЛСЯ - НЕ БУДУ С ВАМИ ГОВОРИТЬ!!!']
const logIn = (): void => {
  if (password.value === '') return
  if (checkPassword(password.value)) {
    currentMode.value = 'love'
    errors.value = [];
    isGood.value = true;
  } else {
    isGood.value = false;
    if (errors.value.length < 5) {
      errors.value.push(false)
      if(errors.value.length === 5) currentMode.value = 'death'
    }
  }
}

const toHome = () => {
  router.push('/')
}
</script>
