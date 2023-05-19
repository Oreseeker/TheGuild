<template>
  <div class="about-us">
    <GuildIntro class="intro"/>
    <GuildDescription class="description"/>
    <GuildRaidBriefStats
      title="Наш прогресс в хранилище воплощений"
      :number-of-raid-bosses="8"
      @click:raid="onRaidDifficultyClick"
    />
    <div class="block">
      <Transition>
        <GuildRaidBossesStats
          v-if="activeStats"
          :key="activeStats.difficulty"
          :bosses="activeStats.bosses"
          :difficulty="activeStats.difficulty"
          class="raid-stats"
          ref="raidStats"
        />
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GuildIntro from '@/components/GuildIntro.vue';
import GuildRaidBriefStats from '@/components/GuildRaidBriefStats.vue';
import GuildRaidBossesStats from '@/components/GuildRaidBossesStats.vue';
import GuildDescription from '@/components/GuildDescription.vue';

import { normalEranog } from '@/data/sanctum_of_incarnation/normal/eranog';
import { normalTerros } from '@/data/sanctum_of_incarnation/normal/terros';
import { normalPrimalCouncil } from '@/data/sanctum_of_incarnation/normal/primal_council';
import { normalSennarth } from '@/data/sanctum_of_incarnation/normal/sennarth';
import { normalDathea } from '@/data/sanctum_of_incarnation/normal/dathea';
import { normalKurog } from '@/data/sanctum_of_incarnation/normal/kurog';
import { normalDiurna } from '@/data/sanctum_of_incarnation/normal/diurna';
import { normalRaszageth } from '@/data/sanctum_of_incarnation/normal/raszageth';

import { heroicEranog } from '@/data/sanctum_of_incarnation/heroic/eranog';
import { heroicTerros } from '@/data/sanctum_of_incarnation/heroic/terros';
import { heroicPrimalCouncil } from '@/data/sanctum_of_incarnation/heroic/primal_council';
import { heroicSennarth } from '@/data/sanctum_of_incarnation/heroic/sennarth';
import { heroicDathea } from '@/data/sanctum_of_incarnation/heroic/dathea';
import { heroicKurog } from '@/data/sanctum_of_incarnation/heroic/kurog';
import { heroicDiurna } from '@/data/sanctum_of_incarnation/heroic/diurna';
import { heroicRaszageth } from '@/data/sanctum_of_incarnation/heroic/raszageth';

import { mythicEranog } from '@/data/sanctum_of_incarnation/mythic/eranog';
import { mythicTerros } from '@/data/sanctum_of_incarnation/mythic/terros';
import { mythicPrimalCouncil } from '@/data/sanctum_of_incarnation/mythic/primal_council';
import { mythicSennarth } from '@/data/sanctum_of_incarnation/mythic/sennarth';
import { mythicDathea } from '@/data/sanctum_of_incarnation/mythic/dathea';
import { mythicKurog } from '@/data/sanctum_of_incarnation/mythic/kurog';
import { mythicDiurna } from '@/data/sanctum_of_incarnation/mythic/diurna';
import { mythicRaszageth } from '@/data/sanctum_of_incarnation/mythic/raszageth';

import { RaidDifficulty } from '@/enums';

type Bosses = any[];

type Raid = {
  bosses: Bosses;
}

type VaultOfIncarnatesStats = Record<RaidDifficulty, Raid>

type ActiveStats = {
  difficulty: RaidDifficulty;
  bosses: Bosses;
} | null;

export default defineComponent({
  components: {
    GuildIntro,
    GuildRaidBossesStats,
    GuildRaidBriefStats,
    GuildDescription,
  },
  data() {
    const vaultOfIncarnatesStats: VaultOfIncarnatesStats = {
      [RaidDifficulty.NORMAL]: {
        bosses: [
          normalEranog,
          normalTerros,
          normalPrimalCouncil,
          normalSennarth,
          normalDathea,
          normalKurog,
          normalDiurna,
          normalRaszageth,
        ],
      },
      [RaidDifficulty.HEROIC]: {
        bosses: [
          heroicEranog,
          heroicTerros,
          heroicPrimalCouncil,
          heroicSennarth,
          heroicDathea,
          heroicKurog,
          heroicDiurna,
          heroicRaszageth,
        ],
      },
      [RaidDifficulty.MYTHIC]: {
        bosses: [
          mythicEranog,
          mythicTerros,
          mythicPrimalCouncil,
          mythicSennarth,
          mythicDathea,
          mythicKurog,
          mythicDiurna,
          mythicRaszageth,
        ],
      },
    };

    const activeStats: ActiveStats = null;

    return {
      activeStats,
      vaultOfIncarnatesStats,
    };
  },
  methods: {
    setActiveStats() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.activeStats = {
        difficulty: RaidDifficulty.NORMAL,
        bosses: this.vaultOfIncarnatesStats.normal.bosses,
      };
    },
    onRaidDifficultyClick(difficulty: RaidDifficulty) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.activeStats = {
        difficulty,
        bosses: this.vaultOfIncarnatesStats[difficulty].bosses,
      };
      const raidStatsComponent = this.$refs.raidStats as typeof GuildRaidBossesStats;
      const raidStatsEl = raidStatsComponent.$el as HTMLElement;
      raidStatsEl.scrollIntoView();
    },
  },
  created() {
    document.title = 'Зверинец Владыки';
  },
  mounted() {
    this.setActiveStats();
  },
});
</script>

<style scoped>
.intro {
  margin: 0 0 40px 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 100ms linear;
}

.block {
  position: relative;
  width: 100%;
  display: flex;
  overflow: hidden;
}

.raid-stats {
  /*position: absolute;*/
  min-width: 100%;
}

.raid-stats:not(:first-child) {
  transform: translate(-100%);
}

.description {
  margin: 0 0 40px 0;
}
</style>
F@
