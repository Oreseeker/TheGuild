<template>
  <div class="app" id="app">
    <TheToolbar class="toolbar"/>
    <div class="wrapper">
      <RouterView/>
<!--      <RouterView v-slot="{ Component }">-->
<!--        <Transition>-->
<!--          <Component :is="Component" class="component"/>-->
<!--        </Transition>-->
<!--      </RouterView>-->
    </div>
<!--    <TheFooter/>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/assets/css/global.css';
import TheFooter from '@/components/TheFooter/TheFooter.vue';
import TheToolbar from '@/components/TheToolbar/TheToolbar.vue';

export default defineComponent({
  components: {
    TheToolbar,
    // TheFooter,
  },
});
</script>

<style>
@font-face {
  font-family: 'Russo One';
  src: url('@/assets/fonts/RussoOne-Regular.ttf');
}

* {
  box-sizing: border-box;
  font-family: Russo One, sans-serif;
  color: white;
}

html {
  overflow-x: hidden;
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
}

input {
  padding: 10px;
}

textarea,
input,
select {
  border: 1px solid lightgray;
}

#app {
  font-family: Avenir, sans-serif;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*overflow: auto;*/
}

input, textarea {
  outline: none;
}

button,
.btn {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.invisible {
  visibility: hidden;
}

.hidden {
  display: none;
}

h1 {
  font-size: 2.5rem;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  margin: 0;
}
</style>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  /*justify-content: space-between;*/
  align-items: center;
}

.toolbar {
  position: sticky;
  top: 0;
  z-index: 100;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  padding: 0 0 80px 0;
}

/*.v-enter-to,*/
/*.v-leave-from {*/
/*  opacity: 1;*/
/*}*/

/*.v-enter-from,*/
/*.v-leave-to {*/
/*  opacity: 0;*/
/*}*/

/*.v-enter-active,*/
/*.v-leave-active {*/
/*  transition: opacity 100ms linear;*/
/*}*/
</style>
