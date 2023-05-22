import {
  VaultOfIncaratesBosses,
} from '@/enums';
import raszagethImage from '@/assets/bosses/vault_of_incarnates/raszageth2.png';
import { Encounter } from '@/types/encounters';
import { raszageth } from '@/data/sanctum_of_incarnation/bosses/raszageth';

export const mythicRaszageth: Encounter = {
  name: raszageth.name,
  img: raszageth.image,
  defeated: false,
};
