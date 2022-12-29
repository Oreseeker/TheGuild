<template>
  <div class="raid-boss">
    <figure>
      <img :src="img" :alt="name">
      <figcaption>
        {{ name }}
      </figcaption>
    </figure>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.raid-boss {
  user-select: none;
}

figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0;
}

img {
  width: 320px;
}

figcaption {
  font-size: 30px;
}
</style>
