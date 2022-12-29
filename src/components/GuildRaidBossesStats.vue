<template>
  <div class="guild-raid-bosses-stats">
    <h1>Побеждённые боссы</h1>
    <div class="bosses">
      <RaidBoss
        v-for="(boss, index) in stats.bosses"
        :key="index"
        :boss="boss"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RaidBossProgress from '@/components/RaidBossProgress.vue';
import RaidBoss from '@/components/RaidBoss.vue';
import GuildRaidBossesStatsPopup from '@/components/reusable/GuildRaidBossesStatsPopup.vue';

export default defineComponent({
  // eslint-disable-next-line vue/no-unused-components
  components: { GuildRaidBossesStatsPopup, RaidBoss, RaidBossProgress },
  props: {
    stats: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.guild-raid-bosses-stats {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.bosses {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
