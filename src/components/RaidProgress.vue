<template>
  <div class="raid-progress">
    <div class="counter-wrapper">
      <div class="counter">
        {{ count }} / {{ maxCount }}
      </div>
    </div>
    <div class="label">
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RaidDifficulty, RaidRole } from '@/enums';

export default defineComponent({
  props: {
    difficulty: {
      type: String as PropType<RaidDifficulty>,
      required: true,
      validator(val: any) {
        return Object.values(RaidDifficulty).includes(val);
      },
    },
    count: {
      type: Number,
      required: true,
    },
    maxCount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      difficulties: {
        normal: {
          label: 'Обычный',
        },
        heroic: {
          label: 'Героический',
        },
        mythic: {
          label: 'Эпохальный',
        },
      },
    };
  },
  computed: {
    label() {
      return this.difficulties[this.difficulty].label.toUpperCase();
    },
  },
});
</script>

<style scoped>
.raid-progress {
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  font-family: Russo One, sans-serif;
}

.counter-wrapper {
  width: 140px;
  height: 140px;
  position: relative;
  background: url('@/assets/laurel_wreath_gold.svg') no-repeat center;
  background-size: cover;
  margin: 0 0 16px 0;
}

.counter {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.label {
  display: flex;
  background:
    linear-gradient(90deg, rgba(139,69,19,1) 0%, rgba(205,158,124,1) 51%, rgba(139,69,19,1) 100%);
  color: white;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid #3d1804;
}
</style>
