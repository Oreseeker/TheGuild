<template>
  <div class="guild-raid-stats">
    <h1 class="title">{{ title.toUpperCase() }}</h1>
    <div class="progress">
      <RaidProgressTwo
        v-for="(item, index) in raidProgressItems"
        :key="index"
        :difficulty="item.difficulty"
        :count="item.count"
        :max-count="numberOfRaidBosses"
        @click="$emit('click:raid', item.difficulty)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import RaidProgress from '@/components/RaidProgress.vue';
import RaidProgressTwo from '@/components/RaidProgressTwo.vue';
import { RaidDifficulty } from '@/enums';

export default defineComponent({
  components: {
    // RaidProgress,
    RaidProgressTwo,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    numberOfRaidBosses: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      raidProgressItems: [
        {
          difficulty: RaidDifficulty.NORMAL,
          count: 8,
        },
        {
          difficulty: RaidDifficulty.HEROIC,
          count: 7,
        },
        {
          difficulty: RaidDifficulty.MYTHIC,
          count: 0,
        },
      ],
    };
  },
});
</script>

<style scoped>
.guild-raid-stats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  --opacity: 0.25;
  background: linear-gradient(90deg, rgba(0,0,0, var(--opacity)) 0%,
  rgba(0,0,0, var(--opacity)) 100%),
  url(@/assets/incarnation.jpg) no-repeat center;
  background-size: cover;
  max-width: 1440px;
  width: 100%;
  height: var(--standard-block-height);
  min-height: var(--standard-block-height);
  padding: 0 20px;
}

.title {
  text-align: center;
  margin: 0 0 50px 0;
}

.progress {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 1.5rem;
  }
}
</style>
