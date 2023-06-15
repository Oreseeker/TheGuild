import { GameClass, PlayerSpec, RaidRole } from '@/enums';
import { neltharion } from '@/data/aberius/bosses/neltharion';
import { Encounter } from '@/types/encounters';

export const heroicNeltharion: Encounter = {
  name: neltharion.name,
  img: neltharion.image,
  defeated: true,
  datetime: '2023-06-11T19:45:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/QbAwPag3GvVWtBRX#fight=last',
  pugs: {
    tanks: 1,
  },
  participants: [
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
      name: 'Кавадор',
      class: GameClass.HUNTER,
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
    },
    {
      name: 'Пифпау',
      class: GameClass.HUNTER,
      spec: PlayerSpec.MARKSMANSHIP,
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
      name: 'Нингалла',
      class: GameClass.WARLOCK,
      spec: PlayerSpec.AFFLICTION,
      role: RaidRole.DPS,
    },
    {
      name: 'Белыйветер',
      class: GameClass.DRUID,
      spec: PlayerSpec.RESOTRATION,
      role: RaidRole.HEALER,
    },
    {
      name: 'Шедоурейн',
      class: GameClass.MONK,
      spec: PlayerSpec.MISTWEAVER,
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
