import {
  GameClass, PlayerSpec, RaidRole,
} from '@/enums';
import { kazzara } from '@/data/aberius/bosses/kazzara';
import { Encounter } from '@/types/encounters';

export const heroicKazzara: Encounter = {
  name: kazzara.name,
  img: kazzara.image,
  defeated: true,
  datetime: '2023-09-20T17:19:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/Gwcfzm2NFZ798YgQ#fight=14',
  pugs: {
    tanks: 1,
    dps: 1,
  },
  participants: [
    {
      name: 'Дрифтмарк',
      class: GameClass.PALADIN,
      spec: PlayerSpec.PROTECTION,
      role: RaidRole.TANK,
    },
    {
      name: 'Блекрот',
      class: GameClass.DEATH_KNIGHT,
      spec: PlayerSpec.UNHOLY,
      role: RaidRole.DPS,
    },
    {
      name: 'Костяичик',
      class: GameClass.DEATH_KNIGHT,
      spec: PlayerSpec.FROST,
      role: RaidRole.DPS,
    },
    {
      name: 'Иолэнта',
      class: GameClass.DRUID,
      spec: PlayerSpec.FERAL,
      role: RaidRole.DPS,
    },
    {
      name: 'Горгонзол',
      class: GameClass.EVOKER,
      spec: PlayerSpec.DEVASTATION,
      role: RaidRole.DPS,
    },
    {
      name: 'Фаеван',
      class: GameClass.EVOKER,
      spec: PlayerSpec.DEVASTATION,
      role: RaidRole.DPS,
    },
    {
      name: 'Артрит',
      class: GameClass.HUNTER,
      spec: PlayerSpec.MARKSMANSHIP,
      role: RaidRole.DPS,
    },
    {
      name: 'Натянутая',
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
      name: 'Санфели',
      class: GameClass.PRIEST,
      spec: PlayerSpec.SHADOW,
      role: RaidRole.DPS,
    },
    {
      name: 'Немеснен',
      class: GameClass.ROGUE,
      spec: PlayerSpec.OUTLAW,
      role: RaidRole.DPS,
    },
    {
      name: 'Блэкфлеймх',
      class: GameClass.WARLOCK,
      spec: PlayerSpec.DEMONOLOGY,
      role: RaidRole.DPS,
    },
    {
      name: 'Яшермамочка',
      class: GameClass.EVOKER,
      spec: PlayerSpec.PRESERVATION,
      role: RaidRole.HEALER,
    },
    {
      name: 'Маггрубер',
      class: GameClass.PALADIN,
      spec: PlayerSpec.HOLY,
      role: RaidRole.HEALER,
    },
    {
      name: 'Мурдра',
      class: GameClass.PRIEST,
      spec: PlayerSpec.DISCIPLINE,
      role: RaidRole.HEALER,
    },
    {
      name: 'Нарранель',
      class: GameClass.PRIEST,
      spec: PlayerSpec.HOLY,
      role: RaidRole.HEALER,
    },
  ],
};
