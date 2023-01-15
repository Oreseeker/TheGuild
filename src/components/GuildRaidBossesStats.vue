<template>
    <div class="standard-block guild-raid-bosses-stats">
      <h1>Побеждённые боссы в {{ difficultyText }} режиме</h1>
      <div class="bosses">
        <RaidBoss
          v-for="(boss, index) in bosses"
          :key="`${difficulty}-${index}`"
          :boss="boss"
        />
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import RaidBossProgress from '@/components/RaidBossProgress.vue';
import RaidBoss from '@/components/RaidBoss.vue';
import { RaidDifficulty } from '@/enums';

export default defineComponent({
  // eslint-disable-next-line vue/no-unused-components
  components: { RaidBoss, RaidBossProgress },
  props: {
    difficulty: {
      type: String as PropType<RaidDifficulty>,
      required: true,
      validator(val: any) {
        return Object.values(RaidDifficulty).includes(val);
      },
    },
    bosses: {
      type: Array,
      required: true,
    },
  },
  computed: {
    difficultyText() {
      const difficultyTextVariants = {
        [RaidDifficulty.NORMAL]: 'обычном',
        [RaidDifficulty.HEROIC]: 'героическом',
        [RaidDifficulty.MYTHIC]: 'эпохальном',
      };
      return difficultyTextVariants[this.difficulty];
    },
  },
});
</script>

<style scoped>
.guild-raid-bosses-stats {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
}

h1 {
  text-align: center;
}

.bosses {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
