<template>
  <div
    class="raid-boss"
    :class="{ 'not-defeated': !boss.defeated }"
  >
    <figure @click="showBossFightPopup = true">
      <img :src="boss.img" :alt="boss.name">
      <figcaption>
        {{ boss.name }}
      </figcaption>
    </figure>
    <GuildRaidBossesStatsPopup
      v-if="showBossFightPopup"
      :boss="boss"
      @close="showBossFightPopup = false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GuildRaidBossesStatsPopup from '@/components/reusable/GuildRaidBossesStatsPopup.vue';

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

.not-defeated {
  pointer-events: none;
  filter: grayscale(2);
}
</style>
