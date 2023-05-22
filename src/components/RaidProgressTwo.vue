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

import blueFrame from '@/assets/blue_frame.svg';
import redFrame from '@/assets/laurel_wreath.svg';

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
    frameColor: {
      type: String as PropType<'red' | 'blue'>,
      required: true,
    },
  },
  data() {
    return {
      frames: {
        red: {
          image: redFrame,
          size: '136%',
          verticalShift: 'center',
        },
        blue: {
          image: blueFrame,
          size: '96%',
          verticalShift: '-6px',
        },
      },
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
    frame() {
      return this.frames[this.frameColor];
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
  font-size: 1.5rem;
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
  /*background: url('@/assets/laurel_wreath.svg') no-repeat center;*/
  background-image: v-bind(`url('${frame.image}')`);
  background-repeat: no-repeat;
  background-position: center v-bind(frame.verticalShift);
  background-size: v-bind(frame.size);
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

@media screen and (max-width: 768px) {
  .raid-progress {
    width: 200px;
    font-size: 1rem;
  }

  .counter-wrapper {
    width: 100px;
    height: 100px;
  }

  .counter {
    top: 44px;
  }
}

@media screen and (max-width: 600px) {
  .raid-progress {
    width: 200px;
    font-size: 0.8rem;
  }

  .counter-wrapper {
    width: 80px;
    height: 80px;
  }

  .counter {
    top: 36px;
  }
}
</style>
