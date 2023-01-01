<template>
  <RLink
    :to="link"
    class="the-footer-button"
    :class="{ [type]: true }"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import RLink from '@/components/reusable/RLink.vue';
import { DISCORD_LINK, YOUTUBE_LINK, TWITCH_LINK } from '@/constants';

enum TheFooterButtonType {
  DISCORD = 'discord',
  YOUTUBE = 'youtube',
  TWITCH = 'twitch',
}

export default defineComponent({
  components: { RLink },
  props: {
    type: {
      type: String as PropType<TheFooterButtonType>,
      required: true,
      validator(val: any) {
        return Object.values(TheFooterButtonType).includes(val);
      },
    },
  },
  data() {
    return {
      links: {
        [TheFooterButtonType.DISCORD]: DISCORD_LINK,
        [TheFooterButtonType.YOUTUBE]: YOUTUBE_LINK,
        [TheFooterButtonType.TWITCH]: TWITCH_LINK,
      },
    };
  },
  computed: {
    link() {
      return this.links[this.type];
    },
  },
});
</script>

<style scoped>
.the-footer-button {
  --size: 40px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: block;
}

.discord {
  background-image: url('@/assets/discord.png');
}

.youtube {
  background-image: url('@/assets/youtube.png');
}

.twitch {
  background-image: url('@/assets/twitch.png');
}
</style>
