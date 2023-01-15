<template>
  <RModal
    class="guild-raid-bosses-stats-popup"
    v-bind="$attrs"
  >
    <div class="content">
      <div class="top">
        <div class="close" @click="$emit('update:modelValue')"/>
      </div>
      <div class="main">
        <img :src="boss.img" :alt="boss.name" class="boss-image">
        <h1 class="title">
          {{ boss.name }}
        </h1>
        <div class="defeated">
          Босс побеждён {{ datetime }} составом
        </div>
        <div class="setup">
          <RoleCounter
            v-for="(role, index) in roles"
            :key="index"
            :counter="role.counter"
            :role="role.title"
            :number-of-pugs="role.numberOfPugs"
          />
        </div>
        <RLink :to="boss.warcraftLogsLink" class="log-link">Лог боя на Warcraft Logs</RLink>
        <div class="participants">
          <div class="tanks">
            <h3>Танки:</h3>
            <ul class="participants-items">
              <li
                v-for="(tank, index) in tanks"
                :key="`tank-${index}`"
              >
                <RaidPlayer
                  :player-class="tank.class"
                  :player-spec="tank.spec"
                  :name="tank.name"
                  show-icon
                />
              </li>
              <li v-if="boss?.pugs?.tanks">
                + {{ numberOfPeopleText(boss.pugs.tanks) }} не из гильдии
              </li>
            </ul>
          </div>
          <div class="healers">
            <h3>Целители:</h3>
            <ul class="participants-items">
              <li
                v-for="(healer, index) in healers"
                :key="`healer-${index}`"
              >
                <RaidPlayer
                  :player-class="healer.class"
                  :player-spec="healer.spec"
                  :name="healer.name"
                  show-icon
                />
              </li>
              <li v-if="boss?.pugs?.healers">
                + {{ numberOfPeopleText(boss.pugs.healers) }} не из гильдии
              </li>
            </ul>
          </div>
          <div class="dps">
            <h3>Бойцы:</h3>
            <ul class="participants-items">
              <li
                v-for="(dps, index) in dps"
                :key="`dps-${index}`"
              >
                <RaidPlayer
                  :player-class="dps.class"
                  :player-spec="dps.spec"
                  :name="dps.name"
                  show-icon
                />
              </li>
              <li v-if="boss?.pugs?.dps">
                + {{ numberOfPeopleText(boss.pugs.dps) }} не из гильдии
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </RModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RModal from '@/components/reusable/RModal.vue';
import RoleCounter from '@/components/RoleCounter.vue';
import RLink from '@/components/reusable/RLink.vue';
import { RaidRole } from '@/enums';
import RaidPlayer from '@/components/reusable/RaidPlayer.vue';

export default defineComponent({
  components: {
    RaidPlayer,
    RoleCounter,
    RModal,
    RLink,
  },
  props: {
    boss: {
      type: Object,
      required: false,
    },
  },
  computed: {
    tanks() {
      return this.boss!.participants.filter((item: any) => item.role === RaidRole.TANK);
    },
    healers() {
      return this.boss!.participants.filter((item: any) => item.role === RaidRole.HEALER);
    },
    dps() {
      return this.boss!.participants.filter((item: any) => item.role === RaidRole.DPS);
    },
    roles() {
      return [
        {
          title: RaidRole.TANK,
          counter: this.tanks.length,
          numberOfPugs: this.boss?.pugs?.tanks,
        },
        {
          title: RaidRole.HEALER,
          counter: this.healers.length,
          numberOfPugs: this.boss?.pugs?.healers,
        },
        {
          title: RaidRole.DPS,
          counter: this.dps.length,
          numberOfPugs: this.boss?.pugs?.dps,
        },
      ];
    },
    datetime() {
      return this.displayDatetime(this.boss!.datetime);
    },
  },
  methods: {
    displayDatetime(datetime: string, emptyDatetimeLabel = '') {
      if (!datetime) return emptyDatetimeLabel;
      const date = new Date(datetime);
      const DateTimeOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return new Intl.DateTimeFormat('ru', DateTimeOptions).format(date);
    },
    numberOfPeopleText(number: number) {
      if ([2,3,4].includes(number)) return `${number} человека`;
      return `${number} человек`;
    },
  },
});
</script>

<style scoped>
.content {
  border-radius: 10px;
  width: 700px;
  background-color: var(--popup-background);
  display: flex;
  flex-direction: column;
  min-height: 0;
  max-height: 90vh;
  flex-grow: 1;
}

.main {
  padding: 20px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}

.boss-image {
  margin: 0 0 20px 0;
  width: 100%;
}

.defeated {
  margin: 0 0 10px 0;
}

.title {
  margin: 0 0 20px 0;
}

.setup {
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  gap: 20px;
}

.participants {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.participants-items {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.log-link {
  margin: 20px 0;
  transition: all 100ms linear;
}

.log-link:hover {
  color: lightgray;
}

.close {
  background: url('@/assets/close.svg') no-repeat center;
  width: 20px;
  height: 20px;
  background-size: cover;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.top {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid var(--footer-top-border);
}

@media screen and (max-width: 768px) {
  .content {
    width: 100%;
    height: 100vh;
    max-height: initial;
    padding: 0 0 20px 0;
  }
}

@media screen and (max-width: 600px) {
  .top {
    padding: 20px;
  }
}
</style>
