<template>
    <div class="standard-block guild-raid-bosses-stats">
      <h1>Побеждённые боссы в {{ difficultyText }} режиме</h1>
      <div class="bosses">
        <RaidBoss
          v-for="(boss, index) in bosses"
          :key="index"
          :boss="boss"
        />
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import RaidBossProgress from '@/components/RaidBossProgress.vue';
import RaidBoss from '@/components/RaidBoss.vue';
import GuildRaidBossesStatsPopup from '@/components/reusable/GuildRaidBossesStatsPopup.vue';
import { RaidDifficulty } from '@/enums';

export default defineComponent({
  // eslint-disable-next-line vue/no-unused-components
  components: { GuildRaidBossesStatsPopup, RaidBoss, RaidBossProgress },
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
}

.bosses {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
