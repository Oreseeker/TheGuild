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
import { RaidDifficulty } from '@/enums';

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
  padding: 25px;
  border-radius: 6px;
  border: 10px solid #333333;
  background-color: #464040;
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  font-family: Russo One, sans-serif;
  user-select: none;
  cursor: pointer;
  transition: all 100ms ease-out;
}

.raid-progress:hover {
  background-color: #4f4949;
}

.counter-wrapper {
  width: 140px;
  height: 140px;
  position: relative;
  background: url('@/assets/laurel_wreath.svg') no-repeat center;
  background-size: 136%;
  margin: 0 0 10px 0;
}

.counter {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
}

.label {
  color: white;
}
</style>
