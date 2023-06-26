import { sarkareth } from '@/data/aberius/bosses/sarkareth';
import { Encounter } from '@/types/encounters';
import { GameClass, PlayerSpec, RaidRole } from '@/enums';

export const heroicSarkareth: Encounter = {
  name: sarkareth.name,
  img: sarkareth.image,
  defeated: true,
  datetime: '2023-06-25T18:01:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/b8Yck3NwKBGftZ9a#fight=last',
  pugs: {
    dps: 1,
  },
  participants: [
    {
      name: 'Мантагро',
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
      name: 'Риднар',
      class: GameClass.DEATH_KNIGHT,
      spec: PlayerSpec.FROST,
      role: RaidRole.DPS,
    },
    {
      name: 'Кенариель',
      class: GameClass.DRUID,
      spec: PlayerSpec.BALANCE,
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
      name: 'Кавадор',
      class: GameClass.HUNTER,
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
    },
    {
      name: 'Потыканная',
      class: GameClass.HUNTER,
      spec: PlayerSpec.BEAST_MASTER,
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
      name: 'Спейфаер',
      class: GameClass.SHAMAN,
      spec: PlayerSpec.ENHANCEMENT,
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
    {
      name: 'Шалимье',
      class: GameClass.SHAMAN,
      spec: PlayerSpec.RESOTRATION,
      role: RaidRole.HEALER,
    },
  ],
};
