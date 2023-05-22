<template>
  <div
    class="raid-boss"
    :class="{ 'not-defeated': !boss.defeated }"
  >
    <figure @click="showBossFightPopup = true">
      <img :src="boss.img" :alt="boss.name">
      <figcaption class="figcaption">
        {{ boss.name }}
      </figcaption>
    </figure>
    <GuildRaidBossesStatsPopup
      :boss="boss"
      v-model="showBossFightPopup"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GuildRaidBossesStatsPopup from '@/components/GuildRaidBossesStatsPopup.vue';

export default defineComponent({
  components: { GuildRaidBossesStatsPopup },
  props: {
    boss: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showBossFightPopup: false,
    };
  },
});
</script>

<style scoped>
.raid-boss {
  user-select: none;
  cursor: pointer;
  max-width: 380px;
}

figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0;
}

.figcaption {
  text-align: center;
}

img {
  width: 320px;
}

figcaption {
  font-size: 1.9rem;
}

.not-defeated {
  pointer-events: none;
  filter: grayscale(2);
}

img {
  width: 380px;
  height: 200px;
}

@media screen and (max-width: 600px) {
  img {
    width: 280px;
    height: 147px;
  }

  figcaption {
    font-size: 1.6rem;
  }
}
</style>
