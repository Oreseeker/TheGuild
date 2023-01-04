<template>
  <RLink
    :to="playerProfileURL"
    class="raid-player"
    :class="{ [playerClass]: true, [playerSpec]: true }"
  >
    <div
      v-if="showIcon"
      class="icon"
    />
    <div
      class="name"
    >
      {{ name }}
    </div>
  </RLink>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { GameClass, PlayerSpec } from '@/enums';
import { BASE_PLAYER_URL } from '@/constants';
import RLink from '@/components/reusable/RLink.vue';

export default defineComponent({
  components: { RLink },
  props: {
    name: {
      type: String,
      required: true,
    },
    playerClass: {
      type: String as PropType<GameClass>,
      required: true,
      validator(val: any) {
        return Object.values(GameClass).includes(val);
      },
    },
    playerSpec: {
      type: String as PropType<PlayerSpec>,
      required: true,
      validator(val: any) {
        return Object.values(PlayerSpec).includes(val);
      },
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    playerProfileURL() {
      console.log('BASE_PLAYER_URL', BASE_PLAYER_URL);
      return new URL(this.name, BASE_PLAYER_URL).href;
    },
  },
});
</script>

<style scoped>
.raid-player {
  display: flex;
  text-decoration: none;
  gap: 5px;
}

.icon {
  width: 20px;
  height: 20px;
  background-position: center;
  background-size: cover;
}

.death_knight .name {
  color: rgb(196, 30, 58);
}

.paladin .name {
  color: rgb(244, 140, 186);
}

.shaman .name {
  color: rgb(0, 112, 221)
}

.priest .name {
  color: rgb(255, 255, 255);
}

.warlock .name {
  color: rgb(135, 136, 238);
}

.demon_hunter .name {
  color: rgb(163, 48, 201);
}

.mage .name {
  color: rgb(63, 199, 235);
}

.warrior .name {
  color: rgb(198, 155, 109);
}

.hunter .name {
  color: rgb(170, 211, 114);
}

.rogue .name {
  color: rgb(255, 244, 104);
}

.druid .name {
  color: rgb(255, 124, 10);
}

.evoker .name {
  color: rgb(51, 147, 127);
}

.monk .name {
  color: rgb(0, 255, 152);
}

.discipline .icon {
  background-image: url('@/assets/specs/priest-discipline.png');
}

.priest.holy .icon {
  background-image: url('@/assets/specs/priest-holy.png');
}

.shadow .icon {
  background-image: url('@/assets/specs/priest-shadow.png');
}

.paladin.holy .icon {
  background-image: url('@/assets/specs/paladin-holy.png');
}

.retribution .icon {
  background-image: url('@/assets/specs/paladin-retribution.png');
}

.paladin.protection .icon {
  background-image: url('@/assets/specs/paladin-protection.png');
}

.warrior.protection .icon {
  background-image: url('@/assets/specs/warrior-protection.png');
}

.warrior.arms .icon {
  background-image: url('@/assets/specs/warrior-arms.png');
}

.warrior.fury .icon {
  background-image: url('@/assets/specs/warrior-fury.png');
}

.demon_hunter.havoc .icon {
  background-image: url('@/assets/specs/demon-hunter-havoc.png');
}

.demon_hunter.vengeance .icon {
  background-image: url('@/assets/specs/demon-hunter-vengeance.png');
}

.mage.arcane .icon {
  background-image: url('@/assets/specs/mage-arcane.png');
}

.mage.fire .icon {
  background-image: url('@/assets/specs/mage-fire.png');
}

.mage.frost .icon {
  background-image: url('@/assets/specs/mage-frost.png');
}

.warlock.affliction .icon {
  background-image: url('@/assets/specs/warlock-affliction.png');
}

.warlock.demonology .icon {
  background-image: url('@/assets/specs/warlock-demonology.png');
}

.warlock.destruction .icon {
  background-image: url('@/assets/specs/warlock-destruction.png');
}

.druid.restoration .icon {
  background-image: url('@/assets/specs/druid-restoration.png');
}

.druid.guardian .icon {
  background-image: url('@/assets/specs/druid-guardian.png');
}

.druid.feral .icon {
  background-image: url('@/assets/specs/druid-feral.png');
}

.druid.balance .icon {
  background-image: url('@/assets/specs/druid-balance.png');
}

.monk.mistweaver .icon {
  background-image: url('@/assets/specs/monk-mistweaver.png');
}

.monk.brewmaster .icon {
  background-image: url('@/assets/specs/monk-brewmaster.png');
}

.monk.windwalker .icon {
  background-image: url('@/assets/specs/monk-windwalker.png');
}

.death_knight.blood .icon {
  background-image: url('@/assets/specs/death-knight-blood.png');
}

.death_knight.frost .icon {
  background-image: url('@/assets/specs/death-knight-frost.png');
}

.death_knight.unholy .icon {
  background-image: url('@/assets/specs/death-knight-unholy.png');
}

.hunter.marksmanship .icon {
  background-image: url('@/assets/specs/hunter-marskmanship.png');
}

.hunter.beast_master .icon {
  background-image: url('@/assets/specs/hunter-beast-master.png');
}

.hunter.survival .icon {
  background-image: url('@/assets/specs/hunter-survivle.png');
}

.shaman.elemental .icon {
  background-image: url('@/assets/specs/shaman-elemental.png');
}

.shaman.enhancement .icon {
  background-image: url('@/assets/specs/shaman-enhancement.png');
}

.shaman.restoration .icon {
  background-image: url('@/assets/specs/shaman-restoration.png');
}

.rogue.assasination .icon {
  background-image: url('@/assets/specs/rogue-assassination.png');
}

.rogue.outlaw .icon {
  background-image: url('@/assets/specs/rogue-outlaw.png');
}

.rogue.subtlety .icon {
  background-image: url('@/assets/specs/rogue-subtlety.png');
}

.evoker.devastation .icon {
  background-image: url('@/assets/specs/evoker-devastation.jpg');
}

.evoker.preservation .icon {
  background-image: url('@/assets/specs/evoker-preservation.jpg');
}
</style>
