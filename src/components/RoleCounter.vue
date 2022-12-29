<template>
  <div class="role-counter">
    <div
      class="role"
      :class="{[this.role]: true}"
    />
    <div class="number-of-role-participants">
      {{ counter }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RaidRole } from '@/enums';

export default defineComponent({
  props: {
    role: {
      type: String,
      required: true,
      validator(val: any) {
        return Object.values(RaidRole).includes(val);
      },
    },
    counter: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
.role-counter {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
}

.number-of-role-participants {
  width: 24px;
  min-width: 24px;
}

.role {
  --background-image-size: 40px;
  width: var(--background-image-size);
  height: var(--background-image-size);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.role.tank {
  background-image: url('@/assets/roles/tank.png');
}

.role.healer {
  background-image: url('@/assets/roles/healer.png');
}

.role.dps {
  background-image: url('@/assets/roles/damage.png');
}
</style>
