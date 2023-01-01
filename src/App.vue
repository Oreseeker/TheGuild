<template>
  <div class="app" id="app">
    <div class="wrapper">
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
          />
        </Transition>
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/assets/css/global.css';
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
import TheFooter from '@/components/TheFooter/TheFooter.vue';

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
    TheFooter,
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
  overflow: auto;
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
  font-size: 40px;
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
.intro {
  margin: 0 0 40px 0;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  width: 100%;
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
}

.raid-stats:not(:first-child) {
  margin-left: -100%;
}

.description {
  margin: 0 0 40px 0;
}
</style>
