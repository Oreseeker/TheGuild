import {
  GameClass,
  PlayerSpec,
  RaidRole,
  VaultOfIncaratesBosses,
} from '@/enums';
import datheaImage from '@/assets/bosses/dathea.png';

export const normalDathea = {
  name: VaultOfIncaratesBosses.DATHEA,
  img: datheaImage,
  defeated: true,
  datetime: '2022-12-18T18:53:00.000Z',
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
      name: 'Фаеван',
      class: GameClass.EVOKER,
      spec: PlayerSpec.DEVASTATION,
      role: RaidRole.DPS,
    },
    {
      name: 'Хедшотик',
      class: GameClass.EVOKER,
      spec: PlayerSpec.DEVASTATION,
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
      name: 'Натянутая',
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
      name: 'Визэриз',
      class: GameClass.MONK,
      spec: PlayerSpec.WINDWALKER,
      role: RaidRole.DPS,
    },
    {
      name: 'Маггрубер',
      class: GameClass.PALADIN,
      spec: PlayerSpec.RETRIBUTION,
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
      name: 'Толморен',
      class: GameClass.SHAMAN,
      spec: PlayerSpec.ELEMENTAL,
      role: RaidRole.DPS,
    },
    {
      name: 'Блэкфлэймх',
      class: GameClass.WARLOCK,
      spec: PlayerSpec.DEMONOLOGY,
      role: RaidRole.DPS,
    },
    {
      name: 'Графическая',
      class: GameClass.WARLOCK,
      spec: PlayerSpec.DEMONOLOGY,
      role: RaidRole.DPS,
    },
    {
      name: 'Амброзиия',
      class: GameClass.EVOKER,
      spec: PlayerSpec.PRESERVATION,
      role: RaidRole.HEALER,
    },
    {
      name: 'Сефирот',
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
      name: 'Дримтэйл',
      class: GameClass.SHAMAN,
      spec: PlayerSpec.RESOTRATION,
      role: RaidRole.HEALER,
    },
  ],
};
