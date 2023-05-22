import { GameClass, PlayerSpec, RaidRole } from '@/enums';
import { neltharion } from '@/data/aberius/bosses/neltharion';
import { Encounter } from '@/types/encounters';

export const normalNeltharion: Encounter = {
  name: neltharion.name,
  img: neltharion.image,
  defeated: true,
  datetime: '2023-09-14T19:44:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/AgfPdDRqv7JW3tc9#fight=last',
  pugs: {
    dps: 1,
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
      name: 'Горгонзол',
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
      name: 'Калючечка',
      class: GameClass.MAGE,
      spec: PlayerSpec.FIRE,
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
