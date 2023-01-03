<template>
  <div class="photo-carousel">
    <div
      class="navigation-control previous"
      :class="{ disabled: disableNavigation }"
      @click="onPreviousClick"
    />
    <div class="photo">
      <Transition
        :name="transitionName"
        @before-enter="onBeforeEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @after-leave="onAfterLeave"
      >
        <img :src="activePhoto.url" alt="photo" :key="activePhoto.url">
      </Transition>
    </div>
    <div
      class="navigation-control next"
      :class="{ disabled: disableNavigation }"
      @click="onNextClick"
    />
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
      disableNavigation: false,
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
    onBeforeEnter() {
      this.disableNavigation = true;
    },
    onAfterEnter() {
      this.disableNavigation = false;
    },
    onBeforeLeave() {
      this.disableNavigation = true;
    },
    onAfterLeave() {
      this.disableNavigation = false;
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
  --photo-width: 500px;
  --photo-height: 300px;
  display: flex;
  align-items: center;
  gap: 10px;
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
  transition: left 400ms linear;
}

.disabled {
  pointer-events: none;
}

.navigation-control {
  background: url('@/assets/chevron-right.svg') no-repeat center;
  background-size: 150%;
  width: 30px;
  height: 30px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.previous {
  transform: rotate(-180deg);
}
</style>
