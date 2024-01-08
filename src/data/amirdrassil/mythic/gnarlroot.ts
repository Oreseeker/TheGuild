import { Encounter } from '@/types/encounters';
import { gnarlroot } from '@/data/amirdrassil/bosses/gnarlroot';
import { GameClass, PlayerSpec, RaidRole } from '@/enums';

export const mythicGnarlroot: Encounter = {
  name: gnarlroot.name,
  img: gnarlroot.image,
  defeated: true,
  datetime: '2024-01-06T16:36:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/NMpa7xRkG2d8TF4A#fight=8',
  pugs: {
    healers: 1,
  },
  participants: [
    {
      name: 'Мантагро',
      spec: PlayerSpec.BLOOD,
      role: RaidRole.TANK,
      class: GameClass.DEATH_KNIGHT,
    },
    {
      name: 'Донрип',
      spec: PlayerSpec.VENGEANCE,
      role: RaidRole.TANK,
      class: GameClass.DEMON_HUNTER,
    },
    {
      name: 'Сальтовпак',
      spec: PlayerSpec.HAVOC,
      role: RaidRole.DPS,
      class: GameClass.DEMON_HUNTER,
    },
    {
      name: 'Бьорна',
      spec: PlayerSpec.BALANCE,
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
      name: 'Гаганчик',
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
      name: 'Мизу',
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
      class: GameClass.HUNTER,
    },
    {
      name: 'Потыканная',
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
      name: 'Фавония',
      spec: PlayerSpec.ARCANE,
      role: RaidRole.DPS,
      class: GameClass.MAGE,
    },
    {
      name: 'Кхуунт',
      spec: PlayerSpec.RETRIBUTION,
      role: RaidRole.DPS,
      class: GameClass.PALADIN,
    },
    {
      name: 'Майдмен',
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
      name: 'Адирей',
      spec: PlayerSpec.DESTRUCTION,
      role: RaidRole.DPS,
      class: GameClass.WARLOCK,
    },
    {
      name: 'Аттарсолокет',
      spec: PlayerSpec.DEMONOLOGY,
      role: RaidRole.DPS,
      class: GameClass.WARLOCK,
    },
    {
      name: 'Ровлырь',
      spec: PlayerSpec.MISTWEAVER,
      role: RaidRole.HEALER,
      class: GameClass.MONK,
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
