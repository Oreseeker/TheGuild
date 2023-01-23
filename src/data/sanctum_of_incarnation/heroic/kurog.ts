import {
  GameClass, PlayerSpec, RaidRole,
  VaultOfIncaratesBosses,
} from '@/enums';
import kurogImage from '@/assets/bosses/kurog2.png';

export const heroicKurog = {
  name: VaultOfIncaratesBosses.KUROG,
  img: kurogImage,
  defeated: true,
  datetime: '2022-01-21T20:07:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/p6Zd2N1kXghaBQYq#fight=20',
  pugs: {
    tanks: 1,
  },
  participants: [
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
      name: 'Визэриз',
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
      spec: PlayerSpec.DESTRUCTION,
      role: RaidRole.DPS,
    },
    {
      name: 'Эрикбладакс',
      class: GameClass.WARRIOR,
      spec: PlayerSpec.FURY,
      role: RaidRole.DPS,
    },
    {
      name: 'Больмарел',
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
  ],
};
