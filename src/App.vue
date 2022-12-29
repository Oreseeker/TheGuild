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
  GameClass,
  VaultOfIncaratesBosses,
  RaidRole,
  PlayerSpec,
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
            defeated: true,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PlayerSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.TERROS,
            img: terrosImage,
            defeated: true,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PlayerSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.PRIMAL_COUNCIL,
            img: councilImage,
            defeated: true,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PlayerSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.SENNARTH,
            img: sennarthImage,
            defeated: true,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PlayerSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.DATHEA,
            img: datheaImage,
            defeated: true,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PlayerSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.KUROG,
            img: kurogImage,
            defeated: true,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PlayerSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.DIURNA,
            img: diurnaImage,
            defeated: true,
            datetime: '2022-12-25T16:46:00.000Z',
            participants: [
              {
                name: 'Мантагро',
                class: GameClass.DEATH_KNIGHT,
                spec: PlayerSpec.BLOOD,
                role: RaidRole.TANK,
              },
              {
                name: 'Маггрубер',
                class: GameClass.PALADIN,
                spec: PlayerSpec.PROTECTION,
                role: RaidRole.TANK,
              },
              {
                name: 'Чарджкиса',
                class: GameClass.WARRIOR,
                spec: PlayerSpec.PROTECTION,
                role: RaidRole.TANK,
              },
              {
                name: 'Аригай',
                class: GameClass.DEATH_KNIGHT,
                spec: PlayerSpec.FROST,
                role: RaidRole.DPS,
              },
              {
                name: 'Макгрувер',
                class: GameClass.DEATH_KNIGHT,
                spec: PlayerSpec.FROST,
                role: RaidRole.DPS,
              },
              {
                name: 'Илаз',
                class: GameClass.DEMON_HUNTER,
                spec: PlayerSpec.HAVOC,
                role: RaidRole.DPS,
              },
              {
                name: 'Фаеван',
                class: GameClass.EVOKER,
                spec: PlayerSpec.DEVASTATION,
                role: RaidRole.DPS,
              },
              {
                name: 'Грушонычь',
                class: GameClass.HUNTER,
                spec: PlayerSpec.MARKSMANSHIP,
                role: RaidRole.DPS,
              },
              {
                name: 'Добрыйклыкач',
                class: GameClass.HUNTER,
                spec: PlayerSpec.BEAST_MASTER,
                role: RaidRole.DPS,
              },
              {
                name: 'Кавадор',
                class: GameClass.HUNTER,
                spec: PlayerSpec.BEAST_MASTER,
                role: RaidRole.DPS,
              },
              {
                name: 'Кхуун',
                class: GameClass.HUNTER,
                spec: PlayerSpec.BEAST_MASTER,
                role: RaidRole.DPS,
              },
              {
                name: 'Уайлен',
                class: GameClass.HUNTER,
                spec: PlayerSpec.MARKSMANSHIP,
                role: RaidRole.DPS,
              },
              {
                name: 'Элуизка',
                class: GameClass.HUNTER,
                spec: PlayerSpec.BEAST_MASTER,
                role: RaidRole.DPS,
              },
              {
                name: 'Калючечка',
                class: GameClass.MAGE,
                spec: PlayerSpec.FIRE,
                role: RaidRole.DPS,
              },
              {
                name: 'Визериз',
                class: GameClass.MONK,
                spec: PlayerSpec.WINDWALKER,
                role: RaidRole.DPS,
              },
              {
                name: 'Моргиус',
                class: GameClass.PALADIN,
                spec: PlayerSpec.RETRIBUTION,
                role: RaidRole.DPS,
              },
              {
                name: 'Йорданиэль',
                class: GameClass.PRIEST,
                spec: PlayerSpec.SHADOW,
                role: RaidRole.DPS,
              },
              {
                name: 'Адастрис',
                class: GameClass.ROGUE,
                spec: PlayerSpec.ASSASINATION,
                role: RaidRole.DPS,
              },
              {
                name: 'Правнучка',
                class: GameClass.SHAMAN,
                spec: PlayerSpec.ELEMENTAL,
                role: RaidRole.DPS,
              },
              {
                name: 'Блекфлэймх',
                class: GameClass.WARLOCK,
                spec: PlayerSpec.AFFLICTION,
                role: RaidRole.DPS,
              },
              {
                name: 'Эрикбладс',
                class: GameClass.WARRIOR,
                spec: PlayerSpec.FURY,
                role: RaidRole.DPS,
              },
              {
                name: 'Диклонот',
                class: GameClass.PALADIN,
                spec: PlayerSpec.HOLY,
                role: RaidRole.HEALER,
              },
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PlayerSpec.DISCIPLINE,
                role: RaidRole.HEALER,
              },
              {
                name: 'Яшермамочка',
                class: GameClass.EVOKER,
                spec: PlayerSpec.PRESERVATION,
                role: RaidRole.HEALER,
              },
              {
                name: 'Дримтэйл',
                class: GameClass.SHAMAN,
                spec: PlayerSpec.RESOTRATION,
                role: RaidRole.HEALER,
              },
            ],
          },
          {
            name: VaultOfIncaratesBosses.RASZAGETH,
            img: raszagethImage,
            defeated: false,
            participants: [
              {
                name: 'Мурдра',
                class: GameClass.PRIEST,
                spec: PlayerSpec.DISCIPLINE,
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
