<template>
  <div class="photo-carousel">
    <div
      class="previos"
      @click="onPreviousClick"
    >
      left
    </div>
    <div class="photo">
      <Transition :name="transitionName">
        <img :src="activePhoto.url" alt="photo" :key="activePhoto.url">
      </Transition>
    </div>
    <div
      class="next"
      @click="onNextClick"
    >
      right
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import nathriaImage from '@/assets/nathria.png';
import ironForge from '@/assets/ironforge.jpg';

enum PhotoCarouselTransitionName {
  NEXT = 'next',
  PREVIOUS = 'previous',
}

export default defineComponent({
  data() {
    return {
      photos: [
        nathriaImage,
        ironForge,
      ],
      activePhoto: {
        index: 0,
        url: '',
      },
      transitionName: PhotoCarouselTransitionName.NEXT,
    };
  },
  methods: {
    onPreviousClick() {
      this.transitionName = PhotoCarouselTransitionName.PREVIOUS;
      const { index } = this.activePhoto;
      const newIndex = index === 0 ? this.photos.length - 1 : index - 1;
      const url = this.photos[newIndex];
      this.activePhoto = { index: newIndex, url };
    },
    onNextClick() {
      this.transitionName = PhotoCarouselTransitionName.NEXT;
      const { index } = this.activePhoto;
      const newIndex = index === this.photos.length - 1 ? 0 : index + 1;
      const url = this.photos[newIndex];
      this.activePhoto = { index: newIndex, url };
    },
  },
  created() {
    // eslint-disable-next-line prefer-destructuring
    this.activePhoto.url = this.photos[0];
  },
});
</script>

<style scoped>
.photo-carousel {
  --photo-width: 200px;
  --photo-height: 100px;
  display: flex;
  align-items: center;
}

.photo {
  width: var(--photo-width);
  height: var(--photo-height);
  overflow: hidden;
  position: relative;
}

img {
  position: absolute;
  min-width: var(--photo-width);
  width: var(--photo-width);
  height: var(--photo-height);
}

.next-enter-from,
.previous-leave-to {
  left: var(--photo-width);
}

.next-enter-to {
  left: 0;
}

.next-leave-to,
.previous-enter-from {
  left: calc(-1 * var(--photo-width));
}

.next-leave-from,
.previous-leave-from,
.previous-enter-to {
  left: 0;
}

.next-enter-active,
.next-leave-active,
.previous-enter-active,
.previous-leave-active {
  transition: left 1400ms linear;
}
</style>
