import { Encounter } from '@/types/encounters';
import tyndral from '@/data/amirdrassil/bosses/tyndral';
import { GameClass, PlayerSpec, RaidRole } from '@/enums';

export const heroicTyndral: Encounter = {
  name: tyndral.name,
  img: tyndral.image,
  defeated: true,
  datetime: '2023-12-10T18:36:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/KTbJpnDy38WrvXFd#fight=26',
  pugs: {
    healers: 2,
  },
  participants: [
    {
      name: 'Мантагро',
      spec: PlayerSpec.BLOOD,
      role: RaidRole.TANK,
      class: GameClass.DEATH_KNIGHT,
    },
    {
      name: 'Альразраэль',
      spec: PlayerSpec.PROTECTION,
      role: RaidRole.TANK,
      class: GameClass.WARRIOR,
    },
    {
      name: 'Тухлыйогурец',
      spec: PlayerSpec.FROST,
      role: RaidRole.DPS,
      class: GameClass.DEATH_KNIGHT,
    },
    {
      name: 'Сальтовпак',
      spec: PlayerSpec.HAVOC,
      role: RaidRole.DPS,
      class: GameClass.DEMON_HUNTER,
    },
    {
      name: 'Бьорна',
      spec: PlayerSpec.BALANCE,
      role: RaidRole.DPS,
      class: GameClass.DRUID,
    },
    {
      name: 'Фаеван',
      spec: PlayerSpec.AUGMENTER,
      role: RaidRole.DPS,
      class: GameClass.EVOKER,
    },
    {
      name: 'Артрит',
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
      class: GameClass.HUNTER,
    },
    {
      name: 'Гаганчик',
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
      class: GameClass.HUNTER,
    },
    {
      name: 'Кавадор',
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
      class: GameClass.HUNTER,
    },
    {
      name: 'Потыканная',
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
      class: GameClass.HUNTER,
    },
    {
      name: 'Кхуунт',
      spec: PlayerSpec.RETRIBUTION,
      role: RaidRole.DPS,
      class: GameClass.PALADIN,
    },
    {
      name: 'Майдмен',
      spec: PlayerSpec.RETRIBUTION,
      role: RaidRole.DPS,
      class: GameClass.PALADIN,
    },
    {
      name: 'Аттарсолокет',
      spec: PlayerSpec.DEMONOLOGY,
      role: RaidRole.DPS,
      class: GameClass.WARLOCK,
    },
    {
      name: 'Мурдра',
      spec: PlayerSpec.DISCIPLINE,
      role: RaidRole.HEALER,
      class: GameClass.PRIEST,
    },
    {
      name: 'Нарранель',
      spec: PlayerSpec.HOLY,
      role: RaidRole.HEALER,
      class: GameClass.PRIEST,
    },
  ],
};
