import { Encounter } from '@/types/encounters';
import nymue from '@/data/amirdrassil/bosses/nymue';
import { GameClass, PlayerSpec, RaidRole } from '@/enums';

export const heroicNymue: Encounter = {
  name: nymue.name,
  img: nymue.image,
  defeated: true,
  datetime: '2023-12-03T18:43:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/kc2QY43PxNMjqd7g#fight=30',
  participants: [
    {
      name: 'Мантагро',
      spec: PlayerSpec.BLOOD,
      role: RaidRole.TANK,
      class: GameClass.DEATH_KNIGHT,
    },
    {
      name: 'Альразраэль',
      spec: PlayerSpec.PROTECTION,
      role: RaidRole.TANK,
      class: GameClass.WARRIOR,
    },
    {
      name: 'Бьорна',
      spec: PlayerSpec.BALANCE,
      role: RaidRole.DPS,
      class: GameClass.DRUID,
    },
    {
      name: 'Йсихик',
      spec: PlayerSpec.FERAL,
      role: RaidRole.DPS,
      class: GameClass.DRUID,
    },
    {
      name: 'Фаеван',
      spec: PlayerSpec.AUGMENTER,
      role: RaidRole.DPS,
      class: GameClass.EVOKER,
    },
    {
      name: 'Артрит',
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
      class: GameClass.HUNTER,
    },
    {
      name: 'Кавадор',
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
      class: GameClass.HUNTER,
    },
    {
      name: 'Ромуула',
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
      class: GameClass.HUNTER,
    },
    {
      name: 'Уайлен',
      spec: PlayerSpec.MARKSMANSHIP,
      role: RaidRole.DPS,
      class: GameClass.HUNTER,
    },
    {
      name: 'Кхуунт',
      spec: PlayerSpec.RETRIBUTION,
      role: RaidRole.DPS,
      class: GameClass.PALADIN,
    },
    {
      name: 'Санфели',
      spec: PlayerSpec.SHADOW,
      role: RaidRole.DPS,
      class: GameClass.PRIEST,
    },
    {
      name: 'Мерорин',
      spec: PlayerSpec.DEMONOLOGY,
      role: RaidRole.DPS,
      class: GameClass.WARLOCK,
    },
    {
      name: 'Белыйветер',
      spec: PlayerSpec.RESOTRATION,
      role: RaidRole.HEALER,
      class: GameClass.DRUID,
    },
    {
      name: 'Больмарел',
      spec: PlayerSpec.RESOTRATION,
      role: RaidRole.HEALER,
      class: GameClass.DRUID,
    },
    {
      name: 'Мурдра',
      spec: PlayerSpec.DISCIPLINE,
      role: RaidRole.HEALER,
      class: GameClass.PRIEST,
    },
    {
      name: 'Нарранель',
      spec: PlayerSpec.HOLY,
      role: RaidRole.HEALER,
      class: GameClass.PRIEST,
    },
  ],
};
