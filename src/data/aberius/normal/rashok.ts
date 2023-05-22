import { GameClass, PlayerSpec, RaidRole } from '@/enums';
import { rashok } from '@/data/aberius/bosses/rashok';
import { Encounter } from '@/types/encounters';

export const normalRashok: Encounter = {
  name: rashok.name,
  img: rashok.image,
  defeated: true,
  datetime: '2023-09-14T16:35:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/AgfPdDRqv7JW3tc9#fight=10',
  pugs: {
    dps: 2,
  },
  participants: [
    {
      name: 'Абилиция',
      class: GameClass.DEATH_KNIGHT,
      spec: PlayerSpec.BLOOD,
      role: RaidRole.TANK,
    },
    {
      name: 'Диклонот',
      class: GameClass.PALADIN,
      spec: PlayerSpec.PROTECTION,
      role: RaidRole.TANK,
    },
    {
      name: 'Костяичик',
      class: GameClass.DEATH_KNIGHT,
      spec: PlayerSpec.FROST,
      role: RaidRole.DPS,
    },
    {
      name: 'Пэшнфруит',
      class: GameClass.DEATH_KNIGHT,
      spec: PlayerSpec.FROST,
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
      name: 'Дрифтмарк',
      class: GameClass.PALADIN,
      spec: PlayerSpec.RETRIBUTION,
      role: RaidRole.DPS,
    },
    {
      name: 'Кхуунт',
      class: GameClass.PALADIN,
      spec: PlayerSpec.RETRIBUTION,
      role: RaidRole.DPS,
    },
    {
      name: 'Маггрубер',
      class: GameClass.PALADIN,
      spec: PlayerSpec.RETRIBUTION,
      role: RaidRole.DPS,
    },
    {
      name: 'Санфели',
      class: GameClass.PRIEST,
      spec: PlayerSpec.SHADOW,
      role: RaidRole.DPS,
    },
    {
      name: 'Буригар',
      class: GameClass.SHAMAN,
      spec: PlayerSpec.ENHANCEMENT,
      role: RaidRole.DPS,
    },
    {
      name: 'Димзур',
      class: GameClass.DRUID,
      spec: PlayerSpec.RESOTRATION,
      role: RaidRole.HEALER,
    },
    {
      name: 'Яшермамочка',
      class: GameClass.EVOKER,
      spec: PlayerSpec.PRESERVATION,
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
