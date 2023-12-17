import { Encounter } from '@/types/encounters';
import fyrakk from '@/data/amirdrassil/bosses/fyrakk';
import { GameClass, PlayerSpec, RaidRole } from '@/enums';

export const heroicFyrakk: Encounter = {
  name: fyrakk.name,
  img: fyrakk.image,
  defeated: true,
  datetime: '2023-12-17T18:55:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/m3KzkQgrh6w7LPpx#fight=last',
  pugs: {
    dps: 2,
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
      name: 'Сальтовпак',
      spec: PlayerSpec.HAVOC,
      role: RaidRole.DPS,
      class: GameClass.DEMON_HUNTER,
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
      name: 'Элуизка',
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
      class: GameClass.HUNTER,
    },
    {
      name: 'Фавония',
      spec: PlayerSpec.ARCANE,
      role: RaidRole.DPS,
      class: GameClass.MAGE,
    },
    {
      name: 'Кхуунт',
      spec: PlayerSpec.RETRIBUTION,
      role: RaidRole.DPS,
      class: GameClass.PALADIN,
    },
    {
      name: 'Санфели',
      spec: PlayerSpec.SHADOW,
      role: RaidRole.DPS,
      class: GameClass.PRIEST,
    },
    {
      name: 'Аттарсолокет',
      spec: PlayerSpec.DEMONOLOGY,
      role: RaidRole.DPS,
      class: GameClass.WARLOCK,
    },
    {
      name: 'Бьорна',
      spec: PlayerSpec.RESOTRATION,
      role: RaidRole.HEALER,
      class: GameClass.DRUID,
    },
    {
      name: 'Майдмен',
      spec: PlayerSpec.HOLY,
      role: RaidRole.HEALER,
      class: GameClass.PALADIN,
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
    {
      name: 'Теннебрисса',
      spec: PlayerSpec.DISCIPLINE,
      role: RaidRole.HEALER,
      class: GameClass.PRIEST,
    },
  ],
};
