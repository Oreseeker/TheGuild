import { AberiusBosses } from '@/enums/aberius_bosses';
import datheaImage from '@/assets/bosses/vault_of_incarnates/dathea2.png';
import { GameClass, PlayerSpec, RaidRole } from '@/enums';
import { magmorax } from '@/data/aberius/bosses/magmorax';
import { Encounter } from '@/types/encounters';

export const heroicMagmorax: Encounter = {
  name: magmorax.name,
  img: magmorax.image,
  defeated: true,
  datetime: '2023-06-11T17:49:00.000Z',
  warcraftLogsLink: 'https://www.warcraftlogs.com/reports/QbAwPag3GvVWtBRX#fight=25',
  participants: [
    {
      name: 'Диклонот',
      class: GameClass.PALADIN,
      spec: PlayerSpec.PROTECTION,
      role: RaidRole.TANK,
    },
    {
      name: 'Хельгаль',
      class: GameClass.WARRIOR,
      spec: PlayerSpec.PROTECTION,
      role: RaidRole.TANK,
    },
    {
      name: 'Горгонзол',
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
      name: 'Хмеляга',
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
      name: 'Сонфарина',
      class: GameClass.SHAMAN,
      spec: PlayerSpec.ELEMENTAL,
      role: RaidRole.DPS,
    },
    {
      name: 'Дестромадам',
      class: GameClass.WARLOCK,
      spec: PlayerSpec.DEMONOLOGY,
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
  ],
};
