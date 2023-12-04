import { Encounter } from '@/types/encounters';
import larodar from '@/data/amirdrassil/bosses/larodar';
import { GameClass, PlayerSpec, RaidRole } from '@/enums';

export const heroicLarodar: Encounter = {
  name: larodar.name,
  img: larodar.image,
  defeated: true,
  datetime: '2023-12-02T18:40:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/ywPAKzX8NTV7BMbd#fight=33',
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
      name: 'Больмарел',
      spec: PlayerSpec.BALANCE,
      role: RaidRole.DPS,
      class: GameClass.DRUID,
    },
    {
      name: 'Бьорна',
      spec: PlayerSpec.BALANCE,
      role: RaidRole.DPS,
      class: GameClass.DRUID,
    },
    {
      name: 'Йсихик',
      spec: PlayerSpec.FERAL,
      role: RaidRole.DPS,
      class: GameClass.DRUID,
    },
    {
      name: 'Флса',
      spec: PlayerSpec.FERAL,
      role: RaidRole.DPS,
      class: GameClass.DRUID,
    },
    {
      name: 'Артрит',
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
      name: 'Ромуула',
      spec: PlayerSpec.BEAST_MASTER,
      role: RaidRole.DPS,
      class: GameClass.HUNTER,
    },
    {
      name: 'Уайлен',
      spec: PlayerSpec.MARKSMANSHIP,
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
      name: 'Санфели',
      spec: PlayerSpec.SHADOW,
      role: RaidRole.DPS,
      class: GameClass.PRIEST,
    },
    {
      name: 'Мерорин',
      spec: PlayerSpec.DEMONOLOGY,
      role: RaidRole.DPS,
      class: GameClass.WARLOCK,
    },
    {
      name: 'Белыйветер',
      spec: PlayerSpec.RESOTRATION,
      role: RaidRole.HEALER,
      class: GameClass.DRUID,
    },
    {
      name: 'Вичкаспичка',
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
      name: 'Шалимье',
      spec: PlayerSpec.RESOTRATION,
      role: RaidRole.HEALER,
      class: GameClass.SHAMAN,
    },
  ],
};
