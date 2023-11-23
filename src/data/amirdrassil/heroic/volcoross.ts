import { Encounter } from '@/types/encounters';
import volcoross from '@/data/amirdrassil/bosses/volcoross';
import { GameClass, PlayerSpec, RaidRole } from '@/enums';

export const heroicVolcoross: Encounter = {
  name: volcoross.name,
  img: volcoross.image,
  defeated: true,
  datetime: '2023-05-13T18:44:00.000Z',
  warcraftLogsLink: 'https://ru.warcraftlogs.com/reports/ZdhpWAmxfzHb9w27#fight=last',
  participants: [
    {
      name: 'Расандра',
      class: GameClass.DEMON_HUNTER,
      role: RaidRole.TANK,
      spec: PlayerSpec.VENGEANCE,
    },
    {
      name: 'Альразраэль',
      class: GameClass.WARRIOR,
      role: RaidRole.TANK,
      spec: PlayerSpec.PROTECTION,
    },
    {
      name: 'Одинокаядх',
      class: GameClass.DEMON_HUNTER,
      role: RaidRole.DPS,
      spec: PlayerSpec.HAVOC,
    },
    {
      name: 'Уланси',
      class: GameClass.DEMON_HUNTER,
      role: RaidRole.DPS,
      spec: PlayerSpec.HAVOC,
    },
    {
      name: 'Бьорна',
      class: GameClass.DRUID,
      role: RaidRole.DPS,
      spec: PlayerSpec.BALANCE,
    },
    {
      name: 'Йсихик',
      class: GameClass.DRUID,
      role: RaidRole.DPS,
      spec: PlayerSpec.FERAL,
    },
    {
      name: 'Фаеван',
      class: GameClass.EVOKER,
      role: RaidRole.DPS,
      spec: PlayerSpec.AUGMENTER,
    },
    {
      name: 'Артрит',
      class: GameClass.HUNTER,
      role: RaidRole.DPS,
      spec: PlayerSpec.BEAST_MASTER,
    },
    {
      name: 'Кавадор',
      class: GameClass.HUNTER,
      role: RaidRole.DPS,
      spec: PlayerSpec.BEAST_MASTER,
    },
    {
      name: 'Потыканная',
      class: GameClass.HUNTER,
      role: RaidRole.DPS,
      spec: PlayerSpec.BEAST_MASTER,
    },
    {
      name: 'Протекшая',
      class: GameClass.HUNTER,
      role: RaidRole.DPS,
      spec: PlayerSpec.BEAST_MASTER,
    },
    {
      name: 'Майдмен',
      class: GameClass.PALADIN,
      role: RaidRole.DPS,
      spec: PlayerSpec.RETRIBUTION,
    },
    {
      name: 'Санфели',
      class: GameClass.PRIEST,
      role: RaidRole.DPS,
      spec: PlayerSpec.SHADOW,
    },
    {
      name: 'Теслостэрон',
      class: GameClass.ROGUE,
      role: RaidRole.DPS,
      spec: PlayerSpec.OUTLAW,
    },
    {
      name: 'Аттарсолокет',
      class: GameClass.WARLOCK,
      role: RaidRole.DPS,
      spec: PlayerSpec.DEMONOLOGY,
    },
    {
      name: 'Белыйветер',
      class: GameClass.DRUID,
      role: RaidRole.HEALER,
      spec: PlayerSpec.RESOTRATION,
    },
    {
      name: 'Диклонот',
      class: GameClass.PALADIN,
      role: RaidRole.HEALER,
      spec: PlayerSpec.HOLY,
    },
    {
      name: 'Мурдра',
      class: GameClass.PRIEST,
      role: RaidRole.HEALER,
      spec: PlayerSpec.DISCIPLINE,
    },
    {
      name: 'Нарранель',
      class: GameClass.PRIEST,
      role: RaidRole.HEALER,
      spec: PlayerSpec.HOLY,
    },
    {
      name: 'Шалимье',
      class: GameClass.SHAMAN,
      role: RaidRole.HEALER,
      spec: PlayerSpec.RESOTRATION,
    },
  ],
};
