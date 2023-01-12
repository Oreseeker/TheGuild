<template>
  <div class="standard-block guild-description">
    <h1>О нас</h1>
    <p>
      Основная цель гильдии - создание дружного
      коллектива. Мы считаем, что сплоченная команда - залог успешной и приятной игры.
      Мы рады игрокам любого уровня. Новичкам мы готовы помочь
      советом и делом, а опытных игроков мы будем рады пригласить на освоение более сложного
      контента. Гильдия сосредоточена на  PVE контенте (рейды, ключи,
      старые рейды). Раз в месяц проводятся развлекательные мероприятия с призовыми местами:
      битва трансмогов, прятки, гильдейский PVP-турнир. Приглашаем тебя вступить в наши ряды!
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  },
});
</script>

<style scoped>
.guild-description {
  width: 100%;
  /*background: url('@/assets/throneroom.jpg') no-repeat center;*/
  background-size: 100%;
  min-height: 0;
  height: auto;
}

p {
  font-size: 18px;
}
</style>
