import {
  GameClass,
  PlayerSpec,
  RaidRole,
} from '@/enums';
import { diurna } from '@/data/sanctum_of_incarnation/bosses/diurna';
import { Encounter } from '@/types/encounters';

export const normalDiurna: Encounter = {
  name: diurna.name,
  img: diurna.image,
  defeated: true,
  datetime: '2022-12-25T16:46:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/DTkn1yf8La2GwJK6#fight=6',
  participants: [
    {
      name: 'Мантагро',
      class: GameClass.DEATH_KNIGHT,
      spec: PlayerSpec.BLOOD,
      role: RaidRole.TANK,
    },
    {
      name: 'Маггрубер',
      class: GameClass.PALADIN,
      spec: PlayerSpec.PROTECTION,
      role: RaidRole.TANK,
    },
    {
      name: 'Чарджкиса',
      class: GameClass.WARRIOR,
      spec: PlayerSpec.PROTECTION,
      role: RaidRole.TANK,
    },
    {
      name: 'Аригай',
      class: GameClass.DEATH_KNIGHT,
      spec: PlayerSpec.FROST,
      role: RaidRole.DPS,
    },
    {
      name: 'Макгрувер',
      class: GameClass.DEATH_KNIGHT,
      spec: PlayerSpec.FROST,
      role: RaidRole.DPS,
    },
    {
      name: 'Илаз',
      class: GameClass.DEMON_HUNTER,
      spec: PlayerSpec.HAVOC,
      role: RaidRole.DPS,
    },
    {
      name: 'Фаеван',
      class: GameClass.EVOKER,
      spec: PlayerSpec.DEVASTATION,
      role: RaidRole.DPS,
    },
    {
      name: 'Грушонычь',
      class: GameClass.HUNTER,
      spec: PlayerSpec.MARKSMANSHIP,
      role: RaidRole.DPS,
    },
    {
      name: 'Добрыйклыкач',
      class: GameClass.HUNTER,
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
    },
    {
      name: 'Кавадор',
      class: GameClass.HUNTER,
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
    },
    {
      name: 'Кхуун',
      class: GameClass.HUNTER,
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
    },
    {
      name: 'Уайлен',
      class: GameClass.HUNTER,
      spec: PlayerSpec.MARKSMANSHIP,
      role: RaidRole.DPS,
    },
    {
      name: 'Элуизка',
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
      name: 'Визэриз',
      class: GameClass.MONK,
      spec: PlayerSpec.WINDWALKER,
      role: RaidRole.DPS,
    },
    {
      name: 'Моргиус',
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
      name: 'Адастрис',
      class: GameClass.ROGUE,
      spec: PlayerSpec.ASSASINATION,
      role: RaidRole.DPS,
    },
    {
      name: 'Правнучка',
      class: GameClass.SHAMAN,
      spec: PlayerSpec.ELEMENTAL,
      role: RaidRole.DPS,
    },
    {
      name: 'Блэкфлеймх',
      class: GameClass.WARLOCK,
      spec: PlayerSpec.AFFLICTION,
      role: RaidRole.DPS,
    },
    {
      name: 'Эрикбладс',
      class: GameClass.WARRIOR,
      spec: PlayerSpec.FURY,
      role: RaidRole.DPS,
    },
    {
      name: 'Диклонот',
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
      name: 'Яшермамочка',
      class: GameClass.EVOKER,
      spec: PlayerSpec.PRESERVATION,
      role: RaidRole.HEALER,
    },
    {
      name: 'Дримтэйл',
      class: GameClass.SHAMAN,
      spec: PlayerSpec.RESOTRATION,
      role: RaidRole.HEALER,
    },
  ],
};
