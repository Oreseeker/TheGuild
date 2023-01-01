<template>
  <RModal
    class="guild-raid-bosses-stats-popup"
    v-bind="$attrs"
  >
    <div class="content">
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
          </ul>
        </div>
      </div>
    </div>
  </RModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RModal from '@/components/reusable/RModal.vue';
import RoleCounter from '@/components/RoleCounter.vue';
import { RaidRole } from '@/enums';
import RaidPlayer from '@/components/reusable/RaidPlayer.vue';

export default defineComponent({
  components: { RaidPlayer, RoleCounter, RModal },
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
  },
});
</script>

<style scoped>
.content {
  border-radius: 10px;
  width: 700px;
  padding: 20px;
  background-color: var(--popup-background);
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>
