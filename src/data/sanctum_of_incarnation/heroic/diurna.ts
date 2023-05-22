import {
  GameClass,
  PlayerSpec,
  RaidRole,
} from '@/enums';
import { Encounter } from '@/types/encounters';
import { diurna } from '@/data/sanctum_of_incarnation/bosses/diurna';

export const heroicDiurna: Encounter = {
  name: diurna.name,
  img: diurna.image,
  defeated: true,
  datetime: '2022-01-22T17:06:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/QfjpCG7LVPbnqXDz#fight=13',
  participants: [
    {
      name: 'Прадол',
      class: GameClass.DEMON_HUNTER,
      spec: PlayerSpec.VENGEANCE,
      role: RaidRole.TANK,
    },
    {
      name: 'Чарджкиса',
      class: GameClass.WARRIOR,
      spec: PlayerSpec.PROTECTION,
      role: RaidRole.TANK,
    },
    {
      name: 'Илаз',
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
      name: 'Анкороид',
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
      name: 'Кавадор',
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
      name: 'Фавония',
      class: GameClass.MAGE,
      spec: PlayerSpec.ARCANE,
      role: RaidRole.DPS,
    },
    {
      name: 'Денталли',
      class: GameClass.MONK,
      spec: PlayerSpec.WINDWALKER,
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
      name: 'Яшермамочка',
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
