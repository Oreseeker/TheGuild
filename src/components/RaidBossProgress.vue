<template>
  <div class="raid-boss-progress">
    <RaidBoss
      :img="boss.img"
      :name="boss.name"
    />
    <div class="participants">
      <RoleCounter
        v-for="(role, index) in roles"
        :key="index"
        :counter="role.counter"
        :role="role.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RaidBoss from '@/components/RaidBoss.vue';
import RoleCounter from '@/components/RoleCounter.vue';
import { RaidRole } from '@/enums';

export default defineComponent({
  // eslint-disable-next-line vue/no-unused-components
  components: { RoleCounter, RaidBoss },
  props: {
    boss: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      roles: [
        {
          counter: 2,
          title: RaidRole.TANK,
        },
        {
          counter: 4,
          title: RaidRole.HEALER,
        },
        {
          counter: 14,
          title: RaidRole.DPS,
        },
      ],
    };
  },
});
</script>

<style scoped>
.raid-boss-progress {
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
