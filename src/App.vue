<template>
  <div class="app" id="app">
    <div class="wrapper">
      <GuildRaidBriefStats
        title="Хранилище Воплощений"
        :number-of-raid-bosses="8"
      />
      <GuildRaidBossesStats
        :stats="vaultOfIncarnatesStats"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GuildRaidBriefStats from '@/components/GuildRaidBriefStats.vue';
import GuildRaidBossesStats from '@/components/GuildRaidBossesStats.vue';
import {
  GameClass , VaultOfIncaratesBosses, PriestSpec, RaidRole,
} from '@/enums';

import eranogImage from '@/assets/bosses/eranog.png';
import terrosImage from '@/assets/bosses/terros.png';
import councilImage from '@/assets/bosses/council.png';
import sennarthImage from '@/assets/bosses/sennarth.png';
import datheaImage from '@/assets/bosses/dathea.png';
import kurogImage from '@/assets/bosses/kurog.png';
import diurnaImage from '@/assets/bosses/diurna.png';
import raszagethImage from '@/assets/bosses/raszageth.png';

export default defineComponent({
  components: {
    GuildRaidBossesStats,
    GuildRaidBriefStats,
  },
  data() {
    return {
      vaultOfIncarnatesStats: {
        bosses: [
          {
            name: VaultOfIncaratesBosses.ERANOG,
            img: eranogImage,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PriestSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.TERROS,
            img: terrosImage,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PriestSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.PRIMAL_COUNCIL,
            img: councilImage,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PriestSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.SENNARTH,
            img: sennarthImage,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PriestSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.DATHEA,
            img: datheaImage,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PriestSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.KUROG,
            img: kurogImage,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PriestSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.DIURNA,
            img: diurnaImage,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PriestSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.RASZAGETH,
            img: raszagethImage,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PriestSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
        ],
      },
    };
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
  justify-content: center;
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
</style>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  width: 100%;
}
</style>
