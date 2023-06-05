<template>
  <div class="about-us">
    <GuildIntro class="intro"/>
    <GuildDescription class="description"/>
    <GuildRaidBriefStats
      title="Наш прогресс в хранилище воплощений"
      :number-of-raid-bosses="8"
      @click:raid="onVaultRaidDifficultyChange"
      frame-color="red"
      :background-image="vaultBackgroundImage"
      :raid-progress-items="vaultOfIncarnatesShortStats"
    />
    <div class="block">
      <Transition>
        <GuildRaidBossesStats
          v-if="vaultActiveStats"
          :key="vaultActiveStats.difficulty"
          :bosses="vaultActiveStats.bosses"
          :difficulty="vaultActiveStats.difficulty"
          class="raid-stats"
          ref="vaultRaidStats"
        />
      </Transition>
    </div>
    <GuildRaidBriefStats
      title="Наш прогресс в Аберрии"
      :number-of-raid-bosses="9"
      @click:raid="onAberiusRaidDifficultyChange"
      frame-color="blue"
      :background-image="aberrusBackgroundImage"
      :raid-progress-items="aberrusShortStats"
    />
    <div class="block">
      <Transition>
        <GuildRaidBossesStats
          v-if="aberiusActiveStats"
          :key="aberiusActiveStats.difficulty"
          :bosses="aberiusActiveStats.bosses"
          :difficulty="aberiusActiveStats.difficulty"
          class="raid-stats"
          ref="aberrusRaidStats"
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
import { normalAmalgamationChamber } from '@/data/aberius/normal/amalgamation_chamber';
import { normalKazzara } from '@/data/aberius/normal/kazzara';
import { normalZaqali } from '@/data/aberius/normal/zaqali';
import { normalSarkareth } from '@/data/aberius/normal/sarkareth';
import { normalNeltharion } from '@/data/aberius/normal/neltharion';
import { normalMagmorax } from '@/data/aberius/normal/magmorax';
import { normalZskarn } from '@/data/aberius/normal/zskarn';
import { normalRashok } from '@/data/aberius/normal/rashok';
import { normalForgottenExperiments } from '@/data/aberius/normal/forgotten_experiments';
import { heroicSarkareth } from '@/data/aberius/heroic/sarkareth';
import { heroicNeltharion } from '@/data/aberius/heroic/neltharion';
import { heroicMagmorax } from '@/data/aberius/heroic/magmorax';
import { heroicZskarn } from '@/data/aberius/heroic/zskarn';
import { heroicRashok } from '@/data/aberius/heroic/rashok';
import { heroicZaqali } from '@/data/aberius/heroic/zaqali';
import { heroicForgottenExperiments } from '@/data/aberius/heroic/forgotten_experiments';
import { heroicAmalgamationChamber } from '@/data/aberius/heroic/amalgamation_chamber';
import { heroicKazzara } from '@/data/aberius/heroic/kazzara';
import { mythicKazzara } from '@/data/aberius/mythic/kazzara';
import { mythicAmalgamationChamber } from '@/data/aberius/mythic/amalgamation_chamber';
import { mythicForgottenExperiments } from '@/data/aberius/mythic/forgotten_experiments';
import { mythicZaqali } from '@/data/aberius/mythic/zaqali';
import { mythicRashok } from '@/data/aberius/mythic/rashok';
import { mythicZskarn } from '@/data/aberius/mythic/zskarn';
import { mythicMagmorax } from '@/data/aberius/mythic/magmorax';
import { mythicNeltharion } from '@/data/aberius/mythic/neltharion';
import { mythicSarkareth } from '@/data/aberius/mythic/sarkareth';

import vaultBackgroundImage from '@/assets/incarnation.webp';
import aberrusBackgroundImage from '@/assets/aberrus.webp';

type Bosses = any[];

type Raid = {
  bosses: Bosses;
}

type RaidStats = Record<RaidDifficulty, Raid>

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
    const vaultOfIncarnatesStats: RaidStats = {
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

    const aberiusStats: RaidStats = {
      [RaidDifficulty.NORMAL]: {
        bosses: [
          normalKazzara,
          normalAmalgamationChamber,
          normalForgottenExperiments,
          normalZaqali,
          normalRashok,
          normalZskarn,
          normalMagmorax,
          normalNeltharion,
          normalSarkareth,
        ],
      },
      [RaidDifficulty.HEROIC]: {
        bosses: [
          heroicKazzara,
          heroicAmalgamationChamber,
          heroicForgottenExperiments,
          heroicZaqali,
          heroicRashok,
          heroicZskarn,
          heroicMagmorax,
          heroicNeltharion,
          heroicSarkareth,
        ],
      },
      [RaidDifficulty.MYTHIC]: {
        bosses: [
          mythicKazzara,
          mythicAmalgamationChamber,
          mythicForgottenExperiments,
          mythicZaqali,
          mythicRashok,
          mythicZskarn,
          mythicMagmorax,
          mythicNeltharion,
          mythicSarkareth,
        ],
      },
    };

    const vaultActiveStats: ActiveStats | null = null;
    const aberiusActiveStats: ActiveStats | null = null;

    const vaultOfIncarnatesShortStats = [
      {
        difficulty: RaidDifficulty.NORMAL,
        count: 8,
      },
      {
        difficulty: RaidDifficulty.HEROIC,
        count: 7,
      },
      {
        difficulty: RaidDifficulty.MYTHIC,
        count: 1,
      },
    ];

    const aberrusShortStats = [
      {
        difficulty: RaidDifficulty.NORMAL,
        count: 9,
      },
      {
        difficulty: RaidDifficulty.HEROIC,
        count: 5,
      },
      {
        difficulty: RaidDifficulty.MYTHIC,
        count: 0,
      },
    ];

    return {
      vaultActiveStats,
      vaultOfIncarnatesStats,
      aberiusActiveStats,
      aberiusStats,
      vaultBackgroundImage,
      aberrusBackgroundImage,
      vaultOfIncarnatesShortStats,
      aberrusShortStats,
    };
  },
  methods: {
    setActiveStats() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.vaultActiveStats = {
        difficulty: RaidDifficulty.NORMAL,
        bosses: this.vaultOfIncarnatesStats.normal.bosses,
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.aberiusActiveStats = {
        difficulty: RaidDifficulty.NORMAL,
        bosses: this.aberiusStats.normal.bosses,
      };
    },
    onVaultRaidDifficultyChange(difficulty: RaidDifficulty) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.vaultActiveStats = {
        difficulty,
        bosses: this.vaultOfIncarnatesStats[difficulty].bosses,
      };
      const raidStatsComponent = this.$refs.vaultRaidStats as typeof GuildRaidBossesStats;
      const raidStatsEl = raidStatsComponent.$el as HTMLElement;
      raidStatsEl.scrollIntoView();
    },
    onAberiusRaidDifficultyChange(difficulty: RaidDifficulty) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.aberiusActiveStats = {
        difficulty,
        bosses: this.aberiusStats[difficulty].bosses,
      };

      console.log('this.aberiusActiveStats', this.aberiusActiveStats);
      const raidStatsComponent = this.$refs.aberrusRaidStats as typeof GuildRaidBossesStats;
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
  min-width: 100%;
}

.raid-stats:not(:first-child) {
  transform: translate(-100%);
}

.description {
  margin: 0 0 40px 0;
}
</style>
