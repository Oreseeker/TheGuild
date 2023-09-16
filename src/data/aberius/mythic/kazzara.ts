import {
  GameClass, PlayerSpec, RaidRole,
} from '@/enums';
import { kazzara } from '@/data/aberius/bosses/kazzara';
import { Encounter } from '@/types/encounters';

export const mythicKazzara: Encounter = {
  name: kazzara.name,
  img: kazzara.image,
  defeated: true,
  datetime: '2022-12-18T18:53:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/JCtgfqk23WVxZNbh#fight=19',
  pugs: {
    dps: 3,
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
      name: 'Риднар',
      class: GameClass.DEATH_KNIGHT,
      spec: PlayerSpec.UNHOLY,
      role: RaidRole.DPS,
    },
    {
      name: 'Горгонзол',
      class: GameClass.EVOKER,
      spec: PlayerSpec.AUGMENTER,
      role: RaidRole.DPS,
    },
    {
      name: 'Фаеван',
      class: GameClass.EVOKER,
      spec: PlayerSpec.AUGMENTER,
      role: RaidRole.DPS,
    },
    {
      name: 'Гаганчик',
      class: GameClass.HUNTER,
      spec: PlayerSpec.MARKSMANSHIP,
      role: RaidRole.DPS,
    },
    {
      name: 'Гералблин',
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
      name: 'Депресдприст',
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
    {
      name: 'Шалимье',
      class: GameClass.SHAMAN,
      spec: PlayerSpec.RESOTRATION,
      role: RaidRole.HEALER,
    },
  ],
};
