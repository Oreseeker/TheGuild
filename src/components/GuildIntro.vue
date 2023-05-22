<template>
  <div class="standard-block guild-intro">
    <h1>Зверинец Владыки</h1>
    <div class="description">
      <div class="faction">Альянс</div>
      -
      <div class="realm">Гордунни</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style scoped>
.guild-intro {
  width: 100%;
  background: url('@/assets/nathria2.webp') no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 4.4rem;
  text-align: center;
  margin: 0 0 20px 0;
}

.description {
  font-size: 2.5rem;
  display: flex;
  gap: 20px;
  margin: 0 0 30px 0;
}

.quote {
  font-style: italic;
  font-size: 1.6rem;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .description {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }
}
</style>
