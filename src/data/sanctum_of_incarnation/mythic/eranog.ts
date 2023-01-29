import {
  GameClass, PlayerSpec, RaidRole,
  VaultOfIncaratesBosses,
} from '@/enums';

import eranogImage from '@/assets/bosses/eranog2.png';

export const mythicEranog = {
  name: VaultOfIncaratesBosses.ERANOG,
  img: eranogImage,
  defeated: true,
  datetime: '2023-01-29T18:47:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/HDKPn9Fz6pQB2Cfk/#fight=last',
  participants: [
    {
      name: 'Мантагро',
      class: GameClass.DEATH_KNIGHT,
      spec: PlayerSpec.BLOOD,
      role: RaidRole.TANK,
    },
    {
      name: 'Котосварщица',
      class: GameClass.DEMON_HUNTER,
      spec: PlayerSpec.VENGEANCE,
      role: RaidRole.TANK,
    },
    {
      name: 'Илаз',
      class: GameClass.DEMON_HUNTER,
      spec: PlayerSpec.HAVOC,
      role: RaidRole.DPS,
    },
    {
      name: 'Прадол',
      class: GameClass.DEMON_HUNTER,
      spec: PlayerSpec.HAVOC,
      role: RaidRole.DPS,
    },
    {
      name: 'Талуэль',
      class: GameClass.DRUID,
      spec: PlayerSpec.BALANCE,
      role: RaidRole.DPS,
    },
    {
      name: 'Флса',
      class: GameClass.DRUID,
      spec: PlayerSpec.FERAL,
      role: RaidRole.DPS,
    },
    {
      name: 'Фаеван',
      class: GameClass.EVOKER,
      spec: PlayerSpec.DEVASTATION,
      role: RaidRole.DPS,
    },
    {
      name: 'Уайлен',
      class: GameClass.HUNTER,
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
    },
    {
      name: 'Калючечка',
      class: GameClass.MAGE,
      spec: PlayerSpec.FIRE,
      role: RaidRole.DPS,
    },
    {
      name: 'Фавония',
      class: GameClass.MAGE,
      spec: PlayerSpec.ARCANE,
      role: RaidRole.DPS,
    },
    {
      name: 'Чиркез',
      class: GameClass.MONK,
      spec: PlayerSpec.WINDWALKER,
      role: RaidRole.DPS,
    },
    {
      name: 'Йорданиэль',
      class: GameClass.PRIEST,
      spec: PlayerSpec.SHADOW,
      role: RaidRole.DPS,
    },
    {
      name: 'Санфели',
      class: GameClass.PRIEST,
      spec: PlayerSpec.SHADOW,
      role: RaidRole.DPS,
    },
    {
      name: 'Адастрис',
      class: GameClass.ROGUE,
      spec: PlayerSpec.ASSASINATION,
      role: RaidRole.DPS,
    },
    {
      name: 'Блэкфлэймх',
      class: GameClass.WARLOCK,
      spec: PlayerSpec.DEMONOLOGY,
      role: RaidRole.DPS,
    },
    {
      name: 'Эрикбладакс',
      class: GameClass.WARRIOR,
      spec: PlayerSpec.FURY,
      role: RaidRole.DPS,
    },
    {
      name: 'Дракондон',
      class: GameClass.EVOKER,
      spec: PlayerSpec.PRESERVATION,
      role: RaidRole.HEALER,
    },
    {
      name: 'Диклонот',
      class: GameClass.PALADIN,
      spec: PlayerSpec.HOLY,
      role: RaidRole.HEALER,
    },
    {
      name: 'Аллатариель',
      class: GameClass.PRIEST,
      spec: PlayerSpec.DISCIPLINE,
      role: RaidRole.HEALER,
    },
    {
      name: 'Мурдра',
      class: GameClass.PRIEST,
      spec: PlayerSpec.DISCIPLINE,
      role: RaidRole.HEALER,
    },
  ],
};
